# Game skills for the vibe coding class

Seven new classroom skills derived from the All Things AI Arcade. Use them with your favorite chatbot to make a small browser game during project 2. The workflow is reusable across themes; students may make something entertaining, educational, or connected to their work.

## How to use the pack

Open the current stage's SKILL.md and paste or attach it to your chatbot with its starter prompt and the earlier stage's output. If the platform supports native skills, install through its supported workflow and verify discovery. Pasting the instructions is sufficient for the portable route; it does not grant tools or account access.

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

### A small word or knowledge puzzle

Inspired by [Promptle](https://staging.allthingsai.org/arcade/promptle). Start with five to ten prepared questions or words, a few attempts, visible progress, a result explanation, and replay. Theme it around a hobby, company vocabulary, or a subject the learner knows. Use verified content if presenting facts.

The easiest version can use clues or multiple-choice answers. A full Wordle-style version is an extension: it also needs correct handling of repeated letters, allowed guesses, and letter-position feedback. Daily locks, streaks, large dictionaries, and share cards can wait.

Completion example: invalid input does not spend an attempt; a correct answer changes progress once; the final attempt ends the round correctly; replay returns to the agreed starting state.

### A one-button obstacle game

Inspired by Flappy Brains in the [Arcade](https://staging.allthingsai.org/arcade). Start with one character, a tap or key to move upward, generous obstacle gaps, a score for passing an obstacle, a collision result, and immediate replay. Students choose the character and setting.

Keep the first version forgiving. Add consistent motion across devices, correct hit detection, and a fresh state on every restart. Extra worlds, advanced physics, collectibles, and asset packs can wait.

Completion example: one tap produces one intended action; each obstacle scores once; loss has a visible cause; repeated restart does not make the game run faster.

### A paddle game

Inspired by Brain Pong in the [Arcade](https://staging.allthingsai.org/arcade). Start with a player paddle, ball, simple opponent or target wall, clear scoring, and a short round. Use keys on a laptop and pointer or touch controls on a phone. Students can change the visual theme and target score.

Keep speed, paddle size, and opponent behavior adjustable. Fancy opponents, network play, tournaments, and global rankings are later work. The first test is whether a beginner can understand and control it.

Completion example: the ball bounces correctly; a missed ball changes score once; reaching the target ends the round; replay resets score, positions, and movement.

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
