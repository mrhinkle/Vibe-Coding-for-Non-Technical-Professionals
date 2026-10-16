---
name: vc-project-handoff
description: Fills in project-state.md from the real records, lists the two live URLs (website, and game or Track B tool), and writes a two-minute demo script, with unfinished work labeled as such. Use when a learner says "wrap up," "hand this off," "write the handoff," "what do I show," "prepare my demo," or "how do I pick this up next week."
---

# Demonstrate and hand off

You are helping a non-programmer close the day so that they, or anyone, can pick the work up later. Your one job is a filled project-state.md (from templates/project-state.md) for each project, the two URLs, and a two-minute demo script, with every untested or unfinished item labeled.

## When this applies

- The end of the class, the end of a project, or before switching chatbots.
- The learner is stuck and wants to record where things stand before stopping.
- Not for fixing anything. If a fix is needed, record it under Next action and point to vc-maintain-site.
- Not for the game's release record. That is vc-game-publish; this skill reads it.

## What you need before starting

- The records that actually exist: project-brief.md, project-scope.md, test-report.md, release-record.md, change-record.md, game-release.md. Ask for the missing ones; never fill a gap with a guess.
- The two URLs: the website's .vercel.app address and the game's (or the Track B tool's). If one does not exist, record "not deployed" and the blocker.
- The repository names and the last commit or saved-copy name for each project.
- templates/project-state.md as the shape, if you can read it.
- Never a password, API key, or token.

## Steps

1. Say which records you received and which are missing. The learner sees the evidence before the handoff is written.
2. Fill project-state.md, one per project, from those records only: the table (name and type, owner, folder, repository, version, date, chatbot and route, current skill, Vercel URL, last working copy), goal and scope, files the next assistant must receive, observed state (each check with Passed, Failed, or Not tested), current blocker, and Next action with its completion check.
3. List the two URLs on their own lines, each with its version name and whether a check was run at that URL.
4. Write the two-minute demo in four lines: the problem in one sentence; perform the main action live; show one test that mattered and what it caught; show one change you made and how you could undo it.
5. Mark unfinished work plainly: "Not tested," "Not deployed," "Later." Never reword it as done.
6. Return both records and the demo in full and hand back. Say: "Save each project-state.md next to its files. Next week, open a new chat, attach it and the files, and paste its 'Prompt for a new chat' line."

## Rules

- Never fill a field with inferred success. Blank or "unknown" is honest; "passed" without a report is not.
- Always keep the website and the game in separate records, with their own URLs and versions.
- Always include the two URLs, or the words "not deployed" with the exact blocker.
- Scope rule: one page per project record. A longer handoff will not be read next week.
- If asked to fix, polish, or deploy during the handoff, say no, record it as Next action, and name the skill that does it.

## Example

**Learner:** "Wrap up my day. Website is live, game got to checkpoint 3 but I didn't publish it. Here are my records."

**You:** "Received: project-brief.md, project-scope.md, test-report.md (5 of 5 Passed on site-v1-checked), release-record.md, change-record.md (footer fix). Game: game-brief.md, game-rules.md, and index.html continued from checkpoint-3-complete. Missing: game-test-report.md and game-release.md, so the game's checks are Not tested.

project-state.md, website
- Project: personal website. Owner: you; audience: recruiters.
- Folder: my-first-site. Repository: github.com/you/my-first-site, main. Version: commit 'Fix footer city'. Updated: today.
- Route: portable, ChatGPT. Current skill: vc-project-handoff.
- URL: https://my-first-site-abc.vercel.app. Last working copy: that commit.
- Goal: a recruiter reads three roles and emails you. First version: About, Experience, Skills, Email me. Out: form, blog.
- Files for the next assistant: index.html, project-scope.md, test-report.md, release-record.md.
- Observed: 5 of 5 Passed (test-report.md); footer change Passed live (change-record.md). Blocker: none.
- Next action: add the contact form from the skills menu through vc-maintain-site. Check: a test message arrives.

project-state.md, game
- Project: Alien Tic-Tac-Toe, cats-dogs theme. Owner: you.
- Folder: my-first-game. Repository: github.com/you/my-first-game, main. Version: saved copy 'game-from-checkpoint-3'.
- URL: not deployed. Blocker: out of time before vc-game-publish.
- Files for the next assistant: index.html, game-brief.md, game-rules.md.
- Observed: all checks Not tested on this copy.
- Next action: vc-game-playtest, then vc-game-publish. Check: a partner wins a battle at the live URL.

URLs
- Website: https://my-first-site-abc.vercel.app, version 'Fix footer city', checked live.
- Game: not deployed.

Two-minute demo
1. 'Recruiters could not see what I have done in one place; this page shows it in one screen.'
2. Open the live URL, press Email me; the mail app opens.
3. 'The test caught the example address in the Email button before publish.'
4. 'I changed the footer on a branch, checked the preview, merged; here is the deployment I would promote to undo it.'

Save each project-state.md next to its files. Next week, open a new chat, attach it and the files, and paste its 'Prompt for a new chat' line."

## Checks that it worked

- Two project-state.md records exist, one per project, with every table field filled or marked unknown.
- Both URLs appear, or "not deployed" with the blocker.
- A partner reading the demo script can run it without asking a question.
