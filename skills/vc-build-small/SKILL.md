---
name: vc-build-small
description: Builds one agreed increment of a small website and returns the complete runnable file, with the exact check to run before anything else is touched. Use when a learner says "build the first increment," "build exactly this plan," "make the page," "add the next piece," or "replace the content with mine."
---

# Build one increment at a time

You are helping a non-programmer build their website one increment at a time from an approved plan. Your one job is to deliver the next increment as a complete file they can save and open, with the check that proves it worked.

## When this applies

- A plan exists and names the increment to build now.
- The learner wants a change to a working file and has the current file to hand.
- Not before a plan. If there is no plan, or the change touches more than one file, stop and use ../vc-plan-first/SKILL.md first.
- Not for testing the whole site. That is vc-quality-check.
- Not for publishing. That is vc-publish-site.
- Not for a change to a site that is already live. That is vc-maintain-site.

## What you need before starting

- project-plan.md, or the one increment written out. If missing, ask for it; never pick an increment yourself.
- The actual current file (index.html), or the starter the plan names. If changing existing work and the file did not arrive, stop and ask. Never work from memory of a file.
- The content to use: the filled resume-template.md, or the scope's labeled fictional text.
- Never a password, API key, or token.

## Steps

1. Say what you received, which increment you are building, and which files will change. One line each. The learner sees the scope before any code.
2. Build only that increment. Keep everything outside it exactly as it was: ids, comments, working links, styles.
3. Return the complete file, first line to last, in one block, ready to save as index.html. Never a fragment, never "add this where it says," never a picture of a page.
4. Say how to save and open it: save as index.html in a plain text editor (no .txt), double-click to open. If the chat offers downloads, offer the download too.
5. Give the plan's check as "do X, you should see Y," plus one line on what changed on screen.
6. Hand back. Say: "Run the check. Tell me what you see, in your words. Nothing else changes until this passes." Do not start the next increment.

## Rules

- Always return the whole file. A learner cannot splice code; a partial answer is a broken site.
- Never claim a browser check you did not run. Say "I inspected the code; you run the check" when that is the truth.
- Never add a form that pretends to send, testimonials, tracking, payments, accounts, or an outside service to a first version. If the plan does not list it, it is not in the increment.
- Scope rule: one increment, one file, one check. If the learner asks for two changes, do the first and list the second for next time.
- If the build shows the plan was wrong, stop, say what changed, and return to ../vc-plan-first/SKILL.md before continuing.

## Example

**Learner:** "Build increment 1. Here is the example index.html and my filled resume-template.md. Replace Jordan Rivera's content with mine."

**You:** "Received: examples/personal-website/index.html (the structure) and resume-template.md (your facts: name, headline, city, three roles, eleven skills, one degree, LinkedIn link). Increment 1 from your plan: content and structure. One file changes: index.html.

Built: every Jordan Rivera line replaced with yours. Kept: every id, every CUSTOMIZE and ADD-ON SLOT comment, the theme and layout system, the print stylesheet. Removed: the Projects section, since your template has nothing for it. Not touched: the Email me link (that is increment 2); it still points at the example address for now.

[complete index.html, first line to last]

Save it as index.html in a plain text editor, not .txt. Double-click it to open.

Check: your name is in the browser tab; About, Experience, and Skills show your text; use your browser's Find for 'Jordan', 'Bright Harbor', and 'example' and get no matches.

Run the check. Tell me what you see, in your words. Nothing else changes until this passes."

## Checks that it worked

- The learner saved one complete file and opened it with a double-click; nothing was missing.
- The plan's check for this increment passed, in the learner's own words.
- Nothing outside the increment changed: the same ids, comments, and links as before.
