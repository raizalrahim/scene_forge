# Natural sprint guide (measured from sprinting_man.mp4)

Source: side view, running in place, 30 fps, figure about 690 px tall, forward lean.

## The cycle
- One full cycle (two steps) = 10.8 frames = 0.36 s. That is 5.6 steps per second.
- The clip does not loop on a whole number of frames. The 11 frame set is slightly slow (3%). The 8 key frames are spaced evenly over one true cycle, so an 8 frame loop closes cleanly.
- Frames 2 and 3 (and 7 and 8) of the cycle are near duplicates in the source clip, so it is not a perfectly smooth video.

## Numbers (as a share of body height, so they work for any character)
- Forward lean of the torso: about 34 degrees (head ahead of the hips).
- Head bob: about 3.6% of body height.
- Foot spread: 91% of body height at the widest, 20% at the narrowest. Legs open much wider than in a walk.
- Arms: elbows bent about 90 degrees, driving opposite to the legs.
- Knees high, with a visible moment where both feet are off the ground.

## Playback speed
- Frames per second for an N frame cycle = N / 0.36. For 8 frames about 22 fps, for 11 frames about 30 fps.

## Ground speed (not measured)
- The planted foot touches the ground for only a frame or two in this clip, so the real ground speed could not be measured.
- Rule of thumb only: running covers about 2 to 5 x the character's height per second. Start near 3 and tune the ground layer speed until the feet stop sliding.

## Prompt text for any image generator
Side view, facing right, one fast run cycle in 8 poses. Strong forward lean of about 35 degrees, elbows bent at 90 degrees with the arms driving opposite to the legs, high knees, a flight phase where both feet leave the ground, legs opening wide. Same size in every frame, feet landing on one ground line.
