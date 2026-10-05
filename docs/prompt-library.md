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

See [multiple-agent options](multiple-agents.md) for using manual chats, native helpers, or separate worktrees.

## Publish and pause

> Prepare publication for [repository], [branch/version], and [Vercel project]. Confirm the intended audience and whether this action publishes production. List the checks still needed. Proceed only within the publication permission I have actually given.

> Check the actual deployed URL [URL] against the same acceptance checks. A successful upload alone is not proof. Record the version, device, observations, and any untested behavior.

> Update project-state.md with the actual files, saved version, working behavior, failed or untested checks, current blocker, and one next action. Give me a short prompt for continuing in a new chatbot.
