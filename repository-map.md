# Source map for Vibe Coding for Non-Technical Professionals

The website project adapts [mrhinkle/VibeCoding-a-Website](https://github.com/mrhinkle/VibeCoding-a-Website/tree/1ca085ae7fe4acc86fb0e6b2ce94b12a6a34a0d1), inspected at commit `1ca085ae7fe4acc86fb0e6b2ce94b12a6a34a0d1`. Its outline, nine lesson modules, examples, business templates, and 21 skill entrypoints provide the website workflow. Its PowerPoint and infographic files were inventoried, not visually reviewed or revised.

The game project adapts the live [All Things AI Arcade](https://staging.allthingsai.org/arcade) and the related private `mrhinkle/allthingsai-org` repository. The inspected staging branch was `922e7b02976da376dab61e8e49e5a1ae7e5dd27b` on October 5, 2026. A branch read and a live page inspection do not establish that this exact commit is the deployed build.

## Existing presentation

The private [mrhinkle/Presentations](https://github.com/mrhinkle/Presentations/tree/03a1e051e62f11134a723e498dda955e2ed2f394/vibe-coding-class) repository already contained a 51-slide six-hour class, last updated September 21, 2026. Its PowerPoint, PDF, generation source, two handouts, and assets are preserved without modification in [presentations/reference-six-hour-class](presentations/reference-six-hour-class/). The inspected source snapshot is `03a1e051e62f11134a723e498dda955e2ed2f394`.

That deck teaches one business application and includes database and email topics. Its six-hour window includes lunch and breaks. The new course uses six teaching hours plus breaks, opens with 30 minutes of SDLC, and has a website project followed by a game project. Use the new guides for the current course. The [presentation adaptation plan](presentations/README.md) records the changes still needed; no revised two-project slide export is included yet.

## Website reuse

| Class work | Source skills | Adaptation |
| --- | --- | --- |
| Accounts and project setup | getting-started | Favorite chatbot, portable files, optional connected workspace |
| Define and plan | site-interviewer, site-customizer, brand-voice | One page with a clear audience and primary action |
| Build | site-generator | Complete portable static files |
| Check | qa-tester, link-checker, copy-editor, ux-reviewer | Proportionate functional and mobile checks |
| Publish | deploy-to-vercel | Checked first publication and live verification |
| Continue later | site-updater, webmaster | Small updates, ownership, and handoff |

Original setup instructions mixed browser and local paths and treated an API key as a universal prerequisite. The revised guide separates ordinary chatbot file output from connected coding environments. The original skills index differs from the actual file inventory, and some original skill entrypoints lack frontmatter; these class files have their own validated metadata.

## Game derivation

These source links are for the instructor and may require repository access. Students receive self-contained instructions and do not need the private repository.

| Classroom pattern | Exact inspected source |
| --- | --- |
| One main action, tunable rules, visual clarity, review perspectives | [docs/arcade-spec.md](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/docs/arcade-spec.md) |
| Eleven game examples and route registry | [games.ts](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/client/src/lib/arcade/games.ts) |
| Short instructions, Start, help and input behavior | [HowToPlay.tsx](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/client/src/components/arcade/HowToPlay.tsx) |
| Explicit puzzle states and scoring | [promptle.ts](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/client/src/lib/arcade/promptle.ts) |
| Fact and reference content separated from rules | [promptle-words.ts](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/client/src/lib/arcade/promptle-words.ts) |
| One-button movement and adjustable settings | [flappy.ts](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/client/src/lib/arcade/flappy.ts) |
| Results, replay and optional score persistence | [EndCard.tsx](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/client/src/components/arcade/EndCard.tsx), [scores.ts](https://github.com/mrhinkle/allthingsai-org/blob/922e7b02976da376dab61e8e49e5a1ae7e5dd27b/client/src/lib/arcade/scores.ts) |

The source tree contains coaching skills but no game SKILL.md packages. The seven game skills are new classroom adaptations, not extracted existing skills. No private implementation, proprietary game assets, account integration, or backend service is bundled into them.

Do not carry over the source spec's self-review as independent review, its repository-specific no-CI instruction, fixed development paths, score submissions, or ATA marketing calls to action. Keep the useful review questions and use another student for a cold playtest. Source and qualify teaching claims; game progression is not scientific evidence.

## Verification and remaining preparation

The live Arcade, beta guide, and Promptle introduction and board were inspected. This was a design research pass, not an end-to-end acceptance test of the eleven games. The current class repository assembles draft guides, a student workbook, instructor preparation notes, nine shared website and lifecycle skills, seven game skills, and the existing presentation reference files. The original website material's [MIT license](licenses/VibeCoding-a-Website-LICENSE) remains included with [scope and attribution notes](licenses/README.md). Course packaging does not establish that learner accounts, native skill installation, application behavior, or deployment paths have been exercised. Rehearsal, tested recovery checkpoints, and slide revision remain instructor preparation work.

## Self-guided expansion: October 5, 2026

The current repository adds AI and student entry points, a generated single-file course pack, worked website and quiz examples, 30 troubleshooting paths, optional multiple-agent workflows, learner AGENTS.md and handoff templates, and an 18-page illustrated participant guide. Official product-specific sources are linked in the setup, troubleshooting, walkthrough, and multi-agent documents. The new guide uses the reference presentation palette and unmodified logo/artwork, with newly drawn conceptual diagrams. See [guide source and brand notes](guides/README.md). These diagrams are not captured product UI.

The single-file course pack is generated from current text sources using [build_course_pack.py](tools/build_course_pack.py). The guide is generated using [build_guide.py](tools/build_guide.py). Student artifacts, native agent configuration, runtime applications, and classroom rehearsal are not implied by these documentation builds.

## New classroom game choice

Alien Tic-Tac-Toe is Mark’s October 5 classroom concept, documented in [its walkthrough](docs/alien-tic-tac-toe.md). It is not an existing Arcade title or copied Arcade code. The three-choice menu and optional instructor submission path add no Arcade integration or automatic acceptance.
