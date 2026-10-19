import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";
import JSZip from "jszip";
import { redesignWorkshopSlides } from "./design-system.mjs";
import { redesignTufteSlides } from "./tufte-system.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "../..");
const TASK_ROOT = "/Users/mrhinkle/Documents/Codex/2026-10-16/lo";
const SKILL_DIR =
  "/Users/mrhinkle/.codex/plugins/cache/openai-primary-runtime/presentations/26.1017.11052/skills/presentations";
const RUNTIME_PYTHON =
  "/Users/mrhinkle/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";

const SOURCE_PPTX = path.join(
  REPO_ROOT,
  "presentations/reference-six-hour-class/vibe-coding-class-ata.pptx",
);
const CARD_IMAGE = path.join(
  HERE,
  "assets/ato-2026-ai-agents-vibe-coding-card.jpg",
);
const BOOK_COVER = path.join(
  HERE,
  "assets/software-development-for-non-programmers-cover.png",
);
const AIE_LOGO = path.join(HERE, "assets/logo-aie-white.png");
const WEBSITE_EXAMPLE = path.join(
  REPO_ROOT,
  "website-starters/previews/ata-orbit.png",
);
const GAME_EXAMPLE = path.join(
  HERE,
  "assets/alien-tic-tac-toe-example.png",
);
const GIT_LOGO = path.join(HERE, "assets/logo-git.png");
const GITHUB_LOGO = path.join(HERE, "assets/logo-github.png");
const VERCEL_LOGO = path.join(HERE, "assets/logo-vercel.png");
const GLOBE_ICON = path.join(HERE, "assets/icon-globe.png");
const UNDO_ICON = path.join(HERE, "assets/icon-undo.png");
const LOCK_ICON = path.join(HERE, "assets/icon-lock-keyhole.png");
const DATABASE_ICON = path.join(HERE, "assets/icon-database.png");
const MAIL_ICON = path.join(HERE, "assets/icon-mail-white.png");
const GITHUB_SCREENSHOT = path.join(
  HERE,
  "assets/github-course-repo-2026-10-18-crop.jpg",
);
const VERCEL_SCREENSHOT = path.join(
  HERE,
  "assets/vercel-new-project-2026-10-18-crop.jpg",
);
const BUILD_DIR = path.join(TASK_ROOT, "work/course-deck-edit/.codex-build");
const STAGING_DIR = path.join(TASK_ROOT, "work/course-deck-edit/.codex-finalizer");
const OUTPUT_DIR = path.join(TASK_ROOT, "outputs");
const FINAL_PPTX = path.join(
  OUTPUT_DIR,
  "ai-agents-vibe-coding-ato-2026-canonical-six-steps-v26.pptx",
);

const EVENT_PAGE = "https://2026.allthingsopen.org/ai-agents-vibe-coding";
const EVENT_CARD_URL =
  "https://2026.allthingsopen.org/wp-content/uploads/2026/09/2026_ATO_ExtendedWorkshop_AIAgentsVibeCoding.jpg";
const AI_NATIVE_SDLC_URL =
  "https://claude.com/resources/articles/the-ai-native-sdlc-playbook";

function parseNdjson(ndjson) {
  return ndjson
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

async function fileSha256(filePath) {
  return crypto.createHash("sha256").update(await fs.readFile(filePath)).digest("hex");
}

async function readImageBlob(imagePath) {
  const bytes = await fs.readFile(imagePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

async function normalizePptxTypefaceRuns(pptxPath) {
  const zip = await JSZip.loadAsync(await fs.readFile(pptxPath));
  const replacements = [
    ['typeface="Arial"', 'typeface="Montserrat"'],
    ['typeface="Georgia"', 'typeface="Montserrat"'],
  ];

  for (const [entryName, entry] of Object.entries(zip.files)) {
    if (entry.dir || !entryName.endsWith(".xml")) continue;
    const original = await entry.async("string");
    const normalized = replacements.reduce(
      (xml, [from, to]) => xml.split(from).join(to),
      original,
    );
    if (normalized !== original) zip.file(entryName, normalized);
  }

  await fs.writeFile(
    pptxPath,
    await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }),
  );
}

async function addExternalShapeHyperlink(pptxPath, {
  slideNumber,
  shapeName,
  url,
}) {
  const zip = await JSZip.loadAsync(await fs.readFile(pptxPath));
  const slidePath = `ppt/slides/slide${slideNumber}.xml`;
  const relsPath = `ppt/slides/_rels/slide${slideNumber}.xml.rels`;
  const slideEntry = zip.file(slidePath);
  const relsEntry = zip.file(relsPath);
  if (!slideEntry || !relsEntry) {
    throw new Error(`Missing slide package parts for slide ${slideNumber}`);
  }

  let slideXml = await slideEntry.async("string");
  let relsXml = await relsEntry.async("string");
  const relationshipIds = [...relsXml.matchAll(/\bId="rId(\d+)"/g)]
    .map((match) => Number(match[1]));
  const relationshipId = `rId${Math.max(0, ...relationshipIds) + 1}`;
  const escapedShapeName = shapeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const selfClosing = new RegExp(
    `<p:cNvPr([^>]*\\bname="${escapedShapeName}"[^>]*)\\/>`,
  );
  const paired = new RegExp(
    `(<p:cNvPr[^>]*\\bname="${escapedShapeName}"[^>]*>)([\\s\\S]*?)(</p:cNvPr>)`,
  );
  const hyperlinkXml = `<a:hlinkClick r:id="${relationshipId}" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>`;
  if (selfClosing.test(slideXml)) {
    slideXml = slideXml.replace(
      selfClosing,
      `<p:cNvPr$1>${hyperlinkXml}</p:cNvPr>`,
    );
  } else if (paired.test(slideXml)) {
    slideXml = slideXml.replace(
      paired,
      `$1${hyperlinkXml}$2$3`,
    );
  } else {
    throw new Error(`Could not find cNvPr for ${shapeName}`);
  }
  relsXml = relsXml.replace(
    "</Relationships>",
    `<Relationship Id="${relationshipId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${url}" TargetMode="External"/></Relationships>`,
  );
  zip.file(slidePath, slideXml);
  zip.file(relsPath, relsXml);
  await fs.writeFile(
    pptxPath,
    await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }),
  );
}

function addTextbox(slide, {
  name,
  text,
  left,
  top,
  width,
  height,
  fontSize,
  color,
  bold = false,
  typeface = "Montserrat",
  alignment = "left",
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
  return box;
}

function addImageCue(slide, {
  bytes,
  name,
  alt,
  left,
  top,
  width,
  height,
}) {
  return slide.images.add({
    blob: bytes,
    contentType: "image/png",
    alt,
    fit: "contain",
    position: { left, top, width, height },
  });
}

function addScreenshot(slide, {
  bytes,
  name,
  alt,
  left,
  top,
  width,
  height,
}) {
  return slide.images.add({
    blob: bytes,
    contentType: "image/jpeg",
    alt,
    fit: "cover",
    geometry: "roundRect",
    borderRadius: "rounded-xl",
    position: { left, top, width, height },
  });
}

await fs.mkdir(BUILD_DIR, { recursive: true });
await fs.mkdir(STAGING_DIR, { recursive: true });
await fs.mkdir(OUTPUT_DIR, { recursive: true });

const [
  cardImageBytes,
  bookCoverBytes,
  aieLogoBytes,
  websiteExampleBytes,
  gameExampleBytes,
  gitLogoBytes,
  githubLogoBytes,
  vercelLogoBytes,
  globeIconBytes,
  undoIconBytes,
  lockIconBytes,
  databaseIconBytes,
  mailIconBytes,
  githubScreenshotBytes,
  vercelScreenshotBytes,
] = await Promise.all([
  readImageBlob(CARD_IMAGE),
  readImageBlob(BOOK_COVER),
  readImageBlob(AIE_LOGO),
  readImageBlob(WEBSITE_EXAMPLE),
  readImageBlob(GAME_EXAMPLE),
  readImageBlob(GIT_LOGO),
  readImageBlob(GITHUB_LOGO),
  readImageBlob(VERCEL_LOGO),
  readImageBlob(GLOBE_ICON),
  readImageBlob(UNDO_ICON),
  readImageBlob(LOCK_ICON),
  readImageBlob(DATABASE_ICON),
  readImageBlob(MAIL_ICON),
  readImageBlob(GITHUB_SCREENSHOT),
  readImageBlob(VERCEL_SCREENSHOT),
]);

const presentation = await PresentationFile.importPptx(
  await FileBlob.load(SOURCE_PPTX),
);

const sourceSnapshot = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart,layout,notes",
  maxChars: 1000000,
});
const sourceRecords = parseNdjson(sourceSnapshot.ndjson);
for (const record of sourceRecords) {
  if (record.slideIndex !== 10) continue;
  if (["45%", "Code that passes a security check: flat at ~55%"].includes(record.text)) {
    const shape = presentation.resolve(record.id);
    shape.text.style = { ...record.style, color: "#EF4444" };
  }
  if (record.kind === "shape" && record.geometry === "line" && record.lineColor === "#EF8B39") {
    const shape = presentation.resolve(record.id);
    shape.line = { style: "solid", fill: "#EF4444", width: record.lineWidth ?? 4 };
  }
}
const filledSpecExample = sourceRecords.find(
  (record) =>
    record.slideIndex === 14 &&
    record.kind === "textbox" &&
    record.text?.startsWith("Who uses it: a homeowner on a phone"),
);
if (filledSpecExample) {
  const shape = presentation.resolve(filledSpecExample.id);
  shape.text.style = {
    ...filledSpecExample.style,
    fontSize: 16,
    color: "#0F172A",
    bold: true,
  };
}
const firstSlideRecord = sourceRecords.find(
  (record) => record.kind === "slide" && record.slideIndex === 0,
);
if (!firstSlideRecord) throw new Error("Could not resolve source slide 1");

const firstSlide = presentation.resolve(firstSlideRecord.id);
const slideFrame = firstSlide.frame;
const firstSlideChildren = sourceRecords
  .filter(
    (record) =>
      record.slideIndex === 0 &&
      ["textbox", "shape", "image", "table", "chart"].includes(record.kind),
  )
  .map((record) => record.id);
presentation.delete(firstSlideChildren);

firstSlide.background.fill = "#0D1219";
firstSlide.images.add({
  blob: cardImageBytes,
  contentType: "image/jpeg",
  alt: "All Things Open 2026 card for the AI Agents and Vibe Coding extended workshop led by Mark Hinkle",
  fit: "contain",
  position: {
    left: 0,
    top: 0,
    width: slideFrame.width,
    height: slideFrame.height,
  },
});
firstSlide.speakerNotes.text = [
  "Opening slide for the All Things Open 2026 extended workshop.",
  `Event page: ${EVENT_PAGE}`,
  `Organizer card image: ${EVENT_CARD_URL}`,
  "Sources accessed October 16, 2026.",
].join("\n");
firstSlide.speakerNotes.setVisible(true);

const stageLabels = new Set(["SPEC", "BUILD", "TEST", "REVIEW", "SHIP", "MONITOR"]);
for (const record of sourceRecords) {
  if (record.kind !== "textbox") continue;
  if (stageLabels.has(record.text) && (record.position?.top ?? 0) >= 640) {
    presentation.resolve(record.id).text.style = {
      ...record.style,
      fontSize: 12,
      color: record.style?.color === "#7B8594" ? "#64748B" : record.style?.color,
    };
  }
  if (/^\d{2} \/ 51$/.test(record.text ?? "")) {
    presentation.resolve(record.id).text.style = {
      ...record.style,
      fontSize: 12,
      color: "#64748B",
    };
  }
}

const slideTwoContext = sourceRecords.find(
  (record) => record.slideIndex === 1 && record.text?.includes("PART ONE, IN AUGUST"),
);
if (slideTwoContext) {
  presentation.resolve(slideTwoContext.id).text.replace(
    "PART ONE, IN AUGUST",
    "TODAY AT ALL THINGS OPEN",
  );
}

function appendSpeakerNote(slideIndex, paragraph, replacements = []) {
  let original = sourceRecords.find(
    (record) => record.kind === "notes" && record.slideIndex === slideIndex,
  )?.text?.trim();
  for (const [search, replacement] of replacements) {
    original = original?.replace(search, replacement);
  }
  const slide = presentation.slides.getItem(slideIndex);
  slide.speakerNotes.text = [original, paragraph].filter(Boolean).join("\n\n");
  slide.speakerNotes.setVisible(true);
}

appendSpeakerNote(
  1,
  "This feels like Linux in the 1990s: people called it a toy while a lot of us quietly learned how to run it. AI-assisted software has that same learn-it-before-you-need-it energy.",
);
appendSpeakerNote(
  23,
  "Put it in plain English: the red check is the circuit breaker that stops the push. Green opens the gate. Do not go around either signal.",
);
appendSpeakerNote(
  29,
  "Say this plainly: if a key lands in chat, you have made a copy you do not control. A real key belongs in a password manager or an environment variable—nowhere else.",
);
appendSpeakerNote(
  43,
  "Almost every skill I use ends with a sanity check and a quality check. The point is not more process. The point is teaching the agent how I know the work is actually done. VERIFY BEFORE STAGE: confirm the current agentskills.io product count and the exact Simon Willison wording; update the slide and notes if either changed.",
  [["Some of you were at the skills talk. ", ""]],
);

const slide13Notes = sourceRecords.find(
  (record) => record.kind === "notes" && record.slideIndex === 12,
);
if (slide13Notes) {
  const slide = presentation.slides.getItem(12);
  slide.speakerNotes.text = slide13Notes.text.replace(
    "Deleted database → every change on a branch, in GitHub, with a rollback.",
    "Bad release → every change on a branch, in GitHub, with a rollback.",
  ).replace(
    "Vanished platform → your host, your domain; Google shut down its own vibe-coding IDE inside a year.",
    "Vanished platform → your host, your domain; Google announced the Firebase Studio sunset within a year.",
  );
  slide.speakerNotes.setVisible(true);
}

const slide43Notes = sourceRecords.find(
  (record) => record.kind === "notes" && record.slideIndex === 42,
);
if (slide43Notes) {
  const slide = presentation.slides.getItem(42);
  slide.speakerNotes.text = slide43Notes.text.replace(
    "Last slide of Own it, and the one the Lunch and Learn listing promised.",
    "Last slide of Own it, and the line I want nobody to miss.",
  );
  slide.speakerNotes.setVisible(true);
}

const closingTitle = sourceRecords.find(
  (record) => record.slideIndex === 50 && record.text?.includes("Six hours ago it lived"),
);
if (closingTitle) {
  const closingTitleShape = presentation.resolve(closingTitle.id);
  closingTitleShape.text.replace(
    closingTitle.text,
    "You don’t have to be a programmer. You do have to own the work.",
  );
  closingTitleShape.text.style = {
    ...closingTitle.style,
    fontSize: 34,
  };
}

const closingBody = sourceRecords.find(
  (record) => record.slideIndex === 50 && record.text?.includes("They decide what Part Three is."),
);
if (closingBody) {
  presentation.resolve(closingBody.id).text.replace(
    closingBody.text,
    "Six hours ago, your prototype lived in somebody else’s browser tab. Now the code is in your GitHub, the site is on your Vercel, and the data is in your account. A mistake rolls back in one click. A check runs on every change. An email tells you when a customer shows up.",
  );
}
const closingCredit = sourceRecords.find(
  (record) => record.slideIndex === 50 && record.text?.includes("Vibe Coding, Take Two"),
);
if (closingCredit) {
  const closingCreditShape = presentation.resolve(closingCredit.id);
  closingCreditShape.text.replace(
    "Mark Hinkle · theaienterprise.io · Vibe Coding, Take Two · the six-hour class · All Things AI",
    "Mark Hinkle · theaienterprise.io · AI Agents & Vibe Coding · All Things Open 2026",
  );
  closingCreditShape.text.style = {
    ...closingCredit.style,
    fontSize: 15,
    color: "#F4A261",
  };
}
const closingNumber = sourceRecords.find(
  (record) => record.slideIndex === 50 && record.text === "51 / 51",
);
if (closingNumber) presentation.resolve(closingNumber.id).text.replace("51 / 51", "52 / 52");

const closingRailIds = sourceRecords
  .filter((record) =>
    record.slideIndex === 50 &&
    ["textbox", "shape"].includes(record.kind) &&
    (record.position?.top ?? 0) >= 650 &&
    (record.position?.left ?? 0) >= 300 &&
    (record.position?.left ?? 0) <= 1000,
  )
  .map((record) => record.id);
presentation.delete(closingRailIds);

const closingSlide = presentation.slides.getItem(50);
closingSlide.speakerNotes.text = [
  "5:50–6:00. Before people leave, ask them to tell the person next to them one thing they learned and one thing they will try next. Take two or three answers out loud.",
  "Offer the advance-release book copy on the preceding slide and ask only for an honest review.",
  "Close with: You don’t have to be a programmer. You do have to own the work.",
  "Then read the evidence back: the repo, domain, deployment history, data, and operating checklist leave with the participant.",
  "VERIFY BEFORE STAGE: confirm the All Things AI April 18–20, 2027 dates and Raleigh location on allthingsai.org.",
].join("\n");
closingSlide.speakerNotes.setVisible(true);

redesignWorkshopSlides(presentation, sourceRecords);
redesignTufteSlides(presentation, sourceRecords);

const titleRewrites = new Map([
  ["Who’s this guy?", "Mark Hinkle"],
  ["Six hours. Five of class, one of live hacking, in three sprints.", "Three sprints in six hours"],
  ["Four rules for the next six hours", "Four rules for the workshop"],
  ["Own a repo and a live URL before you install anything.", "A repo and live URL before installation"],
  ["Still red at 0:15? Move to the browser. You lose nothing.", "Browser fallback at 0:15"],
  ["The man who coined it picked a new word within a year.", "Vibe coding needed a new name within a year"],
  ["It is not a toy. It is a $13 billion category.", "A $13 billion software category"],
  ["Great for proof of concept. Documented-bad for production.", "Prototypes and production risk"],
  ["The code got better at running. Not at being safe.", "Execution improved faster than security"],
  ["The vendors already told you whose job the other half is.", "Where the vendors stop"],
  ["Five ways it breaks. Five plain controls. No magic.", "Five failure modes and five controls"],
  ["A development lifecycle is six words. You’ll do all six today.", "The six-part development lifecycle"],
  ["The brief becomes a file in the repo. The AI reads it every session.", "The persistent project brief"],
  ["Fill in spec.md for the thing you brought. Then ask for a plan, not code.", "Your spec and implementation plan"],
  ["GitHub in four words. You will never type a git command today.", "GitHub without the command line"],
  ["Every push gets a URL. Only main gets your domain.", "Preview URLs and production domains"],
  ["Ship one change to production. A small one, on purpose.", "Your first production change"],
  ["Ticket to the break: two stickies on the front table.", "Break checkpoint"],
  ["Build the spreadsheet you came here to replace. One page. On a branch.", "A request tracker"],
  ["Watch the mistake. That is the lesson.", "The diagnostic loop"],
  ["Live hacking, sprint one. Make it yours, on the branch.", "Branch customization"],
  ["If you can’t verify it, don’t ship it.", "Verification before release"],
  ["One test, from your spec. Green opens the gate.", "One test from your spec"],
  ["Break it on purpose, and watch the gate close.", "A failed test closes the gate"],
  ["Code ages. Put one chore on the calendar.", "The first maintenance task"],
  ["Lunch. Your tool is live, and it went through a gate.", "Lunch checkpoint"],
  ["Rollback buys you time. A branch makes the fix stick.", "Rollback and permanent repair"],
  ["The thing almost every vibe-coded app ships with: a key in the browser.", "The exposed browser key"],
  ["Whoever wrote it does not review it. Same rule for people and models.", "Independent review for every change"],
  ["Sample data forgets. A database in your account remembers.", "A database in your account"],
  ["Create the database in your account. Give the code its connection string through the environment.", "Database setup and connection string"],
  ["Live hacking, sprint two. Every change goes through the gate.", "Every change through the gate"],
  ["Ten minutes. Two stickies on the front table again.", "Second checkpoint"],
  ["Your spec said ‘and I get the email.’ Build that line.", "Form submission and email notification"],
  ["One key. One safe path. Zero copies in chat.", "One secret, stored once"],
  ["The bill. Vendor prices, checked September 7, 2026.", "Vendor prices"],
  ["The honest line on “free”: budget $20 the day the site is real.", "A realistic starting budget: $20 a month"],
  ["Rent versus own, tool by tool. The code is rarely the hostage.", "Ownership by tool"],
  ["The code was never the hostage.", "The code was never the hostage"],
  ["And if Vercel ever annoys you: the code is in GitHub. Moving is a reconnect.", "Moving hosts is a reconnect"],
  ["Know when to call a professional—and give them something they can quote.", "When to call a professional"],
  ["A skill is a folder and one file. 46 tools read it.", "A skill is one folder and one file"],
  ["Rules go in the always-on file. Routines go in skills.", "Always-on rules and reusable skills"],
  ["Write the day down once. Then make the AI run it.", "A repeatable operating checklist"],
  ["What it looks like grown up: four skills that run a small-business site.", "Four skills for a small-business site"],
  ["Live hacking, sprint three. Ship it, then show it.", "Final live hack: ship and show"],
  ["Read it back against your own screen.", "What you own now"],
  ["Monday, in this order. Start free; earn the upgrade.", "Your first Monday"],
]);
const finalTitleSnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
for (const record of parseNdjson(finalTitleSnapshot.ndjson)) {
  const current = record.text?.trim();
  const replacement = titleRewrites.get(current);
  if (
    record.kind === "textbox" &&
    record.slideIndex === 9 &&
    ["JUL 2025", "MAY 2025", "FEB 2026", "MAY 2026"].includes(current)
  ) {
    const shape = presentation.resolve(record.id);
    shape.text.style = { ...record.style, color: "#B93800", bold: true };
  }
  if (
    record.kind !== "textbox" ||
    !replacement ||
    (record.position?.top ?? Number.POSITIVE_INFINITY) > 210 ||
    (record.style?.fontSize ?? 0) < 28
  ) continue;
  presentation.resolve(record.id).text.replace(current, replacement);
}

const facilitationTextRewrites = [
  ["Stickies, not hands", "Ask early"],
  [
    "Green on your lid when the step is done. Red when you are stuck: a helper comes to you.",
    "If you get stuck, say so. A helper comes to you. If you finish early, keep the result open so we can check it.",
  ],
  ["Green sticky = done", "Step complete"],
  ["Red sticky = a helper comes to you", "Need help? Ask now"],
  ["Green sticky when Claude can see your repo.", "Checkpoint: Claude can see your repo."],
  ["Green sticky: you have shipped.", "Checkpoint reached: you have shipped."],
  ["One bug on a sticky.", "Your partner names the first bug they find."],
  ["Green sticky when the fix is live", "Checkpoint: the fix is live"],
  ["Stuck for five minutes? Red sticky.", "Stuck for five minutes? Ask a helper."],
  ["Green sticky when the skill ran.", "Checkpoint: the skill ran."],
  ["On the green one.", "Tell your partner."],
  [
    "On the red one. I read them all and change the next hour if you tell me to.",
    "Say it out loud. I’ll reteach it if the room needs it.",
  ],
  [
    "On the red one. I read them all and change the last ninety minutes if you tell me to.",
    "Say it out loud. I’ll change the last ninety minutes if the room needs it.",
  ],
  [
    "Everyone else: one bug on a sticky for the presenter",
    "Everyone else: note one bug to share with the presenter",
  ],
];
const facilitationSnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
for (const record of parseNdjson(facilitationSnapshot.ndjson)) {
  if (record.kind !== "textbox" || !record.text) continue;
  const shape = presentation.resolve(record.id);
  for (const [from, to] of facilitationTextRewrites) {
    if (record.text.includes(from)) shape.text.replace(from, to);
  }
}

const facilitationNotes = new Map([
  [
    5,
    "0:00–0:05. Ask people to request help as soon as they are stuck. A helper comes to them. Pairs: the more nervous person types and the confident one reads. Swap after every break. Keep one path through the tools: Claude Desktop app, GitHub Desktop, and a browser. No terminal today. I build live on the projector at about twice their speed, and my mistakes are part of the lesson.",
  ],
  [
    16,
    "0:40–1:00. Scope rule: one screen, one form, one result. No login and no database in the first pass. Use the request tracker as the class example, or keep another idea equally small. Plan mode makes the AI explain what it will do before it touches a file. Read the plan like a contractor's quote. If the plan has more than one screen, cut it. Helpers: anyone whose description has six screens gets cut down now, not in the build block.\n\nCOPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: Read spec.md. Use plan mode. Plan one page in this app. Do not write code yet. Show me the plan.",
  ],
  [
    20,
    "1:25–1:35. Before the break, partners tell each other one thing they learned and one thing that is still confusing. Take two or three examples out loud and re-teach at 1:35 if the same question repeats. Helpers use the ten minutes to get anyone who is stuck to a merged title change.",
  ],
  [
    28,
    "2:45–3:15. Every tool should be merged and live, and it should have gone through a green check. Anyone who is not merged eats with a helper because the first block after lunch rolls production back. You cannot roll back what you have not shipped. Ask the room what still feels unclear and decide whether the afternoon needs a five-minute re-teach at 3:15.",
  ],
  [
    31,
    "3:15–3:35. Whoever wrote it does not review it. That rule holds for people and models, so ask a fresh Claude session to read what the first one wrote. Slash code-review reads the diff and lists what it found. Fix the issue that matches the bug the partner found during the build block. Supabase's own docs say a table without Row Level Security is readable and writable by any role. That is why the next database block includes the control.",
  ],
  [
    35,
    "4:25–4:35. Before the break, partners take one minute each: one thing learned since lunch and one thing still confusing. Take two or three examples out loud. These decide whether Own it gets trimmed for a re-teach. Helpers use the break to get anyone without a working database to checkpoint-5-database because the email block writes on top of it.",
  ],
]);
for (const [slideNumber, notes] of facilitationNotes) {
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.speakerNotes.text = notes;
  slide.speakerNotes.setVisible(true);
}

// Keep the header rail deliberately boring: one grammar, one typeface, one
// baseline. The only color exception is a real change in room mode.
const conciseTitles = new Map([
  [2, "Mark Hinkle"],
  [3, "A site and a game"],
  [4, "Three short work blocks"],
  [5, "How the room works"],
  [6, "Git, GitHub, and Vercel"],
  [7, "GitHub to Vercel"],
  [8, "You know the hard part"],
  [9, "Plain language is enough"],
  [10, "Three habits keep changes safe"],
  [11, "You judge the result"],
  [12, "You stay in charge"],
  [13, "Five simple safeguards"],
  [14, "The SDLC loop"],
  [15, "Describe the tool"],
  [16, "The plan before the build"],
  [17, "The Git workflow"],
  [18, "How Vercel publishes"],
  [19, "Your first change"],
  [20, "What clicked? What didn’t?"],
  [21, "A request tracker"],
  [22, "When something goes wrong"],
  [23, "Make 1: Make it yours"],
  [24, "One automatic check"],
  [25, "One example, checked every time"],
  [26, "See a bad change stop"],
  [27, "A two-minute monthly check"],
  [28, "Lunch"],
  [29, "Undo first, then fix"],
  [30, "Where secret keys live"],
  [31, "A second set of eyes"],
  [32, "Make the tool remember"],
  [33, "Save real information"],
  [34, "Make 2: Add one feature"],
  [35, "What changed after lunch?"],
  [36, "Hear when something happens"],
  [37, "Keep the secret key private"],
  [38, "What it costs"],
  [39, "When the free plan ends"],
  [40, "Can you take your work with you?"],
  [41, "Your work is more than code"],
  [42, "You can change hosts later"],
  [43, "When to bring in a developer"],
  [44, "A checklist the AI can follow"],
  [45, "Rules and reusable checklists"],
  [46, "Save your launch checklist"],
  [47, "Four checklists for the site"],
  [48, "Make 3: Finish and share"],
  [49, "What leaves with you"],
  [50, "Save these for Monday"],
  [51, "You own the work"],
]);

const eyebrowBySlide = new Map([
  [2, "// OPENING · YOUR GUIDE"],
  [3, "// OPENING · THE OUTCOME"],
  [4, "// OPENING · THE DAY"],
  [5, "// OPENING · ROOM RULES"],
  [6, "// BLOCK 1 · THE TOOLCHAIN"],
  [7, "// BLOCK 1 · FIRST PUBLISH"],
  ...[8, 9, 10, 11, 12, 13, 14].map((slide) => [slide, "// BLOCK 2 · WHY THE PROCESS"]),
  ...[15, 16].map((slide) => [slide, "// BLOCK 3 · DESCRIBE"]),
  ...[17, 18, 19].map((slide) => [slide, "// BLOCK 4 · FIRST PUBLISH"]),
  [20, "// BREAK · CHECKPOINT"],
  ...[21, 22].map((slide) => [slide, "// BLOCK 5 · MAKE"]),
  [23, "// HANDS-ON · MAKE 1"],
  ...[24, 25, 26, 27].map((slide) => [slide, "// BLOCK 6 · CHECK THE WORK"]),
  [28, "// BREAK · LUNCH"],
  ...[29, 30, 31].map((slide) => [slide, "// BLOCK 7 · SECOND LOOK"]),
  ...[32, 33].map((slide) => [slide, "// BLOCK 8 · SAVE YOUR WORK"]),
  [34, "// HANDS-ON · MAKE 2"],
  [35, "// BREAK · CHECKPOINT"],
  ...[36, 37].map((slide) => [slide, "// BLOCK 9 · LISTEN"]),
  ...[38, 39, 40, 41, 42, 43].map((slide) => [slide, "// BLOCK 10 · OWNERSHIP"]),
  ...[44, 45, 46, 47].map((slide) => [slide, "// BLOCK 11 · REUSABLE CHECKLISTS"]),
  [48, "// HANDS-ON · MAKE 3"],
  ...[49, 50].map((slide) => [slide, "// BLOCK 12 · WHAT YOU OWN"]),
  [51, "// CLOSE"],
]);

const timeBySlide = new Map([
  ...[2, 3, 4, 5].map((slide) => [slide, "0:00–0:05"]),
  ...[6, 7].map((slide) => [slide, "0:05–0:25"]),
  ...[8, 9, 10, 11, 12, 13, 14].map((slide) => [slide, "0:25–0:40"]),
  ...[15, 16].map((slide) => [slide, "0:40–1:00"]),
  ...[17, 18, 19].map((slide) => [slide, "1:00–1:25"]),
  [20, "10 MIN"],
  ...[21, 22].map((slide) => [slide, "1:35–2:00"]),
  [23, "2:00–2:20"],
  ...[24, 25, 26, 27].map((slide) => [slide, "2:20–2:45"]),
  [28, "30 MIN"],
  ...[29, 30, 31].map((slide) => [slide, "3:15–3:35"]),
  ...[32, 33].map((slide) => [slide, "3:35–4:05"]),
  [34, "4:05–4:25"],
  [35, "10 MIN"],
  ...[36, 37].map((slide) => [slide, "4:35–4:55"]),
  ...[38, 39, 40, 41, 42, 43].map((slide) => [slide, "4:55–5:10"]),
  ...[44, 45, 46, 47].map((slide) => [slide, "5:10–5:30"]),
  [48, "5:30–5:50"],
  ...[49, 50].map((slide) => [slide, "5:50–6:00"]),
  [51, "6:00"],
]);

const modeChangeSlides = new Set([20, 23, 28, 34, 35, 48]);
const headerSnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
const headerRecords = parseNdjson(headerSnapshot.ndjson);

for (const slideNumber of conciseTitles.keys()) {
  const slideIndex = slideNumber - 1;
  const headerIds = headerRecords
    .filter((record) =>
      record.kind === "textbox" &&
      record.slideIndex === slideIndex &&
      (record.position?.top ?? Number.POSITIVE_INFINITY) >= 44 &&
      (record.position?.top ?? Number.POSITIVE_INFINITY) <= 80 &&
      (record.style?.fontSize ?? 0) <= 18,
    )
    .map((record) => record.id);
  const titleIds = headerRecords
    .filter((record) =>
      record.kind === "textbox" &&
      record.slideIndex === slideIndex &&
      (record.position?.left ?? Number.POSITIVE_INFINITY) < 120 &&
      (record.position?.top ?? Number.POSITIVE_INFINITY) >= 80 &&
      (record.position?.top ?? Number.POSITIVE_INFINITY) <= 145 &&
      (record.style?.fontSize ?? 0) >= 28,
    )
    .map((record) => record.id);
  presentation.delete([...headerIds, ...titleIds]);

  const slide = presentation.slides.getItem(slideIndex);
  const isClosing = slideNumber === 51;
  const accent = modeChangeSlides.has(slideNumber) ? "#EF8B39" : "#307FE2";
  addTextbox(slide, {
    name: `header-eyebrow-${slideNumber}`,
    text: eyebrowBySlide.get(slideNumber),
    left: 68,
    top: 52,
    width: 850,
    height: 24,
    fontSize: 14,
    color: accent,
    bold: true,
    typeface: "Montserrat",
  });
  addTextbox(slide, {
    name: `header-time-${slideNumber}`,
    text: timeBySlide.get(slideNumber),
    left: 940,
    top: 52,
    width: 130,
    height: 24,
    fontSize: 12,
    color: modeChangeSlides.has(slideNumber) ? "#EF8B39" : "#94A3B8",
    typeface: "Montserrat",
    alignment: "right",
  });
  addTextbox(slide, {
    name: `header-title-${slideNumber}`,
    text: conciseTitles.get(slideNumber),
    left: 68,
    top: 91,
    width: isClosing ? 700 : 1145,
    height: 64,
    fontSize: isClosing ? 42 : 36,
    color: isClosing ? "#FFFFFF" : "#0F172A",
    bold: true,
    typeface: "Verdana",
  });
}

// The audience does not need the machinery on the slide. Keep the exact
// technical prompts in the notes and handout; use the canvas for what they are
// doing, what success looks like, and the one safety rule that matters.
const nonCoderSnapshot = await presentation.inspect({
  kind: "textbox,shape,image,table,chart",
  maxChars: 1000000,
});
const nonCoderRecords = parseNdjson(nonCoderSnapshot.ndjson);

function clearSlideBody(slideNumber) {
  const ids = nonCoderRecords
    .filter((record) => {
      if (record.slideIndex !== slideNumber - 1) return false;
      const top = record.position?.top ?? Number.POSITIVE_INFINITY;
      return top >= 170 && top < 650;
    })
    .map((record) => record.id);
  presentation.delete(ids);
}

function addBodyRule(slide, left, top, width, height = 0) {
  slide.shapes.add({
    geometry: "line",
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "#D8E2EF", width: 0.75 },
  });
}

function buildOpenColumns(slideNumber, label, items, footer, options = {}) {
  clearSlideBody(slideNumber);
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.background.fill = "#FFFFFF";
  const count = items.length;
  const left = 68;
  const totalWidth = 1144;
  const gap = options.gap ?? (count === 4 ? 28 : 32);
  const columnWidth = (totalWidth - gap * (count - 1)) / count;
  const titleSize = options.titleSize ?? (count === 4 ? 19 : 22);

  addTextbox(slide, {
    name: `plain-label-${slideNumber}`,
    text: label,
    left,
    top: 178,
    width: totalWidth,
    height: 22,
    fontSize: 11,
    color: "#B93800",
    bold: true,
    typeface: "Courier New",
  });
  addBodyRule(slide, left, 211, totalWidth);

  items.forEach((item, index) => {
    const x = left + index * (columnWidth + gap);
    if (index > 0) {
      addBodyRule(slide, x - gap / 2, 238, 0, 205);
    }
    addTextbox(slide, {
      name: `plain-number-${slideNumber}-${index + 1}`,
      text: String(index + 1).padStart(2, "0"),
      left: x,
      top: 235,
      width: 44,
      height: 22,
      fontSize: 12,
      color: item.color ?? "#307FE2",
      bold: true,
      typeface: "Courier New",
    });
    addTextbox(slide, {
      name: `plain-title-${slideNumber}-${index + 1}`,
      text: item.title,
      left: x,
      top: 274,
      width: columnWidth,
      height: 58,
      fontSize: titleSize,
      color: "#0F172A",
      bold: true,
      typeface: "Verdana",
    });
    addTextbox(slide, {
      name: `plain-body-${slideNumber}-${index + 1}`,
      text: item.body,
      left: x,
      top: 345,
      width: columnWidth,
      height: 98,
      fontSize: 17,
      color: "#475569",
    });
  });

  addBodyRule(slide, left, 493, totalWidth);
  addTextbox(slide, {
    name: `plain-footer-${slideNumber}`,
    text: footer,
    left,
    top: 520,
    width: totalWidth,
    height: 58,
    fontSize: 19,
    color: options.footerColor ?? "#0F172A",
    bold: true,
  });
}

function addExerciseReview(slideNumber, prompt) {
  const slide = presentation.slides.getItem(slideNumber - 1);
  addTextbox(slide, {
    name: `exercise-review-label-${slideNumber}`,
    text: "REVIEW",
    left: 68,
    top: 598,
    width: 72,
    height: 18,
    fontSize: 11,
    color: "#B93800",
    bold: true,
    typeface: "Courier New",
  });
  addTextbox(slide, {
    name: `exercise-review-prompt-${slideNumber}`,
    text: prompt,
    left: 150,
    top: 592,
    width: 1062,
    height: 34,
    fontSize: 15,
    color: "#475569",
    typeface: "Montserrat",
  });
}

function addProcessNode(slide, {
  name,
  text,
  left,
  top,
  width,
  height = 58,
  line = "#D8E2EF",
  fill = "#FFFFFF",
  color = "#0F172A",
  fontSize = 17,
}) {
  const node = slide.shapes.add({
    geometry: "roundRect",
    name,
    position: { left, top, width, height },
    fill,
    line: { style: "solid", fill: line, width: 1 },
  });
  node.text = text;
  node.text.style = {
    fontSize,
    typeface: "Montserrat",
    color,
    bold: true,
    alignment: "center",
    verticalAlignment: "middle",
  };
  return node;
}

function connectProcessNodes(slide, from, to, color = "#94A3B8") {
  return slide.shapes.connect(from, to, {
    kind: "straight",
    fromSide: "right",
    toSide: "left",
    line: { style: "solid", fill: color, width: 1.15 },
    tail: { type: "triangle", width: "sm", length: "sm" },
    cap: "round",
    join: "round",
  });
}

function buildToolchainMap(slideNumber) {
  clearSlideBody(slideNumber);
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.background.fill = "#FFFFFF";
  addTextbox(slide, {
    name: `toolchain-label-${slideNumber}`,
    text: "THREE TOOLS · ONE LIVE URL",
    left: 68,
    top: 178,
    width: 1144,
    height: 22,
    fontSize: 11,
    color: "#B93800",
    bold: true,
    typeface: "Courier New",
  });
  addBodyRule(slide, 68, 211, 1144);

  const items = [
    {
      title: "Git",
      body: "The history system inside the project. A commit is one named snapshot. A branch is a safe line of work.",
      line: "#307FE2",
      icon: gitLogoBytes,
      iconAlt: "Git logo",
    },
    {
      title: "GitHub",
      body: "The online home for the project and its history. A pull request is the review screen.",
      line: "#307FE2",
      icon: githubLogoBytes,
      iconAlt: "GitHub logo",
    },
    {
      title: "Vercel",
      body: "The publishing service. It watches GitHub and builds a URL for each change.",
      line: "#EF8B39",
      icon: vercelLogoBytes,
      iconAlt: "Vercel logo",
    },
    {
      title: "Live URL",
      body: "The page another person can open. They never need GitHub or Vercel.",
      line: "#22C55E",
      icon: globeIconBytes,
      iconAlt: "Globe icon representing a live website",
    },
  ];
  const left = 68;
  const gap = 38;
  const width = 257.5;
  const nodes = items.map((item, index) => {
    const x = left + index * (width + gap);
    const node = addProcessNode(slide, {
      name: `toolchain-node-${slideNumber}-${index + 1}`,
      text: "",
      left: x,
      top: 246,
      width,
      height: 64,
      line: item.line,
      color: index === 2 ? "#B93800" : index === 3 ? "#15803D" : "#0F172A",
      fontSize: 21,
    });
    addImageCue(slide, {
      bytes: item.icon,
      name: `toolchain-icon-${slideNumber}-${index + 1}`,
      alt: item.iconAlt,
      left: x + (index === 2 ? 20 : 22),
      top: index === 2 ? 256 : 258,
      width: index === 2 ? 44 : 40,
      height: index === 2 ? 44 : 40,
    });
    addTextbox(slide, {
      name: `toolchain-title-${slideNumber}-${index + 1}`,
      text: item.title,
      left: x + 78,
      top: 261,
      width: width - 96,
      height: 36,
      fontSize: 21,
      color: index === 2 ? "#B93800" : index === 3 ? "#15803D" : "#0F172A",
      bold: true,
      alignment: "left",
    });
    addTextbox(slide, {
      name: `toolchain-body-${slideNumber}-${index + 1}`,
      text: item.body,
      left: x,
      top: 336,
      width,
      height: 112,
      fontSize: 17,
      color: "#475569",
    });
    return node;
  });
  for (let i = 0; i < nodes.length - 1; i += 1) {
    connectProcessNodes(slide, nodes[i], nodes[i + 1]);
  }

  addBodyRule(slide, 68, 493, 1144);
  addTextbox(slide, {
    name: `toolchain-footer-${slideNumber}`,
    text: "Git records the work. GitHub stores and reviews it. Vercel publishes it.",
    left: 68,
    top: 520,
    width: 1144,
    height: 58,
    fontSize: 19,
    color: "#0F172A",
    bold: true,
  });
}

function buildVercelMap(slideNumber) {
  clearSlideBody(slideNumber);
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.background.fill = "#FFFFFF";
  const left = 72;
  const width = 238;
  const gap = 48;

  addTextbox(slide, {
    name: `vercel-preview-label-${slideNumber}`,
    text: "A CHANGE YOU ARE STILL TESTING",
    left,
    top: 186,
    width: 520,
    height: 20,
    fontSize: 11,
    color: "#307FE2",
    bold: true,
    typeface: "Courier New",
  });
  const previewNodes = [
    ["Safe copy in GitHub", "#307FE2"],
    ["Vercel builds it", "#EF8B39"],
    ["Private preview URL", "#307FE2"],
    ["You test and share it", "#22C55E"],
  ].map(([text, line], index) => addProcessNode(slide, {
    name: `vercel-preview-${index + 1}`,
    text,
    left: left + index * (width + gap),
    top: 218,
    width,
    line,
  }));
  for (let i = 0; i < previewNodes.length - 1; i += 1) {
    connectProcessNodes(slide, previewNodes[i], previewNodes[i + 1]);
  }

  addTextbox(slide, {
    name: `vercel-live-label-${slideNumber}`,
    text: "THE VERSION PEOPLE SEE",
    left,
    top: 345,
    width: 520,
    height: 20,
    fontSize: 11,
    color: "#B93800",
    bold: true,
    typeface: "Courier New",
  });
  const liveNodes = [
    ["You approve in GitHub", "#307FE2"],
    ["GitHub main updates", "#307FE2"],
    ["Vercel builds again", "#EF8B39"],
    ["The live URL updates", "#22C55E"],
  ].map(([text, line], index) => addProcessNode(slide, {
    name: `vercel-live-${index + 1}`,
    text,
    left: left + index * (width + gap),
    top: 377,
    width,
    line,
  }));
  for (let i = 0; i < liveNodes.length - 1; i += 1) {
    connectProcessNodes(slide, liveNodes[i], liveNodes[i + 1]);
  }

  addBodyRule(slide, 68, 493, 1144);
  addTextbox(slide, {
    name: `vercel-footer-${slideNumber}`,
    text: "Preview and live are different URLs. Check the preview before you approve.",
    left: 68,
    top: 520,
    width: 1144,
    height: 58,
    fontSize: 19,
    color: "#0F172A",
    bold: true,
  });
}

function buildDeploymentWalkthrough(slideNumber) {
  clearSlideBody(slideNumber);
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.background.fill = "#FFFFFF";
  const left = 68;
  const gap = 40;
  const width = 552;

  addTextbox(slide, {
    name: `deployment-label-${slideNumber}`,
    text: "WHAT YOU'LL LEARN · HOW YOUR PROJECT BECOMES A LIVE SITE",
    left,
    top: 178,
    width: 1144,
    height: 22,
    fontSize: 11,
    color: "#B93800",
    bold: true,
    typeface: "Courier New",
  });
  addBodyRule(slide, left, 211, 1144);

  const shots = [
    {
      number: "01 · GITHUB",
      title: "Your project has a home",
      body: "The repository keeps the files and every saved version.",
      bytes: githubScreenshotBytes,
      alt: "Public GitHub repository for VibeCoding-a-Website, showing the repository name and project files",
    },
    {
      number: "02 · VERCEL",
      title: "Connect that project",
      body: "Vercel recognizes the GitHub repository, then builds the live URL.",
      bytes: vercelScreenshotBytes,
      alt: "Vercel New Project screen showing VibeCoding-a-Website cloning from GitHub",
    },
  ];

  shots.forEach((shot, index) => {
    const x = left + index * (width + gap);
    addTextbox(slide, {
      name: `deployment-number-${slideNumber}-${index + 1}`,
      text: shot.number,
      left: x,
      top: 230,
      width: 150,
      height: 20,
      fontSize: 11,
      color: index === 0 ? "#307FE2" : "#B93800",
      bold: true,
      typeface: "Courier New",
    });
    addTextbox(slide, {
      name: `deployment-title-${slideNumber}-${index + 1}`,
      text: shot.title,
      left: x + 160,
      top: 224,
      width: width - 160,
      height: 30,
      fontSize: 18,
      color: "#0F172A",
      bold: true,
      typeface: "Verdana",
      alignment: "right",
    });
    addScreenshot(slide, {
      bytes: shot.bytes,
      name: `deployment-shot-${slideNumber}-${index + 1}`,
      alt: shot.alt,
      left: x,
      top: 260,
      width,
      height: 238,
    });
    addTextbox(slide, {
      name: `deployment-caption-${slideNumber}-${index + 1}`,
      text: shot.body,
      left: x,
      top: 510,
      width,
      height: 42,
      fontSize: 15,
      color: "#475569",
    });
  });

  addBodyRule(slide, left, 558, 1144);
  addTextbox(slide, {
    name: `deployment-checkpoint-${slideNumber}`,
    text: "Checkpoint: GitHub shows the project. Vercel says Ready. The live URL opens.",
    left,
    top: 568,
    width: 1144,
    height: 26,
    fontSize: 17,
    color: "#0F172A",
    bold: true,
  });
}

function appendTechnicalNote(slideNumber, note) {
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.speakerNotes.text = [slide.speakerNotes.text?.trim(), note]
    .filter(Boolean)
    .join("\n\n");
  slide.speakerNotes.setVisible(true);
}

buildOpenColumns(4, "A SPRINT IS A SHORT WORK BLOCK THAT ENDS WITH SOMETHING USABLE", [
  {
    title: "Put one page online",
    body: "Start from the complete course example. Sign in, open the URL, and see the whole path work.",
  },
  {
    title: "Add one reliable check",
    body: "Give the AI one example of success. Green means ready. Red means stop and fix it.",
  },
  {
    title: "Save the routine",
    body: "Write down the steps that worked so the AI can repeat them with you next time.",
  },
], "I explain the map first. We do one together. Then you repeat it with your own idea.");

buildToolchainMap(6);
appendTechnicalNote(
  6,
  "SOURCES: Git records changes and snapshots: https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control and https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F. GitHub connects the local Git history to an online repository and review workflow: https://docs.github.com/en/get-started and https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account. Vercel connects to a Git repository and creates preview and production deployments: https://vercel.com/docs/git and https://vercel.com/docs/deployments/overview. BRAND ASSETS: Git icon from https://git-scm.com/community/logos.html, licensed CC BY 3.0 and designed by Jason Long. GitHub Invertocat from https://brand.github.com/foundations/logo. Vercel symbol from https://vercel.com/geist/brands.",
);

buildDeploymentWalkthrough(7);
addExerciseReview(
  7,
  "Point to the repository, the deployment, and the live page. What does each one prove?",
);
appendTechnicalNote(
  7,
  `FACILITATOR DETAIL: Open ${EVENT_PAGE}. The presenter supplies the course starter link and QR code. Sign in to GitHub and Vercel, name the repository, select Deploy, wait for Ready, and open the vercel.app URL. If the desktop setup stalls, use claude.ai/code with the participant's Claude plan and GitHub account. SCREENSHOTS: public GitHub repository captured October 18, 2026 from https://github.com/mrhinkle/VibeCoding-a-Website. Vercel New Project screen captured October 18, 2026 from https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmrhinkle%2FVibeCoding-a-Website. SOURCE: https://vercel.com/docs/git`,
);

buildOpenColumns(8, "THE ADVANTAGE YOU ALREADY HAVE", [
  {
    title: "The problem",
    body: "You know where the work slows down, what people ask for, and what keeps getting repeated.",
  },
  {
    title: "The result",
    body: "You know what a useful answer looks like because you already do the work today.",
  },
  {
    title: "The boundaries",
    body: "You know what must never happen: the wrong price, missing information, or a private record shown to the wrong person.",
  },
], "That is enough to direct the first version. The AI handles the code.", {
  footerColor: "#B93800",
});

buildOpenColumns(9, "THE WORKING LOOP", [
  { title: "Describe it", body: "Say who it is for and what it should do." },
  { title: "Read the plan", body: "Ask questions before the AI starts making changes." },
  { title: "Try the result", body: "Use it the way a customer would. Notice what feels wrong." },
  { title: "Ask for one change", body: "Keep the good parts. Change one thing at a time." },
], "Plain language in. A working draft out. Your judgment stays in the loop.");

buildOpenColumns(10, "THE THREE HABITS", [
  {
    title: "Keep an undo button",
    body: "If a live change goes wrong, return to the last working version first.",
    color: "#EF8B39",
  },
  {
    title: "Check before live",
    body: "Try a private copy and let one automatic check run before people see the change.",
    color: "#22C55E",
  },
  {
    title: "Keep keys private",
    body: "Treat every secret key like a password. Keep it out of chat and out of the project files.",
    color: "#EF4444",
  },
], "You will practice each habit today, while the stakes are low.");

buildOpenColumns(11, "YOUR QUALITY BAR", [
  { title: "Does it do the job?", body: "Try the important action from start to finish." },
  { title: "Is private information private?", body: "Use fake information today. Keep real secrets out of chat." },
  { title: "Can I undo the change?", body: "Know where the last working version is before you publish." },
], "You do not need to read every line of code to answer those questions.");

buildOpenColumns(12, "WHAT STAYS WITH YOU", [
  { title: "Your files", body: "GitHub keeps the project and every saved version." },
  { title: "Your live site", body: "Vercel hosts the published page from an account you control." },
  { title: "Your information", body: "The saved records live in a database you can export later." },
], "The tools can change. Your work still has somewhere to go.", {
  footerColor: "#B93800",
});

buildOpenColumns(16, "PLAN FIRST · NO CODE YET", [
  {
    title: "Read the short description",
    body: "Who is it for? What should it do? How will you know it worked?",
  },
  {
    title: "Ask for one page",
    body: "Have Claude propose the smallest useful version before it builds anything.",
  },
  {
    title: "Challenge one assumption",
    body: "Say what feels wrong or missing. Change the plan before you change the page.",
  },
], "When the plan sounds like you, approve the build.");
appendTechnicalNote(
  16,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: Read spec.md. Use plan mode. Plan one page in this app. Do not write code yet. Show me the plan.",
);

buildOpenColumns(17, "FIVE MOVES · CLAUDE CAN DO THEM · YOU APPROVE THEM", [
  {
    title: "Branch",
    body: "Start a safe copy. The live version stays unchanged.",
  },
  {
    title: "Change",
    body: "Claude edits the files in that safe copy.",
  },
  {
    title: "Commit",
    body: "Git saves a named snapshot of the change.",
  },
  {
    title: "Push",
    body: "Git sends the new snapshots to GitHub.",
  },
  {
    title: "Pull request",
    body: "GitHub shows the change on a review screen.",
  },
], "Git records the work. GitHub stores and reviews it. Vercel publishes it.", {
  gap: 18,
  titleSize: 18,
});
appendTechnicalNote(
  17,
  "SOURCE: GitHub's beginner workflow defines a branch as isolated work, a commit as a saved snapshot, a push as sending commits to GitHub, and a pull request as proposing the change for review: https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code",
);

buildVercelMap(18);
appendTechnicalNote(
  18,
  "SOURCE: Vercel creates preview deployments for branch pushes and pull requests, and creates a production deployment when changes reach the production branch, commonly main: https://vercel.com/docs/git and https://vercel.com/docs/deployments/overview",
);

buildOpenColumns(19, "WHAT YOU'LL LEARN · HOW ONE CHANGE MOVES FROM IDEA TO LIVE", [
  {
    title: "Claude changes the safe copy",
    body: "Describe one visible change. Claude edits the project away from live.",
  },
  {
    title: "Git records and sends it",
    body: "Claude makes a commit, then pushes the branch to GitHub.",
  },
  {
    title: "GitHub opens the review",
    body: "Read the summary. Open Vercel's preview. Approve only when it is right.",
  },
  {
    title: "Vercel updates the live URL",
    body: "After approval, wait for Ready. Open the live page and check once more.",
  },
], "Checkpoint: the preview opens, the review is approved, and the live page shows your change.", {
  gap: 24,
  titleSize: 18,
});
addExerciseReview(
  19,
  "Name the handoff: what did Git record, GitHub review, and Vercel publish?",
);
appendTechnicalNote(
  19,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: Create a branch called first-change. Change the site title to '[your business name]'. Commit with a clear message, push the branch, and open a pull request. Visit the Vercel preview, merge only when it is correct, wait for the production deployment to show Ready, then open the live URL. SOURCES: https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code and https://vercel.com/docs/git",
);

buildOpenColumns(22, "IF THE PREVIEW LOOKS WRONG", [
  {
    title: "Stop before sharing",
    body: "Leave the live page alone. A bad preview is contained.",
  },
  {
    title: "Show the exact message",
    body: "Copy what you see and tell Claude what you expected instead.",
  },
  {
    title: "Ask for the smallest fix",
    body: "Keep the safety check. Change only what caused the problem.",
  },
  {
    title: "Try the preview again",
    body: "If it is still wrong, discard the copy and ask a helper.",
  },
], "A failed preview is a useful warning, not a disaster.");

buildOpenColumns(25, "ONE EXAMPLE BECOMES A REPEATABLE CHECK", [
  {
    title: "Describe the important action",
    body: "For example: submit a request and see it appear in the queue.",
  },
  {
    title: "Ask the AI to check it",
    body: "Claude turns your example into a check it can run every time.",
  },
  {
    title: "Use green or red",
    body: "Green means continue. Red means stop and fix the copy.",
  },
], "Never delete the check just to make red disappear.", {
  footerColor: "#B93800",
});
appendTechnicalNote(
  25,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: Add one Playwright test from 'How we know it works' in spec.md. Run it on every push and pull request. Fix the code so the test passes. Do not change the test.",
);

buildOpenColumns(26, "BREAK THE COPY · PROVE LIVE STAYS SAFE", [
  {
    title: "Make one harmless mistake",
    body: "Change a label only on the private copy.",
  },
  {
    title: "Watch the check turn red",
    body: "The change should stop before anyone can approve it.",
  },
  {
    title: "Close the copy",
    body: "Open the live page again. It should look exactly the same.",
  },
], "The red result is success: the safeguard worked.");
appendTechnicalNote(
  26,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: On a new branch called break-it, rename the first form-field label. Commit, push, and open a pull request. Do not merge it. Confirm the automated check turns red, then close the pull request.",
);

buildOpenColumns(21, "ONE EXAMPLE · WE BUILD IT IN LAYERS", [
  { title: "A visitor asks for help", body: "They enter a name, an email address, and a short request." },
  { title: "The tool saves it", body: "The request joins a simple queue you can reopen later." },
  { title: "You change the status", body: "Move the request from New to Working to Done." },
  { title: "The tool emails you", body: "You know a new request arrived without watching the page." },
], "We build the page first, save the requests later, then add the email alert.");
appendTechnicalNote(
  21,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: Read spec.md and the plan we agreed on. On a new branch called my-tool, build one request-tracker page. Add a form for name, email, and request. Show submitted requests in a simple queue with a status of New, Working, or Done. Use sample requests for now. Do not change anything else. Run the build and fix any errors before you tell me it is done. Then commit, push, and open a pull request.",
);

buildOpenColumns(23, "WHAT YOU'LL LEARN · HOW TO MAKE A SAFE CHANGE YOURS", [
  { title: "Your fields", body: "Choose the information a useful request needs." },
  { title: "One useful status", body: "Use New, Working, and Done, or the words your team already uses." },
  { title: "Your name and look", body: "Add the business name, colors, and logo." },
  { title: "One rule that must hold", body: "For example, require an email and keep private notes off the public page." },
], "Checkpoint: the preview accepts one request, and the live page is still untouched.");
addExerciseReview(
  23,
  "Show the request in the preview queue. What did you change, and what stayed safe?",
);

buildOpenColumns(24, "ONE CHECK · EVERY CHANGE", [
  { title: "Give it one example", body: "Use the example you wrote when you described the tool." },
  { title: "Let the AI make the check", body: "The same important action runs every time you ask to publish." },
  { title: "Trust the color", body: "Green means ready. Red means stop and fix the change first." },
], "The check is there so you do not have to remember everything.");

buildOpenColumns(27, "PUT THIS ON THE CALENDAR", [
  { title: "Ask for an update check", body: "Once a month, ask Claude to look for known security problems." },
  { title: "Read the summary", body: "Let the AI make the update and explain what changed in plain English." },
  { title: "Run the usual check", body: "Publish only when the important action still works and the result is green." },
], "Two minutes once a month catches problems before they become surprises.");

buildOpenColumns(30, "VERCEL CALLS THIS AN ENVIRONMENT VARIABLE", [
  {
    title: "What it is",
    body: "A private account setting for a key the live site needs.",
  },
  {
    title: "Where it lives",
    body: "Open the Vercel project. Choose Settings, then Environment Variables.",
  },
  {
    title: "How the site uses it",
    body: "Claude refers to the setting by name. Vercel supplies the value when the site runs.",
  },
], "Keep the real value out of chat and out of the project files.", {
  footerColor: "#B93800",
});
appendTechnicalNote(
  30,
  "SOURCE: Vercel Project Settings includes Environment Variables, and those values are configured outside the source code: https://vercel.com/docs/project-configuration/project-settings and https://vercel.com/docs/environment-variables",
);

buildOpenColumns(31, "SOMEONE NEW TRIES IT BEFORE YOU SHARE IT", [
  {
    title: "Ask for fresh eyes",
    body: "The person who made the change has already seen it too many times.",
  },
  {
    title: "Let them try it",
    body: "Give them the preview. Watch where they pause, guess, or get stuck.",
  },
  {
    title: "Fix the rough edge",
    body: "Make the smallest useful fix, check it again, then share it.",
  },
], "A second look is not a technical ritual. It is how you catch what the maker can no longer see.");

buildOpenColumns(32, "SAVED INFORMATION · STILL YOURS", [
  { title: "In your account", body: "The database belongs to you, not to the AI assistant." },
  { title: "Connected privately", body: "Vercel stores the private connection outside the project files." },
  { title: "Able to move", body: "You can export the information if you change services later." },
], "If real customers use it, turn on access rules before you go live.");

buildOpenColumns(33, "VERCEL CONNECTS THE SITE TO A DATABASE", [
  { title: "Open Storage", body: "In Vercel, choose Storage, then Create Database. Use the course option; stop if asked for payment." },
  { title: "Connect the project", body: "Vercel adds the private connection as Environment Variables. Do not paste them into chat." },
  { title: "Prove it remembers", body: "Submit one request. Refresh the page. The request should still be there." },
  { title: "Publish the checked version", body: "Wait for green. Then make the change live." },
], "Success is simple: submit, refresh, still there.");
appendTechnicalNote(
  33,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: Read spec.md. Use plan mode first. Replace the sample data with a Postgres table using DATABASE_URL. Keep the test passing. Commit, push, and open a pull request. SOURCE: Vercel Storage offers databases through Marketplace providers and injects credentials as Environment Variables: https://vercel.com/docs/storage and https://vercel.com/docs/integrations/create-integration/marketplace-flows",
);

buildOpenColumns(34, "WHAT YOU'LL LEARN · HOW TO ADD ONE FEATURE WITHOUT BREAKING THE REST", [
  { title: "Pick one useful feature", body: "Choose edit, delete, search, export, or a simple total." },
  { title: "Describe one example", body: "Say what a person does and what should happen next." },
  { title: "Let the check run", body: "The AI updates the automatic check with the new example." },
  { title: "Preview, then publish", body: "Try the copy. Publish only when the result is green." },
], "Checkpoint: the feature works in preview, and the check is green.");
addExerciseReview(
  34,
  "Show the feature and green check. Which example proved it worked?",
);
appendTechnicalNote(
  34,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: On a new branch called [feature-name], add [one feature] to my-tool. Add one sentence for it under ‘How we know it works’ in spec.md, and extend the Playwright test to check that sentence. Run the build and the tests. Commit, push, and open a pull request.",
);

buildOpenColumns(44, "A SAVED CHECKLIST", [
  { title: "When it runs", body: "Before every publish, while the change is still a private preview." },
  { title: "What it checks", body: "The important action, secret keys, the preview, and the live page." },
  { title: "When it stops", body: "Any red check, missing result, or broken page stops the publish." },
], "Save the checklist with the project. The AI can run it with you next time.");

buildOpenColumns(46, "SAVE THE ROUTINE THAT WORKED", [
  { title: "Ask Claude to create it", body: "You can copy the exact prompt from the participant guide." },
  { title: "Read the checklist", body: "Change one line so it matches how you actually work." },
  { title: "Run it before publishing", body: "Claude walks the list and stops when something is wrong." },
], "The file travels with the project and works with more than one AI assistant.");
appendTechnicalNote(
  46,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: Create .claude/skills/my-deploy-checklist/SKILL.md. Give it a short description saying to run before publishing. The checklist must run the test, check for exposed keys, confirm the preview and green check, publish only after those pass, and open the live URL once afterward. Keep it under 40 lines.",
);

buildOpenColumns(47, "FOUR EXAMPLES", [
  { title: "Brand voice", body: "Keeps new pages sounding like you." },
  { title: "Publish check", body: "Confirms the preview, green result, and live page." },
  { title: "Quality check", body: "Tries forms, links, and the phone layout." },
  { title: "Site check", body: "Runs the other checks and stops when one fails." },
], "Read a checklist before you add it, the way you would read a contract.");

buildOpenColumns(48, "WHAT YOU'LL LEARN · HOW TO FINISH, CHECK, AND SHARE", [
  {
    title: "Finish one thing",
    body: "Choose one website feature or finish the game round in twelve minutes.",
  },
  {
    title: "Run the launch checklist",
    body: "Stop if anything is red, missing, or surprising.",
  },
  {
    title: "Try it like a visitor",
    body: "Open the live page on your phone and use the form once.",
  },
  {
    title: "Show the story",
    body: "Two minutes: what it replaces, what went wrong, and how you caught it.",
  },
], "Checkpoint: the checklist passes, the phone test works, and the live link is ready.");
addExerciseReview(
  48,
  "Open the live link. What did you learn, and what would you change next?",
);
appendTechnicalNote(
  48,
  "FACILITATOR DETAIL: Run /my-deploy-checklist before the last merge. Open the production URL on a phone and submit the form once. Paste the production URL in the shared document. Demo the production URL, not the preview.",
);

buildOpenColumns(42, "YOU DO NOT HAVE TO CHOOSE THE FOREVER PLATFORM TODAY", [
  { title: "Your files can move", body: "GitHub keeps the project and every saved version." },
  { title: "Your web address can move", body: "The same domain can point to a different host later." },
  { title: "Your information can move", body: "Export the records first. Bring in a developer when the move is sensitive or complex." },
], "Changing hosts is a future project, not something you have to solve today.");

buildOpenColumns(49, "THE EVIDENCE YOU LEAVE WITH", [
  {
    title: "A working tool",
    body: "A live URL, saved information, and an email when someone uses the form.",
  },
  {
    title: "A safer way to change it",
    body: "A private preview, one automatic check, a second look, and a working undo button.",
  },
  {
    title: "A way out",
    body: "Your files, history, information, and checklist stay available if a tool changes.",
  },
], "You did not become a programmer. You learned how to stay in charge.", {
  footerColor: "#B93800",
});

buildOpenColumns(50, "FOLLOW-UPS · NOT PREREQUISITES", [
  { title: "Connect your web address", body: "Buy a domain only when you are ready to share the site." },
  { title: "Turn on alerts", body: "Verify your email and add an error alert after the workshop." },
  { title: "Choose the right plan", body: "Start free. Move to the paid plan when the site supports a business." },
], "Put the two-minute security check on the first of each month.");

const plainLanguageRewrites = new Map([
  [15, [
    ["SPEC.MD · FIVE HEADINGS · 15 LINES MAX", "YOUR SHORT PROJECT DESCRIPTION · FIVE HEADINGS · 15 LINES MAX"],
  ]],
  [16, [
    ["Open spec.md", "Open the project description"],
    ["starter repo", "course starter"],
    ["TYPE THIS, VERBATIM", "COPY THIS · NO CODE YET"],
  ]],
  [13, [
    ["A bad release", "A bad update"],
    ["Branch + GitHub + one-click rollback", "Try it on a copy first · keep one-click undo"],
    ["A bug that shipped silently", "A mistake nobody noticed"],
    ["One test on every push", "One automatic check before live"],
    ["A key in the browser", "A secret key in the wrong place"],
    ["Secrets in environment variables", "Private keys stored in account settings"],
    ["A platform that vanished", "A tool that changed or disappeared"],
    ["Your host · domain · repo", "Keep your files, web address, and information"],
    ["An AI that varies every time", "An AI that forgets the routine"],
    ["A checklist skill in the repo", "A saved checklist it can follow again"],
  ]],
  [14, [
    ["Spec", "Describe"],
    ["Build", "Make"],
    ["Test", "Check"],
    ["Review", "Second look"],
    ["Ship", "Publish"],
    ["Monitor", "Listen"],
    ["Write what it does and how you know it works.", "Say who it is for, what it should do, and what could go wrong."],
    ["Change it on a branch, never on the live site.", "Make the change on a safe copy, away from the live site."],
    ["Run one check on every change.", "Give the AI one example it can check every time."],
    ["A fresh reader looks. Never the author.", "A fresh person reviews it before it goes live."],
    ["Merge to main. Rollback stays one click away.", "Put it live only after the check passes. Keep undo ready."],
    ["Hear about breakage before the customer does.", "Get an email or alert when something breaks."],
    ["MONITOR FEEDS THE NEXT SPEC", "WHAT YOU LEARN BECOMES THE NEXT DESCRIPTION"],
  ]],
  [17, [
    ["REPOSITORY · the folder and its whole history", "REPOSITORY · your project folder and every saved version"],
    ["main · what is live", "main · the version people see"],
    ["compare + check + ask to merge", "the review screen before a change goes live"],
    ["feature branch · the photocopy", "feature branch · a safe working copy"],
    ["A safe copy. Live never sees it until you say so.", "Work here first. The live site stays unchanged until you approve it."],
    ["A saved snapshot with a note. Undo to any one.", "A save point with a note. You can return to it later."],
  ]],
  [18, [
    ["Branch", "Safe copy"],
    ["Pull request", "Review screen"],
    ["Preview URL", "Shareable preview"],
    ["Merge", "Approve"],
    ["Production", "Live site"],
    ["Nothing on the branch touches the live site until you merge.", "The live site stays unchanged until you approve the copy."],
  ]],
  [25, [
    ["TYPE THIS, VERBATIM", "COPY THIS · THE AI HANDLES THE TECHNICAL PART"],
    ["Spec sentence", "Your example"],
    ["Playwright test", "Automatic check"],
    ["GitHub check", "Green or red"],
    ["Merge", "Approve"],
    ["The test turns one sentence in spec.md into a repeatable gate. The machine checks it whether you remember or not.", "The AI turns one example into a check it can run every time."],
  ]],
  [24, [
    ["Give the agent a check it can run.", "Give the AI one check it can run."],
  ]],
  [26, [
    ["TYPE THIS, VERBATIM", "COPY THIS · WE ARE BREAKING THE COPY ON PURPOSE"],
    ["Spec sentence", "Your example"],
    ["Playwright test", "Automatic check"],
    ["GitHub check", "Green or red"],
    ["Merge", "Approve"],
    ["Close PR", "Close the copy"],
    ["Production unchanged", "Live site unchanged"],
  ]],
  [28, [
    ["Not merged yet? Find a helper before you find a sandwich. The afternoon starts by breaking production on purpose, and you cannot roll back what you have not shipped.", "Not ready to go live yet? Find a helper before lunch. After lunch, we will practice the undo button and add saved information."],
    ["After lunch: rollback, secrets, review. Then a database, a second sprint, an email alert, the bill, a skill, and a demo. Back at 3:15.", "Then: a second set of eyes, an email alert, simple costs, a reusable checklist, and a short demo. Back at 3:15."],
  ]],
  [29, [
    ["Bad release", "Bad update"],
    ["Previous deployment", "Last working version"],
    ["Instant rollback", "Undo now"],
    ["Fix on branch", "Fix the safe copy"],
    ["Pull request", "Review screen"],
    ["Merge", "Approve"],
    ["Rollback protects the customer. The branch records the real repair.", "Undo protects people now. The safe copy records the real fix."],
  ]],
  [31, [
    ["AUTHOR CONTEXT", "THE MAKER"],
    ["INDEPENDENT CONTEXT", "A FRESH READER"],
    ["Merged change", "Finished change"],
    ["Fresh review", "Second look"],
    ["Top three findings", "What needs attention"],
    ["Partner reproduces", "Partner confirms it"],
    ["Fix on branch", "Fix the safe copy"],
    ["Green check", "Green"],
    ["The person—or model—who made it is carrying assumptions.", "The person or AI that made the change is carrying assumptions."],
    ["A fresh reader gets the diff, not the story you told yourself while writing it.", "A fresh reader sees the change without the assumptions."],
    ["/code-review", "ASK FOR A FRESH REVIEW"],
  ]],
  [35, [
    ["No database yet? Ask a helper for checkpoint-5-database now. The next block builds on it. Back at 4:35.", "Still catching up? Ask a helper now. The next block adds an email alert. Back at 4:35."],
  ]],
  [36, [
    ["Vercel logs", "Your site’s activity log"],
    ["You look", "Check the same day"],
    ["Unhandled error", "Something breaks"],
    ["Sentry", "Optional error alert"],
    ["Monitor is the sixth word. One email and one log page are enough to start.", "One email and one activity page are enough to start."],
  ]],
  [37, [
    ["Vercel env var", "Vercel Environment Variable"],
    ["App runtime", "Your live site"],
    ["× Committed file", "× Saved project file"],
    ["RUNTIME RULE", "THE RULE"],
  ]],
  [40, [
    ["GITHUB", "COPY IN GITHUB"],
    ["TWO-WAY SYNC", "CHANGES MOVE BOTH WAYS"],
    ["BACKEND PORTABLE", "INFORMATION CAN MOVE"],
    ["SURVIVES CANCEL", "STAYS AFTER CANCEL"],
    ["Ask three questions: GitHub? Which-way sync? What survives cancellation?", "Ask: Can I keep the files? Can I move the information? What stops if I cancel?"],
  ]],
  [41, [
    ["Your data", "Saved information"],
    ["Your logins", "Customer accounts"],
    ["Your secrets", "Private keys"],
    ["Your domain", "Web address"],
    ["Your history", "Every saved version"],
    ["These are what the export button leaves behind, and what you moved into your own accounts today.", "An export button may give you only the code. Today you put the rest somewhere you control."],
  ]],
  [43, [
    ["Your code takes card numbers", "The site accepts payments"],
    ["You handle sensitive records", "The site stores health, financial, or private records"],
    ["Repo access, never a password", "Project access, never your password"],
    ["spec.md", "Your short project description"],
    ["Test + known bugs", "The working check and the problems you already know"],
    ["Changes arrive as pull requests", "Changes arrive for review before they go live"],
    ["A PROJECT A DEVELOPER CAN QUOTE", "A PROJECT A DEVELOPER CAN UNDERSTAND AND PRICE"],
  ]],
  [45, [
    ["What kind of instruction is this?", "How often do you need it?"],
    ["Needed every session", "Needed every time"],
    ["A multi-step routine", "A routine you want to repeat"],
    ["CLAUDE.md / AGENTS.md", "Project instructions"],
    ["Skill", "Saved checklist"],
    ["LOADED EVERY SESSION", "ALWAYS AVAILABLE"],
    ["LOADED WHEN INVOKED", "RUNS WHEN YOU ASK"],
    ["Put the rule in the always-on file. Put the repeatable workflow in a skill.", "Keep everyday rules with the project. Save repeatable routines as checklists."],
  ]],
]);

const plainLanguageSnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
for (const record of parseNdjson(plainLanguageSnapshot.ndjson)) {
  const rewrites = plainLanguageRewrites.get(record.slideIndex + 1);
  if (!rewrites || record.kind !== "textbox" || !record.text) continue;
  const shape = presentation.resolve(record.id);
  for (const [from, to] of rewrites) {
    if (record.text.includes(from)) shape.text.replace(from, to);
  }
}

// Rich-text labels imported from PowerPoint can split a phrase across runs.
// Replacing the whole textbox keeps those few room-facing labels plain.
const forcedPlainLanguage = [
  [2, "GitHub + Vercel, for free", "How Git, GitHub, and Vercel work together"],
  [2, "0:20–0:25", "0:00–0:05"],
  [3, "0:20–0:25", "0:00–0:05"],
  [4, "0:20–0:25", "0:00–0:05"],
  [5, "0:20–0:25", "0:00–0:05"],
  [6, "0:00–0:20", "0:05–0:25"],
  [7, "0:00–0:20", "0:05–0:25"],
  [14, "Describe covers Plan + Design. Make is Make. Check is Check.", "Describe covers Plan + Design. Make is Build. Check is Test."],
  [3, "Both live in your repo. Both end with a URL you can hand to another person.", "The site is the main build. The game is the early-finisher path."],
  [18, "ROLLBACK PATH IF LIVE BREAKS", "UNDO PATH IF LIVE BREAKS"],
  [18, "Previous deployment", "Last good version"],
  [18, "Instant rollback", "Undo now"],
  [20, "Still not merged? Grab a helper now.", "Still not live? Grab a helper now."],
  [36, "Hobby log window is short", "Free-plan log window is short"],
  [37, "Committed file", "Saved project file"],
  [37, "When the form is submitted, send an email using RESEND_API_KEY. If email fails, still save the row and log the error. Never put the key in code.", "Keep the key in Vercel under Settings → Environment Variables. A failed email should not lose the request, and the key never belongs in chat or the project."],
  [39, "Rollback reaches one deployment back.", "You can return to the previous live version."],
  [39, "Rollback to any deployment.", "You can return to any saved live version."],
  [41, "Your repo does not care which editor goes out of business.", "Your project files do not care which editor goes out of business."],
  [52, "A test runs on every change.", "A check runs on every change."],
];
const forcedPlainLanguageSnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
for (const record of parseNdjson(forcedPlainLanguageSnapshot.ndjson)) {
  if (record.kind !== "textbox" || !record.text) continue;
  for (const [slideNumber, from, to] of forcedPlainLanguage) {
    if (record.slideIndex + 1 !== slideNumber || !record.text.includes(from)) continue;
    const shape = presentation.resolve(record.id);
    shape.text = record.text.replace(from, to);
    shape.text.style = { ...record.style };
  }
}
appendTechnicalNote(
  37,
  "COPY PROMPT FOR THE HANDOUT OR PRESENTER VIEW: When the form is submitted, send an email using RESEND_API_KEY. If email fails, still save the request and log the error. Never put the key in code.",
);
appendTechnicalNote(
  14,
  `SOURCE EXAMPLE: Claude by Anthropic, The AI-Native SDLC Playbook. The published model uses Plan, Design, Build, Test, Deploy, and Maintain as a loop. This workshop translates those stages into plain language and makes independent human review a separate stop before publish. ${AI_NATIVE_SDLC_URL}`,
);

const processMapSlide = presentation.slides.getItem(12);
processMapSlide.speakerNotes.text = processMapSlide.speakerNotes.text.replace(
  "Point at the strip at the bottom: spec, build, test, review, ship, monitor.",
  "Point at the strip at the bottom: Describe, Make, Check, Second look, Publish, Listen.",
);

const footerLabels = new Map([
  ["SPEC", "DESCRIBE"],
  ["PLAN", "DESCRIBE"],
  ["DESCRIBE", "DESCRIBE"],
  ["BUILD", "MAKE"],
  ["MAKE", "MAKE"],
  ["TEST", "CHECK"],
  ["CHECK", "CHECK"],
  ["REVIEW", "SECOND LOOK"],
  ["SECOND LOOK", "SECOND LOOK"],
  ["SHIP", "PUBLISH"],
  ["PUBLISH", "PUBLISH"],
  ["MONITOR", "LISTEN"],
  ["WATCH", "LISTEN"],
  ["LISTEN", "LISTEN"],
]);
const footerLabelSnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
for (const record of parseNdjson(footerLabelSnapshot.ndjson)) {
  const replacement = footerLabels.get(record.text?.trim());
  if (
    record.kind !== "textbox" ||
    !replacement ||
    (record.position?.top ?? 0) < 640
  ) continue;
  const shape = presentation.resolve(record.id);
  shape.text = replacement;
  shape.text.style = {
    ...record.style,
    fontSize: 9,
    typeface: "Montserrat",
  };
}

// The opening needs a visible finish line before it explains the route. Replace
// the abstract five-part checklist on slide 3 with two concrete course targets.
const buildPreviewSnapshot = await presentation.inspect({
  kind: "textbox,shape,image",
  maxChars: 1000000,
});
const buildPreviewIds = parseNdjson(buildPreviewSnapshot.ndjson)
  .filter((record) => {
    if (record.slideIndex !== 2) return false;
    const top = record.position?.top ?? Number.POSITIVE_INFINITY;
    return top >= 180 && top < 650;
  })
  .map((record) => record.id);
presentation.delete(buildPreviewIds);

const buildPreviewSlide = presentation.slides.getItem(2);
addTextbox(buildPreviewSlide, {
  name: "build-preview-website-label",
  text: "PROJECT 1 · WEBSITE",
  left: 68,
  top: 178,
  width: 580,
  height: 22,
  fontSize: 11,
  color: "#B93800",
  bold: true,
  typeface: "Courier New",
});
addTextbox(buildPreviewSlide, {
  name: "build-preview-game-label",
  text: "PROJECT 2 · GAME",
  left: 708,
  top: 178,
  width: 504,
  height: 22,
  fontSize: 11,
  color: "#B93800",
  bold: true,
  typeface: "Courier New",
});
buildPreviewSlide.images.add({
  blob: websiteExampleBytes,
  contentType: "image/png",
  alt: "ATA Orbit one-page website starter with a Less hype. More aha. headline",
  fit: "cover",
  position: { left: 68, top: 207, width: 580, height: 300 },
  geometry: "roundRect",
  borderRadius: "rounded-xl",
});
buildPreviewSlide.images.add({
  blob: gameExampleBytes,
  contentType: "image/png",
  alt: "Alien Tic-Tac-Toe example showing a board cell that opens a short alien battle",
  fit: "contain",
  position: { left: 708, top: 208, width: 504, height: 158 },
});
addTextbox(buildPreviewSlide, {
  name: "build-preview-website-title",
  text: "A live website",
  left: 68,
  top: 523,
  width: 580,
  height: 32,
  fontSize: 22,
  color: "#0F172A",
  bold: true,
});
addTextbox(buildPreviewSlide, {
  name: "build-preview-website-body",
  text: "Start with a complete page. Get it live, check the main action, then make it yours.",
  left: 68,
  top: 558,
  width: 580,
  height: 48,
  fontSize: 17,
  color: "#475569",
});
addTextbox(buildPreviewSlide, {
  name: "build-preview-game-title",
  text: "Alien Tic-Tac-Toe",
  left: 708,
  top: 394,
  width: 504,
  height: 32,
  fontSize: 22,
  color: "#0F172A",
  bold: true,
});
addTextbox(buildPreviewSlide, {
  name: "build-preview-game-body",
  text: "Pick a square. Battle for it. Win and you place X. Lose and the alien places O.",
  left: 708,
  top: 431,
  width: 504,
  height: 70,
  fontSize: 17,
  color: "#475569",
});
addTextbox(buildPreviewSlide, {
  name: "build-preview-game-check",
  text: "A player can start, finish, and restart a round.",
  left: 708,
  top: 523,
  width: 504,
  height: 48,
  fontSize: 17,
  color: "#0F172A",
  bold: true,
});
addTextbox(buildPreviewSlide, {
  name: "build-preview-takeaway",
  text: "The site is the main build. The game is the early-finisher path.",
  left: 68,
  top: 615,
  width: 1144,
  height: 28,
  fontSize: 18,
  color: "#B93800",
  bold: true,
});
buildPreviewSlide.speakerNotes.text = [
  "0:00–0:05. Show the destination before the process.",
  "The website image is the real ATA Orbit starter included with the course. The game image is the featured Alien Tic-Tac-Toe concept from the participant guide.",
  "The examples are a starting point, not a design everyone has to copy. The site teaches structure and publishing. The game adds rules, state, scoring, and restart.",
  "Each project lives in its own repository and ends with a checked URL. Do not demo source code here. Give the room a picture of the finish line.",
].join("\n");
buildPreviewSlide.speakerNotes.setVisible(true);

// Checkpoint slides should feel like an open conversation, not a wall of
// sticky notes. Slide 20 uses only type, whitespace, and one quiet divider.
const checkpointSnapshot = await presentation.inspect({
  kind: "textbox,shape,image",
  maxChars: 1000000,
});
const checkpointIds = parseNdjson(checkpointSnapshot.ndjson)
  .filter((record) => {
    if (record.slideIndex !== 19) return false;
    const top = record.position?.top ?? Number.POSITIVE_INFINITY;
    return top >= 180 && top < 650;
  })
  .map((record) => record.id);
presentation.delete(checkpointIds);

const checkpointSlide = presentation.slides.getItem(19);
checkpointSlide.shapes.add({
  geometry: "line",
  name: "checkpoint-divider",
  position: { left: 640, top: 205, width: 0, height: 244 },
  fill: "none",
  line: { style: "solid", fill: "#D8E2EF", width: 0.75 },
});

addTextbox(checkpointSlide, {
  name: "checkpoint-learned-number",
  text: "01",
  left: 68,
  top: 207,
  width: 44,
  height: 22,
  fontSize: 12,
  color: "#22C55E",
  bold: true,
  typeface: "Courier New",
});
addTextbox(checkpointSlide, {
  name: "checkpoint-learned-label",
  text: "WHAT CLICKED",
  left: 116,
  top: 207,
  width: 460,
  height: 22,
  fontSize: 12,
  color: "#64748B",
  bold: true,
  typeface: "Courier New",
});
addTextbox(checkpointSlide, {
  name: "checkpoint-learned-title",
  text: "One thing you learned",
  left: 68,
  top: 252,
  width: 500,
  height: 42,
  fontSize: 26,
  color: "#0F172A",
  bold: true,
  typeface: "Verdana",
});
addTextbox(checkpointSlide, {
  name: "checkpoint-learned-body",
  text: "Tell your partner. Be specific: what can you do now that you couldn’t do an hour ago?",
  left: 68,
  top: 315,
  width: 500,
  height: 88,
  fontSize: 18,
  color: "#475569",
});

addTextbox(checkpointSlide, {
  name: "checkpoint-confusing-number",
  text: "02",
  left: 704,
  top: 207,
  width: 44,
  height: 22,
  fontSize: 12,
  color: "#EF4444",
  bold: true,
  typeface: "Courier New",
});
addTextbox(checkpointSlide, {
  name: "checkpoint-confusing-label",
  text: "WHAT’S STILL FUZZY",
  left: 752,
  top: 207,
  width: 460,
  height: 22,
  fontSize: 12,
  color: "#64748B",
  bold: true,
  typeface: "Courier New",
});
addTextbox(checkpointSlide, {
  name: "checkpoint-confusing-title",
  text: "One thing still confusing",
  left: 704,
  top: 252,
  width: 508,
  height: 42,
  fontSize: 26,
  color: "#0F172A",
  bold: true,
  typeface: "Verdana",
});
addTextbox(checkpointSlide, {
  name: "checkpoint-confusing-body",
  text: "Say it out loud. If the room needs it, I’ll reteach it after the break.",
  left: 704,
  top: 315,
  width: 508,
  height: 88,
  fontSize: 18,
  color: "#475569",
});

checkpointSlide.shapes.add({
  geometry: "line",
  name: "checkpoint-break-rule",
  position: { left: 68, top: 499, width: 1144, height: 0 },
  fill: "none",
  line: { style: "solid", fill: "#D8E2EF", width: 0.75 },
});
addTextbox(checkpointSlide, {
  name: "checkpoint-helper-cue",
  text: "Still not live? Grab a helper now.",
  left: 68,
  top: 526,
  width: 760,
  height: 36,
  fontSize: 20,
  color: "#0F172A",
  bold: true,
});
addTextbox(checkpointSlide, {
  name: "checkpoint-return-time",
  text: "Back at 1:35.",
  left: 930,
  top: 526,
  width: 282,
  height: 36,
  fontSize: 20,
  color: "#EF8B39",
  bold: true,
  alignment: "right",
});

const numberSnapshot = await presentation.inspect({
  kind: "textbox",
  search: "/ 51",
  maxChars: 30000,
});
for (const record of parseNdjson(numberSnapshot.ndjson)) {
  if (record.kind !== "textbox" || !record.text?.includes("/ 51")) continue;
  presentation.resolve(record.id).text.replace("/ 51", "/ 52");
}

const afterSlide = presentation.slides.getItem(49);
const { slide: bookSlide } = presentation.slides.insert({
  after: afterSlide,
  background: { fill: "#0D1219" },
});

bookSlide.images.add({
  blob: bookCoverBytes,
  contentType: "image/png",
  alt: "Advance release cover of Software Development for Non-Programmers: Beyond Vibecoding by Mark Hinkle",
  fit: "contain",
  position: { left: 846, top: 36, width: 408, height: 612 },
});

addTextbox(bookSlide, {
  name: "advance-release-eyebrow",
  text: "// BONUS · ADVANCE COPY",
  left: 68,
  top: 52,
  width: 850,
  height: 24,
  fontSize: 14,
  color: "#EF8B39",
  bold: true,
  typeface: "Montserrat",
});
addTextbox(bookSlide, {
  name: "advance-release-time",
  text: "5:50–6:00",
  left: 940,
  top: 52,
  width: 130,
  height: 24,
  fontSize: 12,
  color: "#EF8B39",
  typeface: "Montserrat",
  alignment: "right",
});
addTextbox(bookSlide, {
  name: "book-offer-title",
  text: "Make the book better",
  left: 72,
  top: 108,
  width: 690,
  height: 82,
  fontSize: 52,
  color: "#FFFFFF",
  bold: true,
});
addTextbox(bookSlide, {
  name: "book-offer-body",
  text: "Take an advance copy of Software Development for Non-Programmers.",
  left: 72,
  top: 235,
  width: 660,
  height: 86,
  fontSize: 26,
  color: "#D6DEEA",
});
addTextbox(bookSlide, {
  name: "book-offer-review",
  text: "Read it. Mark it up. Tell me where I lost you.",
  left: 72,
  top: 354,
  width: 660,
  height: 44,
  fontSize: 27,
  color: "#EF8B39",
  bold: true,
});
addTextbox(bookSlide, {
  name: "book-offer-integrity",
  text: "A useful review beats a polite one. Positive, critical, and mixed reviews are welcome.",
  left: 72,
  top: 421,
  width: 660,
  height: 72,
  fontSize: 19,
  color: "#B9C3D1",
});
addTextbox(bookSlide, {
  name: "book-offer-cta",
  text: "Ask me for the advance copy.",
  left: 72,
  top: 525,
  width: 660,
  height: 44,
  fontSize: 26,
  color: "#FFFFFF",
  bold: true,
});
bookSlide.images.add({
  blob: aieLogoBytes,
  contentType: "image/png",
  alt: "The AIE Network",
  fit: "contain",
  position: { left: 72, top: 642, width: 300, height: 33 },
});
addTextbox(bookSlide, {
  name: "book-slide-number",
  text: "51 / 52",
  left: 1140,
  top: 670,
  width: 90,
  height: 24,
  fontSize: 12,
  color: "#7B8594",
  typeface: "Courier New",
});
bookSlide.speakerNotes.text = [
  "I wrote this because non-programmers deserve a path from an idea to something they can own.",
  "If you want the advance copy, ask me for one. Read it, mark it up, and tell me where I lost you.",
  "Ask for an honest review. A useful review beats a polite one; do not imply that a favorable review is required.",
].join("\n");
bookSlide.speakerNotes.setVisible(true);

addImageCue(presentation.slides.getItem(28), {
  bytes: undoIconBytes,
  name: "undo-cue",
  alt: "Undo arrow",
  left: 490,
  top: 101,
  width: 46,
  height: 46,
});
appendTechnicalNote(29, "ICON: Lucide rotate counterclockwise icon, ISC License: https://lucide.dev/license");

addImageCue(presentation.slides.getItem(29), {
  bytes: lockIconBytes,
  name: "secret-key-cue",
  alt: "Lock with keyhole",
  left: 562,
  top: 101,
  width: 46,
  height: 46,
});
appendTechnicalNote(30, "ICON: Lucide lock keyhole icon, ISC License: https://lucide.dev/license");

addImageCue(presentation.slides.getItem(32), {
  bytes: databaseIconBytes,
  name: "database-cue",
  alt: "Database",
  left: 520,
  top: 101,
  width: 46,
  height: 46,
});
appendTechnicalNote(33, "ICON: Lucide database icon, ISC License: https://lucide.dev/license");

addImageCue(presentation.slides.getItem(36), {
  bytes: mailIconBytes,
  name: "inbox-cue",
  alt: "Email envelope",
  left: 1048,
  top: 232,
  width: 28,
  height: 28,
});
appendTechnicalNote(37, "ICON: Lucide mail icon, ISC License: https://lucide.dev/license");

appendTechnicalNote(
  52,
  "TRADEMARK NOTICE: Vercel, the Vercel design, Next.js and related marks, designs and logos are trademarks or registered trademarks of Vercel, Inc. or its affiliates in the US and other countries. GitHub and the GitHub logo are trademarks of GitHub, Inc. Git and the Git logo are trademarks of Software Freedom Conservancy, Inc., corporate home of the Git Project.",
);

if (presentation.slides.items.length !== 52) {
  throw new Error(`Expected 52 slides, found ${presentation.slides.items.length}`);
}

// Normalize the inherited source deck to the same small, web-aligned type system
// used by the redesigned slides. PowerPoint uses Courier New as the portable
// adapter for the website's JetBrains Mono stack.
const typographySnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
const typographyRecords = parseNdjson(typographySnapshot.ndjson);
for (const record of typographyRecords) {
  if (record.kind === "textbox") {
    const currentTypeface = record.style?.typeface;
    const fontSize = record.style?.fontSize ?? 0;
    const trimmed = record.text?.trim() ?? "";
    const isMetric = /^[~$]?[0-9]/.test(trimmed) && fontSize >= 28;
    const isSlideTitle =
      (record.position?.top ?? Number.POSITIVE_INFINITY) <= 185 &&
      fontSize >= 28 &&
      !isMetric;
    const typeface =
      currentTypeface === "Courier New"
        ? "Courier New"
        : isSlideTitle
          ? "Verdana"
          : "Montserrat";

    if (typeface !== currentTypeface) {
      const shape = presentation.resolve(record.id);
      shape.text.style = { ...record.style, typeface };
    }
  }

}

const sourceSha256 = await fileSha256(SOURCE_PPTX);
const candidatePath = path.join(STAGING_DIR, "candidate.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
await normalizePptxTypefaceRuns(candidatePath);
await addExternalShapeHyperlink(candidatePath, {
  slideNumber: 14,
  shapeName: "sdlc-source-link",
  url: AI_NATIVE_SDLC_URL,
});

const { finalizePresentation } = await import(
  pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href
);
const requirements = {
  explicitTotalSlideCount: 52,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  sourceTemplatePath: SOURCE_PPTX,
};
const fontPolicy = {
  basis: "design",
  families: ["Courier New", "Montserrat", "Verdana"],
};
const result = await finalizePresentation({
  ...requirements,
  workspaceDir: TASK_ROOT,
  candidatePath,
  finalPath: FINAL_PPTX,
  pythonExecutable: RUNTIME_PYTHON,
  integrityValidatorPath: path.join(
    SKILL_DIR,
    "container_tools/inspect_presentation_package_integrity.py",
  ),
  layoutValidatorPath: path.join(
    SKILL_DIR,
    "container_tools/inspect_presentation_layout_geometry.py",
  ),
  layoutArgs: [
    "--expected-slide-size-emu",
    "12192000,6858000",
    "--validate-bullet-geometry",
    "--validate-heading-fit",
  ],
  requiredNativeTableOwnerSlides: [],
  fontPolicy,
  verifyArtifactToolImport: true,
  receiptPath: path.join(STAGING_DIR, `${path.basename(FINAL_PPTX)}.validation.json`),
});

const finalPresentation = await PresentationFile.importPptx(
  await FileBlob.load(FINAL_PPTX),
);
const renderDir = path.join(BUILD_DIR, "canonical-six-steps-v26-render");
await fs.mkdir(renderDir, { recursive: true });
for (const [index, slide] of finalPresentation.slides.items.entries()) {
  const png = await slide.export({ format: "png", scale: 1 });
  await fs.writeFile(
    path.join(renderDir, `slide-${String(index + 1).padStart(2, "0")}.png`),
    new Uint8Array(await png.arrayBuffer()),
  );
}
const montage = await finalPresentation.export({
  format: "webp",
  montage: true,
  scale: 0.5,
});
await fs.writeFile(
  path.join(BUILD_DIR, "canonical-six-steps-v26-montage.webp"),
  new Uint8Array(await montage.arrayBuffer()),
);

console.log(
  JSON.stringify({
    finalPath: FINAL_PPTX,
    slides: finalPresentation.slides.items.length,
    sourceSha256,
    finalSha256: await fileSha256(FINAL_PPTX),
    validation: result,
  }),
);
