# Site imagery — sourcing guide

Slots are wired in `src/data/images.js`; drop files in this folder and point
the slot at `/images/<name>`. Every slot is optional and degrades gracefully.

**Everything currently here is a placeholder** — free-licence stock picked for
visual impact and topical fit, not final art. Swap any of it freely.

## Current images

| Slot | File | Subject | Source |
|---|---|---|---|
| `spaceRadarHero` | `earth-night.jpg` | Earth at night from orbit, city lights | [Unsplash](https://unsplash.com/license) (NASA) |
| `aboutSide` | `wafer-dies.jpg` | Wafer die macro, gold/orange | [Unsplash](https://unsplash.com/license) |
| `workBanner` | `orbital-hardware.jpg` | Cygnus capsule on the ISS robotic arm | [NASA](https://images.nasa.gov) (public domain) |
| `servicesBanner` | `fiber-switch.jpg` | OM3 fibre jumpers in SFP cages | [Unsplash](https://unsplash.com/license) |
| `insarFigure` | `insar-interferogram.jpg` | Phase-wrapped InSAR interferogram | [NASA PIA02713](https://images.nasa.gov) (public domain) |
| `lidarHero` | *unsourced* | Night highway / city-lights long exposure | [Unsplash](https://unsplash.com/s/photos/night-highway-long-exposure) · [Pexels](https://www.pexels.com/search/night%20highway/) |

## Rendering — you do not need to match the palette

Photographs render through `components/ThemedImage.jsx`, which desaturates the
image and lays a cyan-into-navy scrim plus a faint scanline over it, so stock
imagery reads as part of the site instead of pasted onto it. A slow cyan sweep
animates across, echoing the LiDAR sweep; it is dropped entirely under
`prefers-reduced-motion`. Case-study hero backdrops use `casestudy/HeroPhoto.jsx`
instead, which gradient-masks into the page.

Practical consequence: **choose for subject, not for colour.** The treatment
handles the palette. Dark or low-contrast originals still need the least work,
and images with large areas of flat sky or shadow give headlines somewhere to sit.

## Choosing well

- **No CGI or artist's concepts.** The site's argument is technical credibility;
  a rendered glowing chip undermines it where a real wafer under a probe
  station reinforces it. This is why the NASA Mars artist's concept was cut.
- **Macro over wide.** Connectors, fibre ends, wafer edges are abstract enough
  to be decorative, specific enough to be real, and crop well.
- **Watch the message, not just the look.** A photo of blue RJ45 patch cables
  matches the palette beautifully and still says "IT networking" rather than
  "optical systems". It was cut for that reason.
- **No identifiable people, no third-party logos.** Faces need model releases;
  logos are a trademark headache.

## Preparation

- Resize to ≤1920 px on the long edge; aim for ≤400 KB
- Noisy subjects (SAR speckle, sensor grain) compress badly — drop JPEG quality
  or dimensions further rather than shipping a 500 KB decorative image
- No ImageMagick or `sharp` is installed in this repo. On Windows, PowerShell's
  `System.Drawing` does the job without adding a dependency:
  `Add-Type -AssemblyName System.Drawing`, then draw into a resized `Bitmap`
  with `HighQualityBicubic` and save via the JPEG codec with a quality
  `EncoderParameter`. Otherwise [squoosh.app](https://squoosh.app) is fine.
- After adding a file, update the slot in `src/data/images.js`

Licences: the [Unsplash License](https://unsplash.com/license) allows free
commercial use without attribution. NASA imagery is public domain.
