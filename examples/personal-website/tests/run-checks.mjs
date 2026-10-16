// Headless-browser checks for examples/personal-website/index.html.
//
// Run from the examples/personal-website folder:
//   node tests/run-checks.mjs
//
// Needs Node 18+ and the Playwright package with its Chromium build:
//   npm install playwright && npx playwright install chromium
// If Playwright is installed somewhere else, point NODE_PATH at that node_modules folder:
//   NODE_PATH=/path/to/node_modules node tests/run-checks.mjs
//
// The script opens index.html over file://, runs every check, saves screenshots to
// previews/, prints PASS/FAIL per check, and exits 1 if anything failed.

import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const indexPath = path.join(root, "index.html");
const previews = path.join(root, "previews");
const fileUrl = "file://" + indexPath;

const THEMES = ["slate", "forest", "sunset", "ocean", "mono", "plum"];
const SECTIONS = ["hero", "about", "experience", "skills", "education", "projects", "contact"];
const EMAIL = "mailto:jordan.rivera@example.com";

const results = [];
function record(name, passed, detail = "") {
  results.push({ name, passed, detail });
  console.log(`${passed ? "PASS" : "FAIL"}  ${name}${detail ? "  — " + detail : ""}`);
}

const consoleErrors = [];
const externalRequests = [];

// Viewport screenshot with the window stretched to show as much of the page as fits
// under the size cap. A full-page PNG of this text-heavy page is over 300 KB, so we cap
// the height instead and keep every preview under the limit without an optimizer.
async function shot(page, file, width, maxHeight) {
  const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width, height: Math.min(fullHeight, maxHeight) });
  await page.screenshot({ path: file, fullPage: false });
  const kb = Math.round(fs.statSync(file).size / 1024);
  record(`screenshot ${path.relative(root, file)} saved and under 300 KB`, kb < 300, `${kb} KB, ${width}x${Math.min(fullHeight, maxHeight)} of ${fullHeight}px page`);
}

async function newPage(browser, { width, height = 900, media } = {}) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
  page.on("pageerror", (e) => consoleErrors.push(String(e)));
  page.on("request", (r) => { if (!r.url().startsWith("file://")) externalRequests.push(r.url()); });
  if (media) await page.emulateMedia({ media });
  return { context, page };
}

async function main() {
  if (!fs.existsSync(indexPath)) throw new Error("index.html not found at " + indexPath);
  fs.mkdirSync(previews, { recursive: true });

  const browser = await chromium.launch();

  // ---- 1. Sections exist with visible headings; links have text; mailto is right ----
  {
    const { context, page } = await newPage(browser, { width: 1200 });
    await page.goto(fileUrl);

    for (const id of SECTIONS) {
      const section = page.locator(`#${id}`);
      const exists = (await section.count()) === 1;
      const heading = section.locator("h1, h2").first();
      const headingVisible = exists && (await heading.isVisible());
      const text = headingVisible ? (await heading.innerText()).trim() : "";
      record(`section #${id} exists with a visible heading`, exists && headingVisible && text.length > 0, text ? `"${text}"` : "");
    }
    for (const id of ["header", "main", "footer"]) {
      record(`landmark #${id} exists`, (await page.locator(`#${id}`).count()) === 1);
    }

    const emptyLinks = await page.$$eval("a", (as) =>
      as.filter((a) => !(a.textContent || "").trim() && !a.getAttribute("aria-label")).map((a) => a.outerHTML));
    record("every link has non-empty text", emptyLinks.length === 0, emptyLinks.length ? emptyLinks.join(" | ") : `${await page.locator("a").count()} links checked`);

    const contactHref = await page.getAttribute("#contact-email", "href");
    const heroEmailHref = await page.getAttribute("#hero a[href^='mailto:']", "href");
    record("contact mailto link is correct", contactHref === EMAIL && heroEmailHref === EMAIL, `contact=${contactHref} hero=${heroEmailHref}`);

    // nav links all point at an existing id
    const brokenNav = await page.$$eval("nav a", (as) =>
      as.map((a) => a.getAttribute("href")).filter((h) => !h.startsWith("#") || !document.querySelector(h)));
    record("every nav link points at an existing section", brokenNav.length === 0, brokenNav.join(", "));

    // ---- 2. Every theme applies and changes body background ----
    const seen = new Map();
    for (const theme of THEMES) {
      await page.selectOption("#theme-select", theme);
      const attr = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
      const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
      const stored = await page.evaluate(() => { try { return localStorage.getItem("theme"); } catch { return null; } });
      const duplicate = [...seen.values()].includes(bg);
      seen.set(theme, bg);
      record(`theme "${theme}" applies and changes body background`, attr === theme && !duplicate && stored === theme, `background=${bg}, stored=${stored}`);
    }
    await page.selectOption("#theme-select", "slate");

    // Layout picker sets attribute and is remembered
    await page.selectOption("#layout-select", "sidebar");
    const layoutAttr = await page.evaluate(() => document.documentElement.getAttribute("data-layout"));
    const layoutStored = await page.evaluate(() => { try { return localStorage.getItem("layout"); } catch { return null; } });
    record("layout picker sets data-layout and remembers it", layoutAttr === "sidebar" && layoutStored === "sidebar", `attr=${layoutAttr}, stored=${layoutStored}`);

    // Remembered choice survives a reload
    await page.reload();
    const remembered = await page.evaluate(() => [document.documentElement.getAttribute("data-theme"), document.documentElement.getAttribute("data-layout")]);
    record("remembered theme/layout survive a reload", remembered[0] === "slate" && remembered[1] === "sidebar", remembered.join("/"));

    await context.close();
  }

  // ---- 3. URL parameters win on load ----
  {
    const { context, page } = await newPage(browser, { width: 1200 });
    await page.goto(fileUrl + "?theme=forest&layout=sidebar");
    const attrs = await page.evaluate(() => [document.documentElement.getAttribute("data-theme"), document.documentElement.getAttribute("data-layout"), document.getElementById("theme-select").value, document.getElementById("layout-select").value]);
    record("?theme=forest&layout=sidebar applies on load", attrs.join(",") === "forest,sidebar,forest,sidebar", attrs.join(","));

    // Junk values fall back to defaults
    await page.goto(fileUrl + "?theme=neon&layout=diagonal");
    const junk = await page.evaluate(() => [document.documentElement.getAttribute("data-theme"), document.documentElement.getAttribute("data-layout")]);
    record("unknown ?theme/?layout values fall back to defaults", junk.join(",") === "slate,centered", junk.join(","));
    await context.close();
  }

  // ---- 4. 375px phone width ----
  for (const theme of ["slate", "ocean"]) {
    for (const layout of ["centered", "sidebar"]) {
      const { context, page } = await newPage(browser, { width: 375, height: 812 });
      await page.goto(`${fileUrl}?theme=${theme}&layout=${layout}`);
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const navVisible = await page.locator("nav").isVisible();
      const buttons = page.locator("#hero .button");
      let allButtonsVisible = (await buttons.count()) >= 2;
      for (let i = 0; i < (await buttons.count()); i++) allButtonsVisible = allButtonsVisible && (await buttons.nth(i).isVisible());
      record(`375px ${theme}/${layout}: no horizontal scroll, nav and hero links visible`, scrollWidth <= 375 && navVisible && allButtonsVisible, `scrollWidth=${scrollWidth}, nav=${navVisible}, buttons=${allButtonsVisible}`);
      if (layout === "centered") {
        await shot(page, path.join(previews, `${theme}-375.png`), 375, 1500);
      }
      await context.close();
    }
  }

  // ---- 5. 1200px sidebar layout: sidebar left of main content ----
  for (const theme of ["slate", "ocean", "forest"]) {
    const { context, page } = await newPage(browser, { width: 1200, height: 900 });
    await page.goto(`${fileUrl}?theme=${theme}&layout=sidebar`);
    const boxes = await page.evaluate(() => {
      const r = (id) => document.getElementById(id).getBoundingClientRect();
      const hero = r("hero"), skills = r("skills"), about = r("about"), experience = r("experience");
      return { heroRight: hero.right, skillsRight: skills.right, aboutLeft: about.left, expLeft: experience.left, heroTop: hero.top, aboutTop: about.top };
    });
    const ok = boxes.heroRight <= boxes.aboutLeft && boxes.skillsRight <= boxes.expLeft && Math.abs(boxes.heroTop - boxes.aboutTop) < 60;
    record(`1200px sidebar (${theme}): hero+skills column sits left of about/experience`, ok, JSON.stringify(boxes));
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    record(`1200px sidebar (${theme}): no horizontal scroll`, scrollWidth <= 1200, `scrollWidth=${scrollWidth}`);
    await shot(page, path.join(previews, `${theme}-1200-sidebar.png`), 1200, 1500);
    await context.close();
  }
  // 1200px centered, default theme
  {
    const { context, page } = await newPage(browser, { width: 1200, height: 900 });
    await page.goto(fileUrl);
    const mainWidth = await page.evaluate(() => document.getElementById("main").getBoundingClientRect().width);
    record("1200px centered: main column is at most 760px wide", mainWidth <= 760, `width=${mainWidth}`);
    await shot(page, path.join(previews, "slate-1200-centered.png"), 1200, 1500);
    await context.close();
  }

  // ---- 6. Print media hides nav and buttons, shows link URLs ----
  {
    const { context, page } = await newPage(browser, { width: 1000, media: "print" });
    await page.goto(fileUrl);
    const print = await page.evaluate(() => ({
      nav: getComputedStyle(document.querySelector("nav")).display,
      button: getComputedStyle(document.querySelector(".button")).display,
      picker: getComputedStyle(document.querySelector(".picker")).display,
      bodyColor: getComputedStyle(document.body).color,
      bodyBg: getComputedStyle(document.body).backgroundColor,
      linkAfter: getComputedStyle(document.querySelector("#hero a[href^='http']"), "::after").content,
      mailAfter: getComputedStyle(document.querySelector("#contact-email"), "::after").content,
    }));
    record("print: nav, buttons and picker are hidden", print.nav === "none" && print.button === "none" && print.picker === "none", JSON.stringify(print));
    record("print: body text is black on white", print.bodyColor === "rgb(0, 0, 0)" && print.bodyBg === "rgb(255, 255, 255)", `${print.bodyColor} on ${print.bodyBg}`);
    record("print: link URLs appear after link text", print.linkAfter.includes("linkedin.com") && print.mailAfter.includes("jordan.rivera@example.com"), `${print.linkAfter} / ${print.mailAfter}`);
    await context.close();
  }

  // ---- 7. Keyboard: skip link is first tab stop and becomes visible ----
  {
    const { context, page } = await newPage(browser, { width: 1200 });
    await page.goto(fileUrl);
    await page.keyboard.press("Tab");
    const focus = await page.evaluate(() => {
      const el = document.activeElement;
      const r = el.getBoundingClientRect();
      return { cls: el.className, text: el.textContent.trim(), onScreen: r.top >= 0 && r.bottom <= window.innerHeight };
    });
    record("keyboard: first Tab lands on a visible skip link", focus.cls === "skip" && focus.onScreen, JSON.stringify(focus));
    await context.close();
  }

  // ---- 8. No console errors, no network requests beyond the file itself ----
  record("no console errors or page errors across all runs", consoleErrors.length === 0, consoleErrors.join(" | "));
  record("no external network requests (fonts, scripts, images)", externalRequests.length === 0, externalRequests.join(" | "));

  await browser.close();

  const failed = results.filter((r) => !r.passed);
  console.log(`\n${results.length - failed.length} passed, ${failed.length} failed.`);
  process.exit(failed.length ? 1 : 0);
}

main().catch((e) => { console.error("Test run crashed:", e); process.exit(2); });
