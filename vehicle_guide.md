# Vehicle motion guide (measured from jeep_video.mp4)

Source: side view, a jeep driving in place on a road band, fixed camera, 24 fps, jeep about 612 px long and 247 px tall, wheels about 78 px across.

## Wheels
- The front wheel turns about 14 to 16 degrees per frame at 24 fps, close to one turn per second (0.93 turns/s). The rear wheel tracked noisily, so this is from the front wheel.
- The wheel has 5 spokes, so the picture repeats every 72 degrees. A looping sprite sheet should turn the wheel by a whole number of those repeats per loop.
  Example: 8 frames at 18 degrees per frame = 144 degrees = 2 repeats. 16 frames at 13.5 degrees = 216 degrees = 3 repeats.
- Scene Forge does this rounding for you from the Wheel turns/s, Frame rate and Spokes settings.

## Body bounce
- Steady bounce: about plus or minus 4 px, which is 1.7% of the jeep's height. It is not a clean rhythm: the strongest frequencies were spread between about 1.1 and 1.8 Hz.
- One larger bump in the clip (frames 76 to 95): the body lifts about 18 px (7% of its height), then settles about 12 px below its normal height over about one second.
- Pitch while driving steadily is under 0.2 degrees. The wheel line stays level.
- Dust puffs appear behind the wheels now and then. They are not part of the rig.

## What was not measured
- The ground does not scroll in this clip, so there is no ground speed to read from it.
- If the wheels roll without slipping, one turn per second means the vehicle moves one wheel circumference per second. A wheel 78 px across gives about 245 px per second at this size. For a different wheel size, speed = 2 x pi x wheel radius x turns per second.

## Using it in Scene Forge
1. Vehicle tab: generate one side-on vehicle (or upload your own), on a plain white background, facing right.
2. Check the green (wheel) and yellow (spinning part) circles. Press "Find the wheels" or click the two wheel centres yourself.
3. Pick 8 or 16 frames and a frame rate. Keep the yellow circle large enough to cover the rim and spokes, but inside the tyre.
4. Download the sheet, or use the Preview tab to see it in the scene (choose Vehicle in "Sprite in the preview").

## Limits
- Whole-picture bounce: the tyres move with the body, which is fine for small bounces. A large bump lifts the tyres off the ground slightly.
- Plain round hubcaps look the same at every angle, so their spin cannot be seen. Spokes and bolts show it.
- It spins the wheels on the side that faces the camera only.
