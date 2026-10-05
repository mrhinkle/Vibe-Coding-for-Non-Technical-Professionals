# Account and connection guide for the vibe coding class

Use this guide to prepare a practice repository, an AI coding workspace, and a Vercel account. The default route uses browser tools. Use your favorite chatbot through the portable route below, or use a supported Claude Code or Codex coding workspace. Product documentation was checked on October 5, 2026; instructors should rehearse the exact route before class.

## Before class

Start with the [pre-class laptop preparation guide](PRE-CLASS-PREP.md). It provides a timed checklist, Mac/Windows steps, a local readiness exercise, and a record to bring to class. This document supplies the detailed account and connection instructions referenced there.

Bring a laptop, a browser, access to your account email, and a way to complete multifactor sign-in. Create the required accounts and confirm that your chosen assistant can provide runnable files before the teaching day. The instructor will demonstrate the setup and help verify it in class.

Use a personal practice repository and fictional information. Ask your organization's administrator about restrictions if you must use a managed work account. Students enter their own passwords and authentication codes directly into the provider's sign-in screens.

Account creation and plan selection are the learner's decisions. Do not enter payment details or enable a paid plan simply because a tutorial suggests it. Confirm the course's account and hosting arrangement with the instructor beforehand.

## Create your GitHub account and repository

1. Open [GitHub signup](https://github.com/signup), create a personal account, and verify your email. [Account instructions](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github)
2. In GitHub, open your profile menu, then Settings, then Password and authentication. Enable two-factor authentication and store the recovery codes securely. [2FA instructions](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
3. Choose **+ → New repository**. Select yourself as owner and name it `my-first-site`. Choose visibility deliberately and initialize it with a README. This provides a first saved file for the class. [Repository instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
4. Copy the repository URL into your class notes. This is your project. Mark's course repository is a source of teaching materials, not the destination for student changes.

Success check: open your repository and read the README. Confirm that its owner is your account.

## Create and connect your Vercel account

1. Open [Vercel](https://vercel.com/signup) and use the GitHub sign-up path if appropriate. Complete the provider's authorization screens. [Account guide](https://vercel.com/docs/accounts)
2. Use the hosting arrangement agreed for the class. Vercel Hobby is limited to noncommercial personal use; commercial use requires an eligible paid plan. A real consulting site advertising services should not be presented as a free Hobby deployment. [Fair use guidelines](https://vercel.com/docs/limits/fair-use-guidelines)
3. Authorize the GitHub integration for the practice repository when requested. Confirm that the repository appears under the expected GitHub account. For a personal repository, Vercel requires the importing user to be its owner. [GitHub integration permissions](https://vercel.com/docs/git/vercel-for-github)
4. Stop before importing and deploying the website. The class does that after building and checking the files.

Success check: you can sign in, identify the intended Vercel account or team, and locate your GitHub repository in the import flow without deploying it.

## Portable route with your favorite chatbot

This route lets an ordinary chatbot generate the files while you manage GitHub and Vercel in the browser. No direct repository connection or native skill installation is required for this route.

1. Open your preferred chatbot and paste or attach the stage's SKILL.md. Include the brief and request complete runnable files, not a screenshot or a description of a site.
2. For project 1, request a single `index.html` with styles included. If the assistant offers a download, save it. If it returns code, save that code as `index.html` in a plain-text editor, with no Markdown fences and no added `.txt` extension. The instructor should provide a short demonstration. Keep the website and game in separate folders.
3. If you receive a ZIP, extract it. Open the actual `index.html` in your browser. Keep any supplied styles, scripts, and assets at their referenced paths. Ask for corrections and replace the correct files before retesting.
4. In your personal GitHub repository, choose **Add file → Upload files**, select the site files rather than the ZIP, enter a descriptive commit message, and review the branch or proposed-change options. Complete the save intentionally. [GitHub upload instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
5. Use the Vercel import instructions below. After the first deployment, a production-branch update may deploy immediately; prepare later changes on a branch and inspect the preview before merging.

For project 2, repeat the process in `my-first-game` and a separate Vercel project. Do not overwrite the website repository. A game's own preview inside a chatbot is useful, but students must receive portable files and verify the exported result.

## Connected route with Claude Code

The coding workspace and the ordinary chat GitHub integration have different roles. In Claude chat, **+ → Add from GitHub** adds selected repository content to the conversation; a Project can add GitHub files to its knowledge. That is useful for understanding code, but it is not evidence of a working code-editing and publishing path. [Claude GitHub integration](https://support.claude.com/en/articles/10167454-use-the-github-integration)

For implementation:

1. Open [Claude Code](https://claude.ai/code) and sign in. Cloud access currently requires Pro, Max, Team, or an eligible Enterprise seat; organization controls can also apply.
2. Follow **Sign in with GitHub**. For private repositories, install the Claude GitHub App and include the practice repository in its access.
3. Select your repository and default environment. Pro and Max onboarding creates the environment automatically; other accounts may require setup.
4. Start in **Plan** mode. Ask Claude to read the README and identify the repository before proposing changes.
5. When building, approve the intended plan, inspect the changed files and results, and use **Create PR** when ready to propose the saved change. Review the pull request in GitHub before merging.

These steps follow the [current Claude Code cloud quickstart](https://code.claude.com/docs/en/web-quickstart). This sign-in route does not require creating an Anthropic API key as a class prerequisite.

Optional Vercel connection: in Claude, open **Settings → Connectors → Add custom connector**, name it Vercel, enter `https://mcp.vercel.com`, and authenticate. Vercel documents this for eligible Claude plans. The dashboard remains sufficient for the core lesson. [Official Vercel MCP instructions](https://vercel.com/docs/agent-resources/vercel-mcp)

## Connected route with ChatGPT and Codex

For service connections, open **Plugins**, find GitHub or Vercel when available to your account, inspect the plugin, install it, and complete the connection prompts. Start a new chat afterward. Availability and actions depend on the surface, plugin, and workspace policy. [Official plugin instructions](https://learn.chatgpt.com/docs/plugins)

For a cloud coding workspace, the current documented path is:

1. Sign in with your ChatGPT account. In a new task, choose **Work in → Cloud → Select environment → Create environment**.
2. Choose the practice GitHub repository and connect GitHub if prompted.
3. Select **Get started**, let Codex inspect the repository, and resolve any setup questions.
4. Review and save the setup, then choose **Publish**. This publishes the reusable coding environment; it does not deploy the website to Vercel.
5. After the environment is published, start a new task. Ask Codex to identify the repository and read the README, then use the class brief to begin work. Inspect changes and checks before committing or opening a pull request.

Use the [current Cloud environments guide](https://learn.chatgpt.com/docs/environments/cloud-environments). It currently lists browser and computer use as unavailable in cloud environments, so students should inspect rendered pages in their own browser. Verify that the learner's account offers this path before class. Avoid teaching the legacy Code Review environment flow as the default new-project setup.

A plugin connection, code-editing workspace, and deployment permission are separate capabilities. Confirm each one with the learner's actual account. Do not assume every GitHub connector is read-only or that every connected chatbot can edit and run a project.

## Choose the route by available capabilities

The portable route needs complete runnable file output; the connected route additionally needs verified repository access. Use the same brief, skills, and checks on either route. If a chatbot cannot produce usable files, continue planning with it and use an instructor checkpoint or a supported assistant for the build. Pasting a skill does not grant missing tools.

## Capability check

For the connected route, use this prompt after connection:

> Identify the GitHub account, repository, and branch for this class project. Read the README. Tell me which of these you can actually do here: edit project files, run checks, create a branch or pull request, and inspect Vercel deployments. Distinguish what you verified from what you have not tried. Do not change the repository or deploy anything yet.

Then ask the assistant to prepare a one-sentence README improvement, inspect its proposed difference, and deliberately save that change using the supported workflow. If an operation fails, record the exact failure and correct the specific access issue.

## Publish each project

1. Finish the checked site and save the intended files to the learner's GitHub repository. Keep `index.html` and any supporting styles, scripts, or assets at the repository root for the recommended plain static project.
2. In Vercel, choose **New Project**, import the repository, and inspect the framework and root settings. For plain static files, use **Other**, enable the Build Command override and leave it empty, and use the repository root as the output location; verify these settings during the instructor rehearsal. For a framework project, use its documented build and output settings. [Git deployment guide](https://vercel.com/docs/git), [build configuration](https://vercel.com/docs/deployments/configure-a-build)
3. Explain and approve the intended publication, then select **Deploy**. Open the resulting URL and repeat the key functional checks.
4. For the next change, use a separate branch and pull request, inspect its preview, then merge when ready to release. The first Vercel deployment is production; preview behavior applies after that. A production-branch update normally triggers another production deployment. [Deployment environments](https://vercel.com/docs/deployments/environments)

Do not infer a private website from a private repository or a hard-to-guess URL. Check the actual deployment access behavior and use content suitable for that audience.

## Recover from common setup failures

| Symptom | Next check | Class fallback |
| --- | --- | --- |
| GitHub repository is missing | Account identity, selected repository permission, ownership, and organization approval | Use the personal practice repository or work with a partner |
| Coding surface is unavailable | Account access, seat, and workspace policy | Continue the brief and review exercise with the instructor's example |
| Vercel connection is unavailable in chat | Plugin or connector availability and authentication | Use the Vercel dashboard |
| Deployment fails | Read the actual error and verify root and build settings | Ask for one focused repair; retain the working local files |
| Page cannot be rendered inside the assistant | Check the surface's browser capability | Export the static files and inspect them in your own browser |
| The class is losing time to setup | Keep a record of the blocker | Switch to a tested checkpoint; return to the account issue after class |

The documentation was researched for this guide. No student account flow, full classroom rehearsal, or live deployment was executed as part of preparing it.
