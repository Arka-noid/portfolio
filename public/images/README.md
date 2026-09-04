# Site imagery — sourcing guide

Slots are wired in `src/data/images.js`; drop files in this folder and point
the slot at `/images/<name>`. Every slot is optional and degrades gracefully.

**Everything currently here is a placeholder** — stock or open-source imagery
picked for visual impact and topical fit, not final art. Do not assume an image
is reusable unless its row below names a verified licence.

Provenance was audited with Google Lens exact-match search and the linked source
pages on 2 September 2026. A search result is discovery evidence, not a licence;
only terms stated on the originating asset page are recorded as verified.

## Current images

| Slot | File | Subject | Creator · licence · source |
|---|---|---|---|
| `spaceRadarHero` | `earth-night.jpg` | Aurora and city lights over northern Europe and England from the ISS | ESA astronaut Samantha Cristoforetti · NASA ID `iss042e037793` · [NASA Image and Video Library source](https://images.nasa.gov/details/iss042e037793), photographed 13 December 2014 · [NASA Media Usage Guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) |
| `aboutSide` | `AgilentPhotonicSwitch.jpg` | Assembled 32x32 photonic switch — silica planar waveguides on silicon, crosspoint heaters | LieslHaliburton · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) · [Wikimedia Commons source](https://commons.wikimedia.org/wiki/File:AgilentPhotonicSwitch.jpg), uploaded 24 January 2017 |
| `workBanner` | `orbital-hardware.jpg` | Cygnus capsule on the ISS robotic arm | NASA · public-domain claim **not yet audited to an asset page** · [NASA Image and Video Library](https://images.nasa.gov) |
| `marketsBackdrop` | `fiber-switch.jpg` | OM3 fibre jumpers in SFP cages | **Unresolved.** Google Lens found many exact reposts but no originating asset page. |
| `servicesSide` | *unsourced* | Probe needle on a photonic die, or a fibre array butt-coupled to a chip edge — macro, real hardware | [Unsplash](https://unsplash.com/s/photos/semiconductor-probe-station) |
| `insarFigure` | `insar-interferogram.jpg` | Phase-wrapped InSAR interferogram | NASA/JPL-Caltech · public-domain claim **not yet audited to an asset page** · NASA image PIA02713 |
| `lidarHero` | *unsourced* | Night highway / city-lights long exposure | [Unsplash](https://unsplash.com/s/photos/night-highway-long-exposure) · [Pexels](https://www.pexels.com/search/night%20highway/) |

## Market card backdrops

The six market cards carry their own photo, wired as `image` in
`src/data/markets.js` rather than as a slot here — it belongs to the market,
not to a page position. Same rules apply; the card dims and tints whatever is
set, and a null `image` leaves the card on flat `--surface`.

| Market | File | Subject | Creator · licence · source |
|---|---|---|---|
| `ai-infrastructure` | `datacenter-racks.jpg` | Datacenter cold aisle, blue-lit racks | **Unresolved.** Google Lens found exact reposts dating to 2011 but no originating asset or licence page. |
| `telecom-optical-networks` | `optical-communications-1.jpg` | Illuminated optical-fibre bundle against black | Creator unresolved · historical FreeImages stock, commonly titled “Lighting effect” · [oldest confirmed use and FreeImages credit](https://www.phocuswire.com/Top-of-the-tech-pops-Blockchain-voice-bots-and-virtual-reality-finds-their-way), 12 December 2016 · **licence unresolved because FreeImages now redirects to iStock** |
| `space-defense` | `earth-night.jpg` | Aurora and city lights over northern Europe from the ISS | Samantha Cristoforetti · NASA ID `iss042e037793` · same NASA source and usage terms as `spaceRadarHero` above |
| `autonomous-sensing` | `lidar-point-cloud.png` | Ouster OS1-64 point cloud, Folsom/Dore St, San Francisco | Daniel L. Lu · [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · [Wikimedia Commons source](https://commons.wikimedia.org/wiki/File:Ouster_OS1-64_lidar_point_cloud_of_intersection_of_Folsom_and_Dore_St,_San_Francisco.png), created 3 December 2019 |
| `industrial-sensing` | `oil-gas.webp` | Gas flare at Preemraff Lysekil, Sweden | W.carter · [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) · [Wikimedia Commons source](https://commons.wikimedia.org/wiki/File:Gas_flare_on_top_of_a_flare_stack_at_Preemraff_Lysekil_4.jpg), photographed 25 June 2018 |
| `life-sciences-imaging` | `pulse-oximeter.jpg` | Pulse oximeter clipped to a finger — optical biosensing, no face | Engin Akyurt (`Engin_Akyurt`) · [Pixabay Content License](https://pixabay.com/service/license-summary/) · [Pixabay asset `8687775`](https://pixabay.com/es/photos/paciente-masculino-cuidado-8687775/), published 10 April 2024 |

Two caveats before this ships:

- **Replace or independently clear unresolved assets.** In particular,
  `datacenter-racks.jpg`, `fiber-switch.jpg` and `optical-communications-1.jpg`
  do not yet have a verified reusable licence.
- **NASA usage.** `earth-night.jpg` is an official NASA library asset with no
  third-party copyright notice on its asset page. NASA says its media are
  generally not subject to copyright in the United States and permits factual,
  informational website use. Credit NASA as the source and do not imply NASA
  endorsement; NASA names, identifiers and logos have separate restrictions.
- **Attribution.** The LiDAR point cloud requires credit to Daniel L. Lu, a link
  to CC BY 4.0, and an indication that this site resizes, crops, tints and
  overlays the image. The gas-flare image is CC0 and does not require credit,
  though its source is retained here. `AgilentPhotonicSwitch.jpg` is
  CC BY-SA 4.0 — same requirements, plus ShareAlike on any redistributed
  adaptation — so it carries a visible credit line on `/about`
  (`About.jsx`'s `caption` prop) rather than metadata-only attribution.
- `wafer-dies.jpg` is no longer wired to a slot (replaced by
  `AgilentPhotonicSwitch.jpg` on `aboutSide`) but is left in this folder
  unused rather than deleted.
- `lidar-point-cloud.png` is only 330 px wide, so it is upscaled on the card.
  The dimming hides most of that, but a larger frame would be better.

`earth-night.jpg` is deliberately reused rather than duplicated under a second
name.

## Published attribution metadata

Every content photograph has a record in `imageAttributions` in
`src/data/images.js`. The shared image renderers publish the available creator,
source, licence, asset ID, modification notice and provenance status as
`data-image-*` attributes on the corresponding DOM element. These attributes
are visible in the browser's live DOM inspector after React renders the page,
but add no visible text or layout to the site. They are not present in the raw
pre-hydration HTML returned by this SPA.

This metadata preserves provenance; it does not grant usage rights. An
unresolved record must still be cleared or replaced. Inspection-only metadata
may also be weaker than the attribution expected by CC BY 4.0, so the LiDAR
image should receive visible credit or be replaced with an asset that does not
require attribution before relying on it commercially.

## Rendering — you do not need to match the palette

Photographs render through `components/ThemedImage.jsx`, which desaturates the
image and lays a cyan-into-navy scrim plus a faint scanline over it, so stock
imagery reads as part of the site instead of pasted onto it. A slow cyan sweep
animates across, echoing the LiDAR sweep; it is dropped entirely under
`prefers-reduced-motion`. Case-study hero backdrops use `casestudy/HeroPhoto.jsx`
instead, which gradient-masks into the page.

Section backdrops use `components/SectionBackdrop.jsx`, which sits behind a
whole section at low opacity under a gradient mask — a photograph that is
present without being in the way. Unlike `HeroPhoto`, its gradient composites
with `var(--bg-rgb)`, so it follows a palette change rather than pinning itself
to the current navy.

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
commercial use without attribution. NASA content is used under the
[NASA Images and Media Usage Guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/);
NASA says its content is generally not subject to copyright in the United
States, but its identifiers and some third-party material have separate
restrictions.
