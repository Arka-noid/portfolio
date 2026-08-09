# Site imagery — sourcing guide

Slots are wired in `src/data/images.js`; drop files in this folder and point
the slot at `/images/<name>`. Every slot is optional and degrades gracefully.

## Recommended images (all free for commercial use, no attribution required)

| Slot | Target file | What to look for | Where |
|---|---|---|---|
| `spaceRadarHero` | `earth.jpg` | Earth from orbit, dark limb | [NASA Image Library](https://images.nasa.gov/search?q=blue%20marble) (public domain) — currently hotlinked to PIA18033 |
| `lidarHero` | `night-road.jpg` | Night highway / city-lights long exposure, dark & moody | [Unsplash](https://unsplash.com/s/photos/night-highway-long-exposure) · [Pexels](https://www.pexels.com/search/night%20highway/) |
| `aboutSide` | `chip-macro.jpg` | Photonic chip / fiber-optic macro, dark background | [Unsplash](https://unsplash.com/s/photos/fiber-optic-macro) · [Pexels](https://www.pexels.com/search/microchip%20macro/) |

Licenses: the [Unsplash License](https://unsplash.com/license) and
[Pexels License](https://www.pexels.com/license/) allow free commercial use
without attribution. NASA imagery is public domain. Avoid images containing
identifiable people or third-party logos.

## Preparation

- Resize to ≤1920 px on the long edge; aim for ≤400 KB (e.g. [squoosh.app](https://squoosh.app), JPEG quality ~70 or WebP)
- Dark, low-contrast originals blend best — the site dims and gradient-masks
  images into the navy palette automatically
- After adding a file, update the slot in `src/data/images.js`
