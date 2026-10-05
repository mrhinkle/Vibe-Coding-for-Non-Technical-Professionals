# Start here: you and your AI guide

You do not need to know how to code. You need a laptop, a chatbot that can return runnable files, and a willingness to try what it makes. This class guides you through a simple website and then a small game. Allow six teaching hours plus breaks, or work through one checkpoint at a time on your own.

## 1. Get the course into your chatbot

This repository is currently private. Seeing it in your browser does not mean your chatbot can read it. The instructor must give you repository access or a copy of the course materials. Do not send passwords, access tokens, or recovery codes to make a link work.

Choose one route:

| What you have | What to do | Proof it worked |
| --- | --- | --- |
| A coding assistant with authorized access to this repository | Give it the prompt below and the repository URL | It identifies `AI-START.md`, both projects, and the first checkpoint |
| A chatbot with file uploads | Download [AI-COURSE-PACK.md](AI-COURSE-PACK.md), then attach that file to a new chat | It lists the course sections it actually received |
| A chatbot that only accepts text | Open [AI-START.md](AI-START.md), copy its text into your chat, then copy [setup-guide.md](setup-guide.md) and the selected skill when needed | It tells you which files it has and asks for missing content |

On GitHub, open a file and use its download control or its **Raw** view to copy the actual text. To download the whole repository, use **Code → Download ZIP**, then extract it. A ZIP contains files; not every chatbot can open archives. If an upload is rejected, attach only `AI-START.md`, the current lesson, its skill, and your project files. The [troubleshooting guide](docs/troubleshooting.md) gives the recovery steps.

**Copy this into your chatbot:**

```text
Be my patient guide for Vibe Coding for Non-Technical Professionals.
Course: https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals
Read AI-START.md first, using repository access or the materials I attached.
Tell me the files you actually read. If you cannot access the course, say so
and ask me to attach AI-COURSE-PACK.md or the current lesson. Do not guess.
I want to build the website first, then the game. Use plain language, one
checkpoint at a time. Verify whether you can create downloadable files or
edit my own project. Keep this course repository separate from my projects.
Ask whether I am starting fresh or continuing saved work. If continuing,
read my project-state.md and actual files before suggesting changes.
```

## 2. Pick your next checkpoint

| Where you are | Read | You are ready to continue when… |
| --- | --- | --- |
| Brand new | [Illustrated participant guide](guides/participant-guide.pdf), pages 2–5 | You can explain the roles of the chatbot, GitHub, and Vercel |
| Setting up | [Account and connection guide](setup-guide.md) | You can receive runnable files and find your own practice repository |
| Ready for the website | [Website walkthrough](docs/website-walkthrough.md) | Your exported page works, and the published URL is checked or the blocker recorded |
| Ready for the game | [Game walkthrough](docs/game-walkthrough.md) | A person can start, finish, and restart a round |
| Something broke | [Troubleshooting](docs/troubleshooting.md) | You have reproduced the issue and checked one focused repair |
| Want another AI's help | [Multiple-agent options](docs/multiple-agents.md) | Each helper has a clear job, input version, and permitted files |
| Pausing or changing chatbots | [Project state template](templates/project-state.md) | Your latest files, observations, and next action are saved |

Prefer a browser-readable guide? Download the course and open [participant-guide.html](guides/participant-guide.html). GitHub displays HTML source; it does not run this guide as a hosted website. The [Markdown edition](guides/participant-guide.md) is readable directly in GitHub and by chatbots.

## 3. Keep your projects separate

This repository is the textbook. Your website and game each get their own folder, GitHub repository, and Vercel project. Use `my-first-site` and `my-first-game`, or clearly distinct names you choose. Ask the assistant to name its current folder and destination before writing files.

Copy [templates/AGENTS.md](templates/AGENTS.md) into each learner project as `AGENTS.md`, replace its placeholders, and have your assistant summarize it. In ordinary chat, paste or attach the instructions. A filename alone does not install a plugin or give the AI access. Follow [the agent guide](docs/multiple-agents.md) for product-specific behavior.

## 4. Save progress before you stop

Keep the actual files and complete [project-state.md](templates/project-state.md). Your new chatbot needs those files as well as the summary; a conversation link or memory of a screenshot is insufficient. Save test results as **Passed**, **Failed**, or **Not tested**. A local preview and a published website are different versions until checked.

Use the [student workbook](handouts/student-workbook.md) for your brief, game rules, test records, releases, and final handoff. Look up unfamiliar words in the [glossary](docs/glossary.md).

## How much help is available?

The repo includes stage skills, worked examples, an illustrated field guide, a troubleshooting reference, a prompt library, and templates for saving context. The examples describe what to build; they are not pretested starter applications. Live account screens and chatbot features can change. If the route differs, report what you actually see and use the portable file route or ask the instructor for help.
