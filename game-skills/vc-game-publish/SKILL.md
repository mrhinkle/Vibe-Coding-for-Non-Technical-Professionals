---
name: vc-game-publish
description: Guides a non-programmer through putting a tested game in its own GitHub repository and Vercel project, verifying a full round at the live address, and writing game-release.md. Use when a learner says "publish my game," "put the game on Vercel," "make the game live," "give me the game link," or "ship the game."
---

# Publish and hand off the game

You are helping a non-programmer put a game that passed its playtest at a public address, separate from their website. Your one job is a verified live URL where a full round and a restart work, and a game-release.md that records it.

## When this applies

- game-test-report.md shows the rules checks passed on the exact file to publish.
- The learner has a second repository (my-first-game) and will create a second Vercel project.
- Not for testing. That is vc-game-playtest; publish only after it.
- Not for fixing. That is vc-game-build, one change, then re-test.
- Not for the website. That is vc-publish-site.
- Not for Arcade submission. That is docs/arcade-submission.md, a separate step after this one.

## What you need before starting

- The exact complete index.html to publish and its version name. Only the connected game; prototype folders and temporary test buttons stay out.
- game-test-report.md for that version. If missing, stop and point to vc-game-playtest.
- The game repository name and the Vercel account. If the repository does not exist yet, create it first (setup-guide.md).
- Never a password, API key, or token. The learner signs in on GitHub's and Vercel's own pages.

## Steps

1. Say what you received and show the publication card: repository my-first-game, branch, index.html at the root, version name, Vercel account, "this is production, public." The learner reads it before anything is uploaded.
2. GitHub: in my-first-game, Add file, Upload files, choose only the final index.html, one-line commit message, commit. Check: index.html at the repository root on github.com; no prototype folders.
3. Vercel: Add New Project, import my-first-game (a new project, not the website's). Framework preset Other; Build command override on, left empty; output the repository root. Deploy. Check: Ready, and a URL ending in .vercel.app.
4. Live round at that URL, on a phone if possible: Start; win one battle in two (one mark, no extra mark); lose one battle (one mark); press a response twice fast (one damage); finish a board to a result; Play again (nine empty cells); Restart game during a battle (all clear, next battle at 2 and 2). Write what was seen.
5. Write game-release.md: URL, repository and commit, version, date, the live checks and results, limits (fixed move order, no sound, no scores), recovery ("redeploy commit [name]; examples/alien-tic-tac-toe/checkpoint-3-complete is a known good file"). Return it in full.
6. Hand back. Say: "Paste the URL and game-release.md into project-state.md. Have a partner open the URL on their own phone and play one round. If you want the Arcade, read docs/arcade-submission.md next; publishing here does not submit it."

## Rules

- Never publish an untested version, a prototype, or a file with test buttons still in it.
- Never put the game in the website's repository or Vercel project. Two projects, two URLs.
- Never call the first deployment a preview; it is production and public. Never buy a plan or change account settings.
- Always separate what you did from what the learner reported. If you cannot open the URL, their phone is the evidence.
- If the deploy fails, take the first red line of the build log, make one focused repair, return the complete file, redeploy. If the learner is out of time, publish examples/alien-tic-tac-toe/checkpoint-3-complete with their theme and record the rest as Later.

## Example

**Learner:** "Game passed the playtest. Publish it. Repo my-first-game exists and is empty except a README."

**You:** "Received: index.html (version 'game-v1-tested', cats-dogs theme) and game-test-report.md, every row Passed or Not tested with a reason.

Publication card
- Repository: github.com/you/my-first-game, branch main
- File at root: index.html, the connected game only; no prototype folders, no Award buttons
- Vercel: a new project, separate from my-first-site
- This is production. Anyone with the link can play.

1. GitHub: open my-first-game, Add file, Upload files, drag index.html in, commit message 'Publish game v1', Commit changes. Tell me when it shows at the root.
2. Vercel: Add New Project, import my-first-game. Framework preset Other. Build and Output Settings: Build Command override on, empty. Deploy. Tell me the URL at Ready."

**Learner:** "my-first-game-xyz.vercel.app is Ready."

**You:** "On your phone, open it and run the live round: Start; choose square 1, Hiss, Next exchange, Climb (one cat, no dog); square 2, Climb, Next exchange, Hiss (one dog); square 3, press Hiss twice fast (dog stays at 1); finish any board result and press Play again (nine empty); start a battle, answer once, Restart game (all clear, next battle 2 and 2). Tell me each."

**Learner:** "All six as you said."

**You:** "game-release.md
- URL: https://my-first-game-xyz.vercel.app
- Source: github.com/you/my-first-game, commit 'Publish game v1', version game-v1-tested
- Date: today
- Live checks (your phone): win in two, one mark, Passed; lose, one mark, Passed; double press, one damage, Passed; board result and Play again, Passed; Restart game mid-battle, Passed. Keyboard: Not tested live.
- Limits: fixed move order; no sound; no scores; one theme.
- Recover: redeploy commit 'Publish game v1'; examples/alien-tic-tac-toe/checkpoint-3-complete is a known good file.

Paste the URL and this record into project-state.md. Have a partner play one round on their own phone. The Arcade is a separate step: docs/arcade-submission.md."

## Checks that it worked

- A full round, Play again, and Restart game during a battle work at the .vercel.app URL on a device other than the learner's laptop.
- The game repository holds only the final index.html (and README), with no prototype folders or test buttons.
- game-release.md names the URL, the commit, which checks ran live, and the recovery file.
