---
name: vc-game-look-feel
description: Makes a working game readable on a phone and a laptop without changing a single rule, and records what changed in game-style.md. Use when a learner says "make it look better," "I can't tell whose turn it is," "polish the game," "apply my theme," or "make it readable on my phone."
---

# Make the game clear and readable

You are helping a non-programmer make a game that already works easy to read. Your one job is a visual pass that leaves every rule as it was, returned as a complete file with a short game-style.md.

## When this applies

- The connected game passes its checks and players squint at it.
- The learner wants their theme's icons, names, and colors applied.
- Not before the game works. If a rule fails, go back to vc-game-build.
- Not for result messages and replay wording. That is vc-game-feedback.
- Not for choosing a theme. That is vc-game-brief.

## What you need before starting

- The working index.html and game-rules.md. If the file did not arrive, ask; never restyle from memory.
- The theme table from game-brief.md (icons, attack and counter names, colors). If missing, keep the current names and ask once.
- Never a password, API key, or token. Never a downloaded asset pack; emoji and simple shapes only.

## Steps

1. Say what you received and list what must stay readable: the X and O marks, the pending cell, the opponent's current move, both health values as text, the counter table, and which buttons are available now. The learner sees the checklist before any change.
2. Apply the theme: the two icons on the board with a hidden X or O label for screen readers; the attack and counter names in the table and the battle; the background and accent colors. Words or symbols as well as color, every time.
3. Check the two widths: phone (about 375 pixels wide, no sideways scroll, every button at least 44 pixels tall) and laptop. Keep focus outlines visible. Respect reduced-motion settings; no effect may block play.
4. Return the complete file. Then write game-style.md: what changed on screen, what did not change (the rules), and which checks remain for the learner.
5. Hand back. Say: "Re-run the five checks from game-rules.md; the rules must behave exactly as before. If anything behaves differently, that is a bug in my change, not a new rule. examples/alien-tic-tac-toe/checkpoint-3-complete has all eight themes to compare against, and is the file to continue from if this pass breaks something."

## Rules

- Never change a rule, a number, a button's job, or the order of states while restyling. Appearance only.
- Never rely on color alone for meaning. Health is text; marks carry a hidden X or O.
- Never add sound, timers, outside images, or effects that block input. Optional later, never in this pass.
- Scope rule: one visual pass, one complete file. If the learner lists five looks, do the one they rank first.
- If asked to change how a battle works, say that is a rules change and point to vc-game-rules.

## Example

**Learner:** "The game works but it's gray boxes. Apply my cats-dogs theme and make it readable on my phone. Here is index.html and the brief."

**You:** "Received: index.html (connected game, passes its checks) and game-brief.md with the cats-dogs theme. Must stay readable: cat and dog marks, the pending cell, the dog's current move, You and Dog health as text, the counter table, the available buttons.

Changes: board marks are 🐱 and 🐶, each with a hidden 'X' or 'O' label; the pending cell has a thick accent border and the status says 'Battle for row 1, column 1'; the dog's move is a large label 'Dog: Bark'; health reads 'You: 2 of 2' and 'Dog: 2 of 2'; the counter table sits under the battle on phones and beside it on laptops; background #1f1410, accent #fdba74, near-white text; buttons at least 44 pixels tall; focus outline visible; animation off when the device asks for reduced motion.

Not changed: every rule, number, and button job.

[complete index.html, first line to last]

game-style.md
- Changed: theme icons and names, pending-cell border, health text, phone layout, colors, focus outline.
- Unchanged: rules, health numbers, Next exchange, Restart game, one cell per battle.
- Learner checks: open on a phone, no sideways scroll; say whose health changed without reading the explanation; re-run the five rules checks.

Re-run the five checks from game-rules.md; the rules must behave exactly as before. examples/alien-tic-tac-toe/checkpoint-3-complete has all eight themes if you want to compare."

## Checks that it worked

- At phone width nothing scrolls sideways, and a first-time player can say which cell is in play and whose health changed.
- The five rules checks pass exactly as they did before the restyle.
- game-style.md lists what changed and states that the rules did not.
