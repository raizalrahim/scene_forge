# Natural run guide (measured from gemini_generated_video_a0754280.mp4)

Source: side view, steady run on a treadmill, fixed camera, plain background, 24 fps, figure about 655 px tall.

## The cycle
- One full cycle (two steps) = 10.8 frames = 0.45 s. That is 4.4 steps per second (about 267 per minute).
  This is faster than a natural jog (roughly 160 to 180 per minute), so the clip is a quick, light run.
- The loop is very consistent: one cycle differs from the next by 5.6, against 19 for a normal frame to frame change.
- 8 key frames are spaced evenly over one true cycle (1.35 frames apart), so an 8 frame loop closes cleanly.

## Numbers (as a share of body height, so they work for any character)
- Forward lean of the torso: about 8 degrees.
- Head bob: about 5% of body height.
- Foot spread: about 57% of body height at the widest, 21% at the narrowest.
- Arms: elbows bent about 90 degrees, fists near the chest, swinging opposite to the legs.
- A short moment where both feet are off the ground.

## Playback speed
- Frames per second for an N frame cycle = N / 0.45. For 8 frames about 18 fps, for 11 frames about 24 fps.

## Ground speed so the feet do not slide
- Tracked from the planted shoe on the treadmill: about 0.8 x the character's height per second (median of 30 to 32 tracks).
- The tracks vary a lot (about 0.1 to 0.9), so treat it as a starting point: a 220 px tall character suggests about 175 px/s for the layer it runs on. Tune by eye.

## Prompt text for any image generator
Side view, facing right, one steady run cycle in 8 poses. Slight forward lean of about 8 degrees, elbows bent at 90 degrees with the arms swinging opposite to the legs, a brief moment where both feet leave the ground. Same size in every frame, feet landing on one ground line.
