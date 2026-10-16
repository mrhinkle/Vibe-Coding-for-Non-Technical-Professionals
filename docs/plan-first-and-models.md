# Plan first, then build. And pick the right size model for each job.

> **For an AI receiving only this lesson:** When the learner starts any project or any change bigger than one line, produce a plan before code: the files you will create or change, what each does, and three checks the learner can perform by hand. Wait for approval. If the learner's chat has a plan mode or thinking mode, tell them to turn it on for this step.

Two habits separate people who get a working tool from people who get a pile of half-working files. First, you make the agent tell you what it's going to do before it does it. Second, you spend your best model on that plan and your cheaper models on everything after. Neither one needs you to understand code.

## 1. Plan mode: make it tell you before it touches a file

Every coding agent will happily start generating the moment you describe something. That's the trap. The first generation sets the shape of everything after it, and a wrong shape costs an hour to undo. A plan costs three minutes to read.

**What a plan is.** A short list, in plain English: which files it will create or change, what each one does, and how you'll check the result by hand. If the plan has more than a handful of files or more than one screen, it's too big. Cut it before you build.

**How to get one, in whatever you're using.**

| Tool | How to ask for a plan |
| --- | --- |
| Claude Code (the connected route) | Turn on plan mode before you type the request. Look for the Plan toggle; on the keyboard it's Shift+Tab until the prompt says plan. Claude reads, thinks, and proposes; it can't change files until you approve. |
| Claude.ai, Cowork | Pick the "extended thinking" or deeper reasoning option if your plan has one, then use the plan prompt below. |
| ChatGPT | Choose the thinking model (the one labeled for reasoning, not the fast default), then use the plan prompt. |
| v0 | Use the plan prompt as your first message. Ask it to list components and files before generating. Read the list, then say "build it." |
| Gemini and others | Same: strongest or "thinking" model, then the plan prompt. |

Labels move around. The habit doesn't. If you can't find a toggle, the prompt alone does the job.

**The plan prompt.** Paste it with your brief, scope, and wireframe:

> Before you write any code, give me the plan: the files you will create or change, one line on what each does, the order you'll do them in, and three checks I can perform by hand to know it worked. Flag anything in my brief that is bigger than one screen, one input, one result. Do not build yet.

**How to read the plan.** Like a contractor's quote. Does the file list match the wireframe? Is there anything you didn't ask for (a database, a login, a "utility" folder)? Are the three checks things you can actually see? Cut what you don't need, then say "build exactly this plan."

**When to plan again.** Any time a change touches more than one file, any time you're about to add a feature from the skills menu, and any time you've been stuck for more than ten minutes. "Stop. Tell me the plan for fixing this before you change anything" is the most useful sentence you'll say all day.

Checkpoint: before your first build, you have a plan with a file list you understand and three hand checks written in your project-state file.

## 2. The right size model for each job

Model names change every few months. The sizes don't. Every vendor sells roughly three: a big, slow, careful one; a middle one that's fast and good; and a small, cheap one for chores. The mistake most people make is using one model for everything. Use the expensive thinking where a mistake is expensive to undo, and the cheap one where it isn't.

| Job | Size | Why | Examples of the tier (names will drift) |
| --- | --- | --- | --- |
| **Planning and judgment.** The brief, the scope, the plan, reviewing a diff, deciding what to cut, getting unstuck after ten minutes | **Biggest, "thinking" or "reasoning" model** | A bad plan poisons everything after it. This is where a wrong answer costs you an hour. | Claude Opus-class; ChatGPT's thinking or pro tier; Gemini Pro |
| **Building.** Generate the files, make one change, add one feature from a skill | **Middle model** | Fast enough to keep your loop tight, good enough that your checks catch what's left. | Claude Sonnet-class; the standard ChatGPT model; Gemini Flash with thinking on |
| **Chores.** Rename things, write alt text, summarize an error message, draft a commit message, reformat a list | **Smallest, fastest model** | The answer is easy to check at a glance and cheap to redo. | Claude Haiku-class; the mini tier of ChatGPT; Gemini Flash-Lite |

Three rules of thumb:

1. **Plan with the biggest, build with the middle, tidy with the smallest.** If you remember one line, that's it.
2. **Only have one model?** Free plans often do. Use whatever thinking or reasoning option it offers for the plan, and accept that it's slower. Turn it off for chores.
3. **Stuck for ten minutes on the middle model?** Don't keep poking it. Paste the problem, the file, and the exact error into the big model and ask for the plan to fix it. Then take that plan back to the middle model.

For the connected route, Claude Code lets you switch the model with the `/model` command, and plan mode uses the stronger model by default on most plans. Check your own plan's settings; don't assume.

Checkpoint: you can say which model you'll use for your plan, which for your build, and which for your commit messages, before you open the chat.

## 3. How this fits the day

| When | What you do |
| --- | --- |
| 9:30 setup | Note which models your chatbot gives you and where the thinking toggle lives. |
| 10:00 personal website | Brief and content on the big model. Plan prompt before the first build. Build on the middle model. |
| 11:30 reading what the agent wrote | Review the diff on the big model when the change is big; the middle model is fine for a one-line change. |
| 12:45 afternoon project | Plan mode again, from scratch. Increments on the middle model. |
| Any time you're stuck | Big model, plan prompt, then back to building. |

The [vc-plan-first](../skills/vc-plan-first/SKILL.md) skill packages this page so your chatbot enforces it for you.
