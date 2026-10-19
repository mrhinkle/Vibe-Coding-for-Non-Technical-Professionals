import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";
import JSZip from "jszip";
import { D, addDot, addPanel, addText } from "./design-system.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TASK_ROOT = "/Users/mrhinkle/Documents/Codex/2026-10-16/lo";
const SKILL_DIR =
  "/Users/mrhinkle/.codex/plugins/cache/openai-primary-runtime/presentations/26.1017.11052/skills/presentations";
const RUNTIME_PYTHON =
  "/Users/mrhinkle/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const SOURCE_PPTX = path.join(
  TASK_ROOT,
  "outputs/ai-agents-vibe-coding-ato-2026-canonical-six-steps-v26.pptx",
);
const OUTPUT_DIR = path.join(TASK_ROOT, "outputs");
const BUILD_DIR = path.join(TASK_ROOT, "work/course-deck-edit/.codex-build");
const STAGING_DIR = path.join(TASK_ROOT, "work/course-deck-edit/.codex-finalizer");
const FINAL_PPTX = path.join(
  OUTPUT_DIR,
  "ai-agents-vibe-coding-ato-2026-model-review-v45.pptx",
);
const RENDER_DIR = path.join(BUILD_DIR, "model-review-v45-render");
const MONTAGE_PATH = path.join(BUILD_DIR, "model-review-v45-montage.webp");

const WEBSITE_EXAMPLE = path.join(
  TASK_ROOT,
  "work/course-deck-edit/website-starters/previews/ata-orbit.png",
);
const GAME_EXAMPLE = path.join(HERE, "assets/alien-tic-tac-toe-example.png");
const GIT_LOGO = path.join(HERE, "assets/logo-git.png");
const GITHUB_LOGO = path.join(HERE, "assets/logo-github.png");
const VERCEL_LOGO = path.join(HERE, "assets/logo-vercel.png");
const CLAUDE_LOGO = path.join(HERE, "assets/logo-claude-official.png");
const OPENAI_WORDMARK = path.join(HERE, "assets/logo-openai-wordmark-official.png");
const XAI_LOGO = path.join(HERE, "assets/logo-xai-official.png");
const GITHUB_SCREENSHOT = path.join(
  HERE,
  "assets/github-course-repo-2026-10-18-crop.jpg",
);
const VERCEL_SCREENSHOT = path.join(
  HERE,
  "assets/vercel-new-project-2026-10-18-crop.jpg",
);
const REFERENCE_ASSET_DIR = path.join(
  TASK_ROOT,
  "work/course-deck-edit/presentations/reference-six-hour-class/assets",
);
const HEADSHOT = path.join(REFERENCE_ASSET_DIR, "headshot.png");
const AGENT_ART = path.join(HERE, "assets/agent-system-light-v1.png");
const LOOP_ART = path.join(HERE, "assets/lifecycle-loop-light-v1.png");
const BREAK_ART = path.join(HERE, "assets/exercise-transition-light-v1.png");
const WORK_ART = path.join(HERE, "assets/monday-work-light-v1.png");

const SDLC_URL = "https://claude.com/resources/articles/the-ai-native-sdlc-playbook";
const COURSE_REPO_URL =
  "https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals";
const GITHUB_ACCOUNT_URL =
  "https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account";
const VERCEL_ACCOUNT_URL = "https://vercel.com/docs/accounts";
const VERCEL_GIT_URL = "https://vercel.com/docs/git";
const VERCEL_HOBBY_URL = "https://vercel.com/docs/limits/fair-use-guidelines";
const LOVABLE_URL = "https://lovable.dev/build/no-code-app-builder";
const BOLT_URL = "https://support.bolt.new/building/intro-bolt";
const BASE44_URL = "https://base44.com/blog/what-is-base44";
const REPLIT_URL =
  "https://docs.replit.com/replit-workspace/workspace-features/version-control";
const CLAUDE_CODE_URL =
  "https://docs.anthropic.com/en/docs/claude-code/getting-started";
const CODEX_URL = "https://openai.com/codex/";
const GROK_BUILD_URL = "https://x.ai/build";
const MARK_BIO_URL = "https://2026.allthingsai.org/speakers/mark-hinkle";
const ORGANIZERS_URL = "https://2026.allthingsai.org/meet-the-organizers";
const MCP_SERVER_URL = "https://modelcontextprotocol.io/specification/draft/server/index";
const COMPOSIO_CONNECT_URL = "https://docs.composio.dev/docs/composio-connect";
const OPENROUTER_CHAT_URL = "https://openrouter.ai/chat";

const STAGES = ["PLAN", "DESIGN", "BUILD", "TEST", "DEPLOY", "MAINTAIN"];
const MAIN_KINDS = new Set(["textbox", "shape", "image", "table", "chart"]);

function parseNdjson(ndjson) {
  return ndjson
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

async function fileSha256(filePath) {
  return crypto.createHash("sha256").update(await fs.readFile(filePath)).digest("hex");
}

async function imageBlob(imagePath) {
  const bytes = await fs.readFile(imagePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function addLine(slide, {
  left,
  top,
  width,
  height = 0,
  color = D.hairline,
  weight = 1,
  style = "solid",
}) {
  const normalizedLeft = width < 0 ? left + width : left;
  const normalizedTop = height < 0 ? top + height : top;
  return slide.shapes.add({
    geometry: "line",
    position: {
      left: normalizedLeft,
      top: normalizedTop,
      width: Math.abs(width),
      height: Math.abs(height),
    },
    fill: "none",
    line: { style, fill: color, width: weight },
  });
}

function addHeader(slide, {
  eyebrow,
  time,
  title,
  accent = D.blue,
}) {
  addText(slide, {
    text: eyebrow,
    left: 68,
    top: 52,
    width: 850,
    height: 24,
    fontSize: 14,
    color: accent,
    bold: true,
  });
  addText(slide, {
    text: time,
    left: 940,
    top: 52,
    width: 130,
    height: 24,
    fontSize: 12,
    color: accent === D.orange ? D.editorialOrange : D.mutedLine,
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
}

function addSectionLabel(slide, text, top = 178, color = D.editorialOrange) {
  addText(slide, {
    text,
    left: 78,
    top,
    width: 1124,
    height: 20,
    fontSize: 12,
    color,
    bold: true,
    typeface: "Courier New",
  });
}

function addBottomStatement(slide, text, {
  top = 520,
  color = D.ink,
  size = 18,
  align = "left",
} = {}) {
  addLine(slide, { left: 68, top: top - 26, width: 1144, color: D.hairline });
  addText(slide, {
    text,
    left: 78,
    top,
    width: 1124,
    height: 58,
    fontSize: size,
    color,
    bold: true,
    alignment: align,
  });
}

function addOpenColumns(slide, items, {
  top = 235,
  height = 210,
  numberColor = D.blue,
  titleSize = 18,
  bodySize = 16,
} = {}) {
  const left = 78;
  const width = 1124;
  const gap = 24;
  const columnWidth = (width - gap * (items.length - 1)) / items.length;
  items.forEach((item, index) => {
    const x = left + index * (columnWidth + gap);
    if (index > 0) {
      addLine(slide, {
        left: x - gap / 2,
        top,
        width: 0,
        height,
        color: D.hairline,
      });
    }
    addText(slide, {
      text: String(index + 1).padStart(2, "0"),
      left: x,
      top,
      width: 40,
      height: 20,
      fontSize: 12,
      color: numberColor,
      typeface: "Courier New",
    });
    addText(slide, {
      text: item.title,
      left: x,
      top: top + 46,
      width: columnWidth - 4,
      height: 54,
      fontSize: titleSize,
      color: D.ink,
      bold: true,
    });
    addText(slide, {
      text: item.body,
      left: x,
      top: top + 112,
      width: columnWidth - 4,
      height: height - 108,
      fontSize: bodySize,
      color: D.slate,
    });
  });
}

function addProcess(slide, labels, {
  left = 68,
  top = 238,
  width = 1144,
  activeIndex = -1,
  descriptions = [],
  nodeHeight = 62,
} = {}) {
  const gap = 14;
  const nodeWidth = (width - gap * (labels.length - 1)) / labels.length;
  const centers = [];
  labels.forEach((label, index) => {
    const x = left + index * (nodeWidth + gap);
    const active = index === activeIndex;
    centers.push(x + nodeWidth / 2);
    if (index < labels.length - 1) {
      addLine(slide, {
        left: x + nodeWidth,
        top: top + nodeHeight / 2,
        width: gap,
        color: active ? D.orange : D.mutedLine,
      });
    }
    addPanel(slide, {
      left: x,
      top,
      width: nodeWidth,
      height: nodeHeight,
      fill: active ? D.orange : D.white,
      line: active ? D.orange : D.hairline,
      radius: 12,
    });
    addText(slide, {
      text: label,
      left: x + 6,
      top: top + 19,
      width: nodeWidth - 12,
      height: 26,
      fontSize: 17,
      color: active ? D.white : D.ink,
      bold: true,
      alignment: "center",
    });
    if (descriptions[index]) {
      addText(slide, {
        text: descriptions[index],
        left: x + 2,
        top: top + nodeHeight + 24,
        width: nodeWidth - 4,
        height: 86,
        fontSize: 14,
        color: D.slate,
        alignment: "center",
      });
    }
  });
  return centers;
}

function addStageFooter(slide, activeIndex = -1) {
  const centers = [385, 487, 589, 691, 793, 895];
  addLine(slide, {
    left: centers[0],
    top: 670,
    width: centers.at(-1) - centers[0],
    color: D.hairline,
    weight: 0.6,
  });
  if (activeIndex >= 0) {
    addLine(slide, {
      left: Math.max(centers[0], centers[activeIndex] - 38),
      top: 670,
      width: activeIndex === 0 || activeIndex === STAGES.length - 1 ? 38 : 76,
      color: D.orange,
      weight: 3,
    });
  }
  STAGES.forEach((stage, index) => {
    const active = index === activeIndex;
    addDot(slide, {
      left: centers[index] - (active ? 5 : 3.5),
      top: 670 - (active ? 5 : 3.5),
      size: active ? 10 : 7,
      fill: active ? D.orange : D.white,
      line: active ? D.orange : D.mutedLine,
    });
    addText(slide, {
      text: stage,
      left: centers[index] - 42,
      top: 681,
      width: 84,
      height: 14,
      fontSize: 9,
      color: active ? D.editorialOrange : D.mutedLine,
      bold: active,
      typeface: "Montserrat",
      alignment: "center",
    });
  });
}

function addImageFrame(slide, {
  blob,
  contentType,
  alt,
  left,
  top,
  width,
  height,
  fit = "contain",
}) {
  addPanel(slide, {
    left: left - 2,
    top: top - 2,
    width: width + 4,
    height: height + 4,
    fill: D.white,
    line: D.hairline,
    radius: 14,
  });
  return slide.images.add({
    blob,
    contentType,
    alt,
    fit,
    position: { left, top, width, height },
  });
}

function setNotes(slide, lines) {
  slide.speakerNotes.text = lines.join("\n");
  slide.speakerNotes.setVisible(true);
}

function clearMainContent(presentation, records, slideNumber) {
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

function clearFooterRail(presentation, records, slideNumber) {
  const slideIndex = slideNumber - 1;
  const ids = records
    .filter((record) =>
      record.slideIndex === slideIndex &&
      ["textbox", "shape"].includes(record.kind) &&
      (record.position?.top ?? 0) >= 640 &&
      (record.position?.left ?? 0) >= 300 &&
      (record.position?.left ?? 0) <= 1000,
    )
    .map((record) => record.id);
  presentation.delete(ids);
}

function replaceRecordText(presentation, records, slideNumber, search, replacement) {
  const record = records.find((entry) =>
    entry.slideIndex === slideNumber - 1 &&
    entry.kind === "textbox" &&
    entry.text?.includes(search),
  );
  if (!record) throw new Error(`Could not find text on slide ${slideNumber}: ${search}`);
  const shape = presentation.resolve(record.id);
  shape.text = record.text.replace(search, replacement);
  shape.text.style = { ...record.style };
}

function addStepSlide(presentation, records, slideNumber, {
  eyebrow,
  time,
  title,
  label,
  items,
  bottom,
  active = -1,
  accent = D.blue,
  notes = [],
}) {
  clearMainContent(presentation, records, slideNumber);
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow, time, title, accent });
  addSectionLabel(slide, label, 178, accent === D.orange ? D.editorialOrange : D.editorialOrange);
  addLine(slide, { left: 68, top: 211, width: 1144, color: D.hairline });
  addOpenColumns(slide, items);
  addBottomStatement(slide, bottom);
  setNotes(slide, notes);
  return slide;
}

function addReviewSlide(presentation, records, slideNumber, {
  eyebrow,
  time,
  title,
  label,
  checks,
  question,
  notes,
}) {
  clearMainContent(presentation, records, slideNumber);
  const slide = presentation.slides.getItem(slideNumber - 1);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow, time, title, accent: D.orange });
  addSectionLabel(slide, label, 178, D.editorialOrange);
  addLine(slide, { left: 68, top: 211, width: 1144, color: D.hairline });
  const top = 250;
  checks.forEach((check, index) => {
    const y = top + index * 62;
    addText(slide, {
      text: String(index + 1).padStart(2, "0"),
      left: 78,
      top: y,
      width: 42,
      height: 22,
      fontSize: 12,
      color: D.orange,
      typeface: "Courier New",
    });
    addText(slide, {
      text: check,
      left: 142,
      top: y - 3,
      width: 1040,
      height: 34,
      fontSize: 18,
      color: D.ink,
      bold: true,
    });
  });
  addBottomStatement(slide, question, { top: 548, color: D.editorialOrange, size: 16 });
  setNotes(slide, notes);
}

async function addExternalShapeHyperlink(pptxPath, {
  slideNumber,
  shapeName,
  url,
}) {
  const zip = await JSZip.loadAsync(await fs.readFile(pptxPath));
  const slidePath = `ppt/slides/slide${slideNumber}.xml`;
  const relsPath = `ppt/slides/_rels/slide${slideNumber}.xml.rels`;
  let slideXml = await zip.file(slidePath).async("string");
  let relsXml = await zip.file(relsPath).async("string");
  const ids = [...relsXml.matchAll(/\bId="rId(\d+)"/g)].map((match) => Number(match[1]));
  const relId = `rId${Math.max(0, ...ids) + 1}`;
  const escaped = shapeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const selfClosing = new RegExp(`<p:cNvPr([^>]*\\bname="${escaped}"[^>]*)\\/>`);
  const paired = new RegExp(`(<p:cNvPr[^>]*\\bname="${escaped}"[^>]*>)([\\s\\S]*?)(</p:cNvPr>)`);
  const link = `<a:hlinkClick r:id="${relId}" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>`;
  if (selfClosing.test(slideXml)) {
    slideXml = slideXml.replace(selfClosing, `<p:cNvPr$1>${link}</p:cNvPr>`);
  } else if (paired.test(slideXml)) {
    slideXml = slideXml.replace(paired, `$1${link}$2$3`);
  } else {
    throw new Error(`Could not find cNvPr for ${shapeName}`);
  }
  relsXml = relsXml.replace(
    "</Relationships>",
    `<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${url}" TargetMode="External"/></Relationships>`,
  );
  zip.file(slidePath, slideXml);
  zip.file(relsPath, relsXml);
  await fs.writeFile(
    pptxPath,
    await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }),
  );
}

const [
  websiteBytes,
  gameBytes,
  gitLogoBytes,
  githubLogoBytes,
  vercelLogoBytes,
  claudeLogoBytes,
  openaiWordmarkBytes,
  xaiLogoBytes,
  githubScreenshotBytes,
  vercelScreenshotBytes,
  headshotBytes,
  agentArtBytes,
  loopArtBytes,
  breakArtBytes,
  workArtBytes,
] = await Promise.all([
  imageBlob(WEBSITE_EXAMPLE),
  imageBlob(GAME_EXAMPLE),
  imageBlob(GIT_LOGO),
  imageBlob(GITHUB_LOGO),
  imageBlob(VERCEL_LOGO),
  imageBlob(CLAUDE_LOGO),
  imageBlob(OPENAI_WORDMARK),
  imageBlob(XAI_LOGO),
  imageBlob(GITHUB_SCREENSHOT),
  imageBlob(VERCEL_SCREENSHOT),
  imageBlob(HEADSHOT),
  imageBlob(AGENT_ART),
  imageBlob(LOOP_ART),
  imageBlob(BREAK_ART),
  imageBlob(WORK_ART),
]);

const presentation = await PresentationFile.importPptx(await FileBlob.load(SOURCE_PPTX));
const sourceSnapshot = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart,notes",
  maxChars: 1000000,
});
const records = parseNdjson(sourceSnapshot.ndjson);

clearMainContent(presentation, records, 2);
{
  const slide = presentation.slides.getItem(1);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "// OPENING · THE PROMISE",
    time: "0:02–0:05",
    title: "This is a workshop",
  });
  addSectionLabel(slide, "CHOOSE YOUR OWN ADVENTURE · WE WILL BUILD THE MATERIALS WITH YOU");
  addText(slide, {
    text: "I am not training you to become a programmer.",
    left: 78,
    top: 228,
    width: 1100,
    height: 54,
    fontSize: 28,
    color: D.ink,
    bold: true,
  });
  addText(slide, {
    text: "We’ll start with two core builds. Your questions decide where we slow down, what we explain, and what we add to the course repository.",
    left: 78,
    top: 300,
    width: 1040,
    height: 90,
    fontSize: 22,
    color: D.slate,
  });
  addOpenColumns(slide, [
    { title: "Build it", body: "Use an AI coding agent to turn plain language into working files." },
    { title: "Test it", body: "Try the important action. Record what passed, failed, or was not tested." },
    { title: "Own it", body: "Keep the project, its history, and its live URL in accounts you control." },
  ], { top: 390, height: 160, titleSize: 18, bodySize: 15 });
  addBottomStatement(
    slide,
    "We’ll vibe code the workshop materials in front of you—then put the useful changes back in the repo.",
    { top: 580, color: D.editorialOrange, size: 18 },
  );
  setNotes(slide, [
    "Say the promise plainly: this is a workshop, not passive training and not programmer certification.",
    "Success is confidence grounded in observable work: two projects, two repositories, two Vercel projects, and two checked URLs.",
    "Treat the workshop materials as a living project. A useful question can become an issue, an edit, a review, and an accepted update to the course repository.",
    "Choose your own adventure means the room can shape the explanation and examples. The website and game remain the two core builds so the workshop still has a clear finish line.",
  ]);
}
replaceRecordText(presentation, records, 3, "A site and a game", "Two projects, one process");
replaceRecordText(
  presentation,
  records,
  3,
  "The site is the main build. The game is the early-finisher path.",
  "Both projects use the same six steps. Each gets its own GitHub repository, Vercel project, and live URL.",
);
setNotes(presentation.slides.getItem(2), [
  "Show the destination before the vocabulary. Both builds are required workshop exercises.",
  "The website image is the ATA Orbit starter. The game image is the featured Alien Tic-Tac-Toe concept.",
  "Each project ends in its own learner-owned GitHub repository, Vercel project, and checked URL.",
]);

// Slide 4: explain vibe coding before asking participants to use it.
clearMainContent(presentation, records, 4);
{
  const slide = presentation.slides.getItem(3);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "// BEFORE WE BUILD · VIBE CODING",
    time: "0:10–0:20",
    title: "What vibe coding means",
  });
  addSectionLabel(slide, "PLAIN LANGUAGE → WORKING SOFTWARE → HUMAN JUDGMENT");
  addProcess(slide, ["Say it", "AI makes", "Open it", "React"], {
    left: 120,
    top: 245,
    width: 1040,
    nodeHeight: 68,
    descriptions: [
      "Say what you want in words you already use.",
      "The model writes or changes the project files.",
      "Use the result instead of admiring the prompt.",
      "Say what worked, what surprised you, and what changes next.",
    ],
  });
  addBottomStatement(slide, "The vibe gets you moving. The lifecycle keeps the result honest.", { top: 520 });
  setNotes(slide, [
    "Vibe coding means guiding software with natural language and visible feedback. It does not mean accepting the first output without checking it.",
    "Do not ask participants to read code. Ask them to explain the result and try the important action.",
  ]);
}

// Slide 5: define the agent as a worker inside the project, not a magic answer box.
clearMainContent(presentation, records, 5);
{
  const slide = presentation.slides.getItem(4);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "// BEFORE WE BUILD · CODING AGENTS",
    time: "0:20–0:30",
    title: "What a coding agent does",
  });
  addSectionLabel(slide, "IT CAN WORK ACROSS THE PROJECT · YOU STILL SET THE GOAL AND THE STOP");
  addProcess(slide, ["Read", "Plan", "Edit", "Check", "Report"], {
    top: 248,
    descriptions: [
      "Opens the README, instructions, and current files.",
      "Proposes the smallest useful change.",
      "Creates or updates the actual files.",
      "Runs a check or tells you what to try.",
      "Names what changed, what passed, and what remains.",
    ],
  });
  addText(slide, {
    text: "CLAUDE CODE · GROK BUILD · CHATGPT / CODEX · OTHER CODING AGENTS",
    left: 78,
    top: 492,
    width: 1124,
    height: 24,
    fontSize: 13,
    color: D.editorialOrange,
    bold: true,
    typeface: "Courier New",
    alignment: "center",
  });
  addBottomStatement(slide, "A chatbot talks about a project. A coding agent can work inside one—if you give it access.", { top: 548, size: 17 });
  setNotes(slide, [
    "Available capabilities differ by product, account, connection, and session. Ask the agent to say which files it actually read and which actions it can actually take.",
    "Ordinary ChatGPT can discuss or read connected content, while Codex is the coding surface for code changes. The portable fallback is to attach the course pack and project files, then receive complete files back.",
  ]);
}

// Slide 6: the lifecycle comes before the accounts and tools.
clearMainContent(presentation, records, 6);
{
  const slide = presentation.slides.getItem(5);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "// START HERE · THE LIFECYCLE",
    time: "0:30–0:45",
    title: "Six steps to working software",
  });
  addSectionLabel(slide, "THE SAME LOOP FOR THE WEBSITE AND THE GAME");
  const lifecycleSteps = [
    ["01", "Plan", "Name the person, the goal, and the finish line."],
    ["02", "Design", "Map the experience and decide what must stay true."],
    ["03", "Build", "Change a safe copy in small increments."],
    ["04", "Test", "Try the important action and get a fresh look."],
    ["05", "Deploy", "Publish the checked version to the intended home."],
    ["06", "Maintain", "Watch use, fix problems, and plan the next change."],
  ];
  lifecycleSteps.forEach(([number, title, body], index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const left = 78 + column * 350;
    const top = 230 + row * 92;
    addText(slide, {
      text: number,
      left,
      top,
      width: 34,
      height: 18,
      fontSize: 11,
      color: D.blue,
      typeface: "Courier New",
    });
    addText(slide, {
      text: title,
      left: left + 46,
      top: top - 4,
      width: 130,
      height: 26,
      fontSize: 17,
      color: D.ink,
      bold: true,
    });
    addText(slide, {
      text: body,
      left: left + 46,
      top: top + 28,
      width: 260,
      height: 42,
      fontSize: 14,
      color: D.slate,
    });
  });
  addImageFrame(slide, {
    blob: loopArtBytes,
    contentType: "image/png",
    alt: "A light circular workflow with six checkpoints and one orange human decision",
    left: 828,
    top: 214,
    width: 320,
    height: 280,
    fit: "cover",
  });
  addBottomStatement(slide, "Website first. Game second. Same loop both times.", { top: 530 });
  const sourceLink = addText(slide, {
    text: "COMPANION READING  Claude’s AI-Native SDLC Playbook  ↗",
    left: 78,
    top: 600,
    width: 640,
    height: 22,
    fontSize: 13,
    color: D.electric,
    bold: true,
    typeface: "Montserrat",
    name: "sdlc-source-link-v28",
  });
  sourceLink.name = "sdlc-source-link-v28";
  setNotes(slide, [
    "Start with the lifecycle before account setup. Participants should know why each tool appears before they create the account.",
    `Companion source: Claude by Anthropic, The AI-Native SDLC Playbook. ${SDLC_URL}`,
    "The footer, exercises, review slides, and take-home checklist use the source framework consistently: Plan, Design, Build, Test, Deploy, Maintain.",
    "The light lifecycle illustration was generated for this workshop. Use it as a visual mnemonic for repetition, not as a literal product interface.",
  ]);
}

// Slide 7: compare typical starting points without turning it into a product ranking.
clearMainContent(presentation, records, 7);
{
  const slide = presentation.slides.getItem(6);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// BEFORE WE BUILD · TWO STARTING POINTS", time: "0:45–0:55", title: "Two ways to start" });
  addSectionLabel(slide, "LOVABLE · BOLT.NEW · BASE44 · REPLIT · AND OTHERS");
  addText(slide, {
    text: "PROMPT-FIRST HOSTED BUILDER",
    left: 78,
    top: 222,
    width: 500,
    height: 26,
    fontSize: 13,
    color: D.editorialOrange,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    text: "Prompt → preview → publish",
    left: 78,
    top: 266,
    width: 500,
    height: 44,
    fontSize: 24,
    color: D.ink,
    bold: true,
  });
  addText(slide, {
    text: "Gets to a convincing first version quickly. Hosting and common services stay close at hand. Many now connect to GitHub too.",
    left: 78,
    top: 328,
    width: 490,
    height: 116,
    fontSize: 18,
    color: D.slate,
  });
  addLine(slide, { left: 640, top: 218, width: 0, height: 265, color: D.hairline });
  addText(slide, {
    text: "REPO-FIRST AGENT + SIX STEPS",
    left: 714,
    top: 222,
    width: 500,
    height: 26,
    fontSize: 13,
    color: D.blue,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    text: "Brief → repo → check → review → publish",
    left: 714,
    top: 266,
    width: 500,
    height: 44,
    fontSize: 24,
    color: D.ink,
    bold: true,
  });
  addText(slide, {
    text: "Takes a little longer at the start. The brief, files, versions, checks, second look, hosting project, and live URL stay visible.",
    left: 714,
    top: 328,
    width: 470,
    height: 116,
    fontSize: 18,
    color: D.slate,
  });
  addBottomStatement(slide, "Builders make the first version fast. The lifecycle makes later changes easier to test, deploy, and recover.", { top: 520, size: 17 });
  setNotes(slide, [
    "This is a comparison of typical starting points, not a feature matrix or product ranking. Hosted builders increasingly include planning, testing, code views, checkpoints, deployment controls, and GitHub workflows.",
    `Lovable overview, accessed October 18, 2026: ${LOVABLE_URL}`,
    `Bolt overview, accessed October 18, 2026: ${BOLT_URL}`,
    `Base44 overview, accessed October 18, 2026: ${BASE44_URL}`,
    `Replit version-control overview, accessed October 18, 2026: ${REPLIT_URL}`,
  ]);
}

addStepSlide(presentation, records, 8, {
  eyebrow: "// START HERE · THE DAY",
  time: "0:55–1:00",
  title: "The workshop plan",
  label: "FOUR PARTS · TWO COMPLETE BUILDS",
  items: [
    { title: "Learn the loop", body: "Use the six steps once so every later screen has a purpose." },
    { title: "Set up the homes", body: "Create GitHub and Vercel accounts. Connect them before the first build." },
    { title: "Build twice", body: "Make a website, then a game. Each project travels through the full loop." },
    { title: "Show the proof", body: "Leave with two repositories, two Vercel projects, and two URLs." },
  ],
  bottom: "Every exercise starts with what you will learn and ends with a review.",
  notes: [
    "The website block comes first. The game block repeats the same lifecycle with more visible states and behavior.",
    "Setup and the final demonstration are support structure, not extra exercises.",
  ],
});

clearMainContent(presentation, records, 9);
{
  const slide = presentation.slides.getItem(8);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// SETUP · THE TOOLCHAIN", time: "1:00–1:05", title: "Git, GitHub, and Vercel" });
  addSectionLabel(slide, "THREE JOBS · ONE LIVE URL");
  const columns = [
    { x: 92, logo: gitLogoBytes, type: "image/png", alt: "Git logo", name: "Git", body: "Remembers every deliberate saved version inside the project." },
    { x: 446, logo: githubLogoBytes, type: "image/png", alt: "GitHub logo", name: "GitHub", body: "Keeps the files and their history online under your account." },
    { x: 800, logo: vercelLogoBytes, type: "image/png", alt: "Vercel logo", name: "Vercel", body: "Reads the GitHub project and publishes a web address." },
  ];
  columns.forEach((column, index) => {
    if (index > 0) addLine(slide, { left: column.x - 50, top: 236, width: 0, height: 210 });
    slide.images.add({
      blob: column.logo,
      contentType: column.type,
      alt: column.alt,
      fit: "contain",
      position: { left: column.x, top: 230, width: 118, height: 82 },
    });
    addText(slide, { text: column.name, left: column.x, top: 330, width: 250, height: 36, fontSize: 22, color: D.ink, bold: true });
    addText(slide, { text: column.body, left: column.x, top: 378, width: 280, height: 78, fontSize: 17, color: D.slate });
  });
  addBottomStatement(slide, "The agent changes files. Git remembers. GitHub holds the project. Vercel publishes it.", { top: 520 });
  setNotes(slide, [
    "Keep the jobs distinct. If participants can repeat this sentence, the later setup screens have a place in the mental model.",
    `Official Vercel Git deployment documentation, accessed October 18, 2026: ${VERCEL_GIT_URL}`,
  ]);
}

clearMainContent(presentation, records, 10);
{
  const slide = presentation.slides.getItem(9);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// SETUP · COURSE REPOSITORY", time: "1:05–1:15", title: "Start with the course repo" });
  addSectionLabel(slide, "THE LESSONS · THE STARTERS · THE PROMPT THAT GETS YOU MOVING");
  const repoLink = addText(slide, {
    text: "github.com/mrhinkle/\nVibe-Coding-for-Non-Technical-Professionals  ↗",
    left: 78,
    top: 220,
    width: 458,
    height: 44,
    fontSize: 17,
    color: D.electric,
    bold: true,
    name: "course-repo-link-v34",
  });
  repoLink.name = "course-repo-link-v34";
  addText(slide, {
    text: "PASTE THIS INTO YOUR CODING AGENT",
    left: 78,
    top: 294,
    width: 400,
    height: 22,
    fontSize: 12,
    color: D.blue,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    text: "Read README.md and AI-START.md. Tell me which files you actually opened.",
    left: 78,
    top: 330,
    width: 430,
    height: 112,
    fontSize: 20,
    color: D.ink,
    bold: true,
  });
  addText(slide, {
    text: "If the private repo will not load, attach AI-COURSE-PACK.md.",
    left: 78,
    top: 466,
    width: 430,
    height: 48,
    fontSize: 15,
    color: D.slate,
  });
  addImageFrame(slide, {
    blob: githubScreenshotBytes,
    contentType: "image/jpeg",
    alt: "A GitHub repository showing code, issues, pull requests, and project files",
    left: 568,
    top: 216,
    width: 608,
    height: 310,
    fit: "contain",
  });
  addBottomStatement(slide, "The first proof is simple: the agent names the files it actually read.", { top: 548, size: 17 });
  setNotes(slide, [
    `Course repository: ${COURSE_REPO_URL}`,
    "Repository access is required. If the course repository does not open for the learner or agent, use the current AI-COURSE-PACK.md instead.",
    "Do not accept a connection badge as proof. Ask the agent to name the exact files it opened.",
    "The screenshot is a sanitized GitHub repository example captured October 18, 2026. The clickable text points to the current course repository.",
  ]);
}

clearMainContent(presentation, records, 11);
{
  const slide = presentation.slides.getItem(10);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// SETUP · GITHUB", time: "1:15–1:25", title: "How work moves in GitHub" });
  addSectionLabel(slide, "PROJECT → PROPOSED CHANGE → REVIEW → ACCEPTED VERSION");
  addText(slide, {
    text: "SETUP  Create an account you control · verify the email · turn on two-factor authentication",
    left: 78,
    top: 216,
    width: 1084,
    height: 26,
    fontSize: 14,
    color: D.slate,
    bold: true,
  });
  const githubFlow = [
    ["Repo", "The project files and their saved history."],
    ["Issue", "A named problem, question, or improvement."],
    ["Pull request", "A proposed set of changes you can review."],
    ["Merge", "The approved changes join the main version."],
  ];
  const flowXs = [150, 470, 790, 1110];
  addLine(slide, { left: flowXs[0], top: 282, width: flowXs.at(-1) - flowXs[0], color: D.mutedLine, weight: 1 });
  githubFlow.forEach(([title, body], index) => {
    addDot(slide, { left: flowXs[index] - 7, top: 275, size: 14, fill: index === 3 ? D.orange : D.white, line: index === 3 ? D.orange : D.blue });
    addText(slide, { text: title, left: flowXs[index] - 105, top: 306, width: 210, height: 30, fontSize: 20, color: D.ink, bold: true, alignment: "center" });
    addText(slide, { text: body, left: flowXs[index] - 122, top: 350, width: 244, height: 82, fontSize: 15, color: D.slate, alignment: "center" });
  });
  addLine(slide, { left: 78, top: 478, width: 1084, color: D.hairline });
  const githubActions = [
    ["STAR", "Bookmark it and show interest."],
    ["FORK", "Make your own copy under your account."],
    ["WATCH", "Ask GitHub to notify you about updates."],
  ];
  githubActions.forEach(([label, body], index) => {
    const left = 92 + index * 366;
    if (index > 0) addLine(slide, { left: left - 34, top: 500, width: 0, height: 56, color: D.hairline });
    addText(slide, { text: label, left, top: 503, width: 82, height: 22, fontSize: 12, color: D.blue, bold: true, typeface: "Courier New" });
    addText(slide, { text: body, left: left + 92, top: 499, width: 236, height: 48, fontSize: 15, color: D.ink, bold: true });
  });
  addBottomStatement(slide, "Your questions can become issues. Good fixes can become pull requests. Review decides what merges.", { top: 575, size: 16 });
  setNotes(slide, [
    "Keep the nouns tied to visible work. A repository is the project. An issue names work. A pull request proposes changes. A merge accepts them into the main version.",
    "Star, fork, and watch are different actions: bookmark or show interest, create your own copy, and receive notifications.",
    "Use the workshop itself as the example: a participant question may become an issue; the material change is reviewed before it merges.",
    `Official GitHub account and repository guidance: ${GITHUB_ACCOUNT_URL}`,
  ]);
}

clearMainContent(presentation, records, 12);
{
  const slide = presentation.slides.getItem(11);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// SETUP · VERCEL", time: "1:25–1:35", title: "Vercel: the publishing home" });
  addSectionLabel(slide, "ONE PROJECT CONNECTS TO ONE GITHUB REPOSITORY");
  slide.images.add({
    blob: vercelLogoBytes,
    contentType: "image/png",
    alt: "Vercel logo",
    fit: "contain",
    position: { left: 78, top: 236, width: 170, height: 140 },
  });
  const vercelSteps = [
    ["Sign up", "Use the GitHub sign-in path so Vercel can see your practice repositories."],
    ["Authorize", "Allow only the repositories you intend to use when that choice appears."],
    ["Check the home", "Confirm the correct personal account or team before you create a project."],
  ];
  vercelSteps.forEach(([title, body], index) => {
    const y = 224 + index * 105;
    addText(slide, { text: `0${index + 1}`, left: 330, top: y, width: 44, height: 22, fontSize: 12, color: D.blue, typeface: "Courier New" });
    addText(slide, { text: title, left: 394, top: y - 4, width: 300, height: 30, fontSize: 20, color: D.ink, bold: true });
    addText(slide, { text: body, left: 720, top: y - 4, width: 450, height: 58, fontSize: 17, color: D.slate });
    if (index < vercelSteps.length - 1) addLine(slide, { left: 330, top: y + 72, width: 840, color: D.hairline });
  });
  addBottomStatement(slide, "A project is the home. A deployment is one published version. A URL is how people reach it.", { top: 520, size: 17 });
  setNotes(slide, [
    `Official Vercel account documentation, accessed October 18, 2026: ${VERCEL_ACCOUNT_URL}`,
    `Vercel Hobby is restricted to personal, noncommercial use. Official fair-use guidance: ${VERCEL_HOBBY_URL}`,
    "Account creation and any plan choice belong to the participant. Do not enter billing information during class.",
  ]);
}

clearMainContent(presentation, records, 13);
{
  const slide = presentation.slides.getItem(12);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// SETUP · CONNECT THE ACCOUNTS", time: "1:35–1:40", title: "GitHub to Vercel" });
  addSectionLabel(slide, "FIND THE REPOSITORY · CHECK THE DESTINATION");
  addText(slide, {
    text: "1  Choose New Project\n\n2  Confirm the GitHub account\n\n3  Find my-first-site\n\n4  Choose Import\n\n5  Stop at project configuration",
    left: 78,
    top: 226,
    width: 420,
    height: 288,
    fontSize: 18,
    color: D.ink,
    bold: true,
  });
  addImageFrame(slide, {
    blob: vercelScreenshotBytes,
    contentType: "image/jpeg",
    alt: "Vercel New Project screen with the import Git repository area",
    left: 566,
    top: 226,
    width: 610,
    height: 300,
    fit: "contain",
  });
  addBottomStatement(slide, "Seeing the repository in Vercel proves the accounts are connected. It does not publish yet.", { top: 548, size: 17 });
  setNotes(slide, [
    "Use the live Vercel dashboard during the workshop and rehearse the exact button labels before the event.",
    `Official Vercel Git deployment flow, accessed October 18, 2026: ${VERCEL_GIT_URL}`,
  ]);
}

addReviewSlide(presentation, records, 14, {
  eyebrow: "// SETUP · READY CHECK",
  time: "1:40–1:45",
  title: "Ready to build",
  label: "TWO PROJECTS · SEPARATE HOMES · ONE CLEAR START",
  checks: [
    "Your GitHub profile opens and my-first-site belongs to you",
    "Your README has the start prompt and the agent names what it actually read",
    "Your Vercel dashboard opens and my-first-site appears in the import list",
    "You know the game will use my-first-game and a second Vercel project",
  ],
  question: "Blocked? Keep the exact screen or error. Use the course pack, a partner, or an instructor checkpoint.",
  notes: [
    "This is a setup check, not exercise one. Pair participants before the build if one account path remains blocked.",
    "Students keep credentials private. Helpers can point at the screen but do not take over passwords or authentication codes.",
    "The second project never overwrites the first. The website and game each get a separate folder, repository, Vercel project, live URL, and check record.",
  ],
});

// Exercise 1: Website.
clearMainContent(presentation, records, 15);
{
  const slide = presentation.slides.getItem(14);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 1 · WEBSITE", time: "1:40–2:30", title: "What you will learn", accent: D.orange });
  addSectionLabel(slide, "ONE WORKING PAGE · ONE LIVE URL", 178, D.editorialOrange);
  addProcess(slide, ["Plan", "Design", "Build", "Test", "Deploy", "Maintain"], {
    top: 235,
    activeIndex: 0,
    descriptions: [
      "Name the visitor, goal, and finish line.",
      "Map the page and choose the first change.",
      "Change one complete page in a safe copy.",
      "Try it yourself, then let a partner use it.",
      "Save to GitHub and put it live in Vercel.",
      "Watch one visitor and plan the next change.",
    ],
  });
  addBottomStatement(slide, "You finish with a checked website in my-first-site and its own Vercel project.", { top: 520 });
  setNotes(slide, [
    "Start every exercise with the learning outcomes. This is the first of exactly two exercises.",
    "The website walkthrough allows about 90 minutes; the slide version uses a prepared starter and instructor checkpoints to fit the workshop block.",
  ]);
}

clearMainContent(presentation, records, 16);
{
  const slide = presentation.slides.getItem(15);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 1 · THE EXAMPLE", time: "1:40–2:30", title: "Website example", accent: D.orange });
  addSectionLabel(slide, "ALL THINGS AI: ORBIT · RUNNABLE STARTER", 178, D.editorialOrange);
  addText(slide, {
    text: "Start with a page that already works.",
    left: 78,
    top: 240,
    width: 360,
    height: 56,
    fontSize: 24,
    color: D.ink,
    bold: true,
  });
  addText(slide, {
    text: "Change the headline, one section, or the color direction. Keep the main link working. Keep the classroom fan-site label visible.",
    left: 78,
    top: 320,
    width: 360,
    height: 140,
    fontSize: 18,
    color: D.slate,
  });
  addImageFrame(slide, {
    blob: websiteBytes,
    contentType: "image/png",
    alt: "All Things AI Orbit classroom website starter",
    left: 490,
    top: 210,
    width: 690,
    height: 330,
    fit: "contain",
  });
  addBottomStatement(slide, "The starter is a real file, not a screenshot you have to recreate.", { top: 560 });
  setNotes(slide, [
    "The source starter is website-starters/ata-orbit/index.html. Participants may choose another course starter or a similarly small idea.",
    "Do not ask the class to build from an empty folder unless they explicitly choose that route.",
  ]);
}

addStepSlide(presentation, records, 17, {
  eyebrow: "// EXERCISE 1 · PLAN",
  time: "1:40–2:30",
  title: "Plan the website",
  label: "PLAIN LANGUAGE FIRST · NO CODE YET",
  items: [
    { title: "Visitor", body: "Who should understand this page when they open it?" },
    { title: "Main action", body: "What is the one link or button they should use?" },
    { title: "Boundary", body: "What should the page never claim, collect, or pretend to do?" },
    { title: "Proof", body: "What will you click or observe to know the page works?" },
  ],
  bottom: "If you cannot explain the main action without code, the page is still too big.",
  active: 0,
  notes: [
    "Use the learner's own idea or the selected starter. Save the result as a short project brief.",
    "Course source: docs/website-walkthrough.md and templates/website-plan.md.",
  ],
});

addStepSlide(presentation, records, 18, {
  eyebrow: "// EXERCISE 1 · DESIGN",
  time: "1:40–2:30",
  title: "Choose the first change",
  label: "SMALLEST USEFUL PAGE · ONE CHANGE AT A TIME",
  items: [
    { title: "Starting file", body: "Name the actual index.html or starter you are changing." },
    { title: "Sections", body: "List the page sections in the order a visitor will read them." },
    { title: "First change", body: "Choose one visible change that fits the brief." },
    { title: "Working proof", body: "Name the link, layout, or text that must still work afterward." },
  ],
  bottom: "Approve the plan before the AI edits the file.",
  active: 1,
  notes: [
    "The plan bridges the brief and the build. Ask the AI to inspect the actual current HTML before proposing the change.",
    "Keep forms, payments, accounts, databases, and email outside this first website.",
  ],
});

addStepSlide(presentation, records, 19, {
  eyebrow: "// EXERCISE 1 · BUILD",
  time: "1:40–2:30",
  title: "Build one change",
  label: "READ THE FILE · RETURN THE COMPLETE FILE",
  items: [
    { title: "Copy the starter", body: "Put the chosen starter in your own my-first-site folder." },
    { title: "Open it first", body: "Try the existing main link before changing anything." },
    { title: "Ask for one change", body: "Give the AI the actual file, brief, plan, and one request." },
    { title: "Save the result", body: "Replace the working file only after keeping a checkpoint copy." },
  ],
  bottom: "Checkpoint: index.html opens in your browser and the page still makes sense.",
  active: 2,
  notes: [
    "The core route uses one self-contained index.html so the class can inspect a real file without installing anything.",
    "A chatbot preview is not the checkpoint. Open the exported file in the browser.",
  ],
});

addReviewSlide(presentation, records, 20, {
  eyebrow: "// EXERCISE 1 · TEST",
  time: "1:40–2:30",
  title: "Test the page",
  label: "PASSED · FAILED · NOT TESTED",
  checks: [
    "The headline and content match the brief",
    "The main link reaches the promised section",
    "The page stays readable in a narrow browser",
    "Tab and Enter can reach and use the main action",
  ],
  question: "A local file is checked only when you actually opened this exact version.",
  notes: [
    "Record the browser and exact file. A narrow window is useful but not proof of a real phone test.",
    "Course source: docs/website-walkthrough.md, step 5.",
  ],
});

addStepSlide(presentation, records, 21, {
  eyebrow: "// EXERCISE 1 · TEST",
  time: "1:40–2:30",
  title: "A fresh visitor",
  label: "LET THEM TRY IT · DO NOT COACH",
  items: [
    { title: "Hand it over", body: "Give a partner the page and one sentence about the intended visitor." },
    { title: "Watch the first move", body: "Notice where they look, click, pause, or guess." },
    { title: "Ask one question", body: "What did you think the page wanted you to do?" },
    { title: "Fix the smallest thing", body: "Keep the working parts and repair the rough edge." },
  ],
  bottom: "A second look catches what the maker can no longer see.",
  active: 3,
  notes: [
    "This is a human-use check, not a code review ritual. Watch before explaining.",
  ],
});

addStepSlide(presentation, records, 22, {
  eyebrow: "// EXERCISE 1 · DEPLOY",
  time: "1:40–2:30",
  title: "Save the website to GitHub",
  label: "THE CHECKED FILE · THE RIGHT REPOSITORY",
  items: [
    { title: "Open my-first-site", body: "Check the owner and repository name before uploading anything." },
    { title: "Upload the files", body: "Put index.html and its supporting files at the expected root." },
    { title: "Name the save", body: "Use a commit message that says what changed." },
    { title: "Read it back", body: "Open index.html on GitHub and confirm a distinctive sentence." },
  ],
  bottom: "GitHub now holds the checked website version under your account.",
  active: 4,
  notes: [
    "Do not upload the ZIP instead of its files. Do not upload the full course repository as the learner website.",
    "Official GitHub file and repository guidance should be rehearsed against the live interface before class.",
  ],
});

addStepSlide(presentation, records, 23, {
  eyebrow: "// EXERCISE 1 · DEPLOY",
  time: "1:40–2:30",
  title: "Deploy the website",
  label: "NEW PROJECT · IMPORT · DEPLOY · OPEN THE URL",
  items: [
    { title: "New Project", body: "In Vercel, start a project under the intended account or team." },
    { title: "Import the repository", body: "Choose my-first-site. Do not choose the game or the course repo." },
    { title: "Check the settings", body: "For the static starter, use the repository root and no build command." },
    { title: "Deploy and open", body: "Wait for Ready, then open the actual website URL." },
  ],
  bottom: "Repeat the main action at the live URL. Local success is not deployment proof.",
  active: 4,
  notes: [
    `Official Vercel Git deployment guidance, accessed October 18, 2026: ${VERCEL_GIT_URL}`,
    "The first deployment is production in this course flow. Later changes should use a branch and preview before merge.",
  ],
});

addStepSlide(presentation, records, 24, {
  eyebrow: "// EXERCISE 1 · MAINTAIN",
  time: "1:40–2:30",
  title: "Learn from one visitor",
  label: "THE LIVE URL · ONE OBSERVATION · ONE NEXT CHANGE",
  items: [
    { title: "Share the URL", body: "Use the finished Vercel address, not the local file or chatbot preview." },
    { title: "Watch quietly", body: "Notice the first click and any hesitation." },
    { title: "Ask what surprised them", body: "Record their words before suggesting your own answer." },
    { title: "Choose the next change", body: "Write one small improvement. Do not rebuild the whole page." },
  ],
  bottom: "What you learn becomes the next Plan step.",
  active: 5,
  notes: [
    "Maintain closes the loop. The next change begins with a new plan, not an extra feature squeezed into this one.",
  ],
});

addReviewSlide(presentation, records, 25, {
  eyebrow: "// EXERCISE 1 · REVIEW",
  time: "1:40–2:30",
  title: "Website review",
  label: "SHOW THE WORK · SAY WHAT YOU LEARNED",
  checks: [
    "Open the live website and use its main action",
    "Show the my-first-site GitHub repository",
    "Show the matching Vercel project and Ready deployment",
    "Name one observed result and one next change",
  ],
  question: "If one proof is missing, mark it missing. Keep the working files and exact blocker.",
  notes: [
    "This closes exercise one. Ask two participants to show evidence, not to narrate the code.",
  ],
});

clearMainContent(presentation, records, 26);
{
  const slide = presentation.slides.getItem(25);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// BREAK · LUNCH", time: "30 MIN", title: "Lunch", accent: D.orange });
  addText(slide, {
    text: "Website not live yet? Keep the working file and grab a helper before you leave the room.",
    left: 78,
    top: 238,
    width: 500,
    height: 106,
    fontSize: 24,
    color: D.ink,
    bold: true,
  });
  addLine(slide, { left: 78, top: 370, width: 500, color: D.hairline });
  addText(slide, {
    text: "After lunch: build a game, publish it as a separate project, and let another person play it.",
    left: 78,
    top: 398,
    width: 500,
    height: 110,
    fontSize: 20,
    color: D.slate,
  });
  addImageFrame(slide, {
    blob: breakArtBytes,
    contentType: "image/png",
    alt: "A light blue and orange path connecting two workshop checkpoints",
    left: 660,
    top: 205,
    width: 500,
    height: 315,
    fit: "cover",
  });
  addBottomStatement(slide, "Back at 3:00.", { top: 552, color: D.editorialOrange });
  setNotes(slide, [
    "The website block ends before lunch. Preserve unresolved work instead of silently switching projects or claiming the deployment succeeded.",
    "The light pathway illustration was generated for this workshop and marks the transition into the second build.",
  ]);
}

// Exercise 2: Game.
clearMainContent(presentation, records, 27);
{
  const slide = presentation.slides.getItem(26);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 2 · GAME", time: "3:00–4:30", title: "What you will learn", accent: D.orange });
  addSectionLabel(slide, "ONE COMPLETE ROUND · ONE SEPARATE PROJECT", 178, D.editorialOrange);
  addProcess(slide, ["Plan", "Design", "Build", "Test", "Deploy", "Maintain"], {
    top: 235,
    activeIndex: 0,
    descriptions: [
      "State the player, goal, rules, and finish.",
      "Map the states and what happens next.",
      "Build the board and battle in small parts.",
      "Start, finish, restart, and let a player try it.",
      "Use a new repository and Vercel project.",
      "Watch the first round and plan one repair.",
    ],
  });
  addBottomStatement(slide, "You finish with a playable game in my-first-game and its own Vercel project.", { top: 520 });
  setNotes(slide, [
    "This is the second and final exercise. The game does not overwrite the website.",
    "Use Alien Tic-Tac-Toe as the featured example. The five-question quiz is the scope-reduction fallback.",
  ]);
}

clearMainContent(presentation, records, 28);
{
  const slide = presentation.slides.getItem(27);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 2 · THE EXAMPLE", time: "3:00–4:30", title: "Game example", accent: D.orange });
  addSectionLabel(slide, "ALIEN TIC-TAC-TOE · BATTLE FOR THE SQUARE", 178, D.editorialOrange);
  addText(slide, {
    text: "Pick a square. Battle for it.",
    left: 78,
    top: 236,
    width: 360,
    height: 66,
    fontSize: 24,
    color: D.ink,
    bold: true,
  });
  addText(slide, {
    text: "Win the battle and place X. Lose and the alien places O. A complete round must start, finish, and restart without carrying old state.",
    left: 78,
    top: 318,
    width: 360,
    height: 140,
    fontSize: 18,
    color: D.slate,
  });
  addImageFrame(slide, {
    blob: gameBytes,
    contentType: "image/png",
    alt: "Alien Tic-Tac-Toe classroom game example",
    left: 490,
    top: 204,
    width: 690,
    height: 342,
    fit: "contain",
  });
  addBottomStatement(slide, "The rules are the design. Decoration comes after the loop works.", { top: 565 });
  setNotes(slide, [
    "The image is the featured classroom concept. The exercise builds a small portable static game with no account, database, payment, or external API.",
    "Course source: docs/alien-tic-tac-toe.md.",
  ]);
}

addStepSlide(presentation, records, 29, {
  eyebrow: "// EXERCISE 2 · PLAN",
  time: "3:00–4:30",
  title: "Plan the game",
  label: "GOAL · CHOICES · RESULT · RESTART",
  items: [
    { title: "Goal", body: "Complete a line of X marks before the alien completes a line of O marks." },
    { title: "Choice", body: "Select an empty square, then answer the battle move once." },
    { title: "Result", body: "A battle resolves exactly one selected square as X or O." },
    { title: "Restart", body: "Play again clears the board, pending battle, health, and old feedback." },
  ],
  bottom: "Write the rules before asking the AI to build the game.",
  active: 0,
  notes: [
    "Keep the first version deterministic. The fixed Laser, Shield, Claw sequence makes the battle observable and repeatable.",
    "Course source: docs/alien-tic-tac-toe.md and game-skills/vc-game-brief.",
  ],
});

clearMainContent(presentation, records, 30);
{
  const slide = presentation.slides.getItem(29);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 2 · DESIGN", time: "3:00–4:30", title: "Map the game states", accent: D.orange });
  addSectionLabel(slide, "WHAT THE PLAYER SEES · WHAT THEY CAN DO NEXT", 178, D.editorialOrange);
  addProcess(slide, ["Instructions", "Board", "Battle", "Result", "Replay"], {
    left: 92,
    top: 255,
    width: 1096,
    descriptions: [
      "Goal and Start. Nothing moves yet.",
      "Choose one empty square.",
      "One response changes one health value.",
      "Award the square and check the board.",
      "Clear every old value and begin again.",
    ],
  });
  addBottomStatement(slide, "The next action should be obvious in every state.", { top: 520 });
  setNotes(slide, [
    "State means the situation the game remembers and the actions it allows. Keep that explanation in plain language.",
    "Course source: docs/alien-tic-tac-toe.md, Plan the states and controls.",
  ]);
}

clearMainContent(presentation, records, 31);
{
  const slide = presentation.slides.getItem(30);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 2 · BUILD", time: "3:00–4:30", title: "Build the board", accent: D.orange });
  addSectionLabel(slide, "BOARD FIRST · BATTLE SECOND", 178, D.editorialOrange);
  const cellSize = 86;
  const gridLeft = 172;
  const gridTop = 238;
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      const index = row * 3 + column + 1;
      addPanel(slide, {
        left: gridLeft + column * (cellSize + 10),
        top: gridTop + row * (cellSize + 10),
        width: cellSize,
        height: cellSize,
        fill: D.white,
        line: D.blue,
        radius: 10,
      });
      addText(slide, {
        text: String(index),
        left: gridLeft + column * (cellSize + 10),
        top: gridTop + row * (cellSize + 10) + 28,
        width: cellSize,
        height: 28,
        fontSize: 18,
        color: D.mutedLine,
        alignment: "center",
      });
    }
  }
  addText(slide, {
    text: "The board prototype proves four things",
    left: 570,
    top: 236,
    width: 560,
    height: 40,
    fontSize: 22,
    color: D.ink,
    bold: true,
  });
  addText(slide, {
    text: "• Only an empty square can be selected\n\n• The board locks while a battle is open\n\n• X and O lines end the board correctly\n\n• Play again clears all nine squares",
    left: 570,
    top: 302,
    width: 560,
    height: 198,
    fontSize: 18,
    color: D.slate,
  });
  addBottomStatement(slide, "Keep the working board checkpoint before connecting the battle.", { top: 540 });
  setNotes(slide, [
    "The board prototype may use temporary win and loss buttons. Remove them from the final game after the real battle is connected.",
  ]);
}

clearMainContent(presentation, records, 32);
{
  const slide = presentation.slides.getItem(31);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 2 · BUILD", time: "3:00–4:30", title: "Build one battle", accent: D.orange });
  addSectionLabel(slide, "TWO HEALTH EACH · ONE DAMAGE EVENT PER ANSWER", 178, D.editorialOrange);
  addText(slide, {
    text: "YOU  2 / 2",
    left: 96,
    top: 236,
    width: 220,
    height: 34,
    fontSize: 20,
    color: D.blue,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    text: "ALIEN  2 / 2",
    left: 934,
    top: 236,
    width: 220,
    height: 34,
    fontSize: 20,
    color: D.orange,
    bold: true,
    typeface: "Courier New",
    alignment: "right",
  });
  const counters = [
    { move: "Laser", answer: "Shield" },
    { move: "Shield", answer: "Blast" },
    { move: "Claw", answer: "Dodge" },
  ];
  counters.forEach((counter, index) => {
    const x = 178 + index * 310;
    addText(slide, {
      text: counter.move,
      left: x,
      top: 320,
      width: 180,
      height: 34,
      fontSize: 22,
      color: D.ink,
      bold: true,
      alignment: "center",
    });
    addLine(slide, { left: x + 90, top: 370, width: 0, height: 42, color: D.mutedLine });
    addText(slide, {
      text: counter.answer,
      left: x,
      top: 430,
      width: 180,
      height: 34,
      fontSize: 20,
      color: D.blue,
      bold: true,
      alignment: "center",
    });
  });
  addBottomStatement(slide, "Lock the answer after one choice. If both still have health, show Next exchange.", { top: 520, size: 17 });
  setNotes(slide, [
    "Correct answers damage only the alien. Incorrect answers damage only the player. No automatic retaliation or simultaneous damage.",
  ]);
}

clearMainContent(presentation, records, 33);
{
  const slide = presentation.slides.getItem(32);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// EXERCISE 2 · BUILD", time: "3:00–4:30", title: "Connect board and battle", accent: D.orange });
  addSectionLabel(slide, "ONE SELECTED SQUARE · ONE RESOLVED BATTLE · ONE MARK", 178, D.editorialOrange);
  addProcess(slide, ["Choose a square", "Battle", "Place X or O", "Check the board", "Continue or replay"], {
    left: 74,
    top: 260,
    width: 1132,
    descriptions: [
      "Lock the pending square.",
      "Start with fresh health.",
      "Award it exactly once.",
      "Line first, then draw.",
      "No stale state survives.",
    ],
  });
  addBottomStatement(slide, "A battle result never places a second automatic mark.", { top: 520 });
  setNotes(slide, [
    "This is the distinctive rule participants often misunderstand. The alien does not take another board turn after the battle.",
  ]);
}

addReviewSlide(presentation, records, 34, {
  eyebrow: "// EXERCISE 2 · TEST",
  time: "3:00–4:30",
  title: "Test the whole game",
  label: "PASSED · FAILED · NOT TESTED",
  checks: [
    "A round does not begin before Start",
    "One answer causes one damage event and one battle resolves one square",
    "X lines, O lines, and a full-board draw end correctly",
    "Play again and Restart game clear the old board and battle",
    "Keyboard and phone controls remain reachable",
  ],
  question: "A chatbot preview is not proof. Test the exported file, then repeat the critical checks at the live URL.",
  notes: [
    "If time is short, switch to the five-question quiz fallback and record the scope change honestly. Do not claim the unfinished game passed.",
  ],
});

addStepSlide(presentation, records, 35, {
  eyebrow: "// EXERCISE 2 · TEST",
  time: "3:00–4:30",
  title: "A new player",
  label: "TWO MINUTES · NO COACHING",
  items: [
    { title: "Give the goal", body: "Say only: complete a line of X before the alien completes O." },
    { title: "Watch the first square", body: "Do they understand that the battle determines the mark?" },
    { title: "Watch the restart", body: "Can they finish a result and begin a clean round?" },
    { title: "Repair one confusion", body: "Improve the instruction or feedback without changing the rules." },
  ],
  bottom: "The player should not need your memory of how the game works.",
  active: 3,
  notes: [
    "Ask what they expected when something surprised them. Preserve their words in the game test note.",
  ],
});

addStepSlide(presentation, records, 36, {
  eyebrow: "// EXERCISE 2 · DEPLOY",
  time: "3:00–4:30",
  title: "Save the game to GitHub",
  label: "NEW REPOSITORY · KEEP THE WEBSITE INTACT",
  items: [
    { title: "Create my-first-game", body: "Use your account. Do not reuse my-first-site." },
    { title: "Choose the final files", body: "Upload the integrated game, not the prototypes or temporary test controls." },
    { title: "Name the save", body: "Use a commit message that identifies the checked game version." },
    { title: "Read it back", body: "Open index.html in the game repository and confirm the current instructions." },
  ],
  bottom: "GitHub now holds a second project with its own history.",
  active: 4,
  notes: [
    "The website repository remains unchanged. Keep board and battle checkpoints outside the final upload folder.",
  ],
});

addStepSlide(presentation, records, 37, {
  eyebrow: "// EXERCISE 2 · DEPLOY",
  time: "3:00–4:30",
  title: "Deploy the game",
  label: "A SECOND VERCEL PROJECT · A SECOND LIVE URL",
  items: [
    { title: "New Project", body: "Start another Vercel project under the intended account or team." },
    { title: "Import my-first-game", body: "Confirm the repository name before choosing Import." },
    { title: "Check the static settings", body: "Use the repository root and no build command for the single-file game." },
    { title: "Deploy and play", body: "Open the finished URL. Complete one battle, one board result, and a restart." },
  ],
  bottom: "The game and website now have different repositories, projects, and URLs.",
  active: 4,
  notes: [
    `Official Vercel Git deployment guidance, accessed October 18, 2026: ${VERCEL_GIT_URL}`,
    "Save the game URL and observed checks in game-release.md or the participant workbook.",
  ],
});

addStepSlide(presentation, records, 38, {
  eyebrow: "// EXERCISE 2 · MAINTAIN",
  time: "3:00–4:30",
  title: "Learn from one player",
  label: "THE LIVE GAME · THE FIRST ROUND · THE NEXT REPAIR",
  items: [
    { title: "Share the game URL", body: "Use the deployed version another person can open." },
    { title: "Watch the first move", body: "Notice whether the goal and available action are clear." },
    { title: "Watch the ending", body: "Can they tell whether the battle or the board finished?" },
    { title: "Watch replay", body: "A new round must begin without old health, marks, or feedback." },
  ],
  bottom: "One confused moment is enough to start the next Plan step.",
  active: 5,
  notes: [
    "A short player observation is more useful than adding a new mechanic before the core loop is understood.",
  ],
});

addReviewSlide(presentation, records, 39, {
  eyebrow: "// EXERCISE 2 · REVIEW",
  time: "3:00–4:30",
  title: "Game review",
  label: "SHOW THE ROUND · SHOW THE PROJECT · SHOW THE PROOF",
  checks: [
    "Open the live game and explain the goal",
    "Complete a battle and show the correct square",
    "Finish or restart a round without old state carrying forward",
    "Show the my-first-game repository and matching Vercel project",
    "Name one player observation and one next repair",
  ],
  question: "If the live version fails, keep the working file and exact error. Do not call it published.",
  notes: [
    "This closes exercise two. The final demonstration later shows both projects together, but it does not add a third build.",
  ],
});

clearMainContent(presentation, records, 40);
{
  const slide = presentation.slides.getItem(39);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// BREAK · CHECKPOINT", time: "10 MIN", title: "What was different?", accent: D.orange });
  addText(slide, {
    text: "WEBSITE",
    left: 78,
    top: 215,
    width: 430,
    height: 28,
    fontSize: 13,
    color: D.blue,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    text: "One page. One main action. The hard part was deciding what belonged.",
    left: 78,
    top: 272,
    width: 470,
    height: 92,
    fontSize: 22,
    color: D.ink,
    bold: true,
  });
  addLine(slide, { left: 640, top: 205, width: 0, height: 250, color: D.hairline });
  addText(slide, {
    text: "GAME",
    left: 714,
    top: 215,
    width: 430,
    height: 28,
    fontSize: 13,
    color: D.orange,
    bold: true,
    typeface: "Courier New",
  });
  addText(slide, {
    text: "Several states. A full start-to-finish loop. The hard part was making every transition predictable.",
    left: 714,
    top: 272,
    width: 470,
    height: 112,
    fontSize: 22,
    color: D.ink,
    bold: true,
  });
  addBottomStatement(slide, "Same lifecycle. Different thing to check.", { top: 520, align: "center" });
  setNotes(slide, [
    "Use this checkpoint to compare the projects. The lifecycle stays stable while the important behavior changes.",
  ]);
}

// Shared operating practices and close.
clearMainContent(presentation, records, 41);
{
  const slide = presentation.slides.getItem(40);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// OPERATE · SAFE CHANGES", time: "4:40–5:25", title: "Branches and previews" });
  addSectionLabel(slide, "THE NEXT CHANGE SHOULD NOT START ON THE LIVE VERSION");
  addProcess(slide, ["Branch", "Change", "Preview", "Review", "Merge", "Live"], {
    top: 255,
    descriptions: [
      "A safe copy in GitHub.",
      "The AI edits the copy.",
      "Vercel gives it a URL.",
      "A person tries the URL.",
      "You approve the change.",
      "Vercel updates production.",
    ],
  });
  addBottomStatement(slide, "The live page changes only after the checked preview is approved.", { top: 520 });
  setNotes(slide, [
    `Vercel automatically creates preview deployments for branch pushes and production deployments from the production branch. ${VERCEL_GIT_URL}`,
  ]);
}

addStepSlide(presentation, records, 42, {
  eyebrow: "// OPERATE · RECOVERY",
  time: "4:40–5:25",
  title: "Undo first",
  label: "PROTECT PEOPLE NOW · REPAIR THE SAFE COPY NEXT",
  items: [
    { title: "See the problem", body: "Confirm the live version is wrong before changing anything else." },
    { title: "Return to the last good version", body: "Use the deployment history so people get the working page back." },
    { title: "Repair the branch", body: "Make the smallest permanent fix away from live." },
    { title: "Check and republish", body: "Repeat the important action before approving the repaired version." },
  ],
  bottom: "Undo buys time. The branch makes the repair last.",
  notes: [
    "Keep the recovery explanation provider-neutral on the slide. Demonstrate the live Vercel deployment controls only after rehearsing the current interface.",
  ],
});

addStepSlide(presentation, records, 43, {
  eyebrow: "// OPERATE · PRIVATE KEYS",
  time: "4:40–5:25",
  title: "Keep keys out of the project",
  label: "NO REAL KEYS IN CHAT · CODE · SAVED FILES",
  items: [
    { title: "Core exercises", body: "The website and game need no secret keys, database, payment, or external API." },
    { title: "Later projects", body: "Treat every API key like a password. Keep it in the provider account." },
    { title: "Vercel setting", body: "Project Settings, then Environment Variables, supplies the value when the site runs." },
    { title: "If exposed", body: "Revoke it, replace it, and check the repository history." },
  ],
  bottom: "If a key lands in chat, you made a copy you do not control.",
  notes: [
    "The core class deliberately avoids secrets. This slide names the boundary before participants build more ambitious projects later.",
  ],
});

addStepSlide(presentation, records, 44, {
  eyebrow: "// OPERATE · HOSTING BOUNDARY",
  time: "4:40–5:25",
  title: "The Vercel plan boundary",
  label: "CLASSROOM PRACTICE · PERSONAL AND FICTIONAL",
  items: [
    { title: "Hobby", body: "Vercel restricts the Hobby plan to personal, noncommercial use." },
    { title: "Commercial work", body: "A real business project needs an eligible commercial plan or another host." },
    { title: "During class", body: "Do not enter billing details or choose a paid plan because a tutorial says so." },
    { title: "Before launch", body: "Check the audience, account, plan, and current provider rules." },
  ],
  bottom: "The exercise is free practice. A real business launch is a separate decision.",
  notes: [
    `Official Vercel fair-use guidance, accessed October 18, 2026: ${VERCEL_HOBBY_URL}`,
    "Do not quote prices from memory. Plans and limits change.",
  ],
});

addStepSlide(presentation, records, 45, {
  eyebrow: "// OPERATE · OWNERSHIP",
  time: "4:40–5:25",
  title: "What you own",
  label: "FILES · HISTORY · PROJECT SETTINGS · TEST NOTES",
  items: [
    { title: "GitHub repositories", body: "The website and game files plus every deliberate save point." },
    { title: "Vercel projects", body: "The deployment history, project settings, and live URLs under your account." },
    { title: "Check records", body: "What passed, failed, or was not tested for each project." },
    { title: "Next action", body: "One small improvement written in plain language." },
  ],
  bottom: "Tools can change. Your projects still have a place to go.",
  notes: [
    "Ownership means the participant can identify the files, source history, hosting project, and observed behavior. It does not mean every external service is portable without work.",
  ],
});

addStepSlide(presentation, records, 46, {
  eyebrow: "// OPERATE · BRING IN HELP",
  time: "4:40–5:25",
  title: "When to call a developer",
  label: "THE RISK CHANGED · THE PROJECT NEEDS A DIFFERENT REVIEW",
  items: [
    { title: "Accounts and permissions", body: "People sign in or see different information based on who they are." },
    { title: "Money", body: "The project charges, pays, refunds, or makes a financial decision." },
    { title: "Private information", body: "Real customer, employee, health, or confidential business data enters the system." },
    { title: "Business dependence", body: "People cannot do their job or serve customers when the project fails." },
  ],
  bottom: "Bring the brief, working files, failed checks, and live URL. Give the developer something they can evaluate.",
  notes: [
    "The threshold is risk and dependence, not the participant's identity as a coder or non-coder.",
  ],
});

clearMainContent(presentation, records, 47);
{
  const slide = presentation.slides.getItem(46);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// OPERATE · SAVE THE ROUTINE", time: "4:40–5:25", title: "Your repeatable checklist" });
  addSectionLabel(slide, "USE THE SAME SIX QUESTIONS FOR THE NEXT PROJECT");
  const checklist = [
    ["Plan", "Who is it for, what should happen, and what is the finish line?"],
    ["Design", "What experience and boundaries must stay true?"],
    ["Build", "Which safe copy will change, and what is the smallest increment?"],
    ["Test", "What exact action will you try, and who else will use it?"],
    ["Deploy", "Which repository, Vercel project, and URL are correct?"],
    ["Maintain", "What happened in use, and what should change next?"],
  ];
  checklist.forEach(([stage, question], index) => {
    const y = 228 + index * 52;
    addText(slide, {
      text: stage.toUpperCase(),
      left: 78,
      top: y,
      width: 176,
      height: 22,
      fontSize: 12,
      color: index === 3 ? D.editorialOrange : D.blue,
      bold: true,
      typeface: "Courier New",
    });
    addText(slide, {
      text: question,
      left: 270,
      top: y - 3,
      width: 890,
      height: 30,
      fontSize: 17,
      color: D.ink,
      bold: true,
    });
    if (index < checklist.length - 1) {
      addLine(slide, { left: 78, top: y + 36, width: 1082, color: D.hairline });
    }
  });
  addBottomStatement(slide, "Save the answers with the project so the next AI starts from evidence, not memory.", { top: 548, size: 17 });
  setNotes(slide, [
    "This checklist can become a saved skill or project instruction later. The slide keeps the plain-language behavior visible; filenames and installation details belong in the participant guide.",
  ]);
}

addReviewSlide(presentation, records, 48, {
  eyebrow: "// FINAL DEMONSTRATION",
  time: "5:25–5:45",
  title: "Show both projects",
  label: "TWO URLS · TWO REPOSITORIES · TWO VERCEL PROJECTS",
  checks: [
    "Open the website and use its main action",
    "Open the game, complete a result, and restart",
    "Show the separate GitHub repository behind each project",
    "Show the separate Vercel project and Ready deployment behind each URL",
    "Name the next small change for one project",
  ],
  question: "The demonstration is the evidence. You do not need to explain the code.",
  notes: [
    "This is a final demonstration, not a third exercise. Invite short paired demos before asking for one or two room-wide examples.",
  ],
});

addStepSlide(presentation, records, 49, {
  eyebrow: "// WRAP · WHAT LEAVES",
  time: "5:45–5:55",
  title: "What leaves with you",
  label: "THE PROJECTS · THE PROOF · THE NEXT STEP",
  items: [
    { title: "Website", body: "my-first-site, its Vercel project, the live URL, and the website check note." },
    { title: "Game", body: "my-first-game, its Vercel project, the live URL, and the game check note." },
    { title: "Process", body: "Plan, Design, Build, Test, Deploy, Maintain." },
    { title: "Recovery", body: "Working checkpoints and exact blockers for anything that did not finish." },
  ],
  bottom: "You can continue because the work is in your accounts, not trapped in this room.",
  notes: [
    "Read the evidence back from participant screens where possible. Keep incomplete items visible.",
  ],
});

clearMainContent(presentation, records, 50);
{
  const slide = presentation.slides.getItem(49);
  slide.background.fill = D.white;
  addHeader(slide, { eyebrow: "// WRAP · MONDAY", time: "5:55–6:00", title: "Your first Monday" });
  addSectionLabel(slide, "ONE SMALL LOOP · ONE PROJECT");
  const mondaySteps = [
    ["01", "Plan", "Name one improvement."],
    ["02", "Design", "Sketch the result and boundary."],
    ["03", "Build", "Change a safe copy."],
    ["04", "Test", "Try it. Give someone the preview."],
    ["05", "Deploy", "Approve the tested version."],
    ["06", "Maintain", "Watch use and plan what is next."],
  ];
  mondaySteps.forEach(([number, title, body], index) => {
    const column = index % 2;
    const row = Math.floor(index / 2);
    const left = 78 + column * 330;
    const top = 232 + row * 92;
    addText(slide, {
      text: number,
      left,
      top,
      width: 34,
      height: 18,
      fontSize: 11,
      color: index === 0 ? D.editorialOrange : D.blue,
      typeface: "Courier New",
    });
    addText(slide, {
      text: title,
      left: left + 46,
      top: top - 2,
      width: 130,
      height: 24,
      fontSize: 17,
      color: D.ink,
      bold: true,
    });
    addText(slide, {
      text: body,
      left: left + 46,
      top: top + 30,
      width: 240,
      height: 38,
      fontSize: 14,
      color: D.slate,
    });
  });
  addImageFrame(slide, {
    blob: workArtBytes,
    contentType: "image/png",
    alt: "A person working calmly at a laptop in a bright morning workspace",
    left: 790,
    top: 210,
    width: 360,
    height: 305,
    fit: "cover",
  });
  addBottomStatement(slide, "Choose the website or the game. Finish one loop before starting another.", { top: 545 });
  setNotes(slide, [
    "Do not send participants home with a backlog. Ask for one concrete next loop on one project.",
    "The light working illustration was generated for this workshop and gives the take-home plan a human scale.",
  ]);
}

replaceRecordText(
  presentation,
  records,
  52,
  "Six hours ago, your prototype lived in somebody else’s browser tab. Now the code is in your GitHub, the site is on your Vercel, and the data is in your account. A mistake rolls back in one click. A check runs on every change. An email tells you when a customer shows up.",
  "Six hours ago, the website and game were examples. Now each project has files in your GitHub, a home in Vercel, and a URL another person can open. You can plan the next change, design it, build it, test it, deploy it, and maintain what happens next.",
);

// Rebuild the process footer on slides 4–50. Exercise slides light the current step.
const activeStageBySlide = new Map([
  [15, 0], [16, 1], [17, 0], [18, 1], [19, 2], [20, 3], [21, 3], [22, 4], [23, 4], [24, 5], [25, 5],
  [27, 0], [28, 1], [29, 0], [30, 1], [31, 2], [32, 2], [33, 2], [34, 3], [35, 3], [36, 4], [37, 4], [38, 5], [39, 5],
  [41, 2], [42, 5], [43, 0], [44, 4], [45, 5], [46, 3], [47, 5], [48, 5], [50, 0],
]);
for (let slideNumber = 4; slideNumber <= 50; slideNumber += 1) {
  clearFooterRail(presentation, records, slideNumber);
  addStageFooter(
    presentation.slides.getItem(slideNumber - 1),
    activeStageBySlide.get(slideNumber) ?? -1,
  );
}

// Preserve the finished vibe-coding and lifecycle slides, then place the agent
// and coding-harness concepts before them. Duplicating here retains the exact
// footer geometry, brand mark, and native editable objects.
const vibeCodingSourceSlide = presentation.slides.getItem(3);
const lifecycleSourceSlide = presentation.slides.getItem(5);
const vibeCodingSlide = vibeCodingSourceSlide.duplicate();
vibeCodingSlide.moveTo(presentation.slides.items.length - 1);
const lifecycleSlide = lifecycleSourceSlide.duplicate();
lifecycleSlide.moveTo(presentation.slides.items.length - 1);

const rebuildSnapshot = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart,notes",
  maxChars: 1000000,
});
const rebuildRecords = parseNdjson(rebuildSnapshot.ndjson);

clearMainContent(presentation, rebuildRecords, 4);
{
  const slide = presentation.slides.getItem(3);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "// BEFORE WE BUILD · AI AGENTS",
    time: "0:12–0:27",
    title: "The parts of an agent",
  });
  addSectionLabel(slide, "MODEL · TOOLS · MEMORY");
  addLine(slide, { left: 68, top: 211, width: 1144, color: D.hairline });
  const agentParts = [
    ["01", "Model", "Reads the goal, chooses the next step, and produces the words or code."],
    ["02", "Tools", "Open files, edit them, run commands, search, and use connected services."],
    ["03", "Memory", "Carries project rules, past decisions, and the last stopping point forward."],
  ];
  agentParts.forEach(([number, title, body], index) => {
    const top = 235 + index * 92;
    addText(slide, {
      text: number,
      left: 78,
      top,
      width: 34,
      height: 18,
      fontSize: 11,
      color: D.blue,
      typeface: "Courier New",
    });
    addText(slide, {
      text: title,
      left: 126,
      top: top - 4,
      width: 125,
      height: 28,
      fontSize: 19,
      color: D.ink,
      bold: true,
    });
    addText(slide, {
      text: body,
      left: 250,
      top: top - 4,
      width: 430,
      height: 64,
      fontSize: 16,
      color: D.slate,
    });
    if (index < agentParts.length - 1) {
      addLine(slide, { left: 78, top: top + 72, width: 602, color: D.hairline });
    }
  });
  addImageFrame(slide, {
    blob: agentArtBytes,
    contentType: "image/png",
    alt: "A light editorial system diagram connecting an orange intelligence to model, tools, and memory forms",
    left: 748,
    top: 220,
    width: 410,
    height: 275,
    fit: "cover",
  });
  addBottomStatement(slide, "A good agent remembers the project. You check the facts before it acts.", { top: 530 });
  setNotes(slide, [
    "Keep the definition concrete. The model supplies judgment. Tools let the agent act. Memory helps it continue without starting from zero.",
    "Memory may live in the current conversation, saved project instructions, repository files, or a product memory system. Useful memory still needs verification against the current project.",
    "The light concept illustration was generated for this workshop. Treat it as an illustration, not a product screenshot.",
  ]);
}

clearMainContent(presentation, rebuildRecords, 5);
{
  const slide = presentation.slides.getItem(4);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "// BEFORE WE BUILD · CODING HARNESSES",
    time: "0:12–0:27",
    title: "The coding harness",
  });
  addSectionLabel(slide, "THE WORKING ENVIRONMENT AROUND THE MODEL");
  addText(slide, {
    text: "The harness supplies the tools and memory around the model. Together, they make an agent.",
    left: 78,
    top: 216,
    width: 1124,
    height: 42,
    fontSize: 21,
    color: D.ink,
    bold: true,
  });
  addOpenColumns(slide, [
    { title: "Context", body: "Gives the model the right files, instructions, and project history." },
    { title: "Tools", body: "Reads and edits files, searches the project, and runs commands." },
    { title: "Permissions", body: "Sets the boundaries and asks before a sensitive action." },
    { title: "Evidence", body: "Shows the changed files, checks, and what remains uncertain." },
  ], { top: 276, height: 190, titleSize: 18, bodySize: 15 });
  addBottomStatement(slide, "Permissions and checks keep the agent's work visible.", { top: 520, size: 17 });
  setNotes(slide, [
    "A coding harness is the software around the model. It assembles context, offers tools, applies permissions, manages the work loop, and reports evidence.",
    "This distinction matters: changing the model can change the judgment, while changing the harness changes what the agent can see, do, remember, and prove.",
  ]);
}

clearMainContent(presentation, rebuildRecords, 6);
{
  const slide = presentation.slides.getItem(5);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "// BEFORE WE BUILD · THREE HARNESSES",
    time: "0:12–0:27",
    title: "Claude Code, Codex, and Grok Build",
  });
  addSectionLabel(slide, "THREE PRODUCTS · THE SAME BASIC JOB");
  addLine(slide, { left: 68, top: 211, width: 1144, color: D.hairline });
  slide.images.add({
    blob: claudeLogoBytes,
    contentType: "image/png",
    alt: "Claude mark",
    fit: "contain",
    position: { left: 236, top: 224, width: 44, height: 44 },
  });
  slide.images.add({
    blob: openaiWordmarkBytes,
    contentType: "image/png",
    alt: "OpenAI wordmark",
    fit: "contain",
    position: { left: 582, top: 227, width: 116, height: 40 },
  });
  slide.images.add({
    blob: xaiLogoBytes,
    contentType: "image/png",
    alt: "xAI mark",
    fit: "contain",
    position: { left: 1000, top: 224, width: 44, height: 44 },
  });
  addOpenColumns(slide, [
    {
      title: "Claude Code",
      body: "Anthropic's coding agent for the terminal and editor. Useful for close back-and-forth work, visible plans, and checkpoints.",
    },
    {
      title: "Codex",
      body: "OpenAI's coding agent in the app, terminal, editor, and cloud. Useful for handing off a task, running checks, and reviewing the result.",
    },
    {
      title: "Grok Build",
      body: "xAI's terminal coding agent and open-source harness. Useful for fast project work with plans, reusable skills, and parallel help.",
    },
  ], { top: 280, height: 210, titleSize: 20, bodySize: 16 });
  addBottomStatement(slide, "Pick the harness that can open your files and show you what changed.", { top: 520 });
  setNotes(slide, [
    "These are coding-agent products and harnesses, not single model names. Their available models, surfaces, permissions, and features can change by plan and version.",
    `Claude Code setup and product description, accessed October 18, 2026: ${CLAUDE_CODE_URL}`,
    `OpenAI Codex product description, accessed October 18, 2026: ${CODEX_URL}`,
    `xAI Grok Build product description, accessed October 18, 2026: ${GROK_BUILD_URL}`,
    "Product marks are included for recognition only and do not imply endorsement. Claude mark: claude.com. OpenAI wordmark: openai.com/brand. xAI mark: x.ai/legal/brand-guidelines.",
  ]);
}

vibeCodingSlide.moveTo(6);
lifecycleSlide.moveTo(7);

const coverSlide = presentation.slides.getItem(0);
const workshopPromiseSlide = presentation.slides.getItem(1);
const outcomeSlide = presentation.slides.getItem(2);
const agentConceptSlide = presentation.slides.getItem(3);
const harnessConceptSlide = presentation.slides.getItem(4);
const harnessChoicesSlide = presentation.slides.getItem(5);
const startingPointsSlide = presentation.slides.getItem(8);
const workshopPlanSlide = presentation.slides.getItem(9);

// Add the workshop promise and the working-memory concepts before the first
// exercise. These duplicate an existing editable slide so the persistent
// footer and brand furniture remain native PowerPoint objects.
const earlySectionTemplate = presentation.slides.getItem(1);
const followOnSlide = earlySectionTemplate.duplicate();
const secondOpinionSlide = earlySectionTemplate.duplicate();
const cliReviewSlide = earlySectionTemplate.duplicate();
const mcpSlide = earlySectionTemplate.duplicate();
const composioSlide = earlySectionTemplate.duplicate();
const contextSlide = earlySectionTemplate.duplicate();
const projectMemorySlide = earlySectionTemplate.duplicate();
const artifactChainSlide = earlySectionTemplate.duplicate();

const earlySectionSnapshot = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart,notes",
  maxChars: 1000000,
});
const earlySectionRecords = parseNdjson(earlySectionSnapshot.ndjson);
for (const slide of [
  followOnSlide,
  secondOpinionSlide,
  cliReviewSlide,
  mcpSlide,
  composioSlide,
  contextSlide,
  projectMemorySlide,
  artifactChainSlide,
]) {
  clearMainContent(
    presentation,
    earlySectionRecords,
    presentation.slides.items.indexOf(slide) + 1,
  );
  slide.background.fill = D.white;
}

addHeader(followOnSlide, {
  eyebrow: "// OPENING · HOW THIS WORKS",
  time: "0:05–0:08",
  title: "We’ll build this with you",
});
addSectionLabel(followOnSlide, "YOUR QUESTIONS CAN CHANGE THE WORKSHOP");
addOpenColumns(followOnSlide, [
  { title: "Ask", body: "Tell us where the process feels unclear, incomplete, or unlike your real work." },
  { title: "Add", body: "We update the example or explanation while the room watches." },
  { title: "Check", body: "We review the change the same way we review the two projects." },
  { title: "Keep", body: "Useful changes go back into the course repository for everyone." },
], { top: 232, height: 220, titleSize: 20, bodySize: 16 });
addBottomStatement(
  followOnSlide,
  "You leave with the two builds and the explanations your group needed to repeat the process.",
  { top: 520, size: 17 },
);
setNotes(followOnSlide, [
  "This is a living workshop. We will use participant questions as input, update the material, review the change, and keep useful improvements in the repository.",
  "The finish line remains stable: a website and a game, each built through the same six-step process and published from the participant's own accounts.",
]);

addHeader(secondOpinionSlide, {
  eyebrow: "// BEFORE WE BUILD · SECOND OPINION",
  time: "0:27–0:38",
  title: "Let another model check the work",
});
addSectionLabel(secondOpinionSlide, "BUILD · REVIEW · DECIDE");
addText(secondOpinionSlide, {
  text: "Use one agent to make the change. Give a different model the same goal and the evidence.",
  left: 78,
  top: 216,
  width: 1124,
  height: 42,
  fontSize: 21,
  color: D.ink,
  bold: true,
});
addOpenColumns(secondOpinionSlide, [
  {
    title: "Build",
    body: "One coding agent makes the change and shows the files, checks, and open questions.",
  },
  {
    title: "Review",
    body: "A different model looks for mistakes, missing checks, and places the result could fail.",
  },
  {
    title: "Decide",
    body: "You choose which findings matter. The builder fixes them, then runs the checks again.",
  },
], { top: 284, height: 182, titleSize: 21, bodySize: 16 });
addBottomStatement(
  secondOpinionSlide,
  "Different models miss different things. Independence is the point.",
  { top: 520, size: 19 },
);
setNotes(secondOpinionSlide, [
  "Do not ask the same agent to grade its own work. A useful review uses a different model family or provider and starts from the same written goal.",
  "Give the reviewer a compact review packet: the goal, the exact revision or changed files, the checks already run, and the question: what could still fail?",
  "Ask for one of two outcomes: PASS, with the evidence it checked; or CHANGES, with concrete findings and file locations. The reviewer reports. It does not fix.",
  "The person still decides. A second model is another set of eyes, not an authority transfer.",
]);

addHeader(cliReviewSlide, {
  eyebrow: "// BEFORE WE BUILD · CLI REVIEW",
  time: "0:27–0:38",
  title: "Three CLIs, plus OpenRouter",
});
addSectionLabel(cliReviewSlide, "START IN THE REPOSITORY FOLDER · ASK FOR FINDINGS ONLY");
addText(cliReviewSlide, {
  text: "Use the row for the tool you already have. Pick a different reviewer than the builder.",
  left: 78,
  top: 211,
  width: 1124,
  height: 32,
  fontSize: 19,
  color: D.ink,
  bold: true,
});
const reviewRows = [
  {
    name: "Codex",
    command: 'codex exec -s read-only "Review this change. Report findings only."',
    note: "Enforced read-only",
    color: D.blue,
  },
  {
    name: "Claude Code",
    command: 'claude -p --permission-mode plan "Review this change. Report findings only."',
    note: "Plan / no-edit request",
    color: D.editorialOrange,
  },
  {
    name: "Grok Build",
    command: 'grok -p --permission-mode plan "Review this change. Report findings only."',
    note: "Plan / no-edit request",
    color: D.blue,
  },
  {
    name: "OpenRouter",
    command: "Open Chat → choose a different model → paste the same review packet",
    note: "No repository access",
    color: D.editorialOrange,
  },
];
reviewRows.forEach((row, index) => {
  const top = 258 + index * 66;
  addLine(cliReviewSlide, { left: 78, top: top - 10, width: 1068, color: D.hairline });
  addDot(cliReviewSlide, { left: 78, top: top + 8, size: 8, fill: row.color });
  addText(cliReviewSlide, {
    text: row.name,
    left: 100,
    top,
    width: 150,
    height: 28,
    fontSize: 17,
    color: D.ink,
    bold: true,
  });
  const commandShape = addText(cliReviewSlide, {
    text: row.command,
    left: 266,
    top: top - 1,
    width: 704,
    height: 42,
    fontSize: index === 3 ? 13 : 12,
    color: index === 3 ? D.blue : D.slate,
    bold: index === 3,
    typeface: "Courier New",
  });
  if (index === 3) commandShape.name = "openrouter-chat-link-v44";
  addText(cliReviewSlide, {
    text: row.note,
    left: 990,
    top,
    width: 156,
    height: 34,
    fontSize: 12,
    color: row.color,
    bold: true,
    alignment: "right",
  });
});
addLine(cliReviewSlide, { left: 78, top: 512, width: 1068, color: D.hairline });
addBottomStatement(
  cliReviewSlide,
  "The reviewer reports. The builder makes the next change.",
  { top: 545, size: 18 },
);
setNotes(cliReviewSlide, [
  "These commands are starting points, not magic spells. Run them only after the builder has stopped and the current work is saved. Use a separate worktree for a review that runs at the same time as the build.",
  "Codex's read-only sandbox blocks filesystem writes. Claude Code and Grok Build plan modes are useful guardrails, but they are not identical to Codex's enforced read-only sandbox.",
  "For the strongest Claude or Grok boundary, give the reviewer only a saved diff and remove its tools. The visible commands stay short so a first-time participant can understand the pattern.",
  "OpenRouter Chat is the no-CLI path: select a reviewer from a different model family, such as Kimi K3, and paste the same compact review packet. Do not paste secrets. A remote review may use paid model credits.",
  "Verified against the installed Codex, Claude Code, and Grok Build help on October 18, 2026.",
  `OpenRouter Chat: ${OPENROUTER_CHAT_URL}`,
]);

addHeader(mcpSlide, {
  eyebrow: "// BEFORE WE BUILD · MCP",
  time: "0:38–0:46",
  title: "MCP connects agents to tools",
});
addSectionLabel(mcpSlide, "ONE STANDARD CONNECTION · MANY SYSTEMS");
addText(mcpSlide, {
  text: "An MCP server gives the agent a defined way to read approved context and call approved tools.",
  left: 78,
  top: 218,
  width: 1124,
  height: 44,
  fontSize: 21,
  color: D.ink,
  bold: true,
});
addOpenColumns(mcpSlide, [
  { title: "Resources", body: "Read files, records, or reference material that you choose to expose." },
  { title: "Tools", body: "Take a named action, such as opening an issue or reading a calendar." },
  { title: "Prompts", body: "Reuse a guided workflow that the user or system provides." },
], { top: 292, height: 170, titleSize: 19, bodySize: 16 });
addBottomStatement(
  mcpSlide,
  "A connection creates capability. Permission and confirmation still decide what the agent may do.",
  { top: 520, size: 17 },
);
setNotes(mcpSlide, [
  "MCP stands for Model Context Protocol. It is an open standard for connecting an AI application to external context and actions.",
  "The technical pattern has a host, a client, and a server. For this workshop, the useful idea is simpler: the agent gets a defined connector instead of a custom integration for every system.",
  `Official MCP server concepts and the resources, tools, and prompts primitives, accessed October 18, 2026: ${MCP_SERVER_URL}`,
]);

addHeader(composioSlide, {
  eyebrow: "// BEFORE WE BUILD · COMPOSIO",
  time: "0:38–0:46",
  title: "Composio manages the connection",
});
addSectionLabel(composioSlide, "CONNECT THE APP · APPROVE ACCESS · TEST ONE SAFE ACTION");
addOpenColumns(composioSlide, [
  { title: "Choose", body: "Use the native Composio plugin in Codex or Claude Code, or Composio Connect in another MCP client." },
  { title: "Ask", body: "Tell the agent which app you need, such as GitHub, Gmail, Notion, or Slack." },
  { title: "Approve", body: "Use the app’s own sign-in window. Never paste a password or token into the chat." },
  { title: "Test", body: "Start read-only. Confirm the account, tool, and result before any write action." },
], { top: 230, height: 230, titleSize: 19, bodySize: 15 });
const composioLink = addText(composioSlide, {
  text: "OPEN THE COMPOSIO CONNECT GUIDE ↗",
  left: 78,
  top: 488,
  width: 420,
  height: 24,
  fontSize: 12,
  color: D.blue,
  bold: true,
  typeface: "Courier New",
});
composioLink.name = "composio-connect-link-v41";
addBottomStatement(
  composioSlide,
  "Read first. Ask before sends, deletes, purchases, or permission changes.",
  { top: 540, size: 17 },
);
setNotes(composioSlide, [
  "For Codex or Claude Code, the native Composio plugin is the shortest path when it is available. MCP-compatible clients can use Composio Connect.",
  "The first time the agent needs an app, Composio can generate an OAuth link. The user approves access in the browser and the connection can persist for later work.",
  "For a command-line demonstration, link an app, search for the action, inspect the schema, and use a dry run where the tool supports one. Keep credentials out of slides and chat.",
  `Official Composio Connect guide, accessed October 18, 2026: ${COMPOSIO_CONNECT_URL}`,
]);

addHeader(contextSlide, {
  eyebrow: "// BEFORE WE BUILD · CONTEXT",
  time: "0:46–0:56",
  title: "Keep the working set useful",
});
addSectionLabel(contextSlide, "SMALL CONTEXT · DURABLE PROJECT MEMORY");
addOpenColumns(contextSlide, [
  { title: "Load less", body: "Open the project guide and the files for this checkpoint, not the whole repository." },
  { title: "Work smaller", body: "Give the agent one goal, one checkpoint, and one review at a time." },
  { title: "Compact", body: "Ask for a short state summary before a long conversation becomes noisy." },
  { title: "Hand off", body: "Save decisions and next steps in the repo. Start a fresh chat when the goal changes." },
], { top: 226, height: 220, titleSize: 19, bodySize: 16 });
addText(contextSlide, {
  text: "CAVEMAN MODE",
  left: 78,
  top: 475,
  width: 105,
  height: 22,
  fontSize: 12,
  color: D.editorialOrange,
  bold: true,
  typeface: "Courier New",
});
addText(contextSlide, {
  text: "A reusable prompt for terse output when the words are crowding out the work.",
  left: 190,
  top: 472,
  width: 780,
  height: 30,
  fontSize: 16,
  color: D.slate,
});
addBottomStatement(
  contextSlide,
  "Context is working memory. The repository is durable memory.",
  { top: 535, size: 18 },
);
setNotes(contextSlide, [
  "A context window is the information the model can actively use in one conversation. More text is not always more useful; stale or unrelated text competes with the current goal.",
  "Compaction replaces a long thread with a shorter summary. Before compacting, preserve exact file names, decisions, open risks, tests, and the next action. Save durable facts in the repository.",
  "Caveman is a deliberately terse communication mode. It reduces commentary and repeated explanation while preserving the instructions and evidence needed to do the work.",
]);

addHeader(projectMemorySlide, {
  eyebrow: "// BEFORE WE BUILD · PROJECT MEMORY",
  time: "0:46–0:56",
  title: "The files that guide the agent",
});
addSectionLabel(projectMemorySlide, "CURRENT RULES · CURRENT GOAL · REPEATABLE METHOD");
addLine(projectMemorySlide, { left: 68, top: 211, width: 1144, color: D.hairline });
const memoryFiles = [
  ["AGENTS.md", "Project rules", "The portable instructions for this course: commands, architecture, boundaries, and common mistakes."],
  ["spec.md", "What to build", "The user, problem, constraints, behavior, and acceptance checks for the current change."],
  ["SKILL.md", "How to repeat it", "A reusable procedure in a skill folder. The singular file name is intentional."],
  ["README.md", "Where to begin", "The human and agent map to the project, exercises, setup, and first prompt."],
];
memoryFiles.forEach(([file, role, body], index) => {
  const top = 228 + index * 70;
  addText(projectMemorySlide, {
    text: file,
    left: 78,
    top,
    width: 180,
    height: 24,
    fontSize: 16,
    color: index === 0 ? D.editorialOrange : D.blue,
    bold: true,
    typeface: "Courier New",
  });
  addText(projectMemorySlide, {
    text: role,
    left: 282,
    top,
    width: 190,
    height: 24,
    fontSize: 17,
    color: D.ink,
    bold: true,
  });
  addText(projectMemorySlide, {
    text: body,
    left: 486,
    top,
    width: 660,
    height: 44,
    fontSize: 15,
    color: D.slate,
  });
  if (index < memoryFiles.length - 1) {
    addLine(projectMemorySlide, { left: 78, top: top + 55, width: 1068, color: D.hairline });
  }
});
addBottomStatement(
  projectMemorySlide,
  "Claude Code loads CLAUDE.md. Here, that file imports AGENTS.md so the rules stay in one place.",
  { top: 530, size: 16 },
);
setNotes(projectMemorySlide, [
  "Use the exact filenames. Anthropic's persistent project-instruction file is CLAUDE.md. In this course repo, CLAUDE.md imports @AGENTS.md so the durable rules have one source of truth.",
  "Codex reads AGENTS.md. Other tools vary. If a client does not load the file or the CLAUDE.md import, open, attach, or paste the instructions explicitly.",
  "Anthropic recommends keeping CLAUDE.md under a page because it is always loaded. The same discipline applies to AGENTS.md: keep only durable, useful project rules.",
  "A skill is a folder with a singular SKILL.md file. Its description helps the agent decide when to use it, and its instructions explain the repeatable procedure.",
  `Anthropic guidance on CLAUDE.md, spec.md, and skills, accessed October 18, 2026: ${SDLC_URL}`,
]);

addHeader(artifactChainSlide, {
  eyebrow: "// START HERE · THE HANDOFF",
  time: "0:46–0:56",
  title: "Every stage leaves a record",
});
addSectionLabel(artifactChainSlide, "ANTHROPIC’S COMPLETE PLAYBOOK LIST");
const artifactItems = [
  ["01", "Plan", "intent.md", "Why this change should exist."],
  ["02", "Design", "spec.md", "What the system should do."],
  ["03", "Build", "plan.md", "How the change will be made."],
  ["04", "Test", "code change + tests", "The change and evidence that it works."],
  ["05", "Deploy", "pull request + notes", "The reviewed release record."],
  ["06", "Maintain", "incident record", "What happened and what starts next."],
];
artifactItems.forEach(([number, stage, artifact, purpose], index) => {
  const column = index % 2;
  const row = Math.floor(index / 2);
  const left = 78 + column * 562;
  const top = 222 + row * 92;
  addText(artifactChainSlide, {
    text: number,
    left,
    top,
    width: 35,
    height: 20,
    fontSize: 11,
    color: index === 0 ? D.editorialOrange : D.blue,
    typeface: "Courier New",
  });
  addText(artifactChainSlide, {
    text: stage,
    left: left + 44,
    top: top - 2,
    width: 100,
    height: 24,
    fontSize: 17,
    color: D.ink,
    bold: true,
  });
  addText(artifactChainSlide, {
    text: artifact,
    left: left + 160,
    top: top - 2,
    width: 180,
    height: 24,
    fontSize: 15,
    color: D.blue,
    bold: true,
    typeface: "Courier New",
  });
  addText(artifactChainSlide, {
    text: purpose,
    left: left + 44,
    top: top + 34,
    width: 450,
    height: 34,
    fontSize: 14,
    color: D.slate,
  });
  if (row < 2) {
    addLine(artifactChainSlide, { left, top: top + 76, width: 500, color: D.hairline });
  }
});
addBottomStatement(
  artifactChainSlide,
  "Maintenance can write the next intent.md. The loop begins again.",
  { top: 530, size: 18 },
);
setNotes(artifactChainSlide, [
  "This is the complete artifact chain named in Anthropic's playbook: intent.md, spec.md, plan.md, the code diff and its tests, the PR with review findings, and the incident record.",
  "CLAUDE.md and SKILL.md are persistent operating context. They are important, but they are not additional stage-output artifacts in this six-item chain.",
  "An incident record can generate the next intent.md, closing the loop from Maintain back to Plan.",
  `Anthropic AI-native SDLC playbook, accessed October 18, 2026: ${SDLC_URL}`,
]);

followOnSlide.moveTo(2);
secondOpinionSlide.moveTo(7);
cliReviewSlide.moveTo(8);
mcpSlide.moveTo(9);
composioSlide.moveTo(10);
contextSlide.moveTo(11);
projectMemorySlide.moveTo(12);
artifactChainSlide.moveTo(13);

// Add Mark's introduction immediately after the event cover. Build it last so
// the source slide numbers used throughout the revision remain stable.
const bioSlide = presentation.slides.getItem(1).duplicate();
bioSlide.moveTo(presentation.slides.items.length - 1);
const bioSnapshot = await presentation.inspect({
  kind: "slide,textbox,shape,image,table,chart,notes",
  maxChars: 1000000,
});
const bioRecords = parseNdjson(bioSnapshot.ndjson);
clearMainContent(presentation, bioRecords, presentation.slides.items.length);
bioSlide.background.fill = D.white;
addHeader(bioSlide, {
  eyebrow: "// OPENING · YOUR HOST",
  time: "0:00–0:02",
  title: "Mark Hinkle",
});
addSectionLabel(
  bioSlide,
  "I HELP PEOPLE TURN NEW TECHNOLOGY INTO USEFUL WORK",
);
addImageFrame(bioSlide, {
  blob: headshotBytes,
  contentType: "image/png",
  alt: "Mark Hinkle",
  left: 78,
  top: 220,
  width: 326,
  height: 326,
  fit: "cover",
});
const bioRows = [
  [
    "Peripety Labs",
    "I lead an AI consulting and product company that helps teams put AI into real operations.",
  ],
  [
    "The AIE Network",
    "I publish practical AI news and analysis for more than 250,000 subscribers.",
  ],
  [
    "All Things AI",
    "I co-founded the Triangle's AI business conference and year-round community.",
  ],
];
bioRows.forEach(([label, description], index) => {
  const top = 220 + index * 105;
  addText(bioSlide, {
    text: label,
    left: 486,
    top,
    width: 270,
    height: 30,
    fontSize: 19,
    color: D.ink,
    bold: true,
  });
  addText(bioSlide, {
    text: description,
    left: 486,
    top: top + 38,
    width: 660,
    height: 54,
    fontSize: 16,
    color: D.slate,
  });
  if (index < bioRows.length - 1) {
    addLine(bioSlide, {
      left: 486,
      top: top + 94,
      width: 660,
      color: D.hairline,
    });
  }
});
addBottomStatement(
  bioSlide,
  "I came up through the internet, Linux, open source, and cloud. I teach from what we learned shipping real systems.",
  { top: 578, color: D.editorialOrange, size: 17 },
);
setNotes(bioSlide, [
  "Keep this to two minutes. The credential that matters today is that I have shipped the mistakes I am about to show you.",
  "I have spent more than 30 years working through the internet, Linux, open source, cloud, DevOps, and now AI. The pattern repeats: the toy gets useful faster than the experts expect.",
  `Current speaker biography and training background, accessed October 18, 2026: ${MARK_BIO_URL}`,
  `Current Peripety Labs, AIE Network, and All Things AI roles, accessed October 18, 2026: ${ORGANIZERS_URL}`,
  `The organizer biography reports that The AIE Network reaches more than 250,000 subscribers: ${ORGANIZERS_URL}`,
]);
// Rebuild the opening order from stable slide references. Moving in reverse to
// index zero avoids index drift as the new slides are inserted.
for (const slide of [
  coverSlide,
  bioSlide,
  workshopPromiseSlide,
  followOnSlide,
  outcomeSlide,
  agentConceptSlide,
  harnessConceptSlide,
  harnessChoicesSlide,
  secondOpinionSlide,
  cliReviewSlide,
  mcpSlide,
  composioSlide,
  contextSlide,
  projectMemorySlide,
  artifactChainSlide,
  vibeCodingSlide,
  lifecycleSlide,
  startingPointsSlide,
  workshopPlanSlide,
].reverse()) {
  slide.moveTo(0);
}

// Refresh visible timing and page-number furniture after the insertions.
const finalTextSnapshot = await presentation.inspect({
  kind: "textbox",
  maxChars: 1000000,
});
const finalTextRecords = parseNdjson(finalTextSnapshot.ndjson);
const timedReplacements = [
  { slideIndex: 4, search: "0:00–0:05", replacement: "0:08–0:12" },
  { slideIndex: 15, search: "0:10–0:20", replacement: "0:56–0:57" },
  { slideIndex: 16, search: "0:30–0:45", replacement: "0:57–0:58" },
  { slideIndex: 17, search: "0:45–0:55", replacement: "0:58–0:59" },
  { slideIndex: 18, search: "0:55–1:00", replacement: "0:59–1:00" },
];
for (const target of timedReplacements) {
  const record = finalTextRecords.find((entry) =>
    entry.kind === "textbox" && entry.text === target.search,
  );
  if (!record) throw new Error(`Could not find timing text on slide ${target.slideIndex + 1}: ${target.search}`);
  const shape = presentation.resolve(record.id);
  shape.text = target.replacement;
  shape.text.style = { ...record.style };
}
for (const record of finalTextRecords.filter((entry) => /^\d{2} \/ 52$/.test(entry.text ?? ""))) {
  const shape = presentation.resolve(record.id);
  shape.text = `${String(record.slideIndex + 1).padStart(2, "0")} / 63`;
  shape.text.style = { ...record.style };
}

if (presentation.slides.items.length !== 63) {
  throw new Error(`Expected 63 slides, found ${presentation.slides.items.length}`);
}

await fs.mkdir(STAGING_DIR, { recursive: true });
await fs.mkdir(OUTPUT_DIR, { recursive: true });
await fs.mkdir(RENDER_DIR, { recursive: true });

const sourceSha256 = await fileSha256(SOURCE_PPTX);
const candidatePath = path.join(STAGING_DIR, "candidate-model-review-v45.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);
await addExternalShapeHyperlink(candidatePath, {
  slideNumber: 17,
  shapeName: "sdlc-source-link-v28",
  url: SDLC_URL,
});
await addExternalShapeHyperlink(candidatePath, {
  slideNumber: 21,
  shapeName: "course-repo-link-v34",
  url: COURSE_REPO_URL,
});
await addExternalShapeHyperlink(candidatePath, {
  slideNumber: 12,
  shapeName: "composio-connect-link-v41",
  url: COMPOSIO_CONNECT_URL,
});
await addExternalShapeHyperlink(candidatePath, {
  slideNumber: 10,
  shapeName: "openrouter-chat-link-v44",
  url: OPENROUTER_CHAT_URL,
});

const { finalizePresentation } = await import(
  pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href
);
const result = await finalizePresentation({
  explicitTotalSlideCount: 63,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  sourceTemplatePath: SOURCE_PPTX,
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
  fontPolicy: {
    basis: "design",
    families: ["Courier New", "Montserrat", "Verdana"],
  },
  verifyArtifactToolImport: true,
  receiptPath: path.join(STAGING_DIR, `${path.basename(FINAL_PPTX)}.validation.json`),
});

const finalPresentation = await PresentationFile.importPptx(await FileBlob.load(FINAL_PPTX));
for (const [index, slide] of finalPresentation.slides.items.entries()) {
  const png = await slide.export({ format: "png", scale: 1 });
  await fs.writeFile(
    path.join(RENDER_DIR, `slide-${String(index + 1).padStart(2, "0")}.png`),
    new Uint8Array(await png.arrayBuffer()),
  );
}
const montage = await finalPresentation.export({ format: "webp", montage: true, scale: 0.5 });
await fs.writeFile(MONTAGE_PATH, new Uint8Array(await montage.arrayBuffer()));

console.log(JSON.stringify({
  finalPath: FINAL_PPTX,
  sourceSha256,
  finalSha256: await fileSha256(FINAL_PPTX),
  slides: finalPresentation.slides.items.length,
  renderDir: RENDER_DIR,
  montagePath: MONTAGE_PATH,
  validation: result,
}));
