import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import pptxgen from "pptxgenjs";

import {
  COLORS,
  FONTS,
  defineMerilightMasters,
  presentationAssets,
} from "./theme.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..", "..");
const outputDir = path.join(projectRoot, "artifacts");
const outputPath = path.join(outputDir, "merilight-master-deck.pptx");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Merilight";
pptx.company = "Merilight";
pptx.subject = "Reusable Merilight presentation master layouts";
pptx.title = "Merilight Master Deck";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: FONTS.heading,
  bodyFontFace: FONTS.body,
  lang: "en-US",
};

const assets = presentationAssets(projectRoot);
defineMerilightMasters(pptx, assets);

function fill(slide, placeholder, text) {
  slide.addText(text, { placeholder });
}

function galleryLabel(slide, masterName, guidance) {
  slide.addText(`${masterName}  |  ${guidance}`, {
    x: 0.75,
    y: 6.93,
    w: 9.8,
    h: 0.18,
    margin: 0,
    fontFace: FONTS.technical,
    fontSize: 6.5,
    color: COLORS.muted,
    charSpacing: 0.8,
  });
}

const cover = pptx.addSlide({ masterName: "MERILIGHT_COVER" });
fill(cover, "cover-title", "Merilight presentation system");
fill(cover, "cover-subtitle", "Reusable master layouts for concise, technical client presentations");
cover.addNotes("Layout: MERILIGHT_COVER. Use for the opening slide only. Keep the title to two lines or fewer.");

const titleSlide = pptx.addSlide({ masterName: "MERILIGHT_TITLE" });
fill(titleSlide, "title", "A quiet title slide for a single idea");
fill(titleSlide, "subtitle", "Use the open field for one chart, diagram, or piece of evidence.");
galleryLabel(titleSlide, "MERILIGHT_TITLE", "One idea with generous visual space");

const sectionSlide = pptx.addSlide({ masterName: "MERILIGHT_SECTION" });
fill(sectionSlide, "section-title", "From architecture to evidence");
fill(sectionSlide, "section-subtitle", "Use section dividers to reset the room before the next part of the argument.");
sectionSlide.addNotes("Layout: MERILIGHT_SECTION. Use between major sections, not between every slide.");

const statementSlide = pptx.addSlide({ masterName: "MERILIGHT_STATEMENT" });
fill(statementSlide, "statement", "Photonics rarely fails on paper. It fails in integration.");
fill(statementSlide, "statement-detail", "A point-of-view layout for the sentence the audience should remember.");
galleryLabel(statementSlide, "MERILIGHT_STATEMENT", "One memorable claim plus one support line");

const contentSlide = pptx.addSlide({ masterName: "MERILIGHT_CONTENT" });
fill(contentSlide, "content-title", "Use content slides sparingly");
fill(contentSlide, "content-body", "Lead with the decision, not the background\nKeep each line short enough to scan while listening\nMove detailed evidence into notes or an appendix");
galleryLabel(contentSlide, "MERILIGHT_CONTENT", "Three to five concise points");

const comparisonSlide = pptx.addSlide({ masterName: "MERILIGHT_TWO_COLUMN" });
fill(comparisonSlide, "two-title", "Compare two states, choices, or constraints");
fill(comparisonSlide, "left-heading", "Before the decision");
fill(comparisonSlide, "left-body", "What is uncertain\nWhat the team is waiting on\nWhat remains expensive to change");
fill(comparisonSlide, "right-heading", "After the decision");
fill(comparisonSlide, "right-body", "What becomes testable\nWhat can move in parallel\nWhat is ready to commit");
galleryLabel(comparisonSlide, "MERILIGHT_TWO_COLUMN", "Use parallel grammar on both sides");

const offersSlide = pptx.addSlide({ masterName: "MERILIGHT_THREE_COLUMN" });
fill(offersSlide, "three-title", "Three engagements, in programme order");
const offers = [
  ["PIC & optical system co-design", "Set the architecture before expensive choices become fixed."],
  ["Optoelectronic prototype integration", "Turn an isolated subsystem into hardware the team can operate."],
  ["Automated test & calibration", "Replace uncertain measurements with a repeatable bench."],
];
offers.forEach(([heading, body], index) => {
  fill(offersSlide, `column-${index + 1}-heading`, heading);
  fill(offersSlide, `column-${index + 1}-body`, body);
  offersSlide.addImage({
    path: assets.serviceIcons[index],
    x: 3.52 + index * 4,
    y: 5.62,
    w: 0.55,
    h: 0.4,
    altText: heading,
  });
});
galleryLabel(offersSlide, "MERILIGHT_THREE_COLUMN", "Keep markets and offers separate");

const metricsSlide = pptx.addSlide({ masterName: "MERILIGHT_METRICS" });
fill(metricsSlide, "metrics-title", "Proof at a glance");
[
  ["10+", "Years across the photonic stack"],
  ["32", "Peer-reviewed publications"],
  ["570+", "Citations"],
].forEach(([value, label], index) => {
  fill(metricsSlide, `metric-${index + 1}-value`, value);
  fill(metricsSlide, `metric-${index + 1}-label`, label);
});
galleryLabel(metricsSlide, "MERILIGHT_METRICS", "Only use figures supported by source data");

const imageSlide = pptx.addSlide({ masterName: "MERILIGHT_IMAGE_COPY" });
imageSlide.addImage({
  path: assets.wafer,
  x: 0.72,
  y: 1.18,
  w: 6.3,
  h: 5.35,
  sizing: { type: "cover", w: 6.3, h: 5.35 },
  altText: "Macro photograph of semiconductor wafer dies",
});
imageSlide.addShape(pptx.ShapeType.rect, {
  x: 0.72,
  y: 1.18,
  w: 6.3,
  h: 5.35,
  fill: { color: COLORS.background, transparency: 55 },
  line: { transparency: 100 },
});
fill(imageSlide, "image-title", "Use real hardware, chosen for subject");
fill(imageSlide, "image-body", "The image treatment creates visual continuity. It should never conceal whether the underlying subject is technically credible.");
fill(imageSlide, "image-caption", "Photo: Maxence Pira / Unsplash");
imageSlide.addNotes("Image credit: Maxence Pira, Unsplash photo 7hR3FrFs4Q0, used under the Unsplash License.");
galleryLabel(imageSlide, "MERILIGHT_IMAGE_COPY", "Replace both the image and visible credit");

const processSlide = pptx.addSlide({ masterName: "MERILIGHT_PROCESS" });
fill(processSlide, "process-title", "Show the programme moving forward");
const processSteps = [
  ["Architecture", "Set constraints and close the model."],
  ["Prototype", "Integrate optics, electronics, and control."],
  ["Validation", "Measure repeatably against requirements."],
  ["Handover", "Document the system another team will run."],
];
processSteps.forEach(([heading, body], index) => {
  fill(processSlide, `step-${index + 1}`, heading);
  fill(processSlide, `step-${index + 1}-detail`, body);
});
galleryLabel(processSlide, "MERILIGHT_PROCESS", "Use for sequence, not a generic timeline");

const technicalSlide = pptx.addSlide({ masterName: "MERILIGHT_TECHNICAL" });
fill(technicalSlide, "technical-title", "Keep architecture diagrams editable");
fill(technicalSlide, "technical-summary", "Use the side column to explain why the architecture matters, not to narrate every block.");
fill(technicalSlide, "technical-proof", "Highlight the constraint or result that changed the decision.");
const blocks = [
  [1.08, "OPTICAL INPUT"],
  [3.48, "PHOTONIC CORE"],
  [5.88, "READ-OUT"],
];
blocks.forEach(([x, label], index) => {
  technicalSlide.addShape(pptx.ShapeType.rect, {
    x,
    y: 3.23,
    w: 1.72,
    h: 0.88,
    fill: { color: index === 1 ? COLORS.surface : COLORS.background },
    line: { color: COLORS.accent, width: index === 1 ? 1.5 : 0.8 },
  });
  technicalSlide.addText(label, {
    x: x + 0.12,
    y: 3.54,
    w: 1.48,
    h: 0.2,
    margin: 0,
    align: "center",
    fontFace: FONTS.technical,
    fontSize: 7.2,
    bold: true,
    color: COLORS.text,
  });
  if (index < blocks.length - 1) {
    technicalSlide.addShape(pptx.ShapeType.chevron, {
      x: x + 1.9,
      y: 3.51,
      w: 0.32,
      h: 0.28,
      fill: { color: COLORS.accent },
      line: { transparency: 100 },
    });
  }
});
galleryLabel(technicalSlide, "MERILIGHT_TECHNICAL", "Use native shapes where practical");

const closingSlide = pptx.addSlide({ masterName: "MERILIGHT_CLOSING" });
fill(closingSlide, "closing-title", "Let's make the next decision concrete.");
fill(closingSlide, "closing-detail", "Close with one action: a review, a working session, or a scoped technical conversation.");
closingSlide.addNotes("Layout: MERILIGHT_CLOSING. Keep one next step. Do not add a second call to action.");

await mkdir(outputDir, { recursive: true });
await pptx.writeFile({ fileName: outputPath });
console.log(`Generated ${path.relative(projectRoot, outputPath)} with ${pptx._slides.length} gallery slides`);