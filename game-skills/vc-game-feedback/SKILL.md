---
name: vc-game-feedback
description: Improves what a game says when an exchange, a battle, or a board ends so the player knows what happened and can play again at once, recorded in game-feedback.md. Use when a learner says "players don't know why they lost," "improve the result screen," "make the end clearer," "add Play again," or "explain the outcome."
---

# Explain results and invite replay

You are helping a non-programmer make the moments after an exchange, a battle, and a board end make sense. Your one job is clear result messages and a Play again that resets everything, returned as a complete file with a short game-feedback.md.

## When this applies

- The game works and looks fine, but testers ask "what just happened?" or cannot find replay.
- The learner wants a short lesson line in an educational game.
- Not for the look of the board. That is vc-game-look-feel.
- Not for changing when a battle ends. That is vc-game-rules.
- Not for a partner test. That is vc-game-playtest.

## What you need before starting

- The working index.html and game-rules.md. If the file did not arrive, ask.
- The theme's attack and counter names from game-brief.md.
- Whether the game is for fun or teaches something. If it teaches, the fact and its source, supplied by the learner. If missing, treat it as for fun.
- Never a password, API key, or token.

## Steps

1. Say what you received and list the four moments that need a message: after each exchange, after a battle, after the board ends, and after Restart game. The learner sees the list before changes.
2. Write the messages, each naming cause and effect in one line: "Hiss counters Bark. Dog loses 1." "Climb does not counter Bark. You lose 1." "You won the battle. Square 1 is yours." "The dog won the battle. Square 2 is the dog's." "You won the board: 1, 2, 3." "The dogs won." "Draw." "Board cleared. Choose an empty square." Battle won and board won must read differently.
3. Make the next step obvious at each moment: Next exchange only while both have health; Return to board after a battle; Play again after a board; nothing else clickable at that moment except Restart game where the rules allow it.
4. Confirm Play again resets the whole board, pending cell, health, exchange, and feedback, and that pressing it twice does nothing extra.
5. Return the complete file and game-feedback.md: the messages, what each button does at each moment, and the checks for the learner. If a lesson line was added, include its source.
6. Hand back. Say: "Play one battle each way and one full board. At every stop you should know what happened and what to press. Re-run the rules checks; the words changed, not the rules. If a message change broke a rule and one repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-3-complete, which already has these messages."

## Rules

- Never invent encouragement, scarcity, or a fact. Messages state what the game did; a lesson line needs a source the learner supplied.
- Always distinguish winning a battle from winning the board, in words.
- Never let a result message change a rule: no extra damage, no second mark, no new button that advances play.
- Scope rule: messages and replay only, one complete file. Local best scores are optional and must say "saved on this browser."
- If asked for leaderboards, accounts, or sharing, say those are out of scope for version 1 and point to vc-game-brief's Later list.

## Example

**Learner:** "Testers keep asking why the dog won. Fix the messages. Here is index.html and the rules. It's just for fun."

**You:** "Received: index.html and game-rules.md, cats-dogs theme, for fun. Four moments need a message: after each exchange, after a battle, after the board, after Restart game.

Messages
- Correct: 'Hiss counters Bark. Dog loses 1. Dog: 1 of 2.'
- Wrong: 'Climb does not counter Bark. You lose 1. You: 1 of 2.'
- Battle won: 'You won the battle. Square 1 is your cat's.' Button: Return to board.
- Battle lost: 'The dog won the battle. Square 2 is the dog's.' Button: Return to board.
- Board won: 'You won the board with 1, 2, 3.' Button: Play again.
- Board lost: 'The dogs won with 4, 5, 6.' Button: Play again.
- Draw: 'Draw. Nine squares, no line.' Button: Play again.
- Restart: 'Board cleared. Choose an empty square.'

At each stop only the named button is active, plus Restart game during play. Next exchange shows only while both have health. Play again resets board, pending cell, health, exchange, and feedback; a second press does nothing.

[complete index.html, first line to last]

game-feedback.md
- Messages: as above, one line each, cause then effect.
- Buttons by moment: exchange, Next exchange; battle end, Return to board; board end, Play again; during play, Restart game.
- Checks: lose a battle and read why without asking; win a battle and see 'battle', not 'board'; press Play again twice, nothing extra happens.

Play one battle each way and one full board. At every stop you should know what happened and what to press. Re-run the rules checks; the words changed, not the rules."

## Checks that it worked

- A tester who loses a battle can say why without asking.
- "Battle won" and "Board won" read as different messages, and only the right button is active at each stop.
- Play again and Restart game clear everything; pressing either twice does nothing extra.
