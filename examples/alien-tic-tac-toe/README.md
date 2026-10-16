# Alien Tic-Tac-Toe: reference build

This folder holds a working copy of the Alien Tic-Tac-Toe game from [docs/alien-tic-tac-toe.md](../../docs/alien-tic-tac-toe.md), built in the three steps the lesson uses. Each step is one `index.html` file. It opens from your computer with no install and runs on Vercel as a plain static file.

If you are stuck at a stage, download that stage's checkpoint and continue from it. You do not lose your place in the class.

| Stage in the lesson | Folder | What it is | If you are stuck here |
| --- | --- | --- | --- |
| 3. Build the board first | `checkpoint-1-board/` | The 3 by 3 board only. Choose an empty square, then press **Award to me (X)** or **Award to alien (O)**. These two test buttons stand in for the battle. Win, lose, and draw detection, **Play again**, and **Restart game** all work. | Download checkpoint 1 and go on to stage 4. |
| 4. Build and check the battle separately | `checkpoint-2-battle/` | The battle only, with no board. Laser, Shield, Claw in that order. Shield, Blast, Dodge are the counters. 2 health each, one response per exchange, **Next exchange**, **Fight again**. | Download checkpoint 2 and go on to stage 5. |
| 5 and 6. Connect and make it readable | `checkpoint-3-complete/` | The finished game: instructions, choose a square, battle, square awarded once, board checked, **Return to board** or **Play again**, **Restart game** during play, **How to play** during play, and a chooser with eight looks. | Download checkpoint 3. This is the file you publish. |

Each file has `<!-- CUSTOMIZE: ... -->` comments at the places meant for you to change. The rules live in named functions with a short comment saying which state each one handles.

## Open a checkpoint

1. Download the folder's `index.html` (or the whole folder).
2. Double-click `index.html`. It opens in your browser. Nothing else is needed.
3. To use a checkpoint as your own game, copy its `index.html` into your `my-first-game` folder and keep building from there.

## Put it in GitHub and on Vercel

Follow [Publish each project](../../setup-guide.md#publish-each-project) in the setup guide. Use the plain static settings it describes (framework **Other**, empty build command, repository root as output). Upload only `checkpoint-3-complete/index.html` as your game's `index.html`; keep the two prototype checkpoints out of the published game.

## The eight looks (themes) in checkpoint 3

Pick one on the instructions screen. The choice is saved in your browser and sent nowhere. Rules do not change between looks; only icons, names, and colors do. An instructor can link straight to one by adding `?theme=<id>` to the address, for example `index.html?theme=cats-dogs`.

| id | Name | You | Opponent | Opponent shows | Correct response |
| --- | --- | --- | --- | --- | --- |
| `space-invasion` (default) | Space Invasion | 🧑‍🚀 (X) | 👽 alien (O) | Laser, Shield, Claw | Shield, Blast, Dodge |
| `cats-dogs` | Cats vs Dogs | 🐱 | 🐶 dog | Bark, Pounce, Slobber | Hiss, Climb, Shake Off |
| `pizza-tacos` | Pizza vs Tacos | 🍕 | 🌮 taco | Hot Sauce, Shell Crunch, Salsa Splash | Extra Cheese, Deep Dish, Pizza Box |
| `robots-dinos` | Robots vs Dinos | 🤖 | 🦖 dino | Chomp, Tail Swipe, Roar | Steel Plate, Jump Jets, Mute Button |
| `ghosts-pumpkins` | Ghosts vs Pumpkins | 👻 | 🎃 pumpkin | Seed Spit, Vine Grab, Lantern Glow | Phase Out, Float Up, Shadow Cloak |
| `sun-moon` | Sun vs Moon | ☀️ | 🌙 moon | Eclipse, Moonbeam, High Tide | Solar Flare, Sunrise, Heat Wave |
| `wizards-dragons` | Wizards vs Dragons | 🧙 | 🐉 dragon | Fire Breath, Wing Gust, Tail Whip | Ice Spell, Anchor Spell, Levitate |
| `coffee-donuts` | Coffee vs Donuts | ☕ | 🍩 donut | Sprinkle Storm, Sugar Rush, Glaze Drip | Lid On, Espresso Shot, Steam Cloud |

The icons stand in for X and O on the board. Every icon also carries a hidden "X" or "O" label for screen readers, and the status text always says X or O in words. The themes are the `THEMES` list at the top of the script in `checkpoint-3-complete/index.html`. Add your own by copying one entry.

## Tests run on 2026-10-15

The checks were run in a real headless browser, not by reading the code. The script opens each checkpoint from disk (a `file://` address), clicks through it at a 375px phone width, and reports Passed or Failed for every check.

Environment: macOS, chromium 156.0.8078.4   Playwright 1.64.1   Node v26.7.0 (Playwright's cached Chromium headless shell; nothing was downloaded).

Command, run from this folder:

```
npx playwright --version      # confirms Playwright is available (printed Version 1.64.1)
node tests/run-checks.mjs
```

Observed result: `82 passed, 0 failed` (exit code 0). The suite was run twice more before this final run with the same result.

Keyboard checks use Tab, Shift+Tab, Enter, and Space. "Fits a 375px wide phone" means the page's scroll width was 375 or less. "At least 44px tall" was measured on every visible button.

### Checkpoint 1: board

| Check | Result |
| --- | --- |
| loads with 9 empty cells and a status line | Passed |
| selecting cell 1 shows 'pending' and locks the board | Passed |
| test buttons appear only while a cell is pending | Passed |
| clicking cell 2 while cell 1 is pending changes nothing | Passed |
| Award to me (X) puts exactly one X on the board | Passed |
| repeating the award or clicking the occupied cell changes nothing | Passed |
| X on 1-2-3 shows 'You won' | Passed |
| after the win no cell can be selected and Play again is shown | Passed |
| Play again gives 9 empty cells | Passed |
| O on 1-4-7 shows 'The aliens won' | Passed |
| full board X,O,X,X,O,O,O,X,X shows 'Draw' | Passed |
| last-cell X completing 1-5-9 is a win, not a draw | Passed |
| Restart game mid-game clears all 9 cells and the pending cell | Passed |
| after Restart, focus is on the status message | Passed |
| keyboard focus lands on cell 1 with a visible outline | Passed |
| Enter twice on a cell makes exactly one pending cell and awards nothing | Passed |
| focus moves to the status message (not a button) after selecting a cell | Passed |
| one Tab reaches Award to me (X) | Passed |
| Space twice on Award to me (X) places exactly one X | Passed |
| fits a 375px wide phone with no sideways scrolling | Passed |
| every visible button is at least 44px tall | Passed |
| no JavaScript errors | Passed |

### Checkpoint 2: battle

| Check | Result |
| --- | --- |
| starts at Laser with 2 health each | Passed |
| Shield vs Laser: alien drops to 1, responses disabled, Next exchange shown | Passed |
| repeating the response before Next exchange changes nothing | Passed |
| Next exchange shows Shield as exchange 2 | Passed |
| Shield, Blast: 'You won the battle' with You 2 of 2 and Alien 0 of 2 | Passed |
| no Next exchange after the terminal result; Fight again shown | Passed |
| Fight again resets to Laser with 2 health each | Passed |
| Dodge, Dodge: 'The alien won the battle' with You 0 of 2 and Alien 2 of 2 | Passed |
| no Next exchange after the player loses | Passed |
| third exchange shows Claw | Passed |
| Blast, Blast, Dodge: win at exchange 3 with You 1 of 2 and Alien 0 of 2 | Passed |
| Blast, Shield: loss at exchange 2 with You 0 of 2 and Alien 2 of 2 | Passed |
| Blast, Blast, Blast: loss at exchange 3 with You 0 of 2 and Alien 1 of 2 | Passed |
| fits a 375px wide phone with no sideways scrolling | Passed |
| no JavaScript errors | Passed |

### Checkpoint 3: complete game

| Check | Result |
| --- | --- |
| opens on the instructions screen with the board hidden | Passed |
| default theme is space-invasion | Passed |
| instructions list all 8 themes | Passed |
| Restart is not shown before Start | Passed |
| Start shows the empty board with the legend | Passed |
| after Start, focus is on the board status message | Passed |
| keyboard focus lands on cell 1 with a visible outline | Passed |
| Enter twice on cell 1 opens one battle with no damage; focus is on the attack message | Passed |
| one Tab reaches Shield | Passed |
| Enter twice on Shield is one damage event (Alien 1 of 2, You 2 of 2, exchange 1) | Passed |
| choosing cell 1 opens the battle with 2 health each at exchange 1 | Passed |
| default responses are Shield, Blast, Dodge | Passed |
| one response accepted; responses disabled; Next exchange shown | Passed |
| winning the battle places exactly one X and shows the summary | Passed |
| the placed icon carries a hidden 'X' label for screen readers | Passed |
| Return to board (pressed twice) places no second mark and adds no O | Passed |
| the occupied cell is disabled; 8 cells remain selectable | Passed |
| losing the battle places exactly one O (alien icon) on cell 2 | Passed |
| the O cell shows the alien icon with a hidden 'O' label | Passed |
| wrong answer costs the player 1 health | Passed |
| Restart mid-battle clears all 9 cells and returns to the board | Passed |
| the next battle starts fresh with 2 health each at exchange 1 | Passed |
| How to play during a battle shows instructions with Back to game and Restart | Passed |
| closing help returns to the same battle, unchanged | Passed |
| three won battles on 1, 2, 3 shows 'You won' with Play again | Passed |
| Restart is hidden once the board is finished (Play again replaces it) | Passed |
| Play again gives 9 empty cells and no battle | Passed |
| three lost battles on 1, 5, 9 shows 'The alien won' | Passed |
| choosing Cats vs Dogs sets data-theme on <html> | Passed |
| the counter table now shows the dog's attacks | Passed |
| the legend shows the cat and dog icons | Passed |
| battle uses the theme's attack and counter names | Passed |
| a won battle in the cat theme places the cat icon with hidden 'X' | Passed |
| the theme's color variables are applied | Passed |
| the chosen theme is remembered after reload (localStorage) | Passed |
| fits a 375px wide phone with no sideways scrolling | Passed |
| every visible button on the board screen is at least 44px tall | Passed |
| no JavaScript errors | Passed |
| ?theme=cats-dogs applies on load | Passed |
| ?theme= page has no JavaScript errors | Passed |
| an unknown ?theme falls back to space-invasion | Passed |
| all 8 themes have 3 attacks, 3 counters, two icons, a name, and 2+ colors | Passed |
| every theme plays a battle to a win with the first two counters | Passed |
| works when localStorage throws (battle won, one X placed) | Passed |
| theme can still change when storage throws | Passed |

### Not tested

- A real phone, or a real screen reader. Only the browser's accessibility labels were checked.
- A person playing without coaching (the lesson's two-minute partner test).
- The live Vercel deployment. The files are plain static HTML, but no deployment was made from this folder.
- Browsers other than Chromium.

### Reference used

While writing the checks I read the check list in Mark's companion repo, [describe-build-check-ship-companion/games/alien-tic-tac-toe](https://github.com/mrhinkle/describe-build-check-ship-companion/tree/main/games/alien-tic-tac-toe) (`check-results.md`). Its keyboard check ("Enter twice equals one action") exposed a focus bug in an early version of these files, which was fixed: after every action, focus now moves to the message that explains what happened, not to the next button, so a repeated key press cannot trigger a second action by accident. No code was copied from that repo.

## Known limits

- The alien always plays Laser, Shield, Claw in that order, as the lesson specifies. There is no random mode.
- There is no automatic opponent move. One battle fills one square. This is the rule, not a bug.
- You cannot cancel a single battle. Restart game clears the whole board.
- The theme choice is saved with `localStorage`. In a private window, or if storage is blocked, the game still works but forgets the choice when you close it.
- Emoji icons look different on each device and may be missing on very old systems. The hidden X and O labels and the status text still say who owns a square.
- No sound, timer, score history, accounts, or network calls. None are needed.
- Checkpoint 1's two award buttons are test controls. They are gone in checkpoint 3.
