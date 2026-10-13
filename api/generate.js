// Vercel serverless function: private proxy to the Gemini image API.
// Needs two environment variables: GEMINI_API_KEY and APP_PASSWORD.
const MODELS = ['gemini-3.1-flash-image', 'gemini-3-pro-image'];
const ASPECTS = ['1:1', '3:2', '2:3', '4:3', '3:4', '4:5', '5:4', '9:16', '16:9', '21:9'];
const SIZES = ['1K', '2K'];

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const pw = process.env.APP_PASSWORD, key = process.env.GEMINI_API_KEY;
  if (!pw || !key) return res.status(500).json({ error: 'Server is missing the APP_PASSWORD or GEMINI_API_KEY environment variable.' });
  if (req.headers['x-app-password'] !== pw) {
    await new Promise(r => setTimeout(r, 1000));
    return res.status(401).json({ error: 'Wrong password.' });
  }
  const b = req.body || {};
  const model = MODELS.includes(b.model) ? b.model : MODELS[0];
  const aspectRatio = ASPECTS.includes(b.aspect) ? b.aspect : '16:9';
  const imageSize = SIZES.includes(b.size) ? b.size : '1K';
  if (typeof b.prompt !== 'string' || !b.prompt.trim()) return res.status(400).json({ error: 'Missing prompt.' });
  const parts = [{ text: b.prompt.slice(0, 4000) }];
  if (typeof b.ref === 'string' && b.ref.length < 3000000) parts.push({ inlineData: { mimeType: 'image/jpeg', data: b.ref } });

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 55000);
  try {
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        contents: [{ role: 'user', parts }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'], imageConfig: { aspectRatio, imageSize } }
      })
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) return res.status(502).json({ error: 'Google API error ' + r.status + ': ' + ((j.error && j.error.message) || JSON.stringify(j).slice(0, 400)) });
    const cand = j.candidates && j.candidates[0];
    const out = ((cand && cand.content && cand.content.parts) || []);
    const img = out.find(p => p.inlineData || p.inline_data);
    if (!img) {
      const txt = out.map(p => p.text).filter(Boolean).join(' ').slice(0, 300);
      return res.status(502).json({ error: 'No image came back. finishReason=' + (cand && cand.finishReason) + (j.promptFeedback ? ' promptFeedback=' + JSON.stringify(j.promptFeedback) : '') + (txt ? ' text=' + txt : '') });
    }
    const d = img.inlineData || img.inline_data;
    return res.status(200).json({ image: d.data, mime: d.mimeType || d.mime_type || 'image/png' });
  } catch (e) {
    return res.status(504).json({ error: e.name === 'AbortError' ? 'Generation took longer than 55 seconds and was stopped.' : 'Request failed: ' + e.message });
  } finally { clearTimeout(timer); }
};
