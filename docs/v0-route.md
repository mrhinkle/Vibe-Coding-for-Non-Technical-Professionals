# The v0 route: describe, v0 builds, GitHub records, Vercel ships

> **For an AI receiving only this lesson:** This describes the v0 → GitHub → Vercel loop in general terms. Product menus change; tell the learner what to look for rather than claiming exact button names. Never ask for or accept a password, token, or secret key. Return complete files when the learner is on the portable route instead.

The workshop listing names three accounts and one loop: **GitHub** is the system of record, **v0** writes the code, **Vercel** ships it to a live URL on every push. This page is the v0 version of the loop. The [setup guide](../setup-guide.md) covers the portable route, where any chatbot returns files and you upload them to GitHub yourself. Both routes end in the same place: a repository you own and a live URL.

Pick v0 if you want the fastest path from a sentence to a live page and you are comfortable with a React app you did not write line by line. Pick the portable route if you want one HTML file you can read top to bottom, or if the tested [examples](../examples/) are the starting point you want. Switching later is allowed; the GitHub repository is what persists.

## What v0 is, in one paragraph

v0 is Vercel's generative builder at v0.app. You describe a page or app in plain English, it writes a React (Next.js) project, shows you a live preview, and keeps a version for every change. It comes with a free Vercel account; sign in with GitHub so all three accounts are the same identity. The free tier has a monthly credit allowance; a day of class fits, but do not burn it on redesigns before the first version works.

## Set up the loop (10 minutes, during the setup block)

1. **GitHub first.** You already have an account from prep. If not, create one now at github.com; you will use the same email for everything today.
2. **Vercel, signed in with GitHub.** At vercel.com choose "Continue with GitHub." Authorize it. You now have a Vercel account linked to your GitHub identity.
3. **v0, signed in with Vercel.** At v0.app, sign in; it uses your Vercel account. Open a new chat.
4. **Connect v0 to GitHub.** Look in the project or chat menu for the GitHub option (it reads something like "Connect to GitHub," "Push to GitHub," or a GitHub icon). The first time, GitHub asks you to authorize v0 and choose which repositories it may touch. Choose "only select repositories" and let it create a new one named `my-first-site`. If the option is not there yet, come back to it after your first generation; some accounts only show it once a project exists.

Checkpoint: you can see an empty or starter repository named `my-first-site` at github.com/your-name, and Vercel's dashboard lists a project with the same name.

## Project 1 on v0: the personal website

Do steps 1 to 3 of the [personal website walkthrough](personal-website-walkthrough.md) first: export LinkedIn, privacy pass, fill `resume-template.md` with your chatbot. v0 needs content, not a PDF.

**First generation.** Attach or paste your completed `resume-template.md` and, as a style reference, the tested [`examples/personal-website/index.html`](../examples/personal-website/index.html). Then:

> Build a one-page personal website from the attached resume-template.md. Use only the facts in it; invent nothing and leave blank fields out. Match the structure and restraint of the attached index.html: header with name and nav, hero with name, headline, city, and three link buttons, About, Experience, Skills, Education, optional Projects, Contact with a mailto link, footer. Use the "slate" palette from the reference as CSS variables so I can change colors later. No contact form yet. No images. Fits a phone. Readable code with short comments.

Look at the preview. Check your name, your three roles, every link. Fix facts before you fix looks.

**Second generation, one change at a time.** Colors, then layout, then nothing else until it is live:

> Change only the colors: background #F6F3EE, text #1C2330, accent #0B6E4F. Change nothing else.

**Deploy.** Press v0's Deploy button (or "Publish"). It deploys through your Vercel account and gives you a URL ending in `.vercel.app`. Open it on your phone.

**Push to GitHub.** If you connected v0 to `my-first-site` during setup, your project is already there; if v0 offers to connect or push at any point, accept it then. Otherwise use the GitHub option now to push the project to `my-first-site`. Open the repository on github.com. You should see the files v0 wrote and a commit for them. That commit is the first line of your audit trail. From now on, every v0 version you push becomes a commit you can read, compare, and roll back. See [reading what the agent wrote](agent-loop-and-pull-requests.md).

Checkpoint: a live URL on a classmate's phone, and a GitHub repository with at least one commit you can open and read.

## Project 2 on v0: the game

The game rules in [alien-tic-tac-toe.md](alien-tic-tac-toe.md) and the theme you chose in [tic-tac-toe-variants.md](tic-tac-toe-variants.md) are the same on every route. On v0, give it the rules file and your theme table, then build the same three increments as separate generations, and push each one to GitHub as its own commit or pull request:

> Read the attached alien-tic-tac-toe.md. Build only increment 1, the board screen, as described in the "Build increment 1" prompt in tic-tac-toe-variants.md, with my theme: I am [🐱], the opponent is [🐶]. Two temporary buttons stand in for the battle. Do not build the battle yet.

Then increment 2 (the battle, standalone), then increment 3 (connect them). After each one, check the behaviors listed under that increment in the variants page. The [tested checkpoints](../examples/alien-tic-tac-toe/) are single HTML files; if you fall behind on v0, download the checkpoint for your stage, create a repository for it on GitHub through the browser, and import it into Vercel. That is the portable route, and it takes ten minutes.

Create the game as a **new v0 project** connected to a **new repository** named `my-first-game`. Keep it separate from the website.

## When v0 goes off the rails

| What you see | Do this |
| --- | --- |
| It rebuilt the whole page when you asked for one change | Restore the previous version from v0's version history, then repeat the request ending with "Change nothing else." |
| It invented a job, a quote, or a testimonial | "Remove everything not in resume-template.md. Use only my facts." Then check again. |
| It added a form, a database, or sign-in you did not ask for | "Remove the [form]. Version 1 has no form, no database, no sign-in." Scope is yours to hold. |
| The preview works but the deploy fails | Open the Vercel deployment's build log; paste the first red error line back into v0 and ask for the smallest fix. |
| The GitHub option is missing or asks for broad permissions | Grant access to only the one repository. If it still will not connect, download the code as a ZIP and upload it through GitHub's "Add file → Upload files" instead. Same result. |
| Out of credits | Switch to the portable route with any chatbot and the examples. Nothing you built is lost; it is in GitHub. |

More recovery paths in [stuck.md](stuck.md) and [troubleshooting.md](troubleshooting.md).

## What to keep in the repository

The code, a `README.md` that says what the project is and how to run it, and your `project-state.md`. Never a password, API key, or token. If v0 or any agent asks you to paste one into the code, the answer is no; secrets go in Vercel's environment variable settings, and that is a later lesson.

## For the instructor

Menu labels above were written from general knowledge of v0 in 2026 and must be confirmed on a live account in [preflight](../instructor/preflight.md) before class: the GitHub connect flow, the Deploy button, version restore, and the free-tier credit limit. Demonstrate the loop once on the projector before students try it.
