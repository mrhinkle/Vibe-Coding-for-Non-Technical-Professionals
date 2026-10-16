// Headless browser checks for the three Alien Tic-Tac-Toe checkpoints.
// Run from the examples/alien-tic-tac-toe folder:   node tests/run-checks.mjs
// Needs Node 18+ and Playwright with Chromium. If `npx playwright --version` works,
// this script finds that copy of Playwright on its own (it looks in the npx cache).
// Each checkpoint is opened from disk with a file:// address, the same way a student opens it.

import { createRequire } from "node:module";
import { readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { homedir } from "node:os";

const require = createRequire(import.meta.url);

let playwrightDir = "";
function loadPlaywright() {
  try { playwrightDir = dirname(require.resolve("playwright/package.json")); return require("playwright"); } catch (error) { /* not installed next to this script */ }
  const cache = join(homedir(), ".npm", "_npx");
  if (existsSync(cache)) {
    for (const entry of readdirSync(cache)) {
      const candidate = join(cache, entry, "node_modules", "playwright");
      if (existsSync(candidate)) {
        try { const pw = require(candidate); playwrightDir = candidate; return pw; } catch (error) { /* try the next one */ }
      }
    }
  }
  console.error("Playwright was not found. Run `npx playwright --version` once, then try again.");
  process.exit(2);
}

const playwright = loadPlaywright();
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const fileUrl = (checkpoint, query = "") => pathToFileURL(join(root, checkpoint, "index.html")).href + query;

let passed = 0;
let failed = 0;
const results = [];

function check(name, condition, detail = "") {
  const ok = Boolean(condition);
  if (ok) passed++; else failed++;
  results.push({ name, ok, detail });
  console.log(`${ok ? "Passed" : "FAILED"}  ${name}${detail && !ok ? "  -- " + detail : ""}`);
}

async function withPage(browser, url, run, options = {}) {
  const context = await browser.newContext({ viewport: options.viewport || { width: 375, height: 760 } });
  if (options.init) await context.addInitScript(options.init);
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(url);
  try {
    await run(page, errors);
  } catch (error) {
    check(`${options.label || url} threw no exception during the checks`, false, error.message);
  }
  await context.close();
  return errors;
}

const text = (page, selector) => page.locator(selector).innerText();
const cells = (page) => page.locator(".cell");
const marks = async (page) => Promise.all(Array.from({ length: 9 }, (_, i) => page.locator(`.cell[data-cell="${i + 1}"]`).innerText()));
const hidden = (page, selector) => page.locator(selector).isHidden();

// ---------------- Checkpoint 1: board ----------------
async function checkpoint1(browser) {
  const url = fileUrl("checkpoint-1-board");
  console.log("\nCheckpoint 1: board  " + url);

  // Helper: select a cell, then award it with the test button.
  async function award(page, cell, mark) {
    await page.click(`.cell[data-cell="${cell}"]`);
    await page.click(mark === "X" ? "#award-x" : "#award-o");
  }

  await withPage(browser, url, async (page, errors) => {
    check("C1 loads with 9 empty cells and a status line", (await cells(page).count()) === 9 && (await text(page, "#status")).includes("Choose an empty square"));

    // Board lock and pending state.
    await page.click('.cell[data-cell="1"]');
    check("C1 selecting cell 1 shows 'pending' and locks the board", (await text(page, '.cell[data-cell="1"]')) === "pending" && (await page.locator(".cell:not(:disabled)").count()) === 0);
    check("C1 test buttons appear only while a cell is pending", !(await hidden(page, "#award-x")) && !(await hidden(page, "#award-o")));
    await page.locator('.cell[data-cell="2"]').dispatchEvent("click");
    check("C1 clicking cell 2 while cell 1 is pending changes nothing", (await text(page, '.cell[data-cell="1"]')) === "pending" && (await text(page, '.cell[data-cell="2"]')) === "");

    // One resolution only.
    await page.click("#award-x");
    check("C1 Award to me (X) puts exactly one X on the board", (await marks(page)).join("") === "X");
    await page.locator("#award-x").dispatchEvent("click");
    await page.locator('.cell[data-cell="1"]').dispatchEvent("click");
    check("C1 repeating the award or clicking the occupied cell changes nothing", (await marks(page)).join("") === "X" && (await hidden(page, "#award-x")));

    // X line 1-2-3 wins.
    await award(page, 2, "X");
    await award(page, 3, "X");
    check("C1 X on 1-2-3 shows 'You won'", (await text(page, "#status")).includes("You won"));
    check("C1 after the win no cell can be selected and Play again is shown", (await page.locator(".cell:not(:disabled)").count()) === 0 && !(await hidden(page, "#play-again")));

    // Play again gives an empty board.
    await page.click("#play-again");
    check("C1 Play again gives 9 empty cells", (await marks(page)).join("") === "" && (await page.locator(".cell:not(:disabled)").count()) === 9);

    // O line 1-4-7 loses.
    await award(page, 1, "O");
    await award(page, 4, "O");
    await award(page, 7, "O");
    check("C1 O on 1-4-7 shows 'The aliens won'", (await text(page, "#status")).includes("The aliens won"));
    await page.click("#play-again");

    // Full-board draw: X, O, X, X, O, O, O, X, X.
    const drawPattern = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    for (let i = 0; i < 9; i++) await award(page, i + 1, drawPattern[i]);
    check("C1 full board X,O,X,X,O,O,O,X,X shows 'Draw'", (await text(page, "#status")).includes("Draw"));
    await page.click("#play-again");

    // Last-cell win: X, O, O, O, X, X, X, O, X completes 1-5-9.
    const lastCellWin = ["X", "O", "O", "O", "X", "X", "X", "O", "X"];
    for (let i = 0; i < 9; i++) await award(page, i + 1, lastCellWin[i]);
    check("C1 last-cell X completing 1-5-9 is a win, not a draw", (await text(page, "#status")).includes("You won"));
    await page.click("#play-again");

    // Restart clears mid-game, including a pending cell.
    await award(page, 1, "X");
    await page.click('.cell[data-cell="2"]');
    await page.click("#restart");
    check("C1 Restart game mid-game clears all 9 cells and the pending cell", (await marks(page)).join("") === "" && (await hidden(page, "#award-x")) && (await text(page, "#status")).includes("Choose an empty square"));

    // Keyboard: after Restart, focus is on the status message; one Tab reaches cell 1 with visible focus.
    check("C1 after Restart, focus is on the status message", (await page.evaluate(() => document.activeElement.id)) === "status");
    await page.keyboard.press("Tab");
    const focusedCell = await page.evaluate(() => ({ cell: document.activeElement.getAttribute("data-cell"), outline: getComputedStyle(document.activeElement).outlineStyle }));
    check("C1 keyboard focus lands on cell 1 with a visible outline", focusedCell.cell === "1" && focusedCell.outline === "solid", JSON.stringify(focusedCell));
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    check("C1 Enter twice on a cell makes exactly one pending cell and awards nothing", (await page.locator(".cell.pending").count()) === 1 && (await text(page, '.cell[data-cell="1"]')) === "pending" && !(await marks(page)).some((m) => m === "X" || m === "O"));
    const afterEnter = await page.evaluate(() => document.activeElement.id);
    check("C1 focus moves to the status message (not a button) after selecting a cell", afterEnter === "status", afterEnter);
    await page.keyboard.press("Tab");
    check("C1 one Tab reaches Award to me (X)", (await page.evaluate(() => document.activeElement.id)) === "award-x");
    await page.keyboard.press("Space");
    await page.keyboard.press("Space");
    check("C1 Space twice on Award to me (X) places exactly one X", (await marks(page)).join("") === "X");
    await page.click("#restart");

    // Phone width: board fits, buttons tall enough.
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    check("C1 fits a 375px wide phone with no sideways scrolling", scrollWidth <= 375, `scrollWidth=${scrollWidth}`);
    const minButton = await page.evaluate(() => Math.min(...Array.from(document.querySelectorAll("button")).filter((b) => b.offsetParent !== null).map((b) => b.getBoundingClientRect().height)));
    check("C1 every visible button is at least 44px tall", minButton >= 44, `smallest=${minButton}`);
    check("C1 no JavaScript errors", errors.length === 0, errors.join("; "));
  }, { label: "checkpoint 1" });
}

// ---------------- Checkpoint 2: battle ----------------
async function checkpoint2(browser) {
  const url = fileUrl("checkpoint-2-battle");
  console.log("\nCheckpoint 2: battle  " + url);
  const respond = (page, name) => page.click(`.response[data-response="${name}"]`);

  await withPage(browser, url, async (page, errors) => {
    check("C2 starts at Laser with 2 health each", (await text(page, "#alien-move")).includes("Laser") && (await text(page, "#player-health")) === "You: 2 of 2" && (await text(page, "#alien-health")) === "Alien: 2 of 2");

    // Shield, Blast: alien dead after 2 exchanges, no Next exchange.
    await respond(page, "Shield");
    check("C2 Shield vs Laser: alien drops to 1, responses disabled, Next exchange shown", (await text(page, "#alien-health")) === "Alien: 1 of 2" && (await page.locator(".response:not(:disabled)").count()) === 0 && !(await hidden(page, "#next-exchange")));
    await page.locator('.response[data-response="Shield"]').dispatchEvent("click");
    check("C2 repeating the response before Next exchange changes nothing", (await text(page, "#alien-health")) === "Alien: 1 of 2" && (await text(page, "#player-health")) === "You: 2 of 2" && (await text(page, "#exchange-label")).startsWith("Exchange 1"));
    await page.click("#next-exchange");
    check("C2 Next exchange shows Shield as exchange 2", (await text(page, "#alien-move")).includes("Shield") && (await text(page, "#exchange-label")).startsWith("Exchange 2"));
    await respond(page, "Blast");
    check("C2 Shield, Blast: 'You won the battle' with You 2 of 2 and Alien 0 of 2", (await text(page, "#status")).includes("You won the battle") && (await text(page, "#player-health")) === "You: 2 of 2" && (await text(page, "#alien-health")) === "Alien: 0 of 2");
    check("C2 no Next exchange after the terminal result; Fight again shown", (await hidden(page, "#next-exchange")) && !(await hidden(page, "#fight-again")) && (await page.locator(".response:not(:disabled)").count()) === 0);

    // Dodge, Dodge: player dead.
    await page.click("#fight-again");
    check("C2 Fight again resets to Laser with 2 health each", (await text(page, "#alien-move")).includes("Laser") && (await text(page, "#player-health")) === "You: 2 of 2" && (await text(page, "#alien-health")) === "Alien: 2 of 2");
    await respond(page, "Dodge");
    await page.click("#next-exchange");
    await respond(page, "Dodge");
    check("C2 Dodge, Dodge: 'The alien won the battle' with You 0 of 2 and Alien 2 of 2", (await text(page, "#status")).includes("The alien won the battle") && (await text(page, "#player-health")) === "You: 0 of 2" && (await text(page, "#alien-health")) === "Alien: 2 of 2");
    check("C2 no Next exchange after the player loses", await hidden(page, "#next-exchange"));

    // Wrong then right: Blast, Blast, Dodge ends at exchange 3 as a win.
    await page.click("#fight-again");
    await respond(page, "Blast");
    await page.click("#next-exchange");
    await respond(page, "Blast");
    await page.click("#next-exchange");
    check("C2 third exchange shows Claw", (await text(page, "#alien-move")).includes("Claw") && (await text(page, "#exchange-label")).startsWith("Exchange 3"));
    await respond(page, "Dodge");
    check("C2 Blast, Blast, Dodge: win at exchange 3 with You 1 of 2 and Alien 0 of 2", (await text(page, "#status")).includes("You won the battle") && (await text(page, "#player-health")) === "You: 1 of 2" && (await text(page, "#alien-health")) === "Alien: 0 of 2" && (await hidden(page, "#next-exchange")));

    // Two incorrect: Blast, Shield loses at exchange 2 with Alien still 2 of 2.
    await page.click("#fight-again");
    await respond(page, "Blast");
    await page.click("#next-exchange");
    await respond(page, "Shield");
    check("C2 Blast, Shield: loss at exchange 2 with You 0 of 2 and Alien 2 of 2", (await text(page, "#status")).includes("The alien won the battle") && (await text(page, "#player-health")) === "You: 0 of 2" && (await text(page, "#alien-health")) === "Alien: 2 of 2" && (await hidden(page, "#next-exchange")));

    // Lose on third: Blast, Blast, Blast.
    await page.click("#fight-again");
    await respond(page, "Blast");
    await page.click("#next-exchange");
    await respond(page, "Blast");
    await page.click("#next-exchange");
    await respond(page, "Blast");
    check("C2 Blast, Blast, Blast: loss at exchange 3 with You 0 of 2 and Alien 1 of 2", (await text(page, "#status")).includes("The alien won the battle") && (await text(page, "#player-health")) === "You: 0 of 2" && (await text(page, "#alien-health")) === "Alien: 1 of 2");

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    check("C2 fits a 375px wide phone with no sideways scrolling", scrollWidth <= 375, `scrollWidth=${scrollWidth}`);
    check("C2 no JavaScript errors", errors.length === 0, errors.join("; "));
  }, { label: "checkpoint 2" });
}

// ---------------- Checkpoint 3: complete game ----------------
async function checkpoint3(browser) {
  const url = fileUrl("checkpoint-3-complete");
  console.log("\nCheckpoint 3: complete game  " + url);

  const respond = (page, index) => page.click(`#responses .response[data-response-index="${index}"]`);
  // Shield (0) then Blast (1) wins a battle; Blast (1) then Shield (0) loses one.
  async function winCell(page, cell) {
    await page.click(`.cell[data-cell="${cell}"]`);
    await respond(page, 0);
    await page.click("#next-exchange");
    await respond(page, 1);
  }
  async function loseCell(page, cell) {
    await page.click(`.cell[data-cell="${cell}"]`);
    await respond(page, 1);
    await page.click("#next-exchange");
    await respond(page, 0);
  }
  const markList = (page) => page.evaluate(() => Array.from(document.querySelectorAll(".cell")).map((c) => c.getAttribute("data-mark")));
  const count = (list, mark) => list.filter((m) => m === mark).length;

  await withPage(browser, url, async (page, errors) => {
    check("C3 opens on the instructions screen with the board hidden", !(await hidden(page, "#screen-instructions")) && (await hidden(page, "#screen-board")) && (await hidden(page, "#screen-battle")));
    check("C3 default theme is space-invasion", (await page.getAttribute("html", "data-theme")) === "space-invasion");
    check("C3 instructions list all 8 themes", (await page.locator('#theme-list input[name="theme"]').count()) === 8);
    check("C3 Restart is not shown before Start", (await page.locator(".restart:visible").count()) === 0);

    await page.click("#start");
    check("C3 Start shows the empty board with the legend", !(await hidden(page, "#screen-board")) && (await page.locator(".cell:not(:disabled)").count()) === 9 && (await text(page, "#legend")).includes("You"));

    // Keyboard: after Start, focus is on the board status; one Tab reaches cell 1 with visible focus.
    check("C3 after Start, focus is on the board status message", (await page.evaluate(() => document.activeElement.id)) === "board-status");
    await page.keyboard.press("Tab");
    const kb = await page.evaluate(() => ({ cell: document.activeElement.getAttribute("data-cell"), outline: getComputedStyle(document.activeElement).outlineStyle }));
    check("C3 keyboard focus lands on cell 1 with a visible outline", kb.cell === "1" && kb.outline === "solid", JSON.stringify(kb));
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    check("C3 Enter twice on cell 1 opens one battle with no damage; focus is on the attack message", !(await hidden(page, "#screen-battle")) && (await page.evaluate(() => document.activeElement.id)) === "opponent-move" && (await text(page, "#battle-title")) === "Battle for cell 1" && (await text(page, "#opponent-health")) === "Alien: 2 of 2");
    await page.keyboard.press("Tab");
    check("C3 one Tab reaches Shield", (await page.evaluate(() => document.activeElement.textContent)) === "Shield");
    await page.keyboard.press("Enter");
    await page.keyboard.press("Enter");
    check("C3 Enter twice on Shield is one damage event (Alien 1 of 2, You 2 of 2, exchange 1)", (await text(page, "#opponent-health")) === "Alien: 1 of 2" && (await text(page, "#player-health")) === "You: 2 of 2" && (await text(page, "#exchange-label")).startsWith("Exchange 1"));
    await page.click("#screen-battle .restart");

    // Win a battle: exactly one player icon.
    await page.click('.cell[data-cell="1"]');
    check("C3 choosing cell 1 opens the battle with 2 health each at exchange 1", !(await hidden(page, "#screen-battle")) && (await text(page, "#battle-title")) === "Battle for cell 1" && (await text(page, "#player-health")) === "You: 2 of 2" && (await text(page, "#opponent-health")) === "Alien: 2 of 2" && (await text(page, "#opponent-move")).includes("Laser"));
    check("C3 default responses are Shield, Blast, Dodge", (await page.locator("#responses .response").allInnerTexts()).join(",") === "Shield,Blast,Dodge");
    await respond(page, 0);
    check("C3 one response accepted; responses disabled; Next exchange shown", (await page.locator(".response:not(:disabled)").count()) === 0 && !(await hidden(page, "#next-exchange")));
    await page.click("#next-exchange");
    await respond(page, 1);
    let list = await markList(page);
    check("C3 winning the battle places exactly one X and shows the summary", count(list, "X") === 1 && count(list, "O") === 0 && list[0] === "X" && (await text(page, "#battle-status")).includes("You won the battle") && (await hidden(page, "#next-exchange")) && !(await hidden(page, "#return-to-board")));
    const srText = await page.locator('.cell[data-cell="1"] .sr-only').innerText().catch(() => "");
    const srHidden = await page.evaluate(() => { const el = document.querySelector('.cell[data-cell="1"] .sr-only'); return el ? el.textContent : ""; });
    check("C3 the placed icon carries a hidden 'X' label for screen readers", srHidden === "X" && (await page.locator('.cell[data-cell="1"]').innerText()).includes("🧑‍🚀"), `sr=${srHidden} visible=${srText}`);
    await page.locator("#return-to-board").dispatchEvent("click");
    await page.locator("#return-to-board").dispatchEvent("click");
    list = await markList(page);
    check("C3 Return to board (pressed twice) places no second mark and adds no O", !(await hidden(page, "#screen-board")) && count(list, "X") === 1 && count(list, "O") === 0);
    check("C3 the occupied cell is disabled; 8 cells remain selectable", (await page.locator(".cell:not(:disabled)").count()) === 8 && (await page.locator('.cell[data-cell="1"]').isDisabled()));

    // Lose a battle: exactly one opponent icon.
    await loseCell(page, 2);
    list = await markList(page);
    check("C3 losing the battle places exactly one O (alien icon) on cell 2", count(list, "O") === 1 && list[1] === "O" && count(list, "X") === 1 && (await text(page, "#battle-status")).includes("The alien won the battle") && (await text(page, "#battle-status")).includes("(O)"));
    check("C3 the O cell shows the alien icon with a hidden 'O' label", (await page.locator('.cell[data-cell="2"]').innerText()).includes("👽") && (await page.evaluate(() => document.querySelector('.cell[data-cell="2"] .sr-only').textContent)) === "O");
    await page.click("#return-to-board");

    // Restart mid-battle clears the board and the battle.
    await page.click('.cell[data-cell="4"]');
    await respond(page, 2); // wrong answer, player 1 of 2
    check("C3 wrong answer costs the player 1 health", (await text(page, "#player-health")) === "You: 1 of 2");
    await page.click("#screen-battle .restart");
    list = await markList(page);
    check("C3 Restart mid-battle clears all 9 cells and returns to the board", !(await hidden(page, "#screen-board")) && count(list, "") === 9 && (await page.locator(".cell:not(:disabled)").count()) === 9 && (await hidden(page, "#screen-battle")));
    await page.click('.cell[data-cell="5"]');
    check("C3 the next battle starts fresh with 2 health each at exchange 1", (await text(page, "#player-health")) === "You: 2 of 2" && (await text(page, "#opponent-health")) === "Alien: 2 of 2" && (await text(page, "#exchange-label")).startsWith("Exchange 1"));

    // Help during battle keeps state; Restart reachable from help.
    await page.click("#screen-battle .help");
    check("C3 How to play during a battle shows instructions with Back to game and Restart", !(await hidden(page, "#screen-instructions")) && !(await hidden(page, "#close-help")) && (await hidden(page, "#start")) && (await page.locator("#screen-instructions .restart:visible").count()) === 1);
    await page.click("#close-help");
    check("C3 closing help returns to the same battle, unchanged", !(await hidden(page, "#screen-battle")) && (await text(page, "#battle-title")) === "Battle for cell 5" && (await text(page, "#player-health")) === "You: 2 of 2");
    await page.click("#screen-battle .restart");

    // Three won battles on 1, 2, 3: board won.
    await winCell(page, 1);
    await page.click("#return-to-board");
    await winCell(page, 2);
    await page.click("#return-to-board");
    await winCell(page, 3);
    list = await markList(page);
    check("C3 three won battles on 1, 2, 3 shows 'You won' with Play again", !(await hidden(page, "#screen-board")) && (await text(page, "#board-status")).includes("You won") && count(list, "X") === 3 && !(await hidden(page, "#play-again")) && (await page.locator(".cell:not(:disabled)").count()) === 0);
    check("C3 Restart is hidden once the board is finished (Play again replaces it)", (await page.locator(".restart:visible").count()) === 0);
    await page.click("#play-again");
    list = await markList(page);
    check("C3 Play again gives 9 empty cells and no battle", count(list, "") === 9 && (await hidden(page, "#screen-battle")) && (await hidden(page, "#play-again")));

    // Three lost battles on 1, 5, 9: board lost.
    await loseCell(page, 1); await page.click("#return-to-board");
    await loseCell(page, 5); await page.click("#return-to-board");
    await loseCell(page, 9);
    check("C3 three lost battles on 1, 5, 9 shows 'The alien won'", (await text(page, "#board-status")).includes("The alien won") && (await text(page, "#board-status")).includes("Three O"));
    await page.click("#play-again");

    // Theme switch changes icons and attack names.
    await page.click("#screen-board .help");
    await page.check('#theme-list input[value="cats-dogs"]');
    check("C3 choosing Cats vs Dogs sets data-theme on <html>", (await page.getAttribute("html", "data-theme")) === "cats-dogs");
    check("C3 the counter table now shows the dog's attacks", (await text(page, "#counter-table")).includes("Bark") && (await text(page, "#counter-table")).includes("Hiss"));
    await page.click("#close-help");
    check("C3 the legend shows the cat and dog icons", (await text(page, "#legend")).includes("🐱") && (await text(page, "#legend")).includes("🐶") && (await text(page, "#legend")).includes("Dog"));
    await page.click('.cell[data-cell="1"]');
    check("C3 battle uses the theme's attack and counter names", (await text(page, "#opponent-move")).includes("Bark") && (await page.locator("#responses .response").allInnerTexts()).join(",") === "Hiss,Climb,Shake Off" && (await text(page, "#opponent-health")) === "Dog: 2 of 2");
    await respond(page, 0);
    await page.click("#next-exchange");
    await respond(page, 1);
    check("C3 a won battle in the cat theme places the cat icon with hidden 'X'", (await page.locator('.cell[data-cell="1"]').innerText()).includes("🐱") && (await page.evaluate(() => document.querySelector('.cell[data-cell="1"] .sr-only').textContent)) === "X");
    const accent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim());
    check("C3 the theme's color variables are applied", accent === "#fdba74", `accent=${accent}`);

    // The theme is remembered after a reload.
    await page.reload();
    check("C3 the chosen theme is remembered after reload (localStorage)", (await page.getAttribute("html", "data-theme")) === "cats-dogs" && (await page.locator('#theme-list input[value="cats-dogs"]').isChecked()));

    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    check("C3 fits a 375px wide phone with no sideways scrolling", scrollWidth <= 375, `scrollWidth=${scrollWidth}`);
    await page.click("#start");
    const minButton = await page.evaluate(() => Math.min(...Array.from(document.querySelectorAll("button")).filter((b) => b.offsetParent !== null).map((b) => b.getBoundingClientRect().height)));
    check("C3 every visible button on the board screen is at least 44px tall", minButton >= 44, `smallest=${minButton}`);
    check("C3 no JavaScript errors", errors.length === 0, errors.join("; "));
  }, { label: "checkpoint 3" });

  // ?theme=cats-dogs applies on load (fresh browser context, so nothing is remembered).
  await withPage(browser, fileUrl("checkpoint-3-complete", "?theme=cats-dogs"), async (page, errors) => {
    check("C3 ?theme=cats-dogs applies on load", (await page.getAttribute("html", "data-theme")) === "cats-dogs" && (await page.locator('#theme-list input[value="cats-dogs"]').isChecked()) && (await text(page, "#counter-table")).includes("Bark"));
    check("C3 ?theme= page has no JavaScript errors", errors.length === 0, errors.join("; "));
  }, { label: "checkpoint 3 ?theme" });

  // An unknown ?theme falls back to the default.
  await withPage(browser, fileUrl("checkpoint-3-complete", "?theme=not-a-theme"), async (page) => {
    check("C3 an unknown ?theme falls back to space-invasion", (await page.getAttribute("html", "data-theme")) === "space-invasion");
  }, { label: "checkpoint 3 bad ?theme" });

  // Every theme: 3 attacks, 3 counters, icons, and a playable battle.
  await withPage(browser, fileUrl("checkpoint-3-complete"), async (page) => {
    const themes = await page.evaluate(() => Object.keys(THEMES).map((id) => ({ id, ok: THEMES[id].attacks.length === 3 && THEMES[id].counters.length === 3 && Boolean(THEMES[id].playerIcon) && Boolean(THEMES[id].opponentIcon) && Boolean(THEMES[id].opponentName) && Object.keys(THEMES[id].colors).length >= 2 })));
    check("C3 all 8 themes have 3 attacks, 3 counters, two icons, a name, and 2+ colors", themes.length === 8 && themes.every((t) => t.ok), JSON.stringify(themes));
    for (const t of themes) {
      await page.check(`#theme-list input[value="${t.id}"]`);
      if (!(await hidden(page, "#start"))) await page.click("#start"); else await page.click("#close-help");
      await winCell(page, 1);
      const okWin = (await text(page, "#battle-status")).includes("You won the battle");
      await page.click("#return-to-board");
      await page.click("#screen-board .restart");
      await page.click("#screen-board .help");
      if (!okWin) check(`C3 theme ${t.id}: Shield-position then Blast-position wins a battle`, false);
    }
    check("C3 every theme plays a battle to a win with the first two counters", true);
  }, { label: "checkpoint 3 all themes" });

  // The page still works when localStorage throws.
  const init = () => {
    Object.defineProperty(window, "localStorage", { get() { throw new Error("storage blocked"); } });
  };
  await withPage(browser, fileUrl("checkpoint-3-complete"), async (page, errors) => {
    await page.click("#start");
    await winCell(page, 1);
    check("C3 works when localStorage throws (battle won, one X placed)", (await text(page, "#battle-status")).includes("You won the battle") && errors.length === 0, errors.join("; "));
    await page.click("#return-to-board");
    await page.click("#screen-board .help");
    await page.check('#theme-list input[value="sun-moon"]');
    check("C3 theme can still change when storage throws", (await page.getAttribute("html", "data-theme")) === "sun-moon" && errors.length === 0, errors.join("; "));
  }, { label: "checkpoint 3 storage throws", init });
}

// ---------------- Run everything ----------------
async function launch() {
  try { return await playwright.chromium.launch({ headless: true }); }
  catch (error) {
    console.log("Playwright's Chromium is not installed; trying Google Chrome. (" + error.message.split("\n")[0] + ")");
    return playwright.chromium.launch({ channel: "chrome", headless: true });
  }
}

const browser = await launch();
console.log("Browser: " + browser.browserType().name() + " " + browser.version() + "   Playwright " + require(join(playwrightDir, "package.json")).version + "   Node " + process.version);
await checkpoint1(browser);
await checkpoint2(browser);
await checkpoint3(browser);
await browser.close();

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed === 0 ? 0 : 1);
