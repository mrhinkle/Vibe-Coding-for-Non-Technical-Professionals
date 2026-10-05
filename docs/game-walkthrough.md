# Build a small quiz game

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

This worked example creates **Riverbend Club Quiz**, a five-question game about the fictional club in the [website walkthrough](website-walkthrough.md). It uses the Arcade's pattern of short instructions, clear feedback, and replay. It is a simplified knowledge puzzle, not a reproduction of Promptle or a claim that the Arcade source code has been copied.

Use your favorite chatbot and the seven [game skills](../game-skills-guide.md). The core exercise needs no account inside the game, timer, database, paid API, sound, or saved score. You will build actual files and publish the game in a separate project from the website. Follow the full-day schedule in the [instructor guide](../instructor-guide.md).

## 1 Set up the game destination

1. Create a local folder named `my-first-game`. Leave `my-first-site` and its working checkpoint intact.
2. Use the [setup guide](../setup-guide.md) to create your own separate GitHub repository for the game. Confirm its owner and name before saving anything.
3. Create a fresh project-state note from [the template](../templates/project-state.md), with the current stage “game brief.” Record the game folder and repository. The Vercel project and URL can remain “not created yet.”
4. In a connected coding workspace, select the game repository and ask the assistant to identify it before editing. In ordinary chat, attach the brief and skill instructions; direct repository access is optional.

**Checkpoint:** you can show different destinations for the website and game. If another assistant is helping, follow [multiple agents](multiple-agents.md) so two assistants do not replace each other's work.

## 2 Agree on the game before building

Use [vc-game-brief](../game-skills/vc-game-brief/SKILL.md):

> Help me plan Riverbend Club Quiz, a small classroom browser game about a fictional reading club. Use the five supplied questions exactly. One round contains five questions in a fixed order. Each question has three answer buttons. Give one point for a correct answer and zero for a wrong one. After answering, show a short explanation and a Next button. Do not allow a second answer to the same question. After question five, show the score out of five and Play again. No timer, login, database, saved score, or sound. Write game-brief.md and five observable completion checks. Do not build yet.

Use these questions. They describe invented club rules rather than real-world claims that require outside research.

| Question | A | B | C | Correct answer and feedback |
| --- | --- | --- | --- | --- |
| How often does this fictional club choose a book? | Once a year | Once a month | Every day | B. The club chooses one short book each month. |
| What kind of book does the example club choose? | A short book | Only dictionaries | Only cookbooks | A. The fictional club chooses a short book. |
| What should you bring to the practice gathering? | A sales pitch | A ticket payment | A question about the book | C. Bring a question and a passage you want to discuss. |
| What does the website's main button do? | Takes a payment | Opens the next gathering section | Creates an account | B. It takes the visitor to the gathering details. |
| Which description matches this project? | A fictional classroom exercise | A confirmed real event | A real booking service | A. The group and gathering are fictional. |

Read the brief. If the assistant adds random order, streaks, lives, daily locks, animations, or other extras, move those to a later list. Save the brief in your game folder.

## 3 Write exact rules and controls

Use [vc-game-rules](../game-skills/vc-game-rules/SKILL.md) and the brief:

> Turn this brief into game-rules.md. Explain instructions, playing, answer feedback, final result, and restart. Use normal buttons that work with mouse, touch, and keyboard Tab and Enter. No question or score advances before Start. A submitted question cannot score again. Next appears after an answer; on the fifth question it leads to the final result. Play again begins a fresh round at question one with zero points. Specify how reopening instructions preserves the current question and answer. Return tests with exact expected results.

The intended sequence is:

| What happens | What should change |
| --- | --- |
| Open the file | Instructions and Start appear. No answers have been submitted. |
| Activate Start | Question 1 appears; score is 0; progress is 1 of 5. |
| Choose an answer | That question is locked, feedback appears, and score changes at most once. |
| Activate Next | The next unanswered question appears. |
| Finish question 5 and continue | A final score out of 5 and Play again appear. |
| Activate Play again | A fresh round begins at question 1, score 0, with no old selection or feedback. |

**Checkpoint:** your partner can explain the game using this table. Keep the rules available when evaluating the generated game.

## 4 Build the complete play loop

Use [vc-game-build](../game-skills/vc-game-build/SKILL.md), the brief, rules, and question table:

> Build this quiz as one complete index.html with CSS and JavaScript included. It must run when opened directly in a browser, without installs or a server. Use the question table and rules exactly. Keep the first version plain and readable. Provide the actual complete file, not just a screenshot or chatbot preview. Keep question data separate from the logic inside the file so I can recognize and change it later. Explain the tests you actually performed and which I need to perform.

1. Download the file to `my-first-game`, or save the returned text using [the Mac or Windows saving instructions](website-walkthrough.md#4-save-the-file-and-open-it).
2. If supplied a ZIP, extract it. Find `index.html` and retain any supporting files at their expected locations.
3. Open that exact file in your browser. Check whether the address points to the game folder.
4. Activate Start, answer one question, try selecting a second answer to that same question, then continue through the round.
5. Use Play again. Confirm question 1 and zero points return.

**Checkpoint:** you can complete and restart a plain round. Save a copy outside the active game folder, named something like `my-first-game-checkpoint-01`. Do this before adding visual effects. If the loop fails, report the steps and observed behavior through [troubleshooting](troubleshooting.md); do not bury the failure under decoration.

## 5 Make it understandable

Use [vc-game-look-feel](../game-skills/vc-game-look-feel/SKILL.md):

> Improve the appearance of this working quiz while preserving its rules and questions. Use the reading club's cream and blue theme. Make question text, three answer buttons, progress, score, and Next easy to identify on a laptop and a phone. Use labels or symbols as well as color for correctness. Preserve keyboard focus visibility. Keep the file self-contained and do not add sound or animation unless it helps explain an action.

Then use [vc-game-feedback](../game-skills/vc-game-feedback/SKILL.md):

> Check that every answer explains the fictional club rule and the final screen accurately shows the score. Do not invent a real-world lesson or call the player an expert based on five questions. Make Play again obvious and reset the round correctly. Show me the exact result messages and how to test them.

Save the revised complete file, reopen it, and repeat the loop. Record visual decisions in `game-style.md` and result behavior in `game-feedback.md`; a short paragraph each is enough.

**Checkpoint:** a new player knows what to do next after an answer and after the final result. If the AI gives only partial snippets, ask it to apply them to the full current file rather than guessing where to paste them.

## 6 Test exact scoring and repeated play

Use [vc-game-playtest](../game-skills/vc-game-playtest/SKILL.md) and save observations in `game-test-report.md` or the [student workbook](../handouts/student-workbook.md).

| Test | Actions | Expected result |
| --- | --- | --- |
| All correct | Choose B, A, C, B, A in order. | Final score is exactly 5 out of 5. |
| All wrong | Start a fresh round; choose A, B, A, A, B. | Final score is exactly 0 out of 5. |
| Mixed answers | Start again; choose B, B, C, A, A. | Final score is exactly 3 out of 5. |
| Repeat click | After answering question 1, click an answer again several times before Next. | The score and progress do not change again. |
| Restart | Finish a round and activate Play again three times across separate completed rounds. | Every fresh round starts at question 1 with zero score and no previous answer selected. |
| Keyboard | Use Tab to find controls and Enter to activate them. | You can complete a round without a mouse and see which control has focus. |
| Phone | Open the deployed game on a real phone when available. | All answers and Next are reachable; one tap causes one action. |
| Help during play | Reopen instructions after a question has been answered. | The question, score, and locked answer remain correct on return. |

Watch a partner for two minutes without coaching. Ask what they thought would happen when something surprised them. Record the version and device. “The chatbot said the score works” is not a passing test.

Use this repair prompt with the current file:

> The agreed rule is [rule]. On [file or URL and version], I did [numbered actions]. I expected [result] and observed [result]. Here is the current file. Explain the likely cause, make one focused repair, and return the complete updated file. Preserve the questions, appearance, and other working controls. Give me the exact failed test to repeat and two related checks.

**Checkpoint:** mark each check Passed, Failed, or Not tested. Keep failures visible. If time is short, remove optional features and keep the complete play loop. An instructor's tested fallback can help only if it has actually been prepared and supplied.

## 7 Publish the game and carry it forward

1. Use [vc-game-publish](../game-skills/vc-game-publish/SKILL.md) and the [publication guide](../setup-guide.md#publish-each-project).
2. Open the game repository, verify its owner and name, and upload the actual checked files at the intended root. Save the deliberate checkpoint. The website repository should remain separate.
3. Import the game repository into its own Vercel project. For this single-file static game, use the same no-build route as the website. Review the destination and source version before publishing.
4. Open the URL from the completed deployment. Repeat an entire round, check its exact score, and restart. Have a partner try that same URL on another device where available.
5. Write `game-release.md` with the URL, source version, device, observed results, remaining limitations, and recovery checkpoint. If publication is blocked, record the actual error and the location of the working files.
6. Update your project-state note. A later chatbot can continue from the current file, rules, test report, and next action without pretending to remember this conversation.

**Final demonstration:** open the website and its main action; open the separate game; complete and restart a round; show where both versions and their test notes are saved. Adding another question or changing one style choice is a reasonable next exercise. Add it through the same brief → change → test → publish process.

This is the easiest of the [three game choices](game-options.md). For the featured board-and-battle project, use [Alien Tic-Tac-Toe](alien-tic-tac-toe.md). Finished games can follow the [optional Arcade submission path](arcade-submission.md).
