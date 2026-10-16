# Make the tic-tac-toe game yours: icon sets, prompts, and wireframes

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is choosing a theme, continuing a build, or stuck. The rules live in [alien-tic-tac-toe.md](alien-tic-tac-toe.md) and do not change when the theme changes. Do not invent new mechanics while re-skinning.

The game is the same under every theme: choose a square, win or lose a short battle, claim the square, finish the board. What you choose is the **look**: who you are, who you are fighting, what the three attacks and three counters are called, and the colors.

A tested, complete version with all eight themes built in lives at [`examples/alien-tic-tac-toe/checkpoint-3-complete/`](../examples/alien-tic-tac-toe/). Open it, pick a theme, and play a round before you build your own. If you fall behind during class, download the checkpoint for the stage you are on and continue from there. See [stuck.md](stuck.md).

## 1. Choose an icon set

Every theme uses two emoji so nobody needs to download art, pay for an icon pack, or worry about licensing. Emoji render on every phone and laptop. Your chatbot can swap them in one edit.

| Theme id | You | Opponent | Opponent attacks (in order) | Your correct counters (in order) | Background · accent |
| --- | --- | --- | --- | --- | --- |
| `space-invasion` (default) | 🧑‍🚀 | 👽 alien | Laser · Shield · Claw | Shield · Blast · Dodge | `#0b1020` · `#7dd3fc` |
| `cats-dogs` | 🐱 | 🐶 dog | Bark · Pounce · Slobber | Hiss · Climb · Shake Off | `#1f1410` · `#fdba74` |
| `pizza-tacos` | 🍕 | 🌮 taco | Hot Sauce · Shell Crunch · Salsa Splash | Extra Cheese · Deep Dish · Pizza Box | `#2a0f0f` · `#fde047` |
| `robots-dinos` | 🤖 | 🦖 dino | Chomp · Tail Swipe · Roar | Steel Plate · Jump Jets · Mute Button | `#0f1f14` · `#86efac` |
| `ghosts-pumpkins` | 👻 | 🎃 pumpkin | Seed Spit · Vine Grab · Lantern Glow | Phase Out · Float Up · Shadow Cloak | `#140a1f` · `#fb923c` |
| `sun-moon` | ☀️ | 🌙 moon | Eclipse · Moonbeam · High Tide | Solar Flare · Sunrise · Heat Wave | `#101a33` · `#fde68a` |
| `wizards-dragons` | 🧙 | 🐉 dragon | Fire Breath · Wing Gust · Tail Whip | Ice Spell · Anchor Spell · Levitate | `#1a0f2a` · `#c4b5fd` |
| `coffee-donuts` | ☕ | 🍩 donut | Sprinkle Storm · Sugar Rush · Glaze Drip | Lid On · Espresso Shot · Steam Cloud | `#1c120c` · `#f9a8d4` |

The mechanics never change: three attacks, each with exactly one correct counter, one health point lost per exchange, two or three exchanges per battle. Renaming is the only thing a theme does. If a theme makes a rule unclear, pick a different name, not a different rule.

**Make your own.** Pick any two emoji that are easy to tell apart at a glance, name three attacks the opponent does and three counters that obviously beat them, and choose two or three colors. Write it down before you prompt. A theme that exists only in your head produces a game that changes every time you ask for a change.

| Field | Your answer |
| --- | --- |
| Theme id (lowercase, hyphens) | |
| You (emoji + name) | |
| Opponent (emoji + name) | |
| Attack 1 → counter 1 | |
| Attack 2 → counter 2 | |
| Attack 3 → counter 3 | |
| Background, accent, and text colors | |

Avoid pairs that look alike (🐱 and 🐯), pairs where one emoji is mostly the background color, and anything that only reads as "mine" versus "theirs" by color. Each board mark must also carry a visually hidden X or O label for screen readers; the checkpoint shows how.

## 2. Wireframe before you build

A wireframe is a boxes-and-labels sketch of a screen. It costs five minutes and saves an hour of "that's not what I meant." Draw the three screens on paper or in a text file, then paste them into the prompt. Low fidelity is the point; the chatbot should not match your handwriting, only your layout.

Printable versions: [game-instructions.svg](wireframes/game-instructions.svg), [game-board.svg](wireframes/game-board.svg), [game-battle.svg](wireframes/game-battle.svg).

**Screen 1: Instructions**

```
+--------------------------------------+
|  [Game title]                        |
|  One line: what you do.              |
|                                      |
|  Theme:  ( ) space-invasion   ( ) cats-dogs   |
|          ( ) ...     ( ) my own      |
|                                      |
|  How a battle works                  |
|  +----------+-----------+            |
|  | Attack   | Counter   |            |
|  | Laser    | Shield    |            |
|  | Shield   | Blast     |            |
|  | Claw     | Dodge     |            |
|  +----------+-----------+            |
|                                      |
|        [ Start game ]                |
+--------------------------------------+
```

**Screen 2: Board (choose a cell)**

```
+--------------------------------------+
|  [Title]            [ Restart game ] |
|  Status: Choose an empty square.     |
|                                      |
|      +-----+-----+-----+             |
|      | 🧑‍🚀 |     |  👽 |             |
|      +-----+-----+-----+             |
|      |     |  🧑‍🚀 |     |             |
|      +-----+-----+-----+             |
|      |     |     |     |             |
|      +-----+-----+-----+             |
|                                      |
|  (when finished)                     |
|  You won! / The aliens won / Draw    |
|        [ Play again ]                |
+--------------------------------------+
```

**Screen 3: Battle (for the selected cell)**

```
+--------------------------------------+
|  Battle for square 5  [Restart game] |
|                                      |
|  You: 2 of 2          Alien: 2 of 2  |
|                                      |
|  The alien uses: LASER               |
|                                      |
|  [ Shield ]  [ Blast ]  [ Dodge ]    |
|                                      |
|  Result line: Correct! Alien -1.     |
|        [ Next exchange ]             |
|                                      |
|  (when over)                         |
|  You won the battle. Square 5 is 🧑‍🚀 |
|        [ Return to board ]           |
+--------------------------------------+
```

Checklist for your sketch: every screen has a title, a status line in words, and one obvious next button. Health is written as text. Nothing depends on color alone. The board fits a phone held upright.

## 3. Prompts, one stage at a time

Use the seven [game skills](../game-skills-guide.md) in order. Replace the bracketed parts. Paste the matching wireframe under each prompt.

**Brief (vc-game-brief)**

> Write game-brief.md for a themed tic-tac-toe battle game using the rules in alien-tic-tac-toe.md exactly. Theme: I am [🐱 Cat], the opponent is [🐶 Dog]. The opponent's attacks are [Bark, Pounce, Slobber] and my correct counters are [Hiss, Climb, Shake Off], in that order. Colors: [dark brown background, peach accent, light text]. Rename only; do not change the health, exchange, or board rules. Give me observable completion checks. Do not build yet.

**Rules and states (vc-game-rules)**

> Using the brief, list every state the game can be in and what the player sees and can do in each. Use my three wireframes below as the screens. Confirm there is no automatic opponent move after a battle and that Restart game is available in every active state.

**Build increment 1, the board (vc-game-build)**

> Build only the board screen as one index.html with inline CSS and JavaScript and no external files. Cells show [🐱] for my marks and [🐶] for the opponent's, each with a visually hidden "X" or "O" label. For now, two buttons "Award to me" and "Award to opponent" stand in for the battle. Detect the eight lines, a draw, Play again, and Restart game. Return the complete file.

Checkpoint: three of your marks in a row shows "You won." Three opponent marks shows you lost. A full board with no line shows Draw. Compare with [checkpoint 1](../examples/alien-tic-tac-toe/checkpoint-1-board/).

**Build increment 2, the battle (vc-game-build)**

> Build the battle screen as its own index.html. Both sides start with 2 health shown as text. The opponent's attacks cycle [Bark → Pounce → Slobber]. One accepted answer per exchange; disable the answer buttons after I click; show an explicit Next exchange button only while both sides still have health; end immediately when either side reaches zero. Return the complete file.

Checkpoint: answering correctly twice ends the battle in two exchanges with no Next exchange button after the win. Compare with [checkpoint 2](../examples/alien-tic-tac-toe/checkpoint-2-battle/).

**Build increment 3, connect them (vc-game-build)**

> Connect the board and the battle into one index.html. Selecting an empty cell locks the board and starts a battle for that cell. A battle win places my mark, a loss places the opponent's mark, exactly once, then the board is evaluated. Add the instructions screen from my wireframe with the theme table. Keep Restart game available everywhere. Return the complete file.

Checkpoint: win three battles on squares 1, 2, and 3 and the game says you won. Restart in the middle of a battle gives an empty board and no battle. Compare with [checkpoint 3](../examples/alien-tic-tac-toe/checkpoint-3-complete/).

**Look and feel (vc-game-look-feel)**

> Apply my theme colors and make the board fit a 375 pixel wide phone. Buttons at least 44 pixels tall. Keep every status message in words. Do not change any rule.

**Feedback and playtest (vc-game-feedback, vc-game-playtest)**

> Watch me describe a partner's playtest: [what confused them]. Propose the single smallest change that fixes it. Change one thing, then tell me exactly how to re-test it.

## 4. Extensions, only after the basic loop works

Pick at most one during class. Each one is a separate increment with its own check.

- **Random attacks.** The opponent picks any attack each exchange instead of cycling. Check: over ten exchanges you see all three attacks.
- **Score across boards.** Count boards won and lost in the session. Check: Play again keeps the tally; Restart during a board does not count it.
- **Two themes at once.** Let the player choose the opponent separately from themselves. Check: the counter table updates to match.
- **Sound.** One short sound on win and one on loss, with a mute button. Check: muted stays muted after Play again.

Do not add accounts, leaderboards, a database, timers, or downloaded art in class. Write them in your project-state file under "later."
