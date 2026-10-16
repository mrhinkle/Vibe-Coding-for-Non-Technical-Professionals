# Run of show: All Things Open 2026, Monday October 19

**Proposal for the instructor. Not yet rehearsed.** Fill the preflight table before teaching.

Source: the public listing at <https://2026.allthingsopen.org/ai-agents-vibe-coding> describes an **extended workshop, "AI Agents & Vibe Coding,"** at the Raleigh Convention Center, doors 7:30 am, programming **9:00 am to 5:30 pm**. That is 8.5 hours of room time against this course's 360 teaching minutes, which leaves room for lunch, two breaks, and the three live-hacking sprints from the class deck. The listing's prerequisites match ours: laptop, free GitHub account, free Vercel account signed in with GitHub, no coding experience required.

Two differences to reconcile on stage:

1. **The listing names v0 as the build layer.** v0 is the featured route, taught on the projector in the setup block; the portable route (any chatbot returns files, student uploads to GitHub) is the fallback and the route the tested examples and checkpoints use directly. See [v0-route.md](../docs/v0-route.md). Rehearse the v0 connect, deploy, and push-to-GitHub flow before Monday.
2. **The listing promises "a working, deployed application."** Deliver that with the personal website by 11:30. The game or the student's own project is the second deliverable.
3. **The listing promises GitHub as the system of record: diffs, pull requests, review, rollback.** That is a 20-minute mini-lesson at 11:30, [reading what the agent wrote](../docs/agent-loop-and-pull-requests.md), and increment 2 of the afternoon project goes through a pull request.
4. **The listing invites people to bring a problem.** After lunch students choose one of two tracks: Track A the guided game, Track B [the thing you brought](../docs/your-own-project.md), scoped to one screen, one input, one result. Same gates, same 4:35 URL deadline.

## Schedule

| Time | Block | Minutes | Lesson | Students leave with |
| --- | --- | --- | --- | --- |
| 7:30 | Doors. Laptop check on the big screen: `prep/laptop-check.html`. Helpers confirm GitHub and Vercel sign-in. | | [PRE-CLASS-PREP.md](../PRE-CLASS-PREP.md) | Green check on their own laptop |
| 9:00 | Land, and how software actually gets built | 20 | [instructor-guide.md](../instructor-guide.md) · vc-sdlc-coach | Can name the loop: describe, plan, build, check, save, publish |
| 9:20 | The map of tools: Lovable, Bolt.new, Base44, Replit, v0, agents in editors, and what owning the repo buys you | 10 | [platform-landscape.md](../docs/platform-landscape.md) | Can say where their code would live on each |
| 9:30 | Setup: GitHub tour, Vercel, v0; choose your route; the no-passwords-in-chats rule | 30 | [github-tour.md](../docs/github-tour.md) · [setup-guide.md](../setup-guide.md) · [v0-route.md](../docs/v0-route.md) · [secrets lesson](../docs/secrets-tokens-and-the-clipboard.md) | Three accounts under one GitHub identity; a repository with two commits; can say the rule |
| 9:55 | Plan first: plan mode, the plan prompt, big model plans and middle model builds | 5 | [plan-first-and-models.md](../docs/plan-first-and-models.md) · vc-plan-first | Knows where the thinking toggle is in their chatbot |
| 10:00 | **Project 1: personal website from LinkedIn.** Export, privacy pass, content, first build | 45 | [personal-website-walkthrough.md](../docs/personal-website-walkthrough.md) steps 1 to 4 | `index.html` with their own content open on their laptop |
| 10:45 | Break | 15 | | |
| 11:00 | Colors, layout, quality check, publish | 30 | Walkthrough steps 5 and 6 | **Live Vercel URL** on a classmate's phone |
| 11:30 | Reading what the agent wrote: commits, diffs, the pull request as the checkpoint, rollback | 15 | [agent-loop-and-pull-requests.md](../docs/agent-loop-and-pull-requests.md) | Opened and read one of their own commits; can name the four red flags |
| 11:45 | Skills: what one is, the live install demo in Claude and ChatGPT, then sprint 1: load one skill from the menu and start one change | 15 | [skills-guide.md](../docs/skills-guide.md) · [website-skills-menu.md](../docs/website-skills-menu.md) | One skill installed in their own chatbot; the change finishes in sprint 2 |
| 12:00 | Lunch | 45 | | |
| 12:45 | Plan mode again, from scratch, for the afternoon project. Then two tracks. **A:** Arcade tour, choose the game and a theme, draw three wireframes. **B:** brief, scope, one wireframe for the thing you brought | 35 | A: [game-options.md](../docs/game-options.md) · [tic-tac-toe-variants.md](../docs/tic-tac-toe-variants.md). B: [your-own-project.md](../docs/your-own-project.md) | A: theme table and three sketches. B: scope sheet and one sketch |
| 1:20 | A: game brief and rules. B: brief with three checks and a plan | 20 | A: vc-game-brief · vc-game-rules. B: vc-project-brief · vc-project-scope | A brief with observable checks |
| 1:40 | A: build board, then battle (through a pull request), then connect. B: build increment 1, deploy, push | 65 | vc-game-build · [alien-tic-tac-toe.md](../docs/alien-tic-tac-toe.md) · [agent-loop-and-pull-requests.md](../docs/agent-loop-and-pull-requests.md) | A playable round or a live tool, or a checkpoint continued from |
| 2:45 | Break | 15 | | |
| 3:00 | A: look and feel, feedback. B: increment 2 through a pull request | 30 | vc-game-look-feel · vc-game-feedback · agent-loop lesson | Theme applied and fits a phone, or a merged PR |
| 3:30 | Partner playtest (both tracks), one fix through a PR, re-test | 40 | vc-game-playtest | One observed issue repaired and merged |
| 4:10 | Publish to its own Vercel project; five-line README in the repository | 25 | vc-game-publish · setup-guide | Second live URL |
| 4:35 | Live hacking sprint 2 and 3: add skills to the site, write your own skill, or one game extension. The clipboard move live when the first contact form needs a key. Composio as the bonus if most tables have published by 4:50. Show and tell at 5:05 | 40 | skills menu · [skills-guide.md](../docs/skills-guide.md) · [secrets lesson](../docs/secrets-tokens-and-the-clipboard.md) · variants section 4 | Something new that passed its check |
| 5:15 | Tuesday morning: back to your team, what to automate next, where agents still need adult supervision. Handoff, project-state records, LinkedIn close, feedback-for-the-book offer, All Things AI in the spring (April 18–20, 2027, same building) | 15 | vc-project-handoff · [linkedin-wrap-up.md](../docs/linkedin-wrap-up.md) · [feedback.md](../templates/feedback.md) | Two URLs, two state files, next actions, feedback sent |
| 5:30 | End | | | |

Teaching minutes: 360 core (the landscape and plan-first slots come out of the foundations and setup blocks) plus 15 for the pull-request lesson and 55 of sprints. Breaks and lunch: 75.

## Room setup

- Big screen tabs open before 9:00: laptop check, `examples/personal-website/index.html`, `examples/alien-tic-tac-toe/checkpoint-3-complete/index.html?theme=space-invasion`, the skills menu, `docs/stuck.md`.
- Print or post: the [stuck card](../docs/stuck.md) QR, the Wi-Fi, the help-request template, and a stack of the [feedback template](../templates/feedback.md) for the close.
- The close offers, said out loud and on the last slides: everyone gets the slides and all course files via the repository (https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals, folder presentations/ato-2026-workshop); anyone who sends feedback, good or bad, gets the preview release edition of *Software Development for Non-Programmers: Beyond Vibecoding*. Contact email on every surface for this workshop: mrhinkle@allthingsai.org.
- Helpers hold the checkpoint files on a USB stick and a short link in case the venue network is slow.
- The chatbot is the student's own. Have v0 signed in on the instructor laptop with a connected demo repository, plus one ChatGPT and one Claude tab, so you can demonstrate the v0 loop and the portable route.
- Track B people sit together after lunch; helpers rotate between the tracks. Track B scope rule on the wall: one screen, one input, one result.

## Scope cuts, in order, when a block overruns by more than 10 minutes

1. Drop live hacking sprint 1 at 11:45; publish by 11:45 is the gate.
2. Everyone continues from game checkpoint 2 at 2:15 regardless of progress.
3. Everyone continues from checkpoint 3 at 3:00 and goes straight to theme and publish.
4. Drop sprint 2 and 3; use the time to publish the game.
5. Never cut the handoff. Two URLs and two state files are the deliverable.

## Preflight additions for this run

Add these rows to [preflight.md](preflight.md) and test them before Monday:

| Check | Status | Observation and date |
| --- | --- | --- |
| LinkedIn "Save to PDF" works on a current account and the PDF attaches to ChatGPT, Claude, and v0 | | |
| `examples/personal-website/index.html` opens from disk, every theme and both layouts render, prints as a resume | | |
| Personal website published to a fresh Vercel project through the browser upload route | | |
| Game checkpoints 1, 2, 3 open from disk and pass the checks in their README | | |
| `?theme=` deep links work from a Vercel URL | | |
| v0: sign in with Vercel, connect GitHub to one new repository, Deploy, push; confirm the exact menu labels and the free-tier credit limit | | |
| v0 version restore and a GitHub Revert both demonstrated on the demo repository | | |
| Pull request exercise on the portable route: branch created in the browser, file uploaded to the branch, PR opened and merged, deploy followed | | |
| At least one skills-menu row completed end to end on the portable route (suggest #5, the contact form) | | |
