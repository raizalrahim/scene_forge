# Scene Forge (private version)

Generates parallax scene layers and a walking character sheet with the Gemini image API,
removes the backgrounds, makes the layers loop, and exports a zip.

## Files
- `index.html`  the whole app (runs in the browser)
- `api/generate.js`  small server function that holds your Google key and checks your password
- `vercel.json`, `package.json`  settings

## Deploy
1. Get a Gemini API key from Google AI Studio. Image output needs a paid plan, so set a
   budget alert and spending cap in your Google Cloud billing before testing.
2. Put this folder in a GitHub repo (or use the Vercel CLI) and import it in Vercel.
   No build command and no framework are needed.
3. In Vercel > Settings > Environment Variables add:
   - `GEMINI_API_KEY`  your Google key
   - `APP_PASSWORD`    any password you choose
4. Redeploy, open the site, type the password in the top right corner.

## Scene types
The Setup tab has a Scene type selector (Nature, Neon city). Each type rewrites the example text, the five layer descriptions and the default layer heights. To add a type, add an entry to `PRESETS` in `index.html` and an option to the `stype` select.

## Character sheet tips
If the walk jitters: press "Drop inconsistent frames" (frames outlined in red differ from their neighbours), or click frames to drop them one by one. An 8 frame sheet (4 x 2) usually gives the most consistent cycle.

## Vehicles
The Vehicle tab turns one side-on vehicle picture into a looping sprite sheet: the wheels spin and the body bounces, using numbers measured from a real clip (see vehicle_guide.md). Generate the vehicle with Gemini or upload your own.

## First test (cheap)
1. Setup tab: enter a theme, leave the rest, keep size at 1K.
2. Scene layers tab: press Generate on "Sky" only. Check it appears.
3. Generate "Far hills". Check the white is removed and the preview looks right.
4. Generate the rest, then the character sheet, then look at the Preview tab.
5. Download the zip and load the PNGs into your parallax app.

## If something fails
The red message under the card is Google's or the server's real error text.
Send it to Claude exactly as shown.

## Known limits
- Not tested against the live Gemini API by the author. The request fields in `api/generate.js`
  (`imageConfig.aspectRatio` and `imageSize`, model ids) may need small changes.
- Model names change. The allowed list is at the top of `api/generate.js`.
- Background removal only removes white that touches the image edge. White pockets
  fully enclosed by the subject (between branches, for example) stay.
- AI sprite sheets are often uneven. Check the frame count line under the sheet and regenerate if wrong.
- On a Vercel Hobby plan a slow generation can time out (limit set to 60 s in vercel.json).
- The password is a simple shared secret. Fine for a private tool, not for customers.
