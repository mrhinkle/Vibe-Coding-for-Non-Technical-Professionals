# Plain language glossary

Use this page when the chatbot, GitHub, or Vercel introduces an unfamiliar word. You do not need to memorize the terms before building. Return to [Start here](../START-HERE.md), the [website walkthrough](website-walkthrough.md), or the [game walkthrough](game-walkthrough.md) when you have enough context to take the next step.

| Term | Meaning in this class | Example |
| --- | --- | --- |
| Acceptance check | A specific action and expected result that tells you whether the work meets the brief. | Activating Play again returns the quiz to question 1 with zero points. |
| AI chatbot | The assistant you ask to explain, generate, or change your project. Its available tools vary. | A chatbot may provide a file for you to download without being able to open GitHub. |
| Agent | An assistant that can take a sequence of actions using tools. It still needs a bounded task and appropriate access. | A coding agent edits a file and runs an available check. |
| API | A defined way for software to request something from other software. | A weather website might request a forecast from a separate service. Neither core project needs this. |
| Asset | A supporting file used by the page or game. | A photograph, icon, sound, or font file. |
| Authentication | Proving who you are to a service. | Signing in and completing a verification-code prompt yourself. |
| Authorization | Permission for a particular action or resource. | A GitHub connection may have access to one repository but not another. |
| Backend | Software running on a server to handle shared data or operations. | A real booking system would usually need more than a static page. |
| Branch | A separate line of saved project changes. | A branch lets you propose a new heading without immediately changing the production version. |
| Browser | The application that displays and runs websites. | Safari, Chrome, Edge, or Firefox. |
| Build | A process that transforms source files into files ready to serve, when a project requires it. | Framework projects often have a build step. The class's plain HTML projects do not. |
| Cache | A stored copy used to load something again more quickly. | A browser may retain an older image. First check the URL and version before blaming the cache. |
| Checkpoint | A version you can identify and return to. | A saved folder copy or Git commit after the button has been tested. |
| Coding workspace | An environment where an assistant or person can edit project files and possibly run them. | A connected coding task can have different abilities from ordinary chat. |
| Commit | A named saved change in Git history. | “Add checked reading club practice page.” |
| Commit ID or SHA | The identifier for a saved Git commit. | Record it with a test so you know which version was checked. |
| Connector or plugin | An integration that gives an assistant access to supported outside tools or information. | A GitHub plugin. Its presence does not prove that file editing or deployment is available. |
| Console error | A technical message from the browser about something that failed. | A script may name an absent file. Share the relevant message, not a guess about its cause. |
| Context | The information available to the chatbot in its current conversation or workspace. | The brief, current file, observed failure, and rules. A new chat may not have any of these. |
| CSS | Instructions controlling the page's appearance. | Colors, type size, spacing, and layout. |
| Database | A system for storing and retrieving structured data. | Shared customer records. Neither classroom project requires a database. |
| Deploy | Send a version of the project to a hosting service so it can run there. | Vercel creates a deployment from the intended GitHub version. |
| Deployment URL | The web address for a deployed version. | Open the URL shown by the completed deployment when testing that version. |
| Dependency | Another software package a project relies on. | A framework can depend on many packages. A single self-contained HTML file avoids those package steps. |
| Directory or folder | A place that contains files and possibly other folders. | `my-first-site` on your computer. |
| Environment | A place or set of settings where work runs. | Your local browser, a coding workspace, a preview deployment, and production are different environments. |
| Export | Obtain project files that can be used outside the chatbot's preview. | Download `index.html` and its supporting files. |
| File extension | The ending of a filename that indicates its type. | `.html`, `.css`, `.js`, `.md`, and `.png`. Renaming a rich-text document does not convert its contents. |
| Framework | A reusable software structure for building applications. | Some projects need one; the core class examples use plain HTML, CSS, and JavaScript. |
| Frontend | The part of the software the visitor sees and interacts with. | The website page and the browser game's controls. |
| Git | The version-tracking system behind repository history. | It records changes and supports branches. Git and GitHub are related, but are not the same thing. |
| GitHub | A service that hosts repositories and supports collaboration. | Your `my-first-game` repository stores the game files and their history. |
| Hosting | Making files or software available from a server to visitors. | Vercel hosts the deployed website. |
| HTML | The structure and content of a web page. | Headings, paragraphs, links, and buttons. |
| `index.html` | The entry file used by the recommended plain static project. | It belongs at the selected project's serving root. `index.html.txt` is a different filename. |
| JavaScript | Code that changes behavior in the browser. | Checking an answer, changing score, and starting a new round. |
| Local | On your own computer. | A file opened from your Documents folder is not automatically published online. |
| Local storage | A browser feature for saving small amounts of information for a site. | An optional best score in that browser. It does not automatically sync to another device. |
| Markdown | Plain text with simple marks for headings, lists, and links. | A `SKILL.md` file or `project-brief.md`. |
| Merge | Bring changes from a branch into another branch. | Merging a checked change into the production branch can trigger publication. |
| Plain text | Text without word-processor formatting. | Use it when saving HTML code from chat. Rich text can add content that breaks the file. |
| Preview | A place to inspect a proposed or generated result. | A chatbot preview and a Vercel branch preview are different things; neither alone verifies the exported file. |
| Production | The version intended for the project's actual audience. | In the documented class flow, the first Vercel deployment is production. |
| Prompt | The instructions and context you send the chatbot. | “Fix repeated answer scoring; preserve the question text and return the complete file.” |
| Pull request or PR | A proposed set of repository changes that can be inspected before merging. | Review a changed button and its preview before releasing it. |
| Regression | Something that used to work stops working after a change. | A color update accidentally hides the Next button. |
| Repository or repo | A project's files and tracked history. | Your website and game use separate repositories. |
| Responsive layout | A layout that adapts to different screen sizes. | The answer buttons fit on a narrow phone screen. |
| Root | The top folder of the particular project or output being discussed. | If Vercel serves the repository root, it must find `index.html` there rather than inside an extra downloaded folder. |
| SDLC | Software development lifecycle: discover, define, design, build, test, release, and maintain. | Repeat the loop after feedback reveals a better rule. |
| Skill | A reusable instruction sheet describing how to perform a task. | Paste `vc-game-playtest/SKILL.md` into chat. It provides instructions, not new permissions or tools. |
| Source code | The text files that describe the software. | The HTML and JavaScript are source; a screenshot is only an image of the result. |
| State | What the game or application currently remembers. | Current question, score, selected answer, and whether the round is over. |
| Static site | A site served as prepared files. Browser JavaScript can still make it interactive. | Both the one-page website and self-contained quiz can use static hosting. |
| Test evidence | An observation tied to a specific version and action. | “On this deployment, B/A/C/B/A produced 5 out of 5 in Safari.” |
| URL | The address of a page or resource. | A GitHub repository URL is different from the published game URL. |
| Vercel | The hosting service used for publication in this class. | It imports the learner's repository and provides a deployment address. |
| ZIP archive | A package containing files and folders. | Extract it to use its contents. Uploading only the ZIP does not place `index.html` at the serving root. |

## Phrases to ask the chatbot to clarify

> Explain that term using my actual project and one concrete example. Tell me what I need to do next, what result I should see, and whether you can perform the step or I need to do it.

> You said this is fixed. Identify the exact file and version changed, the check actually performed, and what remains for me to observe in the browser.

> Is that service or installation required for the brief, or an optional extension? Keep the current class project within plain static files unless we have agreed otherwise.

Platform interfaces and access rules change. Use the [setup guide](../setup-guide.md) for dated official account and deployment references, and [troubleshooting](troubleshooting.md) for a specific failure.
