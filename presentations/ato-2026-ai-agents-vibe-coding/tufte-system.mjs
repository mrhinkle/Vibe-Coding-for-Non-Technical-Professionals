import {
  D,
  addDot,
  addHeader,
  addNode,
  addPanel,
  addText,
  clearMainContent,
  connect,
} from "./design-system.mjs";

const SOURCE_STAGES = ["SPEC", "BUILD", "TEST", "REVIEW", "SHIP", "MONITOR"];
const STAGES = ["DESCRIBE", "MAKE", "CHECK", "SECOND LOOK", "PUBLISH", "LISTEN"];

function addLine(slide, {
  left,
  top,
  width,
  height = 0,
  color = D.hairline,
  weight = 1,
  style = "solid",
  arrow = false,
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
    ...(arrow ? { tail: { type: "triangle", width: "sm", length: "sm" } } : {}),
  });
}

function addLabel(slide, text, left, top, width, {
  height = 24,
  size = 14,
  color = D.slate,
  bold = false,
  mono = false,
  align = "left",
} = {}) {
  return addText(slide, {
    text,
    left,
    top,
    width,
    height,
    fontSize: size,
    color,
    bold,
    typeface: mono ? "Courier New" : "Montserrat",
    alignment: align,
  });
}

function addOpenNode(slide, text, left, top, width, {
  height = 54,
  color = D.blue,
  fill = D.white,
  size = 16,
} = {}) {
  return addNode(slide, {
    text,
    left,
    top,
    width,
    height,
    fill,
    line: color,
    color: D.ink,
    fontSize: size,
    radius: 12,
  });
}

function slide3(presentation, records) {
  clearMainContent(presentation, records, 3);
  const slide = presentation.slides.getItem(2);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "THE PROMISE FOR THE DAY",
    time: "",
    title: "One working tool",
    flourish: true,
  });

  addLabel(slide, "WHAT “WORKING” MEANS", 68, 190, 320, {
    size: 12,
    color: D.editorialOrange,
    bold: true,
    mono: true,
  });
  addLine(slide, { left: 68, top: 220, width: 1144, color: D.orange, weight: 2 });

  const proofs = [
    ["01", "Repository", "Every change saved in GitHub"],
    ["02", "Live site", "A preview for every change"],
    ["03", "Test", "Runs on every push"],
    ["04", "Rollback", "Used once today"],
    ["05", "Skill", "Your repeatable workflow"],
  ];
  const columnWidth = 208;
  const columnGap = 26;
  proofs.forEach(([number, label, evidence], index) => {
    const x = 68 + index * (columnWidth + columnGap);
    if (index > 0) {
      addLine(slide, {
        left: x - 13,
        top: 252,
        width: 0,
        height: 184,
        color: D.hairline,
        weight: 0.8,
      });
    }
    addLabel(slide, number, x, 255, 44, {
      size: 12,
      color: D.editorialOrange,
      bold: true,
      mono: true,
    });
    addLabel(slide, label, x, 300, columnWidth, {
      height: 30,
      size: 20,
      color: D.ink,
      bold: true,
    });
    addLabel(slide, evidence, x, 348, columnWidth - 6, {
      height: 58,
      size: 16,
      color: D.slate,
    });
  });

  addLine(slide, { left: 68, top: 495, width: 1144, color: D.orange, weight: 1.5 });
  addLabel(slide, "THE BILL, SAID PLAINLY", 68, 520, 250, {
    size: 12,
    color: D.editorialOrange,
    bold: true,
    mono: true,
  });
  addLabel(
    slide,
    "Claude Pro is $20 a month. A .com is about $11 a year. Vercel Pro becomes $20 a month only when the site makes money.",
    68,
    557,
    1144,
    { height: 52, size: 17, color: D.ink },
  );
  addLabel(slide, "The tool carries no builder subscription.", 68, 608, 640, {
    height: 24,
    size: 16,
    color: D.editorialOrange,
    bold: true,
  });
}

function slide4(presentation, records) {
  clearMainContent(presentation, records, 4);
  const slide = presentation.slides.getItem(3);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "THE DAY AT A GLANCE",
    time: "6 HOURS · 3 SPRINTS",
    title: "Six hours. Five of class, one of live hacking, in three sprints.",
    flourish: true,
  });

  const sprints = [
    {
      name: "SPRINT 1",
      range: "0:00–2:20",
      title: "Get it live",
      body:
        "First, you connect GitHub and Vercel, then turn the idea you brought into a brief the AI can follow. You make a small change, publish it, and see the whole path from your keyboard to a live URL. I build beside you so you can watch the decisions and the mistakes.",
      finish: "Your repo is live, and the first change is yours.",
    },
    {
      name: "SPRINT 2",
      range: "2:20–4:25",
      title: "Make it durable",
      body:
        "Next, you add a test that can stop a bad change before it reaches the live site. You deliberately break it, use rollback, then connect a real database. This is the point where a demo becomes something you can update with evidence instead of hope.",
      finish: "The tool has a release gate and remembers real data.",
    },
    {
      name: "SPRINT 3",
      range: "4:25–6:00",
      title: "Make it yours",
      body:
        "Finally, you add monitoring and write the routine you followed as a reusable skill. We make one last change live, then read the evidence back together. The repo, deployment history, data, and operating checklist stay with you after the workshop.",
      finish: "You know what you own and how to keep it running.",
    },
  ];
  addLabel(slide, "WHAT IS A SPRINT?", 68, 180, 170, {
    height: 22,
    size: 12,
    color: D.blue,
    bold: true,
  });
  addLabel(
    slide,
    "A sprint is a short, focused block of work that ends with something usable.",
    236,
    177,
    950,
    { height: 28, size: 17, color: D.ink },
  );
  addLine(slide, { left: 68, top: 216, width: 1144, color: D.paleLine, weight: 1 });

  const columns = [68, 465, 862];
  [432, 829].forEach((x) => {
    addLine(slide, {
      left: x,
      top: 252,
      width: 0,
      height: 353,
      color: D.hairline,
      weight: 0.8,
    });
  });

  sprints.forEach((sprint, index) => {
    const x = columns[index];
    addLabel(slide, sprint.name, x, 252, 130, {
      height: 20,
      size: 12,
      color: D.blue,
      bold: true,
      mono: true,
    });
    addLabel(slide, sprint.range, x + 190, 252, 140, {
      height: 20,
      size: 12.5,
      color: D.ink,
      mono: true,
      align: "right",
    });
    addLabel(slide, sprint.title, x, 297, 330, {
      height: 32,
      size: 22,
      color: D.ink,
      bold: true,
    });
    addLabel(slide, sprint.body, x, 350, 330, {
      height: 156,
      size: 16,
      color: D.ink,
    });
    addLabel(slide, "BY THE END", x, 500, 130, {
      height: 18,
      size: 11,
      color: D.editorialOrange,
      bold: true,
      mono: true,
    });
    addLabel(slide, sprint.finish, x, 526, 330, {
      height: 46,
      size: 15,
      color: D.ink,
      bold: true,
    });
  });

  addLine(slide, { left: 68, top: 622, width: 1144, color: D.orange, weight: 1.5 });
  addLabel(
    slide,
    "Three live builds happen inside your own tool. I work in mine at the same time, mistakes included.",
    68,
    639,
    1144,
    { height: 24, size: 16, color: D.ink },
  );
}

function slide7(presentation, records) {
  clearMainContent(presentation, records, 7);
  const slide = presentation.slides.getItem(6);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 1  ·  LAND  ·  20 MIN  ·  FALLBACK",
    time: "STILL RED AT 0:15?",
    title: "Still red at 0:15? Move to the browser. You lose nothing.",
  });

  const question = addNode(slide, {
    text: "Site live\nat 0:15?",
    left: 70,
    top: 245,
    width: 170,
    height: 86,
    fill: D.midnight,
    line: D.midnight,
    color: D.white,
    fontSize: 20,
  });
  const continueNode = addOpenNode(slide, "Continue", 330, 182, 150, {
    height: 56,
    color: D.green,
    fill: "#F0FDF4",
  });
  connect(slide, question, continueNode, { kind: "elbow", fromSide: "right", toSide: "left", color: D.green });
  addLabel(slide, "YES", 260, 192, 54, { size: 11, color: D.green, bold: true, mono: true, align: "center" });

  const steps = [
    ["1 · Sign-in opens", 300],
    ["2 · OS + Git ready", 515],
    ["3 · Retry once", 730],
    ["Browser path", 945],
  ];
  const nodes = steps.map(([label, x], index) => addOpenNode(slide, label, x, 325, 165, {
    height: 58,
    color: index === steps.length - 1 ? D.orange : D.blue,
    fill: index === steps.length - 1 ? "#FFF7ED" : D.white,
    size: 15,
  }));
  connect(slide, question, nodes[0], { kind: "elbow", fromSide: "right", toSide: "left", color: D.blue });
  addLabel(slide, "NO", 248, 344, 46, { size: 11, color: D.blue, bold: true, mono: true, align: "center" });
  for (let index = 0; index < nodes.length - 1; index += 1) {
    connect(slide, nodes[index], nodes[index + 1], { color: index === 2 ? D.orange : D.mutedLine });
  }
  [0, 1].forEach((index) => {
    connect(slide, nodes[index], nodes[3], {
      kind: "elbow",
      fromSide: "bottom",
      toSide: "bottom",
      color: D.orange,
      style: "dashed",
      arrow: false,
    });
  });
  addLabel(slide, "STOP AFTER STEP 3", 650, 406, 270, { size: 12, color: D.red, bold: true, mono: true, align: "center" });
  addLine(slide, { left: 792, top: 397, width: 0, height: 36, color: D.red, weight: 2 });

  addPanel(slide, { left: 300, top: 468, width: 810, height: 103, fill: D.ice, line: D.hairline, radius: 14 });
  addLabel(slide, "THE ZERO-INSTALL PATH", 326, 488, 235, { size: 12, color: D.blue, bold: true, mono: true });
  addLabel(slide, "claude.ai/code · paid Claude plan + GitHub", 326, 518, 360, { size: 15, color: D.ink, bold: true });
  addLabel(slide, "Same repository. Same prompts. A branch pushed back to your GitHub.", 720, 510, 360, { height: 45, size: 15, color: D.slate });
}

function slide9(presentation, records) {
  clearMainContent(presentation, records, 9);
  const slide = presentation.slides.getItem(8);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 2  ·  ONE YEAR LATER  ·  15 MIN  ·  TALK",
    time: "0:25 – 0:40",
    title: "It is not a toy. It is a $13 billion category.",
    flourish: true,
  });
  const axisLeft = 325;
  const axisWidth = 830;
  const max = 14;
  [0, 5, 10, 14].forEach((value) => {
    const x = axisLeft + axisWidth * (value / max);
    addLine(slide, { left: x, top: 191, width: 0, height: 300, color: value === 0 ? D.ink : "#E8EEF6", weight: 1 });
    addLabel(slide, `$${value}B`, x - 26, 164, 52, { size: 11, color: D.mutedLine, mono: true, align: "center" });
  });
  const rows = [
    ["Lovable", "private valuation · Aug 2026", 13.3, "$13.3B"],
    ["Replit", "private valuation · Mar 2026", 9, "$9B"],
    ["Base44", "acquisition price · Jun 2025", 0.08, "$80M"],
  ];
  rows.forEach(([company, measure, value, display], index) => {
    const y = 240 + index * 104;
    addLabel(slide, company, 68, y - 15, 210, { size: 19, color: D.ink, bold: true });
    addLabel(slide, measure, 68, y + 18, 235, { size: 12, color: D.mutedLine, mono: true });
    const x = axisLeft + axisWidth * (value / max);
    addLine(slide, { left: axisLeft, top: y, width: Math.max(5, x - axisLeft), color: D.blue, weight: 2.5 });
    addDot(slide, { left: x - 7, top: y - 7, size: 14, fill: D.blue });
    addLabel(slide, display, Math.min(x + 16, 1105), y - 17, 105, { size: 18, color: D.blue, bold: true, mono: true });
  });
  addLine(slide, { left: 68, top: 534, width: 5, height: 69, color: D.orange, weight: 5 });
  addLabel(slide, "Customers are responsible for protecting their application data.", 96, 539, 950, { size: 21, color: D.ink });
  addLabel(slide, "Lovable’s answer when a researcher found 1 in 10 tested apps wide open. Fair—and exactly why the rest of today is your job.", 96, 577, 1050, {
    height: 34,
    size: 13,
    color: D.slate,
  });
}

function slide16(presentation, records) {
  clearMainContent(presentation, records, 16);
  const slide = presentation.slides.getItem(15);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 3  ·  SPEC  ·  20 MIN  ·  HANDS-ON",
    time: "0:40 – 1:00",
    title: "Fill in spec.md for the thing you brought. Then ask for a plan, not code.",
  });

  const labels = ["Open\nspec.md", "Fill five\nheadings", "Ask for\na plan", "Read +\nchallenge", "Approve\nthe build"];
  const descriptions = ["starter repo", "15 lines", "no code yet", "say what is wrong", "both agree"];
  const nodes = labels.map((label, index) => addOpenNode(slide, label, 70 + index * 230, 220, 165, {
    height: 70,
    color: index === 3 ? D.orange : index === 4 ? D.green : D.blue,
    fill: index === 3 ? "#FFF7ED" : index === 4 ? "#F0FDF4" : D.white,
  }));
  for (let index = 0; index < nodes.length - 1; index += 1) connect(slide, nodes[index], nodes[index + 1]);
  descriptions.forEach((text, index) => addLabel(slide, text, 70 + index * 230, 306, 165, {
    size: 12,
    color: D.mutedLine,
    align: "center",
  }));
  addLine(slide, { left: 845, top: 356, width: -460, height: 0, color: D.orange, weight: 1, style: "dashed", arrow: true });
  addLabel(slide, "If the plan is wrong, revise the spec—not the vibes.", 390, 366, 455, { size: 13, color: D.editorialOrange, bold: true, align: "center" });

  addPanel(slide, { left: 70, top: 420, width: 920, height: 122, fill: D.midnight, line: D.orange, radius: 14 });
  addLabel(slide, "TYPE THIS, VERBATIM", 94, 441, 260, { size: 11, color: D.orange, bold: true, mono: true });
  addLabel(slide, "Read spec.md. Use plan mode. Plan one page in this app. Do not write code yet. Show me the plan.", 94, 474, 868, {
    height: 50,
    size: 15,
    color: "#D7E0ED",
    mono: true,
  });
  addDot(slide, { left: 1020, top: 452, size: 12, fill: D.green });
  addLabel(slide, "Plan fits one screen", 1042, 445, 170, { size: 13, color: D.green, bold: true });
  addDot(slide, { left: 1020, top: 504, size: 12, fill: D.red });
  addLabel(slide, "Helper comes to you", 1042, 497, 170, { size: 13, color: D.red, bold: true });
}

function slide17(presentation, records) {
  clearMainContent(presentation, records, 17);
  const slide = presentation.slides.getItem(16);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 4  ·  FIRST SHIP  ·  25 MIN  ·  HANDS-ON",
    time: "1:00 – 1:25",
    title: "GitHub in four words. You will never type a git command today.",
    flourish: true,
  });
  addLabel(slide, "REPOSITORY · the folder and its whole history", 68, 185, 600, { size: 14, color: D.blue, bold: true });
  addPanel(slide, { left: 68, top: 215, width: 1144, height: 285, fill: D.white, line: D.hairline, radius: 14 });
  addLabel(slide, "main · what is live", 92, 252, 180, { size: 13, color: D.slate, bold: true, mono: true });
  addLabel(slide, "feature branch · the photocopy", 92, 382, 260, { size: 13, color: D.blue, bold: true, mono: true });
  addLine(slide, { left: 320, top: 275, width: 760, color: D.mutedLine, weight: 2 });
  addLine(slide, { left: 320, top: 405, width: 605, color: D.blue, weight: 2 });
  [410, 570, 730, 885].forEach((x, index) => {
    addDot(slide, { left: x, top: 397, size: 16, fill: index === 3 ? D.orange : D.blue });
    addLabel(slide, index === 0 ? "commit" : index === 3 ? "ready" : `commit ${index + 1}`, x - 34, 430, 88, {
      size: 13,
      color: index === 3 ? D.editorialOrange : D.mutedLine,
      mono: true,
      align: "center",
    });
  });
  addDot(slide, { left: 315, top: 267, size: 16, fill: D.mutedLine });
  addDot(slide, { left: 1072, top: 267, size: 16, fill: D.green });
  addLine(slide, { left: 925, top: 405, width: 155, height: -130, color: D.orange, weight: 1.5, arrow: true });
  addLabel(slide, "PULL REQUEST", 934, 323, 150, { size: 13, color: D.editorialOrange, bold: true, mono: true, align: "center" });
  addLabel(slide, "compare + check + ask to merge", 925, 349, 174, { height: 42, size: 13, color: D.slate, align: "center" });
  addLabel(slide, "BRANCH", 405, 518, 90, { size: 12, color: D.blue, bold: true, mono: true });
  addLabel(slide, "A safe copy. Live never sees it until you say so.", 485, 512, 470, { size: 14, color: D.slate });
  addLabel(slide, "COMMIT", 405, 554, 90, { size: 12, color: D.blue, bold: true, mono: true });
  addLabel(slide, "A saved snapshot with a note. Undo to any one.", 485, 548, 470, { size: 14, color: D.slate });
  addLabel(slide, "GitHub Free · $0 · private repositories · automated test minutes included", 68, 596, 820, { size: 13, color: D.slate, mono: true });
}

function slide22(presentation, records) {
  clearMainContent(presentation, records, 22);
  const slide = presentation.slides.getItem(21);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 5  ·  BUILD THE ONE THING  ·  25 MIN  ·  DEMO",
    time: "1:35 – 2:00",
    title: "Watch the mistake. That is the lesson.",
  });

  const observe = addOpenNode(slide, "Observe\nthe output", 105, 232, 190, { height: 74 });
  const copy = addOpenNode(slide, "Copy the\nexact error", 390, 232, 190, { height: 74 });
  const fix = addOpenNode(slide, "Fix the code—\nnot the test", 675, 232, 190, { height: 74, color: D.orange, fill: "#FFF7ED" });
  const preview = addOpenNode(slide, "Preview\nagain", 960, 232, 190, { height: 74, color: D.green, fill: "#F0FDF4" });
  connect(slide, observe, copy);
  connect(slide, copy, fix);
  connect(slide, fix, preview);
  addLine(slide, { left: 1055, top: 306, width: 0, height: 122, color: D.mutedLine, weight: 1 });
  addLine(slide, { left: 200, top: 428, width: 855, color: D.mutedLine, weight: 1 });
  addLine(slide, { left: 200, top: 428, width: 0, height: -122, color: D.mutedLine, weight: 1, arrow: true });
  addLabel(slide, "THE DIAGNOSTIC LOOP", 482, 414, 270, { size: 12, color: D.blue, bold: true, mono: true, align: "center" });

  const escape = addOpenNode(slide, "Still wrong? Close the PR. Restart the branch.", 390, 494, 475, {
    height: 58,
    color: D.red,
    fill: "#FEF2F2",
    size: 16,
  });
  connect(slide, fix, escape, { kind: "elbow", fromSide: "bottom", toSide: "top", color: D.red, style: "dashed" });
  addLabel(slide, "Nothing on a branch can touch your live site.", 350, 577, 555, { size: 18, color: D.ink, bold: true, align: "center" });
}

function slide24(presentation, records) {
  clearMainContent(presentation, records, 24);
  const slide = presentation.slides.getItem(23);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 6  ·  TEST IS THE GATE  ·  25 MIN  ·  HANDS-ON",
    time: "2:20 – 2:45",
    title: "If you can’t verify it, don’t ship it.",
    flourish: true,
  });
  addLabel(slide, "Give the agent a check it can run.", 68, 160, 500, { size: 18, color: D.slate });
  const spec = addOpenNode(slide, "Spec acceptance\nsentence", 70, 390, 205, { height: 64, color: D.orange, fill: "#FFF7ED" });
  const tests = addOpenNode(slide, "Tests", 370, 212, 180, { height: 58 });
  const build = addOpenNode(slide, "Build", 370, 326, 180, { height: 58 });
  const screenshot = addOpenNode(slide, "Screenshot", 370, 440, 180, { height: 58 });
  const gate = addNode(slide, {
    text: "SHIP\nGATE",
    left: 710,
    top: 304,
    width: 175,
    height: 100,
    fill: D.orange,
    line: D.orange,
    color: D.white,
    fontSize: 20,
  });
  const live = addNode(slide, {
    text: "LIVE",
    left: 1025,
    top: 319,
    width: 140,
    height: 70,
    fill: D.green,
    line: D.green,
    color: D.white,
    fontSize: 20,
  });
  connect(slide, spec, tests, { kind: "elbow", fromSide: "right", toSide: "left", color: D.orange });
  [tests, build, screenshot].forEach((node) => connect(slide, node, gate, { color: D.mutedLine }));
  connect(slide, gate, live, { color: D.green, width: 2 });
  addLabel(slide, "does the real job?", 568, 220, 130, { size: 12, color: D.mutedLine, align: "right" });
  addLabel(slide, "does it compile?", 568, 334, 130, { size: 12, color: D.mutedLine, align: "right" });
  addLabel(slide, "does it match?", 568, 448, 130, { size: 12, color: D.mutedLine, align: "right" });
  addLabel(slide, "GREEN OPENS", 913, 302, 96, { size: 11, color: D.green, bold: true, mono: true, align: "center" });
  addLabel(slide, "RED STOPS", 913, 386, 96, { size: 11, color: D.red, bold: true, mono: true, align: "center" });
  addLabel(slide, "Playwright turns one sentence in spec.md into a repeatable check. GitHub runs it whether you remember or not.", 196, 558, 890, {
    height: 42,
    size: 16,
    color: D.slate,
    align: "center",
  });
}

function slide27(presentation, records) {
  clearMainContent(presentation, records, 27);
  const slide = presentation.slides.getItem(26);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 6  ·  TEST IS THE GATE  ·  25 MIN  ·  TALK",
    time: "2:20 – 2:45",
    title: "Code ages. Put one chore on the calendar.",
  });
  const labels = ["1st of\nmonth", "Read the\nadvisory", "Update the\ndependency", "Build +\ntest", "Open a\nPR", "Green\ncheck", "Merge"];
  const nodes = labels.map((label, index) => addOpenNode(slide, label, 70 + index * 162, 232, 130, {
    height: 68,
    color: index === 0 ? D.orange : index === 5 || index === 6 ? D.green : D.blue,
    fill: index === 0 ? "#FFF7ED" : index === 5 || index === 6 ? "#F0FDF4" : D.white,
    size: 15,
  }));
  for (let index = 0; index < nodes.length - 1; index += 1) connect(slide, nodes[index], nodes[index + 1]);
  addLine(slide, { left: 1107, top: 300, width: 0, height: 76, color: D.mutedLine, weight: 1 });
  addLine(slide, { left: 135, top: 376, width: 972, color: D.mutedLine, weight: 1 });
  addLine(slide, { left: 135, top: 376, width: 0, height: -76, color: D.mutedLine, weight: 1, arrow: true });
  addLabel(slide, "REPEAT", 570, 362, 140, { size: 11, color: D.mutedLine, bold: true, mono: true, align: "center" });

  addPanel(slide, { left: 70, top: 432, width: 540, height: 118, fill: D.ice, line: D.hairline, radius: 14 });
  addLabel(slide, "WHY THIS EXISTS", 94, 452, 180, { size: 11, color: D.blue, bold: true, mono: true });
  addLabel(slide, "CVE-2026-44575 · Next.js · high severity", 94, 482, 455, { size: 15, color: D.ink, bold: true });
  addLabel(slide, "Known-bad versions are cheap to block when a test exists.", 94, 515, 470, { size: 14, color: D.slate });
  addPanel(slide, { left: 650, top: 432, width: 560, height: 118, fill: D.midnight, line: D.midnight, radius: 14 });
  addLabel(slide, "THE TWO-MINUTE CHORE", 674, 452, 230, { size: 11, color: D.orange, bold: true, mono: true });
  addLabel(slide, "npm audit → update → build → Playwright → PR", 674, 493, 510, { size: 16, color: "#D7E0ED", mono: true });
  addLabel(slide, "Green check, merge, done.", 420, 582, 440, { size: 18, color: D.green, bold: true, align: "center" });
}

function slide31(presentation, records) {
  clearMainContent(presentation, records, 31);
  const slide = presentation.slides.getItem(30);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 7  ·  SHIP AND OWN IT  ·  20 MIN  ·  HANDS-ON",
    time: "3:15 – 3:35",
    title: "Whoever wrote it does not review it. Same rule for people and models.",
  });
  addLine(slide, { left: 445, top: 190, width: 0, height: 370, color: D.hairline, weight: 1 });
  addLabel(slide, "AUTHOR CONTEXT", 70, 195, 240, { size: 12, color: D.blue, bold: true, mono: true });
  addLabel(slide, "Merged\nchange", 70, 245, 220, { height: 72, size: 31, color: D.ink, bold: true });
  addLabel(slide, "The person—or model—who made it is carrying assumptions.", 70, 345, 300, { height: 70, size: 16, color: D.slate });
  addPanel(slide, { left: 70, top: 455, width: 290, height: 75, fill: D.midnight, line: D.midnight, radius: 12 });
  addLabel(slide, "/code-review", 94, 478, 240, { size: 22, color: D.white, bold: true, mono: true, align: "center" });

  addLabel(slide, "INDEPENDENT CONTEXT", 500, 195, 300, { size: 12, color: D.editorialOrange, bold: true, mono: true });
  const labels = ["Fresh\nreview", "Top three\nfindings", "Partner\nreproduces", "Fix on\nbranch", "Green\ncheck", "Live"];
  const nodes = labels.map((label, index) => addOpenNode(slide, label, 500 + index * 118, 285, 96, {
    height: 68,
    color: index === 2 ? D.orange : index >= 4 ? D.green : D.blue,
    fill: index === 2 ? "#FFF7ED" : index >= 4 ? "#F0FDF4" : D.white,
    size: 13,
  }));
  for (let index = 0; index < nodes.length - 1; index += 1) connect(slide, nodes[index], nodes[index + 1]);
  addLabel(slide, "REPRODUCE BEFORE YOU FIX", 694, 375, 250, { size: 11, color: D.editorialOrange, bold: true, mono: true, align: "center" });
  addLabel(slide, "A fresh reader gets the diff, not the story you told yourself while writing it.", 510, 445, 665, {
    height: 52,
    size: 18,
    color: D.slate,
    align: "center",
  });
  addDot(slide, { left: 742, top: 531, size: 12, fill: D.green });
  addLabel(slide, "Green sticky when the fix is live", 768, 524, 340, { size: 14, color: D.green, bold: true });
}

function slide32(presentation, records) {
  clearMainContent(presentation, records, 32);
  const slide = presentation.slides.getItem(31);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 8  ·  GIVE IT A MEMORY  ·  30 MIN  ·  HANDS-ON",
    time: "3:35 – 4:05",
    title: "Sample data forgets. A database in your account remembers.",
    flourish: true,
  });
  addLabel(slide, "OWNED BY YOU", 485, 182, 190, { size: 12, color: D.blue, bold: true, mono: true });
  addPanel(slide, { left: 455, top: 205, width: 690, height: 270, fill: "#F8FBFF", line: "#BFDBFE", radius: 18 });
  const app = addOpenNode(slide, "App code", 90, 284, 180, { height: 70 });
  const env = addOpenNode(slide, "DATABASE_URL\nenvironment variable", 520, 270, 220, { height: 98, color: D.orange, fill: "#FFF7ED", size: 15 });
  const db = addOpenNode(slide, "Neon\nPostgres", 865, 270, 190, { height: 98, color: D.blue, fill: D.white, size: 18 });
  connect(slide, app, env, { color: D.mutedLine });
  connect(slide, env, db, { color: D.blue, width: 2 });
  addLabel(slide, "never in code", 320, 302, 150, { size: 12, color: D.red, bold: true, mono: true, align: "center" });
  addLabel(slide, "free tier · sleeps when idle", 846, 390, 230, { size: 12, color: D.mutedLine, mono: true, align: "center" });

  const exportNode = addOpenNode(slide, "Any host\nor export", 930, 505, 180, { height: 64, color: D.green, fill: "#F0FDF4" });
  connect(slide, db, exportNode, { kind: "elbow", fromSide: "bottom", toSide: "top", color: D.green, style: "dashed" });
  addLabel(slide, "PLAIN POSTGRES · YOUR EXIT", 715, 536, 205, { size: 11, color: D.green, bold: true, mono: true, align: "right" });
  addLine(slide, { left: 1145, top: 215, width: 0, height: 250, color: D.red, weight: 3 });
  addLabel(slide, "SUPABASE?", 1161, 252, 90, { size: 11, color: D.red, bold: true, mono: true });
  addLabel(slide, "RLS before live", 1161, 286, 92, { height: 48, size: 13, color: D.red, bold: true });
  addLabel(slide, "Every table.\nEvery role.", 1161, 350, 92, { height: 50, size: 12, color: D.slate });
}

function slide36(presentation, records) {
  clearMainContent(presentation, records, 36);
  const slide = presentation.slides.getItem(35);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 9  ·  HEAR ABOUT IT  ·  20 MIN  ·  HANDS-ON",
    time: "4:35 – 4:55",
    title: "Your spec said ‘and I get the email.’ Build that line.",
  });
  const lanes = [
    ["Customer submits", "Resend", "Inbox", "100/day · own address until domain verified"],
    ["Request or error", "Vercel logs", "You look", "Hobby log window is short · look the same day"],
    ["Unhandled error", "Sentry", "Alert", "$0 starter tier · add Monday"],
  ];
  const endpointNodes = [];
  lanes.forEach(([start, service, result, note], index) => {
    const y = 220 + index * 128;
    addLabel(slide, `0${index + 1}`, 70, y + 17, 36, { size: 12, color: D.mutedLine, mono: true });
    const a = addOpenNode(slide, start, 115, y, 205, { height: 60, color: D.blue, size: 15 });
    const b = addOpenNode(slide, service, 440, y, 175, { height: 60, color: index === 0 ? D.orange : D.blue, fill: index === 0 ? "#FFF7ED" : D.white, size: 16 });
    const c = addOpenNode(slide, result, 735, y, 165, { height: 60, color: D.green, fill: "#F0FDF4", size: 16 });
    endpointNodes.push(c);
    connect(slide, a, b);
    connect(slide, b, c, { color: D.green });
    addLabel(slide, note, 440, y + 69, 455, { height: 30, size: 11, color: D.mutedLine, align: "center" });
  });
  const hear = addNode(slide, {
    text: "YOU HEAR\nFIRST",
    left: 1015,
    top: 312,
    width: 150,
    height: 92,
    fill: D.midnight,
    line: D.midnight,
    color: D.white,
    fontSize: 17,
  });
  endpointNodes.forEach((node) => connect(slide, node, hear, { kind: "elbow", fromSide: "right", toSide: "left", color: D.mutedLine, arrow: false }));
  addLabel(slide, "Monitor is the sixth word. One email and one log page are enough to start.", 260, 584, 760, { size: 17, color: D.ink, bold: true, align: "center" });
}

function slide38(presentation, records) {
  clearMainContent(presentation, records, 38);
  const slide = presentation.slides.getItem(37);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 10  ·  OWN IT  ·  15 MIN  ·  TALK",
    time: "4:55 – 5:10",
    title: "Vendor prices",
    flourish: true,
  });
  addLabel(slide, "CHECKED SEPTEMBER 7, 2026", 68, 160, 300, {
    height: 14,
    size: 11,
    color: D.mutedLine,
    mono: true,
  });
  const axisLeft = 312;
  const axisWidth = 690;
  const axisY = 191;
  addLine(slide, { left: axisLeft, top: axisY, width: axisWidth, color: D.ink, weight: 1 });
  [0, 10, 20, 30, 40, 50].forEach((value) => {
    const x = axisLeft + axisWidth * (value / 50);
    addLine(slide, { left: x, top: axisY - 5, width: 0, height: 350, color: value === 0 ? D.ink : "#E9EEF5", weight: 1 });
    addLabel(slide, `$${value}`, x - 22, 161, 44, { size: 12, color: D.mutedLine, mono: true, align: "center" });
  });
  const rows = [
    ["Domain · annualized", 1, 1, D.blue, "your account"],
    ["Vercel", 0, 20, D.blue, "your host"],
    ["GitHub · DB · email · errors", 0, 0, D.blue, "$0 starter tiers"],
    ["AI assistant", 20, 20, D.blue, "$20 assistant"],
    ["Lovable Pro", 25, 25, D.orange, "$25 subscription"],
    ["Bolt Pro", 25, 25, D.orange, "$25 export gate"],
    ["Replit Core", 20, 20, D.orange, "$20 + hosting"],
    ["Base44 Builder", 50, 50, D.orange, "$50 sync gate"],
  ];
  rows.forEach(([label, low, high, color, note], index) => {
    const y = 230 + index * 44;
    if (index === 4) addLine(slide, { left: 70, top: y - 17, width: 1120, color: D.hairline, weight: 1 });
    addLabel(slide, label, 70, y - 11, 225, { size: 15, color: index < 4 ? D.ink : D.slate, bold: index === 0 || index === 4 });
    const x1 = axisLeft + axisWidth * (low / 50);
    const x2 = axisLeft + axisWidth * (high / 50);
    if (high > low) addLine(slide, { left: x1, top: y, width: Math.max(8, x2 - x1), color, weight: 3 });
    addDot(slide, { left: x2 - 6, top: y - 6, size: 12, fill: color });
    addLabel(slide, low === high ? `$${high}` : `$${low}–$${high}`, x2 + 12, y - 11, 55, { size: 14, color, bold: true, mono: true });
    addLabel(slide, note, 1068, y - 10, 145, { size: 13, color: index < 4 ? D.blue : D.editorialOrange });
  });
  addLabel(slide, "OWNED STACK", 70, 179, 190, { size: 11, color: D.blue, bold: true, mono: true });
  addLabel(slide, "BUILDER SUBSCRIPTIONS", 70, 380, 220, { height: 15, size: 11, color: D.editorialOrange, bold: true, mono: true });
  addLabel(slide, "Most owned sites: $20/month at most, plus a domain. Every blue line is an account with your name on it.", 130, 587, 1030, {
    size: 16,
    color: D.ink,
    bold: true,
    align: "center",
  });
}

function slide40(presentation, records) {
  clearMainContent(presentation, records, 40);
  const slide = presentation.slides.getItem(39);
  slide.background.fill = D.white;
  addHeader(slide, {
    eyebrow: "BLOCK 10  ·  OWN IT  ·  15 MIN  ·  TALK",
    time: "4:55 – 5:10",
    title: "Rent versus own, tool by tool. The code is rarely the hostage.",
  });
  const cols = [
    ["GITHUB", 555],
    ["TWO-WAY\nSYNC", 715],
    ["BACKEND\nPORTABLE", 875],
    ["SURVIVES\nCANCEL", 1040],
  ];
  addLabel(slide, "TOOL · PLAN GATE", 70, 183, 420, { size: 13, color: D.mutedLine, bold: true, mono: true });
  cols.forEach(([label, x]) => addLabel(slide, label, x, 175, 130, { height: 42, size: 13, color: D.mutedLine, bold: true, mono: true, align: "center" }));
  const rows = [
    ["Lovable · Pro", ["YES", "YES", "PARTIAL", "YES"]],
    ["v0 · Vercel", ["YES", "PARTIAL", "YES", "PARTIAL"]],
    ["Bolt · Pro for export", ["YES", "PARTIAL", "PARTIAL", "?"]],
    ["Replit · Core", ["YES", "YES", "PARTIAL", "NO"]],
    ["Base44 · $50 Builder", ["YES", "YES", "NO", "?"]],
    ["Google AI Studio", ["YES", "NO", "YES", "YES"]],
    ["Firebase Studio · sunset", ["NO", "NO", "NO", "NO"]],
  ];
  const valueStyle = {
    YES: [D.green, "YES"],
    PARTIAL: [D.orange, "PARTIAL"],
    NO: [D.red, "NO"],
    "?": [D.mutedLine, "NOT\nPROMISED"],
  };
  rows.forEach(([tool, values], rowIndex) => {
    const y = 235 + rowIndex * 47;
    addLine(slide, { left: 70, top: y + 37, width: 1110, color: "#EDF1F6", weight: 1 });
    addLabel(slide, tool, 70, y, 430, { size: 17, color: D.ink, bold: rowIndex === 0 || rowIndex === 4 });
    values.forEach((value, colIndex) => {
      const [color, symbol] = valueStyle[value];
      const x = cols[colIndex][1];
      addLabel(slide, symbol, x + 8, y + (value === "?" ? -2 : 4), 114, {
        height: value === "?" ? 34 : 24,
        size: value === "?" ? 12 : 13,
        color,
        bold: true,
        mono: true,
        align: "center",
      });
    });
  });
  addLabel(slide, "Ask three questions: GitHub? Which-way sync? What survives cancellation?", 170, 580, 940, { size: 15, color: D.ink, bold: true, align: "center" });
}

function normalizeLifecycleFooter(presentation, records) {
  const labelsBySlide = new Map();
  for (const record of records) {
    if (
      record.kind === "textbox" &&
      SOURCE_STAGES.includes(record.text) &&
      (record.position?.top ?? 0) >= 640 &&
      record.slideIndex < 50
    ) {
      if (!labelsBySlide.has(record.slideIndex)) labelsBySlide.set(record.slideIndex, []);
      labelsBySlide.get(record.slideIndex).push(record);
    }
  }

  for (const [slideIndex, labels] of labelsBySlide.entries()) {
    if (labels.length !== STAGES.length) continue;
    const active = labels.findIndex((label) => label.style?.color === "#FFFFFF" || label.style?.bold === true);
    const ids = new Set(labels.map((label) => label.id));
    for (const label of labels) {
      for (const record of records) {
        if (
          record.slideIndex === slideIndex &&
          record.kind === "shape" &&
          Math.abs((record.position?.left ?? -999) - label.position.left) < 0.5 &&
          Math.abs((record.position?.top ?? -999) - label.position.top) < 0.5 &&
          Math.abs((record.position?.width ?? -999) - label.position.width) < 0.5
        ) ids.add(record.id);
      }
    }
    presentation.delete([...ids]);

    const slide = presentation.slides.getItem(slideIndex);
    const centers = [385, 487, 589, 691, 793, 895];
    addLine(slide, { left: centers[0], top: 670, width: centers.at(-1) - centers[0], color: D.hairline, weight: 0.6 });
    if (active >= 0) {
      addLine(slide, {
        left: Math.max(centers[0], centers[active] - 38),
        top: 670,
        width: active === 0 ? 38 : active === STAGES.length - 1 ? 38 : 76,
        color: D.orange,
        weight: 3,
      });
    }
    STAGES.forEach((stage, index) => {
      const isActive = index === active;
      addDot(slide, {
        left: centers[index] - (isActive ? 5 : 3.5),
        top: 670 - (isActive ? 5 : 3.5),
        size: isActive ? 10 : 7,
        fill: isActive ? D.orange : D.white,
        line: isActive ? D.orange : D.mutedLine,
      });
      addLabel(slide, stage, centers[index] - 42, 681, 84, {
        height: 14,
        size: 9,
        color: isActive ? D.editorialOrange : D.mutedLine,
        bold: isActive,
        mono: true,
        align: "center",
      });
    });
  }
}

export function redesignTufteSlides(presentation, records) {
  slide3(presentation, records);
  slide4(presentation, records);
  slide7(presentation, records);
  slide9(presentation, records);
  slide16(presentation, records);
  slide17(presentation, records);
  slide22(presentation, records);
  slide24(presentation, records);
  slide27(presentation, records);
  slide31(presentation, records);
  slide32(presentation, records);
  slide36(presentation, records);
  slide38(presentation, records);
  slide40(presentation, records);
  normalizeLifecycleFooter(presentation, records);
}
