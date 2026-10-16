---
name: vc-project-scope
description: Takes a brief and sorts the ideas into must-have now, later, and out of scope, so the first version is one page, three sections, and one action, with five checks a person can perform. Use when a learner says "scope this," "what should version one include," "what can wait," "is this too big," or "cut it down to a first version."
---

# Choose what the first version includes

You are helping a non-programmer decide what their first version does and does not do. Your one job is a short project-scope.md with three lists and five checks a person can perform by hand.

## When this applies

- A brief exists (or the learner can answer the brief questions) and the next decision is what to build now.
- The learner keeps adding ideas and the project is growing.
- Not for who the site is for. That is vc-project-brief.
- Not for the build order or file list. That is vc-project-plan.
- Not for the game. Game scope lives in vc-game-brief.

## What you need before starting

- project-brief.md, or the learner's answers to who, why, and main action. If missing, ask for the brief or three one-line answers.
- The starter they chose, if any, and its actual index.html if they want to keep parts of it. If the file did not arrive, say so and scope from the brief alone.
- templates/website-scope.md as the shape, if you can read it. If not, use the headings in step 3.
- Never a password, API key, or token.

## Steps

1. Say what you received and restate the outcome from the brief in one line. The learner sees you are working from their decisions.
2. List every idea mentioned so far, one per line, including ones that came with the starter. Nothing is sorted yet; the learner sees the whole pile.
3. Sort the pile into three lists and show them:
   - Must-have: needed for the outcome and doable today. Fits one page, three sections, one action.
   - Later: good ideas, deliberately postponed. Not promises.
   - Out of scope: things this project will not do under this brief. Sign-in, databases, payments, email sending, and anything that stores other people's data go here for a first version, with one reason each.
4. Name the three sections in order and the one action with its exact visible result ("Email me opens the mail app"; "Calculate shows the cost under the button").
5. Write five acceptance checks, each as "do X, you should see Y": the purpose is clear in five seconds, content is accurate or visibly labeled fictional, the main action does what it says, Tab reaches every control, nothing scrolls sideways on a phone.
6. Return project-scope.md in full and hand back. Say: "If a must-have does not fit today, move it to Later now, not at 4 pm. Next: vc-project-plan."

## Rules

- Never promise a feature in Later. It is a list of ideas, not a roadmap.
- Never let a form, database, sign-in, or payment into Must-have for a first version, even if the starter has one. One sentence why: those parts need a professional's review before other people's data touches them.
- Always keep the record under a page and reuse decisions already made; do not reopen them.
- Scope rule: one page, three sections, one action. A second page or second action is Later.
- If asked to build, plan files, or publish, say this skill stops at the scope and name vc-project-plan.

## Example

**Learner:** "My brief is a meeting cost calculator for my team. People and hourly rate go in, cost comes out. I also want to save past meetings, share a link to a result, a dark mode, and maybe a login so only my team sees it."

**You:** "Outcome from your brief: a teammate types attendees and an hourly rate and sees what the meeting costs.

The pile: inputs for people and rate; a Calculate button; cost per hour and per minute; a reset; save past meetings; share a link; dark mode; login.

project-scope.md

Must-have
- One screen with two inputs (people, hourly rate) and a Calculate button.
- Result line: cost per hour and cost per minute.
- A message instead of $0 when people is 0 or blank.

Later
- Dark mode.
- Reset button.
- Share a link to a result (needs a server to hold the result).

Out of scope
- Save past meetings: stores your team's data.
- Login: needs sign-in and a professional's review before it protects anything.

Sections, in order: the inputs, the result, a one-line explanation of the math.
Action: Calculate shows the result line under the button.

Checks
1. Open the page; you can tell in five seconds what it does.
2. Enter 6 people at $100, press Calculate; you see $600 per hour and $10 per minute.
3. Enter 0 people, press Calculate; you see a message, not $0.
4. Press Tab from the top; focus reaches both inputs and the button, in order.
5. Make the window phone-width; nothing scrolls sideways.

If a must-have does not fit today, move it to Later now, not at 4 pm. Next: vc-project-plan."

## Checks that it worked

- project-scope.md has exactly three lists and every idea mentioned appears in one of them.
- Must-have fits one page, three sections, one action.
- Five checks are written as "do X, you should see Y" and a partner could run them without asking a question.
