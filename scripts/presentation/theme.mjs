import path from "node:path";

export const SLIDE = { width: 13.333, height: 7.5 };

export const COLORS = {
  background: "0A0F1E",
  backgroundAlt: "111827",
  surface: "1E2A45",
  text: "E8EDF5",
  muted: "8A9BB8",
  accent: "00C8FF",
  line: "153A55",
  lineStrong: "245C7B",
};

export const FONTS = {
  heading: "Manrope",
  body: "Inter",
  technical: "IBM Plex Mono",
};

export function presentationAssets(projectRoot) {
  return {
    logo: path.join(projectRoot, "public", "logo-merilight.svg"),
    mark: path.join(projectRoot, "public", "favicon.svg"),
    wafer: path.join(projectRoot, "public", "images", "wafer-dies.jpg"),
    serviceIcons: [
      path.join(projectRoot, "src", "assets", "service-icons", "system-architecture.svg"),
      path.join(projectRoot, "src", "assets", "service-icons", "prototype-integration.svg"),
      path.join(projectRoot, "src", "assets", "service-icons", "automated-test.svg"),
    ],
  };
}

function placeholder(name, type, x, y, w, h, options = {}, text = "Click to edit") {
  return {
    placeholder: {
      options: {
        name,
        type,
        x,
        y,
        w,
        h,
        margin: 0,
        fontFace: type === "title" ? FONTS.heading : FONTS.body,
        color: COLORS.text,
        fit: "shrink",
        valign: "top",
        ...options,
      },
      text,
    },
  };
}

function line(x, y, w, color = COLORS.lineStrong, width = 1) {
  return { line: { x, y, w, h: 0, line: { color, width } } };
}

function rect(x, y, w, h) {
  return {
    rect: {
      x,
      y,
      w,
      h,
      fill: { color: COLORS.surface },
      line: { color: COLORS.line, width: 0.8 },
      radius: 0,
    },
  };
}

function label(text, x, y, w = 3.5, color = COLORS.accent) {
  return {
    text: {
      text,
      options: {
        x,
        y,
        w,
        h: 0.22,
        margin: 0,
        fontFace: FONTS.technical,
        fontSize: 7.5,
        bold: true,
        charSpacing: 2.1,
        color,
      },
    },
  };
}

function commonObjects(assets, labelText = "MERILIGHT") {
  return [
    label(labelText, 0.72, 0.42, 3.8),
    line(0.72, 0.78, 11.88),
    { image: { path: assets.mark, x: 12.12, y: 6.87, w: 0.42, h: 0.42 } },
  ];
}

function featureObjects(assets) {
  return [
    line(0.72, 0.55, 4.3, COLORS.accent, 1.5),
    { image: { path: assets.logo, x: 9.82, y: 0.34, w: 2.8, h: 0.86 } },
  ];
}

function slideNumber() {
  return {
    x: 11.35,
    y: 7.02,
    w: 0.55,
    h: 0.18,
    align: "right",
    margin: 0,
    fontFace: FONTS.technical,
    fontSize: 7,
    color: COLORS.muted,
  };
}

function defineMaster(pptx, title, objects, numbered = true) {
  pptx.defineSlideMaster({
    title,
    background: { color: COLORS.background },
    objects,
    slideNumber: numbered ? slideNumber() : undefined,
  });
}

export function defineMerilightMasters(pptx, assets) {
  defineMaster(pptx, "MERILIGHT_COVER", [
    ...featureObjects(assets),
    placeholder("cover-title", "title", 0.72, 2.12, 9.8, 1.62, { fontSize: 34, valign: "mid" }, "Presentation title"),
    placeholder("cover-subtitle", "body", 0.75, 4.05, 7.5, 0.72, { fontSize: 16, color: COLORS.muted }, "Audience, engagement, or date"),
    label("OPTICAL SYSTEMS ENGINEERING", 0.75, 6.72, 4.2),
  ], false);

  defineMaster(pptx, "MERILIGHT_TITLE", [
    ...commonObjects(assets),
    placeholder("title", "title", 0.72, 1.28, 10.8, 0.82, { fontSize: 27 }, "Slide title"),
    placeholder("subtitle", "body", 0.74, 2.27, 8.2, 0.52, { fontSize: 14, color: COLORS.muted }, "Optional supporting sentence"),
    line(0.74, 3.08, 2.25, COLORS.accent, 1.5),
  ]);

  defineMaster(pptx, "MERILIGHT_SECTION", [
    ...featureObjects(assets),
    label("SECTION", 0.75, 2.07, 2.2),
    placeholder("section-title", "title", 0.72, 2.58, 9.7, 1.2, { fontSize: 32, valign: "mid" }, "Section title"),
    placeholder("section-subtitle", "body", 0.75, 4.18, 7.5, 0.75, { fontSize: 15, color: COLORS.muted }, "Frame the next part of the presentation"),
  ], false);

  defineMaster(pptx, "MERILIGHT_STATEMENT", [
    ...commonObjects(assets, "POINT OF VIEW"),
    { rect: { x: 0.75, y: 1.52, w: 0.04, h: 3.6, fill: { color: COLORS.accent }, line: { transparency: 100 } } },
    placeholder("statement", "title", 1.08, 1.72, 10.7, 2.75, { fontSize: 30, valign: "mid" }, "One clear statement"),
    placeholder("statement-detail", "body", 1.1, 5.02, 8.5, 0.72, { fontSize: 13, color: COLORS.muted }, "A short line of evidence or context"),
  ]);

  defineMaster(pptx, "MERILIGHT_CONTENT", [
    ...commonObjects(assets),
    placeholder("content-title", "title", 0.72, 1.08, 10.8, 0.68, { fontSize: 24 }, "Slide title"),
    placeholder("content-body", "body", 0.75, 2.08, 10.9, 3.95, { fontSize: 16, bullet: { type: "bullet" }, paraSpaceAfterPt: 14 }, "Add the main content here"),
  ]);

  defineMaster(pptx, "MERILIGHT_TWO_COLUMN", [
    ...commonObjects(assets),
    placeholder("two-title", "title", 0.72, 1.08, 10.8, 0.68, { fontSize: 24 }, "Slide title"),
    rect(0.72, 2.08, 5.72, 3.95),
    rect(6.72, 2.08, 5.88, 3.95),
    { rect: { x: 0.72, y: 2.08, w: 0.04, h: 3.95, fill: { color: COLORS.accent }, line: { transparency: 100 } } },
    { rect: { x: 6.72, y: 2.08, w: 0.04, h: 3.95, fill: { color: COLORS.accent }, line: { transparency: 100 } } },
    placeholder("left-heading", "body", 1.02, 2.47, 4.8, 0.45, { fontFace: FONTS.heading, fontSize: 17 }, "Left heading"),
    placeholder("left-body", "body", 1.02, 3.18, 4.75, 2.15, { fontSize: 13, color: COLORS.muted }, "Left content"),
    placeholder("right-heading", "body", 7.02, 2.47, 4.85, 0.45, { fontFace: FONTS.heading, fontSize: 17 }, "Right heading"),
    placeholder("right-body", "body", 7.02, 3.18, 4.82, 2.15, { fontSize: 13, color: COLORS.muted }, "Right content"),
  ]);

  const columns = [0.72, 4.72, 8.72].flatMap((x, index) => [
    rect(x, 2.08, 3.72, 4.25),
    { rect: { x, y: 2.08, w: 3.72, h: 0.04, fill: { color: COLORS.accent }, line: { transparency: 100 } } },
    label(`0${index + 1}`, x + 0.28, 2.38, 0.65),
    placeholder(`column-${index + 1}-heading`, "body", x + 0.28, 2.88, 3.05, 0.72, { fontFace: FONTS.heading, fontSize: 15.5 }, `Column ${index + 1}`),
    placeholder(`column-${index + 1}-body`, "body", x + 0.28, 3.9, 3.05, 1.65, { fontSize: 11.5, color: COLORS.muted }, "Short supporting copy"),
  ]);
  defineMaster(pptx, "MERILIGHT_THREE_COLUMN", [
    ...commonObjects(assets),
    placeholder("three-title", "title", 0.72, 1.08, 10.8, 0.68, { fontSize: 24 }, "Slide title"),
    ...columns,
  ]);

  const metrics = [0.72, 4.72, 8.72].flatMap((x, index) => [
    line(x, 2.22, 3.35, index === 0 ? COLORS.accent : COLORS.lineStrong, index === 0 ? 2 : 1),
    placeholder(`metric-${index + 1}-value`, "body", x, 2.72, 3.35, 1, { fontFace: FONTS.heading, fontSize: 31 }, "00+"),
    placeholder(`metric-${index + 1}-label`, "body", x, 4.02, 3.35, 0.8, { fontSize: 12, color: COLORS.muted }, "Metric label"),
  ]);
  defineMaster(pptx, "MERILIGHT_METRICS", [
    ...commonObjects(assets, "EVIDENCE"),
    placeholder("metrics-title", "title", 0.72, 1.08, 10.8, 0.68, { fontSize: 24 }, "Proof at a glance"),
    ...metrics,
  ]);

  defineMaster(pptx, "MERILIGHT_IMAGE_COPY", [
    ...commonObjects(assets, "CONTEXT"),
    { rect: { x: 0.72, y: 1.18, w: 6.3, h: 5.35, fill: { color: COLORS.backgroundAlt }, line: { color: COLORS.lineStrong, width: 0.8, dash: "dash" } } },
    label("IMAGE AREA", 0.92, 6.15, 1.4, COLORS.muted),
    placeholder("image-title", "title", 7.62, 1.42, 4.65, 1.08, { fontSize: 23 }, "Image-led title"),
    placeholder("image-body", "body", 7.65, 2.98, 4.5, 2.1, { fontSize: 13.5, color: COLORS.muted }, "Supporting copy"),
    placeholder("image-caption", "body", 7.65, 5.62, 4.5, 0.46, { fontFace: FONTS.technical, fontSize: 8, color: COLORS.accent }, "Caption or source"),
  ]);

  const steps = [1.25, 4.67, 8.08, 11.08].flatMap((x, index) => [
    { ellipse: { x: x - 0.12, y: 3.16, w: 0.24, h: 0.24, fill: { color: index === 0 ? COLORS.accent : COLORS.surface }, line: { color: COLORS.accent, width: 1.2 } } },
    label(`0${index + 1}`, x - 0.12, 2.52, 0.55),
    placeholder(`step-${index + 1}`, "body", x - 0.12, 3.78, 2.35, 0.52, { fontFace: FONTS.heading, fontSize: 13.5 }, `Step ${index + 1}`),
    placeholder(`step-${index + 1}-detail`, "body", x - 0.12, 4.54, 2.25, 0.95, { fontSize: 10.5, color: COLORS.muted }, "What happens here"),
  ]);
  defineMaster(pptx, "MERILIGHT_PROCESS", [
    ...commonObjects(assets, "PROCESS"),
    placeholder("process-title", "title", 0.72, 1.08, 10.8, 0.68, { fontSize: 24 }, "A clear sequence"),
    line(1.25, 3.28, 10.25, COLORS.lineStrong, 1.5),
    ...steps,
  ]);

  defineMaster(pptx, "MERILIGHT_TECHNICAL", [
    ...commonObjects(assets, "SYSTEM VIEW"),
    placeholder("technical-title", "title", 0.72, 1.08, 10.8, 0.68, { fontSize: 24 }, "Architecture or case-study title"),
    { rect: { x: 0.72, y: 2.02, w: 8.05, h: 4.35, fill: { color: COLORS.backgroundAlt }, line: { color: COLORS.lineStrong, width: 0.8 } } },
    placeholder("technical-summary", "body", 9.22, 2.18, 3.05, 1.35, { fontSize: 12.5, color: COLORS.muted }, "Interpretation of the diagram"),
    line(9.22, 3.93, 2.65, COLORS.accent, 1.5),
    placeholder("technical-proof", "body", 9.22, 4.32, 3.05, 1.35, { fontSize: 11.5 }, "Result or design implication"),
  ]);

  defineMaster(pptx, "MERILIGHT_CLOSING", [
    ...featureObjects(assets),
    label("NEXT STEP", 0.75, 1.7, 2.2),
    placeholder("closing-title", "title", 0.72, 2.2, 9.4, 1.18, { fontSize: 31 }, "Closing thought or invitation"),
    placeholder("closing-detail", "body", 0.75, 3.72, 7.4, 0.8, { fontSize: 14, color: COLORS.muted }, "One practical next step"),
    { text: { text: "info@merilight.com  |  merilight.com", options: { x: 0.75, y: 5.82, w: 5.8, h: 0.3, margin: 0, fontFace: FONTS.technical, fontSize: 10, color: COLORS.accent } } },
  ], false);
}