# Skills: what they are, how to write a good one, and how to install them in ChatGPT and Claude

> **For an AI receiving only this lesson:** A skill is a plain-text instruction file the learner gives you for one job. Follow the one they hand you for the current task only. If asked to write a skill, use the template in this lesson and keep it to one job with checks the learner can see.

Every time you explain to a chatbot how you want something done, you're writing instructions you'll have to write again tomorrow. A skill is those instructions saved once, in a file, so the next session (and the next model, and your colleague) gets the same behavior without you repeating yourself. That's it. No code, no account, no magic.

In this course you've been using skills all day: the eighteen `vc-*` skills in this repository, and the ten public ones in the [skills menu](website-skills-menu.md). This page shows you how they're built so you can write your own, and how to install them where you work.

## 1. Anatomy of a skill

A skill is a folder with one file in it, `SKILL.md`. The file has two parts.

**The front matter** is a few lines at the top between `---` markers. Two fields matter:

```
---
name: vc-plan-first
description: Forces a plan before any code is written... Use at the start of every project, before any change that touches more than one file... Triggers on "let's build," "make me," "add a," "fix this," "I'm stuck."
---
```

The `description` does double duty. It tells a human what the skill does, and it tells the chatbot *when* to reach for it. Put the trigger phrases in. A skill nobody triggers is a skill nobody uses.

**The body** is the instructions, in this order:

1. **Who you're helping and what the job is.** Two sentences.
2. **When this applies**, and when it doesn't.
3. **Steps**, numbered, each ending in something observable.
4. **Rules**: the short list of never-do-this. Secrets, scope, inventing facts.
5. **One worked example**: a realistic request and the ideal response.
6. **Checks that it worked**: how the learner knows, by looking.

Open [`skills/vc-plan-first/SKILL.md`](../skills/vc-plan-first/SKILL.md) and you'll see exactly that shape. Copy it from [`templates/SKILL-template.md`](../templates/SKILL-template.md).

## 2. What makes a skill good

| Good | Bad |
| --- | --- |
| One job. "Write the brief." | Five jobs. "Handle the whole project." |
| Triggers in the description. | A title and nothing else. |
| Steps end in something you can see. | Steps end in "ensure quality." |
| A rules list with the three ways it goes wrong. | No rules, or twenty. |
| One worked example. | No example, or a dozen. |
| Under about 300 lines. | A novel the model skims. |
| Says what to do when input is missing. | Assumes everything is there. |
| Never asks for secrets; never assumes tools it hasn't got. | "Connect to the database and..." |

The test: hand the skill and a realistic request to two different chatbots. If you get the same shape of answer from both, the skill is doing the work. If you don't, the skill is relying on the model to guess.

## 3. Write one in ten minutes

Pick a job you've explained to a chatbot more than twice this month. Then use the biggest model you have (this is a planning step) and this prompt:

> Write a SKILL.md for this job using the attached SKILL-template.md: [the job in one sentence]. The person using it is [who]. It goes wrong when [the two or three ways you've seen it go wrong]. Keep it to one job, put trigger phrases in the description, make every step end in something I can see, include one worked example, and list the checks. No code unless the job is code. Under 200 lines.

Read it. Cut anything you wouldn't say out loud. Test it on a real request. Save it in a folder named after the skill.

If you want a skill-writing skill, Mark's public `aie-skill-creator` in [aienterprise-skills](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-skill-creator) interviews you and writes it. The ten-minute prompt above is the training-wheels version.

## 4. Install it where you work

The portable truth: a skill is text. Any chatbot that can read a file or a paste can use one. The differences are about how *automatically* it loads. Menu names change; these are the shapes to look for, and the instructor demonstrates both routes live in sprint 1.

### Claude

| Where | How | What you get |
| --- | --- | --- |
| **Claude.ai, any plan** | Open a Project. Add the `SKILL.md` to the project's knowledge (the files area). Add one line to the project instructions: "Follow the attached skills when their trigger phrases apply." | The skill is available in every chat inside that project. |
| **Claude.ai, plans with Skills** | Settings → Capabilities → Skills (the name varies). Upload the skill folder as a ZIP. Toggle it on. | Claude loads it on its own whenever the description matches. |
| **Claude Code and Cowork (the connected route)** | Put the folder at `.claude/skills/<name>/SKILL.md` inside your project for a project skill, or `~/.claude/skills/<name>/` for all projects. | It appears as `/<name>` and loads itself when relevant. Nothing to upload. |
| **Mark's public bundles** | In Claude Code or Cowork: `/plugin marketplace add mrhinkle/aienterprise-skills`, then `/plugin install aie-web@aienterprise-skills`. | A whole bundle, kept up to date. |

**Live demo script (3 minutes).** Open Claude. Attach `skills/vc-project-brief/SKILL.md`. Type the brief prompt from the walkthrough. Show the shape of the answer: brief, scope, checks, no code. Then open a fresh chat without the skill, same prompt, and show the difference. That gap is what a skill buys you.

### ChatGPT

| Where | How | What you get |
| --- | --- | --- |
| **Any chat** | Paste the `SKILL.md` with: "Use the following instructions as a skill for my next request. Read them, confirm what you will and will not do, then wait for my task." | Works everywhere, including free plans. Lasts one conversation. |
| **A Project** | Create a Project. Upload the `SKILL.md` files. In the project instructions write: "Follow the attached skills when their trigger phrases apply. Say which one you are using." | Every chat in the project has the skills. |
| **A custom GPT** | Create a GPT. Upload the skills as Knowledge. Put the same line in its instructions. Share it with your team. | Colleagues get your skills without knowing what a skill is. |

**Live demo script (3 minutes).** Same brief prompt, three ways: a plain chat with no skill, a plain chat with the skill pasted, and a Project with the skill uploaded. Point at the difference between the first and the other two, then at how the Project version didn't need the paste.

### Everything else

Gemini: a Gem with the files attached. Copilot: paste, or a Copilot agent with the files. v0: paste the skill at the top of the conversation. Any of them: the paste route always works.

## 5. Keep the skills in this repository good

The eighteen `vc-*` skills are the course's own. They're held to the checklist above: one job, triggers in the description, observable steps, rules, one example, checks, under 300 lines, no secrets, no assumed tools. When you find one that falls short in class, say so on the feedback form; that's exactly the kind of note that improves the next run.

If you write a skill you're proud of during sprint 2 or 3, Mark would like to see it. Send it with your feedback.

## Checkpoint

You can explain to a colleague, in one sentence, what a skill is. You've installed one in the chatbot you actually use. You've run the same prompt with and without it and seen the difference.
