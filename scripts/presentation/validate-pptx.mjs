import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import JSZip from "jszip";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, "..", "..");
const deckPath = path.join(projectRoot, "artifacts", "merilight-master-deck.pptx");
const expectedLayouts = [
  "MERILIGHT_COVER",
  "MERILIGHT_TITLE",
  "MERILIGHT_SECTION",
  "MERILIGHT_STATEMENT",
  "MERILIGHT_CONTENT",
  "MERILIGHT_TWO_COLUMN",
  "MERILIGHT_THREE_COLUMN",
  "MERILIGHT_METRICS",
  "MERILIGHT_IMAGE_COPY",
  "MERILIGHT_PROCESS",
  "MERILIGHT_TECHNICAL",
  "MERILIGHT_CLOSING",
];

const archive = await JSZip.loadAsync(await readFile(deckPath));
const entryNames = Object.keys(archive.files);
const slideFiles = entryNames.filter((name) => /^ppt\/slides\/slide\d+\.xml$/.test(name));
const layoutFiles = entryNames.filter((name) => /^ppt\/slideLayouts\/slideLayout\d+\.xml$/.test(name));
const mediaFiles = entryNames.filter((name) => name.startsWith("ppt/media/"));
const noteFiles = entryNames.filter((name) => /^ppt\/notesSlides\/notesSlide\d+\.xml$/.test(name));
const failures = [];

if (slideFiles.length !== expectedLayouts.length) {
  failures.push(`Expected ${expectedLayouts.length} slides, found ${slideFiles.length}.`);
}

const customLayouts = new Map();
for (const layoutFile of layoutFiles) {
  const xml = await archive.file(layoutFile).async("string");
  const name = xml.match(/<p:cSld name="([^"]+)"/)?.[1];
  if (name?.startsWith("MERILIGHT_")) {
    customLayouts.set(name, xml);
  }
}

for (const layoutName of expectedLayouts) {
  const xml = customLayouts.get(layoutName);
  if (!xml) {
    failures.push(`Missing slide layout ${layoutName}.`);
  } else if (!xml.includes("<p:ph")) {
    failures.push(`Layout ${layoutName} has no editable placeholders.`);
  }
}

const xmlEntries = entryNames.filter((name) => name.endsWith(".xml") || name.endsWith(".rels"));
for (const entryName of xmlEntries) {
  const xml = await archive.file(entryName).async("string");
  if (xml.includes('TargetMode="External"')) {
    failures.push(`External relationship found in ${entryName}.`);
  }
}

const themeFile = entryNames.find((name) => /^ppt\/theme\/theme\d+\.xml$/.test(name));
const themeXml = themeFile ? await archive.file(themeFile).async("string") : "";
for (const font of ["Manrope", "Inter"]) {
  if (!themeXml.includes(`typeface="${font}"`)) {
    failures.push(`Theme does not declare ${font}.`);
  }
}

const presentationXml = await archive.file("ppt/presentation.xml").async("string");
if (!presentationXml.includes('cx="12192000" cy="6858000"')) {
  failures.push("Presentation is not standard 16:9 wide format.");
}

if (mediaFiles.length < 5) {
  failures.push(`Expected embedded brand and gallery media, found ${mediaFiles.length} files.`);
}
if (noteFiles.length < 4) {
  failures.push(`Expected usage and attribution notes, found ${noteFiles.length} note slides.`);
}

if (failures.length > 0) {
  throw new Error(`PPTX validation failed:\n- ${failures.join("\n- ")}`);
}

console.log(
  `Validated ${path.relative(projectRoot, deckPath)}: ` +
  `${slideFiles.length} slides, ${customLayouts.size} named layouts, ` +
  `${mediaFiles.length} embedded media files, ${noteFiles.length} note slides.`,
);