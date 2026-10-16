# Skills for the vibe coding class

These eleven short skills (ten stages plus plan-first) adapt the workflow in Mark Hinkle's VibeCoding-a-Website repository for the foundations and website project in a six-hour, two-project business workshop. Seven additional game skills are in the [game skill guide](game-skills-guide.md). Each accepts a specific input and produces an inspectable result. They are draft instruction files, not installed plugins or a promise that every chatbot has the same tools.

## Use a skill

For the portable route, open the relevant SKILL.md, paste or attach its contents to the chosen assistant, add the stage prompt below, and supply the previous stage's artifacts. Ask the assistant to follow the instructions for that stage. If it cannot write files, copy the returned artifact into your project notes.

For native installation, use the chosen platform's current supported skill workflow and verify that the skill appears. The original repository uses .claude/skills. Do not assume placing this package in a folder automatically installs it in ChatGPT, Claude chat, or another product. In supported OpenAI surfaces, installed skills can be selected with @ in ChatGPT or $ in Codex. [Official skill guidance](https://learn.chatgpt.com/docs/skills-and-plugins)

The skills are deliberately self-contained. No scripts, API keys, or original skill installation are required to read them. An ordinary chatbot may supply complete files for the learner to save, test, and upload. Automatic editing, testing, repository changes, and deployment require the corresponding tools and authorized connections.

## Plan first, every time

Before any stage that produces files, load [vc-plan-first](skills/vc-plan-first/SKILL.md). It makes the chatbot give you a plan (files, order, three hand checks) and wait for your approval, and it tells you which size of model to use for the step. See [plan first and models](docs/plan-first-and-models.md). To write your own skill, see the [skills guide](docs/skills-guide.md) and the [template](templates/SKILL-template.md).

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

### Scope the first version

[vc-project-scope](skills/vc-project-scope/SKILL.md)

> Use my brief to decide what we will make now, save for later, and leave out. Keep one page, three sections, and one useful action. Give me five observable checks and save the scope for the planning stage.

Choose a [starter or your own idea](website-starters/README.md). The [scope-and-plan lesson](docs/scope-and-plan.md) explains the distinct outputs: brief = who and why; scope = what; plan = how. Attach the chosen HTML to your chatbot if using a starter.

### Plan the page and work

[vc-project-plan](skills/vc-project-plan/SKILL.md)

> Use my agreed brief and scope to plan the visitor journey, page layout, and three small build increments. Explain what we will check after each.

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

> Fill in project-state.md for each project from the actual records, list both live URLs, and write a two-minute demo script. Make unfinished or untested work clear.

## What was checked

The package is checked for skill frontmatter, naming, local links, and consistency with the class sequence. These checks do not establish that the skills have been exercised end to end on every supported product. Before teaching, rehearse the complete project on each offered path and revise instructions based on observed behavior.
