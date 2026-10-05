# Choose your classroom game

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is choosing a game, continuing one, or stuck. Request the current `project-state.md` and actual files before changing an existing project. Do not claim to have read a linked lesson that was not available.

Choose **one** game for the second project. Use your favorite chatbot and the same [seven game skills](../game-skills-guide.md): brief, rules, build, appearance, feedback, playtest, and publish. The website remains your first project, and the class remains 360 teaching minutes plus breaks. These options replace each other within the game block; they are not three additional assignments.

The instructions below describe projects to build. They are not tested starter applications. The instructor should rehearse the offered choices and prepare a recovery checkpoint for each before class.

| Choice | What the player does | Why choose it? | Main thing to test |
| --- | --- | --- | --- |
| **Featured: Alien Tic-Tac-Toe** | Chooses a board cell and wins or loses a short alien battle to determine its mark. | A distinctive game that combines a familiar board with a small battle system. | Battle outcomes award exactly one cell and end the board correctly. |
| **Five-question quiz** | Answers one question at a time, sees feedback, and tries again. | The simplest complete worked example, with predictable tests and no movement. | One answer scores once; final scores and replay are correct. |
| **One-button space dodger** | Taps or presses a key to rise between obstacles. | A visual action game with one control and a theme you can customize. | Motion, collisions, scoring, and restart work consistently. |

All three can use plain static HTML, CSS, and JavaScript in a separate learner-owned game repository and Vercel project. Keep accounts, multiplayer, databases, global leaderboards, payments, and external asset libraries outside the core exercise.

## Featured game Alien Tic-Tac-Toe

[Open the full Alien Tic-Tac-Toe walkthrough](alien-tic-tac-toe.md).

This is **Mark's new concept**, not an existing title in the All Things AI Arcade. You select an empty cell on a three-by-three board and fight for it. A battle win places X; a loss places O. No automatic opponent move follows. A line of X wins, a line of O loses, and a full board with no line draws.

Each battle starts with two health points for each side. The alien shows Laser, Shield, or Claw; the corresponding correct responses are Shield, Blast, and Dodge. A correct response damages the alien by one point; an incorrect response damages you by one. Answer once, then use Next exchange if neither side has reached zero. A battle ends after two or three exchanges, and its selected cell is resolved exactly once.

Restart game remains available during active play and immediately clears both the whole board and any battle in progress. You cannot abandon only a losing battle while retaining earlier marks.

Build in three increments: **board first, battle second, connected game third**. This gives you checkpoints that can be checked separately. Use simple shapes and ordinary keyboard/touch buttons. There are no timers or external assets in the first version.

> Help me build Alien Tic-Tac-Toe using its walkthrough. Start with the brief and exact rules. Preserve the solo battle-for-a-cell mechanic: no automatic opponent move, one resolved battle per selected cell, immediate terminal outcomes, and a fresh board on replay. Plan the board, battle, and integration as separate checked increments.

Choose it if you want to learn how two small systems connect. Keep the scope disciplined: visual effects, randomized enemies, upgrades, and additional attack types can wait.

## Five-question quiz

[Open the full quiz walkthrough](game-walkthrough.md).

Riverbend Club Quiz asks five questions about a fictional reading club. Each question accepts one answer, shows an explanation, and then offers Next. After the fifth question, it displays the score out of five and Play again. The walkthrough supplies the question content and exact answer sequences for scores of 5, 0, and 3.

The quiz adapts the broader Arcade pattern of short instructions, clear results, and replay, with Promptle as inspiration. It does not copy Promptle's word-guessing rules or source code. You can change the theme after the basic game works, provided any factual teaching content is verified.

> Help me build the five-question quiz from the worked lesson. Keep its supplied question order and scoring rules. Return complete runnable files. Build the start, answer, feedback, next-question, result, and replay flow before adding decoration. Use the exact known-answer tests.

Choose it if finishing a small complete game is your priority. It is also a useful scope reduction if a more complex game is consuming the class period; save the earlier work and record the change of plan rather than pretending both were completed.

## One-button space dodger

Use the one-button recipe in the [game skill guide](../game-skills-guide.md), inspired by the Arcade's Flappy Brains pattern. The space theme is a new classroom variation, not a claim that the Arcade contains a game with this exact name.

Define the first version before building:

1. A small spaceship falls gently unless the player taps a visible control or presses Space to rise.
2. Obstacles approach with generous gaps. Passing one obstacle earns one point, once.
3. A visible collision ends the round and shows the score and Play again.
4. Replay resets ship position, obstacles, score, and movement. Repeated restart must not add extra animation loops.
5. Instructions hold the game idle before Start. Motion should be consistent across devices and handle returning from a background tab without an unavoidable loss.

Use simple geometric shapes and no sound in the first build. Do not add physics libraries, downloaded sprite packs, multiple worlds, or a separate countdown timer merely for polish.

> Use the game-brief and game-rules skills to plan a one-button space dodger. Use tap or Space to rise, generous obstacle gaps, one point per obstacle passed, a visible collision result, and immediate replay. Define start, movement, collision, score, and reset checks. Use simple shapes and portable static files. Do not build until the rules are clear.

After the first playable file is exported, test one tap versus a held key, each obstacle's single score, a visible collision, three restarts, phone controls, and returning after a tab switch. This option has more movement behavior to diagnose than the quiz. Mark checks not performed honestly.

## Make the choice and save it

1. Record your choice and its small first version in `game-brief.md`.
2. Identify the separate game folder, repository, and current stage in [project state](../templates/project-state.md).
3. Read the relevant walkthrough and give the chatbot its current skill plus the actual files as you progress.
4. Keep a tested checkpoint before adding a new mechanic or changing the visual theme.
5. Use [troubleshooting](troubleshooting.md) if behavior differs from the rules. Ask for one focused repair rather than starting a different game automatically.

Your final demonstration is the same for every choice: explain the goal, complete a round, show the result, replay, and identify the version and checks behind your claim that it works.

If you want to share the finished game with the All Things AI Arcade, read the [optional Arcade submission guide](arcade-submission.md) after completing the class checks. Follow its separate review and authorization process; publishing to your own Vercel project does not submit the game automatically.
