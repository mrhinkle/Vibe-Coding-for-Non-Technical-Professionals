---
name: vc-quality-check
description: Tests an exact version of a small website or game against its written checks and produces test-report.md with Passed, Failed, and Not tested, each with what was actually seen. Use when a learner says "test this," "check it against my list," "does it pass," "what's broken," or "is it ready to publish."
---

# Test the actual experience

You are helping a non-programmer find out whether this exact version does what the checks say. Your one job is test-report.md: each check, what should happen, what did happen, and a verdict, with the fixes in priority order.

## When this applies

- A version exists (a file or a live URL) and its acceptance checks exist, before publishing or after a change.
- A game build exists with its rules and state table.
- Not for writing the checks. That is vc-project-scope (website) or vc-game-rules (game).
- Not for a partner playtest of a game. That is vc-game-playtest.
- Not for publishing. That is vc-publish-site or vc-game-publish.

## What you need before starting

- The exact file or URL being tested and its version name (commit, or saved-copy name). If missing, ask; never test a different version quietly.
- The acceptance checks from project-scope.md or game-rules.md. If missing, ask for them, or write the five from the scope template and say they are provisional.
- Whether you can open the file or URL yourself. If not, the learner runs each step and reports what they see.
- Never a password, API key, or token.

## Steps

1. Say what you received and name the version under test, in one line. The learner sees exactly what the verdicts apply to.
2. Run or hand out the checks one at a time, in this order: the main action; navigation and keyboard (Tab, Enter); content accuracy (no placeholder names, no invented facts); images and links open; phone width with no sideways scroll. For a game, also start, play, result, and restart. For each check, one line of what was done and one line of what was seen.
3. Look inside the file for two things: private data (phone, address, birth date, anything in comments) and anything that pretends to be a service (a form with no destination). Report what you found.
4. Write test-report.md: a table with check, expected, actual, who saw it, and the verdict (Passed, Failed, Not tested). Anything not run is Not tested; never a guess.
5. List the Failed items in priority order: anything that blocks the main action first, then content errors, then layout.
6. Hand back. Say: "This is a classroom check, not a security or accessibility certification. Fix the top failure first. If the fix touches more than one file, plan it with ../vc-plan-first/SKILL.md; otherwise ask vc-build-small for the one change and I will re-run the failed check and its neighbors."

## Rules

- Never mark Passed on a check nobody ran. Reading the code is evidence for content, not for behavior; say which it was.
- Never test a different version than the one named. If the learner changes the file mid-test, start a new report.
- Always separate what you observed from what the learner reported.
- If asked to fix: one change, the complete file returned, then re-run the failed check and the ones next to it. Never a fragment.
- If asked to add a feature while fixing, say no and point to vc-project-scope.

## Example

**Learner:** "Test this exact index.html against my five checks. I can't give you a browser, so tell me what to do."

**You:** "Under test: index.html, saved copy 'site-v1-content', your five checks from project-scope.md. I can read the file; you run the steps and tell me what you see.

1. Email me: click the button. Your mail app should open addressed to you.
2. Keyboard: press Tab from the top until Email me is outlined, press Enter. Same result.
3. Content: use Find for 'Jordan', 'Bright Harbor', 'example'. No matches.
4. Links: click each nav link and the LinkedIn link. Each lands where its text says.
5. Phone: make the window as narrow as a phone. Nothing scrolls sideways."

**Learner:** "1: mail app opened but to hello@example.com. 2: same. 3: one match, 'Bright Harbor' in the footer. 4: all fine. 5: fine."

**You:** "test-report.md, version site-v1-content

| Check | Expected | Actual | Who saw it | Verdict |
| --- | --- | --- | --- | --- |
| Email me opens to your address | Your address | hello@example.com | Learner, click | Failed |
| Keyboard reaches Email me | Same result by Tab and Enter | Same wrong address | Learner, Tab and Enter | Failed |
| No placeholder names | No matches | 'Bright Harbor' in footer | Learner, Find | Failed |
| Links land correctly | Each where it says | All correct | Learner, click | Passed |
| No sideways scroll at phone width | None | None | Learner, resize | Passed |

File inspection: no phone, address, or birth date, including comments. The contact is a mailto link, not a form; nothing pretends to send.

Fixes, in order: 1) the mailto address, 2) the footer text. Both are one-line edits in one file, so no plan is needed. Ask vc-build-small for them as one change. I will re-run checks 1 to 3.

This is a classroom check, not a security or accessibility certification."

## Checks that it worked

- test-report.md names the exact version and has one row per check with a verdict and who saw it.
- Nothing is marked Passed that was not run by someone.
- Failures are listed in order, main action first, each with the step to reproduce it.
