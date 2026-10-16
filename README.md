# Vibe Coding for Non-Technical Professionals

I'm Mark Hinkle, and this is the one-day class I wish somebody had given me the first time I tried to get an AI to build something. You don't need to have written a line of code. You bring a laptop and the chatbot you already use, and by the end of the day you've published two things you can send to a friend: **a personal website built from your LinkedIn profile, then a browser game you designed yourself**. Along the way you pick up the loop every professional software team runs, and that agents now run at machine speed: describe, plan, build, check, save, publish. Once you've done that loop twice in a day, you own it.

**Instructor:** Mark Hinkle. **Next run:** All Things Open 2026, Monday October 19, Raleigh Convention Center, 9:00 am to 5:30 pm, doors 7:30. Public listing: <https://2026.allthingsopen.org/ai-agents-vibe-coding>.

> **This is a fluid day.** The schedule below is a plan, not a contract. We go as fast as the slowest table that's still making progress, and I check in every 30 minutes and move the schedule out loud. If you fall behind, you grab a tested checkpoint file and keep going; that's how professionals work, and it isn't cheating. If you're ahead, there's a menu of ten skills to add to your site and extensions for the game. Nobody gets left behind and nobody sits around waiting. When I change the plan, I'll say so out loud and tell you why.

## Bring

A laptop with a modern browser and a charger. A free [GitHub](https://github.com) account. A free [Vercel](https://vercel.com) account signed in with GitHub. Any chatbot you already like (ChatGPT, Claude, Gemini, Copilot, v0). Your LinkedIn login, or a copy of your resume. No coding experience. Do the [pre-class laptop prep](PRE-CLASS-PREP.md) the night before; it takes 30 minutes and saves an hour.

## What you'll learn

The public listing promises four things, and the day is built around them:

1. **How software actually gets built.** Source control, branches, pull requests, review, continuous deployment, and why each step exists. [Instructor guide, first 30 minutes](instructor-guide.md).
2. **GitHub as your system of record.** Set up a repository, read a diff, see commits and pull requests become the audit trail for everything an agent builds, and roll back when it gets creative. [Reading what the agent wrote](docs/agent-loop-and-pull-requests.md).
3. **Vercel and v0 as your build and deploy layer.** Describe, v0 writes it, GitHub records it, Vercel ships it to a live URL, you look and give the next instruction. [The v0 route](docs/v0-route.md). Any other chatbot works through the [portable route](setup-guide.md).
4. **Directing agents instead of coding.** Specification, not syntax: briefs with checks you can see, one change per request, and the pull request as the checkpoint where a human stays in charge.

Two routes, one loop. **v0** is the featured route: fastest from a sentence to a live page, and the code lands in GitHub through v0's own integration. The **portable route** works with any chatbot that returns files, and it is the route the tested examples and checkpoints drop straight into. Both end in a repository you own and a URL you can share.

## Start here

| You are… | Open this |
| --- | --- |
| Attending on Monday | [Pre-class laptop prep](PRE-CLASS-PREP.md), then [account setup](setup-guide.md), then [START-HERE.md](START-HERE.md) |
| Stuck right now | [**stuck.md**](docs/stuck.md): five-minute rule, checkpoint ladder, the eight usual suspects |
| Building the website | [Personal website from LinkedIn](docs/personal-website-walkthrough.md) and the [tested example](examples/personal-website/) |
| Making the website better | [Ten skills menu](docs/website-skills-menu.md), pulled from Mark's public skill repositories |
| Building the game (Track A) | [Theme it, wireframe it, prompt it](docs/tic-tac-toe-variants.md), the [rules](docs/alien-tic-tac-toe.md), and the [tested checkpoints](examples/alien-tic-tac-toe/) |
| Building the thing you brought (Track B) | [Your own project](docs/your-own-project.md): one screen, one input, one result, through pull requests |
| Using v0 | [The v0 route](docs/v0-route.md): connect GitHub, deploy, push, recover |
| Finding your way around GitHub | [Ten-minute GitHub tour](docs/github-tour.md): the six screens you'll use today |
| Starting any build | [Plan first, and the right size model for each job](docs/plan-first-and-models.md) |
| Writing or installing a skill | [Skills guide](docs/skills-guide.md): anatomy, quality bar, install in ChatGPT and Claude |
| Handling keys and tokens | [Tokens, secrets, and the clipboard](docs/secrets-tokens-and-the-clipboard.md): no passwords in chats, ever |
| Choosing a tool after today | [Platform landscape](docs/platform-landscape.md): Lovable, Bolt.new, Base44, Replit, v0, and friends |
| Reviewing what an agent built | [Commits, diffs, pull requests, rollback](docs/agent-loop-and-pull-requests.md) |
| Teaching the class | [ATO 2026 run of show](instructor/ato-2026-run-of-show.md), [instructor guide](instructor-guide.md), [preflight](instructor/preflight.md), [slides](presentations/ato-2026-workshop/) |
| Wanting an illustrated overview | [18-page participant PDF](guides/participant-guide.pdf), [Markdown](guides/participant-guide.md), or [offline HTML](guides/participant-guide.html) |
| Taking the class | [Student workbook](handouts/student-workbook.md) |
| Switching chats or stopping for the day | [Project state template](templates/project-state.md) |
| Looking for words or prompts | [Glossary](docs/glossary.md) and [prompt library](docs/prompt-library.md) |
| Getting the slides, giving feedback | Slides: [presentations/ato-2026-workshop](presentations/ato-2026-workshop/). Feedback, good or bad, earns the preview edition of Mark's upcoming book: [feedback template](templates/feedback.md). |

## The day at a glance

| Time | Block | You leave with |
| --- | --- | --- |
| 9:00 | How software actually gets built | The loop: describe, plan, build, check, save, publish |
| 9:30 | Setup: GitHub, Vercel, v0, your route | Three accounts under one identity; an empty repository connected to Vercel |
| 10:00 | **Project 1: personal website from LinkedIn** | Your content in a tested starter, on your laptop |
| 10:45 | Break | |
| 11:00 | Colors, layout, checks, publish | **A live URL** on a classmate's phone |
| 11:30 | Reading what the agent wrote: commits, diffs, pull requests, rollback | You opened one of your own commits and can name the four red flags |
| 11:45 | Sprint 1: load one skill from the menu, start one change | A skill loaded; finish it in sprint 2 |
| 12:00 | Lunch | |
| 12:45 | Choose a track. **A:** the guided game, theme and three wireframes. **B:** the thing you brought, scoped to one screen | A theme table and sketches, or a scope sheet and one sketch |
| 1:20 | Brief and rules, with checks you can see | A brief |
| 1:40 | **Project 2: build** in increments; increment 2 goes through a pull request | A playable round or a live tool, and a PR you reviewed |
| 2:45 | Break | |
| 3:00 | Look and feel, partner playtest, one fix through a PR | Something that fits a phone and survived a stranger |
| 4:10 | Publish | **A second live URL** |
| 4:35 | Sprints 2 and 3: more skills, or a game extension. Show and tell | Something new that works |
| 5:15 | Tuesday morning: back to your team, what to automate next, adult supervision. Handoff, LinkedIn, feedback | Two URLs, two project-state files, next steps |

Teaching time is 360 minutes; the rest is breaks, lunch, and live hacking. Full detail with scope cuts in the [run of show](instructor/ato-2026-run-of-show.md).

## Before any build: plan first, and pick the right size model

Make the agent tell you what it's going to do before it touches a file. In Claude Code that's plan mode; everywhere else it's this prompt, on the biggest "thinking" model you have:

> Before you write any code, give me the plan: the files you will create or change, one line on what each does, the order you'll do them in, and three checks I can perform by hand to know it worked. Flag anything in my brief that is bigger than one screen, one input, one result. Do not build yet.

Read it like a contractor's quote, cut what you didn't ask for, then "build exactly this plan" on the middle model. Chores (renames, alt text, commit messages) go to the smallest model. Plan with the biggest, build with the middle, tidy with the smallest. Full page: [plan-first-and-models.md](docs/plan-first-and-models.md). The [vc-plan-first](skills/vc-plan-first/SKILL.md) skill enforces it.

## The one rule that never bends: no passwords in chats

Nothing that unlocks an account goes into a chat window. Not a password, not an API key, not a token. When a feature needs a key, copy it from your password manager and let a command move it, so the agent never sees it: on a Mac, `pbpaste | vercel env add RESEND_API_KEY production`, or into a local `.env.local` that's in `.gitignore`. Ask the agent for the command, never paste the value. If one leaks, rotate it first and clean up second. The whole lesson, including what "tokens" means and how Composio lets agents into your apps without keys: [secrets-tokens-and-the-clipboard.md](docs/secrets-tokens-and-the-clipboard.md).

## Project 1: a personal website from your LinkedIn profile

Finished example: open [`examples/personal-website/index.html`](examples/personal-website/index.html). It belongs to a fictional person named Jordan Rivera. You will replace every word. Full steps: [personal-website-walkthrough.md](docs/personal-website-walkthrough.md).

**1. Export.** On your LinkedIn profile, **More** (or **Resources**) → **Save to PDF**. No LinkedIn? Fill in [`resume-template.md`](examples/personal-website/resume-template.md) by hand.

**2. Privacy pass.** Phone, street address, birth date, ID numbers, salary, and anything confidential stay out. Name, city, headline, work history, skills, education, and public links go in.

**3. Content.** Attach the PDF and the template, with the [vc-project-brief](skills/vc-project-brief/SKILL.md) skill:

> Read my attached resume and fill in resume-template.md with my real information only. Do not invent anything. Leave a field blank if the resume does not say. Rewrite each job as a title, employer, dates, and two or three bullets that state what changed because of my work, in plain English. Draft a three-paragraph About section in first person that sounds like a person, not a brochure. Leave out my phone number, street address, and birth date. Show me the result; do not build the site yet.

**4. Build.** Attach the example `index.html` and your completed template, with [vc-build-small](skills/vc-build-small/SKILL.md):

> Using the attached index.html as the exact structure and style, replace all of Jordan Rivera's content with mine from resume-template.md. Keep every id, every CUSTOMIZE comment, every ADD-ON SLOT comment, the theme and layout system, and the print stylesheet. Delete the Projects section if my template has nothing for it. Return the complete file.

Check: your name in the browser tab, your roles visible, every link works, nothing says "Jordan."

**5. Colors and layout.** Six themes (`slate`, `forest`, `sunset`, `ocean`, `mono`, `plum`) and two layouts (`centered`, `sidebar`) are built in. Try them with the footer picker or `?theme=ocean&layout=sidebar` in the address bar. Then lock it in:

> Set the theme to [ocean] and the layout to [sidebar] permanently, remove the footer picker, and change the accent color to [#0B6E4F]. Change nothing else. Return the complete file.

**6. Check and publish.** Links work, fits a phone, prints as a resume, no "Jordan" anywhere, nothing private. Then GitHub and Vercel exactly as in the [setup guide](setup-guide.md). Check: a live `*.vercel.app` address that opens on someone else's phone.

## Make the website better: ten skills, one at a time

A skill is a short instruction file that teaches your chatbot one job. How to write a good one in ten minutes, the quality bar the course's own skills meet, and how to install skills in ChatGPT, Claude, and Claude Code: [skills-guide.md](docs/skills-guide.md), with a [template](templates/SKILL-template.md). Mark publishes his as open source in [aienterprise-skills](https://github.com/mrhinkle/aienterprise-skills) and [VibeCoding-a-Website](https://github.com/mrhinkle/VibeCoding-a-Website). Full table with links, prompts, and checks: [website-skills-menu.md](docs/website-skills-menu.md).

To load one in any chatbot, open the skill's raw link, copy it all, and paste it with:

> Use the following instructions as a skill for my next request. Read them, confirm what you will and will not do, then wait for my task.

| # | You get | Skill |
| --- | --- | --- |
| 1 | Your own colors and fonts, recorded | `site-customizer` |
| 2 | A headline and About that sell without sounding salesy | `copy-editor` |
| 3 | Writing that sounds like you, not a chatbot | `ai-slop-killer` |
| 4 | A hero image prompt for any image tool | `brand-to-images` |
| 5 | A contact form that delivers | `aie-web-forms` |
| 6 | Your name finds your site in Google and AI answers | `aie-web-seo` |
| 7 | Every link and image works | `aie-web-links` |
| 8 | A usability review from a stranger's point of view | `aie-web-ux` |
| 9 | The "does it actually work" gate | `aie-web-qa` |
| 10 | A LinkedIn post announcing the site, in your voice | `aie-social-linkedin` |

One skill, one task, one complete returned file, one check, one save. The `ADD-ON SLOT` comments in the example mark where each feature goes.

## Project 2, Track B: the thing you brought

If you came with a problem you've been meaning to solve, you can build it after lunch instead of the game. I'd love that. The one rule is one screen, one input, one result; sign-in, databases, payments, and integrations wait, and I'll say why when we get there. Brief with three checks, plan before code, increment 1 live by 2:45, increment 2 through a pull request you review yourself, a stranger's two-minute test, and a five-line README. Steps and prompts: [your-own-project.md](docs/your-own-project.md).

## Project 2, Track A: a tic-tac-toe battle game you design

The rules are fixed and tested: choose a square, win or lose a short three-move battle, claim the square, finish the board. You choose who fights, what the moves are called, and the colors. Rules: [alien-tic-tac-toe.md](docs/alien-tic-tac-toe.md). Themes, wireframes, and prompts: [tic-tac-toe-variants.md](docs/tic-tac-toe-variants.md). Other game choices: [game-options.md](docs/game-options.md).

**Pick a theme** (all emoji, nothing to download): Space Invasion 🧑‍🚀 vs 👽 · Cats vs Dogs 🐱 🐶 · Pizza vs Tacos 🍕 🌮 · Robots vs Dinos 🤖 🦖 · Ghosts vs Pumpkins 👻 🎃 · Sun vs Moon ☀️ 🌙 · Wizards vs Dragons 🧙 🐉 · Coffee vs Donuts ☕ 🍩 · or your own two. Play the finished example first: [`checkpoint-3-complete`](examples/alien-tic-tac-toe/checkpoint-3-complete/index.html), and add `?theme=cats-dogs` to switch.

**Wireframe first.** Three screens, boxes and labels, five minutes: [instructions](docs/wireframes/game-instructions.svg), [board](docs/wireframes/game-board.svg), [battle](docs/wireframes/game-battle.svg). Paste your sketch under each prompt.

**Brief** ([vc-game-brief](game-skills/vc-game-brief/SKILL.md)):

> Write game-brief.md for a themed tic-tac-toe battle game using the rules in alien-tic-tac-toe.md exactly. Theme: I am [🐱 Cat], the opponent is [🐶 Dog]. The opponent's attacks are [Bark, Pounce, Slobber] and my correct counters are [Hiss, Climb, Shake Off], in that order. Colors: [dark brown background, peach accent, light text]. Rename only; do not change the health, exchange, or board rules. Give me observable completion checks. Do not build yet.

**Build increment 1, the board** ([vc-game-build](game-skills/vc-game-build/SKILL.md)):

> Build only the board screen as one index.html with inline CSS and JavaScript and no external files. Cells show [🐱] for my marks and [🐶] for the opponent's, each with a visually hidden "X" or "O" label. For now, two buttons "Award to me" and "Award to opponent" stand in for the battle. Detect the eight lines, a draw, Play again, and Restart game. Return the complete file.

Check against [checkpoint 1](examples/alien-tic-tac-toe/checkpoint-1-board/index.html): three of yours in a row wins, three of theirs loses, full board draws.

**Build increment 2, the battle:**

> Build the battle screen as its own index.html. Both sides start with 2 health shown as text. The opponent's attacks cycle [Bark → Pounce → Slobber]. One accepted answer per exchange; disable the answer buttons after I click; show an explicit Next exchange button only while both sides still have health; end immediately when either side reaches zero. Return the complete file.

Check against [checkpoint 2](examples/alien-tic-tac-toe/checkpoint-2-battle/index.html): two correct answers end the battle in two exchanges with no Next exchange button after the win.

**Build increment 3, connect them:**

> Connect the board and the battle into one index.html. Selecting an empty cell locks the board and starts a battle for that cell. A battle win places my mark, a loss places the opponent's mark, exactly once, then the board is evaluated. Add the instructions screen from my wireframe with the theme table. Keep Restart game available everywhere. Return the complete file.

Check against [checkpoint 3](examples/alien-tic-tac-toe/checkpoint-3-complete/index.html): win battles on squares 1, 2, 3 and the game says you won; Restart mid-battle gives an empty board.

Make increment 2 on a branch and merge it through a pull request; that is the exercise from [reading what the agent wrote](docs/agent-loop-and-pull-requests.md). **Then** look and feel, a partner playtest with one fix, and publish to its own Vercel project with [vc-game-publish](game-skills/vc-game-publish/SKILL.md).

## Stuck? Grab a checkpoint

You will get stuck today. So will I, on the projector, in front of everyone. When it happens, say what you see in one sentence: "I clicked X, expected Y, saw Z." Try the matching fix in [stuck.md](docs/stuck.md). Still stuck? Download the tested file for your stage and keep going from the next step. That's how professionals work, and nobody in the room is grading your code.

| Where you are | Download | Continue with |
| --- | --- | --- |
| Website, nothing works yet | [personal-website/index.html](examples/personal-website/index.html) | Replace the content section by section |
| Game, board does not detect wins | [checkpoint-1-board](examples/alien-tic-tac-toe/checkpoint-1-board/index.html) | Build the battle |
| Game, battle logic is wrong | [checkpoint-2-battle](examples/alien-tic-tac-toe/checkpoint-2-battle/index.html) | Connect it to the board |
| Game, will not connect, or it is 4:30 | [checkpoint-3-complete](examples/alien-tic-tac-toe/checkpoint-3-complete/index.html) | Pick a theme, publish |

Still stuck after that: fill in the [help request](templates/help-request.md) and raise a hand.

## Give this course to your chatbot

Point an authorized coding assistant at this repository and ask it to read [AI-START.md](AI-START.md). If your chatbot cannot access the private repository, download and attach [AI-COURSE-PACK.md](AI-COURSE-PACK.md), a single text file containing every lesson, prompt, template, and skill. If file upload is unavailable, paste the entry point and the current lesson.

> Read AI-START.md from this repository or the course materials I attached. Be my patient guide. Tell me which files you actually received, ask whether I am starting or continuing, and guide me through the website first, then the game. Use one checkpoint at a time and show me how to check each result.

Repository access does not transfer to your chatbot. Never share passwords or access tokens. The website and game belong in separate repositories that you own.

## About Mark

I'm the CEO and founder of Peripety Labs and the founding publisher of The Artificially Intelligent Enterprise, which about 90,000 business leaders read. I co-founded All Things AI. Before that I spent 25-plus years in enterprise software, through open source and cloud, including VP at Cloud.com and Executive Director of the Node.js Foundation, and I started my first company in 1995. I've shipped every mistake I'm going to show you.

## Everyone gets the slides. Reviewers get the book.

Here's the deal. Everyone gets the slides: they're right here in this repository, in [presentations/ato-2026-workshop](presentations/ato-2026-workshop/) as PDF and PowerPoint, with the speaker notes. Tell me what worked and what didn't, good or bad, and I'll also send you the preview release edition of my upcoming book, *Software Development for Non-Programmers: Beyond Vibecoding*, a practical guide to using AI to build useful software without writing code. The critical notes are the ones that make the next class better, so don't hold back. Copy the [feedback template](templates/feedback.md) into an email to mrhinkle@allthingsai.org with the subject "ATO workshop feedback," or hand me the printed sheet before you leave. I read every one myself.

Optional, and separate: add Vibe Coding to your LinkedIn skills and post about the day, and I'll endorse it. See [linkedin-wrap-up.md](docs/linkedin-wrap-up.md).

## See you in the spring

All Things AI 2027 is April 18 to 20, 2027, in this same building, the Atlantic Union Bank Convention Center (formerly the Raleigh Convention Center). It's the hands-on conference for people exactly like this room. April 18 is the Agent Hackathon and April 21 is a separate Executive Summit. Details at [allthingsai.org](https://allthingsai.org).

## Skill library

| Shared workflow and website | Game project |
| --- | --- |
| [Plan first, right-size the model](skills/vc-plan-first/SKILL.md) | [Choose and define a game](game-skills/vc-game-brief/SKILL.md) |
| [Understand the SDLC](skills/vc-sdlc-coach/SKILL.md) | |
| [Prepare accounts and workflow](skills/vc-setup-guide/SKILL.md) | [Write rules and controls](game-skills/vc-game-rules/SKILL.md) |
| [Write the project brief](skills/vc-project-brief/SKILL.md) | [Build the playable loop](game-skills/vc-game-build/SKILL.md) |
| [Scope the first version](skills/vc-project-scope/SKILL.md) | Use the agreed game rules to limit scope |
| [Plan the page and increments](skills/vc-project-plan/SKILL.md) | [Improve appearance](game-skills/vc-game-look-feel/SKILL.md) |
| [Build a small increment](skills/vc-build-small/SKILL.md) | [Explain outcomes and replay](game-skills/vc-game-feedback/SKILL.md) |
| [Check quality](skills/vc-quality-check/SKILL.md) | [Playtest and tune](game-skills/vc-game-playtest/SKILL.md) |
| [Publish the website](skills/vc-publish-site/SKILL.md) | [Publish the game](game-skills/vc-game-publish/SKILL.md) |
| [Maintain and recover](skills/vc-maintain-site/SKILL.md) | |
| [Demonstrate and hand off](skills/vc-project-handoff/SKILL.md) | |

Plus the ten public skills in the [website skills menu](docs/website-skills-menu.md).

## Repository contents

```text
README.md                        This page: prompts, schedule, and navigation
START-HERE.md                    Student entry point and copy/paste startup prompt
PRE-CLASS-PREP.md                Mac/Windows setup, accounts, and readiness checklist
prep/laptop-check.html           Offline file-opening and button/keyboard check
AI-START.md                      AI tutor workflow and honest capability checks
AI-COURSE-PACK.md                Single-file chatbot handoff, generated from current docs
AGENTS.md / CLAUDE.md            Course-repository assistant entry points
course-map.json                  Machine-readable course stages, files, and timings
instructor-guide.md              Timed teaching plan and facilitation notes
instructor/ato-2026-run-of-show.md  Monday's schedule, room setup, scope cuts, preflight additions
instructor/preflight.md          Rehearsal and classroom preparation checklist
setup-guide.md                   Accounts, connections, publishing, troubleshooting
skill-guide.md                   Ten shared skills and starter prompts
game-skills-guide.md             Seven game skills and three beginner recipes
docs/personal-website-walkthrough.md  LinkedIn export to live site, step by step
docs/website-skills-menu.md      Ten public skills to add features, with prompts and checks
docs/tic-tac-toe-variants.md     Eight themes, wireframes, and build prompts for the game
docs/stuck.md                    Five-minute rule, checkpoint ladder, usual suspects
docs/v0-route.md                 The v0 → GitHub → Vercel loop, prompts, and recovery table
docs/agent-loop-and-pull-requests.md  Commits, diffs, the PR as the human checkpoint, rollback
docs/your-own-project.md         Track B: build the thing you brought, scoped and through PRs
docs/github-tour.md              The six GitHub screens you use today, with a ten-minute exercise
docs/plan-first-and-models.md    Plan mode before building; big model plans, middle builds, small tidies
docs/skills-guide.md             What a skill is, how to write a good one, install in ChatGPT and Claude
docs/secrets-tokens-and-the-clipboard.md  No passwords in chats; pbpaste into env vars; Composio bonus
docs/platform-landscape.md       Lovable, Bolt.new, Base44, Replit, v0, and the rest, compared
docs/wireframes/                 Low-fidelity SVG sketches for the game and the website
docs/                            Rules, walkthroughs, troubleshooting, agents, prompts, glossary
examples/personal-website/       Tested personal site: six themes, two layouts, resume templates
examples/alien-tic-tac-toe/      Tested game in three checkpoints with eight themes
handouts/student-workbook.md     Fill-in briefs, rules, tests, releases, and handoff
templates/                       Learner AGENTS.md, state, help, feedback, agent tasks, handoffs
guides/                          Illustrated participant guide: PDF, HTML, Markdown, diagrams
skills/                          Website and lifecycle SKILL.md files
game-skills/                     Game SKILL.md files
website-starters/                Seven offline website starters and a gallery
presentations/ato-2026-workshop/ Monday's slide deck with speaker notes
presentations/reference-six-hour-class/  Earlier deck, kept for reference
repository-map.md                Sources, inspected versions, and adaptation choices
licenses/                        Source licenses and reuse notes
tools/                           Rebuild the guide and single-file course pack
```

## Current readiness

The curriculum, 18 course skills held to the [skills guide](docs/skills-guide.md) quality bar, the ten-skill public menu, the illustrated participant guide, student templates, seven website starters, a tested personal-website example, and tested game checkpoints with eight themes are assembled. Each example's README records the browser checks that were run and when. The Monday deck with speaker notes is in `presentations/ato-2026-workshop/`.

What a classroom rehearsal still has to prove: the LinkedIn export on a current account, the v0 connect, deploy, and push-to-GitHub flow (menu labels in the v0 page were written from general knowledge and must be confirmed live), the browser-only pull request exercise, publishing both examples through the browser upload route to fresh Vercel projects, and at least one skills-menu row end to end on the portable route. Those rows are in the [preflight](instructor/preflight.md). Documentation and headless-browser checks are not a substitute for a rehearsal.

## Sources and reuse

This course adapts Mark's [VibeCoding-a-Website](https://github.com/mrhinkle/VibeCoding-a-Website), links to his [aienterprise-skills](https://github.com/mrhinkle/aienterprise-skills), draws on the tested game builds in Mark's public [describe-build-check-ship-companion](https://github.com/mrhinkle/describe-build-check-ship-companion) repository, and reuses the private [Presentations class folder](https://github.com/mrhinkle/Presentations/tree/03a1e051e62f11134a723e498dda955e2ed2f394/vibe-coding-class) and patterns from the All Things AI Arcade. See the [source map](repository-map.md) and [reuse notes](licenses/README.md). The repository is private so the presentation assets remain within the same visibility boundary.
