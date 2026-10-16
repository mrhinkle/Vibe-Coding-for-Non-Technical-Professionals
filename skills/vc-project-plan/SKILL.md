---
name: vc-project-plan
description: Turns an agreed brief and scope into a short project-plan.md with the visitor's path through the page, the page outline, and three build increments that each end in something you can open and check. Use when a learner says "plan the build," "what order do we build in," "what are the increments," "how will we check each step," or "make the plan from my scope."
---

# Plan how to build and check the agreed version

You are helping a non-programmer turn a scope into a build order. Your one job is project-plan.md: the visitor's path, the page outline, the files, and three increments with a check after each. No code.

## When this applies

- A brief and scope exist (or the same decisions are clear in the conversation) and the learner is about to start building.
- The learner has a starter or a current index.html and wants to know what changes, in what order.
- Not for deciding what is in the first version. That is vc-project-scope.
- Not for the building itself. That is vc-build-small.
- For the quick "stop and plan before any multi-file change" habit, see ../vc-plan-first/SKILL.md. This skill writes the fuller plan the class keeps.

## What you need before starting

- project-brief.md and project-scope.md, or the decisions they hold. If missing, ask for them, or for the three sections and the one action.
- The starter or current index.html, if there is one. If it did not arrive, plan against the scope and say so.
- templates/website-plan.md as the shape, if you can read it.
- Never a password, API key, or token.

## Steps

1. Say what you received. Restate the outcome, the three sections, and the one action in three lines. The learner sees the plan is built on their decisions.
2. Write the visitor's path in three lines: what they see first, what they read, what they do.
3. Write the page outline: heading, the three sections in order, the action, footer. One line per part, with where the content comes from (the resume, the starter, labeled fiction).
4. List the files, one per line, with one line on what each does. For the class, that is usually one index.html with styles and script inside. Say which files change and which are new.
5. Write three increments, each ending in something the learner can open and see:
   1. Content and structure: heading, sections, real or labeled content. Check: open the file, read every section, nothing shows the starter's placeholder names.
   2. Main action and navigation: the agreed link or button and the nav. Check: click it, then use Tab and Enter; the stated result appears both ways.
   3. Phone layout and finish: readable at phone width, then re-run the scope's five checks. Check: nothing scrolls sideways; five of five pass.
6. List what is still missing (an image, an email address, a decision) in one short list. Never a secret.
7. Return project-plan.md in full and hand back. Say: "Read it like a contractor's quote. Cut anything you did not ask for. Then we build increment 1 with vc-build-small."

## Rules

- No code in a plan. The learner must be able to read all of it.
- Never add a framework, backend, database, or service the scope did not agree to. A plan with more than six files or more than one page is too big; say so and shrink it.
- Always plan around existing working files. Never plan to rebuild what already works.
- Keep the record short; brief, scope, and plan together fit in 10 to 15 minutes of class.
- If asked to build, commit, or deploy, say this skill ends at the plan and name vc-build-small.

## Example

**Learner:** "Brief and scope attached: my personal site from my resume, three sections, Email me button, starting from the tested example index.html. Plan it."

**You:** "Received: project-brief.md, project-scope.md, your filled resume-template.md, and examples/personal-website/index.html.
Outcome: a recruiter reads your three recent roles and emails you in under a minute.
Sections: About, Experience, Skills. Action: Email me opens the mail app.

Visitor's path: sees your name, headline, and city; reads About and the three roles; presses Email me.

Outline: header with name and nav; hero with name, headline, city, Email me; About (three paragraphs from your template); Experience (three roles, two bullets each); Skills (your eleven); footer with the LinkedIn link. Projects section removed; the template has nothing for it.

Files: index.html, changed. One file, styles and script inside, theme and layout system kept.

Increments
1. Content: replace every Jordan Rivera line with yours; keep every id and CUSTOMIZE comment. Check: open the file; your name in the tab, three roles visible, Find shows no 'Jordan' or 'Bright Harbor'.
2. Action and nav: Email me points to your address; nav links jump to each section. Check: click Email me, your mail app opens addressed to you; Tab then Enter on each nav link lands on the right section.
3. Phone and finish: check at phone width; then run the five scope checks. Check: no sideways scroll; five of five pass.

Still missing: a headshot (optional; the layout works without it); which email address to use.

Read it like a contractor's quote. Cut anything you did not ask for. Then we build increment 1 with vc-build-small."

## Checks that it worked

- project-plan.md names every file that will change and what each does.
- Each of the three increments ends with a check written as "do X, you should see Y."
- The plan adds nothing that is not in project-scope.md.
