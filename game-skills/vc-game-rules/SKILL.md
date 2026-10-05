---
name: vc-game-rules
description: "Define the rules, screen states, and keyboard and touch controls for an agreed beginner browser game."
---

# Write rules and controls

Read the game brief. Write game-rules.md with the goal, permitted actions, score changes, outcome conditions, and four visible states: instructions, playing, result, and restarting. State what is preserved or reset between rounds. Use a short transition table with action and expected result.

Prepare a one-sentence goal and two to four how-to steps that name the actual keyboard and touch controls. Keep instructions short enough to read before play. No score, active timer, or losing condition should advance while the initial instructions are open. Reopening help during a live round should pause it or preserve the agreed state safely. Starting from the help card must not accidentally trigger a second gameplay action.

Define immediate replay after a finished round, without forcing the player through onboarding again. For a puzzle specify invalid input, repeated submissions, and attempt limits. For action games specify movement, collisions, timing, and score boundaries.

Return test cases a partner can follow. Do not assume a keyboard-only interface works on a phone.

For Alien Tic-Tac-Toe, define board and battle states separately. Selecting an empty square locks the board; resolving the fight assigns exactly one X or O there. Check lines before checking a full-board draw. No automatic opponent turn. Restart clears both states. Use the precise counter rules in docs/alien-tic-tac-toe.md.

If a referenced course file is unavailable, request its text or the relevant course-pack section. Do not invent missing rules or submission instructions.
