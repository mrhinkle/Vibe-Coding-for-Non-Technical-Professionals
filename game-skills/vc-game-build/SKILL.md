---
name: vc-game-build
description: Builds one increment of a small browser game from the brief and rules as a complete index.html the learner can double-click, board first, battle second, connected third. Use when a learner says "build the board," "build the battle," "connect them," "make it playable," or "build the first version of my game."
---

# Build the first playable version

You are helping a non-programmer get a working game one increment at a time. Your one job is the next increment as one complete runnable file, with the exact checks to run before the next increment starts.

## When this applies

- game-brief.md and game-rules.md exist and name the increment: 1 board, 2 battle, 3 connected.
- A previous increment passed its checks and the learner asks for the next.
- Not before the rules. If there are none, use vc-game-rules first. If a change touches more than one file, plan it with ../../skills/vc-plan-first/SKILL.md first.
- Not for looks. That is vc-game-look-feel. Not for result messages. That is vc-game-feedback.
- Not for testing with a partner. That is vc-game-playtest.

## What you need before starting

- game-brief.md and game-rules.md. If missing, ask; never build from memory of the rules.
- The previous increment's file, if there is one. For increment 3, both prototypes. If a file did not arrive, ask for it.
- Which increment to build. If unclear, propose the next one in order and wait.
- Never a password, API key, or token.

## Steps

1. Say what you received, which increment you are building, and that you will return one complete index.html. The learner sees the scope before code.
2. Build only that increment, with plain shapes and text, ordinary buttons, no sound, no timers, no outside files:
   - Increment 1, board: nine cells; select one pending cell and lock the board; two temporary buttons (Award to me, Award to alien) stand in for the battle; all eight lines detected before a full-board draw; Play again; Restart game.
   - Increment 2, battle: 2 health each shown as text; moves in the fixed order; one response accepted per exchange, then responses lock; Next exchange only while both have health; immediate end at zero; Fight again.
   - Increment 3, connected: the pending cell is the only destination; fresh health every battle; the cell is filled exactly once; no automatic opponent move; Return to board places nothing; temporary buttons removed; Restart game in every active state.
3. Return the complete file, first line to last, ready to save as index.html. Never a fragment.
4. Say how to save and open it (plain text editor, no .txt, double-click), and in which folder: prototypes in their own folders; increment 3 in my-first-game.
5. Give the checks for this increment from game-rules.md as "press X, you should see Y," and say which behaviors you did not check yourself.
6. Hand back. Say: "Run the checks. Save a copy named for this checkpoint before anything else changes. If it fails and one repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-1-board, checkpoint-2-battle, or checkpoint-3-complete, whichever matches your stage."

## Rules

- Always return the whole file. A chatbot preview is not the deliverable; the saved file that opens is.
- Never let one click do two things: the answer click never advances the exchange; Next exchange does. Never fill a cell twice; never add an opponent move.
- Never claim a browser check you did not run. Say what you inspected and what the learner must press.
- Scope rule: one increment, one file, one set of checks. Looks, sound, random moves, and levels wait.
- If the rules turn out to be unclear mid-build, stop, say which rule, and return to vc-game-rules.

## Example

**Learner:** "Board and battle prototypes both pass. Here are both files, the brief, and the rules. Connect them."

**You:** "Received: alien-board-checkpoint-01/index.html, alien-battle-checkpoint-02/index.html, game-brief.md, game-rules.md (cats-dogs theme). Increment 3: the connected game. One complete index.html for my-first-game.

Built: choosing an empty cell locks the board and opens the battle for that cell only; every battle starts You 2, Dog 2 at Bark; one response accepted per exchange, then responses lock and Next exchange appears only while both have health; at zero the battle ends and the cell is filled exactly once, cat for a win, dog for a loss; the board is checked at once, lines before draw; Return to board dismisses the summary and places nothing; no automatic dog move; Play again clears the board; Restart game is on screen in every board and battle state and clears everything. Removed: Award to me, Award to alien, Fight again.

[complete index.html, first line to last]

Save as index.html in my-first-game. Leave both prototype folders as they are. Double-click to open.

Checks
1. Choose cell 1, press Hiss, Next exchange, Climb; exactly one cat in cell 1, no dog anywhere.
2. Choose cell 2, press Climb, Next exchange, Hiss; exactly one dog in cell 2.
3. Choose cell 1 again, and click other cells during a battle; nothing changes.
4. Win cells 1, 2, 3; 'You won', no cell can be chosen, Play again clears all nine.
5. Start a battle, answer once, press Restart game; all nine cells empty, the next battle starts at 2 and 2.

I inspected the code; you run the presses. Save a copy named game-checkpoint-03 before anything else changes. If a check fails and one repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-3-complete."

## Checks that it worked

- The learner double-clicked one saved file and it opened and played with nothing missing.
- Each check for the increment passed in the learner's own words, including one cell per battle and Restart game during a battle.
- A named checkpoint copy exists before the next increment starts.
