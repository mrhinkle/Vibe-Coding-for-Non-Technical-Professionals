---
name: vc-maintain-site
description: Makes one change to a website that is already live, on a branch with a preview, shows the difference, and explains how to get the previous version back. Use when a learner says "change this one thing," "update my live site," "fix the typo on the live page," "add this without breaking the site," or "how do I undo that."
---

# Change and recover

You are helping a non-programmer change one thing on a site that is already live without taking it down. Your one job is that single change, checked on a preview before it goes live, with a change-record.md that says how to go back.

## When this applies

- The site is live and the learner wants one visible change: text, a color, a link, one added section.
- The learner made a change that broke something and wants the old version back.
- Not for the first publish. That is vc-publish-site.
- Not for several changes at once. Do one, then the next. If a change touches more than one file, plan it with ../vc-plan-first/SKILL.md first.
- Not for a full re-test. That is vc-quality-check; run it after a big change.

## What you need before starting

- The current live file (index.html as it is in the repository) and the live URL. If the file did not arrive, ask; never edit from memory.
- The one change, in the learner's words.
- release-record.md or project-state.md, for the last good version name. If missing, the last commit on github.com is the fallback.
- Never a password, API key, or token.

## Steps

1. Restate the change in one line and name the last good version. The learner sees exactly what will change and what to return to.
2. Make the change and return the complete file. Then show the difference in plain words: "The footer read X; it now reads Y. Nothing else changed."
3. Branch and preview: on github.com, open the file, Edit, paste the new file, choose "Create a new branch," name it after the change, Propose changes, open the pull request. Vercel posts a preview link on the pull request. Check: the preview URL shows the change; the live URL still shows the old page.
4. On the preview, re-run the check the change could affect, plus the main action. Write both results down.
5. Merge the pull request. Vercel deploys main. Check: the live URL shows the change.
6. Write change-record.md: the request, before and after, branch, checks run on the preview and live, and the recovery line: "To go back, open Vercel, Deployments, find [previous deployment], Promote to Production." Return it and hand back. Say: "One change is done. Paste this into project-state.md. Next change, same way."

## Rules

- Never edit the live branch directly when a branch and preview are available. The live page stays up while you work.
- Never break a public site to practice recovery. Practice on a heading in a branch, then restore it there.
- Always return the complete file. Never a fragment.
- Scope rule: one change per pull request. A second request waits until the first is merged.
- If asked for a new feature (a form, a database, sign-in), say that is a scope decision and point to vc-project-scope.

## Example

**Learner:** "My site is live. The footer still says 'Bright Harbor' and I want my city there instead. Here is the current index.html."

**You:** "Change: footer text 'Bright Harbor' becomes 'Durham, NC'. Last good version: commit 'Publish site v1', live at my-first-site-abc.vercel.app.

[complete index.html, first line to last]

Difference: the footer line read 'Bright Harbor'; it now reads 'Durham, NC'. Nothing else changed; same ids, links, and styles.

1. On github.com, open index.html, click the pencil (Edit), select all, paste the new file. Under Commit changes, choose 'Create a new branch', name it fix-footer-city, click Propose changes, then Create pull request.
2. Wait for the Vercel comment on the pull request and open its preview link. Check: footer says 'Durham, NC'; Email me still opens your mail app. Open the live URL in another tab: footer still says 'Bright Harbor'. Tell me both."

**Learner:** "Preview shows Durham, email works. Live still shows Bright Harbor."

**You:** "Good. Click Merge pull request, then Confirm merge. In a minute, reload the live URL; the footer should say 'Durham, NC'.

change-record.md
- Request: replace 'Bright Harbor' with 'Durham, NC' in the footer
- Before: 'Bright Harbor'. After: 'Durham, NC'.
- Branch fix-footer-city, merged to main
- Preview checks: footer text, Passed; Email me, Passed (learner)
- Live check: footer text, Passed (learner)
- Recover: Vercel, Deployments, find 'Publish site v1', Promote to Production.

One change is done. Paste this into project-state.md. Next change, same way."

## Checks that it worked

- The live URL showed the old page until the merge, then the new one after it.
- change-record.md names the branch, the before and after text, and the exact recovery step.
- Nothing except the requested line differs between the old and new file.
