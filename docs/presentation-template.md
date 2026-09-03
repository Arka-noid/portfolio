# Merilight presentation template

The presentation source generates a PowerPoint-first, 16:9 master deck that is
also editable in LibreOffice Impress. It is a layout gallery, not a finished
sales presentation: duplicate the useful examples, replace their content, and
delete the rest.

## Build and validate

```bash
npm run deck:build
npm run deck:validate
```

The generated file is `artifacts/merilight-master-deck.pptx`. PowerPoint files
are intentionally ignored by Git; the generator, assets, and this guide are the
versioned source of truth.

The validator checks the OOXML package for all named layouts, editable
placeholders, the expected 16:9 canvas, embedded media, theme fonts, notes, and
external file relationships. It does not replace visual review in PowerPoint or
LibreOffice.

## Using the layouts

The deck contains one demonstration slide for each named layout:

| Layout | Use |
| --- | --- |
| `MERILIGHT_COVER` | Opening title and engagement context |
| `MERILIGHT_TITLE` | One idea with an open field for a chart or diagram |
| `MERILIGHT_SECTION` | A reset between major parts of the presentation |
| `MERILIGHT_STATEMENT` | One memorable point of view or conclusion |
| `MERILIGHT_CONTENT` | Three to five concise points |
| `MERILIGHT_TWO_COLUMN` | Before/after, option/option, or constraint/response |
| `MERILIGHT_THREE_COLUMN` | The three offer domains or another true set of three |
| `MERILIGHT_METRICS` | Up to three sourced proof points |
| `MERILIGHT_IMAGE_COPY` | One cleared technical image plus interpretation |
| `MERILIGHT_PROCESS` | A four-stage sequence |
| `MERILIGHT_TECHNICAL` | Editable system diagram, architecture, or case-study view |
| `MERILIGHT_CLOSING` | One practical next action and contact details |

In PowerPoint, use **Home > New Slide** or **Layout** to apply these masters.
The master-owned logo, rules, numbering, and guides can be changed under
**View > Slide Master**. To distribute it through PowerPoint's template picker,
open the generated deck and use **Save As > PowerPoint Template (`.potx`)**.

The dashed area on `MERILIGHT_IMAGE_COPY` is a guide. Add or replace the picture
as a normal picture object and send it behind the tint overlay. This is more
reliable across PowerPoint and Impress than programmatically populated picture
placeholders.

## Typography

The deck declares the same roles as the website:

- Manrope for display headings
- Inter for body copy
- IBM Plex Mono for technical labels and diagrams

Install these fonts before editing or presenting. The generated PowerPoint file
references them but does not embed font files. In PowerPoint, use **File >
Options > Save > Embed fonts in the file** before sending the deck to a machine
where the fonts may not be installed. Prefer embedding only the characters used
for a finished deck; embed all characters when recipients must edit it.

LibreOffice may substitute fonts if they are unavailable. Review line breaks,
diagram labels, and metric values after opening the deck in Impress.

## Authoring rules

The positioning source remains [positioning.md](positioning.md). In particular:

- Write in first person singular. Merilight is one engineer, not a team,
  studio, or agency.
- Keep the three engagements distinct from the six market doorways. A market is
  not a fourth offer.
- Present breadth as the ability to work across an integration boundary, not as
  a skills inventory.
- Use only proof points already supported by `src/data/`.
- Do not imply that employers, partners, or programmes are Merilight clients or
  endorse the practice.
- Keep live-pitch slides concise. Put qualification, source detail, and the
  spoken path through a diagram in speaker notes.

## Images and attribution

The base gallery uses only Merilight-owned artwork and the wafer photograph by
Maxence Pira under the Unsplash License. Its visible credit and source note must
be replaced when the image is replaced.

Do not reuse `datacenter-racks.jpg`, `fiber-switch.jpg`, or
`optical-communications-1.jpg` in an external deck unless their licences have
been independently cleared. The current image audit and source links are in
[the imagery guide](../public/images/README.md).

Use real hardware or measurement imagery where possible. Avoid CGI, generic IT
networking, identifiable people without releases, and third-party logos that
could imply endorsement. Crop for the subject first; the navy tint exists to
unify the image with the deck, not to disguise weak source material.

## Compatibility review

Before external use:

1. Rebuild and run `npm run deck:validate`.
2. Open the file in PowerPoint and confirm every named layout appears under
   **Layout**, placeholders remain editable, and master changes propagate.
3. Open the same file in LibreOffice Impress and check fonts, line wrapping,
   SVG artwork, image crops, and slide numbers.
4. Export the finished deck to PDF and inspect every page at presentation size.
5. Check image credits, confidentiality, named organisations, and every numeric
   claim before distribution.