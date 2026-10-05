# Game skills for the vibe coding class

Seven new classroom skills derived from the All Things AI Arcade. Use them with your favorite chatbot to make a small browser game during project 2. The workflow is reusable across themes; students may make something entertaining, educational, or connected to their work.

## How to use the pack

Open the current stage's SKILL.md and paste or attach it to your chatbot with its starter prompt, the selected game walkthrough, and the earlier stage's output. Start by sharing [the game menu](docs/game-options.md); for Alien Tic-Tac-Toe, also attach [its complete rules and walkthrough](docs/alien-tic-tac-toe.md). A path printed in a skill does not give an ordinary chatbot the file. If the platform supports native skills, install through its supported workflow and verify discovery. Pasting the instructions is sufficient for the portable route; it does not grant tools or account access.

Keep the game in its own folder and repository. Request complete runnable HTML, CSS, and JavaScript files. Open the files in a browser, test them, and publish them to the game's own Vercel project. Use a connected coding workspace if available, or manually upload the checked files through GitHub.

## Seven stages

| Skill | Input | Output |
| --- | --- | --- |
| vc-game-brief | Idea and preferred theme | game-brief.md |
| vc-game-rules | Agreed brief | game-rules.md and observable checks |
| vc-game-build | Brief and rules | Runnable game files |
| vc-game-look-feel | Playable game | Clear visual treatment and game-style.md |
| vc-game-feedback | Working outcomes | Result messages, replay, and game-feedback.md |
| vc-game-playtest | Exact build and rules | game-test-report.md and focused repairs |
| vc-game-publish | Checked game and test report | Deployed game or blocker, and game-release.md |

The two documentation outputs in the polish stage can be short paragraphs; the playable result is the priority. Students can skip optional visual effects and educational content while still completing the core game.

## Choose a starter recipe

### 1. Alien Tic-Tac-Toe — featured choice

Mark’s new classroom idea: selecting an empty square starts a short alien battle. Win to place X; lose and the alien places O there. Three Xs wins, three Os loses, and a full board without a line draws. This is a solo variant with no extra opponent turn. Build the plain board, a turn-based battle, then connect them. See the [complete rules and walkthrough](docs/alien-tic-tac-toe.md).

### 2. Five-question quiz — easiest choice

Inspired by the Arcade’s small puzzle patterns, including Promptle, rather than copying its word rules. Five questions, one point per correct answer, clear feedback, and replay. Use the [worked quiz example](docs/game-walkthrough.md). Verify any factual answers. A full word puzzle is a later extension.

### 3. One-button space dodger — action choice

Inspired by Flappy Brains: tap or press Space to boost a ship, pass generous obstacle gaps, and score each obstacle once. Collision ends the run; restart clears movement and score. Keep one screen and one obstacle type. The [game menu](docs/game-options.md) contains the starter brief and acceptance checks. Tune timing, collision, and restart behavior before artwork.

Students build **one** of these games. A different small idea is welcome if its scope fits the same time. Strong finished projects can use the [optional Arcade submission path](docs/arcade-submission.md); acceptance and later integration are decided by Mark/ATA.

## Starter prompts

### Choose a small game

[vc-game-brief](game-skills/vc-game-brief/SKILL.md)

> Help me choose a small game I can finish in this class. Ask about my theme and preferred gameplay, then write a brief and five observable completion checks.

### Write rules and controls

[vc-game-rules](game-skills/vc-game-rules/SKILL.md)

> Turn my game brief into short instructions, keyboard and touch controls, score rules, and a table showing start, play, result, and restart.

### Build the first playable version

[vc-game-build](game-skills/vc-game-build/SKILL.md)

> Build a plain playable version from my brief and rules. Make the entire start, play, result, and restart loop work before adding decorative effects.

### Make the game clear and readable

[vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md)

> Polish this working game without changing its rules. Make the player, targets, hazards, score, and controls clear on a phone and a laptop.

### Explain results and invite replay

[vc-game-feedback](game-skills/vc-game-feedback/SKILL.md)

> Improve the result screen so players understand what happened and can immediately play again. Include a brief sourced lesson only if it fits my game.

### Playtest and change one thing at a time

[vc-game-playtest](game-skills/vc-game-playtest/SKILL.md)

> Help a partner playtest this exact game without coaching. Record real observations, fix the biggest problem, and tune one difficulty setting at a time.

### Publish and hand off the game

[vc-game-publish](game-skills/vc-game-publish/SKILL.md)

> Prepare my checked game for its own GitHub repository and Vercel project. After publication, verify a complete round and restart at the actual URL.

## What came from the Arcade

The inspected Arcade specification contributes a simple main action, short instructions, matching keyboard and touch controls, clear game states, adjustable difficulty, readable phone graphics, understandable outcomes, and immediate replay. Its five review perspectives become playtest questions, with another learner supplying the actual first-time-player test.

The live beta guide also asks testers to record the steps, expected result, and actual result and to check desktop and phone behavior. [Arcade beta guide](https://staging.allthingsai.org/arcade/beta)

We adapted the patterns rather than distributing the site's implementation or assets. The source repository's game instructions are not packaged game skills, and these seven files are newly written. They omit ATA accounts, remote scores, registration, newsletter prompts, medallion unlocking, and repository-specific agent operations. Browser-local best scores are optional.

## Readiness

These files are draft skills with validated formatting and checked local links. The source material and live screens were inspected, but the new skills have not yet been used to build and publish all three classroom recipes. Rehearse the chosen recipes before class. Native installation, complete game behavior, and classroom timing remain to be verified in that rehearsal.
