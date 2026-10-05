# Vibe Coding for Non-Technical Professionals

Draft instructor guide for six teaching hours. Students complete two projects using their preferred chatbot: first a simple website published on Vercel, then a small browser game. No programming experience is required. Lunch and breaks are additional to the 360 teaching minutes.

The website teaches the path from an idea to something another person can open. The game repeats that path while adding rules, changing state, controls, scoring, and playtesting. Each project has a small brief, working files, a test record, and its own repository and Vercel project.

## Use your favorite chatbot

Students may use Claude, ChatGPT, or another chatbot that can produce runnable project files. A direct GitHub connection is helpful, but it is not required to generate either project. The portable route is: describe the project, receive the files, open them in a browser, save them to GitHub, and import the repository into Vercel.

Use a connected coding workspace when the student's assistant supports one. For ordinary chat, paste or attach the relevant skill, request complete files, and use GitHub's browser upload workflow. Demonstrate one prepared route and supply the alternative setup sheet while students keep their preferred assistant. See the [setup guide](setup-guide.md).

## Six hour agenda

Elapsed times exclude breaks and lunch. Suggested pauses are after project 1, during the game build, and before the final playtest.

| Session | Elapsed | Minutes | Student result |
| --- | --- | ---: | --- |
| How software gets developed | 0:00–0:30 | 30 | Understand the simplified SDLC |
| GitHub Vercel and chatbot setup | 0:30–1:00 | 30 | Accounts and a verified file or repository workflow |
| Project 1 Create a simple website | 1:00–2:30 | 90 | Website built, checked, and published on Vercel |
| Tour the All Things AI Arcade | 2:30–2:45 | 15 | Choose a small game pattern |
| Define the game and its rules | 2:45–3:05 | 20 | Brief, controls, and win or loss rules |
| Build the first playable version | 3:05–4:10 | 65 | Start, play, result, and restart work |
| Add appearance and feedback | 4:10–4:40 | 30 | Clear visuals and useful player feedback |
| Playtest and tune | 4:40–5:20 | 40 | Partner feedback, fixes, and retest |
| Publish the game | 5:20–5:45 | 25 | Verified game URL or explicit blocker |
| Demonstrate and take it forward | 5:45–6:00 | 15 | Two-project handoff and next action |

Total: **360 minutes**. Allocation: 60 minutes of foundations, 90 for the website, 195 for the game including the tour, and 15 for demonstrations. Example day: 9:00–16:30 with three 15-minute breaks and a 45-minute lunch.

## The first 30 minutes

**Minutes 0–5:** Show a simple website and a short game. Ask who will use each and what they should be able to do. Introduce the software development lifecycle as a repeatable way to turn a need into working software and keep improving it.

**Minutes 5–10:** Explain that HTML supplies structure, CSS controls appearance, and JavaScript adds behavior. The browser reads files; hosting makes them available to other people. Show a heading in a file and on screen. Briefly explain a backend, database, and API; neither core project requires these extra services. AI helps create the software, but the finished projects do not need to call an AI model.

**Minutes 10–20:** Walk through the lifecycle using both projects.

| Stage | Business question | Evidence |
| --- | --- | --- |
| Discover | Who is this for and why will they use it? | User and purpose |
| Define | What must the first version do? | Brief and acceptance checks |
| Design and plan | What will the person see and do? | Page outline or game rules |
| Build | Can we make the smallest useful version? | Working files |
| Test | Does the behavior match the promise? | Observed results |
| Release | Which version are we making available? | Verified published URL |
| Maintain | What should change after people use it? | Small checked updates |

Explain that this is a loop. A game that feels unfair may need a rule change; a confusing website may need a clearer purpose. Saving versions happens throughout.

**Minutes 20–25:** Explain the tools. The chatbot helps draft and change files. Git tracks changes. GitHub stores the project and its history. Vercel hosts the deployed version. Explain repository as the project folder and history, commit as a named checkpoint, branch as a separate line of changes, and pull request as a proposed change for review. Show one small heading change and its difference from the earlier version.

**Minutes 25–30:** Ask students to place four actions in the lifecycle: choose the website's audience; describe what its button does; test game restart; publish a checked version. Ask whether a beautiful game with incorrect scoring is finished. Close with: **Describe the outcome, build in small steps, check the evidence, save progress.**

## Setup in 30 minutes

Send the [account prerequisites](setup-guide.md) before class. Use 10 minutes to demonstrate GitHub and Vercel, 15 minutes for learner checks, and 5 minutes for recovery or pairing. Create a learner-owned repository called `my-first-site` with a README. Verify either a connected coding workspace or the portable file-generation route.

Explain a skill as a reusable instruction sheet with an input, method, output, and way to check the result. Paste or attach it if native installation is unavailable. A connection badge does not prove that the assistant can edit files, run checks, or publish.

Limit individual setup troubleshooting to five minutes before using a prepared checkpoint or partner. Record the blocker and return to it later. Optional connector setup should not consume the project time.

## Project 1 Create a simple website in 90 minutes

Students choose a small topic: a personal introduction, an event, a hobby, a community group, or a fictional business. Require one page with a clear heading, two or three useful sections, an image or simple visual treatment, and a meaningful link or button.

**Define and outline for 15 minutes.** Use `vc-project-brief` and `vc-project-plan` to decide the audience, purpose, sections, style, and primary action. Save `project-brief.md` in this project's folder. Core checks: accurate content; correct main link or button destination; working navigation; usable phone layout; and a purpose another student can identify.

**Build and refine for 50 minutes.** Use `vc-build-small`. For the simplest portable route, request one complete `index.html` with styles included. If separate files are provided, preserve their names and relative paths. Open the actual files in a browser, then request one specific improvement at a time. Prompt pattern: “For this audience, make this specific change, preserve these working parts, and tell me how to check it.” Save a working checkpoint before substantial changes.

**Check and publish for 25 minutes.** Use `vc-quality-check` and `vc-publish-site`. Check the files, save them to GitHub, import the repository into Vercel, and verify the URL. Explain the exact publication before it happens: the first deployment is production. [Vercel environments](https://vercel.com/docs/deployments/environments)

Checkpoint: another student opens the URL and follows the main link. Save `test-report.md` and `release-record.md` in the website project. If hosting is blocked, retain the files and precise blocker without calling the site live.

## Project 2 Make a game

The seven game skills are new classroom adaptations derived from the [All Things AI Arcade](https://staging.allthingsai.org/arcade) and its shared build specification. They are not pre-existing game skill packages copied from the repository. See the [game skill guide](game-skills-guide.md) for the source map, prompts, and starter recipes.

**Tour and choose for 15 minutes.** Show a few Arcade examples and how their instructions, controls, and replay work. Prepare demonstration access before class; students should not need to complete the medallion hunt to start building. Offer [three choices](docs/game-options.md): Alien Tic-Tac-Toe (Mark’s new classroom idea), a five-question quiz inspired by the Arcade’s puzzle patterns, or a one-button space dodger inspired by Flappy Brains. Explain that the featured game is a solo variant: each selected square goes to X or O according to its alien battle, with no separate opponent move. Use the quiz when a learner needs the smallest scope. Students choose their own theme. AI Steroids and Super AI illustrate possibilities for later work.

**Define the game for 20 minutes.** Use `vc-game-brief` and `vc-game-rules`. Write the goal, main action, controls, score, result, restart behavior, and exclusions. Choose one short round and one central mechanic. A partner should be able to explain how to start, play, finish, and restart from the rules alone.

**Build a playable version for 65 minutes.** Use `vc-game-build`: about 10 minutes for a plain first draft, 40 for the complete play loop, and 15 for repairs. Start with simple shapes and text. Teach state as what the game remembers: started or not, score, movement or guesses, and whether the round is over. Define observable rules for each transition. For animated games, ask for motion that behaves consistently across devices and test that behavior. Checkpoint: a person completes a round and plays again.

**Add appearance and feedback for 30 minutes.** Use `vc-game-look-feel` and `vc-game-feedback`. Distinguish player, targets, and hazards; keep scores readable; explain the outcome; provide a prominent Play again button. Check instructions against actual keyboard and touch controls. Sound is optional, and understanding play must not depend on hearing it. An educational fact after play is optional: verify and cite it if included. A game may simply be fun.

**Playtest and tune for 40 minutes.** Use `vc-game-playtest`. Give a partner two minutes without coaching, then record confusion, control failures, unfair outcomes, scoring errors, and willingness to replay. Spend roughly 15 minutes fixing the biggest issue, 10 changing one difficulty setting, and the remaining time retesting. Test start, play, results, repeated restart, keyboard and phone controls, and reopening instructions. If local best scores exist, test refresh and storage failure. Use Passed, Failed, and Not tested honestly.

Use the Arcade's five perspectives as questions: Can the player understand it? Are rules fair? Is any lesson accurate? Is the screen readable? Does behavior match the implementation? A chatbot taking five roles is not five independent reviewers; the partner playtest supplies real first-time-player evidence.

**Publish for 25 minutes.** Use `vc-game-publish`. Create a separate `my-first-game` repository and Vercel project so the game cannot overwrite the website. Repeat the release process and check Start, one round, results, and Play again at the deployed URL on a second device where possible. Use standalone results and optional browser-local scores; do not connect students to ATA scoring, registration, or newsletter services. Record the URL, version, and observations in `game-release.md`.

## Final 15 minutes

Use paired demonstrations. Each student shows the website, plays the game, explains one rule or fix, and identifies the saved versions. Use `vc-project-handoff` to record both projects, tests, limitations, ownership, and the next improvement. Students finish with two URLs or working files and recorded deployment blockers.

Explain how later changes can use a branch, preview, review, and release. Deeper maintenance and recovery practice become follow-on exercises rather than a third project today.

## Instructor preparation and limits

Rehearse both complete projects on each offered chatbot route. Prepare a tested website checkpoint and a playable checkpoint for each offered game recipe. Preflight account access, file download or copy, GitHub upload, Vercel import, and classroom network. This draft contains instructions and skills; the starter applications and revised slide deck have not been built in this revision.

Confirm hosting before sending prerequisites. Vercel Hobby is for noncommercial personal use; a real business website may require another plan. [Vercel fair use](https://vercel.com/docs/limits/fair-use-guidelines)

The live Arcade, beta guide, and Promptle introduction and controls were inspected on October 5, 2026. Related staging source was read at `922e7b02976da376dab61e8e49e5a1ae7e5dd27b`. That supports the skill derivation; it does not establish that every game was played to completion or that the deployed build exactly matches that branch commit. The website and Arcade source repositories and the staging site were not changed while adapting this class. The existing presentation files are preserved as reference in this class repository.

## Materials

- [Account and connection guide](setup-guide.md)
- [Website and lifecycle skills](skill-guide.md)
- [Game skills and starter recipes](game-skills-guide.md)
- [Instructor source map](repository-map.md)

- [Student workbook](handouts/student-workbook.md)
- [Instructor preflight](instructor/preflight.md)
- [Presentation reference and adaptation plan](presentations/README.md)

During the existing wrap-up, invite proud creators to complete the [Arcade submission](docs/arcade-submission.md). This is optional and adds no core teaching minutes. Mark/ATA review candidates before any Arcade integration. Rehearse the board-and-battle combination before offering it live; the walkthrough is a design specification, not a tested starter.
