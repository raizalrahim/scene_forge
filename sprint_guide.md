# Natural sprint guide (measured from sprinting_video.mp4)

Source: side view, running in place on a plain light background, fixed camera, 24 fps, figure about 449 px tall.

## The cycle
- One full cycle (two steps) = 8.4 frames = 0.35 s. That is 5.7 steps per second (about 344 per minute).
  This is quicker than most real sprinters (about 270 to 300 per minute), so the clip is a very fast sprint.
- The 8 frame loop uses seven consecutive frames from the cleanest stretch plus one frame from a later cycle at the same point in the stride. This evens out the step sizes: the largest step is 1.45 x the smallest, against 1.90 x when I used eight consecutive frames, and the step across the loop point is the same size as the others.
- The clip is not equally clean everywhere: some stretches repeat almost exactly and others drift. I used the cleanest one.
- 16 frames are not available. Frames taken from different cycles jumped about twice as much as they should, so a 16 frame set would jitter.

## Numbers (as a share of body height, so they work for any character)
- Forward lean of the torso: about 26 degrees.
- Head bob: about 4% of body height.
- Foot spread: 86% of body height at the widest, 11% at the narrowest.
- Elbows bent about 90 degrees, arms driving opposite to the legs, knees lifting high, a brief moment where both feet are off the ground.

## Playback speed
- Frames per second for an N frame cycle = N / 0.35. For 8 frames about 23 fps.

## Ground speed so the feet do not slide
- Tracked from the shoe on the floor: about 2.3 x the character's height per second (30 consistent tracks, range about 2.0 to 2.5).
  Example: a character 220 px tall on the stage suggests about 505 px/s for the layer it runs on. Tune by eye.

## Known limits
- Real running has two head bobs per cycle (one per step). In this clip the head goes up and down only once per cycle, so the two steps do not look identical. This comes from the source video and cannot be fixed from one clip.
- At 8 frames per cycle the sprint is coarse. A clip at 60 fps or higher would give a smoother set.
- Play the loop at about 23 fps. At 10 fps (the default in some tools) it looks like slow motion and the feet slide against a moving ground.

## Prompt text for any image generator
Side view, facing right, one fast sprint cycle in 8 poses. Forward lean of about 26 degrees, elbows bent at 90 degrees with the arms driving opposite to the legs, knees lifting high, a brief moment where both feet leave the ground, legs opening wide. Same size in every frame, feet landing on one ground line.
