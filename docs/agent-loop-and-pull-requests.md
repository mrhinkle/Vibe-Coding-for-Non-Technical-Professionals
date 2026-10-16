# Reading what the agent wrote: commits, diffs, pull requests, and saying no

> **For an AI receiving only this lesson:** When the learner asks you to make a change to a project that lives in GitHub, propose the change as a separate branch or a clearly separated version, describe exactly which files you changed and why, and never delete tests, checks, or files the learner did not mention. If asked to review a diff, read it for scope, secrets, and deleted safeguards before anything else.

Agents write code fast. The skill the workshop is about is directing that work and staying in charge of what ships. GitHub is where that happens. This page teaches the four things you need: read a commit, read a diff, use a pull request as the checkpoint, and roll back. Twenty minutes, right after your website is live.

## The loop, in two vocabularies

| Professional teams say | You did it today as |
| --- | --- |
| Prompt | Describe: the brief, the wireframe, the one-change prompt |
| Plan (the step most people skip) | Plan: the agent lists files, order, and three hand checks; you approve before anything is built |
| Generate | Build: the agent returns code |
| Commit | Save: the change lands in GitHub with a message |
| Review | Check: you read the diff and test the actual page |
| Deploy | Publish: Vercel ships the merged version to a live URL |
| Repeat | Repeat |

Same loop. The only new habit is that **review happens on the diff, before deploy**, not by squinting at the live site afterward.

## 1. Read a commit

Open your repository on github.com and click the commit count (it says something like "12 commits"). Each line is one saved change: a message, who made it, when. Click one.

Read in this order:

1. **The message.** It should say what changed and why in one line. "Update index.html" tells you nothing. "Add Education section from resume" tells you what to expect.
2. **The file list.** How many files changed? You asked for one section; if nine files changed, stop and ask why.
3. **The lines.** Green with a plus sign was added. Red with a minus sign was removed. Gray is unchanged context so you can see where.

Exercise, five minutes: open the commit that added your About section. Say out loud what was added, what was removed, and whether anything was touched that you did not ask for.

## 2. Read a diff like a supervisor, not a programmer

You do not need to understand every line. You need to answer four questions:

| Question | Red flag if |
| --- | --- |
| Did it touch only what I asked? | Files you did not mention are in the list, or the change is much bigger than the request. |
| Did it remove any safety? | A test, a check, a validation, an `if` that guarded something, or a whole file disappeared. |
| Is there a secret in it? | Anything that looks like a key, token, or password: long random strings, `sk-`, `key=`, `password:`. Stop immediately; that must never be in a repository. |
| Does it match the prompt I gave? | The agent "improved" something you did not ask about, or renamed things, or added a feature. |

If any row is red, you say no. Saying no is the job. Ask the agent to redo the change with only the requested scope, or restore the previous version.

## 3. The pull request is where a human stays in charge

A **branch** is a copy of the project where a change is made without touching the live version. A **pull request** (PR) says "here is the change on my branch; review it, then merge it into the main version." Merging triggers the deploy. Until you merge, nothing ships.

That makes the PR the natural checkpoint for agent work: the agent proposes, you review the diff with the four questions, you merge or you send it back.

**Exercise, during the game block.** Increment 1 of your game (the board) goes straight into `main`. Increment 2 (the battle) goes through a pull request:

- **On v0:** make increment 2 as a new generation, push it to GitHub, and when GitHub offers to open a pull request for the new branch, do it. If v0 pushed straight to `main`, that is fine today; open the commit instead and review it the same way.
- **On the portable route:** on github.com, open your game repository, press the branch dropdown, type `battle` and create the branch. Upload the increment-2 file to that branch. GitHub shows a yellow bar offering "Compare & pull request." Press it, write one sentence about what the change does, and create the PR.

Now review your own PR: the Files changed tab is the diff. Ask the four questions. Then press Merge. Vercel deploys the merged version; your live URL updates within a minute. Open the Deployments list in Vercel and see that the deploy is tied to that merge.

Checkpoint: a merged pull request in your game repository with a one-sentence description and a deploy that followed it.

## 4. Roll back

Nothing in GitHub is lost. Three ways back, from gentlest to bluntest:

1. **Restore a version in v0.** Every generation is a version; pick the earlier one and push again.
2. **Revert a commit on GitHub.** Open the bad commit or merged PR and press Revert. GitHub makes a new commit that undoes it. The history stays honest; nothing is erased.
3. **Redeploy an earlier deployment in Vercel.** In the project's Deployments list, open a previous successful deploy and promote it. The live URL points at the old version while you fix the new one.

Practice one of these today, on purpose, while nothing is at stake. The first time you need it for real should not be the first time you have done it.

## 5. Make the agent easier to supervise

Three habits cut your review time in half:

- **One change per request.** "Add the Education section. Change nothing else." Small diffs are readable diffs.
- **Ask for the plan first.** "Tell me which files you will change and why before you change them." Compare the plan to the diff afterward.
- **Keep instructions in the repository.** A short `AGENTS.md` (template in [templates/AGENTS.md](../templates/AGENTS.md)) tells every agent, every session, what the project is and what it must never do: no secrets in code, no new dependencies without asking, keep it one page. The agent reads it so you do not have to repeat it.

## For developers in the room

This is the same discipline you would apply to a fast junior engineer: small PRs, a plan before code, review for scope and safety before style, tests as the gate, and revert without drama. Directing ten agents is directing ten such engineers; the PR queue is where you keep up. The [multiple agents](multiple-agents.md) lesson adds a read-only reviewer agent as a second pair of eyes; it is a useful extension once the single-agent loop is boring.

## Vocabulary

| Word | Meaning today |
| --- | --- |
| Repository | Your project's folder on GitHub, with its whole history |
| Commit | One saved change with a message |
| Diff | The exact lines a change added and removed |
| Branch | A copy of the project where a change is made safely |
| Pull request | "Review this branch, then merge it" |
| Merge | Accept the change into the main version, which deploys |
| Revert | A new commit that undoes an earlier one |
| Deploy | Vercel putting a version on the live URL |
