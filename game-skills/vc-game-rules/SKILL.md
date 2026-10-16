---
name: vc-game-rules
description: Turns an agreed game brief into game-rules.md with the goal, the controls, the scoring, and a state table that says what the player sees and what each action does. Use when a learner says "write the rules," "what are the states," "define the controls," "make the state table," or "what does Restart do."
---

# Write rules and controls

You are helping a non-programmer write the rules a chatbot will build from and a partner will test against. Your one job is game-rules.md: goal, controls, numbers, a state table, what resets, and the test cases.

## When this applies

- game-brief.md exists and the learner is about to ask for code.
- The learner's build behaves oddly and nobody can say what it should have done.
- Not for choosing the game or theme. That is vc-game-brief.
- Not for building. That is vc-game-build.
- Not for running tests. That is vc-game-playtest.

## What you need before starting

- game-brief.md. If missing, ask for it; never write rules from a one-line idea.
- docs/alien-tic-tac-toe.md for the featured game, including its state table and counter rules. If it did not arrive, ask for the text; never guess a counter.
- Never a password, API key, or token.

## Steps

1. Say what you received and restate the goal in one sentence. The learner sees the rules are built on their brief.
2. Write the how-to-play card: a one-sentence goal and two to four steps that name the real controls (tap or click; Tab then Enter or Space). Nothing advances while the card is open.
3. Write the state table: one row per state, with what the player sees and the one action allowed and its result. For Alien Tic-Tac-Toe: Instructions; Choose a cell; Choose a response; Exchange feedback; Battle finished, board continues; Board finished; and a row for Restart game, available in every active state, which clears the board, pending cell, health, exchange, and feedback at once.
4. Write the numbers: health starts at 2 each; exactly one side loses exactly 1 per accepted response; one response accepted per exchange, then responses lock; Next exchange appears only while both sides have health; at zero the battle ends at once; the pending cell is filled exactly once; lines are checked before a full-board draw; no automatic opponent move. Moves in the fixed order Laser, Shield, Claw (or the theme's names), countered by Shield, Blast, Dodge.
5. Write what resets: Play again clears the whole board; Return to board only dismisses the summary and places nothing; reopening help preserves everything.
6. Write the test cases as a table a partner can follow: presses, with Next exchange between them, and the expected health and outcome. Include win in two, lose in two, win on the third, lose on the third, and a repeated press before Next exchange.
7. Return game-rules.md in full and hand back. Say: "If a rule here surprises you, change it now, before code. Then vc-game-build builds the board first, the battle second, and connects them third. The checkpoints in examples/alien-tic-tac-toe/ follow these rules if you need one."

## Rules

- Never invent a mechanic the brief does not have. Rules describe the agreed game, smaller if anything.
- Always keep the board locked during a battle and reject occupied cells. One battle, one cell.
- Never let one click do two things. The answer click never advances the exchange; Next exchange does.
- Always define Restart game for every active state. There is no cancel-one-battle option.
- If asked to build or change the theme, say the rules come first and name vc-game-build or vc-game-brief.

## Example

**Learner:** "Here is my cats-dogs game brief. Write the rules and the state table."

**You:** "Received: game-brief.md (cats-dogs theme) and docs/alien-tic-tac-toe.md. Goal: claim three squares in a line by winning cat-versus-dog battles.

game-rules.md

How to play: Choose an empty square. The dog shows a move; press its counter: Bark → Hiss, Pounce → Climb, Slobber → Shake Off. Win the battle to claim the square. Tap, click, or Tab then Enter.

| State | Player sees | Allowed action and result |
| --- | --- | --- |
| Instructions | Goal, counter table, Start | Start opens the empty board. |
| Choose a cell | Board, 'Choose an empty square' | One empty cell starts a battle and locks the board. |
| Choose a response | Pending cell, You 2 of 2, Dog 2 of 2, the dog's move | One response: correct, dog loses 1; wrong, you lose 1. Responses lock. |
| Exchange feedback | 'Hiss counters Bark. Dog loses 1.' | Next exchange, only while both have health. At zero, the battle ends now. |
| Battle finished, board continues | The square filled once, summary | Return to board unlocks empty cells; places nothing. |
| Board finished | Final board, line or draw | Play again clears everything. |
| Any active state | Restart game | Clears board, pending cell, health, exchange, feedback; back to Choose a cell. |

Numbers: 2 health each; one point per accepted response; moves in order Bark, Pounce, Slobber, starting at Bark every battle; no extra dog turn; lines checked before draw.

Resets: Play again, whole board. Return to board, nothing. Help reopened, nothing changes.

Tests (press Next exchange between responses)
| Press | Expect |
| --- | --- |
| Hiss, Climb | Win at exchange 2; You 2, Dog 0; one cat in the chosen square |
| Climb, Hiss | Loss at exchange 2; You 0, Dog 2; one dog in the square |
| Hiss, Hiss, Shake Off | Win at exchange 3; You 1, Dog 0 |
| Climb, Climb, Climb | Loss at exchange 3; You 0, Dog 1 |
| Hiss, then Hiss again before Next exchange | Dog stays at 1; still exchange 1 |

If a rule here surprises you, change it now, before code. Then vc-game-build builds the board first, the battle second, and connects them third. The checkpoints in examples/alien-tic-tac-toe/ follow these rules if you need one."

## Checks that it worked

- A partner can read Start, choose a cell, battle, mark, continue or result, restart off the table without asking.
- The numbers match docs/alien-tic-tac-toe.md: 2 health, one response per exchange, Next exchange, one cell per battle, Restart game in every active state.
- The five test cases name exact presses and exact expected health.
