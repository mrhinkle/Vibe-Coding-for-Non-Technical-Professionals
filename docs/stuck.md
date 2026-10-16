# Stuck? Start here

> **For an AI receiving only this lesson:** The learner is behind or blocked. Ask for the exact error or observation, the current file, and which stage they are on. Offer the matching checkpoint file as a way to continue; do not rebuild the whole project. Change one thing at a time and give one re-test per change.

If you're reading this, something isn't working and you're probably a little frustrated. That's fine. I get stuck doing this too, and I've been at it since my first company in '95. Nobody in the room ships two projects in a day without hitting a wall, so you're not behind, you're on schedule. The goal right now isn't to understand everything that went wrong. It's to get moving again in under five minutes.

## The five-minute rule

1. **Say what you see.** Write one sentence: "I clicked X, expected Y, saw Z." Paste the exact error text if there is one.
2. **Try the matching fix below.** Most problems are one of eight things.
3. **Still stuck? Jump to a checkpoint.** Download the tested file for your stage and continue from there. You lose nothing you can't redo later.
4. **Still stuck? Raise a hand** with the [help request template](../templates/help-request.md) filled in. Mark or a helper reads it in thirty seconds.

## Checkpoint ladder

Every checkpoint is one `index.html` that works when you double-click it. Download it, put it in your project folder, open it, and keep going from the next step. Record "continued from checkpoint N" in `project-state.md`; that is honest and it is fine.

| Where you are | Download this | Then continue with |
| --- | --- | --- |
| Website: nothing works yet | [personal-website/index.html](../examples/personal-website/index.html) | Replace Jordan Rivera's content with yours, section by section. [Walkthrough step 4](personal-website-walkthrough.md#4-build-the-first-version-30-minutes) |
| Website: content in, but the look is broken | Same file | Paste your text into the fresh file instead of fixing the broken one. |
| Website: looks fine, cannot publish | Your own file | Skip to [setup guide: recover from common setup failures](../setup-guide.md#recover-from-common-setup-failures). |
| Game: board does not detect wins | [checkpoint-1-board](../examples/alien-tic-tac-toe/checkpoint-1-board/index.html) | Build the battle next. [Variants step 3](tic-tac-toe-variants.md#3-prompts-one-stage-at-a-time) |
| Game: battle logic is wrong | [checkpoint-2-battle](../examples/alien-tic-tac-toe/checkpoint-2-battle/index.html) | Connect it to the board. |
| Game: board and battle will not connect | [checkpoint-3-complete](../examples/alien-tic-tac-toe/checkpoint-3-complete/index.html) | Pick your theme with `?theme=` and go straight to look-and-feel and playtest. |
| Game: everything works but it is 4:30 | checkpoint-3-complete | Change the theme, publish it, and record the rest as "later." |

Checkpoints are complete working games and sites. Using one isn't cheating, and it isn't giving up. Professionals start from working code every day; the smart move when you're stuck is to grab the thing that works and keep going. What you're here to learn is the loop: describe, plan, build, check, save, publish. You still learn it from a checkpoint.

## The eight usual suspects

| What you see | What it usually is | Do this |
| --- | --- | --- |
| The chatbot describes the change but returns no file, or a fragment | It forgot the rule | "Return the complete index.html file, every line, nothing omitted." |
| The page is blank or shows raw code | Saved as `.txt`, or pasted into the wrong place | Save as `index.html` with "All files" type. Open it from the folder, not the chat. |
| It worked, then a later change broke everything | The chatbot rewrote more than you asked | Go back to your last saved copy. Ask for one change. Add "Change nothing else." |
| The chatbot says it cannot read your repository or link | It cannot; only you can see it | Attach the file or paste its contents. Say which files you attached. |
| The chatbot invents jobs, dates, or features | It fills gaps with guesses | "Use only facts from my resume. Leave blanks blank. Do not invent." |
| Vercel shows 404 | The file is not at the root, or not named `index.html` | Check the repository: `index.html` at the top level, lowercase. |
| Vercel shows the old version | The new file was not saved to GitHub, or the deploy is still running | Refresh GitHub and look for your change. Wait one minute. Hard refresh (Shift and reload). |
| It is right on your laptop, wrong on your phone | Width or font assumptions | "Make it fit a 375 pixel wide screen with no sideways scrolling. Change nothing else." |

Thirty more, with exact steps, are in [troubleshooting.md](troubleshooting.md).

## Switching chats or chatbots without losing your place

Fill in [project-state.md](../templates/project-state.md), attach your current files, and start the new chat with its prompt. The new chat knows nothing about the old one; your file and your notes are the only memory.

## What to say when you ask for help

Not: "It doesn't work."

Yes: "I'm on game checkpoint 2. I click Shield when it shows Laser and the alien's health doesn't change. Here's the file and the exact message."

That second sentence gets you unstuck in one visit. And if you can't put it into words yet, raise your hand anyway. "I'm lost" is a complete sentence, and it's the one I'd most like to hear early rather than late.
