# Track B: build the thing you brought

> **For an AI receiving only this lesson:** The learner is building their own small project in one afternoon. Hold the scope to one screen, one form or input, one result. Refuse politely to add sign-in, databases, payments, or integrations in version 1; record them as "later." Return a plan before code, complete files when asked, and one change per request.

The workshop invitation said to bring a problem you have been meaning to solve: a tool for your team, a personal dashboard, a prototype you want to pitch. If you brought one, you can spend the afternoon on it instead of the game. Same loop, same gates, same deadline: a live URL by 4:35 and a pull request you reviewed yourself.

Choose Track B if you can say the idea in one sentence and it fits the scope rule below. If it doesn't fit yet, that's not a knock on the idea; most good ideas are too big for one afternoon. Do the game today, because it teaches the same loop, and come back to your idea next week with the [personal website](personal-website-walkthrough.md) and [v0 route](v0-route.md) pages as your guide. You'll be surprised how much of it you can do on your own by then.

## The scope rule: one screen, one input, one result

Version 1 is a single page where someone types or picks something and sees a useful result. Examples that fit:

- A meeting-cost calculator: attendees and hourly rate in, cost per minute out.
- A "which form do I need" chooser for your team: three questions in, the right link out.
- A checklist for an onboarding, inspection, or event, with progress saved in the browser.
- A one-page dashboard that shows numbers you paste in from a spreadsheet.
- A pitch page for the prototype, with a signup button that goes to a mailto link.

What waits for later, no matter how reasonable it sounds: sign-in, a database, payments, email sending, anything that calls another company's system, anything that stores other people's data. Write those in `project-state.md` under "later." Half of them you will not need.

## 12:45 to 1:40: brief and plan (with the game track's brief block)

Use [vc-project-brief](../skills/vc-project-brief/SKILL.md) and [vc-project-scope](../skills/vc-project-scope/SKILL.md). Fill the [website scope template](../templates/website-scope.md). Then draw one wireframe: boxes and labels, the input at the top, the result below, one button. Paste both into your chatbot:

> Here is my brief, scope, and a wireframe. Version 1 is one screen, one input, one result, no sign-in, no database, no external services. Tell me the plan: which files you will create, what each does, and three checks I can perform by hand to know it works. Do not build yet.

Read the plan. Cut anything that is not on the wireframe.

Checkpoint: a brief with three observable checks and a plan with a file list you understand.

## 1:40 to 2:45: build increment 1

> Build the plan as described. Keep it to the files you listed. Plain, readable code with short comments. Fits a phone. Return the complete files.

On v0, this is one generation; press Deploy, then push to GitHub (see the [v0 route](v0-route.md)). On the portable route, save the file, open it, then create the repository and import it into Vercel as in the [setup guide](../setup-guide.md).

Checkpoint: the three checks from your brief pass on the live URL, not just on your laptop.

## 3:00 to 4:10: increment 2 through a pull request

Pick the one improvement that matters most to the person who would use this. Make it on a branch and open a pull request, as in [reading what the agent wrote](agent-loop-and-pull-requests.md). Review your own diff with the four questions. Merge. Watch the deploy.

Then find a classmate who has never seen it and ask them to use it for two minutes without help. Write down the first thing that confused them. Fix that one thing, through another PR.

Checkpoint: a merged pull request and one change made because of a real person's confusion.

## 4:10 to 4:35: publish for real

Confirm the live URL on a phone. Add a `README.md` to the repository that says what the tool is, who it is for, and how to use it, in five lines. Record everything in `project-state.md`, including the "later" list.

## Taking it to work on Tuesday

- Put the repository under your organization's GitHub if it will be used by colleagues; your personal account is fine for a prototype.
- Before anyone else's data touches it, you need the things you deferred done properly: sign-in, storage, and a review by someone whose job is security. That is the "when to call a professional" line, and it is not a failure; it is the plan.
- The next thing to automate is whatever you did by hand twice today.

## If it stalls

Scope is almost always the problem. Cut to the smallest version that still produces a result, ship that, and record the rest. A live one-input tool beats a half-built dashboard. If it is 3:30 and nothing is live, switch to the [game checkpoint 3](../examples/alien-tic-tac-toe/checkpoint-3-complete/index.html), publish it, and come back to your idea with the materials after class. More in [stuck.md](stuck.md).
