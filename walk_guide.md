# Natural walk guide (measured from man_walking.mp4)

Source: side view, in place, 30 fps, figure about 632 px tall.

## The cycle
- One full cycle (two steps) = 38 frames = 1.27 s. One step = 19 frames = 0.63 s (about 95 steps per minute).
- The loop closes cleanly: the last frame differs from the first less than a normal frame-to-frame change.
- Eight key phases, 4.75 source frames apart:
  1 Contact (feet furthest apart, heel strike) / 2 Down / 3 Passing (legs cross, body highest) / 4 Up
  5 Contact (other foot) / 6 Down / 7 Passing / 8 Up

## Numbers (as a share of body height, so they work for any character)
- Head bob: about 3% of body height. Lowest at contact, highest at passing.
- Head sway front to back: about 2%.
- Feet spread at contact: about 49% of body height. At passing: about 21%.
- Ground line: constant within 1 px, the planted foot never rises or sinks.
- Head top by phase (px, lower number = higher): 46, 42, 31, 31 | 47, 40, 31, 34

## Playback speed
- Frames per second for an N frame cycle = N / 1.27. For 8 frames about 6.3 fps, for 16 frames about 12.6 fps (this is the 16 frame set).

## Ground speed so the feet do not slide
- Measured by tracking a planted shoe in the clip: about 0.44 x the character's height per second (15 tracks, tightly grouped).
  Example: a character 220 px tall on the stage suggests about 97 px/s for the layer it walks on.
  This replaces my earlier estimate of 0.77, which counted the length of the foot and was too high. Fine tune by eye.

## Prompt text for any image generator
Side view, facing right, one natural walk cycle in 8 poses: right foot contact, right foot down, right foot passing, right foot up, left foot contact, left foot down, left foot passing, left foot up. Head lowest at contact, highest at passing, arms swinging opposite to the legs, feet on one ground line, same size in every frame.
