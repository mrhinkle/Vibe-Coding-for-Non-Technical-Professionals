# Vibe Coding for Non-Technical Professionals

A full-day, hands-on class for business professionals with no programming experience. Use your favorite chatbot to create two things you can share: **a simple website on Vercel, then a browser game**.

The class starts with 30 minutes on how software is developed. Students then learn GitHub, Vercel, and a repeatable workflow: describe the outcome, build a small version, check what it actually does, save progress, and publish.

**Duration:** six teaching hours (360 minutes), plus lunch and breaks.

**Instructor:** Mark Hinkle.

**Status:** curriculum and skills draft; existing presentation included as reference. Complete the [instructor preflight](instructor/preflight.md) before teaching.

## Start here

| You are… | Open this |
| --- | --- |
| Preparing to attend | [Account and chatbot setup](setup-guide.md) |
| Taking the class | [Student workbook](handouts/student-workbook.md) |
| Teaching the class | [Instructor guide and timed lesson plan](instructor-guide.md) |
| Building the website | [Website and lifecycle skills](skill-guide.md) |
| Building the game | [Game skills, recipes, and prompts](game-skills-guide.md) |
| Updating the slides | [Presentation reference and adaptation plan](presentations/README.md) |
| Checking where the material came from | [Source map](repository-map.md) |

## What students will accomplish

- Explain the software development lifecycle in plain language.
- Use a chatbot, GitHub, and Vercel for different parts of the work.
- Turn an idea into a small brief with observable completion checks.
- Build and publish a one-page website with a meaningful link or button.
- Create a playable game with understandable rules, controls, results, and replay.
- Test the actual experience with another person and improve it from observations.
- Leave with saved project files, test notes, release records, and next steps.

The target is two working URLs. If an account or hosting problem prevents publication, retain the working files and record the specific blocker.

## The day

| Teaching time | Minutes | Activity |
| --- | ---: | --- |
| 0:00–0:30 | 30 | How software gets developed: simplified SDLC |
| 0:30–1:00 | 30 | GitHub, Vercel, and your chatbot: setup and capability check |
| 1:00–2:30 | 90 | Project 1: define, build, test, and publish a simple website |
| 2:30–2:45 | 15 | Tour the All Things AI Arcade and choose a game pattern |
| 2:45–3:05 | 20 | Define the game and its rules |
| 3:05–4:10 | 65 | Build the first playable version |
| 4:10–4:40 | 30 | Improve appearance and feedback |
| 4:40–5:20 | 40 | Partner playtest, repair, and tune |
| 5:20–5:45 | 25 | Publish the game and check the live experience |
| 5:45–6:00 | 15 | Demonstrations and handoff |

The times above exclude lunch and breaks. A sample day is 9:00 a.m.–4:30 p.m. with a 45-minute lunch and three 15-minute breaks.

## Two small projects

**Project 1 — A simple website.** Choose a personal introduction, event, hobby, community group, or fictional business. Build one page with a clear heading, two or three sections, a visual treatment, and a working primary action. Save it to a learner-owned `my-first-site` repository and publish it on Vercel.

**Project 2 — A browser game.** Choose a small word or knowledge puzzle, a one-button obstacle game, or a paddle game. These recipes draw on patterns from the [All Things AI Arcade](https://staging.allthingsai.org/arcade). Keep a single main action and a short start → play → result → restart loop. Use a separate `my-first-game` repository and Vercel project.

Both projects can be static HTML, CSS, and JavaScript. Accounts, databases, multiplayer, global leaderboards, and paid APIs are outside the core exercises. A real commercial website needs a hosting plan appropriate to its use; see the [setup guide](setup-guide.md).

## Use your favorite chatbot

The portable route works with a chatbot that can return complete runnable files:

1. Open a skill below and paste or attach its `SKILL.md` to your conversation.
2. Add your idea or the previous stage's output and use the matching prompt in the guide.
3. Save the returned files, open them in your browser, and check the result.
4. Upload the checked files to your own GitHub repository and import it into Vercel.

A supported coding workspace can edit and save the files directly after you connect it. The [setup guide](setup-guide.md) distinguishes ordinary chat, GitHub connections, Claude Code, Codex, and deployment access. Native skill installation is optional; pasting a skill does not grant tools or account permissions.

## Skill library

| Shared workflow and website | Game project |
| --- | --- |
| [Understand the SDLC](skills/vc-sdlc-coach/SKILL.md) | [Choose and define a game](game-skills/vc-game-brief/SKILL.md) |
| [Prepare accounts and workflow](skills/vc-setup-guide/SKILL.md) | [Write rules and controls](game-skills/vc-game-rules/SKILL.md) |
| [Write the project brief](skills/vc-project-brief/SKILL.md) | [Build the playable loop](game-skills/vc-game-build/SKILL.md) |
| [Plan the page and increments](skills/vc-project-plan/SKILL.md) | [Improve appearance](game-skills/vc-game-look-feel/SKILL.md) |
| [Build a small increment](skills/vc-build-small/SKILL.md) | [Explain outcomes and replay](game-skills/vc-game-feedback/SKILL.md) |
| [Check quality](skills/vc-quality-check/SKILL.md) | [Playtest and tune](game-skills/vc-game-playtest/SKILL.md) |
| [Publish the website](skills/vc-publish-site/SKILL.md) | [Publish the game](game-skills/vc-game-publish/SKILL.md) |
| [Maintain and recover](skills/vc-maintain-site/SKILL.md) | |
| [Demonstrate and hand off](skills/vc-project-handoff/SKILL.md) | |

## Repository contents

```text
README.md                    Class overview and navigation
instructor-guide.md          Timed teaching plan and facilitation notes
setup-guide.md               Accounts, connections, publishing, troubleshooting
skill-guide.md               Nine shared skills and starter prompts
game-skills-guide.md         Seven game skills and three beginner recipes
handouts/student-workbook.md Fill-in briefs, rules, tests, releases, and handoff
instructor/preflight.md      Rehearsal and classroom preparation checklist
skills/                     Website and lifecycle SKILL.md files
game-skills/                Game SKILL.md files
presentations/              Existing six-hour deck, assets, and adaptation plan
repository-map.md           Sources, inspected versions, and adaptation choices
licenses/                   Original website material's license
```

## Current readiness

The curriculum, 16 skill entrypoints, and student templates are assembled. The existing 51-slide deck and its source files are preserved under `presentations/reference-six-hour-class/`. That older deck teaches one business application and includes database and email topics; it has **not yet been rewritten for this two-project agenda**.

Before class, revise the slides, prepare and test recovery checkpoints, rehearse each offered chatbot route, and playtest the selected game recipes. The repository does not yet contain tested starter applications. Documentation checks are not a substitute for a classroom rehearsal.

## Sources and reuse

This course adapts Mark's [VibeCoding-a-Website](https://github.com/mrhinkle/VibeCoding-a-Website), the existing private [Presentations class folder](https://github.com/mrhinkle/Presentations/tree/03a1e051e62f11134a723e498dda955e2ed2f394/vibe-coding-class), and patterns from the All Things AI Arcade. See the [source map](repository-map.md) for pinned versions and attribution, and [reuse notes](licenses/README.md) for license scope. The repository is private so the existing presentation assets remain within the same visibility boundary.
