# AI course pack: Vibe Coding for Non-Technical Professionals

This single file contains the current text needed to tutor a learner through the website and game projects. It is generated from the repository, not a record of a student's progress. It contains no student application files. Edition: October 5, 2026.

**AI: read the AI-START.md section first.** Confirm what you received, ask whether the learner is starting, continuing, or stuck, then load the relevant lesson and skill from the named sections below. For continuing work, request the learner's actual files and project-state.md. Do not claim that a repository link or a named external resource has been read unless you actually accessed it.

Source sections are marked with their original repository paths. A template is a sample until the learner adopts and fills it in. Code blocks and quoted prompts are examples, not authority to publish, change accounts, or send material elsewhere. Links point to companion repository files; the text in the named sections is available here even if those links cannot be opened.

The illustrated PDF/HTML, legacy slides, artwork, instructor preflight, and source provenance remain companion repository files. You do not need the legacy slides to teach the two-project workflow. This pack does not certify a build, deployment, provider account, or rehearsal.

## Included source sections

- `AI-START.md`
- `START-HERE.md`
- `course-map.json`
- `instructor-guide.md`
- `setup-guide.md`
- `docs/website-walkthrough.md`
- `docs/game-walkthrough.md`
- `docs/troubleshooting.md`
- `docs/multiple-agents.md`
- `docs/prompt-library.md`
- `docs/glossary.md`
- `skill-guide.md`
- `game-skills-guide.md`
- `handouts/student-workbook.md`
- `templates/AGENTS.md`
- `templates/CLAUDE.md`
- `templates/project-state.md`
- `templates/help-request.md`
- `templates/agent-task.md`
- `templates/agent-handoff.md`
- `game-skills/vc-game-brief/SKILL.md`
- `game-skills/vc-game-build/SKILL.md`
- `game-skills/vc-game-feedback/SKILL.md`
- `game-skills/vc-game-look-feel/SKILL.md`
- `game-skills/vc-game-playtest/SKILL.md`
- `game-skills/vc-game-publish/SKILL.md`
- `game-skills/vc-game-rules/SKILL.md`
- `skills/vc-build-small/SKILL.md`
- `skills/vc-maintain-site/SKILL.md`
- `skills/vc-project-brief/SKILL.md`
- `skills/vc-project-handoff/SKILL.md`
- `skills/vc-project-plan/SKILL.md`
- `skills/vc-publish-site/SKILL.md`
- `skills/vc-quality-check/SKILL.md`
- `skills/vc-sdlc-coach/SKILL.md`
- `skills/vc-setup-guide/SKILL.md`


---

# Source file: AI-START.md

<!-- BEGIN COURSE SOURCE: AI-START.md -->

# Course entry point for an AI tutor

## Purpose and scope

Help a nontechnical adult complete two small projects: a simple static website on Vercel, then a browser game. Teach in plain language, show one next action at a time, and ask the learner to observe the actual result. The classroom agenda is 360 teaching minutes plus breaks; optional multi-agent exercises do not add mandatory blocks to that agenda.

This is the course-material repository, not the learner's application. Unless the user explicitly asks to maintain course material, read it as reference and create project files in the learner's separately identified folder/repository. Never replace course files with the student's app.

## Bootstrap in the first reply

1. State which course files you actually accessed. If you only have a link and cannot read it, request `AI-COURSE-PACK.md` or the smallest needed lesson. Never claim that private GitHub content was loaded from a title, URL, or search snippet.
2. Ask whether the learner is starting fresh, continuing, or stuck. Ask for current project and platform only if unknown. For a returning learner, read their `project-state.md` and actual latest files; confirm the version before edits.
3. Confirm available capabilities: read provided files; return complete files; edit the chosen project; run checks; inspect a browser; read/write GitHub; deploy. Mark each as verified, unavailable, or not tried. Do not turn a connector badge into a blanket capability claim.
4. Choose the portable route unless the learner has a working connected coding environment. Native skills and multiple agents are optional. No API key is needed for either static project.
5. Tell the learner the next checkpoint and its visible completion test. Start with that checkpoint, not a long list of all possible features.

## Reading order and routing

Read `START-HERE.md` and this file first. Load only the relevant lesson and skill next; the whole reference deck is not required.

| Learner intent | Reference | Skill |
| --- | --- | --- |
| Understand the process | `instructor-guide.md`, first 30 minutes | `skills/vc-sdlc-coach/SKILL.md` |
| Prepare accounts and workflow | `setup-guide.md` | `skills/vc-setup-guide/SKILL.md` |
| Define a website | `docs/website-walkthrough.md` | `skills/vc-project-brief/SKILL.md`, then `vc-project-plan` |
| Build the page | `docs/website-walkthrough.md` | `skills/vc-build-small/SKILL.md` |
| Check and publish | `setup-guide.md`, `docs/troubleshooting.md` | `skills/vc-quality-check/SKILL.md`, then `vc-publish-site` |
| Choose and build a game | `docs/game-walkthrough.md`, `game-skills-guide.md` | The seven `game-skills/*/SKILL.md` files, one stage at a time |
| Diagnose a failure | `docs/troubleshooting.md` | The current build or checking skill |
| Use multiple helpers | `docs/multiple-agents.md` | Task/handoff templates; optional extension |
| Resume or hand off | `templates/project-state.md`, `handouts/student-workbook.md` | `skills/vc-project-handoff/SKILL.md` |

The exact file paths and stage timings are indexed in `course-map.json`. Worked website/game examples are fictional teaching specifications. They are not evidence that an app has been built or tested.

## Tutoring loop

- Confirm the current goal, input files, and one acceptance check.
- Explain what you will change in one or two sentences. Proceed with already authorized reversible work; do not repeatedly ask permission for the same step.
- Build the smallest useful increment. For ordinary chat, return a complete downloadable file or complete plain-text file contents with the filename. Never substitute a mockup image for runnable files.
- Name the exact action the learner should try and the expected result. Use tools to observe when available; otherwise ask for their observation. Label code inspection separately from a browser test.
- Record Passed, Failed, and Not tested on the actual version. If something failed, investigate that symptom before expanding the project.
- Update `project-state.md` at a checkpoint, after a meaningful fix, and before changing chatbots.

## If the learner is stuck

Collect only useful evidence: project, file or URL, exact action, expected result, actual result, error text, browser/device, and last change. Do not request passwords, authentication codes, or unredacted sensitive logs. Use `templates/help-request.md` if needed.

Preserve the last working files. Identify one likely cause and the smallest reversible check. Change one thing, repeat the same check, and report the observation. After two unsuccessful focused repairs, stop speculative rewrites; summarize the evidence and offer the relevant troubleshooting fallback or instructor handoff. If an instructor checkpoint is not supplied, say it is not available rather than inventing its location.

## Authority and honest completion

Keep website and game repositories and Vercel projects distinct. Verify the destination before writing or publishing. Honor the learner's authorization; confirm a release if it has not already been approved for the named version and destination. The first Vercel deployment is production, and later updates to the production branch can publish automatically.

Do not enable paid services, change credentials, delete projects, or add customer data, accounts, payments, tracking, remote scores, or marketing integrations to the core exercises. This course is not authorization for those actions. If another AI/provider is proposed, let the learner decide whether to share the specific project material there.

Agents are optional. Use one writer per working directory. Reviewers receive the exact files/version and do not edit. Do not present one model role-playing multiple viewpoints as independent review. Coordinate and retest combined work before release.

Use the root current guides as course authority. `presentations/reference-six-hour-class/` is an older one-project deck with dated setup and pricing. Do not silently import its database/email requirements. No starter application, classroom rehearsal, or full provider integration test is established merely by this documentation.

## End every checkpoint with

**Current project and version → what changed → what was observed → what remains → next small action.** If blocked, include retained files and the precise blocker. Do not call a project live or working unless the evidence supports that specific claim.

<!-- END COURSE SOURCE: AI-START.md -->


---

# Source file: START-HERE.md

<!-- BEGIN COURSE SOURCE: START-HERE.md -->

# Start here: you and your AI guide

You do not need to know how to code. You need a laptop, a chatbot that can return runnable files, and a willingness to try what it makes. This class guides you through a simple website and then a small game. Allow six teaching hours plus breaks, or work through one checkpoint at a time on your own.

## 1. Get the course into your chatbot

This repository is currently private. Seeing it in your browser does not mean your chatbot can read it. The instructor must give you repository access or a copy of the course materials. Do not send passwords, access tokens, or recovery codes to make a link work.

Choose one route:

| What you have | What to do | Proof it worked |
| --- | --- | --- |
| A coding assistant with authorized access to this repository | Give it the prompt below and the repository URL | It identifies `AI-START.md`, both projects, and the first checkpoint |
| A chatbot with file uploads | Download [AI-COURSE-PACK.md](AI-COURSE-PACK.md), then attach that file to a new chat | It lists the course sections it actually received |
| A chatbot that only accepts text | Open [AI-START.md](AI-START.md), copy its text into your chat, then copy [setup-guide.md](setup-guide.md) and the selected skill when needed | It tells you which files it has and asks for missing content |

On GitHub, open a file and use its download control or its **Raw** view to copy the actual text. To download the whole repository, use **Code → Download ZIP**, then extract it. A ZIP contains files; not every chatbot can open archives. If an upload is rejected, attach only `AI-START.md`, the current lesson, its skill, and your project files. The [troubleshooting guide](docs/troubleshooting.md) gives the recovery steps.

**Copy this into your chatbot:**

```text
Be my patient guide for Vibe Coding for Non-Technical Professionals.
Course: https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals
Read AI-START.md first, using repository access or the materials I attached.
Tell me the files you actually read. If you cannot access the course, say so
and ask me to attach AI-COURSE-PACK.md or the current lesson. Do not guess.
I want to build the website first, then the game. Use plain language, one
checkpoint at a time. Verify whether you can create downloadable files or
edit my own project. Keep this course repository separate from my projects.
Ask whether I am starting fresh or continuing saved work. If continuing,
read my project-state.md and actual files before suggesting changes.
```

## 2. Pick your next checkpoint

| Where you are | Read | You are ready to continue when… |
| --- | --- | --- |
| Brand new | [Illustrated participant guide](guides/participant-guide.pdf), pages 2–5 | You can explain the roles of the chatbot, GitHub, and Vercel |
| Setting up | [Account and connection guide](setup-guide.md) | You can receive runnable files and find your own practice repository |
| Ready for the website | [Website walkthrough](docs/website-walkthrough.md) | Your exported page works, and the published URL is checked or the blocker recorded |
| Ready for the game | [Game walkthrough](docs/game-walkthrough.md) | A person can start, finish, and restart a round |
| Something broke | [Troubleshooting](docs/troubleshooting.md) | You have reproduced the issue and checked one focused repair |
| Want another AI's help | [Multiple-agent options](docs/multiple-agents.md) | Each helper has a clear job, input version, and permitted files |
| Pausing or changing chatbots | [Project state template](templates/project-state.md) | Your latest files, observations, and next action are saved |

Prefer a browser-readable guide? Download the course and open [participant-guide.html](guides/participant-guide.html). GitHub displays HTML source; it does not run this guide as a hosted website. The [Markdown edition](guides/participant-guide.md) is readable directly in GitHub and by chatbots.

## 3. Keep your projects separate

This repository is the textbook. Your website and game each get their own folder, GitHub repository, and Vercel project. Use `my-first-site` and `my-first-game`, or clearly distinct names you choose. Ask the assistant to name its current folder and destination before writing files.

Copy [templates/AGENTS.md](templates/AGENTS.md) into each learner project as `AGENTS.md`, replace its placeholders, and have your assistant summarize it. In ordinary chat, paste or attach the instructions. A filename alone does not install a plugin or give the AI access. Follow [the agent guide](docs/multiple-agents.md) for product-specific behavior.

## 4. Save progress before you stop

Keep the actual files and complete [project-state.md](templates/project-state.md). Your new chatbot needs those files as well as the summary; a conversation link or memory of a screenshot is insufficient. Save test results as **Passed**, **Failed**, or **Not tested**. A local preview and a published website are different versions until checked.

Use the [student workbook](handouts/student-workbook.md) for your brief, game rules, test records, releases, and final handoff. Look up unfamiliar words in the [glossary](docs/glossary.md).

## How much help is available?

The repo includes stage skills, worked examples, an illustrated field guide, a troubleshooting reference, a prompt library, and templates for saving context. The examples describe what to build; they are not pretested starter applications. Live account screens and chatbot features can change. If the route differs, report what you actually see and use the portable file route or ask the instructor for help.

<!-- END COURSE SOURCE: START-HERE.md -->


---

# Source file: course-map.json

<!-- BEGIN COURSE SOURCE: course-map.json -->

{
  "title": "Vibe Coding for Non-Technical Professionals",
  "edition": "2026-10-05",
  "teaching_minutes": 360,
  "breaks_included": false,
  "read_first": [
    "AI-START.md",
    "START-HERE.md"
  ],
  "single_file_pack": "AI-COURSE-PACK.md",
  "learner_state": "templates/project-state.md",
  "learner_instructions": "templates/AGENTS.md",
  "troubleshooting": "docs/troubleshooting.md",
  "illustrated_guide": {
    "pdf": "guides/participant-guide.pdf",
    "html": "guides/participant-guide.html",
    "markdown": "guides/participant-guide.md"
  },
  "stages": [
    {
      "id": "sdlc",
      "minutes": 30,
      "lesson": "instructor-guide.md",
      "skills": [
        "skills/vc-sdlc-coach/SKILL.md"
      ],
      "completion": "Explain a stage and an observable check."
    },
    {
      "id": "setup",
      "minutes": 30,
      "lesson": "setup-guide.md",
      "skills": [
        "skills/vc-setup-guide/SKILL.md"
      ],
      "completion": "Identify own project and verify a runnable-file workflow."
    },
    {
      "id": "website",
      "minutes": 90,
      "lesson": "docs/website-walkthrough.md",
      "skills": [
        "skills/vc-project-brief/SKILL.md",
        "skills/vc-project-plan/SKILL.md",
        "skills/vc-build-small/SKILL.md",
        "skills/vc-quality-check/SKILL.md",
        "skills/vc-publish-site/SKILL.md"
      ],
      "completion": "Checked website URL, or working files with a deployment blocker."
    },
    {
      "id": "arcade-tour",
      "minutes": 15,
      "lesson": "game-skills-guide.md",
      "skills": [],
      "completion": "Choose one small game pattern."
    },
    {
      "id": "game-brief",
      "minutes": 20,
      "lesson": "docs/game-walkthrough.md",
      "skills": [
        "game-skills/vc-game-brief/SKILL.md",
        "game-skills/vc-game-rules/SKILL.md"
      ],
      "completion": "Rules explain start, controls, score, result, restart."
    },
    {
      "id": "game-build",
      "minutes": 65,
      "lesson": "docs/game-walkthrough.md",
      "skills": [
        "game-skills/vc-game-build/SKILL.md"
      ],
      "completion": "Complete and restart a plain round."
    },
    {
      "id": "game-polish",
      "minutes": 30,
      "lesson": "docs/game-walkthrough.md",
      "skills": [
        "game-skills/vc-game-look-feel/SKILL.md",
        "game-skills/vc-game-feedback/SKILL.md"
      ],
      "completion": "Readable controls, score, results, and replay."
    },
    {
      "id": "game-playtest",
      "minutes": 40,
      "lesson": "docs/game-walkthrough.md",
      "skills": [
        "game-skills/vc-game-playtest/SKILL.md"
      ],
      "completion": "Observed partner playtest; biggest issue repaired and retested."
    },
    {
      "id": "game-publish",
      "minutes": 25,
      "lesson": "setup-guide.md",
      "skills": [
        "game-skills/vc-game-publish/SKILL.md"
      ],
      "completion": "Separate game project; round/restart checked live, or blocker recorded."
    },
    {
      "id": "handoff",
      "minutes": 15,
      "lesson": "handouts/student-workbook.md",
      "skills": [
        "skills/vc-project-handoff/SKILL.md"
      ],
      "completion": "Two projects, versions, test records, limits, and next actions."
    }
  ],
  "optional_extensions": [
    {
      "id": "multiple-agents",
      "lesson": "docs/multiple-agents.md",
      "included_in_core_minutes": false
    },
    {
      "id": "maintenance",
      "lesson": "skill-guide.md",
      "skills": [
        "skills/vc-maintain-site/SKILL.md"
      ],
      "included_in_core_minutes": false
    }
  ]
}

<!-- END COURSE SOURCE: course-map.json -->


---

# Source file: instructor-guide.md

<!-- BEGIN COURSE SOURCE: instructor-guide.md -->

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

**Tour and choose for 15 minutes.** Show a few Arcade examples and how their instructions, controls, and replay work. Prepare demonstration access before class; students should not need to complete the medallion hunt to start building. Offer a small word or knowledge puzzle inspired by Promptle, a one-button obstacle game inspired by Flappy Brains, or a paddle game inspired by Brain Pong. Students choose their own theme. AI Steroids and Super AI illustrate possibilities for later work.

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

<!-- END COURSE SOURCE: instructor-guide.md -->


---

# Source file: setup-guide.md

<!-- BEGIN COURSE SOURCE: setup-guide.md -->

# Account and connection guide for the vibe coding class

Use this guide to prepare a practice repository, an AI coding workspace, and a Vercel account. The default route uses browser tools. Use your favorite chatbot through the portable route below, or use a supported Claude Code or Codex coding workspace. Product documentation was checked on October 5, 2026; instructors should rehearse the exact route before class.

## Before class

Bring a laptop, a browser, access to your account email, and a way to complete multifactor sign-in. Create the required accounts and confirm that your chosen assistant can provide runnable files before the teaching day. The instructor will demonstrate the setup and help verify it in class.

Use a personal practice repository and fictional information. Ask your organization's administrator about restrictions if you must use a managed work account. Students enter their own passwords and authentication codes directly into the provider's sign-in screens.

Account creation and plan selection are the learner's decisions. Do not enter payment details or enable a paid plan simply because a tutorial suggests it. Confirm the course's account and hosting arrangement with the instructor beforehand.

## Create your GitHub account and repository

1. Open [GitHub signup](https://github.com/signup), create a personal account, and verify your email. [Account instructions](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github)
2. In GitHub, open your profile menu, then Settings, then Password and authentication. Enable two-factor authentication and store the recovery codes securely. [2FA instructions](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
3. Choose **+ → New repository**. Select yourself as owner and name it `my-first-site`. Choose visibility deliberately and initialize it with a README. This provides a first saved file for the class. [Repository instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
4. Copy the repository URL into your class notes. This is your project. Mark's course repository is a source of teaching materials, not the destination for student changes.

Success check: open your repository and read the README. Confirm that its owner is your account.

## Create and connect your Vercel account

1. Open [Vercel](https://vercel.com/signup) and use the GitHub sign-up path if appropriate. Complete the provider's authorization screens. [Account guide](https://vercel.com/docs/accounts)
2. Use the hosting arrangement agreed for the class. Vercel Hobby is limited to noncommercial personal use; commercial use requires an eligible paid plan. A real consulting site advertising services should not be presented as a free Hobby deployment. [Fair use guidelines](https://vercel.com/docs/limits/fair-use-guidelines)
3. Authorize the GitHub integration for the practice repository when requested. Confirm that the repository appears under the expected GitHub account. For a personal repository, Vercel requires the importing user to be its owner. [GitHub integration permissions](https://vercel.com/docs/git/vercel-for-github)
4. Stop before importing and deploying the website. The class does that after building and checking the files.

Success check: you can sign in, identify the intended Vercel account or team, and locate your GitHub repository in the import flow without deploying it.

## Portable route with your favorite chatbot

This route lets an ordinary chatbot generate the files while you manage GitHub and Vercel in the browser. No direct repository connection or native skill installation is required for this route.

1. Open your preferred chatbot and paste or attach the stage's SKILL.md. Include the brief and request complete runnable files, not a screenshot or a description of a site.
2. For project 1, request a single `index.html` with styles included. If the assistant offers a download, save it. If it returns code, save that code as `index.html` in a plain-text editor, with no Markdown fences and no added `.txt` extension. The instructor should provide a short demonstration. Keep the website and game in separate folders.
3. If you receive a ZIP, extract it. Open the actual `index.html` in your browser. Keep any supplied styles, scripts, and assets at their referenced paths. Ask for corrections and replace the correct files before retesting.
4. In your personal GitHub repository, choose **Add file → Upload files**, select the site files rather than the ZIP, enter a descriptive commit message, and review the branch or proposed-change options. Complete the save intentionally. [GitHub upload instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
5. Use the Vercel import instructions below. After the first deployment, a production-branch update may deploy immediately; prepare later changes on a branch and inspect the preview before merging.

For project 2, repeat the process in `my-first-game` and a separate Vercel project. Do not overwrite the website repository. A game's own preview inside a chatbot is useful, but students must receive portable files and verify the exported result.

## Connected route with Claude Code

The coding workspace and the ordinary chat GitHub integration have different roles. In Claude chat, **+ → Add from GitHub** adds selected repository content to the conversation; a Project can add GitHub files to its knowledge. That is useful for understanding code, but it is not evidence of a working code-editing and publishing path. [Claude GitHub integration](https://support.claude.com/en/articles/10167454-use-the-github-integration)

For implementation:

1. Open [Claude Code](https://claude.ai/code) and sign in. Cloud access currently requires Pro, Max, Team, or an eligible Enterprise seat; organization controls can also apply.
2. Follow **Sign in with GitHub**. For private repositories, install the Claude GitHub App and include the practice repository in its access.
3. Select your repository and default environment. Pro and Max onboarding creates the environment automatically; other accounts may require setup.
4. Start in **Plan** mode. Ask Claude to read the README and identify the repository before proposing changes.
5. When building, approve the intended plan, inspect the changed files and results, and use **Create PR** when ready to propose the saved change. Review the pull request in GitHub before merging.

These steps follow the [current Claude Code cloud quickstart](https://code.claude.com/docs/en/web-quickstart). This sign-in route does not require creating an Anthropic API key as a class prerequisite.

Optional Vercel connection: in Claude, open **Settings → Connectors → Add custom connector**, name it Vercel, enter `https://mcp.vercel.com`, and authenticate. Vercel documents this for eligible Claude plans. The dashboard remains sufficient for the core lesson. [Official Vercel MCP instructions](https://vercel.com/docs/agent-resources/vercel-mcp)

## Connected route with ChatGPT and Codex

For service connections, open **Plugins**, find GitHub or Vercel when available to your account, inspect the plugin, install it, and complete the connection prompts. Start a new chat afterward. Availability and actions depend on the surface, plugin, and workspace policy. [Official plugin instructions](https://learn.chatgpt.com/docs/plugins)

For a cloud coding workspace, the current documented path is:

1. Sign in with your ChatGPT account. In a new task, choose **Work in → Cloud → Select environment → Create environment**.
2. Choose the practice GitHub repository and connect GitHub if prompted.
3. Select **Get started**, let Codex inspect the repository, and resolve any setup questions.
4. Review and save the setup, then choose **Publish**. This publishes the reusable coding environment; it does not deploy the website to Vercel.
5. After the environment is published, start a new task. Ask Codex to identify the repository and read the README, then use the class brief to begin work. Inspect changes and checks before committing or opening a pull request.

Use the [current Cloud environments guide](https://learn.chatgpt.com/docs/environments/cloud-environments). It currently lists browser and computer use as unavailable in cloud environments, so students should inspect rendered pages in their own browser. Verify that the learner's account offers this path before class. Avoid teaching the legacy Code Review environment flow as the default new-project setup.

A plugin connection, code-editing workspace, and deployment permission are separate capabilities. Confirm each one with the learner's actual account. Do not assume every GitHub connector is read-only or that every connected chatbot can edit and run a project.

## Choose the route by available capabilities

The portable route needs complete runnable file output; the connected route additionally needs verified repository access. Use the same brief, skills, and checks on either route. If a chatbot cannot produce usable files, continue planning with it and use an instructor checkpoint or a supported assistant for the build. Pasting a skill does not grant missing tools.

## Capability check

For the connected route, use this prompt after connection:

> Identify the GitHub account, repository, and branch for this class project. Read the README. Tell me which of these you can actually do here: edit project files, run checks, create a branch or pull request, and inspect Vercel deployments. Distinguish what you verified from what you have not tried. Do not change the repository or deploy anything yet.

Then ask the assistant to prepare a one-sentence README improvement, inspect its proposed difference, and deliberately save that change using the supported workflow. If an operation fails, record the exact failure and correct the specific access issue.

## Publish each project

1. Finish the checked site and save the intended files to the learner's GitHub repository. Keep `index.html` and any supporting styles, scripts, or assets at the repository root for the recommended plain static project.
2. In Vercel, choose **New Project**, import the repository, and inspect the framework and root settings. For plain static files, use **Other**, enable the Build Command override and leave it empty, and use the repository root as the output location; verify these settings during the instructor rehearsal. For a framework project, use its documented build and output settings. [Git deployment guide](https://vercel.com/docs/git), [build configuration](https://vercel.com/docs/deployments/configure-a-build)
3. Explain and approve the intended publication, then select **Deploy**. Open the resulting URL and repeat the key functional checks.
4. For the next change, use a separate branch and pull request, inspect its preview, then merge when ready to release. The first Vercel deployment is production; preview behavior applies after that. A production-branch update normally triggers another production deployment. [Deployment environments](https://vercel.com/docs/deployments/environments)

Do not infer a private website from a private repository or a hard-to-guess URL. Check the actual deployment access behavior and use content suitable for that audience.

## Recover from common setup failures

| Symptom | Next check | Class fallback |
| --- | --- | --- |
| GitHub repository is missing | Account identity, selected repository permission, ownership, and organization approval | Use the personal practice repository or work with a partner |
| Coding surface is unavailable | Account access, seat, and workspace policy | Continue the brief and review exercise with the instructor's example |
| Vercel connection is unavailable in chat | Plugin or connector availability and authentication | Use the Vercel dashboard |
| Deployment fails | Read the actual error and verify root and build settings | Ask for one focused repair; retain the working local files |
| Page cannot be rendered inside the assistant | Check the surface's browser capability | Export the static files and inspect them in your own browser |
| The class is losing time to setup | Keep a record of the blocker | Switch to a tested checkpoint; return to the account issue after class |

The documentation was researched for this guide. No student account flow, full classroom rehearsal, or live deployment was executed as part of preparing it.

<!-- END COURSE SOURCE: setup-guide.md -->


---

# Source file: docs/website-walkthrough.md

<!-- BEGIN COURSE SOURCE: docs/website-walkthrough.md -->

# Build and publish your first website

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

This walkthrough takes a fictional one-page website from a short brief to a checked Vercel URL. Use your favorite chatbot. You will receive actual files, open them yourself, save them in your own GitHub repository, and publish the checked version. The course repository contains instructions; your website belongs in a separate project.

Allow about 90 minutes during class. Start with [the course entry point](START-HERE.md) and complete the [account and connection guide](setup-guide.md). If something stops working, follow the matching symptom in [troubleshooting](docs/troubleshooting.md). The instructor must prepare any recovery checkpoint mentioned there before class; a tested starter is not automatically supplied by these instructions.

## The example you will build

**Riverbend Reading Club** is a fictional community group. Its page helps a visitor understand the club and find the next practice gathering. Use this content or replace it with a similarly small idea.

| Part | Example content and behavior |
| --- | --- |
| Heading | Riverbend Reading Club |
| Introduction | A fictional neighborhood club for people who enjoy talking about books. |
| About section | We choose one short book each month and welcome different opinions. |
| Next gathering section | Practice event: Saturday, November 14, 2026, at 10 a.m., at the fictional Riverbend Community Room. |
| What to bring section | Your book, a question, and one passage you would like to discuss. |
| Main action | A button labeled View the next gathering scrolls to the gathering section. |
| Footer | Classroom practice project. The group, venue, and gathering are fictional. |
| Appearance | Large readable type, cream background, dark blue headings, a simple book-shaped decoration. |

There is no signup form, real booking, payment, database, or email delivery. The main action works entirely within the page. That gives you a meaningful behavior to check without depending on another service. Keep the fiction label visible when publishing.

## 1 Make a folder and record where you are working

1. On your computer, create a folder named `my-first-site` somewhere you can find it again, such as inside Documents. Use your file manager's normal new-folder action.
2. Keep your future game in a different folder named `my-first-game`.
3. Open your own GitHub website repository. Check the owner and name at the top of the page. Copy its URL into your notes. Do not upload student files to Mark's course repository.
4. Start a project-state note using [the project state template](templates/project-state.md). Record the folder, repository, preferred chatbot, and current stage: “writing the website brief.” Record unknown information as unknown.

**Checkpoint:** you can point to the local website folder and the matching GitHub repository. If they do not exist yet, use the [setup guide](setup-guide.md) before continuing.

## 2 Write a brief before asking for a website

Open [vc-project-brief](skills/vc-project-brief/SKILL.md). Copy or attach its instructions to your chatbot, followed by this prompt:

> Use the attached project-brief skill. I am a beginner making a fictional Riverbend Reading Club website for class. Make a one-page brief using the example content below. The primary action is a button that scrolls to the next gathering section. Keep the group and event clearly fictional. No signup, payment, accounts, database, or email sending. Give me five observable completion checks. Do not build yet. Here is the content: [paste the example table or your own content].

Read the response. Correct any invented features or changed facts. Save the agreed brief as `project-brief.md` in your website folder, or keep the same text in your workbook until you can save it. A `.md` file is a plain-text document with simple formatting marks.

Use [vc-project-plan](skills/vc-project-plan/SKILL.md) with the brief:

> Plan this as one static page. List the sections in order and explain what each link or button does. Use one complete index.html with the styles included and a simple decoration that needs no downloaded image. Give me a small build plan that fits this class. Do not add a framework or server.

**Checkpoint:** you can explain the visitor's goal and the exact action of the main button without reading code. Keep only the sections you need.

## 3 Ask for a complete file

Open [vc-build-small](skills/vc-build-small/SKILL.md), provide the agreed brief and plan, and use this prompt:

> Build the first version from this brief. Return one complete runnable index.html with its CSS included. It must work when I open that file in a browser, without installing anything or starting a server. Use the exact example copy, keep the fiction label, and make View the next gathering move to the correct section. Make it usable on a phone. Provide the actual file or its complete contents, not only an image or preview. Explain how I can check the result and say which checks you actually performed.

If you use a connected coding workspace, first ask it to identify the repository, branch, and existing files. Make sure the answer names your website. Ask it to preserve existing work and show the proposed change. If it cannot access the repository, the portable file route still works.

**Checkpoint:** you have a file named `index.html` or the complete text to put in that file. A screenshot, a share link to a chatbot conversation, or a statement that the page is done does not meet this checkpoint.

## 4 Save the file and open it

Prefer the chatbot's file download when available. Save it inside `my-first-site`. If it provides a ZIP archive, extract it and find the actual `index.html`. Do not rename a ZIP to HTML.

If you receive code as text, copy only the file contents. Leave out the surrounding explanation and the opening or closing triple-backtick lines.

### Save plain text on a Mac

1. Open TextEdit and create a new document.
2. Choose **Format → Make Plain Text** before pasting the code.
3. Paste the complete file text, choose **File → Save**, and name it `index.html` in `my-first-site`.
4. If asked which extension to use, choose **Use .html**.

For later code edits, TextEdit can display HTML as code rather than a formatted page. Follow Apple's “View an HTML document as code” instructions. These steps were checked October 5, 2026. [Apple TextEdit HTML guide](https://support.apple.com/guide/textedit/txted0b6cd61/mac)

### Save plain text on Windows

1. Open Notepad or a plain-text editor you already use. Paste the complete file contents into a new document.
2. Save a copy in `my-first-site` with the intended name `index.html`.
3. In File Explorer, show the full filename. Microsoft's current documented path is **View → Show → File name extensions**; older versions may arrange the option differently.
4. If the plain-text file is named `index.html.txt`, rename that copy to `index.html` and confirm the intended extension change. This is appropriate for plain HTML text; renaming a Word or rich-text document does not convert it into HTML.

The filename guidance was checked October 5, 2026. [Microsoft file extensions guide](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows)

### Open the saved result

1. Locate `index.html` in the website folder.
2. Open it with your web browser. If double-clicking opens an editor, use your file manager's Open with action and choose the browser.
3. Check the address bar: a local file address means you are viewing the file on this computer, not a public website.
4. Compare the page with the brief. Click View the next gathering and watch whether the correct section appears.

**Checkpoint:** the browser shows the page and the main button works. Save a copy of this working folder as a clearly named checkpoint outside the folder you will upload, for example `my-first-site-checkpoint-01`. This is your own saved copy, not an instructor-provided starter.

## 5 Improve one thing and test it

Use [vc-quality-check](skills/vc-quality-check/SKILL.md) and report what you actually see:

> I opened the exported file in [browser]. I expected [specific outcome]. I observed [specific result]. Here is the current index.html and the brief. Identify the smallest likely repair, explain it in plain language, and return the complete corrected file. Preserve the working content and button behavior. Tell me what to repeat in the browser; do not mark it passed until it has been observed.

Save the returned file over the active website file only after retaining your checkpoint. Reopen that exact file. Do not assume a newer chatbot preview means the downloaded file changed.

Record these checks in `test-report.md` or your [workbook](handouts/student-workbook.md):

| Try this | Expected observation |
| --- | --- |
| Ask a partner what the page is for | They identify a fictional reading club and its gathering. |
| Read the page against the brief | The dates, wording, and fiction label match. |
| Activate the main button | The next gathering section comes into view. |
| Follow every navigation link | Each reaches the stated section or destination. |
| Make the browser narrow | Text is readable and content does not disappear sideways. |
| Use Tab, then Enter on the main action | You can find the focused action and activate it. |

A narrow browser is a useful layout check. It is not proof that a real phone's touch controls were tested. Mark device checks you have not done as **Not tested**.

## 6 Save the checked version to GitHub

1. Open the correct learner-owned repository and inspect the selected branch.
2. Choose **Add file → Upload files**. Select the actual `index.html` and any supporting files; do not upload only the ZIP. For this example, `index.html` belongs directly in the repository root, where the README is listed.
3. Review the filenames and write a meaningful commit message, such as “Add checked reading club practice page.”
4. Review the current-branch or new-branch choice. If using a new branch and pull request, inspect the proposal and merge it into the intended deployment branch before importing that version.
5. After saving, open `index.html` on GitHub and confirm a distinctive sentence from your checked version. Record the saved commit or checkpoint in your project state.

GitHub's upload labels and workflow were checked October 5, 2026. [Official file upload guide](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

**Checkpoint:** GitHub contains the checked file at the expected location. After a Vercel connection exists, changes to the production branch can publish automatically. Use a separate branch for later changes you want to review first.

## 7 Publish and verify the public result

Use [vc-publish-site](skills/vc-publish-site/SKILL.md) and the exact steps in [Publish each project](setup-guide.md#publish-each-project). Identify the Vercel account or team, repository, source version, and project before deploying. Use the class's agreed hosting arrangement.

For this plain static example, use the **Other** framework preset and an empty overridden Build Command. The output must be the folder containing `index.html`; the recommended example uses the repository root and has no `public` folder. If your project differs, inspect it before choosing settings. [Vercel build configuration, checked October 5, 2026](https://vercel.com/docs/builds/configure-a-build)

> Help me publish this checked static website to my own Vercel project. First show the repository, source version, entry file, root, build settings, and intended audience. Follow the course setup guide. I will complete account authorization myself. After publication, guide me through opening the actual deployment URL and repeating the main action and layout checks. Distinguish your observations from mine.

The first deployment is production under the course's documented flow. A private repository does not by itself make the website private. Open the URL from the actual completed deployment and have a partner open it too. A working local file is not proof of a working deployment.

**Checkpoint:** record the URL, version, actual observations, and remaining limitations in `release-record.md`. If publication is blocked, keep the working files and precise error. Update your project-state note before starting the game.

<!-- END COURSE SOURCE: docs/website-walkthrough.md -->


---

# Source file: docs/game-walkthrough.md

<!-- BEGIN COURSE SOURCE: docs/game-walkthrough.md -->

# Build a small quiz game

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

This worked example creates **Riverbend Club Quiz**, a five-question game about the fictional club in the [website walkthrough](docs/website-walkthrough.md). It uses the Arcade's pattern of short instructions, clear feedback, and replay. It is a simplified knowledge puzzle, not a reproduction of Promptle or a claim that the Arcade source code has been copied.

Use your favorite chatbot and the seven [game skills](game-skills-guide.md). The core exercise needs no account inside the game, timer, database, paid API, sound, or saved score. You will build actual files and publish the game in a separate project from the website. Follow the full-day schedule in the [instructor guide](instructor-guide.md).

## 1 Set up the game destination

1. Create a local folder named `my-first-game`. Leave `my-first-site` and its working checkpoint intact.
2. Use the [setup guide](setup-guide.md) to create your own separate GitHub repository for the game. Confirm its owner and name before saving anything.
3. Create a fresh project-state note from [the template](templates/project-state.md), with the current stage “game brief.” Record the game folder and repository. The Vercel project and URL can remain “not created yet.”
4. In a connected coding workspace, select the game repository and ask the assistant to identify it before editing. In ordinary chat, attach the brief and skill instructions; direct repository access is optional.

**Checkpoint:** you can show different destinations for the website and game. If another assistant is helping, follow [multiple agents](docs/multiple-agents.md) so two assistants do not replace each other's work.

## 2 Agree on the game before building

Use [vc-game-brief](game-skills/vc-game-brief/SKILL.md):

> Help me plan Riverbend Club Quiz, a small classroom browser game about a fictional reading club. Use the five supplied questions exactly. One round contains five questions in a fixed order. Each question has three answer buttons. Give one point for a correct answer and zero for a wrong one. After answering, show a short explanation and a Next button. Do not allow a second answer to the same question. After question five, show the score out of five and Play again. No timer, login, database, saved score, or sound. Write game-brief.md and five observable completion checks. Do not build yet.

Use these questions. They describe invented club rules rather than real-world claims that require outside research.

| Question | A | B | C | Correct answer and feedback |
| --- | --- | --- | --- | --- |
| How often does this fictional club choose a book? | Once a year | Once a month | Every day | B. The club chooses one short book each month. |
| What kind of book does the example club choose? | A short book | Only dictionaries | Only cookbooks | A. The fictional club chooses a short book. |
| What should you bring to the practice gathering? | A sales pitch | A ticket payment | A question about the book | C. Bring a question and a passage you want to discuss. |
| What does the website's main button do? | Takes a payment | Opens the next gathering section | Creates an account | B. It takes the visitor to the gathering details. |
| Which description matches this project? | A fictional classroom exercise | A confirmed real event | A real booking service | A. The group and gathering are fictional. |

Read the brief. If the assistant adds random order, streaks, lives, daily locks, animations, or other extras, move those to a later list. Save the brief in your game folder.

## 3 Write exact rules and controls

Use [vc-game-rules](game-skills/vc-game-rules/SKILL.md) and the brief:

> Turn this brief into game-rules.md. Explain instructions, playing, answer feedback, final result, and restart. Use normal buttons that work with mouse, touch, and keyboard Tab and Enter. No question or score advances before Start. A submitted question cannot score again. Next appears after an answer; on the fifth question it leads to the final result. Play again begins a fresh round at question one with zero points. Specify how reopening instructions preserves the current question and answer. Return tests with exact expected results.

The intended sequence is:

| What happens | What should change |
| --- | --- |
| Open the file | Instructions and Start appear. No answers have been submitted. |
| Activate Start | Question 1 appears; score is 0; progress is 1 of 5. |
| Choose an answer | That question is locked, feedback appears, and score changes at most once. |
| Activate Next | The next unanswered question appears. |
| Finish question 5 and continue | A final score out of 5 and Play again appear. |
| Activate Play again | A fresh round begins at question 1, score 0, with no old selection or feedback. |

**Checkpoint:** your partner can explain the game using this table. Keep the rules available when evaluating the generated game.

## 4 Build the complete play loop

Use [vc-game-build](game-skills/vc-game-build/SKILL.md), the brief, rules, and question table:

> Build this quiz as one complete index.html with CSS and JavaScript included. It must run when opened directly in a browser, without installs or a server. Use the question table and rules exactly. Keep the first version plain and readable. Provide the actual complete file, not just a screenshot or chatbot preview. Keep question data separate from the logic inside the file so I can recognize and change it later. Explain the tests you actually performed and which I need to perform.

1. Download the file to `my-first-game`, or save the returned text using [the Mac or Windows saving instructions](docs/website-walkthrough.md#4-save-the-file-and-open-it).
2. If supplied a ZIP, extract it. Find `index.html` and retain any supporting files at their expected locations.
3. Open that exact file in your browser. Check whether the address points to the game folder.
4. Activate Start, answer one question, try selecting a second answer to that same question, then continue through the round.
5. Use Play again. Confirm question 1 and zero points return.

**Checkpoint:** you can complete and restart a plain round. Save a copy outside the active game folder, named something like `my-first-game-checkpoint-01`. Do this before adding visual effects. If the loop fails, report the steps and observed behavior through [troubleshooting](docs/troubleshooting.md); do not bury the failure under decoration.

## 5 Make it understandable

Use [vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md):

> Improve the appearance of this working quiz while preserving its rules and questions. Use the reading club's cream and blue theme. Make question text, three answer buttons, progress, score, and Next easy to identify on a laptop and a phone. Use labels or symbols as well as color for correctness. Preserve keyboard focus visibility. Keep the file self-contained and do not add sound or animation unless it helps explain an action.

Then use [vc-game-feedback](game-skills/vc-game-feedback/SKILL.md):

> Check that every answer explains the fictional club rule and the final screen accurately shows the score. Do not invent a real-world lesson or call the player an expert based on five questions. Make Play again obvious and reset the round correctly. Show me the exact result messages and how to test them.

Save the revised complete file, reopen it, and repeat the loop. Record visual decisions in `game-style.md` and result behavior in `game-feedback.md`; a short paragraph each is enough.

**Checkpoint:** a new player knows what to do next after an answer and after the final result. If the AI gives only partial snippets, ask it to apply them to the full current file rather than guessing where to paste them.

## 6 Test exact scoring and repeated play

Use [vc-game-playtest](game-skills/vc-game-playtest/SKILL.md) and save observations in `game-test-report.md` or the [student workbook](handouts/student-workbook.md).

| Test | Actions | Expected result |
| --- | --- | --- |
| All correct | Choose B, A, C, B, A in order. | Final score is exactly 5 out of 5. |
| All wrong | Start a fresh round; choose A, B, A, A, B. | Final score is exactly 0 out of 5. |
| Mixed answers | Start again; choose B, B, C, A, A. | Final score is exactly 3 out of 5. |
| Repeat click | After answering question 1, click an answer again several times before Next. | The score and progress do not change again. |
| Restart | Finish a round and activate Play again three times across separate completed rounds. | Every fresh round starts at question 1 with zero score and no previous answer selected. |
| Keyboard | Use Tab to find controls and Enter to activate them. | You can complete a round without a mouse and see which control has focus. |
| Phone | Open the deployed game on a real phone when available. | All answers and Next are reachable; one tap causes one action. |
| Help during play | Reopen instructions after a question has been answered. | The question, score, and locked answer remain correct on return. |

Watch a partner for two minutes without coaching. Ask what they thought would happen when something surprised them. Record the version and device. “The chatbot said the score works” is not a passing test.

Use this repair prompt with the current file:

> The agreed rule is [rule]. On [file or URL and version], I did [numbered actions]. I expected [result] and observed [result]. Here is the current file. Explain the likely cause, make one focused repair, and return the complete updated file. Preserve the questions, appearance, and other working controls. Give me the exact failed test to repeat and two related checks.

**Checkpoint:** mark each check Passed, Failed, or Not tested. Keep failures visible. If time is short, remove optional features and keep the complete play loop. An instructor's tested fallback can help only if it has actually been prepared and supplied.

## 7 Publish the game and carry it forward

1. Use [vc-game-publish](game-skills/vc-game-publish/SKILL.md) and the [publication guide](setup-guide.md#publish-each-project).
2. Open the game repository, verify its owner and name, and upload the actual checked files at the intended root. Save the deliberate checkpoint. The website repository should remain separate.
3. Import the game repository into its own Vercel project. For this single-file static game, use the same no-build route as the website. Review the destination and source version before publishing.
4. Open the URL from the completed deployment. Repeat an entire round, check its exact score, and restart. Have a partner try that same URL on another device where available.
5. Write `game-release.md` with the URL, source version, device, observed results, remaining limitations, and recovery checkpoint. If publication is blocked, record the actual error and the location of the working files.
6. Update your project-state note. A later chatbot can continue from the current file, rules, test report, and next action without pretending to remember this conversation.

**Final demonstration:** open the website and its main action; open the separate game; complete and restart a round; show where both versions and their test notes are saved. Adding another question or changing one style choice is a reasonable next exercise. Add it through the same brief → change → test → publish process.

<!-- END COURSE SOURCE: docs/game-walkthrough.md -->


---

# Source file: docs/troubleshooting.md

<!-- BEGIN COURSE SOURCE: docs/troubleshooting.md -->

# Get unstuck while building your website or game

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Find the first point where reality differs from what you expected. Make one reversible change, repeat the same check, and record the result. You do not need to diagnose the code before asking for help. A useful report says what you opened, what you did, what you expected, and what you actually saw.

Start from [the course entry point](START-HERE.md). Keep the latest files and [project-state note](templates/project-state.md) together. The [website walkthrough](docs/website-walkthrough.md) and [quiz walkthrough](docs/game-walkthrough.md) provide worked examples. If a fix fails, retain your working checkpoint; do not replace the entire project repeatedly.

## Choose the stage that is failing

| What is stopping you? | Start with |
| --- | --- |
| You cannot get the course or project into the chatbot | [Access and chatbot problems](#access-and-chatbot-problems) |
| You cannot obtain or open the actual files | [Saving and opening files](#saving-and-opening-files) |
| The website or game behaves incorrectly | [Page and game behavior](#page-and-game-behavior) |
| Local files work but the online version does not | [GitHub and Vercel publication](#github-and-vercel-publication) |
| Work is being lost or assistants disagree | [Recovering progress and coordinating help](#recovering-progress-and-coordinating-help) |

After two focused repair attempts, or five minutes on an account problem during class, ask the instructor for help or pair with another learner. An instructor recovery checkpoint must have been prepared and tested in advance; it is not a hidden file that these guides can supply. Keep a note of the blocker so you can resume later.

## What to give an assistant or instructor

Copy this and replace the brackets. Never paste passwords, authentication codes, access tokens, or a whole account-settings page.

> Project: [website or game, folder, repository, branch/checkpoint]. Stage: [save/open/upload/deploy/play]. I opened [exact file or URL] on [browser/device]. Steps: 1. [action] 2. [action]. Expected: [result]. Observed: [result or exact relevant error]. Last version that worked: [checkpoint or unknown]. I already tried: [one change and its result]. Here are the current relevant files and rules. Explain the likely causes, choose the smallest reversible check, and wait for the observation before calling it fixed. Do not publish or change account access as part of diagnosis.

When you share an error, include the text rather than only “it broke.” A screenshot is useful for appearance; the current file is needed for code diagnosis. Keep **the learner observed**, **the assistant observed**, and **not tested** distinct.

## Access and chatbot problems

### 1 The private course repository will not open

**Possible causes:** wrong GitHub account, missing invitation, or no repository permission.

1. Check which GitHub account is signed in and compare it with the account you gave the instructor.
2. Open the course URL directly in that account's browser session. Record the displayed error without changing visibility.
3. Ask the instructor to confirm access or provide an authorized copy of the course instructions.

**Success:** you can read the course README and Start here file. **Fallback:** use the supplied course copy with ordinary chat. Do not make the private repository public or create a token to work around missing access.

### 2 You can read the repository but the chatbot cannot

**Possible causes:** the assistant has no repository tool, its connection covers different repositories, or it is signed into another account.

1. Ask it to state whether it actually read the README and to quote the project title it found.
2. If access is unavailable, paste the relevant skill, brief, and current file into chat or attach them individually.
3. For a connected route, follow the [setup guide](setup-guide.md) and let the learner review any permission screen.

**Success:** the assistant accurately identifies the supplied current files. **Fallback:** continue through portable files and manual upload; direct repository access is optional.

### 3 The chatbot rejects a ZIP or cannot inspect its contents

**Possible causes:** unsupported archive uploads, file-size limits, or a surface that accepts only particular document types.

1. Extract a local copy with your computer's normal archive-opening function.
2. Provide the relevant `SKILL.md`, brief, and `index.html` separately. If that file type is rejected, paste its complete text with a filename label.
3. Ask the assistant to list what it received before making changes.

**Success:** it can describe the current title and main action from the actual contents. **Fallback:** use the single-file example. Do not repeatedly rename an archive to unrelated extensions.

### 4 The named skill is not installed or does not appear

**Possible causes:** native skills are unsupported, the assistant's discovery mechanism differs, or the package was not installed.

1. Open the skill link in the [website guide](skill-guide.md) or [game guide](game-skills-guide.md).
2. Paste or attach the complete `SKILL.md`, then give the matching starter prompt and current project material.
3. Ask the assistant to summarize the task's input, output, and completion check.

**Success:** the assistant follows the instruction sheet for this stage. **Fallback:** use pasted instructions throughout. Native installation is optional and cannot grant missing tools.

### 5 The assistant requests a database, API key, or paid service

**Possible causes:** it added features beyond the brief or chose a more complex architecture.

1. Restate that the core class project must run as static HTML, CSS, and JavaScript.
2. Ask which agreed requirement allegedly needs the service and whether it can be removed from this version.
3. Keep the existing working copy and request a portable version without those additions.

**Success:** the actual exported file opens without entering a key or creating a backend account. **Fallback:** return to the course's simple example. Ask the instructor before changing the agreed hosting arrangement; do not buy a plan just to clear a generated instruction.

### 6 A chatbot usage limit or unavailable feature stops the build

**Possible causes:** usage quota, workspace policy, account entitlement, or a temporary service issue.

1. Save the current files and note the exact limit message and any displayed reset time.
2. Update project state with the last completed check and next action.
3. Continue in another allowed chatbot by giving it the current files and stage instructions, or work with a partner.

**Success:** the replacement assistant identifies the same version and next step. **Fallback:** use a supplied tested checkpoint or complete the brief and test plan while access is unavailable. Do not assume a purchase is required.

## Saving and opening files

### 7 The AI produced only a screenshot, description, or preview

**Possible causes:** the prompt requested a design rather than files, or the tool keeps a preview inside its own environment.

1. Ask: “Return the complete runnable `index.html`, including its styles and behavior, or provide an export I can download.”
2. Save the actual file in the correct project folder.
3. Open it in your browser independently of the chatbot preview.

**Success:** the exported file displays and the main interaction works. **Fallback:** ask for complete file contents as text. A screenshot cannot be converted into working software by changing its filename.

### 8 The file is called index.html.txt

**Possible cause:** the editor appended its default text-file extension.

1. Preserve the original file and show its complete filename. In current Windows File Explorer, use **View → Show → File name extensions**.
2. Confirm it contains plain HTML text. Rename a copy to `index.html`; for a Mac, use TextEdit's plain-text HTML save route in the [walkthrough](docs/website-walkthrough.md#4-save-the-file-and-open-it).
3. Open the renamed file with a browser.

**Success:** the filename ends once in `.html` and the page renders. **Fallback:** download a fresh HTML file from the chatbot. Renaming changes a name, not the underlying format. [Microsoft extension guidance, checked October 5, 2026](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows)

### 9 A Mac or Windows file contains rich text instead of HTML

**Possible causes:** it was saved in Word, as `.rtf`, or through a formatted editor. You may see formatting codes or literal page code.

1. Keep the original for comparison and return to the chatbot's complete source text.
2. Make a new plain-text document: on Mac, TextEdit **Format → Make Plain Text**; on Windows, use Notepad or an existing plain-text editor.
3. Paste the source without Markdown fences, save `index.html`, and reopen it in the browser.

**Success:** the browser shows headings and buttons. **Fallback:** request a downloadable file. Do not try to repair a rich-text export merely by renaming it. [Apple HTML guidance, checked October 5, 2026](https://support.apple.com/guide/textedit/txted0b6cd61/mac)

### 10 Double-clicking opens an editor instead of the website

**Possible cause:** that file type is associated with an editor.

1. Locate the saved `index.html` in your project folder.
2. Use the file manager's Open with action and choose the browser you normally use. You need not change the system-wide default.
3. Check the address bar and page title to confirm you opened the intended file.

**Success:** the browser renders the page. **Fallback:** ask the instructor to show opening a local file on your computer. If the browser displays raw source, continue with the plain-text and filename checks above.

### 11 Opening a downloaded folder or ZIP does not show a page

**Possible causes:** you opened the archive rather than its extracted contents, or there is an extra enclosing folder.

1. Extract the archive to a clearly named local folder.
2. Open folders until you find the real `index.html`; note which supporting folders sit beside it.
3. Open that file in the browser and preserve the supporting structure.

**Success:** the page runs from the extracted project folder. **Fallback:** ask for a self-contained HTML export. Do not discard supporting files merely because you do not recognize their extensions.

### 12 The page is blank or says a script or resource could not load

**Possible causes:** incomplete copied code, missing files, or generated code that requires a server despite the brief.

1. Compare the saved file list with the assistant's promised deliverable. Check for omitted script or style files.
2. Give the assistant the actual current files and relevant error text; ask whether this is truly a directly openable static project.
3. Request a complete corrected self-contained file for the course example, preserving your content.

**Success:** the saved file works in the browser without a new installation. **Fallback:** return to the last working file or instructor checkpoint. Do not run a list of unfamiliar setup commands just because the assistant generated it.

## Page and game behavior

### 13 An image is missing locally or after publication

**Possible causes:** missing upload, filename mismatch, different capitalization, or an image reference that points to a location on your computer.

1. Compare the exact referenced name with the actual file, including `.png` versus `.jpg` and upper/lowercase letters.
2. Keep a copy, then make the reference and actual relative location match. Preserve the asset folder in the upload.
3. Reopen the same version locally and at its deployment URL.

**Success:** the intended image appears in both locations. **Fallback:** use a simple shape or text decoration until the asset is fixed. Do not hide a broken image behind a claim that it is only a cache issue.

### 14 A link or button does nothing or reaches the wrong place

**Possible causes:** placeholder destination, misspelled section name, disabled control, or an unimplemented action.

1. State the exact intended behavior from the brief. For the example website, the button should reach the gathering section.
2. Report the current label, your action, and the observed destination or lack of response with the actual file.
3. Ask for one focused repair, save the returned complete file, and repeat the action.

**Success:** the correct destination appears and other links still work. **Fallback:** use a clear ordinary link to a verified destination rather than adding a form or service. Label any omitted feature honestly.

### 15 The chatbot says fixed but nothing changed

**Possible causes:** only the chat preview changed, the wrong file was replaced, the response was a proposal, or you opened an older copy.

1. Ask which exact file changed and request the complete updated file or a visible difference.
2. Save it in the active project folder and reopen that precise path. Compare one distinctive changed line or label.
3. Repeat the original failing action; report its observed result.

**Success:** the intended behavior changes in the exported file. **Fallback:** keep the old checkpoint and ask for diagnosis from the actual current file. Do not accept a second “fixed” without new evidence.

### 16 The page works on a laptop but controls fail on a phone

**Possible causes:** keyboard-only instructions, tiny or covered buttons, mouse-only handlers, or page scrolling that intercepts gestures.

1. Record the phone, browser, URL, and precise control that fails.
2. Ask for standard visible buttons or explicit touch support while preserving desktop controls.
3. Test on the actual phone; also repeat keyboard play on the laptop.

**Success:** one tap produces one intended action and all required controls remain reachable. **Fallback:** simplify the game's interaction or use the accessible quiz recipe. A resized desktop window checks layout, not real touch behavior.

### 17 A timer runs before Start or the game loses while help is open

**Possible causes:** the game updates during its instructions state or help does not preserve/pause play as agreed.

1. Record whether the score, timer, or position changes before Start or while instructions are open.
2. Ask the assistant to enforce the agreed state transitions and prevent the Start input from also triggering a gameplay action.
3. Open a fresh round, leave instructions visible, then start and reopen help during play.

**Success:** no active round progresses while the rules say it should be idle. **Fallback:** remove optional timing; the worked quiz needs no timer. Save the last working loop before further changes.

### 18 Restart keeps the old score or makes the game run faster

**Possible causes:** state is not reset, old timers or animation loops remain active, or duplicate input listeners were added.

1. Compare the first round with the second and third; record exactly what remains or speeds up.
2. Supply the current file and ask for a focused reset repair that removes duplicate ongoing actions.
3. Finish and restart several rounds, checking score, position, question, feedback, and speed each time.

**Success:** every round starts from the agreed fresh state and behaves consistently. **Fallback:** restore the earlier complete loop. Reloading the page may help demonstrate a round but does not count as fixing the Play again control.

### 19 Clicking twice changes score twice or skips a question

**Possible causes:** a submitted answer remains active or multiple handlers respond to one interaction.

1. Use a fresh round and record the score before and after two clicks on the same question.
2. Ask the assistant to allow exactly one answer and one score change per question; keep Next separate.
3. Repeat single-click, double-click, keyboard activation, and a complete round with known answers.

**Success:** the exact expected score appears and no question is skipped. **Fallback:** return to ordinary button controls and remove automatic advance. Use the [quiz's scoring tests](docs/game-walkthrough.md#6-test-exact-scoring-and-repeated-play).

### 20 The game is much harder after switching tabs or on another computer

**Possible causes:** movement depends on frame rate, a long background gap is treated as active play, or difficulty changed unintentionally.

1. Record the same starting setup on both devices and note the specific difference.
2. Ask the assistant to use elapsed-time or fixed-step motion and handle returning from a background tab safely.
3. Retest the original device, the other device, and a brief tab switch with equivalent starting conditions.

**Success:** the rules and pace remain reasonably consistent without an unavoidable loss on return. **Fallback:** reduce difficulty or use the turn-based quiz. Keep this check separate from claims about network speed.

### 21 A best score disappears or differs on another device

**Possible causes:** the score is stored only in one browser, storage was cleared/unavailable, or the new URL has separate storage.

1. Check whether the game promises a browser-local score or an online account score. The core class should use the former, if any.
2. Test a refresh on the same URL in the same browser, then label any actual storage limitation.
3. Ask for storage errors to leave the game playable instead of stopping it.

**Success:** behavior matches its label and the game works even without saved scores. **Fallback:** remove optional persistence. Do not add a database or login to solve a scope the class does not require.

## GitHub and Vercel publication

### 22 GitHub shows only a ZIP or an extra folder above index.html

**Possible cause:** the archive or its enclosing folder was uploaded instead of the intended serving files.

1. Keep your local copy and inspect the repository file list. Locate the actual HTML and supporting assets.
2. Prepare a corrected upload or branch with `index.html` at the intended project root; preserve its relative asset paths.
3. Review the proposed filenames before saving or merging. If a production connection exists, remember that its branch change may publish.

**Success:** the intended root contains `index.html`. **Fallback:** ask the instructor to help choose the correct folder; do not delete the repository. [GitHub file upload guide, checked October 5, 2026](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

### 23 Vercel cannot find your GitHub repository

**Possible causes:** wrong account/team, integration access excludes the repository, ownership, or organization restrictions.

1. Confirm the repository URL and owner in GitHub, then the signed-in identity and selected Vercel account/team.
2. Follow the [setup guide](setup-guide.md) to inspect the integration's allowed repository. The learner reviews any authorization change.
3. Record the exact restriction if the repository remains unavailable.

**Success:** the correct repository appears in the import flow. **Fallback:** retain local files and work with the instructor or partner. Do not make the repository public or grant broad access just to make it appear.

### 24 A plain static project fails during a build command

**Possible causes:** a framework preset was selected, a build command was added unnecessarily, or the project is not actually plain static files.

1. Inspect the file list and first relevant failure message. Do not treat every failure as a dependency problem.
2. For the course's verified plain HTML/CSS/JavaScript example, select **Other**, enable the Build Command override, and leave it empty. Verify the folder containing `index.html` and the output location.
3. Deploy the intended version again after the deliberate configuration correction.

**Success:** that deployment completes and serves the expected page. **Fallback:** ask for help if `package.json` or framework files show a different project; do not randomly delete them or reinstall packages. [Vercel build configuration, checked October 5, 2026](https://vercel.com/docs/builds/configure-a-build)

### 25 Deployment says ready but the URL shows 404

**Possible causes:** wrong project/root/output folder, missing `index.html`, or opening a path the project does not provide.

1. Open the URL from the specific completed deployment rather than a remembered bookmark. Start at its home page.
2. Compare the deployed source version's file location with Root Directory and output settings. With **Other**, a `public` folder can become the default output; inspect rather than guessing.
3. Correct the single mismatch and deploy the intended version, then reopen the resulting URL.

**Success:** the correct page loads and its main action works. **Fallback:** record the error and use working local files. Do not add routing rewrites blindly to a one-page static project. [Vercel 404 guidance, checked October 5, 2026](https://vercel.com/kb/guide/why-is-my-deployed-project-giving-404)

### 26 The online page still shows the old version

**Possible causes:** wrong URL/project, a change on a different branch, an unfinished/failed deployment, or a cached resource.

1. Identify the exact GitHub commit and branch that contains your change.
2. In the intended Vercel project, open the matching deployment and its own URL. Compare a distinctive changed word or label.
3. If that deployment really contains the correct files, reload or try another browser session before changing anything else. Record whether the session requires sign-in.

**Success:** the verified URL shows the intended version and passes the relevant check. **Fallback:** share the commit, deployment status, and URL with the instructor. Repeated redeploying cannot fix an unmerged or wrongly targeted change.

### 27 A partner sees an access screen rather than your game

**Possible causes:** deployment protection, different login state, or a preview URL with different access from the intended audience URL.

1. Record the exact URL and what the partner sees.
2. Inspect the selected deployment and agreed audience with the instructor. A private GitHub repository alone does not establish the hosted site's privacy.
3. Verify the authorized access route with the partner; any protection change is a separate deliberate decision.

**Success:** the intended audience can access the intended version. **Fallback:** demonstrate local files and mark shared access blocked. Do not disable protection merely to make a test pass.

## Recovering progress and coordinating help

### 28 Two assistants overwrite files or give conflicting versions

**Possible causes:** both are editing the same project copy, or their starting files differ.

1. Pause further edits and preserve the competing versions under distinct names outside the active project folder.
2. Choose one current checkpoint and one assistant responsible for applying changes. Give any second helper a read-only review task on that same version.
3. Follow [multiple agents](docs/multiple-agents.md), record who owns each task, and review proposed changes before applying them.

**Success:** you can identify one current file and its latest tested behavior. **Fallback:** restore the last known working copy and apply one small change. Do not merge incompatible versions by alternating downloads.

### 29 The chatbot forgot the project or a new chat starts from scratch

**Possible causes:** conversation context limits, a new session, or files never being supplied to the new assistant.

1. Provide the [project-state note](templates/project-state.md), brief/rules, latest actual file, and test report.
2. Ask it to name the current project, last completed check, unresolved problem, and next small action before changing anything.
3. Correct any mismatch and continue from that saved checkpoint.

**Success:** it describes the real current state without inventing earlier work. **Fallback:** use the workbook to reconstruct missing facts and label unknowns. Do not ask it to guess which version you meant.

### 30 You replaced a working version and need it back

**Possible causes:** the latest download overwrote your only working file or a broad change introduced a regression.

1. Preserve the broken version for diagnosis and locate your saved folder checkpoint or the identified working GitHub commit.
2. Restore a copy into a separate local folder first. Open and test it before replacing active files.
3. Use the verified copy as the next working baseline and record the recovery. Review any repository restoration or publication separately.

**Success:** the specific behavior from your recorded checkpoint works again. **Fallback:** ask the instructor to help retrieve the saved version. Do not delete history or the whole repository to “start clean.”

## Finish the repair

Update the project-state note with the version, repair, observed test, remaining unknowns, and next action. Record a real blocker if you have one. A useful stopping point is either a verified repair or a preserved project with enough detail that another person can continue.

<!-- END COURSE SOURCE: docs/troubleshooting.md -->


---

# Source file: docs/multiple-agents.md

<!-- BEGIN COURSE SOURCE: docs/multiple-agents.md -->

# Working with more than one AI assistant

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Start with **two chats: one builder and one reviewer**. You decide what to build, carry the files between chats, and approve the next step. This gives a beginner a useful second look without installing an agent system. The two class projects still use their own folders, GitHub repositories, and Vercel projects.

This is an optional extension to the [six-hour class](instructor-guide.md), not a prerequisite. Complete the ordinary [setup](setup-guide.md) and a working first version before adding coordination. Product-specific instructions below were checked against official documentation on **October 5, 2026**; capabilities still depend on your actual account, client, and organization settings.

## Choose a method

| Method | Best use | What you manage |
| --- | --- | --- |
| Manual builder and reviewer chats | First website or game; any chatbot accepting files or pasted text | Freeze a version, transfer it, compare findings, request a focused repair |
| Native subagents in a supported coding workspace | A bounded review or separate research questions | Confirm real delegation, assign limits, collect results |
| Separate Git worktrees | Advanced parallel implementation in one repository | Separate working copies, file ownership, integration, and retesting |

A reviewer must receive the actual files and acceptance checks. A screenshot can reveal a layout problem but cannot establish scoring logic or whether a button works. Asking one chatbot to “act as five experts” supplies different perspectives within one conversation; it does not create five independent reviewers. A separate chat or subagent is a separate review process, but may still share the same model's blind spots.

Using another provider for review is optional. Before transferring files, decide whether that provider is an approved destination for the material. If the assistant would send the files itself, require your explicit permission first. A real person's first-time website visit or game playtest remains valuable.

## Give every helper a small job

Keep yourself as the project owner. Designate one coordinator, usually your main chat, to maintain the brief and combine accepted work. The builder changes files. The reviewer identifies problems and suggests checks without changing those files. Use the [task template](templates/agent-task.md) and [handoff template](templates/agent-handoff.md).

Every assignment needs five things: the intended result, the input version, the permitted files, the checks, and a stopping point. “Make the whole game better” is too broad. “Review whether replay resets the score in game-v2, return findings, and make no edits” is bounded.

Allow one writer per working folder. Never let two writing agents share a checkout, even if they expect to touch different files. If two tasks need the same file, perform them sequentially. A one-file `index.html` is an especially poor candidate for simultaneous editing. Parallel read-only planning can help; parallel implementation is optional.

## Option 1: the manual two-chat workflow

1. **Finish one small build.** In your builder chat, supply the brief, project instructions, relevant skill, and current files. Request a complete runnable result.
2. **Freeze it.** Save a named copy such as `website-v1` or `game-v2`, including every supporting file. If using GitHub, record the exact commit. Pause the builder while that copy is reviewed.
3. **Start a fresh reviewer chat.** Attach that frozen copy, the brief, and acceptance checks. A private GitHub link alone may be inaccessible; attach files or paste their contents when needed.
4. **Review observations.** Separate an observed failure from a likely issue found by reading code. Record browser checks the reviewer could not perform as Not tested.
5. **Return findings to the builder.** Select the most important issue, request a focused fix, and save a new version. The reviewer should not quietly become another builder.
6. **Retest.** Repeat the failing action and the core working flow. An earlier review applies to the earlier version. Review the changed result before publication.

Try this website builder prompt after attaching the named materials:

> You are my website builder. Use the attached project brief, AGENTS.md, and vc-build-small instructions. Build the first agreed version as complete runnable files. Work only in my website folder, my-first-site. Preserve the agreed sections and primary link destination. Tell me what changed and how to check it in my browser. Stop after the files and test instructions are ready. Do not upload, commit, push, or deploy them.

In a fresh chat, attach the saved output and paste:

> You are a read-only reviewer of the attached website-v1 files. First confirm the filenames and version you can inspect. Compare them with the attached brief. Check the main action, navigation, content clarity, phone layout, and keyboard usability where your tools permit. Return a short table: issue, steps, expected result, evidence, impact, and suggested repair. Distinguish code-reading concerns from behavior you actually observed. Mark unavailable browser checks Not tested. Do not rewrite the files or publish anything.

For the game, use this builder prompt:

> Use my attached game brief, rules, AGENTS.md, and vc-game-build instructions. Build one short start → play → result → restart loop in my-first-game. Implement the stated keyboard and touch controls, score rules, and reset behavior before decoration. Return complete runnable files and a checklist. Work only on this game; stop for my review before any repository save or publication.

Then give a fresh reviewer the frozen game files:

> Review game-v1 read-only against the attached rules. Inspect scoring, invalid actions, the end of a round, and everything restart must reset. If you can run it, complete a round and restart three times; report what actually happened. If you cannot, propose precise tests and label them Not tested. Identify the most important issue first. Do not edit files, change rules, or assume a green build means the game works.

Ordinary chat cannot necessarily run either project. Open the exported files yourself and record the observations in the [student workbook](handouts/student-workbook.md).

## Option 2: supported native subagents

In current Codex clients, ask explicitly for delegation. Eligible ChatGPT Work accounts also expose subagent workflows. Real subagent work appears in the product's activity or agent threads; ask the main agent to identify each task and return its result. Extra agents perform additional model and tool work and consume additional usage. No custom model configuration is needed for this exercise. [Official OpenAI subagent guidance](https://learn.chatgpt.com/docs/agent-configuration/subagents)

Claude Code supports delegated subagents and project-specific definitions in `.claude/agents/`. Its current documentation lets you ask Claude to create a restricted reviewer definition; inspect its allowed tools before using it. This is a Claude Code capability, not an assumption about every Claude chat. [Official Claude Code subagent guidance](https://code.claude.com/docs/en/sub-agents)

Use a small request first:

> If this workspace supports real subagents, use one read-only reviewer for the frozen website-v1 files and attached acceptance checks. Pause implementation until the reviewer finishes. Have it return at most five actionable findings with file references and evidence. Identify the actual delegated task. Do not grant editing, account-management, or deployment access. If delegation is unavailable, say so and give me the review brief to paste into another chat.

For parallel analysis of a game, assign one helper to read the rules for ambiguity and another to read a frozen file copy for scoring/reset problems. Give each its own input copy and a read-only assignment. Neither should change files. The coordinator reconciles the findings, then the single builder implements one agreed repair.

Start with one helper and one review pass. Set a time limit appropriate to the lesson, such as ten minutes, and request a handoff when time or usage runs short. More agents can create more waiting and coordination. If they repeat each other or lack the required tools, return to the manual workflow.

## Option 3: separate worktrees for advanced parallel builds

A worktree is a separate working copy of the same Git repository. It helps separate simultaneous edits, but it does not combine or test them for you. Codex's documented desktop flow is to select **Worktree** for a new chat, choose the starting branch, then submit the task. This requires a Git repository. The branch/worktree relationship also restricts using the same checked-out branch in multiple worktrees. [Official worktree guide](https://learn.chatgpt.com/docs/environments/git-worktrees)

Use this only with instructor help and a saved common starting version. Give each writer a separate worktree and explicit file ownership. The website and game are already separate projects; do not merge them together merely to practice this feature.

An appropriate split after a game has several files might be one writer refining `instructions.html` and another adjusting `game.css`. Both must preserve agreed element names and controls. A request to change the same `index.html` in both tasks should be sequential instead.

> Prepare two bounded task briefs from this saved version. Task A may edit instructions.html only. Task B may edit game.css only. Each writer must have a separate worktree and identify its starting version and folder. Do not start either task if the permitted files are not actually separate. Return changes and tests to the coordinator. No commits, pushes, merges, or deployments are authorized by this planning request.

Only the coordinator integrates approved changes after the owner authorizes that step. Resolve conflicts deliberately, identify the resulting version, then rerun the complete core flow. Two individually checked branches can still fail when combined. Ask a read-only reviewer to assess the integrated version before the owner approves publication.

## Make project instructions reusable

Copy [templates/AGENTS.md](templates/AGENTS.md) into the root of **each learner project**, fill in its fields, and keep the exact uppercase filename `AGENTS.md`. If that project already has instructions, combine them deliberately instead of overwriting them. Keep `README.md` as the human-facing explanation of the project. Merely adding either file to GitHub does not connect an ordinary chatbot to it.

Codex discovers project `AGENTS.md` instructions along the path to its working directory, with closer instructions and override files affecting the result. Ask it to identify the loaded instructions and project before work. A template under `templates/` is not automatically the root project's instruction file. [Official AGENTS.md guidance](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

Current Claude Code can read `AGENTS.md` directly in supported versions, but an existing project `CLAUDE.md` can take precedence. The supplied [CLAUDE.md template](templates/CLAUDE.md) uses the documented `@AGENTS.md` import when placed beside it. Verify loaded instructions with Claude Code's `/memory` or `/context` rather than assuming discovery. These conventions do not establish support in every chatbot. [Official Claude Code memory guidance](https://code.claude.com/docs/en/memory)

For ordinary chat, paste or attach the completed instructions and say:

> Read this project's AGENTS.md and the attached brief as our working instructions. Summarize the project, allowed actions, current stage, and next acceptance check. Tell me which files and tools you can actually access. If you cannot access the course repository, ask me for the named guide or skill file. Do not claim you loaded material you could not read.

## When coordination gets stuck

| Problem | Next action |
| --- | --- |
| Helpers disagree | Ask each for a reproducible example on the same version; test it |
| Reviewer saw old files | Stop; send the current frozen copy and reset the review record |
| Two writers changed one file | Pause both; retain both results; let the coordinator compare and integrate deliberately |
| A helper claims success without evidence | Ask which check ran, on which version, and what it observed |
| Delegation never appears | Use a second manual chat; do not describe simulated roles as subagents |
| Session or usage ends | Save the handoff, exact files, unfinished check, and next action; resume one task at a time |

These instructions describe a bounded working method. They do not certify the generated applications or replace the actual browser checks, partner playtests, and release records.

<!-- END COURSE SOURCE: docs/multiple-agents.md -->


---

# Source file: docs/prompt-library.md

<!-- BEGIN COURSE SOURCE: docs/prompt-library.md -->

# Prompts to keep nearby

Use one prompt for the current stage, with the relevant skill and actual project files. Replace bracketed phrases before sending. If the assistant cannot open the course link, attach `AI-COURSE-PACK.md` or the current lesson.

## Start or resume

> Read AI-START.md from the course materials I provided. Tell me which files you actually received, then help me with [website / game]. I am [starting fresh / continuing / stuck]. Give me one next action and an observable completion check.

> Read my project-state.md and current files. Summarize the version, completed checks, unresolved issue, and next action. Ask for missing files before editing. Keep the working features intact.

## Define and build

> Interview me about the audience, purpose, and first useful result. Ask no more than three questions at a time. Turn my answers into a one-page brief with five checks a person can actually perform.

> Plan three small increments. For each, name the visible result and how we will check it. Leave optional features for later.

> Build only the next agreed increment as a complete index.html with styles and scripts included where practical. Return the runnable file, not a screenshot. Explain how I save and open it. If you use separate assets, list their exact filenames and folders.

## Improve without breaking

> For [audience], change [one thing]. Preserve [working features]. Show the files you changed and tell me how to repeat the acceptance check. Do not rewrite unrelated parts.

> Explain this error in plain language: [exact error]. My steps were [steps]; I expected [result] and observed [result]. The last change was [change]. Identify the smallest useful check before proposing a repair.

> Two repairs have not worked. Summarize what was tried and the evidence. Compare the actual files with my last working copy. Propose a narrow recovery or an instructor help request, without speculative rewrites.

## Check the website

> Inspect this exact version against my brief. Separate code inspection from browser tests. Check the main action, every link, content, keyboard use, and narrow-screen layout. Mark each Passed, Failed, or Not tested and name the evidence.

## Check the game

> Test the start, play, result, and restart loop against game-rules.md. Check double-clicking an answer, scoring once, end-of-round behavior, three restarts, keyboard and touch. Tell me which checks you actually performed and which I must try.

> Tune only [speed / gap / time / target score]. Keep the rules otherwise unchanged. Save the original value, ask a partner to replay the same version, and compare what they observe.

## Get a second opinion

> Review the attached [version] read-only. You did not build this copy. Find reproducible problems that affect the stated user journey. Give steps, expected versus actual behavior, and the smallest likely fix. Do not edit, deploy, or invent test results.

See [multiple-agent options](docs/multiple-agents.md) for using manual chats, native helpers, or separate worktrees.

## Publish and pause

> Prepare publication for [repository], [branch/version], and [Vercel project]. Confirm the intended audience and whether this action publishes production. List the checks still needed. Proceed only within the publication permission I have actually given.

> Check the actual deployed URL [URL] against the same acceptance checks. A successful upload alone is not proof. Record the version, device, observations, and any untested behavior.

> Update project-state.md with the actual files, saved version, working behavior, failed or untested checks, current blocker, and one next action. Give me a short prompt for continuing in a new chatbot.

<!-- END COURSE SOURCE: docs/prompt-library.md -->


---

# Source file: docs/glossary.md

<!-- BEGIN COURSE SOURCE: docs/glossary.md -->

# Plain language glossary

Use this page when the chatbot, GitHub, or Vercel introduces an unfamiliar word. You do not need to memorize the terms before building. Return to [Start here](START-HERE.md), the [website walkthrough](docs/website-walkthrough.md), or the [game walkthrough](docs/game-walkthrough.md) when you have enough context to take the next step.

| Term | Meaning in this class | Example |
| --- | --- | --- |
| Acceptance check | A specific action and expected result that tells you whether the work meets the brief. | Activating Play again returns the quiz to question 1 with zero points. |
| AI chatbot | The assistant you ask to explain, generate, or change your project. Its available tools vary. | A chatbot may provide a file for you to download without being able to open GitHub. |
| Agent | An assistant that can take a sequence of actions using tools. It still needs a bounded task and appropriate access. | A coding agent edits a file and runs an available check. |
| API | A defined way for software to request something from other software. | A weather website might request a forecast from a separate service. Neither core project needs this. |
| Asset | A supporting file used by the page or game. | A photograph, icon, sound, or font file. |
| Authentication | Proving who you are to a service. | Signing in and completing a verification-code prompt yourself. |
| Authorization | Permission for a particular action or resource. | A GitHub connection may have access to one repository but not another. |
| Backend | Software running on a server to handle shared data or operations. | A real booking system would usually need more than a static page. |
| Branch | A separate line of saved project changes. | A branch lets you propose a new heading without immediately changing the production version. |
| Browser | The application that displays and runs websites. | Safari, Chrome, Edge, or Firefox. |
| Build | A process that transforms source files into files ready to serve, when a project requires it. | Framework projects often have a build step. The class's plain HTML projects do not. |
| Cache | A stored copy used to load something again more quickly. | A browser may retain an older image. First check the URL and version before blaming the cache. |
| Checkpoint | A version you can identify and return to. | A saved folder copy or Git commit after the button has been tested. |
| Coding workspace | An environment where an assistant or person can edit project files and possibly run them. | A connected coding task can have different abilities from ordinary chat. |
| Commit | A named saved change in Git history. | “Add checked reading club practice page.” |
| Commit ID or SHA | The identifier for a saved Git commit. | Record it with a test so you know which version was checked. |
| Connector or plugin | An integration that gives an assistant access to supported outside tools or information. | A GitHub plugin. Its presence does not prove that file editing or deployment is available. |
| Console error | A technical message from the browser about something that failed. | A script may name an absent file. Share the relevant message, not a guess about its cause. |
| Context | The information available to the chatbot in its current conversation or workspace. | The brief, current file, observed failure, and rules. A new chat may not have any of these. |
| CSS | Instructions controlling the page's appearance. | Colors, type size, spacing, and layout. |
| Database | A system for storing and retrieving structured data. | Shared customer records. Neither classroom project requires a database. |
| Deploy | Send a version of the project to a hosting service so it can run there. | Vercel creates a deployment from the intended GitHub version. |
| Deployment URL | The web address for a deployed version. | Open the URL shown by the completed deployment when testing that version. |
| Dependency | Another software package a project relies on. | A framework can depend on many packages. A single self-contained HTML file avoids those package steps. |
| Directory or folder | A place that contains files and possibly other folders. | `my-first-site` on your computer. |
| Environment | A place or set of settings where work runs. | Your local browser, a coding workspace, a preview deployment, and production are different environments. |
| Export | Obtain project files that can be used outside the chatbot's preview. | Download `index.html` and its supporting files. |
| File extension | The ending of a filename that indicates its type. | `.html`, `.css`, `.js`, `.md`, and `.png`. Renaming a rich-text document does not convert its contents. |
| Framework | A reusable software structure for building applications. | Some projects need one; the core class examples use plain HTML, CSS, and JavaScript. |
| Frontend | The part of the software the visitor sees and interacts with. | The website page and the browser game's controls. |
| Git | The version-tracking system behind repository history. | It records changes and supports branches. Git and GitHub are related, but are not the same thing. |
| GitHub | A service that hosts repositories and supports collaboration. | Your `my-first-game` repository stores the game files and their history. |
| Hosting | Making files or software available from a server to visitors. | Vercel hosts the deployed website. |
| HTML | The structure and content of a web page. | Headings, paragraphs, links, and buttons. |
| `index.html` | The entry file used by the recommended plain static project. | It belongs at the selected project's serving root. `index.html.txt` is a different filename. |
| JavaScript | Code that changes behavior in the browser. | Checking an answer, changing score, and starting a new round. |
| Local | On your own computer. | A file opened from your Documents folder is not automatically published online. |
| Local storage | A browser feature for saving small amounts of information for a site. | An optional best score in that browser. It does not automatically sync to another device. |
| Markdown | Plain text with simple marks for headings, lists, and links. | A `SKILL.md` file or `project-brief.md`. |
| Merge | Bring changes from a branch into another branch. | Merging a checked change into the production branch can trigger publication. |
| Plain text | Text without word-processor formatting. | Use it when saving HTML code from chat. Rich text can add content that breaks the file. |
| Preview | A place to inspect a proposed or generated result. | A chatbot preview and a Vercel branch preview are different things; neither alone verifies the exported file. |
| Production | The version intended for the project's actual audience. | In the documented class flow, the first Vercel deployment is production. |
| Prompt | The instructions and context you send the chatbot. | “Fix repeated answer scoring; preserve the question text and return the complete file.” |
| Pull request or PR | A proposed set of repository changes that can be inspected before merging. | Review a changed button and its preview before releasing it. |
| Regression | Something that used to work stops working after a change. | A color update accidentally hides the Next button. |
| Repository or repo | A project's files and tracked history. | Your website and game use separate repositories. |
| Responsive layout | A layout that adapts to different screen sizes. | The answer buttons fit on a narrow phone screen. |
| Root | The top folder of the particular project or output being discussed. | If Vercel serves the repository root, it must find `index.html` there rather than inside an extra downloaded folder. |
| SDLC | Software development lifecycle: discover, define, design, build, test, release, and maintain. | Repeat the loop after feedback reveals a better rule. |
| Skill | A reusable instruction sheet describing how to perform a task. | Paste `vc-game-playtest/SKILL.md` into chat. It provides instructions, not new permissions or tools. |
| Source code | The text files that describe the software. | The HTML and JavaScript are source; a screenshot is only an image of the result. |
| State | What the game or application currently remembers. | Current question, score, selected answer, and whether the round is over. |
| Static site | A site served as prepared files. Browser JavaScript can still make it interactive. | Both the one-page website and self-contained quiz can use static hosting. |
| Test evidence | An observation tied to a specific version and action. | “On this deployment, B/A/C/B/A produced 5 out of 5 in Safari.” |
| URL | The address of a page or resource. | A GitHub repository URL is different from the published game URL. |
| Vercel | The hosting service used for publication in this class. | It imports the learner's repository and provides a deployment address. |
| ZIP archive | A package containing files and folders. | Extract it to use its contents. Uploading only the ZIP does not place `index.html` at the serving root. |

## Phrases to ask the chatbot to clarify

> Explain that term using my actual project and one concrete example. Tell me what I need to do next, what result I should see, and whether you can perform the step or I need to do it.

> You said this is fixed. Identify the exact file and version changed, the check actually performed, and what remains for me to observe in the browser.

> Is that service or installation required for the brief, or an optional extension? Keep the current class project within plain static files unless we have agreed otherwise.

Platform interfaces and access rules change. Use the [setup guide](setup-guide.md) for dated official account and deployment references, and [troubleshooting](docs/troubleshooting.md) for a specific failure.

<!-- END COURSE SOURCE: docs/glossary.md -->


---

# Source file: skill-guide.md

<!-- BEGIN COURSE SOURCE: skill-guide.md -->

# Skills for the vibe coding class

These nine short skills adapt the workflow in Mark Hinkle's VibeCoding-a-Website repository for the foundations and website project in a six-hour, two-project business workshop. Seven additional game skills are in the [game skill guide](game-skills-guide.md). Each accepts a specific input and produces an inspectable result. They are draft instruction files, not installed plugins or a promise that every chatbot has the same tools.

## Use a skill

For the portable route, open the relevant SKILL.md, paste or attach its contents to the chosen assistant, add the stage prompt below, and supply the previous stage's artifacts. Ask the assistant to follow the instructions for that stage. If it cannot write files, copy the returned artifact into your project notes.

For native installation, use the chosen platform's current supported skill workflow and verify that the skill appears. The original repository uses .claude/skills. Do not assume placing this package in a folder automatically installs it in ChatGPT, Claude chat, or another product. In supported OpenAI surfaces, installed skills can be selected with @ in ChatGPT or $ in Codex. [Official skill guidance](https://learn.chatgpt.com/docs/skills-and-plugins)

The skills are deliberately self-contained. No scripts, API keys, or original skill installation are required to read them. An ordinary chatbot may supply complete files for the learner to save, test, and upload. Automatic editing, testing, repository changes, and deployment require the corresponding tools and authorized connections.

## Stage prompts

### Teach the lifecycle

[vc-sdlc-coach](skills/vc-sdlc-coach/SKILL.md)

> Explain the software development lifecycle using our workshop website. Ask me a few questions to check that I understand it.

### Prepare the workspace

[vc-setup-guide](skills/vc-setup-guide/SKILL.md)

> Help me prepare GitHub and Vercel, then establish a file or repository workflow with my favorite chatbot. Verify the project identity and tell me which capabilities work.

### Define the first version

[vc-project-brief](skills/vc-project-brief/SKILL.md)

> Interview me about my project, then create a short brief with a small first version and clear acceptance checks.

### Plan the page and work

[vc-project-plan](skills/vc-project-plan/SKILL.md)

> Use my approved brief to plan the visitor journey, page layout, and three small build increments. Explain what we will check after each.

### Build one increment at a time

[vc-build-small](skills/vc-build-small/SKILL.md)

> Build the first agreed increment from my brief and plan. Show me the result and how to check it before continuing.

### Test the actual experience

[vc-quality-check](skills/vc-quality-check/SKILL.md)

> Test this exact version against my acceptance checks. Show passed, failed, and untested items with evidence, and prioritize the fixes.

### Publish the checked version

[vc-publish-site](skills/vc-publish-site/SKILL.md)

> Prepare this checked version for Vercel. Show the exact project and publication details, then guide me through deployment and live verification.

### Change and recover

[vc-maintain-site](skills/vc-maintain-site/SKILL.md)

> Make this one update while preserving the working page and links. Show the difference, test the preview, and explain how I can recover the prior version.

### Demonstrate and hand off

[vc-project-handoff](skills/vc-project-handoff/SKILL.md)

> Create a concise handoff and a two-minute demo from the actual project records. Make unfinished or untested work clear.

## What was checked

The package is checked for skill frontmatter, naming, local links, and consistency with the class sequence. These checks do not establish that the skills have been exercised end to end on every supported product. Before teaching, rehearse the complete project on each offered path and revise instructions based on observed behavior.

<!-- END COURSE SOURCE: skill-guide.md -->


---

# Source file: game-skills-guide.md

<!-- BEGIN COURSE SOURCE: game-skills-guide.md -->

# Game skills for the vibe coding class

Seven new classroom skills derived from the All Things AI Arcade. Use them with your favorite chatbot to make a small browser game during project 2. The workflow is reusable across themes; students may make something entertaining, educational, or connected to their work.

## How to use the pack

Open the current stage's SKILL.md and paste or attach it to your chatbot with its starter prompt and the earlier stage's output. If the platform supports native skills, install through its supported workflow and verify discovery. Pasting the instructions is sufficient for the portable route; it does not grant tools or account access.

Keep the game in its own folder and repository. Request complete runnable HTML, CSS, and JavaScript files. Open the files in a browser, test them, and publish them to the game's own Vercel project. Use a connected coding workspace if available, or manually upload the checked files through GitHub.

## Seven stages

| Skill | Input | Output |
| --- | --- | --- |
| vc-game-brief | Idea and preferred theme | game-brief.md |
| vc-game-rules | Agreed brief | game-rules.md and observable checks |
| vc-game-build | Brief and rules | Runnable game files |
| vc-game-look-feel | Playable game | Clear visual treatment and game-style.md |
| vc-game-feedback | Working outcomes | Result messages, replay, and game-feedback.md |
| vc-game-playtest | Exact build and rules | game-test-report.md and focused repairs |
| vc-game-publish | Checked game and test report | Deployed game or blocker, and game-release.md |

The two documentation outputs in the polish stage can be short paragraphs; the playable result is the priority. Students can skip optional visual effects and educational content while still completing the core game.

## Choose a starter recipe

### A small word or knowledge puzzle

Inspired by [Promptle](https://staging.allthingsai.org/arcade/promptle). Start with five to ten prepared questions or words, a few attempts, visible progress, a result explanation, and replay. Theme it around a hobby, company vocabulary, or a subject the learner knows. Use verified content if presenting facts.

The easiest version can use clues or multiple-choice answers. A full Wordle-style version is an extension: it also needs correct handling of repeated letters, allowed guesses, and letter-position feedback. Daily locks, streaks, large dictionaries, and share cards can wait.

Completion example: invalid input does not spend an attempt; a correct answer changes progress once; the final attempt ends the round correctly; replay returns to the agreed starting state.

### A one-button obstacle game

Inspired by Flappy Brains in the [Arcade](https://staging.allthingsai.org/arcade). Start with one character, a tap or key to move upward, generous obstacle gaps, a score for passing an obstacle, a collision result, and immediate replay. Students choose the character and setting.

Keep the first version forgiving. Add consistent motion across devices, correct hit detection, and a fresh state on every restart. Extra worlds, advanced physics, collectibles, and asset packs can wait.

Completion example: one tap produces one intended action; each obstacle scores once; loss has a visible cause; repeated restart does not make the game run faster.

### A paddle game

Inspired by Brain Pong in the [Arcade](https://staging.allthingsai.org/arcade). Start with a player paddle, ball, simple opponent or target wall, clear scoring, and a short round. Use keys on a laptop and pointer or touch controls on a phone. Students can change the visual theme and target score.

Keep speed, paddle size, and opponent behavior adjustable. Fancy opponents, network play, tournaments, and global rankings are later work. The first test is whether a beginner can understand and control it.

Completion example: the ball bounces correctly; a missed ball changes score once; reaching the target ends the round; replay resets score, positions, and movement.

## Starter prompts

### Choose a small game

[vc-game-brief](game-skills/vc-game-brief/SKILL.md)

> Help me choose a small game I can finish in this class. Ask about my theme and preferred gameplay, then write a brief and five observable completion checks.

### Write rules and controls

[vc-game-rules](game-skills/vc-game-rules/SKILL.md)

> Turn my game brief into short instructions, keyboard and touch controls, score rules, and a table showing start, play, result, and restart.

### Build the first playable version

[vc-game-build](game-skills/vc-game-build/SKILL.md)

> Build a plain playable version from my brief and rules. Make the entire start, play, result, and restart loop work before adding decorative effects.

### Make the game clear and readable

[vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md)

> Polish this working game without changing its rules. Make the player, targets, hazards, score, and controls clear on a phone and a laptop.

### Explain results and invite replay

[vc-game-feedback](game-skills/vc-game-feedback/SKILL.md)

> Improve the result screen so players understand what happened and can immediately play again. Include a brief sourced lesson only if it fits my game.

### Playtest and change one thing at a time

[vc-game-playtest](game-skills/vc-game-playtest/SKILL.md)

> Help a partner playtest this exact game without coaching. Record real observations, fix the biggest problem, and tune one difficulty setting at a time.

### Publish and hand off the game

[vc-game-publish](game-skills/vc-game-publish/SKILL.md)

> Prepare my checked game for its own GitHub repository and Vercel project. After publication, verify a complete round and restart at the actual URL.

## What came from the Arcade

The inspected Arcade specification contributes a simple main action, short instructions, matching keyboard and touch controls, clear game states, adjustable difficulty, readable phone graphics, understandable outcomes, and immediate replay. Its five review perspectives become playtest questions, with another learner supplying the actual first-time-player test.

The live beta guide also asks testers to record the steps, expected result, and actual result and to check desktop and phone behavior. [Arcade beta guide](https://staging.allthingsai.org/arcade/beta)

We adapted the patterns rather than distributing the site's implementation or assets. The source repository's game instructions are not packaged game skills, and these seven files are newly written. They omit ATA accounts, remote scores, registration, newsletter prompts, medallion unlocking, and repository-specific agent operations. Browser-local best scores are optional.

## Readiness

These files are draft skills with validated formatting and checked local links. The source material and live screens were inspected, but the new skills have not yet been used to build and publish all three classroom recipes. Rehearse the chosen recipes before class. Native installation, complete game behavior, and classroom timing remain to be verified in that rehearsal.

<!-- END COURSE SOURCE: game-skills-guide.md -->


---

# Source file: handouts/student-workbook.md

<!-- BEGIN COURSE SOURCE: handouts/student-workbook.md -->

# Student workbook

Use this workbook to finish two projects during the class: a simple website and a small browser game. The day contains **360 teaching minutes**, with lunch and breaks added separately. Use your favorite chatbot. You can paste or attach a skill's instructions; native skill installation is optional.

Keep a separate folder, GitHub repository, and Vercel project for each project. Your website belongs in `my-first-site`; your game belongs in `my-first-game`. Choose your own names if you prefer, but record them below and check the destination before every upload or release.

The [setup guide](setup-guide.md) explains the portable file route and connected coding workspaces. The [website skill guide](skill-guide.md) and [game skill guide](game-skills-guide.md) provide the instructions to use at each stage.

## My workspace

| Item | My answer |
| --- | --- |
| Name | |
| Class date | |
| Preferred chatbot | |
| Route: portable files or connected workspace | |
| Website folder and GitHub repository URL | |
| Website Vercel project name | |
| Game folder and GitHub repository URL | |
| Game Vercel project name | |
| My partner for testing | |
| Setup blocker, if any | |

A connection badge does not establish what your assistant can do. Confirm that you can receive complete runnable files. For a connected workspace, also confirm the repository and branch before asking it to make changes. If setup is blocked, use the instructor's checkpoint or work with a partner and record what remains unresolved.

## Project 1: my website brief

Copy the completed brief into the website project's `project-brief.md`. Use [vc-project-brief](skills/vc-project-brief/SKILL.md), then [vc-project-plan](skills/vc-project-plan/SKILL.md).

| Question | My answer |
| --- | --- |
| Working title | |
| Who is this website for? | |
| What should a visitor understand or accomplish? | |
| Main heading | |
| Two or three useful sections | |
| Main link or button label | |
| Exact destination or behavior of that link/button | |
| Content and images I can use | |
| Desired style in three words | |
| What is deliberately outside the first version? | |

**My one-sentence outcome:** A visitor can ____________________________________.

**My completion checks:** Write observable actions. “It looks good” is not enough; “the main button opens the stated event page” can be tested.

| Check | Action to try | Expected result |
| --- | --- | --- |
| W1: purpose | Ask a partner what this page is for | |
| W2: content | Read the heading and sections | |
| W3: main action | Follow the primary link/button | |
| W4: navigation | Follow each navigation link | |
| W5: phone layout | Open or resize the page to a phone-sized view | |

Build the smallest complete version using [vc-build-small](skills/vc-build-small/SKILL.md). Request complete runnable files. Open the exported `index.html` in your browser and keep any supporting files at their expected paths. Save a working checkpoint before a larger change.

**A focused change request:** For this audience, change ____________. Preserve ____________. I will check it by ____________.

## Project 2: my game brief

Copy this brief into the game project's `game-brief.md`. Use [vc-game-brief](game-skills/vc-game-brief/SKILL.md). Choose one short round and one main mechanic.

| Question | My answer |
| --- | --- |
| Game title and theme | |
| Who will play? | |
| Pattern: puzzle, one-button obstacle game, paddle game, or another small idea | |
| What is the player's goal? | |
| What is the main action? | |
| How long should one round take? | |
| What makes a round end? | |
| What will make someone want to play again? | |
| What is outside the first version? | |

**My one-sentence game:** The player ____________ to ____________ before ____________.

Use [vc-game-rules](game-skills/vc-game-rules/SKILL.md) to complete the following rules table. Save it as `game-rules.md`. A partner should be able to explain a round from this table before the game is built.

| Situation | Player action or event | What the game remembers or changes | What the player sees | Check |
| --- | --- | --- | --- | --- |
| Before play | Open the game | | | Instructions and Start are understandable |
| Start | Activate Start | | | One new round begins |
| Play | Use the main control | | | The control has the stated effect |
| Success during play | | | | Progress or score changes once |
| Invalid input or mistake | | | | The response matches the rules |
| Round ends | | | | Play stops or changes as intended; result is clear |
| Restart | Activate Play again | | | Score, positions, guesses, timers, and other round state reset as agreed |
| Repeat | Finish and restart several rounds | | | No duplicated actions or unintended speed changes |

| Controls and scoring | My rule |
| --- | --- |
| Keyboard control | |
| Pointer or touch control | |
| How points/progress are earned | |
| Win condition, if applicable | |
| Loss or round-end condition | |
| Difficulty setting I can adjust | |
| Optional best score: absent or stored only in this browser | |

Build the complete start → play → result → restart loop using [vc-game-build](game-skills/vc-game-build/SKILL.md). Add appearance and feedback after that loop works. Use [vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md) and [vc-game-feedback](game-skills/vc-game-feedback/SKILL.md) for clear controls, readable scores, understandable results, and replay.

## Test report template

Create **one report per project**. Save the website's as `test-report.md` and the game's as `game-test-report.md`. Use [vc-quality-check](skills/vc-quality-check/SKILL.md) or [vc-game-playtest](game-skills/vc-game-playtest/SKILL.md).

| Test context | Record |
| --- | --- |
| Project and tester | |
| Date | |
| Version: commit/checkpoint label and file copy tested | |
| Location: local files, preview URL, or published URL | |
| Browser and device | |
| Real phone used, or only a resized browser? | |

Use only **Passed**, **Failed**, or **Not tested**. Record what you actually observed. A chatbot's claim is not a substitute for opening the files and trying the behavior. A local result does not establish the published result; repeat the key checks after deployment.

| ID | Steps | Expected result | Observed result | Status | Evidence or blocker |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

For the website, cover purpose, content, the main action, navigation, and phone layout. For the game, cover instructions, Start, controls, scoring, the end of a round, and repeated restart. If you added saved scores, also check refresh and what happens when browser storage is unavailable. Mark an untested device honestly.

**Two-minute partner playtest:** Let your partner try the game without coaching.

| Prompt | Observation |
| --- | --- |
| Where did the player hesitate or ask for help? | |
| Which rule or outcome surprised them? | |
| Which control or score behaved incorrectly? | |
| Would they replay, and why? | |
| Biggest issue to fix first | |

| Repair record | Record |
| --- | --- |
| Issue selected | |
| One change requested | |
| New version/checkpoint | |
| Same test repeated and actual result | |
| Other working behavior checked again | |
| Remaining failure or untested behavior | |

## Release record template

Complete this separately for both projects. Save the website's as `release-record.md` and the game's as `game-release.md`. Use [vc-publish-site](skills/vc-publish-site/SKILL.md) or [vc-game-publish](game-skills/vc-game-publish/SKILL.md).

**Before deployment:** The first Vercel deployment of a project is production. Confirm that the intended content is suitable for the people who can access the URL. Later updates to the configured production branch can trigger deployment. Follow the [setup and publication guide](setup-guide.md#publish-each-project).

| Release detail | Record |
| --- | --- |
| Project: website or game | |
| GitHub repository URL and owner | |
| Vercel account/team and project name | |
| Branch and commit/checkpoint released | |
| Intended audience and access behavior | |
| Person approving this publication and date | |
| Deployment status | |
| Actual URL, if one exists | |
| Date and device used to open that URL | |
| Key published checks and observations | |
| Second person/device check, or Not tested | |
| Remaining failures or limitations | |
| If blocked: exact blocker and working files retained | |

Choose an accurate completion statement:

- **Published and checked:** I opened the URL above and observed the recorded checks.
- **Published, verification incomplete:** A deployment exists, but these checks remain: ____________.
- **Working files retained, deployment blocked:** My files are at ____________; the blocker is ____________.

## Two-project handoff

Use [vc-project-handoff](skills/vc-project-handoff/SKILL.md) to prepare this record. Keep a copy with your class notes and a project-specific copy in each repository if useful.

| Detail | Website | Game |
| --- | --- | --- |
| Purpose and intended user | | |
| Owner | | |
| Working files/folder | | |
| GitHub repository | | |
| Vercel project and actual URL | | |
| Version/checkpoint | | |
| Test report location | | |
| Release record location | | |
| What works, based on checks | | |
| Known limitations and Not tested items | | |
| How to open or run it | | |
| Next small improvement | | |
| How I will check that improvement | | |

**My final demonstration:** Show the website's main action, complete a game round and restart, then point to the saved versions and test records. If a deployment is blocked, demonstrate the working files and explain the recorded blocker.

**What I learned:** One assumption I corrected was ____________. The evidence that changed my mind was ____________.

<!-- END COURSE SOURCE: handouts/student-workbook.md -->


---

# Source file: templates/AGENTS.md

<!-- BEGIN COURSE SOURCE: templates/AGENTS.md -->

# Learner project instructions

This is a template. Before using it, copy it to the root of one learner project, keep the filename `AGENTS.md`, and fill in the fields below. Website and game projects get separate copies. Do not invent missing project details.

## Project identity

- Project name: [fill in]
- Project type: [website or browser game]
- Owner and coordinator: [fill in]
- Purpose and intended user: [fill in]
- Working folder: [fill in]
- GitHub repository: [fill in, or not connected]
- Vercel project: [fill in, or not created]
- Brief and rules files: [fill in]
- Current saved version or checkpoint: [fill in]
- Current stage and next approved outcome: [fill in]

## Work with the learner

Use plain language. Explain the next action and why it helps. Confirm project identity and read the brief before editing. Distinguish files and tools you actually accessed from material that is unavailable. If a link cannot be read, ask for its contents or an attachment.

For ordinary chat, return complete runnable files with exact filenames and saving instructions. Do not substitute a screenshot or description for the requested files. For a connected workspace, inspect existing files and preserve working behavior. Use the actual project setup; do not invent test commands or claim tests ran.

The core project uses static HTML, CSS, and JavaScript. Keep the scope small. Accounts, remote databases, multiplayer, and external score services require a separate decision and are outside the first classroom version.

## Stage workflow

1. Define the user, purpose, first-version scope, and observable acceptance checks.
2. Plan one small increment. Ask only for missing decisions that affect the outcome.
3. Build the agreed increment in the designated project folder. Preserve a working checkpoint before substantial changes.
4. Check the actual files against the brief. Report Passed, Failed, or Not tested with observations.
5. Repair the most important failure and repeat its check plus the core working flow.
6. Prepare the specific release details for the owner's approval. After an authorized deployment, check the actual URL.
7. Leave a handoff identifying the version, tests, limitations, and next action.

## Acceptance checks

For a website, check its purpose, accurate content, main link/button destination, navigation, phone layout, and keyboard usability.

For a game, check instructions, Start, supported keyboard and touch controls, score changes, invalid actions, round-end behavior, and repeated restart. Restart must reset the state specified in the rules. If browser-local scores are included, check refresh and unavailable storage.

Record the version, browser/device, steps, expectation, and observation. Keep local-file, preview, and production results separate. A code-reading concern is not an executed browser test. Ask the learner or a partner to perform checks your tools cannot do. Record real-device gaps honestly.

## Boundaries

Edits require an agreed task. Saving a local draft does not authorize a commit, push, merge, or deployment. Obtain the owner's explicit authorization for those actions and name the destination and version. Account credentials remain with the learner; do not request that they paste authentication material into chat. Do not make purchases, change account permissions, or activate paid services automatically.

Do not publish private or personal material without the owner's specific approval. Ask before transferring project material to another provider. A private repository does not establish private website access. The first Vercel deployment is production; explain that before the owner approves publication.

## Optional multiple-agent work

Use helpers only when the owner requests delegation or approves the proposed split. Start with one builder and one read-only reviewer. Give every helper a bounded task, exact input version, allowed files, checks, and stopping point.

One writer owns each working folder. Concurrent writers require separate worktrees or isolated copies; never share a checkout. Same-file implementation is sequential. Freeze the reviewed version. The reviewer reports findings without edits and identifies untested behavior. Only the coordinator integrates approved work; retest the integrated version. Do not describe several roles within one chat as independent agents.

## Resume record

Keep this record in `project-state.md` at a stopping point, following the course's state template. The coordinator owns that shared record; individual helpers return separate handoffs instead of overwriting it. Update the existing record rather than creating a competing summary.

- Current project, folder, and saved version:
- Brief/rules and current stage:
- Completed outcome and files changed:
- Checks performed and observations:
- Failures and Not tested items:
- Publication status and actual URL, if any:
- Pending owner decision or blocker:
- Next single action and how to verify it:

On resume, inspect the actual files and compare their version with the handoff before proceeding. A handoff describes prior work; it is not evidence that the current files still match it.

<!-- END COURSE SOURCE: templates/AGENTS.md -->


---

# Source file: templates/CLAUDE.md

<!-- BEGIN COURSE SOURCE: templates/CLAUDE.md -->

@AGENTS.md

# Claude Code project instructions

This optional bridge belongs beside a completed `AGENTS.md` at the root of a learner project. The import above is Claude Code syntax. Keep shared project rules in `AGENTS.md`.

Before work, identify the project and summarize its instructions. Verify the imported file is available. If it is missing, stop and ask for the completed project instructions rather than inventing them.

Use the capabilities available in the current session. Do not claim that ordinary Claude chat loaded this file automatically. In ordinary chat, the learner should paste or attach the completed `AGENTS.md` directly.

Claude Code's documented import and discovery behavior was checked on October 5, 2026 in the [official memory guide](https://code.claude.com/docs/en/memory). Check `/memory` or `/context` in the actual Claude Code session to confirm loaded instructions.

<!-- END COURSE SOURCE: templates/CLAUDE.md -->


---

# Source file: templates/project-state.md

<!-- BEGIN COURSE SOURCE: templates/project-state.md -->

# Project state: resume here

Copy this template into your own project as `project-state.md`. Update it at checkpoints. Attach the actual latest files along with this record when changing chats or assistants.

| Field | Value |
| --- | --- |
| Project name and type: website or game | |
| Owner and intended audience | |
| Local folder or workspace | |
| GitHub repository and branch, if available | |
| Version: commit or clearly named saved copy | |
| Last updated | |
| Chatbot and route: portable or connected | |
| Current lesson and skill | |
| Vercel project and URL, if deployed | |
| Last working copy and how to reopen it | |

## Goal and agreed scope

Purpose:

First version includes:

Out of scope:

## Files the next assistant must receive

List the actual file names and locations. Do not write “in the previous chat” as the only location.

## Observed state

| Check | Version and location tested | Passed / Failed / Not tested | Actual observation |
| --- | --- | --- | --- |
| | | | |

## Current blocker or last change

Exact steps:

Expected result:

Actual result or error (remove sensitive information):

Repairs already attempted and their results:

## Next action

One small task:

Completion check:

Who owns the next edit:

Permissions already given, including any specific release destination:

## Prompt for a new chat

> Read this state record and the attached current files. Identify the project, version, what has actually been tested, and the next action. Tell me if a necessary file is missing. Continue from that action; do not rebuild the entire project or claim access to the earlier conversation.

<!-- END COURSE SOURCE: templates/project-state.md -->


---

# Source file: templates/help-request.md

<!-- BEGIN COURSE SOURCE: templates/help-request.md -->

# Help request

Use this to get useful help from your chatbot, a partner, or the instructor. Share the smallest relevant files and observations. Remove passwords, keys, authentication codes, private customer information, and sensitive log values.

- Project and version:
- Current lesson or skill:
- Exact file or URL:
- Browser/device and chatbot route:
- What I clicked or typed:
- What I expected:
- What actually happened:
- Exact error text, if any:
- Last change before the problem:
- What I already tried and what happened:
- Location of my last working copy:
- Screenshot or relevant file attached (if available):

**Request:** Help me identify one likely cause and one reversible check. Explain what a successful result would look like. Preserve my working files and do not replace the entire project to fix this one problem.

<!-- END COURSE SOURCE: templates/help-request.md -->


---

# Source file: templates/agent-task.md

<!-- BEGIN COURSE SOURCE: templates/agent-task.md -->

# Bounded agent task

Fill this in and paste or attach it with the actual input files. A file link alone does not establish access.

## Assignment

- Task name:
- Role: builder / read-only reviewer / researcher / coordinator
- Project: website / game
- Owner and coordinating chat:
- Desired outcome in one sentence:
- Why this task can proceed independently, or which earlier result it needs:

## Exact inputs and ownership

- Input version: exact commit or frozen file-copy label
- Working folder or isolated worktree:
- Files supplied and brief/rules:
- Allowed files to edit, or “none — read-only”:
- Files and working behavior to preserve:
- Other active writer and their separate ownership, if any:
- Missing access or tools to report before work:

## Checks and limits

- Observable acceptance checks:
- Browser/device or other evidence needed:
- Checks the learner must perform if tools are unavailable:
- Time limit and stopping point:
- Maximum review findings or other output limit:
- Decision to return to the owner if encountered:

Do not change another agent's files. Do not perform a commit, push, merge, deployment, purchase, account change, or transfer to another provider unless the owner explicitly authorizes that specific action. Reviewers return findings without edits. Stop if the input version or ownership is unclear.

## Return to the coordinator

Use the agent handoff format. Identify the version inspected, files changed or read, actual checks, findings, untested behavior, and next action. State whether work was performed by a real delegated agent or supplied through a separate manual chat. Do not claim independent review when you reviewed your own implementation.

<!-- END COURSE SOURCE: templates/agent-task.md -->


---

# Source file: templates/agent-handoff.md

<!-- BEGIN COURSE SOURCE: templates/agent-handoff.md -->

# Agent handoff

## Identity and result

- Task and role:
- Project and working folder:
- Coordinating chat or person:
- Exact input version:
- Output version or frozen file-copy label:
- Status: complete for assigned scope / incomplete / blocked
- Outcome in one sentence:
- Files changed, or files inspected for read-only work:

## Checks and findings

Use Passed, Failed, or Not tested. Record observations, not an assurance that the project is perfect. Label code-reading concerns separately from executed checks.

| Check or finding | Version and location | Steps or evidence | Expected | Observed | Status |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

- Browser and device actually used:
- Biggest remaining issue:
- Untested behavior and why:
- Whether the result was independently reviewed, by whom, and at what exact version:

## Integration and continuation

- Changes the coordinator may need to compare or integrate:
- Conflicts or overlapping ownership:
- Specific owner authorization still needed:
- Publication status and actual URL, if any:
- Next single action:
- Check to repeat after that action:

The coordinator must inspect the actual version, integrate only approved work, and retest the combined result. This handoff does not itself authorize a commit, push, merge, deployment, account change, purchase, or transfer to another provider.

<!-- END COURSE SOURCE: templates/agent-handoff.md -->


---

# Source file: game-skills/vc-game-brief/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-brief/SKILL.md -->

---
name: vc-game-brief
description: "Turn a nontechnical learner's game idea into a small classroom project with a clear goal, main action, and completion checks."
---

# Choose a small game

Ask for the player's goal, preferred theme, and the kind of interaction they enjoy. Offer a small word or knowledge puzzle, one-button obstacle game, or paddle game if they need a starting point. Preserve the learner's choice; an educational purpose is optional.

Write game-brief.md with a one-sentence concept, intended player, one main action, a short round, scoring, win or loss conditions, restart, controls, and first-version exclusions. Define five observable completion checks. Keep the initial build to one scene or board and one mechanic that can be finished within the class period.

Separate fictional scoring and metaphors from factual claims. Do not invent an AI lesson or business objective if the learner wants a game for fun. Put multiplayer, logins, payments, global leaderboards, daily challenges, and large asset libraries in a later list unless explicitly required and feasible.

Summarize the playable first version for review. End with the brief; do not build or publish yet.

<!-- END COURSE SOURCE: game-skills/vc-game-brief/SKILL.md -->


---

# Source file: game-skills/vc-game-build/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-build/SKILL.md -->

---
name: vc-game-build
description: "Create a small playable browser game from an agreed brief and rules, including a complete start to restart loop."
---

# Build the first playable version

Read the brief, rules, and actual project files. Implement one complete loop before visual polish: start, player action, feedback, score or progress, round result, and restart. Use simple shapes or text first. Keep rules and adjustable difficulty values separate from rendering so changes are understandable.

For the portable class route, favor a complete index.html with included CSS and JavaScript or a few static files that work together without a server build. Use an existing framework only when the learner's environment already supports it or the requirement justifies it. Provide complete exportable files; a chatbot preview alone is not the deliverable.

For animated games, use elapsed-time or fixed-step updates and handle long background-tab gaps so returning does not cause an unavoidable loss. Prevent duplicated animation loops, event listeners, or score updates after restart. Use repeatable starting conditions when testing random behavior.

Keep controls from capturing typing in unrelated inputs. If storage is optional, catch failures and continue playing. Do not call ATA services or add accounts. Show checked behavior and untested behavior separately; ask the learner to perform browser checks when you cannot.

<!-- END COURSE SOURCE: game-skills/vc-game-build/SKILL.md -->


---

# Source file: game-skills/vc-game-feedback/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-feedback/SKILL.md -->

---
name: vc-game-feedback
description: "Add clear outcomes, replay, and an optional verified learning moment to a small browser game."
---

# Explain results and invite replay

Read the game rules and inspect actual outcomes. Build a concise result display with score or progress, an understandable reason the round ended, and an obvious Play again action. Optional best-score or near-miss context must come from actual game state, not invented encouragement or fake scarcity.

Make replay reset the correct state promptly. Keep separate start instructions and result screens from competing for focus. If the learner wants an educational game, add one short explanation at the relevant moment or after a round, with a reputable source for factual claims. Keep facts, examples, and references separate from game logic. Verify numbers and claims; do not present game metaphors such as increasing a model's size as a scientific formula for achieving AGI.

If the game is purely recreational, provide useful gameplay feedback without adding an unwanted lesson. Local best scores are optional; label them as stored on this browser, handle storage failures, and do not imply cross-device synchronization.

Return game-feedback.md with the result messages, optional fact and source, replay behavior, and verification steps. Do not add ATA event, registration, newsletter, or score endpoints.

<!-- END COURSE SOURCE: game-skills/vc-game-feedback/SKILL.md -->


---

# Source file: game-skills/vc-game-look-feel/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-look-feel/SKILL.md -->

---
name: vc-game-look-feel
description: "Improve the readability and visual feedback of a working classroom game on phones and laptops."
---

# Make the game clear and readable

Inspect the playable version and preserve its rules. Propose a small theme with distinct appearances for player, goals, hazards, and background. Favor legible shapes and restrained colors over gradients, glow, or decorative complexity that hides the action. The learner chooses the theme; ATA branding and assets are not required.

Check a phone-width and laptop-width view while the game is in progress. Make player, targets, score, and controls easy to identify. For canvas games, keep rendering crisp on high-density displays and map pointer coordinates correctly after scaling or resizing.

Add only feedback that helps a player understand an action: a clear hit, a score change, or a result transition. Respect reduced-motion preferences and avoid relying only on color or sound to convey meaning. Optional audio starts after a user action, has a visible mute option, and must not be required for success.

Use supplied, generated, original, or appropriately licensed assets, with simple fallbacks so a missing asset does not prevent play. Record the visible changes and remaining checks in game-style.md. Do not replace the whole game to change its appearance.

<!-- END COURSE SOURCE: game-skills/vc-game-look-feel/SKILL.md -->


---

# Source file: game-skills/vc-game-playtest/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-playtest/SKILL.md -->

---
name: vc-game-playtest
description: "Playtest and tune a small game against its rules using observed results and another person's first attempt."
---

# Playtest and change one thing at a time

Read the brief, rules, and exact build or URL. Ask another person to play for two minutes without coaching. Record where they hesitate, whether controls respond, why they think they lost or won, and whether they choose to replay. A chatbot adopting several roles is not an independent human playtest.

Use five perspectives as questions: player understanding, fair rules, accuracy of any teaching, visual readability, and implementation correctness. Check instructions before play, valid and invalid inputs, score boundaries, each outcome, repeated restart, keyboard and touch, resize, and help during play. For animated games check returning from a background tab. For saved scores check refresh and unavailable storage. Apply relevant checks rather than imposing action-game tests on a turn-based puzzle.

Write game-test-report.md with expected versus observed outcomes and Passed, Failed, or Not tested. Prioritize unplayable controls, incorrect scoring, unfair outcomes, and broken restart. Fix the largest problem, then retest it and adjacent behavior.

Tune one setting at a time, such as speed, gap size, attempts, or opponent reaction. Compare equivalent starting conditions. Do not claim tests, browser observations, or player feedback that did not occur.

<!-- END COURSE SOURCE: game-skills/vc-game-playtest/SKILL.md -->


---

# Source file: game-skills/vc-game-publish/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-publish/SKILL.md -->

---
name: vc-game-publish
description: "Guide publication and verification of a checked classroom game in a separate learner-owned GitHub and Vercel project."
---

# Publish and hand off the game

Read the actual files, rules, and test report. Confirm the game has its own repository and Vercel project, separate from the student's website. Identify the intended source version, project root, entry file, and build settings. Use current official deployment guidance and the learner's agreed hosting arrangement.

Prepare a concrete release showing destination and content before seeking any missing authorization. Do not purchase plans, change account permissions, or connect to ATA infrastructure as a side effect. The first Vercel deployment is production under the course's checked guidance; do not call it a preview. A private repository does not establish private hosting.

Use the supported connected deployment workflow, or guide the learner to upload the static files to GitHub and import the repository in Vercel. Distinguish actions you executed from steps the learner reports.

At the actual URL, verify loading, instructions, start, one full round, result, and replay, including a second device when available. Record URL, version, observed results, limitations, and recovery target in game-release.md. Label browser-local scores accurately. Leave blocked or untested status visible and preserve the working files.

<!-- END COURSE SOURCE: game-skills/vc-game-publish/SKILL.md -->


---

# Source file: game-skills/vc-game-rules/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-rules/SKILL.md -->

---
name: vc-game-rules
description: "Define the rules, screen states, and keyboard and touch controls for an agreed beginner browser game."
---

# Write rules and controls

Read the game brief. Write game-rules.md with the goal, permitted actions, score changes, outcome conditions, and four visible states: instructions, playing, result, and restarting. State what is preserved or reset between rounds. Use a short transition table with action and expected result.

Prepare a one-sentence goal and two to four how-to steps that name the actual keyboard and touch controls. Keep instructions short enough to read before play. No score, active timer, or losing condition should advance while the initial instructions are open. Reopening help during a live round should pause it or preserve the agreed state safely. Starting from the help card must not accidentally trigger a second gameplay action.

Define immediate replay after a finished round, without forcing the player through onboarding again. For a puzzle specify invalid input, repeated submissions, and attempt limits. For action games specify movement, collisions, timing, and score boundaries.

Return test cases a partner can follow. Do not assume a keyboard-only interface works on a phone.

<!-- END COURSE SOURCE: game-skills/vc-game-rules/SKILL.md -->


---

# Source file: skills/vc-build-small/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-build-small/SKILL.md -->

---
name: vc-build-small
description: "Build an approved classroom website plan in small observable increments while preserving working behavior."
---

# Build one increment at a time

Read the project brief, build plan, and actual files. Confirm the working project before editing. Build the next agreed increment and preserve existing behavior outside that scope.

For the simple website exercise, keep the result runnable as a single index.html or plain static files with relative asset paths. Implement the agreed content, navigation, and main link or button. Do not add an email form that only simulates delivery, fabricated testimonials, tracking, payments, accounts, or external services to this exercise.

After each increment, run the relevant available checks and show a usable preview or supply complete files and tell the learner how to open them. In ordinary chat, provide downloadable files or complete code that can be saved in a plain-text editor; do not substitute a picture of a website. Explain the visible change and how to verify it. Do not claim browser checks were run if only code was inspected.

Prepare meaningful saved checkpoints through the supported repository workflow within the learner's authorization. Keep publication separate from file creation. If blocked, report the observed error and make one focused repair before expanding scope. Return changed files, checked behavior, and remaining work.

<!-- END COURSE SOURCE: skills/vc-build-small/SKILL.md -->


---

# Source file: skills/vc-maintain-site/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-maintain-site/SKILL.md -->

---
name: vc-maintain-site
description: "Make a focused classroom website update through a saved version, preview, review, and verification workflow."
---

# Change and recover

Identify the requested user-visible change, current working version, and deployed version. Inspect the relevant files before editing. Keep unrelated behavior stable and capture a known working checkpoint.

Prepare the change on a separate branch when the repository workflow supports it. Review the difference and repeat the relevant acceptance checks. For an already deployed Vercel project, inspect the branch preview before proposing a production-branch merge. Explain any deployment triggered by that merge and stay within the learner's release authorization.

For recovery practice, change an obvious heading on a practice branch, then restore its prior text and verify the result. Do not introduce a defect into a public site simply to demonstrate recovery. If an actual release needs recovery, identify the previous verified version and an available restore path before taking action; preserve history and data.

Write change-record.md with the request, before and after behavior, source versions, checks, deployment state, and recovery approach. Suggest a simple manual maintenance checklist. Describing a schedule does not create a monitor or automation.

<!-- END COURSE SOURCE: skills/vc-maintain-site/SKILL.md -->


---

# Source file: skills/vc-project-brief/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-project-brief/SKILL.md -->

---
name: vc-project-brief
description: "Interview a business learner and write a small website project brief with observable acceptance checks before building."
---

# Define the first version

Use any existing notes before asking questions. Ask short groups of questions about the intended user, their task, the business outcome, supplied content, and the time available. Offer a small default when the learner is unsure.

Write project-brief.md, or return the same content in chat when file writing is unavailable. Include the user and problem, a one-sentence outcome, first-version features, excluded features, supplied facts and assets, assumptions, and acceptance checks. Make each check something a person can observe. Mark unknown facts rather than inventing credentials, customer quotes, or performance claims.

For project 1, scope a single page on the learner's chosen topic with a heading, two or three sections, and a meaningful link or button. Define its destination, working navigation, accurate content, and narrow-screen usability. Use supplied or fictional content. The game project uses its own game brief.

Ask the learner to correct the completed brief and choose any unresolved scope decision. Finish with a concise account of what building this version would accomplish. Do not generate the site before the scope is settled.

<!-- END COURSE SOURCE: skills/vc-project-brief/SKILL.md -->


---

# Source file: skills/vc-project-handoff/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-project-handoff/SKILL.md -->

---
name: vc-project-handoff
description: "Prepare a concise demonstration and ownership handoff for a completed or partially blocked classroom website project."
---

# Demonstrate and hand off

Read the brief, repository, test report, release record, and any change record that actually exist. For the class handoff, cover the website and game separately, with their own URLs and source versions. Do not fill missing evidence with inferred success.

Create handoff.md with the problem and intended user, implemented scope, repository, deployed URL or deployment blocker, observed test results, untested behavior, remaining limitations, owner, and recovery approach. State any service dependencies and the next useful improvement. Distinguish the classroom prototype from work needed before using actual customer information or business transactions.

Prepare a two-minute demonstration: state the user's problem, perform the main interaction, show a test that mattered, and explain one controlled change. Have a partner repeat the main task without coaching.

Finish with one practical next action and the files needed to continue later. If the deployment or a required behavior is blocked, make that status prominent. A complete handoff can describe unfinished work honestly; it must not relabel it as completed.

<!-- END COURSE SOURCE: skills/vc-project-handoff/SKILL.md -->


---

# Source file: skills/vc-project-plan/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-project-plan/SKILL.md -->

---
name: vc-project-plan
description: "Turn an agreed beginner website brief into a visitor journey, page outline, and incremental build plan."
---

# Plan the page and work

Read the agreed brief. If the goal or required behavior is missing, resolve that gap before selecting technology. Preserve the learner's chosen project.

Write project-plan.md containing the visitor's starting point and task, page sections in order, concise style guidance, required content, and a small sequence of build increments. For each increment, state what the learner should see or be able to do and how to check it.

For the classroom website, prefer one portable index.html with styles included, or a few plain static files if appropriate. Plan content and layout, working navigation and the main action, then a focused usability improvement. Explain any additional framework or service in terms of a concrete requirement; avoid adding infrastructure just because it is available.

Identify missing assets, facts, and decisions. Use supplied images or a simple typographic treatment when image creation would consume the build period. Show the plan for review before implementation. This skill ends with a plan, not a deployment.

<!-- END COURSE SOURCE: skills/vc-project-plan/SKILL.md -->


---

# Source file: skills/vc-publish-site/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-publish-site/SKILL.md -->

---
name: vc-publish-site
description: "Prepare and verify a Vercel deployment of a checked classroom website from the learner's GitHub repository."
---

# Publish the checked version

Read the repository identity, intended version, and test report. Verify the current official deployment instructions and the selected Vercel account or team. For the classroom static site, confirm the root, entry file, asset paths, and appropriate no-build settings. Do not guess framework settings.

Prepare the concrete deployment before seeking any missing authorization. Explain the destination, visible content, and audience. The first Vercel deployment is production under the documentation checked for this course; do not promise it is a preview. A private repository does not make the deployed site private. Confirm a suitable hosting arrangement without making purchases or changing plans on the learner's behalf.

Deploy only within the learner's authorization. If the assistant lacks the necessary tools, guide the learner through the dashboard and distinguish their reported results from your own observations.

After deployment, open the actual URL and repeat the main functional checks, or have the learner do so. Write release-record.md with URL, source version, deployment status, checks, limitations, and recovery target. Report an inaccessible or unverified deployment accurately.

<!-- END COURSE SOURCE: skills/vc-publish-site/SKILL.md -->


---

# Source file: skills/vc-quality-check/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-quality-check/SKILL.md -->

---
name: vc-quality-check
description: "Check a classroom website against its acceptance criteria and produce an evidence-based test report before release or after an update."
---

# Test the actual experience

Read the acceptance checks and identify the exact files or URL being evaluated. If the target is inaccessible, report that limitation; do not substitute a different version silently.

Test the primary link or button, navigation, images, keyboard interaction, accurate supplied content, and narrow-screen layout. For a game, use its explicit rules and test start, play, result, and restart as well. Inspect content for invented claims and files for accidentally exposed credentials or unintended data collection.

Use a browser when available. Otherwise give the learner precise manual steps and wait for observed results. Record unperformed work as Not tested. Write test-report.md with test, expected outcome, actual outcome, evidence, and Passed, Failed, or Not tested. Distinguish functional testing, code inspection, and automated scores.

Prioritize failures that prevent the agreed visitor task. Report defects with reproduction steps. If asked to fix them, repair within scope and rerun the failed and adjacent checks. Invite a partner to attempt the task independently. Call the result a classroom quality check, not a complete accessibility or security certification.

<!-- END COURSE SOURCE: skills/vc-quality-check/SKILL.md -->


---

# Source file: skills/vc-sdlc-coach/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-sdlc-coach/SKILL.md -->

---
name: vc-sdlc-coach
description: "Explain the software development lifecycle to a nontechnical workshop learner using their small website project."
---

# Teach the lifecycle

Start with the learner's project and user outcome. Explain discovery, definition, design and planning, building, testing, release, and maintenance as a loop. Use one example consistently. Introduce a technical term only with its business meaning.

Distinguish the browser, project files, hosting, frontend, backend, database, and API. Explain which of these the current project needs. Explain Git as change tracking, GitHub as the shared project and history, and Vercel as the hosting service. Distinguish a saved checkpoint, a branch, a proposed change, and a deployed version.

Have the learner explain what should happen when the website's main link is clicked or the game's Play again button is pressed. Ask where defining that behavior and testing it fit in the lifecycle. Correct gaps with a concrete example.

Return a short lifecycle map and a teach-back question. Do not build or publish a project as part of this teaching exercise. Completion means the learner can describe the next step and how its result will be checked.

<!-- END COURSE SOURCE: skills/vc-sdlc-coach/SKILL.md -->


---

# Source file: skills/vc-setup-guide/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-setup-guide/SKILL.md -->

---
name: vc-setup-guide
description: "Guide a nontechnical learner through GitHub, Vercel, and an AI coding workspace for a classroom website project."
---

# Prepare the workspace

Identify the learner's favorite chatbot and available file-generation or coding surface and whether they already have a practice repository. Use current official provider instructions for that surface; do not treat a general chat connector as proof of file editing, command execution, or publishing capability.

Guide the learner to create and verify a GitHub account and a personal practice repository. Use a connected coding workspace when available, or have the learner generate complete files, preview them locally, and upload them through GitHub. Native skill installation and a direct chatbot connection are optional. Have the learner complete sign-in and authorization in the provider UI. Explain requested access in plain language. Do not ask for passwords, API keys, or recovery codes in chat.

Have the learner establish the agreed Vercel account and GitHub connection. Check the hosting arrangement before suggesting any plan. Do not deploy during setup. A connected badge is insufficient: on a connected route read the intended README and prepare a small file change for inspection. On the portable route verify that the learner can save an HTML file, open it in a browser, and identify the intended repository.

Return a setup record listing each capability as verified, unavailable, or untested. State the exact blocker and a partner or instructor fallback where necessary. A skill supplies instructions, not missing account access.

<!-- END COURSE SOURCE: skills/vc-setup-guide/SKILL.md -->
