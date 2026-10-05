# Build Alien Tic-Tac-Toe

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Alien Tic-Tac-Toe is Mark's new classroom game concept: choose a square, fight a short alien battle, then claim that square as X or lose it to O. It is not an existing All Things AI Arcade title. This walkthrough is a specification and set of build instructions; it does not establish that the application exists, has been tested, or has been rehearsed in class.

Use your favorite chatbot and the seven [game skills](../game-skills-guide.md). Keep the game in its own folder, GitHub repository, and Vercel project, separate from your website. The first version uses plain HTML, CSS, and JavaScript, ordinary buttons, and simple shapes. It needs no timer, account inside the game, backend, downloaded art, paid API, or sound.

If you would prefer a shorter ruleset, choose the [five-question quiz](game-walkthrough.md). See [all three game choices](game-options.md) before starting. The instructor should rehearse each offered option and prepare a tested recovery checkpoint; these instructions do not supply a hidden starter application.

## What you are making

This is a **solo variant** of tic-tac-toe. You choose every square. A short battle determines who receives it.

1. Start with an empty three-by-three board.
2. Select an empty cell. That cell becomes the pending battle location and the whole board locks.
3. Win the battle to put **X** in the selected cell. Lose the battle to put **O** there.
4. There is **no automatic opponent move**. One finished battle fills exactly one cell.
5. Three X marks in any row, column, or diagonal wins the board. Three O marks loses it. A full board with neither line is a draw.
6. If the board is not finished, return to it and choose another empty cell. If it is finished, use Play again to start a new empty board.
7. During active play, an always-available **Restart game** button abandons the whole board immediately and returns to an empty board. It also clears any battle in progress. It does not let you cancel only one battle while keeping earlier marks.

Winning a battle is different from winning the board. A battle might give you the first X of a line; it does not end the whole game unless that placement completes a line or fills the board.

Use these cell names in your notes and tests:

| | Column 1 | Column 2 | Column 3 |
| --- | --- | --- | --- |
| Row 1 | Cell 1 | Cell 2 | Cell 3 |
| Row 2 | Cell 4 | Cell 5 | Cell 6 |
| Row 3 | Cell 7 | Cell 8 | Cell 9 |

The winning lines are **1–2–3, 4–5–6, 7–8–9, 1–4–7, 2–5–8, 3–6–9, 1–5–9, and 3–5–7**.

## The battle rules

Every battle starts with **2 player health points and 2 alien health points**. Display health as text such as “You: 2 of 2” and “Alien: 2 of 2”; icons may reinforce it. Do not make the player infer health from color alone.

The alien announces its move. You choose one of three response buttons:

| Alien shows | Correct response | Result of a correct response |
| --- | --- | --- |
| Laser | Shield | Alien loses 1 health point. |
| Shield | Blast | Alien loses 1 health point. |
| Claw | Dodge | Alien loses 1 health point. |

Any other response costs the **player** 1 health point. Exactly one side loses exactly one point per accepted response. There is no extra automatic retaliation, simultaneous damage, healing, or random damage.

For the first classroom version, use **Laser → Shield → Claw**, starting again at Laser for every new battle. This predictable sequence makes the rules and tests easy to reproduce. The correct responses are therefore **Shield → Blast → Dodge**. Randomized alien moves can be a later extension after the basic loop works.

After a response, disable all response buttons and show what happened. If both sides still have health, show an explicit **Next exchange** button. The next alien move and fresh response buttons appear only when the player activates it. Do not reuse the answer click to advance an exchange.

If the alien reaches zero health, the battle ends immediately with a win. If the player reaches zero, it ends immediately with a loss. Do not show Next exchange after either terminal result. A battle needs two or three exchanges at most: with one health point lost on every exchange, someone must have lost both points by the third. No separate “round limit draw” is needed.

When a battle ends, fill the pending cell **exactly once**, then immediately evaluate the board. If the board continues, a short summary can offer **Return to board**. If the placement ends the board, show **You won**, **The aliens won**, or **Draw** immediately and offer **Play again**. Acknowledging a summary must never place a second mark.

## 1 Prepare the project and brief

1. Create or locate your `my-first-game` folder and learner-owned GitHub repository. Check their names before giving an assistant permission to edit. Keep your website separate.
2. Start a `project-state.md` note from [the state template](../templates/project-state.md). Record “Alien Tic-Tac-Toe,” the destination, and the current stage.
3. Open [vc-game-brief](../game-skills/vc-game-brief/SKILL.md) and give it to your chatbot with this lesson.
4. Use the prompt below. Read the returned brief and correct any unwanted rules before building.

> Write game-brief.md for Alien Tic-Tac-Toe using this lesson exactly. It is a solo three-by-three board. Selecting an empty square locks the board and starts a battle for that square. A battle win places X; a loss places O. No separate automatic opponent move occurs. X line wins, O line loses, full board without a line draws. Battles use 2 health each, the stated Laser/Shield/Claw counters, one accepted response per exchange, and explicit Next exchange between nonterminal responses. Exclude timers, logins, backend services, downloaded assets, and sound. Give me observable completion checks. Do not build yet.

**Checkpoint:** you can explain how a square is awarded and why the alien does not take another turn afterward. Save the agreed brief.

## 2 Describe the states and controls

Use [vc-game-rules](../game-skills/vc-game-rules/SKILL.md). A state is simply the situation the game currently remembers and the actions it allows.

| State | What the player sees | Allowed action and result |
| --- | --- | --- |
| Instructions | Goal, counter table, Start | Start opens the empty board. Nothing progresses beforehand. |
| Choose a cell | Board and “Choose an empty square” | One empty cell starts one battle and locks all cells. |
| Choose a response | Pending cell, health, announced alien move | One response applies one damage result and locks responses. |
| Exchange feedback | Correct/incorrect explanation and updated health | Next exchange is available only while both sides have health. |
| Battle finished, board continues | Awarded cell and battle summary | Return to board unlocks only empty cells; no further mark is placed. |
| Board finished | Final board, winning line or draw, result | Play again clears the entire board and returns to cell selection. |
| Any active board or battle state | A clearly labeled Restart game button | Restart game immediately clears the entire board, pending cell, health, exchange, selected response, and feedback; it returns to empty-cell selection. |

Use standard buttons for cells, responses, Start, Next exchange, Return to board, Restart game, and Play again. They must work with touch or mouse, and with keyboard Tab plus Enter or Space. Show visible keyboard focus. Give cells readable labels such as “Row 1, column 2, empty,” then update the label when occupied. Keep Restart game reachable during both battle input and battle feedback; label that it clears the whole board.

Reopening instructions must preserve the pending cell, health, accepted response, and board. While help is open, hide or disable gameplay controls except Restart game, which must remain reachable. Closing help must not count as a move. There is no cancel-a-single-battle option: finish the battle to resolve its cell, or use Restart game to abandon all progress and begin an empty board.

> Use the game-rules skill to turn this brief into game-rules.md. Include the state table and exact allowed actions. Keep the board locked during battle and while battle feedback is being acknowledged. Reject occupied cells. Accept each response once and resolve each battle once. On zero health, resolve immediately; never wait for another exchange. Check lines before declaring a full-board draw. Specify keyboard, pointer, and touch behavior and what Play again resets. Keep Restart game available throughout active play; it abandons and resets both the board and battle immediately, with no mark awarded from the abandoned fight.

**Checkpoint:** a partner can describe Start → choose a cell → battle → mark → continue or result → restart from the rules. Save the rules before asking for code.

## 3 Build the board first

Ask [vc-game-build](../game-skills/vc-game-build/SKILL.md) for a small **board prototype**. Keep it in a clearly named prototype folder outside your final upload folder. This is a temporary testing step, not the finished game.

> Build a plain board prototype as one complete index.html. It must open directly in a browser without installation. Implement empty and occupied cells, selecting one pending cell, locking the board, detecting all eight winning lines, and Play again. For this prototype only, provide clearly labeled Test battle win and Test battle loss buttons to resolve the pending cell as X or O. Show only one accepted resolution. These temporary controls must be removed when the real battle is integrated. Use normal accessible buttons and simple text. Return the actual complete file and tell me which checks I must perform.

1. Save and open the complete file using [the Mac and Windows file instructions](website-walkthrough.md#4-save-the-file-and-open-it).
2. Select cell 1. Try selecting cell 2 before resolving; it should have no effect.
3. Use Test battle win once. Only cell 1 should become X. Repeat the control or select the occupied cell; neither should change the board.
4. Use test outcomes to check an X line, an O line, and the draw pattern below.
5. Use Play again and confirm all nine cells are empty.

**Checkpoint:** save a separate working copy named `alien-board-checkpoint-01`. Record what you actually tested. If the board rules fail, fix them before adding the battle.

## 4 Build and check the battle separately

Make a second prototype in a different folder so it cannot overwrite the board checkpoint.

> Build a standalone battle prototype from game-rules.md. Return a complete directly openable index.html. Start each battle with player health 2 and alien health 2. Show Laser, then Shield, then Claw only as needed. The counters are Shield, Blast, and Dodge respectively. Correct damages only the alien by 1; incorrect damages only the player by 1. Lock all responses after one choice. Use an explicit Next exchange button only when both still have health. At zero health, end immediately and show a win or loss with no further damage or exchange. Provide Restart battle for this prototype. No timers, random damage, or automatic retaliation.

Try these exact sequences, activating Next exchange only when it appears:

| Test | Your responses | Expected outcome |
| --- | --- | --- |
| Two correct | Shield, Blast | Win after exchange 2; player health 2, alien health 0. |
| Two incorrect | Blast, Shield | Loss after exchange 2; player health 0, alien health 2. |
| Win on third | Shield, Shield, Dodge | Win after exchange 3; player health 1, alien health 0. |
| Lose on third | Blast, Blast, Blast | Loss after exchange 3; player health 0, alien health 1. |
| Repeat input | Choose Shield against Laser, then press it repeatedly before Next exchange | Alien health remains 1 and player health remains 2; exchange stays at 1. |

**Checkpoint:** each accepted choice causes one explained damage event. There is never a fourth exchange, negative health, or a battle draw. Save `alien-battle-checkpoint-02` outside the final upload folder and update project state.

## 5 Connect the board and battle

Give the chatbot both working prototypes, the brief, and the rules. Keep your checkpoints intact. Ask it to produce the final `index.html` in the game project folder.

> Integrate these checked prototypes into Alien Tic-Tac-Toe. The board's selected empty cell is the only destination for that battle. Lock the entire board before the battle opens. Start fresh health for every battle. Resolve a terminal battle exactly once: win sets the pending cell to X, loss sets it to O, then check the board immediately. There is no automatic opponent placement. If the board continues, Return to board only dismisses the summary; it must not place another mark. If a line or full-board draw ends the game, stop gameplay and show Play again. Remove the temporary Test battle win/Test battle loss controls and standalone Restart battle. Add an always-available Restart game control during active play. It immediately clears both board and battle state and returns to the empty board; an abandoned battle must never award a delayed mark. Return one complete runnable index.html. Explain the changes and untested behavior.

1. Open the integrated file and win a battle for cell 1. Confirm exactly one X.
2. Return to the board and lose a battle for cell 2. Confirm exactly one O and no mark elsewhere.
3. Try occupied cells and rapid clicks during battle; neither should start another fight or change the pending cell.
4. Complete the board and use Play again. Confirm no health, response, mark, or pending-cell selection carries into the new game.
5. Start another battle and answer once, then use Restart game while its feedback is visible. Confirm the whole board clears, no old battle controls remain, and the next selected cell begins a fresh battle with 2 health per side.

**Checkpoint:** the complete loop works in the exported file. A chatbot preview alone is not this checkpoint. Save a working copy before visual changes.

## 6 Make the game readable

Use [vc-game-look-feel](../game-skills/vc-game-look-feel/SKILL.md) and [vc-game-feedback](../game-skills/vc-game-feedback/SKILL.md). A small alien drawn with simple shapes, a dark space background, and clear X/O marks are sufficient. Keep the counter table visible or immediately available; this game teaches a rule rather than testing memory under time pressure.

> Improve this working game's appearance without changing the rules. Make X, O, the pending cell, current alien move, both health values, and available actions clear on a phone and laptop. Use words or symbols as well as color. Show feedback such as “Shield counters Laser. Alien loses 1 health.” Distinguish Battle won from Board won. Keep focus visible and controls reachable. Do not introduce external assets, timers, sound, backend services, or effects that block play.

**Checkpoint:** a first-time player can identify whose health changed, which cell the battle concerns, and what to do next. Record short style and feedback notes alongside the files.

## 7 Test the integrated game

Use [vc-game-playtest](../game-skills/vc-game-playtest/SKILL.md). Record the exact file/version, browser, device, steps, and observed result in `game-test-report.md`. Use **Passed**, **Failed**, or **Not tested**.

For the fixed battle sequence, you can deliberately win a cell using **Shield, Blast**, or deliberately lose it using **Blast, Shield**. Activate Next exchange between those responses. This makes board tests repeatable without leaving test buttons in the finished game.

| Check | What to do | What must happen |
| --- | --- | --- |
| Start | Open the game and leave instructions visible | No board mark, health loss, or battle occurs before Start. |
| Occupied cell | Finish a battle for cell 1, return, then select it again | Nothing changes and no new battle opens. |
| Board lock | Select cell 2, then rapidly try cell 3 and other cells | The pending location remains cell 2; only one battle exists. |
| One response | Rapidly click or press an answer before Next exchange | Exactly one damage event is accepted. |
| One resolution | Win a battle, then repeat the last input and acknowledge its summary | Exactly the selected cell changes once; the other eight stay as they were. |
| Immediate terminal | Reach zero alien or player health | No Next exchange appears; the board mark and outcome are resolved immediately. |
| No extra opponent turn | Win one battle and return to the board | One X appears and no O is added automatically. |
| X line | On a fresh board, win cells 1, 2, and 3 | X wins immediately; no further cell can start a battle. |
| O line | On a fresh board, lose cells 1, 2, and 3 | O wins immediately; no further cell can start a battle. |
| Other lines | On fresh boards, repeat the appropriate outcomes for each remaining winning line | Every row, column, and diagonal is recognized. Record the lines actually tried. |
| Full-board draw | Fill cells 1–9 in order as X, O, X, X, O, O, O, X, X | The ninth result is Draw; there is no earlier line. |
| Last-cell win | Fill cells 1–9 in order as X, O, O, O, X, X, X, O, X | The ninth X completes 1–5–9 and is a win, not a draw. |
| Restart | After a win, loss, or draw, use Play again and repeat for several games | Nine empty cells; no pending battle, stale feedback, old health, or duplicate action. |
| Restart during battle | Claim one cell, start another battle, answer once, and activate Restart game during feedback | All nine cells clear immediately; the abandoned fight awards no mark. A newly selected cell starts exchange 1 with 2 health per side. |
| Restart before responding | Start a battle and activate Restart game before choosing a response, then repeat after reopening help | The empty board returns and old response or help controls cannot change it. |
| Help during battle | Answer once, reopen help, then close it | Board, pending cell, health, and locked response remain correct. |
| Keyboard and phone | Play through the supported keyboard route and on a real phone when available | Focus is visible, buttons are reachable, and one activation produces one action. |

Give a partner two minutes without coaching. Record where they hesitate, especially whether they expect an automatic opponent move. If the instructions do not resolve that confusion, improve the explanation while keeping the rules unchanged.

> On [version and file/URL], I did [steps]. The rule says [expected result], but I observed [actual result]. Here are the current file and rules. Make the smallest repair, preserve the working parts, and return the complete file. Tell me which failed test and related checks to repeat. Do not claim a browser check that neither of us performed.

If repeated repairs fail, use [troubleshooting](troubleshooting.md) and your saved checkpoints. A plain working version is more useful than polished graphics covering an incorrect result.

## 8 Publish and hand off

1. Use [vc-game-publish](../game-skills/vc-game-publish/SKILL.md) and the [publication guide](../setup-guide.md#publish-each-project).
2. Upload the intended integrated `index.html` and necessary supporting files to the game repository. Keep prototype folders and temporary test controls out of the final application upload.
3. Check the repository, version, Vercel project, root, and static-file settings before the authorized release. The first deployment is production under the course's documented flow.
4. Open the completed deployment URL. Win one battle, lose another, complete a board result, and restart. Have a partner use that exact URL where possible.
5. Save `game-release.md` with the version, URL, observed results, limitations, and recovery checkpoint. Update `project-state.md` with the next small action.

The finished handoff should distinguish the published game's observed behavior from local tests and any checks not attempted. If deployment is blocked, retain the working files and exact error rather than calling the game live.

After the class project is checked, you can follow the [optional Arcade submission guide](arcade-submission.md). Submission is a separate step from deploying your own game; follow that guide's review and authorization process.
