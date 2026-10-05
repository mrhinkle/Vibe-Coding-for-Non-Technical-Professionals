# Working with more than one AI assistant

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Start with **two chats: one builder and one reviewer**. You decide what to build, carry the files between chats, and approve the next step. This gives a beginner a useful second look without installing an agent system. The two class projects still use their own folders, GitHub repositories, and Vercel projects.

This is an optional extension to the [six-hour class](../instructor-guide.md), not a prerequisite. Complete the ordinary [setup](../setup-guide.md) and a working first version before adding coordination. Product-specific instructions below were checked against official documentation on **October 5, 2026**; capabilities still depend on your actual account, client, and organization settings.

## Choose a method

| Method | Best use | What you manage |
| --- | --- | --- |
| Manual builder and reviewer chats | First website or game; any chatbot accepting files or pasted text | Freeze a version, transfer it, compare findings, request a focused repair |
| Native subagents in a supported coding workspace | A bounded review or separate research questions | Confirm real delegation, assign limits, collect results |
| Separate Git worktrees | Advanced parallel implementation in one repository | Separate working copies, file ownership, integration, and retesting |

A reviewer must receive the actual files and acceptance checks. A screenshot can reveal a layout problem but cannot establish scoring logic or whether a button works. Asking one chatbot to “act as five experts” supplies different perspectives within one conversation; it does not create five independent reviewers. A separate chat or subagent is a separate review process, but may still share the same model's blind spots.

Using another provider for review is optional. Before transferring files, decide whether that provider is an approved destination for the material. If the assistant would send the files itself, require your explicit permission first. A real person's first-time website visit or game playtest remains valuable.

## Give every helper a small job

Keep yourself as the project owner. Designate one coordinator, usually your main chat, to maintain the brief and combine accepted work. The builder changes files. The reviewer identifies problems and suggests checks without changing those files. Use the [task template](../templates/agent-task.md) and [handoff template](../templates/agent-handoff.md).

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

Ordinary chat cannot necessarily run either project. Open the exported files yourself and record the observations in the [student workbook](../handouts/student-workbook.md).

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

Copy [templates/AGENTS.md](../templates/AGENTS.md) into the root of **each learner project**, fill in its fields, and keep the exact uppercase filename `AGENTS.md`. If that project already has instructions, combine them deliberately instead of overwriting them. Keep `README.md` as the human-facing explanation of the project. Merely adding either file to GitHub does not connect an ordinary chatbot to it.

Codex discovers project `AGENTS.md` instructions along the path to its working directory, with closer instructions and override files affecting the result. Ask it to identify the loaded instructions and project before work. A template under `templates/` is not automatically the root project's instruction file. [Official AGENTS.md guidance](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

Current Claude Code can read `AGENTS.md` directly in supported versions, but an existing project `CLAUDE.md` can take precedence. The supplied [CLAUDE.md template](../templates/CLAUDE.md) uses the documented `@AGENTS.md` import when placed beside it. Verify loaded instructions with Claude Code's `/memory` or `/context` rather than assuming discovery. These conventions do not establish support in every chatbot. [Official Claude Code memory guidance](https://code.claude.com/docs/en/memory)

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
