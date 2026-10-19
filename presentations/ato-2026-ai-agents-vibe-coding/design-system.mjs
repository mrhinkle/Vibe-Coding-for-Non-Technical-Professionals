export const D = {
  midnight: "#0B1426",
  deepSpace: "#07172D",
  ink: "#0F172A",
  slate: "#475569",
  blue: "#307FE2",
  electric: "#0055FF",
  lightBlue: "#66AAFF",
  orange: "#EF8B39",
  editorialOrange: "#B93800",
  green: "#22C55E",
  red: "#EF4444",
  ice: "#F2F6FC",
  softGray: "#FAFBFC",
  hairline: "#D8E2EF",
  mutedLine: "#94A3B8",
  white: "#FFFFFF",
};

const MAIN_KINDS = new Set(["textbox", "shape", "image", "table", "chart"]);

export function addText(slide, {
  text,
  left,
  top,
  width,
  height,
  fontSize = 20,
  color = D.ink,
  bold = false,
  typeface = "Montserrat",
  alignment = "left",
  name,
}) {
  const box = slide.shapes.add({
    geometry: "textbox",
    name,
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  box.text = text;
  box.text.style = { fontSize, typeface, color, bold, alignment };
  box.text.insets = 0;
  return box;
}
export function addPanel(slide, {
  left,
  top,
  width,
  height,
  fill = D.white,
  line = D.hairline,
  radius = 16,
  name,
}) {
  return slide.shapes.add({
    geometry: "roundRect",
    name,
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: line, width: 1 },
    borderRadius: radius,
  });
}

export function addNode(slide, {
  text,
  left,
  top,
  width,
  height = 64,
  fill = D.white,
  line = D.hairline,
  color = D.ink,
  fontSize = 18,
  radius = 14,
  name,
}) {
  const node = addPanel(slide, { left, top, width, height, fill, line, radius, name });
  addText(slide, {
    text,
    left: left + 8,
    top: top + 10,
    width: width - 16,
    height: Math.max(28, height - 20),
    fontSize,
    color,
    bold: true,
    typeface: "Montserrat",
    alignment: "center",
  });
  return node;
}

export function addDot(slide, {
  left,
  top,
  size = 14,
  fill = D.blue,
  line = fill,
}) {
  return slide.shapes.add({
    geometry: "ellipse",
    position: { left, top, width: size, height: size },
    fill,
    line: { style: "solid", fill: line, width: 1 },
  });
}

export function addBadge(slide, {
  text,
  left,
  top,
  width,
  fill = D.ice,
  line = D.hairline,
  color = D.slate,
}) {
  addPanel(slide, { left, top, width, height: 30, fill, line, radius: 15 });
  addText(slide, {
    text,
    left: left + 10,
    top: top + 7,
    width: width - 20,
    height: 18,
    fontSize: 12,
    color,
    bold: true,
    typeface: "Montserrat",
    alignment: "center",
  });
}

export function addHeader(slide, { eyebrow, time, title, flourish = false }) {
  addText(slide, {
    text: eyebrow,
    left: 68,
    top: 52,
    width: flourish ? 850 : 880,
    height: 24,
    fontSize: 14,
    color: D.blue,
    bold: true,
    typeface: "Montserrat",
  });
  addText(slide, {
    text: time,
    left: flourish ? 940 : 1035,
    top: 52,
    width: flourish ? 130 : 178,
    height: 24,
    fontSize: 12,
    color: D.mutedLine,
    typeface: "Montserrat",
    alignment: "right",
  });
  addText(slide, {
    text: title,
    left: 68,
    top: 91,
    width: 1145,
    height: 64,
    fontSize: 36,
    color: D.ink,
    bold: true,
    typeface: "Verdana",
  });
  if (flourish) addCornerFilament(slide);
}

export function addCornerFilament(slide) {
  const curves = [
    { y: 9, c: "#B7D5FF" },
    { y: 20, c: "#87B8FF" },
    { y: 31, c: "#F4C49B" },
  ];
  for (const { y, c } of curves) {
    slide.shapes.add({
      geometry: "custom",
      position: { left: 1090, top: y, width: 158, height: 42 },
      fill: "none",
      line: { style: "solid", fill: c, width: 1 },
      customPaths: [{
        width: 158,
        height: 42,
        commands: [
          { moveTo: { x: 0, y: 34 } },
          { cubicBezTo: { x1: 45, y1: 4, x2: 92, y2: 42, x: 158, y: 8 } },
        ],
      }],
    });
  }
  addDot(slide, { left: 1140, top: 27, size: 5, fill: D.blue });
  addDot(slide, { left: 1190, top: 20, size: 4, fill: D.orange });
  addDot(slide, { left: 1226, top: 35, size: 4, fill: D.blue });
}

export function connect(slide, from, to, {
  color = D.mutedLine,
  style = "solid",
  width = 1.25,
  kind = "straight",
  fromSide = "right",
  toSide = "left",
  arrow = true,
} = {}) {
  return slide.shapes.connect(from, to, {
    kind,
    fromSide,
    toSide,
    line: { style, fill: color, width },
    ...(arrow ? { tail: { type: "triangle", width: "sm", length: "sm" } } : {}),
    cap: "round",
    join: "round",
  });
}

export function clearMainContent(presentation, records, slideNumber) {
  const slideIndex = slideNumber - 1;
  const ids = records
    .filter((record) =>
      record.slideIndex === slideIndex &&
      MAIN_KINDS.has(record.kind) &&
      (record.position?.top ?? 0) < 640,
    )
    .map((record) => record.id);
  presentation.delete(ids);
}

function addRail(slide, nodes, {
  left = 78,
  top = 240,
  width = 1124,
  nodeWidth = 150,
  nodeHeight = 62,
  activeIndex = -1,
  liveIndex = -1,
  blockedIndex = -1,
  ghostAfter = -1,
  descriptions = [],
} = {}) {
  const gap = (width - nodeWidth * nodes.length) / Math.max(1, nodes.length - 1);
  const shapes = [];
  nodes.forEach((label, index) => {
    const x = left + index * (nodeWidth + gap);
    let fill = D.white;
    let line = D.hairline;
    let color = D.ink;
    if (index === activeIndex) {
      fill = D.orange;
      line = D.orange;
      color = D.white;
    }
    if (index === liveIndex) {
      fill = D.green;
      line = D.green;
      color = D.white;
    }
    if (index === blockedIndex) {
      fill = D.red;
      line = D.red;
      color = D.white;
    }
    if (ghostAfter >= 0 && index > ghostAfter) {
      fill = D.softGray;
      line = "#E7EDF5";
      color = D.mutedLine;
    }
    const node = addNode(slide, {
      text: label,
      left: x,
      top,
      width: nodeWidth,
      height: nodeHeight,
      fill,
      line,
      color,
      fontSize: label.length >= 13 ? 15 : 18,
    });
    shapes.push(node);
    if (descriptions[index]) {
      addText(slide, {
        text: descriptions[index],
        left: x - 4,
        top: top + nodeHeight + 18,
        width: nodeWidth + 8,
        height: 72,
        fontSize: 15,
        color: D.slate,
        typeface: "Montserrat",
        alignment: "center",
      });
    }
  });
  for (let i = 0; i < shapes.length - 1; i += 1) {
    if (ghostAfter >= 0 && i >= ghostAfter) continue;
    connect(slide, shapes[i], shapes[i + 1]);
  }
  return shapes;
}

function addDarkPrompt(slide, { text, left, top, width, height, label = "TYPE THIS, VERBATIM" }) {
  addPanel(slide, { left, top, width, height, fill: D.midnight, line: D.orange, radius: 14 });
  addText(slide, {
    text: label,
    left: left + 20,
    top: top + 18,
    width: width - 40,
    height: 18,
    fontSize: 12,
    color: D.orange,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    text,
    left: left + 20,
    top: top + 50,
    width: width - 40,
    height: height - 66,
    fontSize: 15,
    color: "#D7E0ED",
    typeface: "Courier New",
  });
}

function slide13(presentation, records) {
  clearMainContent(presentation, records, 13);
  const slide = presentation.slides.getItem(12);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 2  ·  ONE YEAR LATER  ·  15 MIN  ·  TALK",
    time: "0:25 – 0:40",
    title: "Five ways it breaks. Five plain controls. No magic.",
    flourish: true,
  });
  const rows = [
    ["A bad release", "Branch + GitHub + one-click rollback"],
    ["A bug that shipped silently", "One test on every push"],
    ["A key in the browser", "Secrets in environment variables"],
    ["A platform that vanished", "Your host · domain · repo"],
    ["An AI that varies every time", "A checklist skill in the repo"],
  ];
  const y0 = 188;
  rows.forEach(([risk, control], index) => {
    const y = y0 + index * 77;
    addDot(slide, { left: 77, top: y + 20, size: 12, fill: D.red });
    addText(slide, { text: risk, left: 105, top: y + 10, width: 345, height: 38, fontSize: 18, bold: true });
    slide.shapes.add({
      geometry: "line",
      position: { left: 455, top: y + 27, width: 255, height: 0 },
      fill: "none",
      line: { style: "solid", fill: D.hairline, width: 1.2 },
    });
    addDot(slide, { left: 579, top: y + 23, size: 8, fill: D.orange });
    addPanel(slide, { left: 725, top: y, width: 465, height: 56, fill: D.ice, line: D.hairline, radius: 14 });
    addText(slide, { text: control, left: 747, top: y + 16, width: 420, height: 30, fontSize: 17, color: D.ink, bold: true });
    if (index < rows.length - 1) {
      slide.shapes.add({
        geometry: "line",
        position: { left: 78, top: y + 67, width: 1112, height: 0 },
        fill: "none",
        line: { style: "solid", fill: "#EEF2F7", width: 1 },
      });
    }
  });
}

function slide14(presentation, records) {
  clearMainContent(presentation, records, 14);
  const slide = presentation.slides.getItem(13);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 2  ·  ONE YEAR LATER  ·  15 MIN  ·  TALK",
    time: "0:25 – 0:40",
    title: "A development lifecycle is six words. You’ll do all six today.",
  });
  const descriptions = [
    "Write what it does and how you know it works.",
    "Change it on a branch, never on the live site.",
    "Run one check on every change.",
    "A fresh reader looks. Never the author.",
    "Merge to main. Rollback stays one click away.",
    "Hear about breakage before the customer does.",
  ];
  addRail(slide, ["Spec", "Build", "Test", "Review", "Ship", "Monitor"], {
    left: 68,
    top: 238,
    width: 1144,
    nodeWidth: 150,
    nodeHeight: 62,
    activeIndex: 0,
    descriptions,
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 1212, top: 269, width: 23, height: 0 },
    line: { style: "solid", fill: D.blue, width: 1.25 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 1235, top: 269, width: 0, height: 161 },
    line: { style: "solid", fill: D.blue, width: 1.25 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 45, top: 430, width: 1190, height: 0 },
    line: { style: "solid", fill: D.blue, width: 1.25 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 45, top: 269, width: 0, height: 161 },
    line: { style: "solid", fill: D.blue, width: 1.25 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 45, top: 269, width: 22, height: 0 },
    line: { style: "solid", fill: D.blue, width: 1.25 },
    tail: { type: "triangle", width: "sm", length: "sm" },
  });
  addBadge(slide, { text: "WHAT YOU LEARN STARTS THE NEXT LOOP", left: 884, top: 415, width: 305, fill: D.white, line: "#BFDBFE", color: D.electric });

  slide.shapes.add({
    geometry: "line",
    name: "sdlc-source-rule",
    position: { left: 68, top: 494, width: 1144, height: 0 },
    fill: "none",
    line: { style: "solid", fill: D.hairline, width: 0.8 },
  });
  addText(slide, {
    name: "sdlc-source-label",
    text: "SOURCE EXAMPLE",
    left: 68,
    top: 516,
    width: 126,
    height: 20,
    fontSize: 11,
    color: D.editorialOrange,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    name: "sdlc-source-link",
    text: "Claude’s AI-Native SDLC Playbook  ↗",
    left: 208,
    top: 511,
    width: 440,
    height: 30,
    fontSize: 17,
    color: D.electric,
    bold: true,
  });
  addText(slide, {
    name: "sdlc-source-stages",
    text: "Describe covers Plan + Design. Make is Build. Check is Test.",
    left: 68,
    top: 555,
    width: 590,
    height: 24,
    fontSize: 14,
    color: D.slate,
  });
  addText(slide, {
    name: "sdlc-source-adaptation",
    text: "Second look adds human review. Publish is Deploy. Listen is Maintain.",
    left: 648,
    top: 555,
    width: 564,
    height: 24,
    fontSize: 14,
    color: D.ink,
    alignment: "right",
  });
}

function slide18(presentation, records) {
  clearMainContent(presentation, records, 18);
  const slide = presentation.slides.getItem(17);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 4  ·  FIRST SHIP  ·  25 MIN  ·  HANDS-ON",
    time: "1:00 – 1:25",
    title: "Every push gets a URL. Only main gets your domain.",
    flourish: true,
  });
  const nodes = addRail(slide, ["Branch", "Pull request", "Preview URL", "Merge", "Live"], {
    left: 80,
    top: 232,
    width: 1120,
    nodeWidth: 175,
    nodeHeight: 68,
    activeIndex: 4,
  });
  nodes[2].line = { style: "solid", fill: D.electric, width: 2 };
  addText(slide, { text: "Share this copy before anything is real.", left: 445, top: 327, width: 360, height: 28, fontSize: 17, color: D.electric, bold: true, alignment: "center" });
  addText(slide, { text: "ROLLBACK PATH IF LIVE BREAKS", left: 560, top: 377, width: 640, height: 22, fontSize: 12, color: D.editorialOrange, bold: true, alignment: "center" });
  addRail(slide, ["Live breaks", "Previous deployment", "Instant rollback", "Live restored"], {
    left: 560,
    top: 408,
    width: 640,
    nodeWidth: 140,
    nodeHeight: 58,
    blockedIndex: 0,
    liveIndex: 3,
  });
  addPanel(slide, { left: 80, top: 514, width: 660, height: 70, fill: D.ice, line: D.hairline, radius: 14 });
  addText(slide, {
    text: "Nothing on the branch touches the live site until you merge.",
    left: 106,
    top: 534,
    width: 610,
    height: 40,
    fontSize: 17,
    color: D.slate,
  });
}

function gateSlide(presentation, records, slideNumber, passed) {
  clearMainContent(presentation, records, slideNumber);
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 6  ·  TEST IS THE GATE  ·  25 MIN  ·  HANDS-ON",
    time: "2:20 – 2:45",
    title: passed
      ? "One test, from your spec. Green opens the gate."
      : "Break it on purpose, and watch the gate close.",
  });
  const prompt = passed
    ? "Add one Playwright test from ‘How we know it works.’ Run it on every push and pull request. Fix the code so the test passes. Do not change the test."
    : "On a new branch called break-it, rename the first form-field label. Commit, push, and open a pull request. Do not merge it.";
  addDarkPrompt(slide, { text: prompt, left: 68, top: 188, width: 470, height: 250 });
  const nodes = addRail(slide, ["Spec sentence", "Playwright test", "GitHub check", "Merge", "Live"], {
    left: 575,
    top: 232,
    width: 630,
    nodeWidth: 110,
    nodeHeight: 64,
    blockedIndex: passed ? -1 : 2,
    liveIndex: passed ? 4 : -1,
    ghostAfter: passed ? -1 : 2,
  });
  if (passed) {
    addDot(slide, { left: 884, top: 310, size: 14, fill: D.green });
    addText(slide, { text: "GREEN: MERGE OPENS", left: 805, top: 340, width: 180, height: 24, fontSize: 13, color: D.green, bold: true, alignment: "center" });
    addPanel(slide, { left: 575, top: 408, width: 630, height: 112, fill: D.ice, line: D.hairline, radius: 14 });
    addText(slide, { text: "The test turns one sentence in spec.md into a repeatable gate. The machine checks it whether you remember or not.", left: 604, top: 437, width: 572, height: 60, fontSize: 18, color: D.slate, alignment: "center" });
  } else {
    addDot(slide, { left: 884, top: 310, size: 14, fill: D.red });
    addText(slide, { text: "RED: MERGE STOPS", left: 680, top: 340, width: 180, height: 24, fontSize: 13, color: D.red, bold: true, alignment: "right" });
    const closePr = addNode(slide, { text: "Close PR", left: 817, top: 412, width: 155, height: 58, fill: "#FEF2F2", line: D.red, color: D.red, fontSize: 17 });
    connect(slide, nodes[2], closePr, { kind: "elbow", fromSide: "bottom", toSide: "top", color: D.red });
    addText(slide, { text: "Production unchanged", left: 995, top: 430, width: 200, height: 28, fontSize: 16, color: D.green, bold: true, alignment: "center" });
  }
  addText(slide, {
    text: passed ? "Do not change the test." : "A red X on a pull request is the cheapest bug you will ever find.",
    left: 68,
    top: 475,
    width: 470,
    height: 70,
    fontSize: passed ? 24 : 22,
    color: passed ? D.red : D.ink,
    bold: true,
    typeface: "Verdana",
  });
}

function slide29(presentation, records) {
  clearMainContent(presentation, records, 29);
  const slide = presentation.slides.getItem(28);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 7  ·  SHIP AND OWN IT  ·  20 MIN  ·  HANDS-ON",
    time: "3:15 – 3:35",
    title: "Rollback buys you time. A branch makes the fix stick.",
    flourish: true,
  });
  addText(slide, { text: "PROTECT NOW", left: 80, top: 186, width: 190, height: 24, fontSize: 13, color: D.editorialOrange, bold: true });
  const upper = addRail(slide, ["Bad release", "Previous deployment", "Instant rollback", "Site fixed"], {
    left: 80,
    top: 220,
    width: 1120,
    nodeWidth: 205,
    nodeHeight: 60,
    blockedIndex: 0,
    liveIndex: 3,
  });
  addText(slide, { text: "THEN REPAIR PERMANENTLY", left: 505, top: 310, width: 430, height: 24, fontSize: 13, color: D.blue, bold: true, alignment: "center" });
  const lower = addRail(slide, ["Fix on branch", "Pull request", "Merge", "Live"], {
    left: 250,
    top: 405,
    width: 950,
    nodeWidth: 180,
    nodeHeight: 60,
    liveIndex: 3,
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 1097, top: 280, width: 0, height: 70 },
    line: { style: "solid", fill: D.mutedLine, width: 1.1 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 340, top: 350, width: 757, height: 0 },
    line: { style: "solid", fill: D.mutedLine, width: 1.1 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 340, top: 350, width: 0, height: 55 },
    line: { style: "solid", fill: D.mutedLine, width: 1.1 },
    tail: { type: "triangle", width: "sm", length: "sm" },
  });
  addText(slide, { text: "Rollback protects the customer. The branch records the real repair.", left: 342, top: 504, width: 600, height: 30, fontSize: 18, color: D.slate, alignment: "center" });
}

function slide33(presentation, records) {
  clearMainContent(presentation, records, 33);
  const slide = presentation.slides.getItem(32);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 8  ·  GIVE IT A MEMORY  ·  30 MIN  ·  HANDS-ON",
    time: "3:35 – 4:05",
    title: "Create the database in your account. Give the code its connection string through the environment.",
    flourish: true,
  });
  addBadge(slide, { text: "ACCOUNT SETUP", left: 70, top: 210, width: 150, fill: "#EEF6FF", line: "#BFDBFE", color: D.electric });
  addRail(slide, ["Vercel Storage", "Neon database", "DATABASE_URL"], {
    left: 250,
    top: 196,
    width: 930,
    nodeWidth: 220,
    nodeHeight: 58,
    activeIndex: 2,
  });
  addBadge(slide, { text: "CODE CHANGE", left: 70, top: 374, width: 150, fill: "#FFF7ED", line: "#FED7AA", color: D.editorialOrange });
  addRail(slide, ["Read spec", "Branch migration", "Preview", "Add + refresh", "Green PR", "Production"], {
    left: 250,
    top: 360,
    width: 930,
    nodeWidth: 132,
    nodeHeight: 58,
    liveIndex: 5,
  });
  addText(slide, { text: "The app reads this. Never paste it into code.", left: 730, top: 278, width: 300, height: 32, fontSize: 14, color: D.electric, alignment: "center" });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 1070, top: 254, width: 0, height: 72 },
    line: { style: "dashed", fill: D.electric, width: 1 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 796, top: 326, width: 274, height: 0 },
    line: { style: "dashed", fill: D.electric, width: 1 },
  });
  slide.shapes.add({
    geometry: "connector",
    kind: "straight",
    position: { left: 796, top: 326, width: 0, height: 34 },
    line: { style: "dashed", fill: D.electric, width: 1 },
    tail: { type: "triangle", width: "sm", length: "sm" },
  });
  addDarkPrompt(slide, {
    text: "Read spec.md. Use plan mode first. Replace the sample data with a Postgres table using DATABASE_URL. Keep the test passing. Commit, push, and open a pull request.",
    left: 70,
    top: 480,
    width: 1110,
    height: 118,
    label: "THE PROMPT, CONDENSED",
  });
}

function slide37(presentation, records) {
  clearMainContent(presentation, records, 37);
  const slide = presentation.slides.getItem(36);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 9  ·  HEAR ABOUT IT  ·  20 MIN  ·  HANDS-ON",
    time: "4:35 – 4:55",
    title: "One key. One safe path. Zero copies in chat.",
  });
  const nodes = addRail(slide, ["Resend", "Copy once", "Vercel env var", "App runtime", "Inbox"], {
    left: 75,
    top: 215,
    width: 1130,
    nodeWidth: 175,
    nodeHeight: 64,
    activeIndex: 2,
    liveIndex: 4,
  });
  addText(slide, { text: "The permitted route", left: 75, top: 177, width: 220, height: 24, fontSize: 14, color: D.blue, bold: true });
  const leakLabels = ["Chat", "Code", "Committed file"];
  leakLabels.forEach((label, index) => {
    const leak = addNode(slide, { text: `×  ${label}`, left: 470 + index * 170, top: 370, width: 135, height: 48, fill: "#FEF2F2", line: D.red, color: D.red, fontSize: 16 });
    connect(slide, nodes[2], leak, { kind: "elbow", fromSide: "bottom", toSide: "top", color: D.red, style: "dashed", arrow: false });
  });
  addText(slide, { text: "Never into", left: 345, top: 383, width: 100, height: 24, fontSize: 14, color: D.red, bold: true, alignment: "right" });
  addDarkPrompt(slide, {
    text: "When the form is submitted, send an email using RESEND_API_KEY. If email fails, still save the row and log the error. Never put the key in code.",
    left: 75,
    top: 472,
    width: 1130,
    height: 126,
    label: "RUNTIME RULE",
  });
}

function slide43(presentation, records) {
  clearMainContent(presentation, records, 43);
  const slide = presentation.slides.getItem(42);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 10  ·  OWN IT  ·  15 MIN  ·  TALK",
    time: "4:55 – 5:10",
    title: "Know when to call a professional—and give them something they can quote.",
    flourish: true,
  });
  const triggers = [
    "Your code takes card numbers",
    "You handle sensitive records",
    "One user must never see another user’s data",
    "Downtime costs more than a developer",
  ];
  triggers.forEach((text, index) => {
    addDot(slide, { left: 75, top: 205 + index * 72, size: 12, fill: D.red });
    addText(slide, { text, left: 102, top: 194 + index * 72, width: 310, height: 40, fontSize: 18, color: D.ink, bold: true });
    slide.shapes.add({
      geometry: "line",
      position: { left: 405, top: 211 + index * 72, width: 100, height: 0 },
      fill: "none",
      line: { style: "solid", fill: D.hairline, width: 1.1 },
    });
  });
  const threshold = addNode(slide, { text: "Call a professional", left: 505, top: 286, width: 210, height: 78, fill: "#FEF2F2", line: D.red, color: D.red, fontSize: 19 });
  const handoff = addPanel(slide, { left: 780, top: 190, width: 420, height: 300, fill: D.ice, line: D.green, radius: 16 });
  addText(slide, { text: "THE HANDOFF PACKAGE", left: 810, top: 218, width: 330, height: 26, fontSize: 14, color: D.green, bold: true });
  ["Repo access, never a password", "spec.md", "Test + known bugs", "Changes arrive as pull requests"].forEach((text, index) => {
    addDot(slide, { left: 814, top: 272 + index * 46, size: 9, fill: D.green });
    addText(slide, { text, left: 837, top: 263 + index * 46, width: 325, height: 30, fontSize: 17, color: D.ink, bold: index === 0 });
  });
  connect(slide, threshold, handoff, { color: D.green });
  addPanel(slide, { left: 825, top: 508, width: 330, height: 40, fill: "#F0FDF4", line: "#BBF7D0", radius: 16 });
  addText(slide, { text: "A PROJECT A DEVELOPER CAN QUOTE", left: 839, top: 519, width: 302, height: 20, fontSize: 15, color: "#15803D", bold: true, alignment: "center" });
}

function slide45(presentation, records) {
  clearMainContent(presentation, records, 45);
  const slide = presentation.slides.getItem(44);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 11  ·  SKILLS  ·  20 MIN  ·  HANDS-ON",
    time: "5:10 – 5:30",
    title: "Rules go in the always-on file. Routines go in skills.",
  });
  const question = addNode(slide, { text: "What kind of instruction is this?", left: 455, top: 185, width: 370, height: 74, fill: D.midnight, line: D.midnight, color: D.white, fontSize: 21 });
  const always = addNode(slide, { text: "Needed every session", left: 150, top: 340, width: 300, height: 70, fill: D.ice, line: D.blue, color: D.ink, fontSize: 19 });
  const routine = addNode(slide, { text: "A multi-step routine", left: 830, top: 340, width: 300, height: 70, fill: "#FFF7ED", line: D.orange, color: D.ink, fontSize: 19 });
  connect(slide, question, always, { kind: "elbow", fromSide: "bottom", toSide: "top", color: D.blue });
  connect(slide, question, routine, { kind: "elbow", fromSide: "bottom", toSide: "top", color: D.orange });
  addText(slide, { text: "CLAUDE.md / AGENTS.md", left: 150, top: 430, width: 300, height: 58, fontSize: 20, color: D.blue, bold: true, alignment: "center" });
  addText(slide, { text: "Skill", left: 830, top: 438, width: 300, height: 34, fontSize: 22, color: D.editorialOrange, bold: true, alignment: "center" });
  addBadge(slide, { text: "LOADED EVERY SESSION", left: 205, top: 505, width: 190, fill: "#EEF6FF", line: "#BFDBFE", color: D.electric });
  addBadge(slide, { text: "LOADED WHEN INVOKED", left: 882, top: 505, width: 200, fill: "#FFF7ED", line: "#FED7AA", color: D.editorialOrange });
  addText(slide, { text: "Put the rule in the always-on file. Put the repeatable workflow in a skill.", left: 180, top: 555, width: 920, height: 42, fontSize: 17, color: D.slate, alignment: "center" });
}

function slide50(presentation, records) {
  clearMainContent(presentation, records, 50);
  const slide = presentation.slides.getItem(49);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 12  ·  WHAT YOU OWN NOW  ·  10 MIN  ·  REVIEW",
    time: "5:50 – 6:00",
    title: "Monday, in this order. Start free; earn the upgrade.",
    flourish: true,
  });
  const steps = [
    ["Buy the domain", "~$11 / yr"],
    ["Verify email", "Domain DNS"],
    ["Add error alerts", "$0 starter tier"],
    ["Go Pro when it earns", "$20 / mo"],
    ["Make the gate hard", "Deployment check"],
    ["First of the month", "Two-minute audit"],
  ];
  const positions = [
    [92, 200], [410, 200], [728, 200],
    [250, 390], [568, 390], [886, 390],
  ];
  const nodeShapes = [];
  steps.forEach(([title, evidence], index) => {
    const [x, y] = positions[index];
    addDot(slide, { left: x, top: y + 10, size: 34, fill: index === 5 ? D.orange : D.blue });
    addText(slide, { text: String(index + 1), left: x, top: y + 17, width: 34, height: 20, fontSize: 13, color: D.white, bold: true, alignment: "center" });
    const node = addPanel(slide, { left: x + 50, top: y, width: 245, height: 104, fill: D.white, line: D.hairline, radius: 16 });
    nodeShapes.push(node);
    addText(slide, { text: title, left: x + 70, top: y + 22, width: 205, height: 34, fontSize: 18, color: D.ink, bold: true });
    addText(slide, { text: evidence, left: x + 70, top: y + 61, width: 205, height: 25, fontSize: 14, color: index === 5 ? D.editorialOrange : D.electric, bold: true });
  });
  for (let i = 0; i < nodeShapes.length - 1; i += 1) {
    connect(slide, nodeShapes[i], nodeShapes[i + 1], {
      kind: i === 2 ? "elbow" : "straight",
      fromSide: i === 2 ? "bottom" : "right",
      toSide: i === 2 ? "top" : "left",
      color: D.mutedLine,
    });
  }
}

export function redesignWorkshopSlides(presentation, records) {
  slide13(presentation, records);
  slide14(presentation, records);
  slide18(presentation, records);
  gateSlide(presentation, records, 25, true);
  gateSlide(presentation, records, 26, false);
  slide29(presentation, records);
  slide33(presentation, records);
  slide37(presentation, records);
  slide43(presentation, records);
  slide45(presentation, records);
  slide50(presentation, records);
}
// End of the workshop slide redesign helpers.
