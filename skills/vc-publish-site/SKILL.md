---
name: vc-publish-site
description: Guides a non-programmer through putting a checked website on Vercel from their own GitHub repository, then verifying the live address and writing release-record.md. Use when a learner says "publish this," "put it on Vercel," "make it live," "deploy my site," or "give me the public link."
---

# Publish the checked version

You are helping a non-programmer take a version that passed its checks and put it at a public address. Your one job is a verified live URL and a short release-record.md that says what is live, from which version, and what was checked there.

## When this applies

- test-report.md shows the main action passed on the exact version to publish.
- The learner owns a GitHub repository and has a Vercel account signed in with GitHub (see vc-setup-guide).
- Not for building or fixing. That is vc-build-small.
- Not for testing. That is vc-quality-check; publish only after it.
- Not for changing a site that is already live. That is vc-maintain-site.
- Not for the game. That is vc-game-publish, in its own repository and project.

## What you need before starting

- The exact complete file(s) to publish and the version name. If the file did not arrive, ask; never publish from a description.
- test-report.md for that version. If missing, stop and point to vc-quality-check.
- The repository name (my-first-site) and the Vercel account or team. If unsure, the learner reads them off the screen.
- setup-guide.md, "Publish each project," if you can read it. If not, describe what to look for rather than exact button names.
- Never a password, API key, or token. The learner signs in on GitHub's and Vercel's own pages.

## Steps

1. Say what you received and show the publication card: repository, branch, file(s) at the repository root, version name, Vercel account, and "this is production, public to anyone with the link." The learner reads it before anything is uploaded.
2. GitHub: in the repository, Add file, Upload files, choose index.html and any supporting files (not a ZIP, not the starters folder), one-line commit message, commit. Check: the file shows at the repository root on github.com.
3. Vercel: Add New Project, import my-first-site. Framework preset: Other. Build command: override on, left empty. Output: the repository root. Press Deploy. Check: the deployment shows Ready and a URL ending in .vercel.app.
4. Live check: open the URL on a phone or in a narrow window. Re-run the main action and two more checks from test-report.md there, not on the laptop file.
5. Write release-record.md: URL, repository and commit, version name, date, the checks run at the live URL with results, known limits, and "to recover, redeploy commit [name]." Return it in full.
6. Hand back. Say: "Paste the URL and release-record.md into project-state.md. The next change goes through vc-maintain-site, on a branch, so the live page stays up while you work."

## Rules

- Never publish an untested version, or a different version than the one tested. If the file changed since the report, go back to vc-quality-check.
- Never call the first deployment a preview. It is production and public. A private repository does not make the site private.
- Never buy a plan, change account settings, or enter payment details. The class arrangement decides hosting.
- Always separate "I did this" from "you reported this." If you cannot open the URL, the learner's phone is the evidence; say so.
- If the deploy fails, take the first red line of the build log, make one focused repair, return the complete file, redeploy. If the repair touches more than one file, plan it with ../vc-plan-first/SKILL.md first. Do not widen scope.

## Example

**Learner:** "My site passed all five checks. Publish it. Repo is my-first-site, Vercel is signed in with my GitHub."

**You:** "Received: index.html (version 'site-v1-checked') and test-report.md with five of five Passed.

Publication card
- Repository: github.com/you/my-first-site, branch main
- File at root: index.html (one file, styles inside)
- Vercel account: yours, signed in with GitHub
- This is production. Anyone with the link can open it.

1. GitHub: open the repository, Add file, Upload files, drag index.html in, commit message 'Publish site v1', Commit changes. Tell me when index.html shows at the root.
2. Vercel: Add New Project, import my-first-site. Framework preset Other. Open Build and Output Settings, turn on the Build Command override and leave it empty. Press Deploy. Tell me the URL when it says Ready."

**Learner:** "Ready. It's my-first-site-abc.vercel.app."

**You:** "Open that on your phone. Press Email me; your mail app should open to your address. Find 'Jordan'; no match. Nothing scrolls sideways. Tell me the three results."

**Learner:** "All three good."

**You:** "release-record.md
- URL: https://my-first-site-abc.vercel.app
- Source: github.com/you/my-first-site, commit 'Publish site v1', version site-v1-checked
- Date: today
- Live checks (your phone): Email me opens to your address, Passed; no placeholder names, Passed; no sideways scroll, Passed. The other two checks passed on the file; Not tested live.
- Limits: no contact form; no custom domain.
- Recover: in Vercel, Deployments, find 'Publish site v1', Promote to Production.

Paste the URL and this record into project-state.md. The next change goes through vc-maintain-site, on a branch."

## Checks that it worked

- The .vercel.app URL opens on a device other than the learner's laptop and the main action works there.
- The repository on github.com shows the published file at its root with a readable commit message.
- release-record.md names the URL, the commit, and which checks were run live versus on the file.
