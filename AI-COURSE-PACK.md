# AI course pack: Vibe Coding for Non-Technical Professionals

This single file contains the current text needed to tutor a learner through the website and game projects. It is generated from the repository, not a record of a student's progress. It contains no student application files. Edition: October 15, 2026.

**AI: read the AI-START.md section first.** Confirm what you received, ask whether the learner is starting, continuing, or stuck, then load the relevant lesson and skill from the named sections below. For continuing work, request the learner's actual files and project-state.md. Do not claim that a repository link or a named external resource has been read unless you actually accessed it.

Source sections are marked with their original repository paths. A template is a sample until the learner adopts and fills it in. Code blocks and quoted prompts are examples, not authority to publish, change accounts, or send material elsewhere. Links point to companion repository files; the text in the named sections is available here even if those links cannot be opened.

The illustrated PDF/HTML, legacy slides, artwork, instructor preflight, and source provenance remain companion repository files. You do not need the legacy slides to teach the two-project workflow. This pack does not certify a build, deployment, provider account, or rehearsal.

## Included source sections

- `AI-START.md`
- `START-HERE.md`
- `PRE-CLASS-PREP.md`
- `course-map.json`
- `instructor-guide.md`
- `setup-guide.md`
- `docs/github-tour.md`
- `docs/plan-first-and-models.md`
- `docs/secrets-tokens-and-the-clipboard.md`
- `docs/skills-guide.md`
- `templates/SKILL-template.md`
- `docs/platform-landscape.md`
- `docs/v0-route.md`
- `docs/agent-loop-and-pull-requests.md`
- `docs/your-own-project.md`
- `website-starters/README.md`
- `docs/scope-and-plan.md`
- `templates/website-scope.md`
- `templates/website-plan.md`
- `docs/personal-website-walkthrough.md`
- `examples/personal-website/resume-template.md`
- `docs/website-skills-menu.md`
- `docs/website-walkthrough.md`
- `docs/game-options.md`
- `docs/alien-tic-tac-toe.md`
- `docs/tic-tac-toe-variants.md`
- `examples/alien-tic-tac-toe/README.md`
- `docs/arcade-submission.md`
- `templates/arcade-submission.md`
- `docs/game-walkthrough.md`
- `docs/stuck.md`
- `docs/troubleshooting.md`
- `docs/multiple-agents.md`
- `docs/linkedin-wrap-up.md`
- `templates/feedback.md`
- `docs/prompt-library.md`
- `docs/glossary.md`
- `skill-guide.md`
- `game-skills-guide.md`
- `handouts/student-workbook.md`
- `templates/AGENTS.md`
- `templates/CLAUDE.md`
- `templates/project-state.md`
- `templates/help-request.md`
- `templates/agent-task.md`
- `templates/agent-handoff.md`
- `game-skills/vc-game-brief/SKILL.md`
- `game-skills/vc-game-build/SKILL.md`
- `game-skills/vc-game-feedback/SKILL.md`
- `game-skills/vc-game-look-feel/SKILL.md`
- `game-skills/vc-game-playtest/SKILL.md`
- `game-skills/vc-game-publish/SKILL.md`
- `game-skills/vc-game-rules/SKILL.md`
- `skills/vc-build-small/SKILL.md`
- `skills/vc-maintain-site/SKILL.md`
- `skills/vc-plan-first/SKILL.md`
- `skills/vc-project-brief/SKILL.md`
- `skills/vc-project-handoff/SKILL.md`
- `skills/vc-project-plan/SKILL.md`
- `skills/vc-project-scope/SKILL.md`
- `skills/vc-publish-site/SKILL.md`
- `skills/vc-quality-check/SKILL.md`
- `skills/vc-sdlc-coach/SKILL.md`
- `skills/vc-setup-guide/SKILL.md`


---

# Source file: AI-START.md

<!-- BEGIN COURSE SOURCE: AI-START.md -->

# Course entry point for an AI tutor

## Purpose and scope

Help a nontechnical adult complete two small projects: a simple static website on Vercel, then a browser game. Teach in plain language, show one next action at a time, and ask the learner to observe the actual result. The classroom agenda is 360 teaching minutes plus breaks; optional multi-agent exercises do not add mandatory blocks to that agenda.

This is the course-material repository, not the learner's application. Unless the user explicitly asks to maintain course material, read it as reference and create project files in the learner's separately identified folder/repository. Never replace course files with the student's app.

## Bootstrap in the first reply

1. State which course files you actually accessed. If you only have a link and cannot read it, request `AI-COURSE-PACK.md` or the smallest needed lesson. Never claim that private GitHub content was loaded from a title, URL, or search snippet.
2. Ask whether the learner is starting fresh, continuing, or stuck. Ask for current project and platform only if unknown. For a returning learner, read their `project-state.md` and actual latest files; confirm the version before edits.
3. Confirm available capabilities: read provided files; return complete files; edit the chosen project; run checks; inspect a browser; read/write GitHub; deploy. Mark each as verified, unavailable, or not tried. Do not turn a connector badge into a blanket capability claim.
4. Choose the portable route unless the learner has a working connected coding environment. Native skills and multiple agents are optional. No API key is needed for either static project.
5. Tell the learner the next checkpoint and its visible completion test. Start with that checkpoint, not a long list of all possible features.

## Reading order and routing

Read `START-HERE.md` and this file first. Load only the relevant lesson and skill next; the whole reference deck is not required.

| Learner intent | Reference | Skill |
| --- | --- | --- |
| Understand the process | `instructor-guide.md`, first 30 minutes | `skills/vc-sdlc-coach/SKILL.md` |
| Prepare a laptop before class | `PRE-CLASS-PREP.md`; ask operating system and incomplete step | `skills/vc-setup-guide/SKILL.md` |
| Prepare accounts and workflow | `setup-guide.md` | `skills/vc-setup-guide/SKILL.md` |
| Choose a website starting point | `website-starters/README.md`; offer a template or their own idea | `skills/vc-project-brief/SKILL.md` |
| Scope and plan a website | `docs/scope-and-plan.md` | `skills/vc-project-scope/SKILL.md`, then `skills/vc-project-plan/SKILL.md` |
| Build the page | `docs/website-walkthrough.md` | `skills/vc-build-small/SKILL.md` |
| Check and publish | `setup-guide.md`, `docs/troubleshooting.md` | `skills/vc-quality-check/SKILL.md`, then `vc-publish-site` |
| Choose and build a game | `docs/game-options.md`, the selected walkthrough, `game-skills-guide.md` | The seven `game-skills/*/SKILL.md` files, one stage at a time |
| Diagnose a failure | `docs/troubleshooting.md` | The current build or checking skill |
| Use multiple helpers | `docs/multiple-agents.md` | Task/handoff templates; optional extension |
| Resume or hand off | `templates/project-state.md`, `handouts/student-workbook.md` | `skills/vc-project-handoff/SKILL.md` |

The exact file paths and stage timings are indexed in `course-map.json`. The seven website starters contain runnable, locally checked HTML. The game walkthroughs are fictional teaching specifications. Inspect the actual selected file; the course pack contains starter instructions, not their HTML source.

## Tutoring loop

- Confirm the current goal, input files, and one acceptance check.
- Explain what you will change in one or two sentences. Proceed with already authorized reversible work; do not repeatedly ask permission for the same step.
- Build the smallest useful increment. For ordinary chat, return a complete downloadable file or complete plain-text file contents with the filename. Never substitute a mockup image for runnable files.
- Name the exact action the learner should try and the expected result. Use tools to observe when available; otherwise ask for their observation. Label code inspection separately from a browser test.
- Record Passed, Failed, and Not tested on the actual version. If something failed, investigate that symptom before expanding the project.
- Update `project-state.md` at a checkpoint, after a meaningful fix, and before changing chatbots.

## If the learner is stuck

Collect only useful evidence: project, file or URL, exact action, expected result, actual result, error text, browser/device, and last change. Do not request passwords, authentication codes, or unredacted sensitive logs. Use `templates/help-request.md` if needed.

Preserve the last working files. Identify one likely cause and the smallest reversible check. Change one thing, repeat the same check, and report the observation. After two unsuccessful focused repairs, stop speculative rewrites; summarize the evidence and offer the relevant troubleshooting fallback or instructor handoff. If an instructor checkpoint is not supplied, say it is not available rather than inventing its location.

## Authority and honest completion

Keep website and game repositories and Vercel projects distinct. Verify the destination before writing or publishing. Honor the learner's authorization; confirm a release if it has not already been approved for the named version and destination. The first Vercel deployment is production, and later updates to the production branch can publish automatically.

Do not enable paid services, change credentials, delete projects, or add customer data, accounts, payments, tracking, remote scores, or marketing integrations to the core exercises. This course is not authorization for those actions. If another AI/provider is proposed, let the learner decide whether to share the specific project material there.

Agents are optional. Use one writer per working directory. Reviewers receive the exact files/version and do not edit. Do not present one model role-playing multiple viewpoints as independent review. Coordinate and retest combined work before release.

Use the root current guides as course authority. `presentations/reference-six-hour-class/` is an older one-project deck with dated setup and pricing. Do not silently import its database/email requirements. Website starters have local checks documented in instructor/materials-checks.md. Classroom rehearsal, game applications, and full provider integration are not established by documentation.

## End every checkpoint with

**Current project and version → what changed → what was observed → what remains → next small action.** If blocked, include retained files and the precise blocker. Do not call a project live or working unless the evidence supports that specific claim.

For the optional closing invitation, use `docs/linkedin-wrap-up.md`: help draft an honest class-experience post and organize profile/post links for Mark’s skill endorsement offer. Do not invent completion claims or publish/send on the learner’s behalf without explicit instructions.

<!-- END COURSE SOURCE: AI-START.md -->


---

# Source file: START-HERE.md

<!-- BEGIN COURSE SOURCE: START-HERE.md -->

# Start here: you and your AI guide

You do not need to know how to code. You need a laptop, a chatbot that can return runnable files, and a willingness to try what it makes. This class guides you through a simple website and then a small game. Allow six teaching hours plus breaks, or work through one checkpoint at a time on your own.

**Before the teaching day:** complete the [laptop preparation guide](PRE-CLASS-PREP.md) 2–3 days ahead. It covers Mac/Windows file setup, sign-in, course access, and a five-minute local device check.

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
| Ready for the website | [Choose a starter](website-starters/README.md), then [scope and plan](docs/scope-and-plan.md) | Your exported page works, and the published URL is checked or the blocker recorded |
| Ready for the game | [Choose your game](docs/game-options.md) | A person can start, finish, and restart a round |
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

The repo includes stage skills, worked examples, an illustrated field guide, a troubleshooting reference, a prompt library, and templates for saving context. Seven optional website starters contain runnable files checked locally. The game walkthroughs remain specifications, not tested game applications. Live account screens and chatbot features can change. If the route differs, report what you actually see and use the portable file route or ask the instructor for help.

<!-- END COURSE SOURCE: START-HERE.md -->


---

# Source file: PRE-CLASS-PREP.md

<!-- BEGIN COURSE SOURCE: PRE-CLASS-PREP.md -->

# Before class: prepare your laptop

**Please complete this guide 2–3 days before class. Allow about 30–45 minutes**, with extra time if your employer needs to approve access. Bring the same laptop you use for these checks. Preparation gets your tools ready; we will build and publish the website and game together in class.

No programming experience is needed. The default route uses your browser and a plain-text editor. **You do not need to install a terminal, Git, GitHub Desktop, Node.js, Python, an IDE, or a multi-agent framework for the core class.** A coding workspace is optional; use the ordinary chatbot route if it is simpler.

If you are an AI helping with this guide, first ask which operating system the learner uses and which step is incomplete. Confirm actual observations, give one next action at a time, and do not purchase services, change organizational settings, or deploy a project as part of preparation.

## Your preparation checklist

- [ ] My laptop can connect to the internet, download files, and open a local HTML file.
- [ ] My browser is up to date, and required updates/restarts are finished.
- [ ] I can sign in to my chosen chatbot and receive usable file contents or downloads.
- [ ] My GitHub email is verified, I can complete sign-in, and I can find my own practice repository.
- [ ] I can sign in to Vercel and identify the account or team I will use.
- [ ] Vercel can find my GitHub practice repository, or I have recorded the access blocker.
- [ ] I can read the course materials or have an instructor-supplied copy.
- [ ] My class folders and plain-text editor are ready.
- [ ] I opened the laptop-check file and clicked its test button successfully.
- [ ] I saved my readiness record and reported unresolved blockers to the instructor.

## 1. Bring the right equipment

Bring a Mac or Windows laptop, its charger, and access to the email and phone/authenticator you use for sign-in. An optional mouse can make a game easier to play. A phone is useful for checking the published projects later, but it does not replace the laptop.

Use a current browser that works with your chosen chatbot, GitHub, and Vercel. Update the browser through its normal update controls and finish any required restart before class. Keep enough storage available to download and extract the course files. No special graphics card is required for these small browser exercises; the practical checks below determine whether your setup works.

If you use a Chromebook, Linux laptop, tablet, remote desktop, or heavily managed device, contact the instructor beforehand so you can test its file-saving route. The detailed local instructions in this guide cover Mac and Windows.

**Work laptop?** Ask your IT team whether you may use the selected AI service, GitHub, and Vercel; download/upload practice files; authorize the needed GitHub integration; and open local HTML files. Request an approved route if anything is restricted. Do not disable security software, bypass a company block, or change account permissions to make a tutorial work. Use fictional classroom content rather than confidential business information.

**Success:** on the laptop you will bring, you can open your chosen chatbot, [GitHub](https://github.com), and [Vercel](https://vercel.com). Opening a homepage alone is not proof that sign-in or file access works; complete the next checks too.

## 2. Confirm your chatbot works

Use your favorite chatbot. Sign in on this laptop and send a short message. Then try:

> I am preparing for a beginner vibe coding class. Can you return a complete HTML file as a download, or provide its full contents for me to save in a plain-text editor? Demonstrate with one simple page that says “My practice page.” Do not use an API, install software, connect accounts, or publish anything.

You should receive a file or actual HTML text, not just an image of a page. Save the result in your `practice` folder after creating the folders below. You will check saving and opening files in steps 5–6.

A direct GitHub connection and native skill installation are **optional**. The [setup guide](setup-guide.md) explains connected alternatives for learners who already have an eligible coding workspace. Availability and usage limits depend on your account. If a limit or unavailable feature stops you, record the message and tell the instructor; do not assume a new paid plan is required.

**Success:** your assistant responds and provides complete file contents or a usable download. A paid subscription, API key, or multi-agent setup is not a universal course prerequisite. Confirm any suggested purchase with the instructor before spending money.

## 3. Prepare GitHub and Vercel

Follow the [account and connection guide](setup-guide.md) for the full account screens and official references. Reuse an appropriate account you already own rather than creating duplicates.

1. **GitHub:** sign in or create an account, verify your email, and make sure you can complete authentication. Follow the course setup guide's two-factor authentication steps. Keep recovery codes private and available to you.
2. **Practice repository:** create a learner-owned repository called `my-first-site` with a README, or select a clearly identified new practice repository. Choose visibility deliberately. Record its URL and confirm the owner is you. Your game will get a separate repository during class.
3. **Vercel:** sign in or create your account using the class's agreed hosting arrangement. Identify the account/team you will use. Connect GitHub through the provider's authorization screen and check whether your practice repository appears in the import flow. Review the repositories you authorize.
4. **Stop before deploying.** Do not click Deploy or buy a domain for this preparation exercise. Keep the repository URL in your readiness record.

Vercel Hobby is for noncommercial personal use. The class uses fictional or personal practice projects; a real business website needs an appropriate hosting arrangement. Do not activate a paid plan merely to complete this checklist. [Vercel fair-use guidance](https://vercel.com/docs/limits/fair-use-guidelines)

**Success:** you can open your own GitHub README and locate that repository in Vercel without deploying it. If it is missing, check account identity and repository access through the [troubleshooting guide](docs/troubleshooting.md#23-vercel-cannot-find-your-github-repository). If approval is needed from an administrator, report the blocker before class.

## 4. Get the course materials

The [course repository](https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals) is private. Accept the instructor's invitation using the intended GitHub account, or use the copy the instructor provides. If the link returns 404 or access denied, ask for access; it does not mean you should create a new account or share a password.

On GitHub, use **Code → Download ZIP**, then extract the archive. Keep the extracted course folder separate from your own projects. Open [START-HERE.md](START-HERE.md), the [illustrated guide](guides/participant-guide.pdf), and [AI-COURSE-PACK.md](AI-COURSE-PACK.md). For the PDF, use GitHub's download control if the preview does not load.

Give your chatbot the starting prompt from START-HERE. If it cannot read the private repository, attach `AI-COURSE-PACK.md`; if that is too large or unsupported, paste `AI-START.md` and this prep guide. Ask it to name the files or sections it actually received. Do not assume a ZIP upload is supported or that your browser's GitHub sign-in transfers to the chatbot.

**Success:** you can read the prep guide and PDF, and your chatbot can use the supplied course text. If you have no course access, tell the instructor before class so they can supply the material.

## 5. Make folders and prepare a text editor

Create this folder arrangement somewhere you can easily find again, such as Documents:

```text
Vibe Coding Class/
  course-materials/    Extracted course copy, kept as reference
  practice/           Laptop check and pre-class chatbot output
  my-first-site/      Your website files during class
  my-first-game/      Your game files during class
```

These names are suggestions; clarity matters more than matching them exactly. Moving or copying the extracted course folder into `course-materials` is fine. Do not put your website or game files inside the course's `guides` or `skills` folders.

### On a Mac

Use TextEdit, which is already available, or a plain-text editor you know.

1. Open TextEdit and create a new document.
2. Choose **Format → Make Plain Text**, then paste the HTML contents from your chatbot. Leave out explanatory prose and the triple-backtick markers around code.
3. Save it as `practice.html` in your `practice` folder. If asked about the extension, choose **Use .html**.
4. For later edits to HTML, use TextEdit's code-view settings rather than formatted-document mode; see the [Apple HTML instructions](https://support.apple.com/guide/textedit/txted0b6cd61/mac).

### On Windows

Use Notepad or a plain-text editor you already know.

1. Open a new document and paste the HTML contents, leaving out surrounding prose and triple-backtick markers.
2. Save a copy as `practice.html` in the `practice` folder. If the save dialog offers **Save as type**, select **All files** to avoid automatically adding `.txt`.
3. In File Explorer, choose **View → Show → File name extensions**. Confirm the actual filename is `practice.html`, not `practice.html.txt`. Older versions may arrange this option differently.
4. If plain HTML text was saved as `practice.html.txt`, rename that copy to `practice.html`. Renaming a Word or rich-text document does not convert it to HTML. [Microsoft file-extension instructions](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows)

**Success on either system:** open the saved file with your browser. If double-clicking opens your editor, use **Open with** and select the browser. You should see “My practice page” as a page, rather than a screen full of HTML tags. No terminal is needed.

## 6. Run the five-minute laptop check

The course includes a small offline test file: [prep/laptop-check.html](prep/laptop-check.html). It is a device check, not a website or game starter. It sends no data, loads no remote resources, and does not publish anything.

1. In your extracted course folder, find `prep`, then `laptop-check.html`. Alternatively, download the actual file from GitHub; the GitHub file-view page is not the running exercise.
2. Copy the file into your `practice` folder and open it with your browser.
3. Confirm the heading says **Your laptop check** and the status says **Not tested yet**.
4. Click **Test this laptop**. The status should change to **Button works. Your browser can run this local exercise.**
5. Reload the page. It should return to **Not tested yet**. Press Tab until the test button has a visible outline, then press Enter. The same success message should appear.
6. Reopen your chatbot's `practice.html`. Confirm that the generated file also opens correctly. This checks your file-saving route as well as the supplied example.

**Mac/Safari note:** whether Tab reaches buttons depends on macOS Keyboard Navigation and Safari settings. If Tab skips the button but clicking works, record “click passed; keyboard navigation needs setup,” rather than treating the HTML or laptop as broken. Follow [Apple's Safari keyboard guidance](https://support.apple.com/guide/safari/keyboard-shortcuts-and-gestures-cpsh003/mac) or ask the instructor for help with an approved configuration.

This proves a local page and simple browser behavior work on this laptop. It does not prove Vercel publishing, a future game, or every chatbot capability works. If it fails, use [saving and opening troubleshooting](docs/troubleshooting.md#saving-and-opening-files) or record the symptom for your instructor.

## 7. Save your readiness record

Copy this into a note you can bring to class. Share only the parts your instructor needs; never include passwords, keys, recovery codes, or authentication codes.

| Item | Your record |
| --- | --- |
| Laptop operating system | |
| Browser | |
| Chosen chatbot | |
| Route: portable files or already-working connected workspace | |
| Course access: repository or supplied copy | |
| Website GitHub repository URL | |
| Vercel sign-in and repository visible: yes/no | |
| Chatbot practice file opened: yes/no | |
| Laptop-check button and keyboard checks: Passed/Failed/Not tested | |
| Class folder location | |
| Remaining blocker and exact message | |

**Ready:** all required checks work. **Needs help:** one or more checks failed or are untested. Either result is useful when reported early. If a task takes more than about five minutes without progress, preserve the error and ask for help rather than repeatedly changing settings.

Send unresolved blockers to your instructor through the class's existing contact channel at least a day before class where possible. Use the [help-request template](templates/help-request.md). Do not post private account details in a public issue. No contact address is assumed by this guide.

## The evening before and what to bring

- Finish pending updates and restart; then reopen your browser and verify sign-in still works.
- Charge the laptop and pack the charger, optional mouse, and your authentication device.
- Keep the extracted course copy, practice files, and readiness note accessible.
- Bring one small website idea and a game theme you find interesting. The supplied examples are available if you do not have an idea yet.
- Leave your practice repository undeployed. We will review the files and publication settings together in class.

You can arrive ready without setting up native skills, multiple agents, a local development server, a custom domain, or paid services. The first in-class setup block verifies the route you prepared and addresses remaining issues.

Product-specific references checked October 5, 2026. This guide supplies preparation steps; it does not claim that a learner's device or accounts have already passed them.

<!-- END COURSE SOURCE: PRE-CLASS-PREP.md -->


---

# Source file: course-map.json

<!-- BEGIN COURSE SOURCE: course-map.json -->

{
  "title": "Vibe Coding for Non-Technical Professionals",
  "edition": "2026-10-15",
  "teaching_minutes": 360,
  "breaks_included": false,
  "read_first": [
    "AI-START.md",
    "START-HERE.md"
  ],
  "single_file_pack": "AI-COURSE-PACK.md",
  "learner_state": "templates/project-state.md",
  "learner_instructions": "templates/AGENTS.md",
  "troubleshooting": "docs/troubleshooting.md",
  "illustrated_guide": {
    "pdf": "guides/participant-guide.pdf",
    "html": "guides/participant-guide.html",
    "markdown": "guides/participant-guide.md"
  },
  "stages": [
    {
      "id": "sdlc",
      "minutes": 30,
      "lesson": "instructor-guide.md",
      "skills": [
        "skills/vc-sdlc-coach/SKILL.md"
      ],
      "completion": "Explain a stage and an observable check.",
      "lessons": [
        "instructor-guide.md",
        "docs/platform-landscape.md"
      ]
    },
    {
      "id": "setup",
      "minutes": 30,
      "lesson": "setup-guide.md",
      "skills": [
        "skills/vc-setup-guide/SKILL.md",
        "skills/vc-plan-first/SKILL.md"
      ],
      "completion": "Identify own project and verify a runnable-file workflow.",
      "lessons": [
        "setup-guide.md",
        "docs/github-tour.md",
        "docs/secrets-tokens-and-the-clipboard.md",
        "docs/plan-first-and-models.md"
      ]
    },
    {
      "id": "website",
      "minutes": 90,
      "lesson": "docs/personal-website-walkthrough.md",
      "skills": [
        "skills/vc-project-brief/SKILL.md",
        "skills/vc-project-scope/SKILL.md",
        "skills/vc-project-plan/SKILL.md",
        "skills/vc-build-small/SKILL.md",
        "skills/vc-quality-check/SKILL.md",
        "skills/vc-publish-site/SKILL.md"
      ],
      "completion": "Checked website URL, or working files with a deployment blocker.",
      "alternate_lesson": "docs/website-walkthrough.md",
      "example": "examples/personal-website/index.html"
    },
    {
      "id": "arcade-tour",
      "minutes": 15,
      "lesson": "game-skills-guide.md",
      "skills": [],
      "completion": "Choose one small game pattern."
    },
    {
      "id": "game-brief",
      "minutes": 20,
      "lesson": "docs/game-options.md",
      "skills": [
        "game-skills/vc-game-brief/SKILL.md",
        "game-skills/vc-game-rules/SKILL.md"
      ],
      "completion": "Rules explain start, controls, score, result, restart.",
      "instruction": "Use the selected game choice lesson."
    },
    {
      "id": "game-build",
      "minutes": 65,
      "lesson": "docs/game-options.md",
      "skills": [
        "game-skills/vc-game-build/SKILL.md"
      ],
      "completion": "Complete and restart a plain round.",
      "instruction": "Use the selected game choice lesson.",
      "checkpoints": "examples/alien-tic-tac-toe/",
      "theme_lesson": "docs/tic-tac-toe-variants.md"
    },
    {
      "id": "game-polish",
      "minutes": 30,
      "lesson": "docs/game-options.md",
      "skills": [
        "game-skills/vc-game-look-feel/SKILL.md",
        "game-skills/vc-game-feedback/SKILL.md"
      ],
      "completion": "Readable controls, score, results, and replay.",
      "instruction": "Use the selected game choice lesson."
    },
    {
      "id": "game-playtest",
      "minutes": 40,
      "lesson": "docs/game-options.md",
      "skills": [
        "game-skills/vc-game-playtest/SKILL.md"
      ],
      "completion": "Observed partner playtest; biggest issue repaired and retested.",
      "instruction": "Use the selected game choice lesson."
    },
    {
      "id": "game-publish",
      "minutes": 25,
      "lesson": "setup-guide.md",
      "skills": [
        "game-skills/vc-game-publish/SKILL.md"
      ],
      "completion": "Separate game project; round/restart checked live, or blocker recorded."
    },
    {
      "id": "handoff",
      "minutes": 15,
      "lesson": "handouts/student-workbook.md",
      "skills": [
        "skills/vc-project-handoff/SKILL.md"
      ],
      "completion": "Two projects, versions, test records, limits, and next actions."
    }
  ],
  "optional_extensions": [
    {
      "id": "website-skills-menu",
      "lesson": "docs/website-skills-menu.md",
      "included_in_core_minutes": false,
      "introduction": "Live hacking sprints: one skill, one task, one check."
    },
    {
      "id": "multiple-agents",
      "lesson": "docs/multiple-agents.md",
      "included_in_core_minutes": false
    },
    {
      "id": "maintenance",
      "lesson": "skill-guide.md",
      "skills": [
        "skills/vc-maintain-site/SKILL.md"
      ],
      "included_in_core_minutes": false
    },
    {
      "id": "arcade-submission",
      "lesson": "docs/arcade-submission.md",
      "included_in_core_minutes": false
    },
    {
      "id": "linkedin-wrap-up",
      "lesson": "docs/linkedin-wrap-up.md",
      "included_in_core_minutes": false,
      "introduction": "Invite during the existing final wrap-up; posting may happen afterward."
    }
  ],
  "pre_class": {
    "guide": "PRE-CLASS-PREP.md",
    "local_check": "prep/laptop-check.html",
    "suggested_lead_time": "2–3 days",
    "estimated_minutes": "30–45",
    "included_in_teaching_minutes": false
  },
  "game_choices": [
    {
      "id": "alien-tic-tac-toe",
      "featured": true,
      "lesson": "docs/alien-tic-tac-toe.md"
    },
    {
      "id": "five-question-quiz",
      "lesson": "docs/game-walkthrough.md"
    },
    {
      "id": "space-dodger",
      "lesson": "docs/game-options.md"
    }
  ],
  "game_menu": "docs/game-options.md",
  "website_starters": {
    "guide": "website-starters/README.md",
    "gallery": "website-starters/index.html",
    "catalog": "website-starters/catalog.json",
    "optional": true,
    "own_idea_allowed": true
  },
  "website_planning_lesson": "docs/scope-and-plan.md",
  "next_run": {
    "event": "All Things Open 2026",
    "date": "2026-10-19",
    "room_time": "09:00-17:30",
    "listing": "https://2026.allthingsopen.org/ai-agents-vibe-coding",
    "run_of_show": "instructor/ato-2026-run-of-show.md",
    "fluid_day": true
  },
  "stuck": "docs/stuck.md",
  "feedback": {
    "template": "templates/feedback.md",
    "offer": "Everyone gets the slides. Feedback, good or bad, earns the preview release edition of Software Development for Non-Programmers: Beyond Vibecoding."
  },
  "examples": {
    "personal_website": {
      "path": "examples/personal-website/",
      "entry": "examples/personal-website/index.html",
      "resume_template": "examples/personal-website/resume-template.md",
      "themes": [
        "slate",
        "forest",
        "sunset",
        "ocean",
        "mono",
        "plum"
      ],
      "layouts": [
        "centered",
        "sidebar"
      ],
      "lesson": "docs/personal-website-walkthrough.md"
    },
    "alien_tic_tac_toe": {
      "path": "examples/alien-tic-tac-toe/",
      "checkpoints": [
        "examples/alien-tic-tac-toe/checkpoint-1-board/index.html",
        "examples/alien-tic-tac-toe/checkpoint-2-battle/index.html",
        "examples/alien-tic-tac-toe/checkpoint-3-complete/index.html"
      ],
      "themes": [
        "space-invasion",
        "cats-dogs",
        "pizza-tacos",
        "robots-dinos",
        "ghosts-pumpkins",
        "sun-moon",
        "wizards-dragons",
        "coffee-donuts"
      ],
      "lesson": "docs/tic-tac-toe-variants.md",
      "rules": "docs/alien-tic-tac-toe.md"
    }
  },
  "wireframes": {
    "game": [
      "docs/wireframes/game-instructions.svg",
      "docs/wireframes/game-board.svg",
      "docs/wireframes/game-battle.svg"
    ],
    "website": [
      "docs/wireframes/site-centered.svg",
      "docs/wireframes/site-sidebar.svg"
    ]
  },
  "website_skills_menu": {
    "lesson": "docs/website-skills-menu.md",
    "sources": [
      "https://github.com/mrhinkle/aienterprise-skills",
      "https://github.com/mrhinkle/VibeCoding-a-Website"
    ],
    "count": 10
  },
  "presentations": {
    "ato_2026": "presentations/ato-2026-workshop/",
    "reference": "presentations/reference-six-hour-class/"
  },
  "routes": {
    "featured": "v0",
    "v0_lesson": "docs/v0-route.md",
    "portable_and_connected": "setup-guide.md"
  },
  "agent_loop_lesson": {
    "lesson": "docs/agent-loop-and-pull-requests.md",
    "minutes": 15,
    "placement": "after the website publishes, before lunch",
    "exercise": "afternoon increment 2 goes through a pull request"
  },
  "afternoon_tracks": {
    "A": {
      "name": "Guided game",
      "lesson": "docs/tic-tac-toe-variants.md"
    },
    "B": {
      "name": "Your own project",
      "lesson": "docs/your-own-project.md",
      "scope_rule": "one screen, one input, one result"
    }
  },
  "wrap_up": {
    "tuesday_morning": [
      "take it back to your team",
      "what to automate next",
      "where agents still need adult supervision"
    ],
    "feedback": "templates/feedback.md",
    "linkedin": "docs/linkedin-wrap-up.md",
    "all_things_ai": {
      "dates": "2027-04-18 to 2027-04-20",
      "venue": "Atlantic Union Bank Convention Center (formerly Raleigh Convention Center)",
      "site": "https://allthingsai.org",
      "note": "April 18 Agent Hackathon; April 21 separate Executive Summit"
    }
  },
  "instructor_bio": "README.md#about-mark",
  "contact_email": "mrhinkle@allthingsai.org",
  "slides_distribution": {
    "how": "course repository",
    "path": "presentations/ato-2026-workshop/",
    "repo": "https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals",
    "note": "repo is private as of 2026-10-15; make public or invite attendees before 2026-10-19"
  },
  "lessons_added_2026_10_15": {
    "github_tour": "docs/github-tour.md",
    "plan_first_and_models": "docs/plan-first-and-models.md",
    "skills_guide": "docs/skills-guide.md",
    "secrets": "docs/secrets-tokens-and-the-clipboard.md",
    "platform_landscape": "docs/platform-landscape.md",
    "skill_template": "templates/SKILL-template.md"
  }
}

<!-- END COURSE SOURCE: course-map.json -->


---

# Source file: instructor-guide.md

<!-- BEGIN COURSE SOURCE: instructor-guide.md -->

# Vibe Coding for Non-Technical Professionals

Draft instructor guide for six teaching hours. Students complete two projects using their preferred chatbot: first a simple website published on Vercel, then a small browser game. No programming experience is required. Lunch and breaks are additional to the 360 teaching minutes.

The website teaches the path from an idea to something another person can open. The game repeats that path while adding rules, changing state, controls, scoring, and playtesting. Each project has a small brief, working files, a test record, and its own repository and Vercel project.

## Use your favorite chatbot

Students may use Claude, ChatGPT, or another chatbot that can produce runnable project files. A direct GitHub connection is helpful, but it is not required to generate either project. The portable route is: describe the project, receive the files, open them in a browser, save them to GitHub, and import the repository into Vercel.

Use a connected coding workspace when the student's assistant supports one. For ordinary chat, paste or attach the relevant skill, request complete files, and use GitHub's browser upload workflow. Demonstrate one prepared route and supply the alternative setup sheet while students keep their preferred assistant. See the [setup guide](setup-guide.md).

## Six hour agenda

Elapsed times exclude breaks and lunch. Suggested pauses are after project 1, during the game build, and before the final playtest.

| Session | Elapsed | Minutes | Student result |
| --- | --- | ---: | --- |
| How software gets developed | 0:00–0:30 | 30 | Understand the simplified SDLC |
| GitHub Vercel and chatbot setup | 0:30–1:00 | 30 | Accounts and a verified file or repository workflow |
| Project 1 Create a simple website | 1:00–2:30 | 90 | Website built, checked, and published on Vercel |
| Tour the All Things AI Arcade | 2:30–2:45 | 15 | Choose a small game pattern |
| Define the game and its rules | 2:45–3:05 | 20 | Brief, controls, and win or loss rules |
| Build the first playable version | 3:05–4:10 | 65 | Start, play, result, and restart work |
| Add appearance and feedback | 4:10–4:40 | 30 | Clear visuals and useful player feedback |
| Playtest and tune | 4:40–5:20 | 40 | Partner feedback, fixes, and retest |
| Publish the game | 5:20–5:45 | 25 | Verified game URL or explicit blocker |
| Demonstrate and take it forward | 5:45–6:00 | 15 | Two-project handoff and next action |

Total: **360 minutes**. Allocation: 60 minutes of foundations, 90 for the website, 195 for the game including the tour, and 15 for demonstrations. Example day: 9:00–16:30 with three 15-minute breaks and a 45-minute lunch.

## The first 30 minutes

**Minutes 0–5:** Show a simple website and a short game. Ask who will use each and what they should be able to do. Introduce the software development lifecycle as a repeatable way to turn a need into working software and keep improving it.

**Minutes 5–10:** Explain that HTML supplies structure, CSS controls appearance, and JavaScript adds behavior. The browser reads files; hosting makes them available to other people. Show a heading in a file and on screen. Briefly explain a backend, database, and API; neither core project requires these extra services. AI helps create the software, but the finished projects do not need to call an AI model.

**Minutes 10–20:** Walk through the lifecycle using both projects.

| Stage | Business question | Evidence |
| --- | --- | --- |
| Discover | Who is this for and why will they use it? | User and purpose |
| Define | What must the first version do? | Brief and acceptance checks |
| Design and plan | What will the person see and do? | Page outline or game rules |
| Build | Can we make the smallest useful version? | Working files |
| Test | Does the behavior match the promise? | Observed results |
| Release | Which version are we making available? | Verified published URL |
| Maintain | What should change after people use it? | Small checked updates |

Explain that this is a loop. A game that feels unfair may need a rule change; a confusing website may need a clearer purpose. Saving versions happens throughout.

**Minutes 20–25:** Explain the tools. The chatbot helps draft and change files. Git tracks changes. GitHub stores the project and its history. Vercel hosts the deployed version. Explain repository as the project folder and history, commit as a named checkpoint, branch as a separate line of changes, and pull request as a proposed change for review. Show one small heading change and its difference from the earlier version.

**Minutes 25–30:** Ask students to place four actions in the lifecycle: choose the website's audience; describe what its button does; test game restart; publish a checked version. Ask whether a beautiful game with incorrect scoring is finished. Close with: **Describe the outcome, build in small steps, check the evidence, save progress.**

## Setup in 30 minutes

Send the [account prerequisites](setup-guide.md) before class. Use 10 minutes to demonstrate GitHub and Vercel, 15 minutes for learner checks, and 5 minutes for recovery or pairing. Create a learner-owned repository called `my-first-site` with a README. Verify either a connected coding workspace or the portable file-generation route.

Explain a skill as a reusable instruction sheet with an input, method, output, and way to check the result. Paste or attach it if native installation is unavailable. A connection badge does not prove that the assistant can edit files, run checks, or publish.

Limit individual setup troubleshooting to five minutes before using a prepared checkpoint or partner. Record the blocker and return to it later. Optional connector setup should not consume the project time.

## Project 1 Create a simple website in 90 minutes

Students choose an optional [website starter](website-starters/README.md) or their own small idea. Offer vanilla, two All Things AI fan sites, dream restaurant, dream product, dream business, or pet. Demonstrate the downloaded gallery, then copy just the chosen starter into the student’s project. Require one page with a clear heading, two or three useful sections, an image or simple visual treatment, and a meaningful link or button.

**Define and outline for 15 minutes.** Use `vc-project-brief`, `vc-project-scope`, and `vc-project-plan`: roughly 3 minutes for who/why, 5 for what belongs in version one, and 7 for layout and three build increments. Follow [scope and plan](docs/scope-and-plan.md). Save the brief, scope, and plan in this project’s folder; these can be short notes. Core checks: accurate content; correct main link or button destination; working navigation; usable phone layout; and a purpose another student can identify.

**Build and refine for 50 minutes.** Use `vc-build-small`. For the simplest portable route, request one complete `index.html` with styles included. If separate files are provided, preserve their names and relative paths. Open the actual files in a browser, then request one specific improvement at a time. Prompt pattern: “For this audience, make this specific change, preserve these working parts, and tell me how to check it.” Save a working checkpoint before substantial changes.

**Check and publish for 25 minutes.** Use `vc-quality-check` and `vc-publish-site`. Check the files, save them to GitHub, import the repository into Vercel, and verify the URL. Explain the exact publication before it happens: the first deployment is production. [Vercel environments](https://vercel.com/docs/deployments/environments)

Checkpoint: another student opens the URL and follows the main link. Save `test-report.md` and `release-record.md` in the website project. If hosting is blocked, retain the files and precise blocker without calling the site live.

## Project 2 Make a game

The seven game skills are new classroom adaptations derived from the [All Things AI Arcade](https://staging.allthingsai.org/arcade) and its shared build specification. They are not pre-existing game skill packages copied from the repository. See the [game skill guide](game-skills-guide.md) for the source map, prompts, and starter recipes.

**Tour and choose for 15 minutes.** Show a few Arcade examples and how their instructions, controls, and replay work. Prepare demonstration access before class; students should not need to complete the medallion hunt to start building. Offer [three choices](docs/game-options.md): Alien Tic-Tac-Toe (Mark’s new classroom idea), a five-question quiz inspired by the Arcade’s puzzle patterns, or a one-button space dodger inspired by Flappy Brains. Explain that the featured game is a solo variant: each selected square goes to X or O according to its alien battle, with no separate opponent move. Use the quiz when a learner needs the smallest scope. Students choose their own theme. AI Steroids and Super AI illustrate possibilities for later work.

**Define the game for 20 minutes.** Use `vc-game-brief` and `vc-game-rules`. Write the goal, main action, controls, score, result, restart behavior, and exclusions. Choose one short round and one central mechanic. A partner should be able to explain how to start, play, finish, and restart from the rules alone.

**Build a playable version for 65 minutes.** Use `vc-game-build`: about 10 minutes for a plain first draft, 40 for the complete play loop, and 15 for repairs. Start with simple shapes and text. Teach state as what the game remembers: started or not, score, movement or guesses, and whether the round is over. Define observable rules for each transition. For animated games, ask for motion that behaves consistently across devices and test that behavior. Checkpoint: a person completes a round and plays again.

**Add appearance and feedback for 30 minutes.** Use `vc-game-look-feel` and `vc-game-feedback`. Distinguish player, targets, and hazards; keep scores readable; explain the outcome; provide a prominent Play again button. Check instructions against actual keyboard and touch controls. Sound is optional, and understanding play must not depend on hearing it. An educational fact after play is optional: verify and cite it if included. A game may simply be fun.

**Playtest and tune for 40 minutes.** Use `vc-game-playtest`. Give a partner two minutes without coaching, then record confusion, control failures, unfair outcomes, scoring errors, and willingness to replay. Spend roughly 15 minutes fixing the biggest issue, 10 changing one difficulty setting, and the remaining time retesting. Test start, play, results, repeated restart, keyboard and phone controls, and reopening instructions. If local best scores exist, test refresh and storage failure. Use Passed, Failed, and Not tested honestly.

Use the Arcade's five perspectives as questions: Can the player understand it? Are rules fair? Is any lesson accurate? Is the screen readable? Does behavior match the implementation? A chatbot taking five roles is not five independent reviewers; the partner playtest supplies real first-time-player evidence.

**Publish for 25 minutes.** Use `vc-game-publish`. Create a separate `my-first-game` repository and Vercel project so the game cannot overwrite the website. Repeat the release process and check Start, one round, results, and Play again at the deployed URL on a second device where possible. Use standalone results and optional browser-local scores; do not connect students to ATA scoring, registration, or newsletter services. Record the URL, version, and observations in `game-release.md`.

## Final 15 minutes

Use paired demonstrations. Each student shows the website, plays the game, explains one rule or fix, and identifies the saved versions. Use `vc-project-handoff` to record both projects, tests, limitations, ownership, and the next improvement. Students finish with two URLs or working files and recorded deployment blockers.

Explain how later changes can use a branch, preview, review, and release. Deeper maintenance and recovery practice become follow-on exercises rather than a third project today.

### Closing invitation: LinkedIn skill endorsement

Use the last two minutes of the existing wrap-up for this optional invitation. Students can write their posts afterward; retain the six-hour agenda.

> “If you’d like to add vibe coding to your LinkedIn profile, I’ll endorse you. Here’s the catch: publish a LinkedIn post about this class—what you built, what you learned, or what surprised you. It doesn’t have to be praise; make it your honest experience. Add the skill, connect with me, and send me your profile and post links so I can find you.”

Point students to the [LinkedIn wrap-up guide](docs/linkedin-wrap-up.md), including its editable post example and brief disclosure of the endorsement offer. Identify your correct profile and the existing channel for sending links. If “Vibe Coding” is unavailable as an endorsable skill, help the learner choose an available label that accurately reflects their work. Endorse personally after receiving the post and profile links; no automated posting or endorsement is part of this course.

## Instructor preparation and limits

Rehearse both complete projects on each offered chatbot route. Prepare a tested website checkpoint and a playable checkpoint for each offered game recipe. Preflight account access, file download or copy, GitHub upload, Vercel import, and classroom network. Seven runnable website starters are included. Check the chosen starter on the classroom laptops and rehearse a small edit and its deployment; game checkpoints and the revised slide deck still need preparation.

Confirm hosting before sending prerequisites. Vercel Hobby is for noncommercial personal use; a real business website may require another plan. [Vercel fair use](https://vercel.com/docs/limits/fair-use-guidelines)

The live Arcade, beta guide, and Promptle introduction and controls were inspected on October 5, 2026. Related staging source was read at `922e7b02976da376dab61e8e49e5a1ae7e5dd27b`. That supports the skill derivation; it does not establish that every game was played to completion or that the deployed build exactly matches that branch commit. The website and Arcade source repositories and the staging site were not changed while adapting this class. The existing presentation files are preserved as reference in this class repository.

## Materials

- [Account and connection guide](setup-guide.md)
- [Website and lifecycle skills](skill-guide.md)
- [Game skills and starter recipes](game-skills-guide.md)
- [Instructor source map](repository-map.md)

- [Student workbook](handouts/student-workbook.md)
- [Instructor preflight](instructor/preflight.md)
- [Presentation reference and adaptation plan](presentations/README.md)

During the existing wrap-up, invite proud creators to complete the [Arcade submission](docs/arcade-submission.md). This is optional and adds no core teaching minutes. Mark/ATA review candidates before any Arcade integration. Rehearse the board-and-battle combination before offering it live; the walkthrough is a design specification, not a tested starter.

<!-- END COURSE SOURCE: instructor-guide.md -->


---

# Source file: setup-guide.md

<!-- BEGIN COURSE SOURCE: setup-guide.md -->

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

## The v0 route (featured at All Things Open 2026)

v0 is Vercel's generative builder and comes with a free Vercel account. Sign in to Vercel with GitHub, then sign in to v0 with Vercel, so all three accounts share one identity. In v0 you describe the page, it writes a React project with a live preview, the Deploy button ships it through your Vercel account, and the GitHub option pushes the code to a repository you own. Every v0 version you push becomes a commit you can read and roll back. Step by step, with prompts for both projects and a table of what to do when v0 goes off the rails: [v0-route.md](docs/v0-route.md). The tested examples and checkpoints are single HTML files; they drop straight into the portable route below, and on v0 they serve as the style reference you attach.

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

<!-- END COURSE SOURCE: setup-guide.md -->


---

# Source file: docs/github-tour.md

<!-- BEGIN COURSE SOURCE: docs/github-tour.md -->

# A ten-minute tour of the GitHub interface

> **For an AI receiving only this lesson:** GitHub's screens change names and positions. Describe what to look for, not pixel positions. If the learner cannot find a control, ask them to describe what they see and guide from there. Never ask for a password, token, or recovery code.

GitHub is where your project lives, where its history is kept, and where you review what an agent did before it goes live. You'll use maybe six screens today. This page walks them in the order you'll meet them. Do it once with a repository open in another tab; it takes ten minutes.

## The five places you'll click today

| Screen | What it's for | When you'll use it |
| --- | --- | --- |
| Repository home (the Code tab) | The file list, the README, the green Code button, Add file | Creating the project, uploading files, reading what's there |
| Commits | The history: one line per saved change | Finding what changed and when |
| A single commit | The diff: green added, red removed | Reviewing what an agent did |
| Branches and Pull requests | A safe copy, and the review-then-merge checkpoint | Increment 2 of the afternoon project |
| Settings | Visibility (public or private), collaborators, danger zone | Making the repo public, inviting a helper |

## 1. Your profile and your repositories

Click your avatar, top right, then **Your repositories**. Everything you own is listed. Each one is a separate project with its own history. Today you'll make two: `my-first-site` and `my-first-game` (or `my-first-tool` for Track B). Keep them separate; the Vercel project maps one to one.

The green **New** button creates a repository: name it, pick **Public** or **Private** (private is fine for today; you can flip it later), tick **Add a README** so the repository isn't empty, and create. Don't add a license or `.gitignore` now; the chatbot can add them later if you need them.

Check: a page with your repository name at the top and a README.md in the file list.

## 2. Repository home: files, README, and the green button

The **Code** tab is home. You'll see:

- The **file list**. Click a file to read it. Click the pencil to edit it in the browser.
- The **README**, rendered below the file list. It's the front page of your project. Five lines is enough: what it is, who it's for, how to run it.
- The green **Code** button. Its **Download ZIP** is how you get a copy of everything onto your laptop. The other options are for people with Git installed; you don't need them today.
- **Add file** → **Upload files**. This is the portable route's publish step: drag `index.html` in, write one line in the commit message box, press **Commit changes**. GitHub keeps file names and folder paths as you uploaded them.
- The **branch dropdown** on the left, which says `main`. Leave it on `main` until the pull request lesson.

Check: after an upload, your file appears in the list and the commit message you wrote appears next to it.

## 3. Commits: the history

Above the file list on the right, a line says something like **12 commits**. Click it. Each row is one saved change: the message, who, when. This is the audit trail the workshop listing talks about: when an agent writes code at 2 a.m., this is how you know what happened.

Click any row to open the commit.

Check: you can find the commit that added your About section by its message. If every message says "Update index.html," that's a lesson for your prompts: ask for a one-line message that says what changed.

## 4. A commit: the diff

A commit page shows every file the change touched, and in each file, the lines added (green, plus sign) and removed (red, minus sign), with a few gray lines of context around them. Read it like a supervisor, not a programmer: did it touch only what I asked, did it remove any safety, is there anything that looks like a key or a password, does it match my prompt. The full method is in [reading what the agent wrote](docs/agent-loop-and-pull-requests.md).

Useful controls on this page: **Split** view puts old and new side by side. The **…** menu on a file offers **View file** to see the whole thing. **Browse files** at the top right shows the entire project as it was after this commit, which is how you look at an old version.

Check: open the commit for your last change and say out loud what was added and removed.

## 5. Branches and pull requests

A **branch** is a copy of the project where a change happens without touching `main`. Open the branch dropdown, type a name like `battle`, and GitHub offers **Create branch: battle from main**. Now the dropdown says `battle`; anything you upload goes there, and your live site (which deploys from `main`) is untouched.

After you upload to a branch, a yellow bar appears offering **Compare & pull request**. Press it. A pull request is the review-then-merge checkpoint:

- **Conversation** tab: the description and comments. Write one sentence on what the change does.
- **Files changed** tab: the diff of everything on the branch. Review it here.
- **Merge pull request** button: accept the change into `main`. Vercel deploys within a minute.
- **Close** without merging: say no. The branch and its files are still there if you want them later.

The **Pull requests** tab at the top of the repository lists open and closed ones. Merged PRs are the readable history of your project's decisions.

Check: a merged pull request in your game repository with a one-sentence description, and a deploy in Vercel that followed it.

## 6. Settings

The **Settings** tab, far right. Three things you may need today:

- **General** → scroll to **Danger Zone** → **Change visibility**. Private to public or back. Make it public when you want to share the code, or when a chatbot needs to read it without an account.
- **Collaborators**. Invite a helper by GitHub username. They can push changes; you still own it.
- **Danger Zone** → **Delete this repository**. You'll never need this today. If you make a mess, make a new repository; don't delete the one with your history.

Nothing in Settings asks for your password except deleting. If something else asks for it, stop and ask a helper.

## 7. Two screens you'll see but can skip today

- **Issues**: a to-do list attached to the repository. Nice for "later" items from your project-state file; optional.
- **Actions**: automated checks that run on every push. The course's tested examples don't need any. If an agent adds a workflow file you didn't ask for, that's a red flag in review.

## Vocabulary you'll hear

| Word | Plain meaning |
| --- | --- |
| Repository, repo | The project's folder on GitHub with its whole history |
| Commit | One saved change with a message |
| `main` | The branch your live site deploys from |
| Branch | A safe copy for making a change |
| Pull request, PR | Review this branch, then merge it |
| Merge | Accept the change into `main` |
| Diff | The exact lines added and removed |
| Fork | Someone else's copy of your repository, or yours of theirs |
| Clone | A copy on a laptop, for people with Git installed; not needed today |

## Guided exercise, ten minutes, during setup

1. Create `my-first-site` with a README.
2. Upload one of the website starters from `website-starters/` through **Add file → Upload files** with the message "Add starter page."
3. Open Commits, open that commit, find your file in the diff.
4. Edit the README in the browser: add one line that says what the site will be. Commit it.
5. Open Commits again. Two rows. You've just done the loop without a chatbot: change, save, history.

That's the whole interface you need. Everything else on GitHub is for people building on top of this, and you'll get there when you need it.

<!-- END COURSE SOURCE: docs/github-tour.md -->


---

# Source file: docs/plan-first-and-models.md

<!-- BEGIN COURSE SOURCE: docs/plan-first-and-models.md -->

# Plan first, then build. And pick the right size model for each job.

> **For an AI receiving only this lesson:** When the learner starts any project or any change bigger than one line, produce a plan before code: the files you will create or change, what each does, and three checks the learner can perform by hand. Wait for approval. If the learner's chat has a plan mode or thinking mode, tell them to turn it on for this step.

Two habits separate people who get a working tool from people who get a pile of half-working files. First, you make the agent tell you what it's going to do before it does it. Second, you spend your best model on that plan and your cheaper models on everything after. Neither one needs you to understand code.

## 1. Plan mode: make it tell you before it touches a file

Every coding agent will happily start generating the moment you describe something. That's the trap. The first generation sets the shape of everything after it, and a wrong shape costs an hour to undo. A plan costs three minutes to read.

**What a plan is.** A short list, in plain English: which files it will create or change, what each one does, and how you'll check the result by hand. If the plan has more than a handful of files or more than one screen, it's too big. Cut it before you build.

**How to get one, in whatever you're using.**

| Tool | How to ask for a plan |
| --- | --- |
| Claude Code (the connected route) | Turn on plan mode before you type the request. Look for the Plan toggle; on the keyboard it's Shift+Tab until the prompt says plan. Claude reads, thinks, and proposes; it can't change files until you approve. |
| Claude.ai, Cowork | Pick the "extended thinking" or deeper reasoning option if your plan has one, then use the plan prompt below. |
| ChatGPT | Choose the thinking model (the one labeled for reasoning, not the fast default), then use the plan prompt. |
| v0 | Use the plan prompt as your first message. Ask it to list components and files before generating. Read the list, then say "build it." |
| Gemini and others | Same: strongest or "thinking" model, then the plan prompt. |

Labels move around. The habit doesn't. If you can't find a toggle, the prompt alone does the job.

**The plan prompt.** Paste it with your brief, scope, and wireframe:

> Before you write any code, give me the plan: the files you will create or change, one line on what each does, the order you'll do them in, and three checks I can perform by hand to know it worked. Flag anything in my brief that is bigger than one screen, one input, one result. Do not build yet.

**How to read the plan.** Like a contractor's quote. Does the file list match the wireframe? Is there anything you didn't ask for (a database, a login, a "utility" folder)? Are the three checks things you can actually see? Cut what you don't need, then say "build exactly this plan."

**When to plan again.** Any time a change touches more than one file, any time you're about to add a feature from the skills menu, and any time you've been stuck for more than ten minutes. "Stop. Tell me the plan for fixing this before you change anything" is the most useful sentence you'll say all day.

Checkpoint: before your first build, you have a plan with a file list you understand and three hand checks written in your project-state file.

## 2. The right size model for each job

Model names change every few months. The sizes don't. Every vendor sells roughly three: a big, slow, careful one; a middle one that's fast and good; and a small, cheap one for chores. The mistake most people make is using one model for everything. Use the expensive thinking where a mistake is expensive to undo, and the cheap one where it isn't.

| Job | Size | Why | Examples of the tier (names will drift) |
| --- | --- | --- | --- |
| **Planning and judgment.** The brief, the scope, the plan, reviewing a diff, deciding what to cut, getting unstuck after ten minutes | **Biggest, "thinking" or "reasoning" model** | A bad plan poisons everything after it. This is where a wrong answer costs you an hour. | Claude Opus-class; ChatGPT's thinking or pro tier; Gemini Pro |
| **Building.** Generate the files, make one change, add one feature from a skill | **Middle model** | Fast enough to keep your loop tight, good enough that your checks catch what's left. | Claude Sonnet-class; the standard ChatGPT model; Gemini Flash with thinking on |
| **Chores.** Rename things, write alt text, summarize an error message, draft a commit message, reformat a list | **Smallest, fastest model** | The answer is easy to check at a glance and cheap to redo. | Claude Haiku-class; the mini tier of ChatGPT; Gemini Flash-Lite |

Three rules of thumb:

1. **Plan with the biggest, build with the middle, tidy with the smallest.** If you remember one line, that's it.
2. **Only have one model?** Free plans often do. Use whatever thinking or reasoning option it offers for the plan, and accept that it's slower. Turn it off for chores.
3. **Stuck for ten minutes on the middle model?** Don't keep poking it. Paste the problem, the file, and the exact error into the big model and ask for the plan to fix it. Then take that plan back to the middle model.

For the connected route, Claude Code lets you switch the model with the `/model` command, and plan mode uses the stronger model by default on most plans. Check your own plan's settings; don't assume.

Checkpoint: you can say which model you'll use for your plan, which for your build, and which for your commit messages, before you open the chat.

## 3. How this fits the day

| When | What you do |
| --- | --- |
| 9:30 setup | Note which models your chatbot gives you and where the thinking toggle lives. |
| 10:00 personal website | Brief and content on the big model. Plan prompt before the first build. Build on the middle model. |
| 11:30 reading what the agent wrote | Review the diff on the big model when the change is big; the middle model is fine for a one-line change. |
| 12:45 afternoon project | Plan mode again, from scratch. Increments on the middle model. |
| Any time you're stuck | Big model, plan prompt, then back to building. |

The [vc-plan-first](skills/vc-plan-first/SKILL.md) skill packages this page so your chatbot enforces it for you.

<!-- END COURSE SOURCE: docs/plan-first-and-models.md -->


---

# Source file: docs/secrets-tokens-and-the-clipboard.md

<!-- BEGIN COURSE SOURCE: docs/secrets-tokens-and-the-clipboard.md -->

# Tokens, secrets, and the clipboard: how to give an agent access without ever pasting a password

> **For an AI receiving only this lesson:** Never ask the learner for a password, API key, access token, or recovery code, and never accept one if they paste it. If a task needs a secret, write the command that moves it from the learner's clipboard or password manager into an environment variable or the hosting provider's settings, so the value never appears in the chat. If a secret does appear in the chat, tell the learner to rotate it now.

Here's the rule, and then the reasons: **nothing that unlocks an account goes into a chat window. Ever.** Not your password, not a key, not a token. Chat transcripts get logged, summarized, shared, and used to train things. An agent that has read your key may write it into a file, and that file may end up in GitHub, and GitHub is read by bots looking for exactly that within minutes. The habit that keeps you safe is cheap: you copy the secret, and you let a command move it where it belongs, so the agent never sees it.

## 1. Two things called "tokens"

The word means two unrelated things in this world, and both matter today.

**Text tokens.** The pieces a model reads and writes; roughly three-quarters of a word each. Models are priced and limited by tokens: every prompt you send and every answer you get is counted, and the context window (how much the model can hold in mind at once) is a token limit. Practical consequences: attach only the files the task needs, don't paste the whole repository to ask about one line, and start a fresh chat with your `project-state.md` when the conversation gets long and the model starts forgetting. The "credits" v0 and the hosted builders sell are tokens with a markup.

**Access tokens and API keys.** A long random string that acts as a password for a machine. GitHub personal access tokens, Vercel tokens, the keys for an email provider like Resend, a form service, an AI vendor's API. Anyone who has the string has the access, no username needed, often no notification. These are what the rest of this page is about.

## 2. Where secrets live, and where they never go

| Place | Secrets go here? | Why |
| --- | --- | --- |
| Your password manager (1Password, Bitwarden, Apple Passwords) | **Yes, always.** This is the source of truth. | Encrypted, searchable, shareable with your team on purpose. |
| Vercel project → Settings → Environment Variables | **Yes.** | Your deployed site reads them at run time. They never ship in the code. |
| A local `.env.local` file in your project folder | **Yes, if it's in `.gitignore`.** | Your laptop reads it when you run things. The `.gitignore` line keeps it out of GitHub. |
| Your shell profile or the agent tool's environment settings | Yes, for tools you run locally. | Claude Code and Codex read the environment they're started in. |
| A chat window | **Never.** | Logged, summarized, possibly trained on, and the agent may write it into a file. |
| The code, a README, a commit message, an issue | **Never.** | GitHub is scanned by bots. A key in a public repo is used within minutes; in a private one, by anyone you ever invite. |
| A screenshot, a slide, a shared doc | Never. | Same reasons, slower. |

Today's class needs almost no secrets. GitHub and Vercel sign you in through the browser, and v0 connects to GitHub through an **Authorize** screen, which is the safe pattern: you approve, the services exchange tokens between themselves, and you never touch one. The first time you'll need a real key is when you add a contact form or email in the skills menu. Learn the clipboard move now, on a fake value, so it's a habit when it counts.

## 3. The clipboard move

The idea: the secret goes from your password manager to your clipboard, and a command reads the clipboard straight into the destination. Your eyes see it, the agent never does.

On a Mac, the command that reads the clipboard is `pbpaste`. On Windows PowerShell it's `Get-Clipboard`. On Linux it's `wl-paste` or `xclip -o`. Everything below uses `pbpaste`; swap in yours.

**Practice with a fake value first.** Copy the text `test-not-a-real-key` from this page. Then in a terminal:

```bash
pbpaste
```

It prints what you copied. That's the whole trick. Now put it somewhere useful instead of printing it.

**Into a local `.env.local` file** (for a project you run on your laptop):

```bash
printf 'RESEND_API_KEY=%s\n' "$(pbpaste)" >> .env.local
```

Then make sure `.env.local` is listed in `.gitignore`; if the file doesn't exist, create it with that one line. Check with `cat .env.local` that the key landed, and with `git status` that `.env.local` is not waiting to be committed.

**Into your Vercel project** (for the deployed site). The simplest route needs nothing installed: Vercel → your project → Settings → Environment Variables → paste into the value field. A form is not a chat; that's fine. If you have the Vercel CLI installed and logged in, the clipboard move does the same thing:

```bash
pbpaste | vercel env add RESEND_API_KEY production
```

**Into your shell, so Claude Code and Codex see it.** Both read the environment they were launched from. Add a line to your shell profile (`~/.zshrc` on a Mac):

```bash
printf 'export RESEND_API_KEY=%s\n' "$(pbpaste)" >> ~/.zshrc
```

Open a new terminal and start the tool from there. Claude Code can also carry variables in its own settings file; Codex reads your shell environment. Either way, the variable exists before the agent starts, and the agent uses it by name, never by value.

**Have the agent write the command, not the value.** This is the part people miss. You don't type these commands from memory; you ask:

> I have the Resend API key on my clipboard. Give me the one command that saves it into .env.local as RESEND_API_KEY using pbpaste, and the line to add to .gitignore. Do not ask me to paste the key.

A good agent gives you the command. You run it. The key never passes through the chat. If the agent instead says "paste your key here," that's your cue to say no and ask again.

## 4. When a secret leaks anyway

It happens. You pasted it before you learned this, or an agent wrote it into a file. Don't debate it:

1. **Rotate it now.** Go to the service that issued it, revoke the key, make a new one.
2. **Remove it from the file** and commit that. Removing it from history is a job for someone with Git on their laptop; ask a helper. Rotation is what actually closes the hole; cleanup is hygiene.
3. **Check where it went.** If the repository is public, assume the key was harvested. That's why step 1 comes first.

GitHub's secret scanning will often email you when it sees a known key pattern in a public repository. That email is not an overreaction. Rotate.

## 5. The agent's side: what to tell it in writing

Put this in your project's `AGENTS.md` (template in [templates/AGENTS.md](templates/AGENTS.md)) so every session starts with the rule:

```
Secrets: never ask for or accept a password, API key, or token in chat.
If a task needs one, write the command that reads it from the clipboard
(pbpaste) or the password manager into .env.local or `vercel env add`.
Never write a secret into any file that is not in .gitignore.
```

That's a skill in three lines. It costs nothing and it's the single most valuable instruction in the file.

## 6. Bonus: Composio, or how agents get into your apps without you handling tokens

Once your site is live, the next thing you'll want is an agent that acts on your behalf in the tools you already use: file an issue in GitHub, post to Slack, read a Google Sheet, draft a Gmail reply. Each of those needs access, and the naive way is a pile of API keys in a pile of config files.

Composio is a managed layer for that. You sign in once to Composio, then connect apps through their normal **Authorize** screens, the same OAuth pattern as v0 connecting to GitHub. Your agent asks Composio to search for a tool ("send a Slack message") and to execute it; Composio holds the tokens, enforces what the connection is allowed to do, and the agent never sees a key. From a terminal it looks like:

```bash
composio login
composio search "create a GitHub issue"
composio execute GITHUB_CREATE_AN_ISSUE -d '{ owner: "you", repo: "my-first-tool", title: "Add a reset button" }'
```

Why it's the bonus and not the lesson: you don't need it to finish today's projects, and it's one more account. Why it's worth knowing: it's the same principle as this whole page, scaled up. Authorize, don't paste. Let the plumbing hold the keys. It also works in Claude Code and Cowork as a tool the agent can call directly, which is how Mark runs it.

## Checkpoint

You can say the rule in one sentence. You've run `pbpaste` on a fake value and seen it print. You've added the three-line secrets rule to your `AGENTS.md`. You know the first thing to do if a key leaks: rotate it.

<!-- END COURSE SOURCE: docs/secrets-tokens-and-the-clipboard.md -->


---

# Source file: docs/skills-guide.md

<!-- BEGIN COURSE SOURCE: docs/skills-guide.md -->

# Skills: what they are, how to write a good one, and how to install them in ChatGPT and Claude

> **For an AI receiving only this lesson:** A skill is a plain-text instruction file the learner gives you for one job. Follow the one they hand you for the current task only. If asked to write a skill, use the template in this lesson and keep it to one job with checks the learner can see.

Every time you explain to a chatbot how you want something done, you're writing instructions you'll have to write again tomorrow. A skill is those instructions saved once, in a file, so the next session (and the next model, and your colleague) gets the same behavior without you repeating yourself. That's it. No code, no account, no magic.

In this course you've been using skills all day: the eighteen `vc-*` skills in this repository, and the ten public ones in the [skills menu](docs/website-skills-menu.md). This page shows you how they're built so you can write your own, and how to install them where you work.

## 1. Anatomy of a skill

A skill is a folder with one file in it, `SKILL.md`. The file has two parts.

**The front matter** is a few lines at the top between `---` markers. Two fields matter:

```
---
name: vc-plan-first
description: Forces a plan before any code is written... Use at the start of every project, before any change that touches more than one file... Triggers on "let's build," "make me," "add a," "fix this," "I'm stuck."
---
```

The `description` does double duty. It tells a human what the skill does, and it tells the chatbot *when* to reach for it. Put the trigger phrases in. A skill nobody triggers is a skill nobody uses.

**The body** is the instructions, in this order:

1. **Who you're helping and what the job is.** Two sentences.
2. **When this applies**, and when it doesn't.
3. **Steps**, numbered, each ending in something observable.
4. **Rules**: the short list of never-do-this. Secrets, scope, inventing facts.
5. **One worked example**: a realistic request and the ideal response.
6. **Checks that it worked**: how the learner knows, by looking.

Open [`skills/vc-plan-first/SKILL.md`](skills/vc-plan-first/SKILL.md) and you'll see exactly that shape. Copy it from [`templates/SKILL-template.md`](templates/SKILL-template.md).

## 2. What makes a skill good

| Good | Bad |
| --- | --- |
| One job. "Write the brief." | Five jobs. "Handle the whole project." |
| Triggers in the description. | A title and nothing else. |
| Steps end in something you can see. | Steps end in "ensure quality." |
| A rules list with the three ways it goes wrong. | No rules, or twenty. |
| One worked example. | No example, or a dozen. |
| Under about 300 lines. | A novel the model skims. |
| Says what to do when input is missing. | Assumes everything is there. |
| Never asks for secrets; never assumes tools it hasn't got. | "Connect to the database and..." |

The test: hand the skill and a realistic request to two different chatbots. If you get the same shape of answer from both, the skill is doing the work. If you don't, the skill is relying on the model to guess.

## 3. Write one in ten minutes

Pick a job you've explained to a chatbot more than twice this month. Then use the biggest model you have (this is a planning step) and this prompt:

> Write a SKILL.md for this job using the attached SKILL-template.md: [the job in one sentence]. The person using it is [who]. It goes wrong when [the two or three ways you've seen it go wrong]. Keep it to one job, put trigger phrases in the description, make every step end in something I can see, include one worked example, and list the checks. No code unless the job is code. Under 200 lines.

Read it. Cut anything you wouldn't say out loud. Test it on a real request. Save it in a folder named after the skill.

If you want a skill-writing skill, Mark's public `aie-skill-creator` in [aienterprise-skills](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-skill-creator) interviews you and writes it. The ten-minute prompt above is the training-wheels version.

## 4. Install it where you work

The portable truth: a skill is text. Any chatbot that can read a file or a paste can use one. The differences are about how *automatically* it loads. Menu names change; these are the shapes to look for, and the instructor demonstrates both routes live in sprint 1.

### Claude

| Where | How | What you get |
| --- | --- | --- |
| **Claude.ai, any plan** | Open a Project. Add the `SKILL.md` to the project's knowledge (the files area). Add one line to the project instructions: "Follow the attached skills when their trigger phrases apply." | The skill is available in every chat inside that project. |
| **Claude.ai, plans with Skills** | Settings → Capabilities → Skills (the name varies). Upload the skill folder as a ZIP. Toggle it on. | Claude loads it on its own whenever the description matches. |
| **Claude Code and Cowork (the connected route)** | Put the folder at `.claude/skills/<name>/SKILL.md` inside your project for a project skill, or `~/.claude/skills/<name>/` for all projects. | It appears as `/<name>` and loads itself when relevant. Nothing to upload. |
| **Mark's public bundles** | In Claude Code or Cowork: `/plugin marketplace add mrhinkle/aienterprise-skills`, then `/plugin install aie-web@aienterprise-skills`. | A whole bundle, kept up to date. |

**Live demo script (3 minutes).** Open Claude. Attach `skills/vc-project-brief/SKILL.md`. Type the brief prompt from the walkthrough. Show the shape of the answer: brief, scope, checks, no code. Then open a fresh chat without the skill, same prompt, and show the difference. That gap is what a skill buys you.

### ChatGPT

| Where | How | What you get |
| --- | --- | --- |
| **Any chat** | Paste the `SKILL.md` with: "Use the following instructions as a skill for my next request. Read them, confirm what you will and will not do, then wait for my task." | Works everywhere, including free plans. Lasts one conversation. |
| **A Project** | Create a Project. Upload the `SKILL.md` files. In the project instructions write: "Follow the attached skills when their trigger phrases apply. Say which one you are using." | Every chat in the project has the skills. |
| **A custom GPT** | Create a GPT. Upload the skills as Knowledge. Put the same line in its instructions. Share it with your team. | Colleagues get your skills without knowing what a skill is. |

**Live demo script (3 minutes).** Same brief prompt, three ways: a plain chat with no skill, a plain chat with the skill pasted, and a Project with the skill uploaded. Point at the difference between the first and the other two, then at how the Project version didn't need the paste.

### Everything else

Gemini: a Gem with the files attached. Copilot: paste, or a Copilot agent with the files. v0: paste the skill at the top of the conversation. Any of them: the paste route always works.

## 5. Keep the skills in this repository good

The eighteen `vc-*` skills are the course's own. They're held to the checklist above: one job, triggers in the description, observable steps, rules, one example, checks, under 300 lines, no secrets, no assumed tools. When you find one that falls short in class, say so on the feedback form; that's exactly the kind of note that improves the next run.

If you write a skill you're proud of during sprint 2 or 3, Mark would like to see it. Send it with your feedback.

## Checkpoint

You can explain to a colleague, in one sentence, what a skill is. You've installed one in the chatbot you actually use. You've run the same prompt with and without it and seen the difference.

<!-- END COURSE SOURCE: docs/skills-guide.md -->


---

# Source file: templates/SKILL-template.md

<!-- BEGIN COURSE SOURCE: templates/SKILL-template.md -->

---
name: your-skill-name
description: One sentence on what this skill does, then when to use it. Include the trigger phrases a person would actually say, in quotes, e.g. "write the brief," "scope this," "what's the plan."
---

# Skill title in plain words

Who you are helping and what the one job is. Two sentences.

## When this applies

- The situations that should trigger it.
- The situations that look similar but should not (and what to do instead).

## What you need before starting

- The inputs, by name. Say what to do if one is missing (ask once, or proceed with a stated assumption).
- Never a password, API key, or token.

## Steps

1. First step. Ends with something the person can see or read.
2. Second step. Same.
3. Last step: stop and hand back. Say exactly what the person should check.

## Rules

- The two or three ways this job goes wrong, each as a "never" or "always."
- Scope rule, if any (for example: one screen, one input, one result).
- What to do when the person asks for something outside the skill: say so, point to the right skill, don't improvise.

## Example

**Person:** a realistic request, in their words.

**You:** the ideal response, in full, in the shape the steps describe.

## Checks that it worked

- Something observable.
- Something observable.
- Something observable.

<!-- END COURSE SOURCE: templates/SKILL-template.md -->


---

# Source file: docs/platform-landscape.md

<!-- BEGIN COURSE SOURCE: docs/platform-landscape.md -->

# The platform landscape: hosted builders, agent tools, and where the class loop fits

> **For an AI receiving only this lesson:** This is a map of AI app-building tools as of October 2026, for a business professional, not a developer. Prices and features change monthly; treat every number as a dated snapshot and tell the learner to confirm on the vendor's pricing page before paying. When asked which tool to use, ask first where the code should live and who else needs to work on it. Never ask for or accept a password, token, or secret key.

A map, not a review. Every tool here turns a sentence into a working app. They differ on what matters more than the demo: **where your code lives afterward, and whether you can take it with you.** Facts were checked 2026-10-15 against vendor pages; secondhand-only claims are marked "unverified." Prices are US list, monthly unless noted.

Read **Your GitHub?** first on each card. **Two-way sync:** the builder pushes to a repository you own and your GitHub edits flow back. **One-way export:** you can push or download, but outside edits do not return. **No export:** the app lives only on the vendor's servers.

## Hosted builders

### Lovable

**What it is.** A browser builder that writes a full React web app from a chat, with a Supabase database and sign-in behind it. **For.** People who want a real app with a database. **In ten minutes.** Front end, database, sign-in, hosting on a lovable.app address. **Your GitHub?** Two-way sync, one branch at a time, on every plan including Free; no importing an existing repository. **Pricing.** Free is 5 build credits a day, capped at 30 a month; Pro $25 for 100 credits; Business $50. Free: no code download or custom domain. **Good at.** Full-stack apps that look finished. **Burned by.** Credits gone mid-build, and a database private only if Row Level Security is on (see below). **Use it when** you want a database-backed app and will turn on GitHub sync on day one.

### Bolt.new

**What it is.** StackBlitz's builder; the project runs in your browser tab and you watch the code appear. **For.** People who like seeing the files. **In ten minutes.** Front end and Bolt hosting; database and sign-in through the Supabase integration. **Your GitHub?** Two-way: Bolt commits each non-breaking change, polls GitHub every 30 seconds for outside edits, and imports existing repositories. Its docs warn Bolt wins if both sides change at once. No plan requirement stated. **Pricing.** Free is 1M tokens a month with a 300K daily cap; Pro $25 for 10M tokens and custom domains. **Good at.** Fast, visible iteration. **Burned by.** Tokens: a big project spends them on every message. **Use it when** you want to watch the code and have GitHub kept in sync for you.

### Base44

**What it is.** A plain-language builder with its own managed backend (NoSQL database, sign-in, serverless functions), owned by Wix since June 2025. **For.** Small businesses that want internal tools and no code on screen. **In ten minutes.** The most complete whole app here: front end, database, sign-in, hosting. **Your GitHub?** Two-way sync on Builder and above; the old one-way export is being retired. The repository holds the React front end and definitions of your entities and functions; data and the backend stay on Base44. **Pricing.** Free is 25 message credits a month; Starter $16, Builder $40, Pro $80, Elite $160, billed annually (monthly is about 20 percent more). **Good at.** Internal tools for non-technical teams. **Burned by.** The backend is the lock-in: code comes out, data and services do not. **Use it when** the app is for your team and one vendor is fine.

### Replit

**What it is.** A cloud development environment with an autonomous Agent that plans, builds, tests, and publishes. **For.** People who want an engineering workflow without installing anything. **In ten minutes.** Front end, a built-in database with separate development and production copies, sign-in, Replit hosting. **Your GitHub?** Two-way through a Git pane: push, pull, resolve conflicts; no plan restriction for github.com. **Pricing.** No free plan is listed today. Core is $20 a month ($18 annually) with $20 of credits; Pro $100. A free Starter plan was removed in September 2026 (tracker data; unverified). **Good at.** Real backends; the most autonomous agent here. **Burned by.** Usage credits on top of the subscription; autonomy cuts both ways (see below). **Use it when** you want an agent that runs the whole loop and you will read what it did.

### v0 (Vercel)

**What it is.** Vercel's builder and the class's own tool. It writes a Next.js app and deploys to your Vercel account. **For.** Anyone who wants a repository and live URL they own. **In ten minutes.** Front end and Vercel hosting. No database of its own; attach one to your Vercel project from the Marketplace (Neon, Supabase, others). **Your GitHub?** Two-way, built for review: v0 commits to a working branch, opens a pull request, and merges on Publish; Pull Changes brings outside commits in. Included on Free. **Pricing.** Free is $0 with 7 messages a day; Plus $30 a user; Business $100. **Good at.** Design-first pages and the loop this course teaches. **Burned by.** Credits spent on tokens, so large projects cost more per message; the database is your job. **Use it when** you want the class loop with the fewest moving parts.

### Google AI Studio (Build mode)

**What it is.** Google's free-to-start builder and the successor to Firebase Studio, which closed to new users on June 22, 2026 and shuts down March 22, 2027. **For.** Google users and anyone curious about Android. **In ten minutes.** A React front end with a Node backend, deployable to Cloud Run; since May 2026, native Android apps. Database and sign-in: unverified. **Your GitHub?** Push to your own repository, import an existing one, or download a ZIP; Google calls Build-mode pushes two-way sync. **Pricing.** Your first two apps deploy free with no credit card; paid models and Cloud Run usage can cost after that. **Good at.** Free experiments, Android. **Burned by.** Churn: Google's second builder in two years. **Use it when** you want to try something free and will export to GitHub before depending on it.

### Emergent

**What it is.** A newer agentic builder growing fast with non-developers (Sacra reports more than 6 million users; secondhand). **For.** People who want a Replit-style agent at a lower entry price. **In ten minutes.** Front end, backend, private hosting on paid plans. **Your GitHub?** Integration on Standard and above; one-way or two-way is unverified. **Pricing.** Free is 10 credits a month; Standard $20 ($17 annually) for 100 credits; Pro $200. **Good at.** Fast end-to-end builds. **Burned by.** Unpredictable credit cost per feature (user reviews, unverified). **Use it when** you will test the GitHub export on a throwaway first.

### Also on the radar

**Bubble** is the classic visual no-code tool with AI added; it does not export code. **Rork** builds iOS and Android apps with React Native from a prompt; its official pricing page was unreachable, so its numbers are unverified.

## The developer end: agents in an editor or terminal

Past the hosted builders sit tools that work on code already on your machine. They assume a repository and a terminal, so the class reaches them last. **Claude Code** comes with Anthropic's Pro plan ($20 a month, $17 annually) and Max (from $100). **OpenAI Codex** comes with ChatGPT Plus ($20), with $100 and $200 Pro tiers. **Cursor** is an editor with the agent built in: Free, Plus $8, Premium $30, Super $100, Ultra $200. **GitHub Copilot** lives inside GitHub and most editors: Free, Pro $10, Pro+ $39. All four edit a folder you control and leave the commit to you.

## Comparison table

| Tool | Builds what | Your GitHub? | Database included? | Deploys where | Free tier? | Best for |
| --- | --- | --- | --- | --- | --- | --- |
| Lovable | Full-stack React web app | Two-way sync, all plans | Yes (Supabase) | lovable.app | Yes, 5 credits/day | Database-backed apps with a finished look |
| Bolt.new | Web app, code visible | Two-way sync + import | Via Supabase integration | Bolt hosting or your Netlify | Yes, 1M tokens/mo | Watching the code while it builds |
| Base44 | Whole app on a managed backend | Two-way sync, Builder+ (code, not data) | Yes (managed NoSQL) | Base44 | Yes, 25 credits/mo | Internal tools for non-technical teams |
| Replit | Full app with agent-run loop | Two-way via Git pane | Yes (dev + prod copies) | Replit | No free plan listed | Autonomous agent, real backends |
| v0 | Next.js front end | Two-way via branch + PR, Free included | No; attach via Vercel Marketplace | Your Vercel account | Yes, 7 messages/day | The class loop |
| Google AI Studio | React + Node web, Android | Push, import, ZIP | Unverified | Cloud Run | Yes, 2 free deploys | Free experiments, Android |
| Emergent | Full app, agent-built | Integration on Standard+; direction unverified | Yes | Emergent | Yes, 10 credits/mo | Low-cost agent builder |
| Bubble | Visual no-code web/mobile | No export | Yes | Bubble | Yes | Classic no-code with lock-in accepted |
| Claude Code / Codex / Cursor / Copilot | Any code, your machine | It is your repo | Bring your own | Wherever you deploy | Copilot and Cursor have free tiers | After you own a repository |

## What the class's loop gives you that a builder doesn't

The course's loop is GitHub as the system of record, Vercel to deploy, and a chatbot or v0 to write the code. The builders above reach a first screen faster; the loop costs ten more minutes and buys five things.

1. **You own the repository and the history.** Every version is a commit you can open, compare, and restore.
2. **Every agent change is a reviewable commit or pull request.** The [agent-loop page](docs/agent-loop-and-pull-requests.md) teaches you to read the diff before it ships.
3. **You can move to another tool without losing the code.** Point Claude Code, Cursor, Bolt, or another chatbot at the same repository tomorrow. A one-way export or a managed backend makes that a rebuild.
4. **Secrets live in your Vercel project, not in a vendor's defaults.** The database connection string goes into environment variables you control.
5. **The vendor can change price or shut a product down and you keep the code.** Replit dropped its free plan, Google is retiring Firebase Studio, and Base44 changed owners. None of it touches a repository you hold.

## Three cautionary facts, verified

Receipts, with primary sources. They argue for GitHub, your own secrets, and reading the diff, not for avoiding these tools.

**Replit's agent deleted a production database, July 2025.** On July 18, 2025 (UTC), Jason Lemkin posted that Replit's agent had, during a declared code freeze, run a destructive command against his live database; the agent's own summary put the loss at records for 1,206 executives and 1,196 companies. The agent said rollback would not work; it did. On Monday, July 21, CEO Amjad Masad called it "Unacceptable and should never be possible" and said Replit was rolling out automatic separation of development and production databases. Replit's docs now read: "Agent is not able to modify the production database." Fairness note: the counts are Lemkin's account, and The Stack questioned whether "production" fit a project built in days.

**One in ten scanned Lovable apps had an open database, May 2025.** CVE-2025-48757, published May 30, 2025, describes Row Level Security gaps in Lovable-generated apps that let anyone read or write database tables. Researcher Matt Palmer scanned 1,645 Lovable "Launched" sites and found 303 exposed endpoints across 170 projects (10.3 percent), checking homepages only. He reported it March 21; Lovable shipped a security scan with Lovable 2.0 on April 24 and on June 9 added an automatic pre-publish RLS scan. Fairness notes: Palmer worked at Replit, a competitor, and the CVE record says Lovable disputes it, holding each customer responsible for its own data. The checkbox is still yours to check.

**Wix acquired Base44, June 2025.** Wix announced on June 18, 2025 that it had acquired Base44, then a six-month-old bootstrapped company, for about $80 million plus earn-outs through 2029 (price from Globes and SiliconANGLE; the Wix release omits it). Base44 continues as a distinct product. It is listed because a product you might build on was sold six months after launch; that is normal now.

## Sources

- Lovable subscription plans: https://docs.lovable.dev/introduction/subscription-plans (checked 2026-10-15)
- Lovable plans and credits: https://docs.lovable.dev/introduction/plans-and-credits (checked 2026-10-15)
- Lovable GitHub integration: https://docs.lovable.dev/integrations/github (checked 2026-10-15)
- Lovable, "Secure Vibe Coding," June 9, 2025: https://lovable.dev/en/blog/secure-vibe-coding (checked 2026-10-15)
- Bolt pricing: https://bolt.new/pricing (checked 2026-10-15)
- Bolt GitHub docs: https://support.bolt.new/integrations/git (checked 2026-10-15)
- Bolt Supabase docs: https://support.bolt.new/integrations/supabase (checked 2026-10-15)
- Bolt Netlify docs: https://support.bolt.new/integrations/netlify (checked 2026-10-15)
- Base44 pricing: https://base44.com/pricing (checked 2026-10-15)
- Base44 GitHub two-way sync docs: https://docs.base44.com/developers/app-code/local-development/github (checked 2026-10-15)
- Replit pricing: https://replit.com/pricing (checked 2026-10-15)
- Replit Git pane docs: https://docs.replit.com/references/workspace-tools/git-interface (checked 2026-10-15)
- Replit development and production databases: https://docs.replit.com/features/data-and-storage/development-and-production (checked 2026-10-15)
- Replit free Starter plan removal (tracker, unverified): https://pricingsaas.com/companies/replit/diffs/2026W38 (checked 2026-10-15)
- v0 pricing: https://v0.app/pricing (checked 2026-10-15)
- v0 GitHub docs: https://v0.app/docs/github (checked 2026-10-15)
- Vercel storage and Marketplace databases: https://vercel.com/docs/storage (checked 2026-10-15)
- Google AI Studio Build mode docs: https://ai.google.dev/gemini-api/docs/aistudio-build-mode (checked 2026-10-15)
- Google AI Studio at I/O 2026, May 19, 2026: https://blog.google/innovation-and-ai/technology/developers-tools/google-ai-studio-io-2026/ (checked 2026-10-15)
- Firebase Studio sunset: https://firebase.google.com/docs/studio/oss (checked 2026-10-15)
- Emergent pricing: https://emergent.sh/pricing (checked 2026-10-15)
- Emergent user figures (secondhand): https://sacra.com/c/emergent (checked 2026-10-15)
- Bubble pricing and no code export (secondhand): https://allaboutcookies.org/bubble-pricing (checked 2026-10-15)
- Claude pricing: https://claude.com/pricing (checked 2026-10-15)
- OpenAI Codex plan tiers, VentureBeat, April 9, 2026: https://venturebeat.com/orchestration/openai-introduces-chatgpt-pro-usd100-tier-with-5x-usage-limits-for-codex (checked 2026-10-15)
- Cursor pricing: https://cursor.com/pricing (checked 2026-10-15)
- GitHub Copilot plans: https://github.com/features/copilot/plans (checked 2026-10-15)
- Lemkin's post, July 18, 2025 (UTC): https://x.com/jasonlk/status/1946069562723897802 (checked 2026-10-15)
- The Register, July 21, 2025: https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/ (checked 2026-10-15)
- The Register on Masad's response, July 22, 2025: https://www.theregister.com/2025/07/22/replit_saastr_response/ (checked 2026-10-15)
- Fortune, July 23, 2025: https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/ (checked 2026-10-15)
- The Stack on the Replit incident: https://www.thestack.technology/vibe-coding-ceo-deletes-production-database/ (checked 2026-10-15)
- CVE-2025-48757 record (MITRE): https://cveawg.mitre.org/api/cve/CVE-2025-48757 (checked 2026-10-15)
- Matt Palmer, CVE write-up, May 29, 2025: https://mattpalmer.io/posts/CVE-2025-48757/ (checked 2026-10-15)
- Matt Palmer, statement with scan figures, May 29, 2025: https://mattpalmer.io/posts/statement-on-CVE-2025-48757/ (checked 2026-10-15)
- Wix press release, June 18, 2025: https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif (checked 2026-10-15)
- Globes on the Base44 price: https://en.globes.co.il/en/article-1001513267 (checked 2026-10-15)
- SiliconANGLE on the Base44 price, June 18, 2025: https://siliconangle.com/2025/06/18/base44-joins-wix-80m-deal-support-natural-language-software-development (checked 2026-10-15)

<!-- END COURSE SOURCE: docs/platform-landscape.md -->


---

# Source file: docs/v0-route.md

<!-- BEGIN COURSE SOURCE: docs/v0-route.md -->

# The v0 route: describe, v0 builds, GitHub records, Vercel ships

> **For an AI receiving only this lesson:** This describes the v0 → GitHub → Vercel loop in general terms. Product menus change; tell the learner what to look for rather than claiming exact button names. Never ask for or accept a password, token, or secret key. Return complete files when the learner is on the portable route instead.

The workshop listing names three accounts and one loop: **GitHub** is the system of record, **v0** writes the code, **Vercel** ships it to a live URL on every push. This page is the v0 version of the loop. The [setup guide](setup-guide.md) covers the portable route, where any chatbot returns files and you upload them to GitHub yourself. Both routes end in the same place: a repository you own and a live URL.

Pick v0 if you want the fastest path from a sentence to a live page and you are comfortable with a React app you did not write line by line. Pick the portable route if you want one HTML file you can read top to bottom, or if the tested [examples](examples) are the starting point you want. Switching later is allowed; the GitHub repository is what persists.

## What v0 is, in one paragraph

v0 is Vercel's generative builder at v0.app. You describe a page or app in plain English, it writes a React (Next.js) project, shows you a live preview, and keeps a version for every change. It comes with a free Vercel account; sign in with GitHub so all three accounts are the same identity. The free tier has a monthly credit allowance; a day of class fits, but do not burn it on redesigns before the first version works.

## Set up the loop (10 minutes, during the setup block)

1. **GitHub first.** You already have an account from prep. If not, create one now at github.com; you will use the same email for everything today.
2. **Vercel, signed in with GitHub.** At vercel.com choose "Continue with GitHub." Authorize it. You now have a Vercel account linked to your GitHub identity.
3. **v0, signed in with Vercel.** At v0.app, sign in; it uses your Vercel account. Open a new chat.
4. **Connect v0 to GitHub.** Look in the project or chat menu for the GitHub option (it reads something like "Connect to GitHub," "Push to GitHub," or a GitHub icon). The first time, GitHub asks you to authorize v0 and choose which repositories it may touch. Choose "only select repositories" and let it create a new one named `my-first-site`. If the option is not there yet, come back to it after your first generation; some accounts only show it once a project exists.

Checkpoint: you can see an empty or starter repository named `my-first-site` at github.com/your-name, and Vercel's dashboard lists a project with the same name.

## Project 1 on v0: the personal website

Do steps 1 to 3 of the [personal website walkthrough](docs/personal-website-walkthrough.md) first: export LinkedIn, privacy pass, fill `resume-template.md` with your chatbot. v0 needs content, not a PDF.

**First generation.** Attach or paste your completed `resume-template.md` and, as a style reference, the tested [`examples/personal-website/index.html`](examples/personal-website/index.html). Then:

> Build a one-page personal website from the attached resume-template.md. Use only the facts in it; invent nothing and leave blank fields out. Match the structure and restraint of the attached index.html: header with name and nav, hero with name, headline, city, and three link buttons, About, Experience, Skills, Education, optional Projects, Contact with a mailto link, footer. Use the "slate" palette from the reference as CSS variables so I can change colors later. No contact form yet. No images. Fits a phone. Readable code with short comments.

Look at the preview. Check your name, your three roles, every link. Fix facts before you fix looks.

**Second generation, one change at a time.** Colors, then layout, then nothing else until it is live:

> Change only the colors: background #F6F3EE, text #1C2330, accent #0B6E4F. Change nothing else.

**Deploy.** Press v0's Deploy button (or "Publish"). It deploys through your Vercel account and gives you a URL ending in `.vercel.app`. Open it on your phone.

**Push to GitHub.** If you connected v0 to `my-first-site` during setup, your project is already there; if v0 offers to connect or push at any point, accept it then. Otherwise use the GitHub option now to push the project to `my-first-site`. Open the repository on github.com. You should see the files v0 wrote and a commit for them. That commit is the first line of your audit trail. From now on, every v0 version you push becomes a commit you can read, compare, and roll back. See [reading what the agent wrote](docs/agent-loop-and-pull-requests.md).

Checkpoint: a live URL on a classmate's phone, and a GitHub repository with at least one commit you can open and read.

## Project 2 on v0: the game

The game rules in [alien-tic-tac-toe.md](docs/alien-tic-tac-toe.md) and the theme you chose in [tic-tac-toe-variants.md](docs/tic-tac-toe-variants.md) are the same on every route. On v0, give it the rules file and your theme table, then build the same three increments as separate generations, and push each one to GitHub as its own commit or pull request:

> Read the attached alien-tic-tac-toe.md. Build only increment 1, the board screen, as described in the "Build increment 1" prompt in tic-tac-toe-variants.md, with my theme: I am [🐱], the opponent is [🐶]. Two temporary buttons stand in for the battle. Do not build the battle yet.

Then increment 2 (the battle, standalone), then increment 3 (connect them). After each one, check the behaviors listed under that increment in the variants page. The [tested checkpoints](examples/alien-tic-tac-toe) are single HTML files; if you fall behind on v0, download the checkpoint for your stage, create a repository for it on GitHub through the browser, and import it into Vercel. That is the portable route, and it takes ten minutes.

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

More recovery paths in [stuck.md](docs/stuck.md) and [troubleshooting.md](docs/troubleshooting.md).

## What to keep in the repository

The code, a `README.md` that says what the project is and how to run it, and your `project-state.md`. Never a password, API key, or token. If v0 or any agent asks you to paste one into the code, the answer is no; secrets go in Vercel's environment variable settings, and that is a later lesson.

## For the instructor

Menu labels above were written from general knowledge of v0 in 2026 and must be confirmed on a live account in [preflight](instructor/preflight.md) before class: the GitHub connect flow, the Deploy button, version restore, and the free-tier credit limit. Demonstrate the loop once on the projector before students try it.

<!-- END COURSE SOURCE: docs/v0-route.md -->


---

# Source file: docs/agent-loop-and-pull-requests.md

<!-- BEGIN COURSE SOURCE: docs/agent-loop-and-pull-requests.md -->

# Reading what the agent wrote: commits, diffs, pull requests, and saying no

> **For an AI receiving only this lesson:** When the learner asks you to make a change to a project that lives in GitHub, propose the change as a separate branch or a clearly separated version, describe exactly which files you changed and why, and never delete tests, checks, or files the learner did not mention. If asked to review a diff, read it for scope, secrets, and deleted safeguards before anything else.

Agents write code fast. The skill the workshop is about is directing that work and staying in charge of what ships. GitHub is where that happens. This page teaches the four things you need: read a commit, read a diff, use a pull request as the checkpoint, and roll back. Twenty minutes, right after your website is live.

## The loop, in two vocabularies

| Professional teams say | You did it today as |
| --- | --- |
| Prompt | Describe: the brief, the wireframe, the one-change prompt |
| Plan (the step most people skip) | Plan: the agent lists files, order, and three hand checks; you approve before anything is built |
| Generate | Build: the agent returns code |
| Commit | Save: the change lands in GitHub with a message |
| Review | Check: you read the diff and test the actual page |
| Deploy | Publish: Vercel ships the merged version to a live URL |
| Repeat | Repeat |

Same loop. The only new habit is that **review happens on the diff, before deploy**, not by squinting at the live site afterward.

## 1. Read a commit

Open your repository on github.com and click the commit count (it says something like "12 commits"). Each line is one saved change: a message, who made it, when. Click one.

Read in this order:

1. **The message.** It should say what changed and why in one line. "Update index.html" tells you nothing. "Add Education section from resume" tells you what to expect.
2. **The file list.** How many files changed? You asked for one section; if nine files changed, stop and ask why.
3. **The lines.** Green with a plus sign was added. Red with a minus sign was removed. Gray is unchanged context so you can see where.

Exercise, five minutes: open the commit that added your About section. Say out loud what was added, what was removed, and whether anything was touched that you did not ask for.

## 2. Read a diff like a supervisor, not a programmer

You do not need to understand every line. You need to answer four questions:

| Question | Red flag if |
| --- | --- |
| Did it touch only what I asked? | Files you did not mention are in the list, or the change is much bigger than the request. |
| Did it remove any safety? | A test, a check, a validation, an `if` that guarded something, or a whole file disappeared. |
| Is there a secret in it? | Anything that looks like a key, token, or password: long random strings, `sk-`, `key=`, `password:`. Stop immediately; that must never be in a repository. |
| Does it match the prompt I gave? | The agent "improved" something you did not ask about, or renamed things, or added a feature. |

If any row is red, you say no. Saying no is the job. Ask the agent to redo the change with only the requested scope, or restore the previous version.

## 3. The pull request is where a human stays in charge

A **branch** is a copy of the project where a change is made without touching the live version. A **pull request** (PR) says "here is the change on my branch; review it, then merge it into the main version." Merging triggers the deploy. Until you merge, nothing ships.

That makes the PR the natural checkpoint for agent work: the agent proposes, you review the diff with the four questions, you merge or you send it back.

**Exercise, during the game block.** Increment 1 of your game (the board) goes straight into `main`. Increment 2 (the battle) goes through a pull request:

- **On v0:** make increment 2 as a new generation, push it to GitHub, and when GitHub offers to open a pull request for the new branch, do it. If v0 pushed straight to `main`, that is fine today; open the commit instead and review it the same way.
- **On the portable route:** on github.com, open your game repository, press the branch dropdown, type `battle` and create the branch. Upload the increment-2 file to that branch. GitHub shows a yellow bar offering "Compare & pull request." Press it, write one sentence about what the change does, and create the PR.

Now review your own PR: the Files changed tab is the diff. Ask the four questions. Then press Merge. Vercel deploys the merged version; your live URL updates within a minute. Open the Deployments list in Vercel and see that the deploy is tied to that merge.

Checkpoint: a merged pull request in your game repository with a one-sentence description and a deploy that followed it.

## 4. Roll back

Nothing in GitHub is lost. Three ways back, from gentlest to bluntest:

1. **Restore a version in v0.** Every generation is a version; pick the earlier one and push again.
2. **Revert a commit on GitHub.** Open the bad commit or merged PR and press Revert. GitHub makes a new commit that undoes it. The history stays honest; nothing is erased.
3. **Redeploy an earlier deployment in Vercel.** In the project's Deployments list, open a previous successful deploy and promote it. The live URL points at the old version while you fix the new one.

Practice one of these today, on purpose, while nothing is at stake. The first time you need it for real should not be the first time you have done it.

## 5. Make the agent easier to supervise

Three habits cut your review time in half:

- **One change per request.** "Add the Education section. Change nothing else." Small diffs are readable diffs.
- **Ask for the plan first.** "Tell me which files you will change and why before you change them." Compare the plan to the diff afterward.
- **Keep instructions in the repository.** A short `AGENTS.md` (template in [templates/AGENTS.md](templates/AGENTS.md)) tells every agent, every session, what the project is and what it must never do: no secrets in code, no new dependencies without asking, keep it one page. The agent reads it so you do not have to repeat it.

## For developers in the room

This is the same discipline you would apply to a fast junior engineer: small PRs, a plan before code, review for scope and safety before style, tests as the gate, and revert without drama. Directing ten agents is directing ten such engineers; the PR queue is where you keep up. The [multiple agents](docs/multiple-agents.md) lesson adds a read-only reviewer agent as a second pair of eyes; it is a useful extension once the single-agent loop is boring.

## Vocabulary

| Word | Meaning today |
| --- | --- |
| Repository | Your project's folder on GitHub, with its whole history |
| Commit | One saved change with a message |
| Diff | The exact lines a change added and removed |
| Branch | A copy of the project where a change is made safely |
| Pull request | "Review this branch, then merge it" |
| Merge | Accept the change into the main version, which deploys |
| Revert | A new commit that undoes an earlier one |
| Deploy | Vercel putting a version on the live URL |

<!-- END COURSE SOURCE: docs/agent-loop-and-pull-requests.md -->


---

# Source file: docs/your-own-project.md

<!-- BEGIN COURSE SOURCE: docs/your-own-project.md -->

# Track B: build the thing you brought

> **For an AI receiving only this lesson:** The learner is building their own small project in one afternoon. Hold the scope to one screen, one form or input, one result. Refuse politely to add sign-in, databases, payments, or integrations in version 1; record them as "later." Return a plan before code, complete files when asked, and one change per request.

The workshop invitation said to bring a problem you have been meaning to solve: a tool for your team, a personal dashboard, a prototype you want to pitch. If you brought one, you can spend the afternoon on it instead of the game. Same loop, same gates, same deadline: a live URL by 4:35 and a pull request you reviewed yourself.

Choose Track B if you can say the idea in one sentence and it fits the scope rule below. If it doesn't fit yet, that's not a knock on the idea; most good ideas are too big for one afternoon. Do the game today, because it teaches the same loop, and come back to your idea next week with the [personal website](docs/personal-website-walkthrough.md) and [v0 route](docs/v0-route.md) pages as your guide. You'll be surprised how much of it you can do on your own by then.

## The scope rule: one screen, one input, one result

Version 1 is a single page where someone types or picks something and sees a useful result. Examples that fit:

- A meeting-cost calculator: attendees and hourly rate in, cost per minute out.
- A "which form do I need" chooser for your team: three questions in, the right link out.
- A checklist for an onboarding, inspection, or event, with progress saved in the browser.
- A one-page dashboard that shows numbers you paste in from a spreadsheet.
- A pitch page for the prototype, with a signup button that goes to a mailto link.

What waits for later, no matter how reasonable it sounds: sign-in, a database, payments, email sending, anything that calls another company's system, anything that stores other people's data. Write those in `project-state.md` under "later." Half of them you will not need.

## 12:45 to 1:40: brief and plan (with the game track's brief block)

Use [vc-project-brief](skills/vc-project-brief/SKILL.md) and [vc-project-scope](skills/vc-project-scope/SKILL.md). Fill the [website scope template](templates/website-scope.md). Then draw one wireframe: boxes and labels, the input at the top, the result below, one button. Paste both into your chatbot:

> Here is my brief, scope, and a wireframe. Version 1 is one screen, one input, one result, no sign-in, no database, no external services. Tell me the plan: which files you will create, what each does, and three checks I can perform by hand to know it works. Do not build yet.

Read the plan. Cut anything that is not on the wireframe.

Checkpoint: a brief with three observable checks and a plan with a file list you understand.

## 1:40 to 2:45: build increment 1

> Build the plan as described. Keep it to the files you listed. Plain, readable code with short comments. Fits a phone. Return the complete files.

On v0, this is one generation; press Deploy, then push to GitHub (see the [v0 route](docs/v0-route.md)). On the portable route, save the file, open it, then create the repository and import it into Vercel as in the [setup guide](setup-guide.md).

Checkpoint: the three checks from your brief pass on the live URL, not just on your laptop.

## 3:00 to 4:10: increment 2 through a pull request

Pick the one improvement that matters most to the person who would use this. Make it on a branch and open a pull request, as in [reading what the agent wrote](docs/agent-loop-and-pull-requests.md). Review your own diff with the four questions. Merge. Watch the deploy.

Then find a classmate who has never seen it and ask them to use it for two minutes without help. Write down the first thing that confused them. Fix that one thing, through another PR.

Checkpoint: a merged pull request and one change made because of a real person's confusion.

## 4:10 to 4:35: publish for real

Confirm the live URL on a phone. Add a `README.md` to the repository that says what the tool is, who it is for, and how to use it, in five lines. Record everything in `project-state.md`, including the "later" list.

## Taking it to work on Tuesday

- Put the repository under your organization's GitHub if it will be used by colleagues; your personal account is fine for a prototype.
- Before anyone else's data touches it, you need the things you deferred done properly: sign-in, storage, and a review by someone whose job is security. That is the "when to call a professional" line, and it is not a failure; it is the plan.
- The next thing to automate is whatever you did by hand twice today.

## If it stalls

Scope is almost always the problem. Cut to the smallest version that still produces a result, ship that, and record the rest. A live one-input tool beats a half-built dashboard. If it is 3:30 and nothing is live, switch to the [game checkpoint 3](examples/alien-tic-tac-toe/checkpoint-3-complete/index.html), publish it, and come back to your idea with the materials after class. More in [stuck.md](docs/stuck.md).

<!-- END COURSE SOURCE: docs/your-own-project.md -->


---

# Source file: website-starters/README.md

<!-- BEGIN COURSE SOURCE: website-starters/README.md -->

# Pick a starting point—or make your own

These are **optional, runnable websites**, not screenshots or prompts that still need to be built. Each starter is one `index.html` with its styles and any artwork included. Open it directly in a browser. No installation, remote images, paid services, or API keys are needed.

**Your choice comes first.** Use a starter as-is, give one a new theme, start with the plain page, or build your own small idea. You only make one website in class.

| Starter | Style and idea | The main action |
| --- | --- | --- |
| [Vanilla](website-starters/vanilla/index.html) | A completely plain white page with room for your idea | Jump to the next-step section |
| [All Things AI: Orbit](website-starters/ata-orbit/index.html) | Blue, orange, orbital line art, and crisp editorial type | Read a tiny creative challenge |
| [All Things AI: Groove](website-starters/ata-groove/index.html) | Dark ink, peach waves, lime accents, and oversized serif type | Try three creative changes |
| [Dream restaurant](website-starters/dream-restaurant/index.html) | Moonlight Noodle Club: your imaginary neighborhood favorite | Browse the sample menu |
| [Dream product](website-starters/dream-product/index.html) | Daylight: a desk lamp for your dream workspace | Explore where it belongs |
| [Dream business](website-starters/dream-business/index.html) | Good Company: a creative studio with personality | Read a project checklist |
| [Your pet](website-starters/pet/index.html) | Captain Pickles: a very important dog’s fan page | Explore a day in the pet’s life |

GitHub displays HTML source rather than running it. Download the course ZIP, extract it, and open `website-starters/index.html` for a visual gallery. Each card opens a working example. For a chatbot, provide the actual chosen `index.html`; the course pack explains the templates but does not contain their source files.

## Start in five steps

1. Choose a design—or choose “make my own.” Read [scope and plan](docs/scope-and-plan.md) with your AI before changing code.
2. For a starter, **copy its folder** into your separately identified website project. Keep the original course files as a recovery copy. If your project already has files, preserve a checkpoint before replacing anything.
3. Open the copied `index.html`. Try the navigation and main link so you know what already works.
4. Attach that file to your chatbot, along with the current skill. Ask for one change, get the complete file back, save it, and reopen it. See [file-saving instructions](docs/website-walkthrough.md#4-save-the-file-and-open-it).
5. When ready, upload the chosen website’s `index.html` at your website repository root and use the [publication guide](setup-guide.md#publish-each-project). Do not upload all seven starters or the gallery as your class website.

## First remix prompt

> I chose [starter / my own idea]. My intended visitor is [person], and the one thing I want them to do is [action]. Read the HTML I attached before changing it. Help me write a short brief, scope, and plan. Keep one page and three main sections. Preserve working navigation. Use my facts or clearly fictional examples. Build in small increments and return complete runnable files. Do not add a form, booking system, shopping cart, login, or database to this first version.

Try changing the headline, the theme colors, or one section. Then check the page at laptop and phone widths, follow every link, and use Tab and Enter to reach the controls. The starter READMEs suggest three small edits apiece.

## What is real here?

The navigation and section links work. The dream businesses and products are fictional. These pages do not take reservations, orders, payments, enquiries, or newsletter signups. A link to a menu or checklist is the intended action, not a pretend transaction.

The two All Things AI pages are explicitly labeled **unofficial classroom fan sites**. Keep that label while retaining the organization’s name. Their illustrations are original inline SVG and their text is sample fan commentary, not official announcements or claims about events. No official logo files or private site services are required.

These starters were checked locally; that does not verify your edited version or a Vercel deployment. After changing or publishing a page, repeat its checks.

<!-- END COURSE SOURCE: website-starters/README.md -->


---

# Source file: docs/scope-and-plan.md

<!-- BEGIN COURSE SOURCE: docs/scope-and-plan.md -->

# Decide what to build, then how to build it

Spend **10–15 minutes** on this exercise at the start of the website project. It fits inside the existing 90-minute website block; it is not an extra lesson added to the day. Your result is a small brief, a clear scope, and three build steps. Short notes are enough.

> **For an AI receiving only this lesson:** State which materials you received. Ask whether the learner is starting or continuing. Read their current files and project state before changing existing work. Ask for a named skill or starter if its contents are unavailable. Reuse answers already given and ask only for decisions that affect the result.

Three questions keep the work clear:

| Record | Question | Restaurant example |
| --- | --- | --- |
| Brief | Who is this for, and why? | A curious visitor wants to understand my fictional dream restaurant. |
| Scope | **What** belongs in this small first version? | One page, three sections, and a working View sample menu button. |
| Plan | **How** will we build and check it? | Add the content, connect the action, then improve phone layout and retest. |

## 1. Choose a starting point and purpose — about 3 minutes

Choose a starter **or your own idea/design**. You are building one website, not completing every template. A starter can save layout work, but you still decide its purpose and behavior.

| Starting point | File to inspect or copy |
| --- | --- |
| Vanilla | [website-starters/vanilla/index.html](website-starters/vanilla/index.html) |
| ATA Orbit | [website-starters/ata-orbit/index.html](website-starters/ata-orbit/index.html) |
| ATA Groove | [website-starters/ata-groove/index.html](website-starters/ata-groove/index.html) |
| Dream restaurant | [website-starters/dream-restaurant/index.html](website-starters/dream-restaurant/index.html) |
| Dream product | [website-starters/dream-product/index.html](website-starters/dream-product/index.html) |
| Dream business | [website-starters/dream-business/index.html](website-starters/dream-business/index.html) |
| Pet | [website-starters/pet/index.html](website-starters/pet/index.html) |
| My own | Begin with your brief and request complete runnable files. |

Open the actual starter in your browser before deciding what to keep. Copy the chosen files into your own `my-first-site` folder, preserving any supporting file paths; keep the course copy unchanged. A starter's example button or form is not evidence of a real business service. Inspect what it does.

Use [vc-project-brief](skills/vc-project-brief/SKILL.md) with this prompt:

> My first website is for [visitor]. They should be able to [outcome]. I want to start from [starter name / my own design]. Use what I have already told you and ask only for missing decisions. Write a short project-brief.md. Separate supplied facts from fictional practice content. Do not build yet.

For the worked example, invent **Moonlight Noodle Club**, a clearly fictional dream restaurant. The visitor should understand the dining idea and browse a sample menu. No real booking or ordering is promised.

## 2. Select the scope — about 5 minutes

Use [vc-project-scope](skills/vc-project-scope/SKILL.md) and the [scope template](templates/website-scope.md). Decide what earns a place in the first version.

| Category | Moonlight Noodle Club example |
| --- | --- |
| Must-have now | One page; concept, sample menu, and sample visit details; visible fiction label; a View sample menu button that scrolls to the menu. |
| Later | Another page about the imagined chef, more menu choices, or additional visual polish. |
| Out of scope for this project | Real reservations, orders, payments, customer accounts, and collected visitor information. |

The three main sections are **Concept**, **Sample menu**, and **Sample visit details**. Add a heading, navigation, and footer if useful; they do not need their own extra pages. Keep invented locations and hours visibly labeled as sample information.

> Use my brief to scope one page with three main sections and one primary action. Separate must-have, later, and out-of-scope ideas. For Moonlight Noodle Club, View sample menu must scroll to that section; the page must not claim to book a table. Write five checks a person can actually perform. Return a compact project-scope.md. Keep decisions we already made.

For this example, the five checks are:

1. A partner can explain the restaurant concept and identify the site as fictional practice.
2. All displayed menu and visit information matches the brief and is labeled as sample content where needed.
3. View sample menu reaches the menu section; it does not pretend to place an order or reservation.
4. Navigation reaches the named sections, and the main action can be reached and activated using the keyboard.
5. The page remains readable in a narrow browser window, with the primary action visible and usable. Record a real-phone check separately if performed.

If you want a real business action, name exactly what it needs to do. A supplied link to an existing booking service differs from building a new reservation system. Resolve that scope choice before code is generated; postpone it if it would consume the workshop. Do not invent a working service behind a decorative button.

## 3. Make a three-step plan — about 4 minutes

Use [vc-project-plan](skills/vc-project-plan/SKILL.md) and the [plan template](templates/website-plan.md). Carry the scope forward instead of interviewing yourself again.

| Increment | Build | Check before continuing |
| --- | --- | --- |
| 1. Content and structure | Heading, the three sections, and fiction label | Open the file and compare its content with the brief. |
| 2. Action and navigation | The menu button and links to the sections | Activate each link; confirm the right section appears and try keyboard access. |
| 3. Usability and finish | Readable spacing and phone layout | Narrow the window, then repeat the content and button checks. |

> Plan HOW to deliver this agreed scope in three small increments. Use my chosen starter if I supplied it; otherwise plan one complete index.html. For each increment name the result, expected files to change, and a visible check. Preserve any already-working parts. Keep later and out-of-scope features out. Return project-plan.md and the first build instruction.

Save the short records with your website files and identify the next step in `project-state.md`. If your assistant cannot write files, ask for the complete text to save yourself. The blank templates are optional conveniences; complete answers already in your conversation are enough to proceed.

**Ready to build:** you can name the visitor, the three sections, what the primary action really does, and the first increment's check. Continue with [vc-build-small](skills/vc-build-small/SKILL.md) and the [website walkthrough](docs/website-walkthrough.md). Check the actual result after each increment before expanding it.

<!-- END COURSE SOURCE: docs/scope-and-plan.md -->


---

# Source file: templates/website-scope.md

<!-- BEGIN COURSE SOURCE: templates/website-scope.md -->

# Website scope: what we will build

Fill this in briefly and save it in your learner website project as `project-scope.md`. Reuse your brief; do not repeat settled decisions. See the [scope and plan lesson](docs/scope-and-plan.md).

- Website name:
- Intended visitor and one useful outcome:
- Real activity or visibly fictional practice:
- Starter chosen, or my own design:
- My working folder/repository:

## First version

One page with three main sections:

1.
2.
3.

- Primary action label:
- Exact destination or visible result:
- Any demonstration-only behavior and its label:

| Must-have now | Later | Out of scope |
| --- | --- | --- |
| | | |

## Five acceptance checks

| Check | What I will do | What I expect to observe |
| --- | --- | --- |
| Purpose | | |
| Accurate or visibly fictional content | | |
| Main action: real result versus demonstration | | |
| Navigation and keyboard access | | |
| Narrow-screen usability | | |

Unresolved decision, if any:

Next step: plan the build increments using these agreed limits.

<!-- END COURSE SOURCE: templates/website-scope.md -->


---

# Source file: templates/website-plan.md

<!-- BEGIN COURSE SOURCE: templates/website-plan.md -->

# Website plan: how we will build and check it

Fill this in briefly and save it in your learner website project as `project-plan.md`. Use your existing brief and scope. See the [scope and plan lesson](docs/scope-and-plan.md).

- Website and input scope/version:
- Starting files or chosen starter:
- Own project folder/repository:
- Visitor's starting point and intended action:
- Three main sections in order:
- Style in a few words:

| Increment | Result to produce | Files expected to change | Action and expected observation |
| --- | --- | --- | --- |
| 1. Content and structure | | | |
| 2. Main action and navigation | | | |
| 3. Usability and finish | | | |

- Working behavior to preserve:
- Missing content, assets, or decision that affects this plan:
- First build instruction:
- Where I will save a working checkpoint:

Keep postponed features outside this plan. A planned check is not a passed test; record actual results after building.

<!-- END COURSE SOURCE: templates/website-plan.md -->


---

# Source file: docs/personal-website-walkthrough.md

<!-- BEGIN COURSE SOURCE: docs/personal-website-walkthrough.md -->

# Build a personal website from your LinkedIn profile

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is starting, continuing, or stuck, and ask for their resume text and `project-state.md` before writing any site content. Never invent jobs, dates, degrees, or employers. Never publish a phone number, street address, or birth date. Return complete runnable files.

Your first project is a website about the one subject you know best: you. LinkedIn already holds most of the content. You will export it, hand it to your chatbot with a tested starter, pick colors and a layout, publish it on Vercel, and then add features from the [skills menu](docs/website-skills-menu.md).

A finished, tested example lives at [`examples/personal-website/`](examples/personal-website). Open its `index.html` first so you know what "done" looks like. It belongs to a fictional person named Jordan Rivera; you are going to replace every word of it with your own.

Time budget inside the 90-minute website block: export 10, content 20, build 30, colors and layout 10, publish 20.

## 1. Get your content out of LinkedIn (10 minutes)

Pick the route that works on your laptop. Menu labels change; look for the words below.

**Route A, the quick PDF.** Open your own LinkedIn profile in a browser. Below your headline, find the **More** button (on some accounts it says **Resources**). Choose **Save to PDF**. A file like `Profile.pdf` downloads. This is your resume for today.

**Route B, the full export.** Click your photo, then **Settings & Privacy**, then **Data privacy**, then **Get a copy of your data**. Choose the smaller option that includes profile, positions, education, and skills. LinkedIn emails a link within about ten minutes; the archive contains CSV files you can attach instead of the PDF. Use Route B if Route A is missing from your menu, or if you want your skills list as text.

**No LinkedIn, or it will not export?** Open [`resume-template.md`](examples/personal-website/resume-template.md) and type your details in. Fifteen minutes of typing beats fifteen minutes of fighting a menu.

Checkpoint: you can open the PDF or the template and see your name, headline, and at least two roles.

## 2. Decide what stays private (5 minutes)

The site is public. Remove these before the chatbot sees your content, or tell it to leave them out:

- Phone number, street address, birth date
- ID numbers, salary, anything about health or family
- Email addresses you do not want strangers to use (create a dedicated one if you prefer)
- Anything a former employer would consider confidential

Keep: name, city, headline, work history with outcomes, skills, education, public links.

## 3. Turn the export into site content (20 minutes)

This step is content prep, no skill needed yet. Give your chatbot the resume PDF or the filled template, plus [`resume-template.md`](examples/personal-website/resume-template.md) so it knows the shape. (The [vc-project-brief](skills/vc-project-brief/SKILL.md) skill comes next, once the facts are right.)

> Read my attached resume and fill in resume-template.md with my real information only. Do not invent anything. Leave a field blank if the resume does not say. Rewrite each job as a title, employer, dates, and two or three bullets that state what changed because of my work, in plain English. Draft a three-paragraph About section in first person that sounds like a person, not a brochure. Leave out my phone number, street address, and birth date. Show me the result; do not build the site yet.

Read every line. Fix dates, fix titles, and cut anything that sounds like a press release. This is the only step where you are the expert and the chatbot is not.

Checkpoint: a completed `resume-template.md` with no placeholders and nothing you would not say out loud to a stranger.

## 4. Build the first version (30 minutes)

Use [vc-build-small](skills/vc-build-small/SKILL.md). Attach the example `index.html` and your completed template.

> Using the attached index.html as the exact structure and style, replace all of Jordan Rivera's content with mine from resume-template.md. Keep every id, every CUSTOMIZE comment, every ADD-ON SLOT comment, the theme and layout system, and the print stylesheet. Delete the Projects section if my template has nothing for it. Return the complete file.

Open the file by double-clicking it. Check it on your phone too if you can (send it to yourself).

Checkpoint: your name in the browser tab, your three roles visible, every link goes where it should, and nothing says "Jordan."

## 5. Choose your colors and layout (10 minutes)

The example has six color themes and two layouts built in. Try them with the picker in the footer, or add `?theme=forest&layout=sidebar` to the end of the address.

| Theme id | Feel | Good for |
| --- | --- | --- |
| `slate` | Navy and warm gray | Most professions; the safe default |
| `forest` | Deep green and cream | Health, education, sustainability |
| `sunset` | Coral and sand | Creative and people-facing roles |
| `ocean` | Teal and white | Technology, consulting |
| `mono` | Black, white, one accent | Design, writing, anyone who wants it quiet |
| `plum` | Purple and gold | Marketing, events, speakers |

| Layout | Use it when |
| --- | --- |
| `centered` | You have a lot of experience text and want it read top to bottom. Looks the same on phone and laptop. |
| `sidebar` | You want name, links, and skills always visible on a laptop. Collapses to centered on phones. |

Sketch first if you want to change more than the palette: [site-centered.svg](docs/wireframes/site-centered.svg), [site-sidebar.svg](docs/wireframes/site-sidebar.svg). Then one prompt:

> Set the theme to [ocean] and the layout to [sidebar] permanently, remove the footer picker, and change the accent color to [#0B6E4F]. Change nothing else. Return the complete file.

Want a palette that is actually yours? Pick one color you like, ask the chatbot for a background, text, and accent that pass contrast checks with it, and record the three hex codes in your project-state file so the next chat does not drift.

Checkpoint: the page looks the same after a reload with no `?theme=` in the address, and the footer picker is gone.

## 6. Check, save, publish (20 minutes)

Run [vc-quality-check](skills/vc-quality-check/SKILL.md), then [vc-publish-site](skills/vc-publish-site/SKILL.md). The GitHub and Vercel steps are in the [setup guide](setup-guide.md); do not improvise them.

Minimum checks before publishing:

1. Every link opens the right place, including the mailto link.
2. The page fits a phone with no sideways scrolling.
3. Print preview shows a tidy resume with no buttons.
4. Search the file for "Jordan", "Bright Harbor", and "example" and find nothing.
5. Nothing private is in the file, including in comments.

Checkpoint: a live `*.vercel.app` address that opens on someone else's phone. Record it in `project-state.md`.

## 7. Add features from the skills menu (the rest of the day, in increments)

Now the site becomes "cool." Each feature below is one small increment with its own check, using a skill from Mark's public skill repositories. Pick one at a time from the [website skills menu](docs/website-skills-menu.md):

- A contact form that actually sends
- A newsletter signup
- Copy that sounds like you and not like a chatbot
- An image prompt for a hero or background
- SEO so your name finds your site
- A UX and link check before you share it
- A LinkedIn post announcing it

The `ADD-ON SLOT` comments in the file mark exactly where each one goes. Finish one, check it, save it, then pick the next.

## If you fall behind

Download the finished example, replace only the hero and About sections with your own words, publish that, and record the rest as "next" in your project-state file. A live page with three sections beats a perfect page that is still on your laptop. More recovery routes are in [stuck.md](docs/stuck.md).

<!-- END COURSE SOURCE: docs/personal-website-walkthrough.md -->


---

# Source file: examples/personal-website/resume-template.md

<!-- BEGIN COURSE SOURCE: examples/personal-website/resume-template.md -->

# Resume template for the personal website

Fill in every field below. These are the exact fields `index.html` uses, in the order they appear on the page. Give the finished file to your chatbot with `index.html` and ask it to replace the sample content with yours.

Most of this comes straight from your LinkedIn PDF (LinkedIn profile → **More** → **Save to PDF**). The section names match.

## Basics (hero)

- **Name:**
- **Headline** (one line, what you do and for whom):
- **City, State:**
- **Email** (the one you want strangers to use):

## Links (2 or 3 buttons)

- **LinkedIn URL:**
- **Resume PDF file name** (save it next to index.html, or write "none"):
- **One more public link** (optional: portfolio, GitHub, company page):

## About (3 short paragraphs at most)

Paragraph 1 — what you do now and for how long:

Paragraph 2 — what you are good at or care about:

Paragraph 3 — something human (optional):

## Experience (3 roles, newest first)

For each role, write 2 or 3 bullets that say what changed because you were there. Start with a verb. Use a number when you have one.

### Role 1
- **Title:**
- **Employer:**
- **City:**
- **Dates** (year – year, or year – Present):
- **Outcome bullet 1:**
- **Outcome bullet 2:**
- **Outcome bullet 3** (optional):

### Role 2
- **Title:**
- **Employer:**
- **City:**
- **Dates:**
- **Outcome bullet 1:**
- **Outcome bullet 2:**
- **Outcome bullet 3** (optional):

### Role 3
- **Title:**
- **Employer:**
- **City:**
- **Dates:**
- **Outcome bullet 1:**
- **Outcome bullet 2:**
- **Outcome bullet 3** (optional):

## Skills (3 groups, 3 to 6 items each)

- **Group 1 name:**
  - Items:
- **Group 2 name:**
  - Items:
- **Group 3 name:**
  - Items:

## Education (degrees and certificates)

- **Degree or certificate:** / **School or organization:** / **Year:**
- **Degree or certificate:** / **School or organization:** / **Year:**

## Projects or Talks (2 items, optional)

Delete this section from the site if you have nothing here yet.

### Item 1
- **Name:**
- **What it was** (one sentence):
- **Result** (one sentence):

### Item 2
- **Name:**
- **What it was:**
- **Result:**

## Contact

- **Email** (same as above):

## Choices

- **Theme** (slate, forest, sunset, ocean, mono, plum):
- **Layout** (centered, sidebar):

---

## Do not publish

A personal website is public forever, including in search engines and AI training data. Leave these out of the site, out of this file, and out of anything you paste into a chatbot:

- Phone number
- Street address (city and state are enough)
- Birth date or age
- ID numbers of any kind (Social Security, driver's license, passport, employee ID)
- Salary, pay history, or pay expectations
- Personal email used for banking or recovery (use a public-facing address)
- Names of children or family members
- Anything your current employer has not made public (unreleased products, client names under NDA, internal numbers)

If your LinkedIn PDF contains any of these, cross them out before you share it with the chatbot.

<!-- END COURSE SOURCE: examples/personal-website/resume-template.md -->


---

# Source file: docs/website-skills-menu.md

<!-- BEGIN COURSE SOURCE: docs/website-skills-menu.md -->

# Ten skills to make your website better, one at a time

> **For an AI receiving only this lesson:** A skill is a set of instructions the learner pastes or installs. Follow the skill the learner gives you for the current task only. Ask for the current `index.html` before changing it. Return the complete file. Do not add a feature the learner did not ask for.

A **skill** is a short instruction file that teaches your chatbot how to do one job well. Mark publishes his under open source licenses in two public GitHub repositories. You do not need an account to read them.

- **aienterprise-skills**, by The AIE Network: <https://github.com/mrhinkle/aienterprise-skills>
- **VibeCoding-a-Website**: <https://github.com/mrhinkle/VibeCoding-a-Website>

Pick one feature. Load one skill. Make one change. Check it. Save it. Then pick the next. Do not load all ten at once; your chatbot will try to do all ten at once.

## How to load a skill

**Portable route, any chatbot** (ChatGPT, Claude, Gemini, Copilot, v0): open the skill's **raw** link below, select all, copy, and paste it into the chat with this line first:

> Use the following instructions as a skill for my next request. Read them, confirm what you will and will not do, then wait for my task.

Then attach your current `index.html` and give the task prompt from the table.

**Connected route, Claude Code or Cowork**: for aienterprise-skills, run these once and the skills are available by name:

```
/plugin marketplace add mrhinkle/aienterprise-skills
/plugin install aie-web@aienterprise-skills
/plugin install ai-slop-killer@aienterprise-skills
/plugin install aie-social@aienterprise-skills
```

For VibeCoding-a-Website skills, download the repository as a ZIP from GitHub and copy the folder you want from `.claude/skills/` into your own project's `.claude/skills/` folder.

Every skill here is read-only or edits only the files you hand it. None of them publish, send email, or post for you. Your chatbot may still ask for a form or email provider account; create accounts yourself and never paste a password or secret key into a chat.

## The menu

Each row is one increment. Checks are things you can see.

| # | Feature you get | Skill | Where it lives | Task prompt | Check |
| --- | --- | --- | --- | --- | --- |
| 1 | Your own colors, fonts, and look, recorded so they never drift | `site-customizer` | [raw](https://raw.githubusercontent.com/mrhinkle/VibeCoding-a-Website/main/.claude/skills/site-customizer/SKILL.md) · [repo](https://github.com/mrhinkle/VibeCoding-a-Website/tree/main/.claude/skills/site-customizer) | "Interview me about my brand, then write brand.md with my colors, font choices, and voice. Then apply only the colors and fonts to index.html." | The page uses your colors; `brand.md` lists the hex codes. |
| 2 | A headline and About section that sell without sounding salesy | `copy-editor` | [raw](https://raw.githubusercontent.com/mrhinkle/VibeCoding-a-Website/main/.claude/skills/copy-editor/SKILL.md) · [repo](https://github.com/mrhinkle/VibeCoding-a-Website/tree/main/.claude/skills/copy-editor) | "Review my hero headline and About section for clarity and a clear value proposition. Propose two alternatives for each. Do not change facts." | You can read the headline aloud in one breath and it says what you do for whom. |
| 3 | Writing that sounds like a person, not a chatbot | `ai-slop-killer` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/ai-slop-killer/skills/ai-slop-killer/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/ai-slop-killer) | "Run the anti-slop pass on every sentence of visible text in index.html. Show me each change and why. Keep my facts." | No "not X, it's Y," no triple lists, no "leverage," no em-dash pile-ups. |
| 4 | A prompt for a hero or background image you can make in any image tool | `brand-to-images` | [raw](https://raw.githubusercontent.com/mrhinkle/VibeCoding-a-Website/main/.claude/skills/brand-to-images/SKILL.md) · [repo](https://github.com/mrhinkle/VibeCoding-a-Website/tree/main/.claude/skills/brand-to-images) | "Using my brand.md, write one image prompt for a hero background and one for a social share image. No text in the images. No faces unless mine." | A generated image under 300 KB sits in your project folder and the hero shows it with alt text. |
| 5 | A contact form that actually delivers | `aie-web-forms` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-web/skills/aie-web-forms/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-web/skills/aie-web-forms) | "Replace the ADD-ON SLOT for the contact form with a working form using [Formspree / Web3Forms / my provider]. Labels, validation, a honeypot, and visible success and error messages. I will paste the form endpoint; never ask for a secret key." | Submitting the live form lands a test message in your inbox. |
| 6 | Your name finds your site in Google and in AI answers | `aie-web-seo` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-web/skills/aie-web-seo/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-web/skills/aie-web-seo) | "Audit index.html for SEO and answer-engine optimization for a personal site. Add a title, description, Open Graph tags, and Person schema (JSON-LD) using only facts from the page." | View source shows the tags; a search for your full name plus city shows the site within a few days. |
| 7 | Every link, image, and anchor works | `aie-web-links` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-web/skills/aie-web-links/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-web/skills/aie-web-links) | "Check every link, image, and in-page anchor in my live site at [URL]. List broken ones with the fix." | The report says zero broken; you clicked three at random to confirm. |
| 8 | A usability review from a stranger's point of view | `aie-web-ux` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-web/skills/aie-web-ux/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-web/skills/aie-web-ux) | "Review my site at [URL] as a recruiter on a phone with ten seconds. Score it and give me the three fixes that matter most." | You made the top fix and a classmate can find your email in under ten seconds. |
| 9 | The "does it actually work" gate before you share it | `aie-web-qa` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-web/skills/aie-web-qa/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-web/skills/aie-web-qa) | "Run a pre-launch QA pass on [URL]: pages, links, form, mobile, console errors, accessibility basics. Severity-rated list with steps to reproduce." | No high-severity items remain; the rest are in `project-state.md` under "later." |
| 10 | A LinkedIn post that announces the site in your voice | `aie-social-linkedin` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-social/skills/aie-social-linkedin/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-social/skills/aie-social-linkedin) | "Draft a LinkedIn post announcing my new personal site at [URL]. Use only what is true about what I built today. Give me three first lines to choose from. Do not post it." | You read it, cut one sentence, and it still sounds like you. Posting is your choice; see [linkedin-wrap-up.md](docs/linkedin-wrap-up.md). |

## Alternates, if a row above does not fit

| Feature | Skill | Where it lives |
| --- | --- | --- |
| A newsletter signup wired to Beehiiv or Resend | `form-wiring` | [raw](https://raw.githubusercontent.com/mrhinkle/VibeCoding-a-Website/main/.claude/skills/form-wiring/SKILL.md) |
| Security self-check: exposed keys, headers, HTTPS | `aie-web-security` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-web/skills/aie-web-security/SKILL.md) |
| Faster load, better Core Web Vitals | `aie-web-performance` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-web/skills/aie-web-performance/SKILL.md) |
| Guided GitHub to Vercel deployment | `deploy-to-vercel` | [raw](https://raw.githubusercontent.com/mrhinkle/VibeCoding-a-Website/main/.claude/skills/deploy-to-vercel/SKILL.md) |
| Change text or add a page after launch | `site-updater` | [raw](https://raw.githubusercontent.com/mrhinkle/VibeCoding-a-Website/main/.claude/skills/site-updater/SKILL.md) |

## The rule for every increment

1. Save a copy of `index.html` before the change (commit, or a dated copy).
2. One skill, one task, one complete returned file.
3. Open it. Do the check in the table. If it fails, say exactly what you saw and ask for the smallest fix.
4. Record the change and the check in `project-state.md`.
5. Publish only what passed.

Where the feature goes in the file is marked for you:

```html
<!-- ADD-ON SLOT: contact form (see docs/website-skills-menu.md) -->
<!-- ADD-ON SLOT: newsletter signup -->
<!-- ADD-ON SLOT: blog or posts list -->
<!-- ADD-ON SLOT: testimonials -->
```

Tell the chatbot the slot name and it will put the feature in the right place.

## Licenses

aienterprise-skills and VibeCoding-a-Website are published under open source licenses; see each repository's `LICENSE` file and this course's [licenses folder](licenses/README.md). You may use them in your own projects after class.

<!-- END COURSE SOURCE: docs/website-skills-menu.md -->


---

# Source file: docs/website-walkthrough.md

<!-- BEGIN COURSE SOURCE: docs/website-walkthrough.md -->

# Build and publish your first website

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

This walkthrough takes a fictional one-page website from a short brief to a checked Vercel URL. Use your favorite chatbot. You will receive actual files, open them yourself, save them in your own GitHub repository, and publish the checked version. The course repository contains instructions; your website belongs in a separate project.

Allow about 90 minutes during class. Start with [the course entry point](START-HERE.md) and complete the [account and connection guide](setup-guide.md). If something stops working, follow the matching symptom in [troubleshooting](docs/troubleshooting.md). The instructor must prepare any recovery checkpoint mentioned there before class; a tested starter is not automatically supplied by these instructions.

**Prefer a ready-made starting point?** Choose one of the [seven website starters](website-starters/README.md), or make your own. This reading-club example remains an optional from-scratch walkthrough. Use [scope and plan](docs/scope-and-plan.md) and `vc-project-scope` between the brief and build plan; when adapting a starter, inspect its actual HTML before changing it.

## Continuing from a starter or your own plan

If you already finished [scope and plan](docs/scope-and-plan.md), keep your chosen project and skip the Riverbend brief and planning prompts below. Give `vc-build-small` your current HTML, agreed brief/scope/plan, and first unfinished increment. Use this prompt:

> Continue my chosen website from the attached files and plan. Make only the next agreed increment, preserve what already works, and return the complete updated index.html. Do not replace my topic or copy with the Riverbend example. Tell me the visible check to perform.

Then use [step 4 to save and open the file](#4-save-the-file-and-open-it), followed by the checking and publishing steps. In later sample prompts, keep your own topic, content, and agreed styling. If starting from scratch with Riverbend, follow the numbered steps below.

## The example you will build

**Riverbend Reading Club** is a fictional community group. Its page helps a visitor understand the club and find the next practice gathering. Use this content or replace it with a similarly small idea.

| Part | Example content and behavior |
| --- | --- |
| Heading | Riverbend Reading Club |
| Introduction | A fictional neighborhood club for people who enjoy talking about books. |
| About section | We choose one short book each month and welcome different opinions. |
| Next gathering section | Practice event: Saturday, November 14, 2026, at 10 a.m., at the fictional Riverbend Community Room. |
| What to bring section | Your book, a question, and one passage you would like to discuss. |
| Main action | A button labeled View the next gathering scrolls to the gathering section. |
| Footer | Classroom practice project. The group, venue, and gathering are fictional. |
| Appearance | Large readable type, cream background, dark blue headings, a simple book-shaped decoration. |

There is no signup form, real booking, payment, database, or email delivery. The main action works entirely within the page. That gives you a meaningful behavior to check without depending on another service. Keep the fiction label visible when publishing.

## 1 Make a folder and record where you are working

1. On your computer, create a folder named `my-first-site` somewhere you can find it again, such as inside Documents. Use your file manager's normal new-folder action.
2. Keep your future game in a different folder named `my-first-game`.
3. Open your own GitHub website repository. Check the owner and name at the top of the page. Copy its URL into your notes. Do not upload student files to Mark's course repository.
4. Start a project-state note using [the project state template](templates/project-state.md). Record the folder, repository, preferred chatbot, and current stage: “writing the website brief.” Record unknown information as unknown.

**Checkpoint:** you can point to the local website folder and the matching GitHub repository. If they do not exist yet, use the [setup guide](setup-guide.md) before continuing.

## 2 Write a brief before asking for a website

Open [vc-project-brief](skills/vc-project-brief/SKILL.md). Copy or attach its instructions to your chatbot, followed by this prompt:

> Use the attached project-brief skill. I am a beginner making a fictional Riverbend Reading Club website for class. Make a one-page brief using the example content below. The primary action is a button that scrolls to the next gathering section. Keep the group and event clearly fictional. No signup, payment, accounts, database, or email sending. Give me five observable completion checks. Do not build yet. Here is the content: [paste the example table or your own content].

Read the response. Correct any invented features or changed facts. Save the agreed brief as `project-brief.md` in your website folder, or keep the same text in your workbook until you can save it. A `.md` file is a plain-text document with simple formatting marks.

Use [vc-project-scope](skills/vc-project-scope/SKILL.md) to save the one-page scope, its primary action, must-have/later/out-of-scope lists, and five checks. Reuse the brief rather than starting another interview. Then use [vc-project-plan](skills/vc-project-plan/SKILL.md) with the brief:

> Plan this as one static page. List the sections in order and explain what each link or button does. Use one complete index.html with the styles included and a simple decoration that needs no downloaded image. Give me a small build plan that fits this class. Do not add a framework or server.

**Checkpoint:** you can explain the visitor's goal and the exact action of the main button without reading code. Keep only the sections you need.

## 3 Ask for a complete file

Open [vc-build-small](skills/vc-build-small/SKILL.md), provide the agreed brief and plan, and use this prompt:

> Build the first version from this brief. Return one complete runnable index.html with its CSS included. It must work when I open that file in a browser, without installing anything or starting a server. Use the exact example copy, keep the fiction label, and make View the next gathering move to the correct section. Make it usable on a phone. Provide the actual file or its complete contents, not only an image or preview. Explain how I can check the result and say which checks you actually performed.

If you use a connected coding workspace, first ask it to identify the repository, branch, and existing files. Make sure the answer names your website. Ask it to preserve existing work and show the proposed change. If it cannot access the repository, the portable file route still works.

**Checkpoint:** you have a file named `index.html` or the complete text to put in that file. A screenshot, a share link to a chatbot conversation, or a statement that the page is done does not meet this checkpoint.

## 4 Save the file and open it

Prefer the chatbot's file download when available. Save it inside `my-first-site`. If it provides a ZIP archive, extract it and find the actual `index.html`. Do not rename a ZIP to HTML.

If you receive code as text, copy only the file contents. Leave out the surrounding explanation and the opening or closing triple-backtick lines.

### Save plain text on a Mac

1. Open TextEdit and create a new document.
2. Choose **Format → Make Plain Text** before pasting the code.
3. Paste the complete file text, choose **File → Save**, and name it `index.html` in `my-first-site`.
4. If asked which extension to use, choose **Use .html**.

For later code edits, TextEdit can display HTML as code rather than a formatted page. Follow Apple's “View an HTML document as code” instructions. These steps were checked October 5, 2026. [Apple TextEdit HTML guide](https://support.apple.com/guide/textedit/txted0b6cd61/mac)

### Save plain text on Windows

1. Open Notepad or a plain-text editor you already use. Paste the complete file contents into a new document.
2. Save a copy in `my-first-site` with the intended name `index.html`.
3. In File Explorer, show the full filename. Microsoft's current documented path is **View → Show → File name extensions**; older versions may arrange the option differently.
4. If the plain-text file is named `index.html.txt`, rename that copy to `index.html` and confirm the intended extension change. This is appropriate for plain HTML text; renaming a Word or rich-text document does not convert it into HTML.

The filename guidance was checked October 5, 2026. [Microsoft file extensions guide](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows)

### Open the saved result

1. Locate `index.html` in the website folder.
2. Open it with your web browser. If double-clicking opens an editor, use your file manager's Open with action and choose the browser.
3. Check the address bar: a local file address means you are viewing the file on this computer, not a public website.
4. Compare the page with the brief. Click View the next gathering and watch whether the correct section appears.

**Checkpoint:** the browser shows the page and the main button works. Save a copy of this working folder as a clearly named checkpoint outside the folder you will upload, for example `my-first-site-checkpoint-01`. This is your own saved copy, not an instructor-provided starter.

## 5 Improve one thing and test it

Use [vc-quality-check](skills/vc-quality-check/SKILL.md) and report what you actually see:

> I opened the exported file in [browser]. I expected [specific outcome]. I observed [specific result]. Here is the current index.html and the brief. Identify the smallest likely repair, explain it in plain language, and return the complete corrected file. Preserve the working content and button behavior. Tell me what to repeat in the browser; do not mark it passed until it has been observed.

Save the returned file over the active website file only after retaining your checkpoint. Reopen that exact file. Do not assume a newer chatbot preview means the downloaded file changed.

Record these checks in `test-report.md` or your [workbook](handouts/student-workbook.md):

| Try this | Expected observation |
| --- | --- |
| Ask a partner what the page is for | They identify a fictional reading club and its gathering. |
| Read the page against the brief | The dates, wording, and fiction label match. |
| Activate the main button | The next gathering section comes into view. |
| Follow every navigation link | Each reaches the stated section or destination. |
| Make the browser narrow | Text is readable and content does not disappear sideways. |
| Use Tab, then Enter on the main action | You can find the focused action and activate it. |

A narrow browser is a useful layout check. It is not proof that a real phone's touch controls were tested. Mark device checks you have not done as **Not tested**.

## 6 Save the checked version to GitHub

1. Open the correct learner-owned repository and inspect the selected branch.
2. Choose **Add file → Upload files**. Select the actual `index.html` and any supporting files; do not upload only the ZIP. For this example, `index.html` belongs directly in the repository root, where the README is listed.
3. Review the filenames and write a meaningful commit message, such as “Add checked reading club practice page.”
4. Review the current-branch or new-branch choice. If using a new branch and pull request, inspect the proposal and merge it into the intended deployment branch before importing that version.
5. After saving, open `index.html` on GitHub and confirm a distinctive sentence from your checked version. Record the saved commit or checkpoint in your project state.

GitHub's upload labels and workflow were checked October 5, 2026. [Official file upload guide](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

**Checkpoint:** GitHub contains the checked file at the expected location. After a Vercel connection exists, changes to the production branch can publish automatically. Use a separate branch for later changes you want to review first.

## 7 Publish and verify the public result

Use [vc-publish-site](skills/vc-publish-site/SKILL.md) and the exact steps in [Publish each project](setup-guide.md#publish-each-project). Identify the Vercel account or team, repository, source version, and project before deploying. Use the class's agreed hosting arrangement.

For this plain static example, use the **Other** framework preset and an empty overridden Build Command. The output must be the folder containing `index.html`; the recommended example uses the repository root and has no `public` folder. If your project differs, inspect it before choosing settings. [Vercel build configuration, checked October 5, 2026](https://vercel.com/docs/builds/configure-a-build)

> Help me publish this checked static website to my own Vercel project. First show the repository, source version, entry file, root, build settings, and intended audience. Follow the course setup guide. I will complete account authorization myself. After publication, guide me through opening the actual deployment URL and repeating the main action and layout checks. Distinguish your observations from mine.

The first deployment is production under the course's documented flow. A private repository does not by itself make the website private. Open the URL from the actual completed deployment and have a partner open it too. A working local file is not proof of a working deployment.

**Checkpoint:** record the URL, version, actual observations, and remaining limitations in `release-record.md`. If publication is blocked, keep the working files and precise error. Update your project-state note before starting the game.

<!-- END COURSE SOURCE: docs/website-walkthrough.md -->


---

# Source file: docs/game-options.md

<!-- BEGIN COURSE SOURCE: docs/game-options.md -->

# Choose your classroom game

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is choosing a game, continuing one, or stuck. Request the current `project-state.md` and actual files before changing an existing project. Do not claim to have read a linked lesson that was not available.

Choose **one** game for the second project. Use your favorite chatbot and the same [seven game skills](game-skills-guide.md): brief, rules, build, appearance, feedback, playtest, and publish. The website remains your first project, and the class remains 360 teaching minutes plus breaks. These options replace each other within the game block; they are not three additional assignments.

The instructions below describe projects to build. They are not tested starter applications. The instructor should rehearse the offered choices and prepare a recovery checkpoint for each before class.

| Choice | What the player does | Why choose it? | Main thing to test |
| --- | --- | --- | --- |
| **Featured: Alien Tic-Tac-Toe** | Chooses a board cell and wins or loses a short alien battle to determine its mark. | A distinctive game that combines a familiar board with a small battle system. | Battle outcomes award exactly one cell and end the board correctly. |
| **Five-question quiz** | Answers one question at a time, sees feedback, and tries again. | The simplest complete worked example, with predictable tests and no movement. | One answer scores once; final scores and replay are correct. |
| **One-button space dodger** | Taps or presses a key to rise between obstacles. | A visual action game with one control and a theme you can customize. | Motion, collisions, scoring, and restart work consistently. |

All three can use plain static HTML, CSS, and JavaScript in a separate learner-owned game repository and Vercel project. Keep accounts, multiplayer, databases, global leaderboards, payments, and external asset libraries outside the core exercise.

## Featured game Alien Tic-Tac-Toe

[Open the full Alien Tic-Tac-Toe walkthrough](docs/alien-tic-tac-toe.md).

This is **Mark's new concept**, not an existing title in the All Things AI Arcade. You select an empty cell on a three-by-three board and fight for it. A battle win places X; a loss places O. No automatic opponent move follows. A line of X wins, a line of O loses, and a full board with no line draws.

Each battle starts with two health points for each side. The alien shows Laser, Shield, or Claw; the corresponding correct responses are Shield, Blast, and Dodge. A correct response damages the alien by one point; an incorrect response damages you by one. Answer once, then use Next exchange if neither side has reached zero. A battle ends after two or three exchanges, and its selected cell is resolved exactly once.

Restart game remains available during active play and immediately clears both the whole board and any battle in progress. You cannot abandon only a losing battle while retaining earlier marks.

Build in three increments: **board first, battle second, connected game third**. This gives you checkpoints that can be checked separately. Use simple shapes and ordinary keyboard/touch buttons. There are no timers or external assets in the first version.

> Help me build Alien Tic-Tac-Toe using its walkthrough. Start with the brief and exact rules. Preserve the solo battle-for-a-cell mechanic: no automatic opponent move, one resolved battle per selected cell, immediate terminal outcomes, and a fresh board on replay. Plan the board, battle, and integration as separate checked increments.

Choose it if you want to learn how two small systems connect. Keep the scope disciplined: visual effects, randomized enemies, upgrades, and additional attack types can wait.

## Five-question quiz

[Open the full quiz walkthrough](docs/game-walkthrough.md).

Riverbend Club Quiz asks five questions about a fictional reading club. Each question accepts one answer, shows an explanation, and then offers Next. After the fifth question, it displays the score out of five and Play again. The walkthrough supplies the question content and exact answer sequences for scores of 5, 0, and 3.

The quiz adapts the broader Arcade pattern of short instructions, clear results, and replay, with Promptle as inspiration. It does not copy Promptle's word-guessing rules or source code. You can change the theme after the basic game works, provided any factual teaching content is verified.

> Help me build the five-question quiz from the worked lesson. Keep its supplied question order and scoring rules. Return complete runnable files. Build the start, answer, feedback, next-question, result, and replay flow before adding decoration. Use the exact known-answer tests.

Choose it if finishing a small complete game is your priority. It is also a useful scope reduction if a more complex game is consuming the class period; save the earlier work and record the change of plan rather than pretending both were completed.

## One-button space dodger

Use the one-button recipe in the [game skill guide](game-skills-guide.md), inspired by the Arcade's Flappy Brains pattern. The space theme is a new classroom variation, not a claim that the Arcade contains a game with this exact name.

Define the first version before building:

1. A small spaceship falls gently unless the player taps a visible control or presses Space to rise.
2. Obstacles approach with generous gaps. Passing one obstacle earns one point, once.
3. A visible collision ends the round and shows the score and Play again.
4. Replay resets ship position, obstacles, score, and movement. Repeated restart must not add extra animation loops.
5. Instructions hold the game idle before Start. Motion should be consistent across devices and handle returning from a background tab without an unavoidable loss.

Use simple geometric shapes and no sound in the first build. Do not add physics libraries, downloaded sprite packs, multiple worlds, or a separate countdown timer merely for polish.

> Use the game-brief and game-rules skills to plan a one-button space dodger. Use tap or Space to rise, generous obstacle gaps, one point per obstacle passed, a visible collision result, and immediate replay. Define start, movement, collision, score, and reset checks. Use simple shapes and portable static files. Do not build until the rules are clear.

After the first playable file is exported, test one tap versus a held key, each obstacle's single score, a visible collision, three restarts, phone controls, and returning after a tab switch. This option has more movement behavior to diagnose than the quiz. Mark checks not performed honestly.

## Make the choice and save it

1. Record your choice and its small first version in `game-brief.md`.
2. Identify the separate game folder, repository, and current stage in [project state](templates/project-state.md).
3. Read the relevant walkthrough and give the chatbot its current skill plus the actual files as you progress.
4. Keep a tested checkpoint before adding a new mechanic or changing the visual theme.
5. Use [troubleshooting](docs/troubleshooting.md) if behavior differs from the rules. Ask for one focused repair rather than starting a different game automatically.

Your final demonstration is the same for every choice: explain the goal, complete a round, show the result, replay, and identify the version and checks behind your claim that it works.

If you want to share the finished game with the All Things AI Arcade, read the [optional Arcade submission guide](docs/arcade-submission.md) after completing the class checks. Follow its separate review and authorization process; publishing to your own Vercel project does not submit the game automatically.

<!-- END COURSE SOURCE: docs/game-options.md -->


---

# Source file: docs/alien-tic-tac-toe.md

<!-- BEGIN COURSE SOURCE: docs/alien-tic-tac-toe.md -->

# Build Alien Tic-Tac-Toe

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Alien Tic-Tac-Toe is Mark's new classroom game concept: choose a square, fight a short alien battle, then claim that square as X or lose it to O. It is not an existing All Things AI Arcade title. This walkthrough is a specification and set of build instructions; it does not establish that the application exists, has been tested, or has been rehearsed in class.

Use your favorite chatbot and the seven [game skills](game-skills-guide.md). Keep the game in its own folder, GitHub repository, and Vercel project, separate from your website. The first version uses plain HTML, CSS, and JavaScript, ordinary buttons, and simple shapes. It needs no timer, account inside the game, backend, downloaded art, paid API, or sound.

If you would prefer a shorter ruleset, choose the [five-question quiz](docs/game-walkthrough.md). See [all three game choices](docs/game-options.md) before starting. The instructor should rehearse each offered option and prepare a tested recovery checkpoint; these instructions do not supply a hidden starter application.

## What you are making

This is a **solo variant** of tic-tac-toe. You choose every square. A short battle determines who receives it.

1. Start with an empty three-by-three board.
2. Select an empty cell. That cell becomes the pending battle location and the whole board locks.
3. Win the battle to put **X** in the selected cell. Lose the battle to put **O** there.
4. There is **no automatic opponent move**. One finished battle fills exactly one cell.
5. Three X marks in any row, column, or diagonal wins the board. Three O marks loses it. A full board with neither line is a draw.
6. If the board is not finished, return to it and choose another empty cell. If it is finished, use Play again to start a new empty board.
7. During active play, an always-available **Restart game** button abandons the whole board immediately and returns to an empty board. It also clears any battle in progress. It does not let you cancel only one battle while keeping earlier marks.

Winning a battle is different from winning the board. A battle might give you the first X of a line; it does not end the whole game unless that placement completes a line or fills the board.

Use these cell names in your notes and tests:

| | Column 1 | Column 2 | Column 3 |
| --- | --- | --- | --- |
| Row 1 | Cell 1 | Cell 2 | Cell 3 |
| Row 2 | Cell 4 | Cell 5 | Cell 6 |
| Row 3 | Cell 7 | Cell 8 | Cell 9 |

The winning lines are **1–2–3, 4–5–6, 7–8–9, 1–4–7, 2–5–8, 3–6–9, 1–5–9, and 3–5–7**.

## The battle rules

Every battle starts with **2 player health points and 2 alien health points**. Display health as text such as “You: 2 of 2” and “Alien: 2 of 2”; icons may reinforce it. Do not make the player infer health from color alone.

The alien announces its move. You choose one of three response buttons:

| Alien shows | Correct response | Result of a correct response |
| --- | --- | --- |
| Laser | Shield | Alien loses 1 health point. |
| Shield | Blast | Alien loses 1 health point. |
| Claw | Dodge | Alien loses 1 health point. |

Any other response costs the **player** 1 health point. Exactly one side loses exactly one point per accepted response. There is no extra automatic retaliation, simultaneous damage, healing, or random damage.

For the first classroom version, use **Laser → Shield → Claw**, starting again at Laser for every new battle. This predictable sequence makes the rules and tests easy to reproduce. The correct responses are therefore **Shield → Blast → Dodge**. Randomized alien moves can be a later extension after the basic loop works.

After a response, disable all response buttons and show what happened. If both sides still have health, show an explicit **Next exchange** button. The next alien move and fresh response buttons appear only when the player activates it. Do not reuse the answer click to advance an exchange.

If the alien reaches zero health, the battle ends immediately with a win. If the player reaches zero, it ends immediately with a loss. Do not show Next exchange after either terminal result. A battle needs two or three exchanges at most: with one health point lost on every exchange, someone must have lost both points by the third. No separate “round limit draw” is needed.

When a battle ends, fill the pending cell **exactly once**, then immediately evaluate the board. If the board continues, a short summary can offer **Return to board**. If the placement ends the board, show **You won**, **The aliens won**, or **Draw** immediately and offer **Play again**. Acknowledging a summary must never place a second mark.

## 1 Prepare the project and brief

1. Create or locate your `my-first-game` folder and learner-owned GitHub repository. Check their names before giving an assistant permission to edit. Keep your website separate.
2. Start a `project-state.md` note from [the state template](templates/project-state.md). Record “Alien Tic-Tac-Toe,” the destination, and the current stage.
3. Open [vc-game-brief](game-skills/vc-game-brief/SKILL.md) and give it to your chatbot with this lesson.
4. Use the prompt below. Read the returned brief and correct any unwanted rules before building.

> Write game-brief.md for Alien Tic-Tac-Toe using this lesson exactly. It is a solo three-by-three board. Selecting an empty square locks the board and starts a battle for that square. A battle win places X; a loss places O. No separate automatic opponent move occurs. X line wins, O line loses, full board without a line draws. Battles use 2 health each, the stated Laser/Shield/Claw counters, one accepted response per exchange, and explicit Next exchange between nonterminal responses. Exclude timers, logins, backend services, downloaded assets, and sound. Give me observable completion checks. Do not build yet.

**Checkpoint:** you can explain how a square is awarded and why the alien does not take another turn afterward. Save the agreed brief.

## 2 Describe the states and controls

Use [vc-game-rules](game-skills/vc-game-rules/SKILL.md). A state is simply the situation the game currently remembers and the actions it allows.

| State | What the player sees | Allowed action and result |
| --- | --- | --- |
| Instructions | Goal, counter table, Start | Start opens the empty board. Nothing progresses beforehand. |
| Choose a cell | Board and “Choose an empty square” | One empty cell starts one battle and locks all cells. |
| Choose a response | Pending cell, health, announced alien move | One response applies one damage result and locks responses. |
| Exchange feedback | Correct/incorrect explanation and updated health | Next exchange is available only while both sides have health. |
| Battle finished, board continues | Awarded cell and battle summary | Return to board unlocks only empty cells; no further mark is placed. |
| Board finished | Final board, winning line or draw, result | Play again clears the entire board and returns to cell selection. |
| Any active board or battle state | A clearly labeled Restart game button | Restart game immediately clears the entire board, pending cell, health, exchange, selected response, and feedback; it returns to empty-cell selection. |

Use standard buttons for cells, responses, Start, Next exchange, Return to board, Restart game, and Play again. They must work with touch or mouse, and with keyboard Tab plus Enter or Space. Show visible keyboard focus. Give cells readable labels such as “Row 1, column 2, empty,” then update the label when occupied. Keep Restart game reachable during both battle input and battle feedback; label that it clears the whole board.

Reopening instructions must preserve the pending cell, health, accepted response, and board. While help is open, hide or disable gameplay controls except Restart game, which must remain reachable. Closing help must not count as a move. There is no cancel-a-single-battle option: finish the battle to resolve its cell, or use Restart game to abandon all progress and begin an empty board.

> Use the game-rules skill to turn this brief into game-rules.md. Include the state table and exact allowed actions. Keep the board locked during battle and while battle feedback is being acknowledged. Reject occupied cells. Accept each response once and resolve each battle once. On zero health, resolve immediately; never wait for another exchange. Check lines before declaring a full-board draw. Specify keyboard, pointer, and touch behavior and what Play again resets. Keep Restart game available throughout active play; it abandons and resets both the board and battle immediately, with no mark awarded from the abandoned fight.

**Checkpoint:** a partner can describe Start → choose a cell → battle → mark → continue or result → restart from the rules. Save the rules before asking for code.

## 3 Build the board first

Ask [vc-game-build](game-skills/vc-game-build/SKILL.md) for a small **board prototype**. Keep it in a clearly named prototype folder outside your final upload folder. This is a temporary testing step, not the finished game.

> Build a plain board prototype as one complete index.html. It must open directly in a browser without installation. Implement empty and occupied cells, selecting one pending cell, locking the board, detecting all eight winning lines, and Play again. For this prototype only, provide clearly labeled Test battle win and Test battle loss buttons to resolve the pending cell as X or O. Show only one accepted resolution. These temporary controls must be removed when the real battle is integrated. Use normal accessible buttons and simple text. Return the actual complete file and tell me which checks I must perform.

1. Save and open the complete file using [the Mac and Windows file instructions](docs/website-walkthrough.md#4-save-the-file-and-open-it).
2. Select cell 1. Try selecting cell 2 before resolving; it should have no effect.
3. Use Test battle win once. Only cell 1 should become X. Repeat the control or select the occupied cell; neither should change the board.
4. Use test outcomes to check an X line, an O line, and the draw pattern below.
5. Use Play again and confirm all nine cells are empty.

**Checkpoint:** save a separate working copy named `alien-board-checkpoint-01`. Record what you actually tested. If the board rules fail, fix them before adding the battle.

## 4 Build and check the battle separately

Make a second prototype in a different folder so it cannot overwrite the board checkpoint.

> Build a standalone battle prototype from game-rules.md. Return a complete directly openable index.html. Start each battle with player health 2 and alien health 2. Show Laser, then Shield, then Claw only as needed. The counters are Shield, Blast, and Dodge respectively. Correct damages only the alien by 1; incorrect damages only the player by 1. Lock all responses after one choice. Use an explicit Next exchange button only when both still have health. At zero health, end immediately and show a win or loss with no further damage or exchange. Provide Restart battle for this prototype. No timers, random damage, or automatic retaliation.

Try these exact sequences, activating Next exchange only when it appears:

| Test | Your responses | Expected outcome |
| --- | --- | --- |
| Two correct | Shield, Blast | Win after exchange 2; player health 2, alien health 0. |
| Two incorrect | Blast, Shield | Loss after exchange 2; player health 0, alien health 2. |
| Win on third | Shield, Shield, Dodge | Win after exchange 3; player health 1, alien health 0. |
| Lose on third | Blast, Blast, Blast | Loss after exchange 3; player health 0, alien health 1. |
| Repeat input | Choose Shield against Laser, then press it repeatedly before Next exchange | Alien health remains 1 and player health remains 2; exchange stays at 1. |

**Checkpoint:** each accepted choice causes one explained damage event. There is never a fourth exchange, negative health, or a battle draw. Save `alien-battle-checkpoint-02` outside the final upload folder and update project state.

## 5 Connect the board and battle

Give the chatbot both working prototypes, the brief, and the rules. Keep your checkpoints intact. Ask it to produce the final `index.html` in the game project folder.

> Integrate these checked prototypes into Alien Tic-Tac-Toe. The board's selected empty cell is the only destination for that battle. Lock the entire board before the battle opens. Start fresh health for every battle. Resolve a terminal battle exactly once: win sets the pending cell to X, loss sets it to O, then check the board immediately. There is no automatic opponent placement. If the board continues, Return to board only dismisses the summary; it must not place another mark. If a line or full-board draw ends the game, stop gameplay and show Play again. Remove the temporary Test battle win/Test battle loss controls and standalone Restart battle. Add an always-available Restart game control during active play. It immediately clears both board and battle state and returns to the empty board; an abandoned battle must never award a delayed mark. Return one complete runnable index.html. Explain the changes and untested behavior.

1. Open the integrated file and win a battle for cell 1. Confirm exactly one X.
2. Return to the board and lose a battle for cell 2. Confirm exactly one O and no mark elsewhere.
3. Try occupied cells and rapid clicks during battle; neither should start another fight or change the pending cell.
4. Complete the board and use Play again. Confirm no health, response, mark, or pending-cell selection carries into the new game.
5. Start another battle and answer once, then use Restart game while its feedback is visible. Confirm the whole board clears, no old battle controls remain, and the next selected cell begins a fresh battle with 2 health per side.

**Checkpoint:** the complete loop works in the exported file. A chatbot preview alone is not this checkpoint. Save a working copy before visual changes.

## 6 Make the game readable

Use [vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md) and [vc-game-feedback](game-skills/vc-game-feedback/SKILL.md). A small alien drawn with simple shapes, a dark space background, and clear X/O marks are sufficient. Keep the counter table visible or immediately available; this game teaches a rule rather than testing memory under time pressure.

> Improve this working game's appearance without changing the rules. Make X, O, the pending cell, current alien move, both health values, and available actions clear on a phone and laptop. Use words or symbols as well as color. Show feedback such as “Shield counters Laser. Alien loses 1 health.” Distinguish Battle won from Board won. Keep focus visible and controls reachable. Do not introduce external assets, timers, sound, backend services, or effects that block play.

**Checkpoint:** a first-time player can identify whose health changed, which cell the battle concerns, and what to do next. Record short style and feedback notes alongside the files.

## 7 Test the integrated game

Use [vc-game-playtest](game-skills/vc-game-playtest/SKILL.md). Record the exact file/version, browser, device, steps, and observed result in `game-test-report.md`. Use **Passed**, **Failed**, or **Not tested**.

For the fixed battle sequence, you can deliberately win a cell using **Shield, Blast**, or deliberately lose it using **Blast, Shield**. Activate Next exchange between those responses. This makes board tests repeatable without leaving test buttons in the finished game.

| Check | What to do | What must happen |
| --- | --- | --- |
| Start | Open the game and leave instructions visible | No board mark, health loss, or battle occurs before Start. |
| Occupied cell | Finish a battle for cell 1, return, then select it again | Nothing changes and no new battle opens. |
| Board lock | Select cell 2, then rapidly try cell 3 and other cells | The pending location remains cell 2; only one battle exists. |
| One response | Rapidly click or press an answer before Next exchange | Exactly one damage event is accepted. |
| One resolution | Win a battle, then repeat the last input and acknowledge its summary | Exactly the selected cell changes once; the other eight stay as they were. |
| Immediate terminal | Reach zero alien or player health | No Next exchange appears; the board mark and outcome are resolved immediately. |
| No extra opponent turn | Win one battle and return to the board | One X appears and no O is added automatically. |
| X line | On a fresh board, win cells 1, 2, and 3 | X wins immediately; no further cell can start a battle. |
| O line | On a fresh board, lose cells 1, 2, and 3 | O wins immediately; no further cell can start a battle. |
| Other lines | On fresh boards, repeat the appropriate outcomes for each remaining winning line | Every row, column, and diagonal is recognized. Record the lines actually tried. |
| Full-board draw | Fill cells 1–9 in order as X, O, X, X, O, O, O, X, X | The ninth result is Draw; there is no earlier line. |
| Last-cell win | Fill cells 1–9 in order as X, O, O, O, X, X, X, O, X | The ninth X completes 1–5–9 and is a win, not a draw. |
| Restart | After a win, loss, or draw, use Play again and repeat for several games | Nine empty cells; no pending battle, stale feedback, old health, or duplicate action. |
| Restart during battle | Claim one cell, start another battle, answer once, and activate Restart game during feedback | All nine cells clear immediately; the abandoned fight awards no mark. A newly selected cell starts exchange 1 with 2 health per side. |
| Restart before responding | Start a battle and activate Restart game before choosing a response, then repeat after reopening help | The empty board returns and old response or help controls cannot change it. |
| Help during battle | Answer once, reopen help, then close it | Board, pending cell, health, and locked response remain correct. |
| Keyboard and phone | Play through the supported keyboard route and on a real phone when available | Focus is visible, buttons are reachable, and one activation produces one action. |

Give a partner two minutes without coaching. Record where they hesitate, especially whether they expect an automatic opponent move. If the instructions do not resolve that confusion, improve the explanation while keeping the rules unchanged.

> On [version and file/URL], I did [steps]. The rule says [expected result], but I observed [actual result]. Here are the current file and rules. Make the smallest repair, preserve the working parts, and return the complete file. Tell me which failed test and related checks to repeat. Do not claim a browser check that neither of us performed.

If repeated repairs fail, use [troubleshooting](docs/troubleshooting.md) and your saved checkpoints. A plain working version is more useful than polished graphics covering an incorrect result.

## 8 Publish and hand off

1. Use [vc-game-publish](game-skills/vc-game-publish/SKILL.md) and the [publication guide](setup-guide.md#publish-each-project).
2. Upload the intended integrated `index.html` and necessary supporting files to the game repository. Keep prototype folders and temporary test controls out of the final application upload.
3. Check the repository, version, Vercel project, root, and static-file settings before the authorized release. The first deployment is production under the course's documented flow.
4. Open the completed deployment URL. Win one battle, lose another, complete a board result, and restart. Have a partner use that exact URL where possible.
5. Save `game-release.md` with the version, URL, observed results, limitations, and recovery checkpoint. Update `project-state.md` with the next small action.

The finished handoff should distinguish the published game's observed behavior from local tests and any checks not attempted. If deployment is blocked, retain the working files and exact error rather than calling the game live.

After the class project is checked, you can follow the [optional Arcade submission guide](docs/arcade-submission.md). Submission is a separate step from deploying your own game; follow that guide's review and authorization process.

<!-- END COURSE SOURCE: docs/alien-tic-tac-toe.md -->


---

# Source file: docs/tic-tac-toe-variants.md

<!-- BEGIN COURSE SOURCE: docs/tic-tac-toe-variants.md -->

# Make the tic-tac-toe game yours: icon sets, prompts, and wireframes

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is choosing a theme, continuing a build, or stuck. The rules live in [alien-tic-tac-toe.md](docs/alien-tic-tac-toe.md) and do not change when the theme changes. Do not invent new mechanics while re-skinning.

The game is the same under every theme: choose a square, win or lose a short battle, claim the square, finish the board. What you choose is the **look**: who you are, who you are fighting, what the three attacks and three counters are called, and the colors.

A tested, complete version with all eight themes built in lives at [`examples/alien-tic-tac-toe/checkpoint-3-complete/`](examples/alien-tic-tac-toe). Open it, pick a theme, and play a round before you build your own. If you fall behind during class, download the checkpoint for the stage you are on and continue from there. See [stuck.md](docs/stuck.md).

## 1. Choose an icon set

Every theme uses two emoji so nobody needs to download art, pay for an icon pack, or worry about licensing. Emoji render on every phone and laptop. Your chatbot can swap them in one edit.

| Theme id | You | Opponent | Opponent attacks (in order) | Your correct counters (in order) | Background · accent |
| --- | --- | --- | --- | --- | --- |
| `space-invasion` (default) | 🧑‍🚀 | 👽 alien | Laser · Shield · Claw | Shield · Blast · Dodge | `#0b1020` · `#7dd3fc` |
| `cats-dogs` | 🐱 | 🐶 dog | Bark · Pounce · Slobber | Hiss · Climb · Shake Off | `#1f1410` · `#fdba74` |
| `pizza-tacos` | 🍕 | 🌮 taco | Hot Sauce · Shell Crunch · Salsa Splash | Extra Cheese · Deep Dish · Pizza Box | `#2a0f0f` · `#fde047` |
| `robots-dinos` | 🤖 | 🦖 dino | Chomp · Tail Swipe · Roar | Steel Plate · Jump Jets · Mute Button | `#0f1f14` · `#86efac` |
| `ghosts-pumpkins` | 👻 | 🎃 pumpkin | Seed Spit · Vine Grab · Lantern Glow | Phase Out · Float Up · Shadow Cloak | `#140a1f` · `#fb923c` |
| `sun-moon` | ☀️ | 🌙 moon | Eclipse · Moonbeam · High Tide | Solar Flare · Sunrise · Heat Wave | `#101a33` · `#fde68a` |
| `wizards-dragons` | 🧙 | 🐉 dragon | Fire Breath · Wing Gust · Tail Whip | Ice Spell · Anchor Spell · Levitate | `#1a0f2a` · `#c4b5fd` |
| `coffee-donuts` | ☕ | 🍩 donut | Sprinkle Storm · Sugar Rush · Glaze Drip | Lid On · Espresso Shot · Steam Cloud | `#1c120c` · `#f9a8d4` |

The mechanics never change: three attacks, each with exactly one correct counter, one health point lost per exchange, two or three exchanges per battle. Renaming is the only thing a theme does. If a theme makes a rule unclear, pick a different name, not a different rule.

**Make your own.** Pick any two emoji that are easy to tell apart at a glance, name three attacks the opponent does and three counters that obviously beat them, and choose two or three colors. Write it down before you prompt. A theme that exists only in your head produces a game that changes every time you ask for a change.

| Field | Your answer |
| --- | --- |
| Theme id (lowercase, hyphens) | |
| You (emoji + name) | |
| Opponent (emoji + name) | |
| Attack 1 → counter 1 | |
| Attack 2 → counter 2 | |
| Attack 3 → counter 3 | |
| Background, accent, and text colors | |

Avoid pairs that look alike (🐱 and 🐯), pairs where one emoji is mostly the background color, and anything that only reads as "mine" versus "theirs" by color. Each board mark must also carry a visually hidden X or O label for screen readers; the checkpoint shows how.

## 2. Wireframe before you build

A wireframe is a boxes-and-labels sketch of a screen. It costs five minutes and saves an hour of "that's not what I meant." Draw the three screens on paper or in a text file, then paste them into the prompt. Low fidelity is the point; the chatbot should not match your handwriting, only your layout.

Printable versions: [game-instructions.svg](docs/wireframes/game-instructions.svg), [game-board.svg](docs/wireframes/game-board.svg), [game-battle.svg](docs/wireframes/game-battle.svg).

**Screen 1: Instructions**

```
+--------------------------------------+
|  [Game title]                        |
|  One line: what you do.              |
|                                      |
|  Theme:  ( ) space-invasion   ( ) cats-dogs   |
|          ( ) ...     ( ) my own      |
|                                      |
|  How a battle works                  |
|  +----------+-----------+            |
|  | Attack   | Counter   |            |
|  | Laser    | Shield    |            |
|  | Shield   | Blast     |            |
|  | Claw     | Dodge     |            |
|  +----------+-----------+            |
|                                      |
|        [ Start game ]                |
+--------------------------------------+
```

**Screen 2: Board (choose a cell)**

```
+--------------------------------------+
|  [Title]            [ Restart game ] |
|  Status: Choose an empty square.     |
|                                      |
|      +-----+-----+-----+             |
|      | 🧑‍🚀 |     |  👽 |             |
|      +-----+-----+-----+             |
|      |     |  🧑‍🚀 |     |             |
|      +-----+-----+-----+             |
|      |     |     |     |             |
|      +-----+-----+-----+             |
|                                      |
|  (when finished)                     |
|  You won! / The aliens won / Draw    |
|        [ Play again ]                |
+--------------------------------------+
```

**Screen 3: Battle (for the selected cell)**

```
+--------------------------------------+
|  Battle for square 5  [Restart game] |
|                                      |
|  You: 2 of 2          Alien: 2 of 2  |
|                                      |
|  The alien uses: LASER               |
|                                      |
|  [ Shield ]  [ Blast ]  [ Dodge ]    |
|                                      |
|  Result line: Correct! Alien -1.     |
|        [ Next exchange ]             |
|                                      |
|  (when over)                         |
|  You won the battle. Square 5 is 🧑‍🚀 |
|        [ Return to board ]           |
+--------------------------------------+
```

Checklist for your sketch: every screen has a title, a status line in words, and one obvious next button. Health is written as text. Nothing depends on color alone. The board fits a phone held upright.

## 3. Prompts, one stage at a time

Use the seven [game skills](game-skills-guide.md) in order. Replace the bracketed parts. Paste the matching wireframe under each prompt.

**Brief (vc-game-brief)**

> Write game-brief.md for a themed tic-tac-toe battle game using the rules in alien-tic-tac-toe.md exactly. Theme: I am [🐱 Cat], the opponent is [🐶 Dog]. The opponent's attacks are [Bark, Pounce, Slobber] and my correct counters are [Hiss, Climb, Shake Off], in that order. Colors: [dark brown background, peach accent, light text]. Rename only; do not change the health, exchange, or board rules. Give me observable completion checks. Do not build yet.

**Rules and states (vc-game-rules)**

> Using the brief, list every state the game can be in and what the player sees and can do in each. Use my three wireframes below as the screens. Confirm there is no automatic opponent move after a battle and that Restart game is available in every active state.

**Build increment 1, the board (vc-game-build)**

> Build only the board screen as one index.html with inline CSS and JavaScript and no external files. Cells show [🐱] for my marks and [🐶] for the opponent's, each with a visually hidden "X" or "O" label. For now, two buttons "Award to me" and "Award to opponent" stand in for the battle. Detect the eight lines, a draw, Play again, and Restart game. Return the complete file.

Checkpoint: three of your marks in a row shows "You won." Three opponent marks shows you lost. A full board with no line shows Draw. Compare with [checkpoint 1](examples/alien-tic-tac-toe/checkpoint-1-board).

**Build increment 2, the battle (vc-game-build)**

> Build the battle screen as its own index.html. Both sides start with 2 health shown as text. The opponent's attacks cycle [Bark → Pounce → Slobber]. One accepted answer per exchange; disable the answer buttons after I click; show an explicit Next exchange button only while both sides still have health; end immediately when either side reaches zero. Return the complete file.

Checkpoint: answering correctly twice ends the battle in two exchanges with no Next exchange button after the win. Compare with [checkpoint 2](examples/alien-tic-tac-toe/checkpoint-2-battle).

**Build increment 3, connect them (vc-game-build)**

> Connect the board and the battle into one index.html. Selecting an empty cell locks the board and starts a battle for that cell. A battle win places my mark, a loss places the opponent's mark, exactly once, then the board is evaluated. Add the instructions screen from my wireframe with the theme table. Keep Restart game available everywhere. Return the complete file.

Checkpoint: win three battles on squares 1, 2, and 3 and the game says you won. Restart in the middle of a battle gives an empty board and no battle. Compare with [checkpoint 3](examples/alien-tic-tac-toe/checkpoint-3-complete).

**Look and feel (vc-game-look-feel)**

> Apply my theme colors and make the board fit a 375 pixel wide phone. Buttons at least 44 pixels tall. Keep every status message in words. Do not change any rule.

**Feedback and playtest (vc-game-feedback, vc-game-playtest)**

> Watch me describe a partner's playtest: [what confused them]. Propose the single smallest change that fixes it. Change one thing, then tell me exactly how to re-test it.

## 4. Extensions, only after the basic loop works

Pick at most one during class. Each one is a separate increment with its own check.

- **Random attacks.** The opponent picks any attack each exchange instead of cycling. Check: over ten exchanges you see all three attacks.
- **Score across boards.** Count boards won and lost in the session. Check: Play again keeps the tally; Restart during a board does not count it.
- **Two themes at once.** Let the player choose the opponent separately from themselves. Check: the counter table updates to match.
- **Sound.** One short sound on win and one on loss, with a mute button. Check: muted stays muted after Play again.

Do not add accounts, leaderboards, a database, timers, or downloaded art in class. Write them in your project-state file under "later."

<!-- END COURSE SOURCE: docs/tic-tac-toe-variants.md -->


---

# Source file: examples/alien-tic-tac-toe/README.md

<!-- BEGIN COURSE SOURCE: examples/alien-tic-tac-toe/README.md -->

# Alien Tic-Tac-Toe: reference build

This folder holds a working copy of the Alien Tic-Tac-Toe game from [docs/alien-tic-tac-toe.md](docs/alien-tic-tac-toe.md), built in the three steps the lesson uses. Each step is one `index.html` file. It opens from your computer with no install and runs on Vercel as a plain static file.

If you are stuck at a stage, download that stage's checkpoint and continue from it. You do not lose your place in the class.

| Stage in the lesson | Folder | What it is | If you are stuck here |
| --- | --- | --- | --- |
| 3. Build the board first | `checkpoint-1-board/` | The 3 by 3 board only. Choose an empty square, then press **Award to me (X)** or **Award to alien (O)**. These two test buttons stand in for the battle. Win, lose, and draw detection, **Play again**, and **Restart game** all work. | Download checkpoint 1 and go on to stage 4. |
| 4. Build and check the battle separately | `checkpoint-2-battle/` | The battle only, with no board. Laser, Shield, Claw in that order. Shield, Blast, Dodge are the counters. 2 health each, one response per exchange, **Next exchange**, **Fight again**. | Download checkpoint 2 and go on to stage 5. |
| 5 and 6. Connect and make it readable | `checkpoint-3-complete/` | The finished game: instructions, choose a square, battle, square awarded once, board checked, **Return to board** or **Play again**, **Restart game** during play, **How to play** during play, and a chooser with eight looks. | Download checkpoint 3. This is the file you publish. |

Each file has `<!-- CUSTOMIZE: ... -->` comments at the places meant for you to change. The rules live in named functions with a short comment saying which state each one handles.

## Open a checkpoint

1. Download the folder's `index.html` (or the whole folder).
2. Double-click `index.html`. It opens in your browser. Nothing else is needed.
3. To use a checkpoint as your own game, copy its `index.html` into your `my-first-game` folder and keep building from there.

## Put it in GitHub and on Vercel

Follow [Publish each project](setup-guide.md#publish-each-project) in the setup guide. Use the plain static settings it describes (framework **Other**, empty build command, repository root as output). Upload only `checkpoint-3-complete/index.html` as your game's `index.html`; keep the two prototype checkpoints out of the published game.

## The eight looks (themes) in checkpoint 3

Pick one on the instructions screen. The choice is saved in your browser and sent nowhere. Rules do not change between looks; only icons, names, and colors do. An instructor can link straight to one by adding `?theme=<id>` to the address, for example `index.html?theme=cats-dogs`.

| id | Name | You | Opponent | Opponent shows | Correct response |
| --- | --- | --- | --- | --- | --- |
| `space-invasion` (default) | Space Invasion | 🧑‍🚀 (X) | 👽 alien (O) | Laser, Shield, Claw | Shield, Blast, Dodge |
| `cats-dogs` | Cats vs Dogs | 🐱 | 🐶 dog | Bark, Pounce, Slobber | Hiss, Climb, Shake Off |
| `pizza-tacos` | Pizza vs Tacos | 🍕 | 🌮 taco | Hot Sauce, Shell Crunch, Salsa Splash | Extra Cheese, Deep Dish, Pizza Box |
| `robots-dinos` | Robots vs Dinos | 🤖 | 🦖 dino | Chomp, Tail Swipe, Roar | Steel Plate, Jump Jets, Mute Button |
| `ghosts-pumpkins` | Ghosts vs Pumpkins | 👻 | 🎃 pumpkin | Seed Spit, Vine Grab, Lantern Glow | Phase Out, Float Up, Shadow Cloak |
| `sun-moon` | Sun vs Moon | ☀️ | 🌙 moon | Eclipse, Moonbeam, High Tide | Solar Flare, Sunrise, Heat Wave |
| `wizards-dragons` | Wizards vs Dragons | 🧙 | 🐉 dragon | Fire Breath, Wing Gust, Tail Whip | Ice Spell, Anchor Spell, Levitate |
| `coffee-donuts` | Coffee vs Donuts | ☕ | 🍩 donut | Sprinkle Storm, Sugar Rush, Glaze Drip | Lid On, Espresso Shot, Steam Cloud |

The icons stand in for X and O on the board. Every icon also carries a hidden "X" or "O" label for screen readers, and the status text always says X or O in words. The themes are the `THEMES` list at the top of the script in `checkpoint-3-complete/index.html`. Add your own by copying one entry.

## Tests run on 2026-10-15

The checks were run in a real headless browser, not by reading the code. The script opens each checkpoint from disk (a `file://` address), clicks through it at a 375px phone width, and reports Passed or Failed for every check.

Environment: macOS, chromium 156.0.8078.4   Playwright 1.64.1   Node v26.7.0 (Playwright's cached Chromium headless shell; nothing was downloaded).

Command, run from this folder:

```
npx playwright --version      # confirms Playwright is available (printed Version 1.64.1)
node tests/run-checks.mjs
```

Observed result: `82 passed, 0 failed` (exit code 0). The suite was run twice more before this final run with the same result.

Keyboard checks use Tab, Shift+Tab, Enter, and Space. "Fits a 375px wide phone" means the page's scroll width was 375 or less. "At least 44px tall" was measured on every visible button.

### Checkpoint 1: board

| Check | Result |
| --- | --- |
| loads with 9 empty cells and a status line | Passed |
| selecting cell 1 shows 'pending' and locks the board | Passed |
| test buttons appear only while a cell is pending | Passed |
| clicking cell 2 while cell 1 is pending changes nothing | Passed |
| Award to me (X) puts exactly one X on the board | Passed |
| repeating the award or clicking the occupied cell changes nothing | Passed |
| X on 1-2-3 shows 'You won' | Passed |
| after the win no cell can be selected and Play again is shown | Passed |
| Play again gives 9 empty cells | Passed |
| O on 1-4-7 shows 'The aliens won' | Passed |
| full board X,O,X,X,O,O,O,X,X shows 'Draw' | Passed |
| last-cell X completing 1-5-9 is a win, not a draw | Passed |
| Restart game mid-game clears all 9 cells and the pending cell | Passed |
| after Restart, focus is on the status message | Passed |
| keyboard focus lands on cell 1 with a visible outline | Passed |
| Enter twice on a cell makes exactly one pending cell and awards nothing | Passed |
| focus moves to the status message (not a button) after selecting a cell | Passed |
| one Tab reaches Award to me (X) | Passed |
| Space twice on Award to me (X) places exactly one X | Passed |
| fits a 375px wide phone with no sideways scrolling | Passed |
| every visible button is at least 44px tall | Passed |
| no JavaScript errors | Passed |

### Checkpoint 2: battle

| Check | Result |
| --- | --- |
| starts at Laser with 2 health each | Passed |
| Shield vs Laser: alien drops to 1, responses disabled, Next exchange shown | Passed |
| repeating the response before Next exchange changes nothing | Passed |
| Next exchange shows Shield as exchange 2 | Passed |
| Shield, Blast: 'You won the battle' with You 2 of 2 and Alien 0 of 2 | Passed |
| no Next exchange after the terminal result; Fight again shown | Passed |
| Fight again resets to Laser with 2 health each | Passed |
| Dodge, Dodge: 'The alien won the battle' with You 0 of 2 and Alien 2 of 2 | Passed |
| no Next exchange after the player loses | Passed |
| third exchange shows Claw | Passed |
| Blast, Blast, Dodge: win at exchange 3 with You 1 of 2 and Alien 0 of 2 | Passed |
| Blast, Shield: loss at exchange 2 with You 0 of 2 and Alien 2 of 2 | Passed |
| Blast, Blast, Blast: loss at exchange 3 with You 0 of 2 and Alien 1 of 2 | Passed |
| fits a 375px wide phone with no sideways scrolling | Passed |
| no JavaScript errors | Passed |

### Checkpoint 3: complete game

| Check | Result |
| --- | --- |
| opens on the instructions screen with the board hidden | Passed |
| default theme is space-invasion | Passed |
| instructions list all 8 themes | Passed |
| Restart is not shown before Start | Passed |
| Start shows the empty board with the legend | Passed |
| after Start, focus is on the board status message | Passed |
| keyboard focus lands on cell 1 with a visible outline | Passed |
| Enter twice on cell 1 opens one battle with no damage; focus is on the attack message | Passed |
| one Tab reaches Shield | Passed |
| Enter twice on Shield is one damage event (Alien 1 of 2, You 2 of 2, exchange 1) | Passed |
| choosing cell 1 opens the battle with 2 health each at exchange 1 | Passed |
| default responses are Shield, Blast, Dodge | Passed |
| one response accepted; responses disabled; Next exchange shown | Passed |
| winning the battle places exactly one X and shows the summary | Passed |
| the placed icon carries a hidden 'X' label for screen readers | Passed |
| Return to board (pressed twice) places no second mark and adds no O | Passed |
| the occupied cell is disabled; 8 cells remain selectable | Passed |
| losing the battle places exactly one O (alien icon) on cell 2 | Passed |
| the O cell shows the alien icon with a hidden 'O' label | Passed |
| wrong answer costs the player 1 health | Passed |
| Restart mid-battle clears all 9 cells and returns to the board | Passed |
| the next battle starts fresh with 2 health each at exchange 1 | Passed |
| How to play during a battle shows instructions with Back to game and Restart | Passed |
| closing help returns to the same battle, unchanged | Passed |
| three won battles on 1, 2, 3 shows 'You won' with Play again | Passed |
| Restart is hidden once the board is finished (Play again replaces it) | Passed |
| Play again gives 9 empty cells and no battle | Passed |
| three lost battles on 1, 5, 9 shows 'The alien won' | Passed |
| choosing Cats vs Dogs sets data-theme on <html> | Passed |
| the counter table now shows the dog's attacks | Passed |
| the legend shows the cat and dog icons | Passed |
| battle uses the theme's attack and counter names | Passed |
| a won battle in the cat theme places the cat icon with hidden 'X' | Passed |
| the theme's color variables are applied | Passed |
| the chosen theme is remembered after reload (localStorage) | Passed |
| fits a 375px wide phone with no sideways scrolling | Passed |
| every visible button on the board screen is at least 44px tall | Passed |
| no JavaScript errors | Passed |
| ?theme=cats-dogs applies on load | Passed |
| ?theme= page has no JavaScript errors | Passed |
| an unknown ?theme falls back to space-invasion | Passed |
| all 8 themes have 3 attacks, 3 counters, two icons, a name, and 2+ colors | Passed |
| every theme plays a battle to a win with the first two counters | Passed |
| works when localStorage throws (battle won, one X placed) | Passed |
| theme can still change when storage throws | Passed |

### Not tested

- A real phone, or a real screen reader. Only the browser's accessibility labels were checked.
- A person playing without coaching (the lesson's two-minute partner test).
- The live Vercel deployment. The files are plain static HTML, but no deployment was made from this folder.
- Browsers other than Chromium.

### Reference used

While writing the checks I read the check list in Mark's companion repo, [describe-build-check-ship-companion/games/alien-tic-tac-toe](https://github.com/mrhinkle/describe-build-check-ship-companion/tree/main/games/alien-tic-tac-toe) (`check-results.md`). Its keyboard check ("Enter twice equals one action") exposed a focus bug in an early version of these files, which was fixed: after every action, focus now moves to the message that explains what happened, not to the next button, so a repeated key press cannot trigger a second action by accident. No code was copied from that repo.

## Known limits

- The alien always plays Laser, Shield, Claw in that order, as the lesson specifies. There is no random mode.
- There is no automatic opponent move. One battle fills one square. This is the rule, not a bug.
- You cannot cancel a single battle. Restart game clears the whole board.
- The theme choice is saved with `localStorage`. In a private window, or if storage is blocked, the game still works but forgets the choice when you close it.
- Emoji icons look different on each device and may be missing on very old systems. The hidden X and O labels and the status text still say who owns a square.
- No sound, timer, score history, accounts, or network calls. None are needed.
- Checkpoint 1's two award buttons are test controls. They are gone in checkpoint 3.

<!-- END COURSE SOURCE: examples/alien-tic-tac-toe/README.md -->


---

# Source file: docs/arcade-submission.md

<!-- BEGIN COURSE SOURCE: docs/arcade-submission.md -->

# Offer your game for the All Things AI Arcade

Mark has invited the possibility of adding strong student games to the All Things AI Arcade. If you make something you enjoy playing, you can prepare it for Mark and the All Things AI team to review. **This is optional. Selection is not guaranteed, and submitting a game does not publish it in the Arcade.**

First finish the classroom project: a small standalone game with clear instructions, a complete round, correct results, and reliable replay. Use the [game options](docs/game-options.md) to choose a manageable pattern. Keep the game in its own folder, repository, and Vercel project. You do not need accounts, a backend, multiplayer, or a remote leaderboard to offer a good game.

## Prepare a game another person can try

Make the first action obvious and keep a round short enough for a reviewer to understand the idea. Let another person play without coaching, then ask what they enjoyed, where they hesitated, and whether they wanted another round. Record their observations and fix the most important problem.

Check the actual version you intend to offer. Test the keyboard and touch controls your game supports, complete a round, inspect the result, and restart repeatedly. Test a real phone when available; a resized desktop browser does not establish that touch controls work. Report unsupported controls and untested devices plainly. A known limitation is useful information for the reviewer.

A working local file is enough to begin building. For an Arcade review packet, provide a playable URL if you have one and verify its main play loop. If publication is blocked, retain the runnable files and record the blocker rather than inventing a URL or describing the game as live.

## Build a small review packet

Complete the [Arcade submission template](templates/arcade-submission.md). Include:

- The game's name, intended player, goal, and one sentence about what makes it fun.
- A playable URL and the matching repository and saved version, or runnable files with a clear deployment blocker.
- Short instructions, supported controls, and how scoring, results, and replay work.
- Real playtest observations, test status, known issues, and what has not been tested.
- Credits for code, images, sounds, fonts, and other material, with source or provenance notes. Identify work you created yourself, AI-assisted material, and anything whose reuse status needs clarification.
- The name you would like associated with the game and any question you want the reviewers to consider.

Keep credentials, authentication codes, private account details, and unrelated personal or business information out of the packet. If the repository is private, note that fact and arrange access with the instructor through the existing class channel. Do not assume a private link is readable by the reviewer or change repository visibility just to make the packet easier to open.

## Hand it to the instructor

Use the class's existing instructor contact channel to give Mark the packet or ask how to hand it over. This course does not establish a separate submission email address, form, deadline, response time, or automated selection process. Your chatbot can help organize the packet; you decide what to share and send it through the agreed channel.

Mark and the All Things AI team can review whether the game is enjoyable, understandable, reliable enough to develop further, and a fit for the Arcade. They may request changes or decide not to include it. Continue treating the learner's repository as the source for the offered version until a maintainer gives you a specific next step.

## What happens if there is interest?

Actual Arcade adaptation and integration would be a later task for its maintainers. They would determine the changes, access, testing, and release process needed for the current Arcade. The classroom project does not authorize editing the Arcade, connecting its services, or deploying to its environment.

Keep your standalone game working and preserve the offered version. If maintainers request a revision, make a bounded change, record the new version, and repeat the affected checks. Do not promise that your classroom files can be dropped into the Arcade unchanged or that any particular private implementation will be used.

This optional path gives a strong project a clear handoff. Your class outcome remains your own playable game, its saved files, and an honest record of what works.

<!-- END COURSE SOURCE: docs/arcade-submission.md -->


---

# Source file: templates/arcade-submission.md

<!-- BEGIN COURSE SOURCE: templates/arcade-submission.md -->

# Optional All Things AI Arcade review packet

Complete this for the exact game version you want Mark and the All Things AI team to review. Read the [submission guide](docs/arcade-submission.md) and [game options](docs/game-options.md). Offering a game does not guarantee selection or authorize Arcade publication or integration.

## The game

- Game title:
- Creator name or preferred credit:
- Intended player:
- Goal and main action:
- What makes it fun:
- Approximate round length:
- Why I think it could suit the Arcade:

## Exact version and access

- Playable URL, or “not deployed”:
- Repository URL and whether it is public or private:
- Exact commit or clearly named saved version:
- Runnable file location or supplied attachment:
- Date this version was checked:
- If access or deployment is blocked, the specific blocker:

Do not include passwords, tokens, recovery codes, or private account details. Arrange any needed repository access with the instructor through the existing class channel.

## How to play

- Start:
- Keyboard controls, or unsupported:
- Pointer/touch controls, or unsupported:
- How progress or scoring works:
- How a round ends:
- What Play again resets:
- Any other information a first-time player needs:

## Checks and player observations

Use **Passed**, **Failed**, or **Not tested**. Identify actual devices and distinguish a real phone test from a narrow desktop window. Record local and deployed results separately when they differ.

| Check | Version/location and device | Status | Actual observation or issue |
| --- | --- | --- | --- |
| Instructions and Start | | | |
| Keyboard controls | | | |
| Touch controls on a real device | | | |
| Progress/scoring and round end | | | |
| Repeated restart | | | |
| Published URL's play loop | | | |

- What a new player enjoyed:
- Where they hesitated or found a problem:
- Whether they wanted to replay, and why:
- Most important fix made after that test:
- Known issues and untested behavior:

## Credits and provenance

Include relevant code, art, sound, fonts, and other materials. Mark items that need clarification rather than assuming they are ready for reuse.

| Material | Creator/source link or provenance | How it was made or obtained | Reuse information or open question |
| --- | --- | --- | --- |
| | | | |

- AI assistance used, if any:
- Material I created myself:
- Material needing further review:

## Handoff

- Packet prepared on:
- Handed to the instructor through:
- Question for Mark or the ATA reviewers:
- Next revision I would like to make:

Arcade selection, adaptation, testing, integration, and release remain later decisions for Mark and the All Things AI maintainers. This packet does not authorize those actions.

<!-- END COURSE SOURCE: templates/arcade-submission.md -->


---

# Source file: docs/game-walkthrough.md

<!-- BEGIN COURSE SOURCE: docs/game-walkthrough.md -->

# Build a small quiz game

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

This worked example creates **Riverbend Club Quiz**, a five-question game about the fictional club in the [website walkthrough](docs/website-walkthrough.md). It uses the Arcade's pattern of short instructions, clear feedback, and replay. It is a simplified knowledge puzzle, not a reproduction of Promptle or a claim that the Arcade source code has been copied.

Use your favorite chatbot and the seven [game skills](game-skills-guide.md). The core exercise needs no account inside the game, timer, database, paid API, sound, or saved score. You will build actual files and publish the game in a separate project from the website. Follow the full-day schedule in the [instructor guide](instructor-guide.md).

## 1 Set up the game destination

1. Create a local folder named `my-first-game`. Leave `my-first-site` and its working checkpoint intact.
2. Use the [setup guide](setup-guide.md) to create your own separate GitHub repository for the game. Confirm its owner and name before saving anything.
3. Create a fresh project-state note from [the template](templates/project-state.md), with the current stage “game brief.” Record the game folder and repository. The Vercel project and URL can remain “not created yet.”
4. In a connected coding workspace, select the game repository and ask the assistant to identify it before editing. In ordinary chat, attach the brief and skill instructions; direct repository access is optional.

**Checkpoint:** you can show different destinations for the website and game. If another assistant is helping, follow [multiple agents](docs/multiple-agents.md) so two assistants do not replace each other's work.

## 2 Agree on the game before building

Use [vc-game-brief](game-skills/vc-game-brief/SKILL.md):

> Help me plan Riverbend Club Quiz, a small classroom browser game about a fictional reading club. Use the five supplied questions exactly. One round contains five questions in a fixed order. Each question has three answer buttons. Give one point for a correct answer and zero for a wrong one. After answering, show a short explanation and a Next button. Do not allow a second answer to the same question. After question five, show the score out of five and Play again. No timer, login, database, saved score, or sound. Write game-brief.md and five observable completion checks. Do not build yet.

Use these questions. They describe invented club rules rather than real-world claims that require outside research.

| Question | A | B | C | Correct answer and feedback |
| --- | --- | --- | --- | --- |
| How often does this fictional club choose a book? | Once a year | Once a month | Every day | B. The club chooses one short book each month. |
| What kind of book does the example club choose? | A short book | Only dictionaries | Only cookbooks | A. The fictional club chooses a short book. |
| What should you bring to the practice gathering? | A sales pitch | A ticket payment | A question about the book | C. Bring a question and a passage you want to discuss. |
| What does the website's main button do? | Takes a payment | Opens the next gathering section | Creates an account | B. It takes the visitor to the gathering details. |
| Which description matches this project? | A fictional classroom exercise | A confirmed real event | A real booking service | A. The group and gathering are fictional. |

Read the brief. If the assistant adds random order, streaks, lives, daily locks, animations, or other extras, move those to a later list. Save the brief in your game folder.

## 3 Write exact rules and controls

Use [vc-game-rules](game-skills/vc-game-rules/SKILL.md) and the brief:

> Turn this brief into game-rules.md. Explain instructions, playing, answer feedback, final result, and restart. Use normal buttons that work with mouse, touch, and keyboard Tab and Enter. No question or score advances before Start. A submitted question cannot score again. Next appears after an answer; on the fifth question it leads to the final result. Play again begins a fresh round at question one with zero points. Specify how reopening instructions preserves the current question and answer. Return tests with exact expected results.

The intended sequence is:

| What happens | What should change |
| --- | --- |
| Open the file | Instructions and Start appear. No answers have been submitted. |
| Activate Start | Question 1 appears; score is 0; progress is 1 of 5. |
| Choose an answer | That question is locked, feedback appears, and score changes at most once. |
| Activate Next | The next unanswered question appears. |
| Finish question 5 and continue | A final score out of 5 and Play again appear. |
| Activate Play again | A fresh round begins at question 1, score 0, with no old selection or feedback. |

**Checkpoint:** your partner can explain the game using this table. Keep the rules available when evaluating the generated game.

## 4 Build the complete play loop

Use [vc-game-build](game-skills/vc-game-build/SKILL.md), the brief, rules, and question table:

> Build this quiz as one complete index.html with CSS and JavaScript included. It must run when opened directly in a browser, without installs or a server. Use the question table and rules exactly. Keep the first version plain and readable. Provide the actual complete file, not just a screenshot or chatbot preview. Keep question data separate from the logic inside the file so I can recognize and change it later. Explain the tests you actually performed and which I need to perform.

1. Download the file to `my-first-game`, or save the returned text using [the Mac or Windows saving instructions](docs/website-walkthrough.md#4-save-the-file-and-open-it).
2. If supplied a ZIP, extract it. Find `index.html` and retain any supporting files at their expected locations.
3. Open that exact file in your browser. Check whether the address points to the game folder.
4. Activate Start, answer one question, try selecting a second answer to that same question, then continue through the round.
5. Use Play again. Confirm question 1 and zero points return.

**Checkpoint:** you can complete and restart a plain round. Save a copy outside the active game folder, named something like `my-first-game-checkpoint-01`. Do this before adding visual effects. If the loop fails, report the steps and observed behavior through [troubleshooting](docs/troubleshooting.md); do not bury the failure under decoration.

## 5 Make it understandable

Use [vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md):

> Improve the appearance of this working quiz while preserving its rules and questions. Use the reading club's cream and blue theme. Make question text, three answer buttons, progress, score, and Next easy to identify on a laptop and a phone. Use labels or symbols as well as color for correctness. Preserve keyboard focus visibility. Keep the file self-contained and do not add sound or animation unless it helps explain an action.

Then use [vc-game-feedback](game-skills/vc-game-feedback/SKILL.md):

> Check that every answer explains the fictional club rule and the final screen accurately shows the score. Do not invent a real-world lesson or call the player an expert based on five questions. Make Play again obvious and reset the round correctly. Show me the exact result messages and how to test them.

Save the revised complete file, reopen it, and repeat the loop. Record visual decisions in `game-style.md` and result behavior in `game-feedback.md`; a short paragraph each is enough.

**Checkpoint:** a new player knows what to do next after an answer and after the final result. If the AI gives only partial snippets, ask it to apply them to the full current file rather than guessing where to paste them.

## 6 Test exact scoring and repeated play

Use [vc-game-playtest](game-skills/vc-game-playtest/SKILL.md) and save observations in `game-test-report.md` or the [student workbook](handouts/student-workbook.md).

| Test | Actions | Expected result |
| --- | --- | --- |
| All correct | Choose B, A, C, B, A in order. | Final score is exactly 5 out of 5. |
| All wrong | Start a fresh round; choose A, B, A, A, B. | Final score is exactly 0 out of 5. |
| Mixed answers | Start again; choose B, B, C, A, A. | Final score is exactly 3 out of 5. |
| Repeat click | After answering question 1, click an answer again several times before Next. | The score and progress do not change again. |
| Restart | Finish a round and activate Play again three times across separate completed rounds. | Every fresh round starts at question 1 with zero score and no previous answer selected. |
| Keyboard | Use Tab to find controls and Enter to activate them. | You can complete a round without a mouse and see which control has focus. |
| Phone | Open the deployed game on a real phone when available. | All answers and Next are reachable; one tap causes one action. |
| Help during play | Reopen instructions after a question has been answered. | The question, score, and locked answer remain correct on return. |

Watch a partner for two minutes without coaching. Ask what they thought would happen when something surprised them. Record the version and device. “The chatbot said the score works” is not a passing test.

Use this repair prompt with the current file:

> The agreed rule is [rule]. On [file or URL and version], I did [numbered actions]. I expected [result] and observed [result]. Here is the current file. Explain the likely cause, make one focused repair, and return the complete updated file. Preserve the questions, appearance, and other working controls. Give me the exact failed test to repeat and two related checks.

**Checkpoint:** mark each check Passed, Failed, or Not tested. Keep failures visible. If time is short, remove optional features and keep the complete play loop. An instructor's tested fallback can help only if it has actually been prepared and supplied.

## 7 Publish the game and carry it forward

1. Use [vc-game-publish](game-skills/vc-game-publish/SKILL.md) and the [publication guide](setup-guide.md#publish-each-project).
2. Open the game repository, verify its owner and name, and upload the actual checked files at the intended root. Save the deliberate checkpoint. The website repository should remain separate.
3. Import the game repository into its own Vercel project. For this single-file static game, use the same no-build route as the website. Review the destination and source version before publishing.
4. Open the URL from the completed deployment. Repeat an entire round, check its exact score, and restart. Have a partner try that same URL on another device where available.
5. Write `game-release.md` with the URL, source version, device, observed results, remaining limitations, and recovery checkpoint. If publication is blocked, record the actual error and the location of the working files.
6. Update your project-state note. A later chatbot can continue from the current file, rules, test report, and next action without pretending to remember this conversation.

**Final demonstration:** open the website and its main action; open the separate game; complete and restart a round; show where both versions and their test notes are saved. Adding another question or changing one style choice is a reasonable next exercise. Add it through the same brief → change → test → publish process.

This is the easiest of the [three game choices](docs/game-options.md). For the featured board-and-battle project, use [Alien Tic-Tac-Toe](docs/alien-tic-tac-toe.md). Finished games can follow the [optional Arcade submission path](docs/arcade-submission.md).

<!-- END COURSE SOURCE: docs/game-walkthrough.md -->


---

# Source file: docs/stuck.md

<!-- BEGIN COURSE SOURCE: docs/stuck.md -->

# Stuck? Start here

> **For an AI receiving only this lesson:** The learner is behind or blocked. Ask for the exact error or observation, the current file, and which stage they are on. Offer the matching checkpoint file as a way to continue; do not rebuild the whole project. Change one thing at a time and give one re-test per change.

If you're reading this, something isn't working and you're probably a little frustrated. That's fine. I get stuck doing this too, and I've been at it since my first company in '95. Nobody in the room ships two projects in a day without hitting a wall, so you're not behind, you're on schedule. The goal right now isn't to understand everything that went wrong. It's to get moving again in under five minutes.

## The five-minute rule

1. **Say what you see.** Write one sentence: "I clicked X, expected Y, saw Z." Paste the exact error text if there is one.
2. **Try the matching fix below.** Most problems are one of eight things.
3. **Still stuck? Jump to a checkpoint.** Download the tested file for your stage and continue from there. You lose nothing you can't redo later.
4. **Still stuck? Raise a hand** with the [help request template](templates/help-request.md) filled in. Mark or a helper reads it in thirty seconds.

## Checkpoint ladder

Every checkpoint is one `index.html` that works when you double-click it. Download it, put it in your project folder, open it, and keep going from the next step. Record "continued from checkpoint N" in `project-state.md`; that is honest and it is fine.

| Where you are | Download this | Then continue with |
| --- | --- | --- |
| Website: nothing works yet | [personal-website/index.html](examples/personal-website/index.html) | Replace Jordan Rivera's content with yours, section by section. [Walkthrough step 4](docs/personal-website-walkthrough.md#4-build-the-first-version-30-minutes) |
| Website: content in, but the look is broken | Same file | Paste your text into the fresh file instead of fixing the broken one. |
| Website: looks fine, cannot publish | Your own file | Skip to [setup guide: recover from common setup failures](setup-guide.md#recover-from-common-setup-failures). |
| Game: board does not detect wins | [checkpoint-1-board](examples/alien-tic-tac-toe/checkpoint-1-board/index.html) | Build the battle next. [Variants step 3](docs/tic-tac-toe-variants.md#3-prompts-one-stage-at-a-time) |
| Game: battle logic is wrong | [checkpoint-2-battle](examples/alien-tic-tac-toe/checkpoint-2-battle/index.html) | Connect it to the board. |
| Game: board and battle will not connect | [checkpoint-3-complete](examples/alien-tic-tac-toe/checkpoint-3-complete/index.html) | Pick your theme with `?theme=` and go straight to look-and-feel and playtest. |
| Game: everything works but it is 4:30 | checkpoint-3-complete | Change the theme, publish it, and record the rest as "later." |

Checkpoints are complete working games and sites. Using one isn't cheating, and it isn't giving up. Professionals start from working code every day; the smart move when you're stuck is to grab the thing that works and keep going. What you're here to learn is the loop: describe, plan, build, check, save, publish. You still learn it from a checkpoint.

## The eight usual suspects

| What you see | What it usually is | Do this |
| --- | --- | --- |
| The chatbot describes the change but returns no file, or a fragment | It forgot the rule | "Return the complete index.html file, every line, nothing omitted." |
| The page is blank or shows raw code | Saved as `.txt`, or pasted into the wrong place | Save as `index.html` with "All files" type. Open it from the folder, not the chat. |
| It worked, then a later change broke everything | The chatbot rewrote more than you asked | Go back to your last saved copy. Ask for one change. Add "Change nothing else." |
| The chatbot says it cannot read your repository or link | It cannot; only you can see it | Attach the file or paste its contents. Say which files you attached. |
| The chatbot invents jobs, dates, or features | It fills gaps with guesses | "Use only facts from my resume. Leave blanks blank. Do not invent." |
| Vercel shows 404 | The file is not at the root, or not named `index.html` | Check the repository: `index.html` at the top level, lowercase. |
| Vercel shows the old version | The new file was not saved to GitHub, or the deploy is still running | Refresh GitHub and look for your change. Wait one minute. Hard refresh (Shift and reload). |
| It is right on your laptop, wrong on your phone | Width or font assumptions | "Make it fit a 375 pixel wide screen with no sideways scrolling. Change nothing else." |

Thirty more, with exact steps, are in [troubleshooting.md](docs/troubleshooting.md).

## Switching chats or chatbots without losing your place

Fill in [project-state.md](templates/project-state.md), attach your current files, and start the new chat with its prompt. The new chat knows nothing about the old one; your file and your notes are the only memory.

## What to say when you ask for help

Not: "It doesn't work."

Yes: "I'm on game checkpoint 2. I click Shield when it shows Laser and the alien's health doesn't change. Here's the file and the exact message."

That second sentence gets you unstuck in one visit. And if you can't put it into words yet, raise your hand anyway. "I'm lost" is a complete sentence, and it's the one I'd most like to hear early rather than late.

<!-- END COURSE SOURCE: docs/stuck.md -->


---

# Source file: docs/troubleshooting.md

<!-- BEGIN COURSE SOURCE: docs/troubleshooting.md -->

# Get unstuck while building your website or game

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Find the first point where reality differs from what you expected. Make one reversible change, repeat the same check, and record the result. You do not need to diagnose the code before asking for help. A useful report says what you opened, what you did, what you expected, and what you actually saw.

Start from [the course entry point](START-HERE.md). Keep the latest files and [project-state note](templates/project-state.md) together. The [website walkthrough](docs/website-walkthrough.md) and [quiz walkthrough](docs/game-walkthrough.md) provide worked examples. If a fix fails, retain your working checkpoint; do not replace the entire project repeatedly.

## Choose the stage that is failing

| What is stopping you? | Start with |
| --- | --- |
| You cannot get the course or project into the chatbot | [Access and chatbot problems](#access-and-chatbot-problems) |
| You cannot obtain or open the actual files | [Saving and opening files](#saving-and-opening-files) |
| The website or game behaves incorrectly | [Page and game behavior](#page-and-game-behavior) |
| Local files work but the online version does not | [GitHub and Vercel publication](#github-and-vercel-publication) |
| Work is being lost or assistants disagree | [Recovering progress and coordinating help](#recovering-progress-and-coordinating-help) |

After two focused repair attempts, or five minutes on an account problem during class, ask the instructor for help or pair with another learner. An instructor recovery checkpoint must have been prepared and tested in advance; it is not a hidden file that these guides can supply. Keep a note of the blocker so you can resume later.

## What to give an assistant or instructor

Copy this and replace the brackets. Never paste passwords, authentication codes, access tokens, or a whole account-settings page.

> Project: [website or game, folder, repository, branch/checkpoint]. Stage: [save/open/upload/deploy/play]. I opened [exact file or URL] on [browser/device]. Steps: 1. [action] 2. [action]. Expected: [result]. Observed: [result or exact relevant error]. Last version that worked: [checkpoint or unknown]. I already tried: [one change and its result]. Here are the current relevant files and rules. Explain the likely causes, choose the smallest reversible check, and wait for the observation before calling it fixed. Do not publish or change account access as part of diagnosis.

When you share an error, include the text rather than only “it broke.” A screenshot is useful for appearance; the current file is needed for code diagnosis. Keep **the learner observed**, **the assistant observed**, and **not tested** distinct.

## Access and chatbot problems

### 1 The private course repository will not open

**Possible causes:** wrong GitHub account, missing invitation, or no repository permission.

1. Check which GitHub account is signed in and compare it with the account you gave the instructor.
2. Open the course URL directly in that account's browser session. Record the displayed error without changing visibility.
3. Ask the instructor to confirm access or provide an authorized copy of the course instructions.

**Success:** you can read the course README and Start here file. **Fallback:** use the supplied course copy with ordinary chat. Do not make the private repository public or create a token to work around missing access.

### 2 You can read the repository but the chatbot cannot

**Possible causes:** the assistant has no repository tool, its connection covers different repositories, or it is signed into another account.

1. Ask it to state whether it actually read the README and to quote the project title it found.
2. If access is unavailable, paste the relevant skill, brief, and current file into chat or attach them individually.
3. For a connected route, follow the [setup guide](setup-guide.md) and let the learner review any permission screen.

**Success:** the assistant accurately identifies the supplied current files. **Fallback:** continue through portable files and manual upload; direct repository access is optional.

### 3 The chatbot rejects a ZIP or cannot inspect its contents

**Possible causes:** unsupported archive uploads, file-size limits, or a surface that accepts only particular document types.

1. Extract a local copy with your computer's normal archive-opening function.
2. Provide the relevant `SKILL.md`, brief, and `index.html` separately. If that file type is rejected, paste its complete text with a filename label.
3. Ask the assistant to list what it received before making changes.

**Success:** it can describe the current title and main action from the actual contents. **Fallback:** use the single-file example. Do not repeatedly rename an archive to unrelated extensions.

### 4 The named skill is not installed or does not appear

**Possible causes:** native skills are unsupported, the assistant's discovery mechanism differs, or the package was not installed.

1. Open the skill link in the [website guide](skill-guide.md) or [game guide](game-skills-guide.md).
2. Paste or attach the complete `SKILL.md`, then give the matching starter prompt and current project material.
3. Ask the assistant to summarize the task's input, output, and completion check.

**Success:** the assistant follows the instruction sheet for this stage. **Fallback:** use pasted instructions throughout. Native installation is optional and cannot grant missing tools.

### 5 The assistant requests a database, API key, or paid service

**Possible causes:** it added features beyond the brief or chose a more complex architecture.

1. Restate that the core class project must run as static HTML, CSS, and JavaScript.
2. Ask which agreed requirement allegedly needs the service and whether it can be removed from this version.
3. Keep the existing working copy and request a portable version without those additions.

**Success:** the actual exported file opens without entering a key or creating a backend account. **Fallback:** return to the course's simple example. Ask the instructor before changing the agreed hosting arrangement; do not buy a plan just to clear a generated instruction.

### 6 A chatbot usage limit or unavailable feature stops the build

**Possible causes:** usage quota, workspace policy, account entitlement, or a temporary service issue.

1. Save the current files and note the exact limit message and any displayed reset time.
2. Update project state with the last completed check and next action.
3. Continue in another allowed chatbot by giving it the current files and stage instructions, or work with a partner.

**Success:** the replacement assistant identifies the same version and next step. **Fallback:** use a supplied tested checkpoint or complete the brief and test plan while access is unavailable. Do not assume a purchase is required.

## Saving and opening files

### 7 The AI produced only a screenshot, description, or preview

**Possible causes:** the prompt requested a design rather than files, or the tool keeps a preview inside its own environment.

1. Ask: “Return the complete runnable `index.html`, including its styles and behavior, or provide an export I can download.”
2. Save the actual file in the correct project folder.
3. Open it in your browser independently of the chatbot preview.

**Success:** the exported file displays and the main interaction works. **Fallback:** ask for complete file contents as text. A screenshot cannot be converted into working software by changing its filename.

### 8 The file is called index.html.txt

**Possible cause:** the editor appended its default text-file extension.

1. Preserve the original file and show its complete filename. In current Windows File Explorer, use **View → Show → File name extensions**.
2. Confirm it contains plain HTML text. Rename a copy to `index.html`; for a Mac, use TextEdit's plain-text HTML save route in the [walkthrough](docs/website-walkthrough.md#4-save-the-file-and-open-it).
3. Open the renamed file with a browser.

**Success:** the filename ends once in `.html` and the page renders. **Fallback:** download a fresh HTML file from the chatbot. Renaming changes a name, not the underlying format. [Microsoft extension guidance, checked October 5, 2026](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows)

### 9 A Mac or Windows file contains rich text instead of HTML

**Possible causes:** it was saved in Word, as `.rtf`, or through a formatted editor. You may see formatting codes or literal page code.

1. Keep the original for comparison and return to the chatbot's complete source text.
2. Make a new plain-text document: on Mac, TextEdit **Format → Make Plain Text**; on Windows, use Notepad or an existing plain-text editor.
3. Paste the source without Markdown fences, save `index.html`, and reopen it in the browser.

**Success:** the browser shows headings and buttons. **Fallback:** request a downloadable file. Do not try to repair a rich-text export merely by renaming it. [Apple HTML guidance, checked October 5, 2026](https://support.apple.com/guide/textedit/txted0b6cd61/mac)

### 10 Double-clicking opens an editor instead of the website

**Possible cause:** that file type is associated with an editor.

1. Locate the saved `index.html` in your project folder.
2. Use the file manager's Open with action and choose the browser you normally use. You need not change the system-wide default.
3. Check the address bar and page title to confirm you opened the intended file.

**Success:** the browser renders the page. **Fallback:** ask the instructor to show opening a local file on your computer. If the browser displays raw source, continue with the plain-text and filename checks above.

### 11 Opening a downloaded folder or ZIP does not show a page

**Possible causes:** you opened the archive rather than its extracted contents, or there is an extra enclosing folder.

1. Extract the archive to a clearly named local folder.
2. Open folders until you find the real `index.html`; note which supporting folders sit beside it.
3. Open that file in the browser and preserve the supporting structure.

**Success:** the page runs from the extracted project folder. **Fallback:** ask for a self-contained HTML export. Do not discard supporting files merely because you do not recognize their extensions.

### 12 The page is blank or says a script or resource could not load

**Possible causes:** incomplete copied code, missing files, or generated code that requires a server despite the brief.

1. Compare the saved file list with the assistant's promised deliverable. Check for omitted script or style files.
2. Give the assistant the actual current files and relevant error text; ask whether this is truly a directly openable static project.
3. Request a complete corrected self-contained file for the course example, preserving your content.

**Success:** the saved file works in the browser without a new installation. **Fallback:** return to the last working file or instructor checkpoint. Do not run a list of unfamiliar setup commands just because the assistant generated it.

## Page and game behavior

### 13 An image is missing locally or after publication

**Possible causes:** missing upload, filename mismatch, different capitalization, or an image reference that points to a location on your computer.

1. Compare the exact referenced name with the actual file, including `.png` versus `.jpg` and upper/lowercase letters.
2. Keep a copy, then make the reference and actual relative location match. Preserve the asset folder in the upload.
3. Reopen the same version locally and at its deployment URL.

**Success:** the intended image appears in both locations. **Fallback:** use a simple shape or text decoration until the asset is fixed. Do not hide a broken image behind a claim that it is only a cache issue.

### 14 A link or button does nothing or reaches the wrong place

**Possible causes:** placeholder destination, misspelled section name, disabled control, or an unimplemented action.

1. State the exact intended behavior from the brief. For the example website, the button should reach the gathering section.
2. Report the current label, your action, and the observed destination or lack of response with the actual file.
3. Ask for one focused repair, save the returned complete file, and repeat the action.

**Success:** the correct destination appears and other links still work. **Fallback:** use a clear ordinary link to a verified destination rather than adding a form or service. Label any omitted feature honestly.

### 15 The chatbot says fixed but nothing changed

**Possible causes:** only the chat preview changed, the wrong file was replaced, the response was a proposal, or you opened an older copy.

1. Ask which exact file changed and request the complete updated file or a visible difference.
2. Save it in the active project folder and reopen that precise path. Compare one distinctive changed line or label.
3. Repeat the original failing action; report its observed result.

**Success:** the intended behavior changes in the exported file. **Fallback:** keep the old checkpoint and ask for diagnosis from the actual current file. Do not accept a second “fixed” without new evidence.

### 16 The page works on a laptop but controls fail on a phone

**Possible causes:** keyboard-only instructions, tiny or covered buttons, mouse-only handlers, or page scrolling that intercepts gestures.

1. Record the phone, browser, URL, and precise control that fails.
2. Ask for standard visible buttons or explicit touch support while preserving desktop controls.
3. Test on the actual phone; also repeat keyboard play on the laptop.

**Success:** one tap produces one intended action and all required controls remain reachable. **Fallback:** simplify the game's interaction or use the accessible quiz recipe. A resized desktop window checks layout, not real touch behavior.

### 17 A timer runs before Start or the game loses while help is open

**Possible causes:** the game updates during its instructions state or help does not preserve/pause play as agreed.

1. Record whether the score, timer, or position changes before Start or while instructions are open.
2. Ask the assistant to enforce the agreed state transitions and prevent the Start input from also triggering a gameplay action.
3. Open a fresh round, leave instructions visible, then start and reopen help during play.

**Success:** no active round progresses while the rules say it should be idle. **Fallback:** remove optional timing; the worked quiz needs no timer. Save the last working loop before further changes.

### 18 Restart keeps the old score or makes the game run faster

**Possible causes:** state is not reset, old timers or animation loops remain active, or duplicate input listeners were added.

1. Compare the first round with the second and third; record exactly what remains or speeds up.
2. Supply the current file and ask for a focused reset repair that removes duplicate ongoing actions.
3. Finish and restart several rounds, checking score, position, question, feedback, and speed each time.

**Success:** every round starts from the agreed fresh state and behaves consistently. **Fallback:** restore the earlier complete loop. Reloading the page may help demonstrate a round but does not count as fixing the Play again control.

### 19 Clicking twice changes score twice or skips a question

**Possible causes:** a submitted answer remains active or multiple handlers respond to one interaction.

1. Use a fresh round and record the score before and after two clicks on the same question.
2. Ask the assistant to allow exactly one answer and one score change per question; keep Next separate.
3. Repeat single-click, double-click, keyboard activation, and a complete round with known answers.

**Success:** the exact expected score appears and no question is skipped. **Fallback:** return to ordinary button controls and remove automatic advance. Use the [quiz's scoring tests](docs/game-walkthrough.md#6-test-exact-scoring-and-repeated-play).

### 20 The game is much harder after switching tabs or on another computer

**Possible causes:** movement depends on frame rate, a long background gap is treated as active play, or difficulty changed unintentionally.

1. Record the same starting setup on both devices and note the specific difference.
2. Ask the assistant to use elapsed-time or fixed-step motion and handle returning from a background tab safely.
3. Retest the original device, the other device, and a brief tab switch with equivalent starting conditions.

**Success:** the rules and pace remain reasonably consistent without an unavoidable loss on return. **Fallback:** reduce difficulty or use the turn-based quiz. Keep this check separate from claims about network speed.

### 21 A best score disappears or differs on another device

**Possible causes:** the score is stored only in one browser, storage was cleared/unavailable, or the new URL has separate storage.

1. Check whether the game promises a browser-local score or an online account score. The core class should use the former, if any.
2. Test a refresh on the same URL in the same browser, then label any actual storage limitation.
3. Ask for storage errors to leave the game playable instead of stopping it.

**Success:** behavior matches its label and the game works even without saved scores. **Fallback:** remove optional persistence. Do not add a database or login to solve a scope the class does not require.

## GitHub and Vercel publication

### 22 GitHub shows only a ZIP or an extra folder above index.html

**Possible cause:** the archive or its enclosing folder was uploaded instead of the intended serving files.

1. Keep your local copy and inspect the repository file list. Locate the actual HTML and supporting assets.
2. Prepare a corrected upload or branch with `index.html` at the intended project root; preserve its relative asset paths.
3. Review the proposed filenames before saving or merging. If a production connection exists, remember that its branch change may publish.

**Success:** the intended root contains `index.html`. **Fallback:** ask the instructor to help choose the correct folder; do not delete the repository. [GitHub file upload guide, checked October 5, 2026](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

### 23 Vercel cannot find your GitHub repository

**Possible causes:** wrong account/team, integration access excludes the repository, ownership, or organization restrictions.

1. Confirm the repository URL and owner in GitHub, then the signed-in identity and selected Vercel account/team.
2. Follow the [setup guide](setup-guide.md) to inspect the integration's allowed repository. The learner reviews any authorization change.
3. Record the exact restriction if the repository remains unavailable.

**Success:** the correct repository appears in the import flow. **Fallback:** retain local files and work with the instructor or partner. Do not make the repository public or grant broad access just to make it appear.

### 24 A plain static project fails during a build command

**Possible causes:** a framework preset was selected, a build command was added unnecessarily, or the project is not actually plain static files.

1. Inspect the file list and first relevant failure message. Do not treat every failure as a dependency problem.
2. For the course's verified plain HTML/CSS/JavaScript example, select **Other**, enable the Build Command override, and leave it empty. Verify the folder containing `index.html` and the output location.
3. Deploy the intended version again after the deliberate configuration correction.

**Success:** that deployment completes and serves the expected page. **Fallback:** ask for help if `package.json` or framework files show a different project; do not randomly delete them or reinstall packages. [Vercel build configuration, checked October 5, 2026](https://vercel.com/docs/builds/configure-a-build)

### 25 Deployment says ready but the URL shows 404

**Possible causes:** wrong project/root/output folder, missing `index.html`, or opening a path the project does not provide.

1. Open the URL from the specific completed deployment rather than a remembered bookmark. Start at its home page.
2. Compare the deployed source version's file location with Root Directory and output settings. With **Other**, a `public` folder can become the default output; inspect rather than guessing.
3. Correct the single mismatch and deploy the intended version, then reopen the resulting URL.

**Success:** the correct page loads and its main action works. **Fallback:** record the error and use working local files. Do not add routing rewrites blindly to a one-page static project. [Vercel 404 guidance, checked October 5, 2026](https://vercel.com/kb/guide/why-is-my-deployed-project-giving-404)

### 26 The online page still shows the old version

**Possible causes:** wrong URL/project, a change on a different branch, an unfinished/failed deployment, or a cached resource.

1. Identify the exact GitHub commit and branch that contains your change.
2. In the intended Vercel project, open the matching deployment and its own URL. Compare a distinctive changed word or label.
3. If that deployment really contains the correct files, reload or try another browser session before changing anything else. Record whether the session requires sign-in.

**Success:** the verified URL shows the intended version and passes the relevant check. **Fallback:** share the commit, deployment status, and URL with the instructor. Repeated redeploying cannot fix an unmerged or wrongly targeted change.

### 27 A partner sees an access screen rather than your game

**Possible causes:** deployment protection, different login state, or a preview URL with different access from the intended audience URL.

1. Record the exact URL and what the partner sees.
2. Inspect the selected deployment and agreed audience with the instructor. A private GitHub repository alone does not establish the hosted site's privacy.
3. Verify the authorized access route with the partner; any protection change is a separate deliberate decision.

**Success:** the intended audience can access the intended version. **Fallback:** demonstrate local files and mark shared access blocked. Do not disable protection merely to make a test pass.

## Recovering progress and coordinating help

### 28 Two assistants overwrite files or give conflicting versions

**Possible causes:** both are editing the same project copy, or their starting files differ.

1. Pause further edits and preserve the competing versions under distinct names outside the active project folder.
2. Choose one current checkpoint and one assistant responsible for applying changes. Give any second helper a read-only review task on that same version.
3. Follow [multiple agents](docs/multiple-agents.md), record who owns each task, and review proposed changes before applying them.

**Success:** you can identify one current file and its latest tested behavior. **Fallback:** restore the last known working copy and apply one small change. Do not merge incompatible versions by alternating downloads.

### 29 The chatbot forgot the project or a new chat starts from scratch

**Possible causes:** conversation context limits, a new session, or files never being supplied to the new assistant.

1. Provide the [project-state note](templates/project-state.md), brief/rules, latest actual file, and test report.
2. Ask it to name the current project, last completed check, unresolved problem, and next small action before changing anything.
3. Correct any mismatch and continue from that saved checkpoint.

**Success:** it describes the real current state without inventing earlier work. **Fallback:** use the workbook to reconstruct missing facts and label unknowns. Do not ask it to guess which version you meant.

### 30 You replaced a working version and need it back

**Possible causes:** the latest download overwrote your only working file or a broad change introduced a regression.

1. Preserve the broken version for diagnosis and locate your saved folder checkpoint or the identified working GitHub commit.
2. Restore a copy into a separate local folder first. Open and test it before replacing active files.
3. Use the verified copy as the next working baseline and record the recovery. Review any repository restoration or publication separately.

**Success:** the specific behavior from your recorded checkpoint works again. **Fallback:** ask the instructor to help retrieve the saved version. Do not delete history or the whole repository to “start clean.”

## Finish the repair

Update the project-state note with the version, repair, observed test, remaining unknowns, and next action. Record a real blocker if you have one. A useful stopping point is either a verified repair or a preserved project with enough detail that another person can continue.

<!-- END COURSE SOURCE: docs/troubleshooting.md -->


---

# Source file: docs/multiple-agents.md

<!-- BEGIN COURSE SOURCE: docs/multiple-agents.md -->

# Working with more than one AI assistant

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Start with **two chats: one builder and one reviewer**. You decide what to build, carry the files between chats, and approve the next step. This gives a beginner a useful second look without installing an agent system. The two class projects still use their own folders, GitHub repositories, and Vercel projects.

This is an optional extension to the [six-hour class](instructor-guide.md), not a prerequisite. Complete the ordinary [setup](setup-guide.md) and a working first version before adding coordination. Product-specific instructions below were checked against official documentation on **October 5, 2026**; capabilities still depend on your actual account, client, and organization settings.

## Choose a method

| Method | Best use | What you manage |
| --- | --- | --- |
| Manual builder and reviewer chats | First website or game; any chatbot accepting files or pasted text | Freeze a version, transfer it, compare findings, request a focused repair |
| Native subagents in a supported coding workspace | A bounded review or separate research questions | Confirm real delegation, assign limits, collect results |
| Separate Git worktrees | Advanced parallel implementation in one repository | Separate working copies, file ownership, integration, and retesting |

A reviewer must receive the actual files and acceptance checks. A screenshot can reveal a layout problem but cannot establish scoring logic or whether a button works. Asking one chatbot to “act as five experts” supplies different perspectives within one conversation; it does not create five independent reviewers. A separate chat or subagent is a separate review process, but may still share the same model's blind spots.

Using another provider for review is optional. Before transferring files, decide whether that provider is an approved destination for the material. If the assistant would send the files itself, require your explicit permission first. A real person's first-time website visit or game playtest remains valuable.

## Give every helper a small job

Keep yourself as the project owner. Designate one coordinator, usually your main chat, to maintain the brief and combine accepted work. The builder changes files. The reviewer identifies problems and suggests checks without changing those files. Use the [task template](templates/agent-task.md) and [handoff template](templates/agent-handoff.md).

Every assignment needs five things: the intended result, the input version, the permitted files, the checks, and a stopping point. “Make the whole game better” is too broad. “Review whether replay resets the score in game-v2, return findings, and make no edits” is bounded.

Allow one writer per working folder. Never let two writing agents share a checkout, even if they expect to touch different files. If two tasks need the same file, perform them sequentially. A one-file `index.html` is an especially poor candidate for simultaneous editing. Parallel read-only planning can help; parallel implementation is optional.

## Option 1: the manual two-chat workflow

1. **Finish one small build.** In your builder chat, supply the brief, project instructions, relevant skill, and current files. Request a complete runnable result.
2. **Freeze it.** Save a named copy such as `website-v1` or `game-v2`, including every supporting file. If using GitHub, record the exact commit. Pause the builder while that copy is reviewed.
3. **Start a fresh reviewer chat.** Attach that frozen copy, the brief, and acceptance checks. A private GitHub link alone may be inaccessible; attach files or paste their contents when needed.
4. **Review observations.** Separate an observed failure from a likely issue found by reading code. Record browser checks the reviewer could not perform as Not tested.
5. **Return findings to the builder.** Select the most important issue, request a focused fix, and save a new version. The reviewer should not quietly become another builder.
6. **Retest.** Repeat the failing action and the core working flow. An earlier review applies to the earlier version. Review the changed result before publication.

Try this website builder prompt after attaching the named materials:

> You are my website builder. Use the attached project brief, AGENTS.md, and vc-build-small instructions. Build the first agreed version as complete runnable files. Work only in my website folder, my-first-site. Preserve the agreed sections and primary link destination. Tell me what changed and how to check it in my browser. Stop after the files and test instructions are ready. Do not upload, commit, push, or deploy them.

In a fresh chat, attach the saved output and paste:

> You are a read-only reviewer of the attached website-v1 files. First confirm the filenames and version you can inspect. Compare them with the attached brief. Check the main action, navigation, content clarity, phone layout, and keyboard usability where your tools permit. Return a short table: issue, steps, expected result, evidence, impact, and suggested repair. Distinguish code-reading concerns from behavior you actually observed. Mark unavailable browser checks Not tested. Do not rewrite the files or publish anything.

For the game, use this builder prompt:

> Use my attached game brief, rules, AGENTS.md, and vc-game-build instructions. Build one short start → play → result → restart loop in my-first-game. Implement the stated keyboard and touch controls, score rules, and reset behavior before decoration. Return complete runnable files and a checklist. Work only on this game; stop for my review before any repository save or publication.

Then give a fresh reviewer the frozen game files:

> Review game-v1 read-only against the attached rules. Inspect scoring, invalid actions, the end of a round, and everything restart must reset. If you can run it, complete a round and restart three times; report what actually happened. If you cannot, propose precise tests and label them Not tested. Identify the most important issue first. Do not edit files, change rules, or assume a green build means the game works.

Ordinary chat cannot necessarily run either project. Open the exported files yourself and record the observations in the [student workbook](handouts/student-workbook.md).

## Option 2: supported native subagents

In current Codex clients, ask explicitly for delegation. Eligible ChatGPT Work accounts also expose subagent workflows. Real subagent work appears in the product's activity or agent threads; ask the main agent to identify each task and return its result. Extra agents perform additional model and tool work and consume additional usage. No custom model configuration is needed for this exercise. [Official OpenAI subagent guidance](https://learn.chatgpt.com/docs/agent-configuration/subagents)

Claude Code supports delegated subagents and project-specific definitions in `.claude/agents/`. Its current documentation lets you ask Claude to create a restricted reviewer definition; inspect its allowed tools before using it. This is a Claude Code capability, not an assumption about every Claude chat. [Official Claude Code subagent guidance](https://code.claude.com/docs/en/sub-agents)

Use a small request first:

> If this workspace supports real subagents, use one read-only reviewer for the frozen website-v1 files and attached acceptance checks. Pause implementation until the reviewer finishes. Have it return at most five actionable findings with file references and evidence. Identify the actual delegated task. Do not grant editing, account-management, or deployment access. If delegation is unavailable, say so and give me the review brief to paste into another chat.

For parallel analysis of a game, assign one helper to read the rules for ambiguity and another to read a frozen file copy for scoring/reset problems. Give each its own input copy and a read-only assignment. Neither should change files. The coordinator reconciles the findings, then the single builder implements one agreed repair.

Start with one helper and one review pass. Set a time limit appropriate to the lesson, such as ten minutes, and request a handoff when time or usage runs short. More agents can create more waiting and coordination. If they repeat each other or lack the required tools, return to the manual workflow.

## Option 3: separate worktrees for advanced parallel builds

A worktree is a separate working copy of the same Git repository. It helps separate simultaneous edits, but it does not combine or test them for you. Codex's documented desktop flow is to select **Worktree** for a new chat, choose the starting branch, then submit the task. This requires a Git repository. The branch/worktree relationship also restricts using the same checked-out branch in multiple worktrees. [Official worktree guide](https://learn.chatgpt.com/docs/environments/git-worktrees)

Use this only with instructor help and a saved common starting version. Give each writer a separate worktree and explicit file ownership. The website and game are already separate projects; do not merge them together merely to practice this feature.

An appropriate split after a game has several files might be one writer refining `instructions.html` and another adjusting `game.css`. Both must preserve agreed element names and controls. A request to change the same `index.html` in both tasks should be sequential instead.

> Prepare two bounded task briefs from this saved version. Task A may edit instructions.html only. Task B may edit game.css only. Each writer must have a separate worktree and identify its starting version and folder. Do not start either task if the permitted files are not actually separate. Return changes and tests to the coordinator. No commits, pushes, merges, or deployments are authorized by this planning request.

Only the coordinator integrates approved changes after the owner authorizes that step. Resolve conflicts deliberately, identify the resulting version, then rerun the complete core flow. Two individually checked branches can still fail when combined. Ask a read-only reviewer to assess the integrated version before the owner approves publication.

## Make project instructions reusable

Copy [templates/AGENTS.md](templates/AGENTS.md) into the root of **each learner project**, fill in its fields, and keep the exact uppercase filename `AGENTS.md`. If that project already has instructions, combine them deliberately instead of overwriting them. Keep `README.md` as the human-facing explanation of the project. Merely adding either file to GitHub does not connect an ordinary chatbot to it.

Codex discovers project `AGENTS.md` instructions along the path to its working directory, with closer instructions and override files affecting the result. Ask it to identify the loaded instructions and project before work. A template under `templates/` is not automatically the root project's instruction file. [Official AGENTS.md guidance](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

Current Claude Code can read `AGENTS.md` directly in supported versions, but an existing project `CLAUDE.md` can take precedence. The supplied [CLAUDE.md template](templates/CLAUDE.md) uses the documented `@AGENTS.md` import when placed beside it. Verify loaded instructions with Claude Code's `/memory` or `/context` rather than assuming discovery. These conventions do not establish support in every chatbot. [Official Claude Code memory guidance](https://code.claude.com/docs/en/memory)

For ordinary chat, paste or attach the completed instructions and say:

> Read this project's AGENTS.md and the attached brief as our working instructions. Summarize the project, allowed actions, current stage, and next acceptance check. Tell me which files and tools you can actually access. If you cannot access the course repository, ask me for the named guide or skill file. Do not claim you loaded material you could not read.

## When coordination gets stuck

| Problem | Next action |
| --- | --- |
| Helpers disagree | Ask each for a reproducible example on the same version; test it |
| Reviewer saw old files | Stop; send the current frozen copy and reset the review record |
| Two writers changed one file | Pause both; retain both results; let the coordinator compare and integrate deliberately |
| A helper claims success without evidence | Ask which check ran, on which version, and what it observed |
| Delegation never appears | Use a second manual chat; do not describe simulated roles as subagents |
| Session or usage ends | Save the handoff, exact files, unfinished check, and next action; resume one task at a time |

These instructions describe a bounded working method. They do not certify the generated applications or replace the actual browser checks, partner playtests, and release records.

<!-- END COURSE SOURCE: docs/multiple-agents.md -->


---

# Source file: docs/linkedin-wrap-up.md

<!-- BEGIN COURSE SOURCE: docs/linkedin-wrap-up.md -->

# Optional: share what you built and request Mark’s endorsement

At the end of class, Mark’s invitation is simple: **add vibe coding to your LinkedIn profile and publish a post about the class, then send Mark your profile and post links so he can endorse the skill you practiced.** Participation is optional and does not affect class completion.

## Your steps

1. Add **Vibe Coding** in your profile’s Skills section if that skill is available. If you cannot find it, ask Mark which available, accurate skill label to use. Describing vibe coding in your About section alone does not create an endorsable skill.
2. Connect with Mark Hinkle if you are not already connected. Use the profile Mark identifies during class rather than guessing a profile URL. LinkedIn skill endorsements come from first-degree connections. [LinkedIn’s skill endorsement guide](https://www.linkedin.com/help/linkedin/answer/a565106/skill-endorsements-overview)
3. Publish a LinkedIn post about the class in your own words. Describe something you built, something you learned, or a challenge you worked through. An honest account qualifies; praise is not required. A screenshot or project link is useful if you want to share it.
4. Send Mark your **profile URL, post URL, and exact skill name** through the class’s existing instructor contact channel. Tagging him in the post is optional; sending the links makes the request easy to find.

Mark handles the endorsement personally. This is recognition of the skill practiced in class, not a certification or a claim of professional software-engineering expertise. Describe what you actually completed; if a project is unfinished, say what you built so far.

## A post you can personalize

Replace every bracketed item and check each statement before publishing:

> I took Vibe Coding for Non-Technical Professionals with Mark Hinkle and All Things AI.
>
> I worked on [your website idea] and [your game choice]. My favorite lesson was [one specific thing you learned]. The part I had to work through was [a real challenge or surprise].
>
> Here’s [what works so far / the finished project]: [optional link or screenshot]. Next I want to [one improvement].
>
> As part of the class wrap-up, Mark offered a LinkedIn skill endorsement to participants who share a post about their experience.

The final sentence makes the endorsement offer clear to readers. Keep your own voice and your honest experience; no specific compliment or rating is required. Remove the project-link line if you do not want to share the project publicly.

## Ask your chatbot for a draft

> Help me draft a short LinkedIn post about this class using only these facts: [what I built, what works, what I learned, and a challenge]. Keep my voice. Mention that Mark offered a skill endorsement to participants who post about their experience. Do not invent outcomes, praise, or expertise. Give me a draft to review; do not publish it or message anyone.

## Everyone gets the slides; reviewers get the book

Separate from the LinkedIn post, and open to everyone: every attendee gets the slides and all course files in the course repository (https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals). Tell Mark what worked and what did not, and he will also send you the preview release edition of his upcoming book, *Software Development for Non-Programmers: Beyond Vibecoding*. Good or bad; critical feedback is the most useful kind. Use the [feedback template](templates/feedback.md): copy it into an email to mrhinkle@allthingsai.org with the subject "ATO workshop feedback," or hand Mark a filled-in printout before you leave.

## Your handoff note

- My LinkedIn profile URL:
- My class-post URL:
- The exact skill I added:
- Connection with Mark: connected / request pending
- Links sent to Mark on:
- Endorsement: pending / received
- Feedback sent for the preview edition of the book: yes / not yet

Course assistants may help draft the post and organize these links. The learner chooses what to publish and sends their request; the course materials do not initiate posts, connection requests, messages, or endorsements.

<!-- END COURSE SOURCE: docs/linkedin-wrap-up.md -->


---

# Source file: templates/feedback.md

<!-- BEGIN COURSE SOURCE: templates/feedback.md -->

# Workshop feedback: everyone gets the slides, reviewers get the book

Everyone who attended gets the slides and every course file: they're in the course repository, https://github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals, under `presentations/ato-2026-workshop/`. Tell me what worked and what didn't, and I'll also send you the preview release edition of my upcoming book, *Software Development for Non-Programmers: Beyond Vibecoding*, a practical guide to using AI to build useful software without having to write code. Good or bad, specific or short, it all counts. The critical notes are the ones that make the next class better, so don't hold back.

Copy the block below into an email to **mrhinkle@allthingsai.org** with the subject line **ATO workshop feedback**, or hand me a filled-in printout before you leave. Answer what you can; blank lines are fine.

```
Name (as you want it in the book's thank-you list, or "anonymous"):
Email to send the book to:

1. What did you build today? (URLs welcome)

2. The moment it clicked:

3. The moment you were most stuck, and what got you unstuck:

4. One thing to cut or change next time:

5. One thing to keep exactly as it is:

6. Would you recommend this to a colleague? Who, and why or why not?

7. Anything else:
```

What happens next: I read every reply myself. The preview edition goes out to the email above within a couple of weeks of the workshop, and you'll get the finished book when it ships. Your feedback may be quoted anonymously in the course materials unless you say otherwise here.

<!-- END COURSE SOURCE: templates/feedback.md -->


---

# Source file: docs/prompt-library.md

<!-- BEGIN COURSE SOURCE: docs/prompt-library.md -->

# Prompts to keep nearby

Use one prompt for the current stage, with the relevant skill and actual project files. Replace bracketed phrases before sending. If the assistant cannot open the course link, attach `AI-COURSE-PACK.md` or the current lesson.

## Start or resume

> Read AI-START.md from the course materials I provided. Tell me which files you actually received, then help me with [website / game]. I am [starting fresh / continuing / stuck]. Give me one next action and an observable completion check.

> Read my project-state.md and current files. Summarize the version, completed checks, unresolved issue, and next action. Ask for missing files before editing. Keep the working features intact.

## Define and build

> Interview me about the audience, purpose, and first useful result. Ask no more than three questions at a time. Turn my answers into a one-page brief with five checks a person can actually perform.

> Plan three small increments. For each, name the visible result and how we will check it. Leave optional features for later.

> Build only the next agreed increment as a complete index.html with styles and scripts included where practical. Return the runnable file, not a screenshot. Explain how I save and open it. If you use separate assets, list their exact filenames and folders.

## Improve without breaking

> For [audience], change [one thing]. Preserve [working features]. Show the files you changed and tell me how to repeat the acceptance check. Do not rewrite unrelated parts.

> Explain this error in plain language: [exact error]. My steps were [steps]; I expected [result] and observed [result]. The last change was [change]. Identify the smallest useful check before proposing a repair.

> Two repairs have not worked. Summarize what was tried and the evidence. Compare the actual files with my last working copy. Propose a narrow recovery or an instructor help request, without speculative rewrites.

## Check the website

> Inspect this exact version against my brief. Separate code inspection from browser tests. Check the main action, every link, content, keyboard use, and narrow-screen layout. Mark each Passed, Failed, or Not tested and name the evidence.

## Check the game

> Test the start, play, result, and restart loop against game-rules.md. Check double-clicking an answer, scoring once, end-of-round behavior, three restarts, keyboard and touch. Tell me which checks you actually performed and which I must try.

> Tune only [speed / gap / time / target score]. Keep the rules otherwise unchanged. Save the original value, ask a partner to replay the same version, and compare what they observe.

## Get a second opinion

> Review the attached [version] read-only. You did not build this copy. Find reproducible problems that affect the stated user journey. Give steps, expected versus actual behavior, and the smallest likely fix. Do not edit, deploy, or invent test results.

See [multiple-agent options](docs/multiple-agents.md) for using manual chats, native helpers, or separate worktrees.

## Publish and pause

> Prepare publication for [repository], [branch/version], and [Vercel project]. Confirm the intended audience and whether this action publishes production. List the checks still needed. Proceed only within the publication permission I have actually given.

> Check the actual deployed URL [URL] against the same acceptance checks. A successful upload alone is not proof. Record the version, device, observations, and any untested behavior.

> Update project-state.md with the actual files, saved version, working behavior, failed or untested checks, current blocker, and one next action. Give me a short prompt for continuing in a new chatbot.

## Choose the featured alien game

Attach [the game menu](docs/game-options.md), [Alien Tic-Tac-Toe walkthrough](docs/alien-tic-tac-toe.md), and the current game skill.

> Help me build Alien Tic-Tac-Toe from the attached course rules. First confirm you can read those rules. This is a solo variant: selecting an empty square starts a battle; winning claims X, losing claims O, and there is no separate opponent turn. Build the board, battle, and connection as separate checkpoints. Keep the first version turn-based and self-contained. Give me one visible check at a time.

## Prepare an Arcade review packet

Attach [the submission guide](docs/arcade-submission.md), [template](templates/arcade-submission.md), and your actual game files and test record.

> Help me prepare my game for possible All Things AI Arcade inclusion. Describe what makes it fun, record the playable URL and matching source version, and summarize only tests we actually performed. Identify missing evidence and asset credits. Fill the template for me to review and hand to the instructor. Do not claim the game has been selected or integrated.

<!-- END COURSE SOURCE: docs/prompt-library.md -->


---

# Source file: docs/glossary.md

<!-- BEGIN COURSE SOURCE: docs/glossary.md -->

# Plain language glossary

Use this page when the chatbot, GitHub, or Vercel introduces an unfamiliar word. You do not need to memorize the terms before building. Return to [Start here](START-HERE.md), the [website walkthrough](docs/website-walkthrough.md), or the [game walkthrough](docs/game-walkthrough.md) when you have enough context to take the next step.

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

Platform interfaces and access rules change. Use the [setup guide](setup-guide.md) for dated official account and deployment references, and [troubleshooting](docs/troubleshooting.md) for a specific failure.

<!-- END COURSE SOURCE: docs/glossary.md -->


---

# Source file: skill-guide.md

<!-- BEGIN COURSE SOURCE: skill-guide.md -->

# Skills for the vibe coding class

These eleven short skills (ten stages plus plan-first) adapt the workflow in Mark Hinkle's VibeCoding-a-Website repository for the foundations and website project in a six-hour, two-project business workshop. Seven additional game skills are in the [game skill guide](game-skills-guide.md). Each accepts a specific input and produces an inspectable result. They are draft instruction files, not installed plugins or a promise that every chatbot has the same tools.

## Use a skill

For the portable route, open the relevant SKILL.md, paste or attach its contents to the chosen assistant, add the stage prompt below, and supply the previous stage's artifacts. Ask the assistant to follow the instructions for that stage. If it cannot write files, copy the returned artifact into your project notes.

For native installation, use the chosen platform's current supported skill workflow and verify that the skill appears. The original repository uses .claude/skills. Do not assume placing this package in a folder automatically installs it in ChatGPT, Claude chat, or another product. In supported OpenAI surfaces, installed skills can be selected with @ in ChatGPT or $ in Codex. [Official skill guidance](https://learn.chatgpt.com/docs/skills-and-plugins)

The skills are deliberately self-contained. No scripts, API keys, or original skill installation are required to read them. An ordinary chatbot may supply complete files for the learner to save, test, and upload. Automatic editing, testing, repository changes, and deployment require the corresponding tools and authorized connections.

## Plan first, every time

Before any stage that produces files, load [vc-plan-first](skills/vc-plan-first/SKILL.md). It makes the chatbot give you a plan (files, order, three hand checks) and wait for your approval, and it tells you which size of model to use for the step. See [plan first and models](docs/plan-first-and-models.md). To write your own skill, see the [skills guide](docs/skills-guide.md) and the [template](templates/SKILL-template.md).

## Stage prompts

### Teach the lifecycle

[vc-sdlc-coach](skills/vc-sdlc-coach/SKILL.md)

> Explain the software development lifecycle using our workshop website. Ask me a few questions to check that I understand it.

### Prepare the workspace

[vc-setup-guide](skills/vc-setup-guide/SKILL.md)

> Help me prepare GitHub and Vercel, then establish a file or repository workflow with my favorite chatbot. Verify the project identity and tell me which capabilities work.

### Define the first version

[vc-project-brief](skills/vc-project-brief/SKILL.md)

> Interview me about my project, then create a short brief with a small first version and clear acceptance checks.

### Scope the first version

[vc-project-scope](skills/vc-project-scope/SKILL.md)

> Use my brief to decide what we will make now, save for later, and leave out. Keep one page, three sections, and one useful action. Give me five observable checks and save the scope for the planning stage.

Choose a [starter or your own idea](website-starters/README.md). The [scope-and-plan lesson](docs/scope-and-plan.md) explains the distinct outputs: brief = who and why; scope = what; plan = how. Attach the chosen HTML to your chatbot if using a starter.

### Plan the page and work

[vc-project-plan](skills/vc-project-plan/SKILL.md)

> Use my agreed brief and scope to plan the visitor journey, page layout, and three small build increments. Explain what we will check after each.

### Build one increment at a time

[vc-build-small](skills/vc-build-small/SKILL.md)

> Build the first agreed increment from my brief and plan. Show me the result and how to check it before continuing.

### Test the actual experience

[vc-quality-check](skills/vc-quality-check/SKILL.md)

> Test this exact version against my acceptance checks. Show passed, failed, and untested items with evidence, and prioritize the fixes.

### Publish the checked version

[vc-publish-site](skills/vc-publish-site/SKILL.md)

> Prepare this checked version for Vercel. Show the exact project and publication details, then guide me through deployment and live verification.

### Change and recover

[vc-maintain-site](skills/vc-maintain-site/SKILL.md)

> Make this one update while preserving the working page and links. Show the difference, test the preview, and explain how I can recover the prior version.

### Demonstrate and hand off

[vc-project-handoff](skills/vc-project-handoff/SKILL.md)

> Fill in project-state.md for each project from the actual records, list both live URLs, and write a two-minute demo script. Make unfinished or untested work clear.

## What was checked

The package is checked for skill frontmatter, naming, local links, and consistency with the class sequence. These checks do not establish that the skills have been exercised end to end on every supported product. Before teaching, rehearse the complete project on each offered path and revise instructions based on observed behavior.

<!-- END COURSE SOURCE: skill-guide.md -->


---

# Source file: game-skills-guide.md

<!-- BEGIN COURSE SOURCE: game-skills-guide.md -->

# Game skills for the vibe coding class

Seven new classroom skills derived from the All Things AI Arcade. Use them with your favorite chatbot to make a small browser game during project 2. The workflow is reusable across themes; students may make something entertaining, educational, or connected to their work.

## How to use the pack

Open the current stage's SKILL.md and paste or attach it to your chatbot with its starter prompt, the selected game walkthrough, and the earlier stage's output. Start by sharing [the game menu](docs/game-options.md); for Alien Tic-Tac-Toe, also attach [its complete rules and walkthrough](docs/alien-tic-tac-toe.md). A path printed in a skill does not give an ordinary chatbot the file. If the platform supports native skills, install through its supported workflow and verify discovery. Pasting the instructions is sufficient for the portable route; it does not grant tools or account access.

Keep the game in its own folder and repository. Request complete runnable HTML, CSS, and JavaScript files. Open the files in a browser, test them, and publish them to the game's own Vercel project. Use a connected coding workspace if available, or manually upload the checked files through GitHub.

## Seven stages

| Skill | Input | Output |
| --- | --- | --- |
| vc-game-brief | Idea and preferred theme | game-brief.md |
| vc-game-rules | Agreed brief | game-rules.md and observable checks |
| vc-game-build | Brief and rules | Runnable game files Recovery route: the three tested checkpoints in `examples/alien-tic-tac-toe/`. |
| vc-game-look-feel | Playable game | Clear visual treatment and game-style.md |
| vc-game-feedback | Working outcomes | Result messages, replay, and game-feedback.md |
| vc-game-playtest | Exact build and rules | game-test-report.md and focused repairs |
| vc-game-publish | Checked game and test report | Deployed game or blocker, and game-release.md |

The two documentation outputs in the polish stage can be short paragraphs; the playable result is the priority. Students can skip optional visual effects and educational content while still completing the core game.

## Choose a starter recipe

### 1. Alien Tic-Tac-Toe — featured choice

Mark’s new classroom idea: selecting an empty square starts a short alien battle. Win to place X; lose and the alien places O there. Three Xs wins, three Os loses, and a full board without a line draws. This is a solo variant with no extra opponent turn. Build the plain board, a turn-based battle, then connect them. See the [complete rules and walkthrough](docs/alien-tic-tac-toe.md).

### 2. Five-question quiz — easiest choice

Inspired by the Arcade’s small puzzle patterns, including Promptle, rather than copying its word rules. Five questions, one point per correct answer, clear feedback, and replay. Use the [worked quiz example](docs/game-walkthrough.md). Verify any factual answers. A full word puzzle is a later extension.

### 3. One-button space dodger — action choice

Inspired by Flappy Brains: tap or press Space to boost a ship, pass generous obstacle gaps, and score each obstacle once. Collision ends the run; restart clears movement and score. Keep one screen and one obstacle type. The [game menu](docs/game-options.md) contains the starter brief and acceptance checks. Tune timing, collision, and restart behavior before artwork.

Students build **one** of these games. A different small idea is welcome if its scope fits the same time. Strong finished projects can use the [optional Arcade submission path](docs/arcade-submission.md); acceptance and later integration are decided by Mark/ATA.

## Starter prompts

### Choose a small game

[vc-game-brief](game-skills/vc-game-brief/SKILL.md)

> Help me choose a small game I can finish in this class. Ask about my theme and preferred gameplay, then write a brief and five observable completion checks.

### Write rules and controls

[vc-game-rules](game-skills/vc-game-rules/SKILL.md)

> Turn my game brief into short instructions, keyboard and touch controls, score rules, and a table showing start, play, result, and restart.

### Build the first playable version

[vc-game-build](game-skills/vc-game-build/SKILL.md)

> Build a plain playable version from my brief and rules. Make the entire start, play, result, and restart loop work before adding decorative effects.

### Make the game clear and readable

[vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md)

> Polish this working game without changing its rules. Make the player, targets, hazards, score, and controls clear on a phone and a laptop.

### Explain results and invite replay

[vc-game-feedback](game-skills/vc-game-feedback/SKILL.md)

> Improve the result screen so players understand what happened and can immediately play again. Include a brief sourced lesson only if it fits my game.

### Playtest and change one thing at a time

[vc-game-playtest](game-skills/vc-game-playtest/SKILL.md)

> Help a partner playtest this exact game without coaching. Record real observations, fix the biggest problem, and tune one difficulty setting at a time.

### Publish and hand off the game

[vc-game-publish](game-skills/vc-game-publish/SKILL.md)

> Prepare my checked game for its own GitHub repository and Vercel project. After publication, verify a complete round and restart at the actual URL.

## What came from the Arcade

The inspected Arcade specification contributes a simple main action, short instructions, matching keyboard and touch controls, clear game states, adjustable difficulty, readable phone graphics, understandable outcomes, and immediate replay. Its five review perspectives become playtest questions, with another learner supplying the actual first-time-player test.

The live beta guide also asks testers to record the steps, expected result, and actual result and to check desktop and phone behavior. [Arcade beta guide](https://staging.allthingsai.org/arcade/beta)

We adapted the patterns rather than distributing the site's implementation or assets. The source repository's game instructions are not packaged game skills, and these seven files are newly written. They omit ATA accounts, remote scores, registration, newsletter prompts, medallion unlocking, and repository-specific agent operations. Browser-local best scores are optional.

## Readiness

These files are draft skills with validated formatting and checked local links. The source material and live screens were inspected, but the new skills have not yet been used to build and publish all three classroom recipes. Rehearse the chosen recipes before class. Native installation, complete game behavior, and classroom timing remain to be verified in that rehearsal.

<!-- END COURSE SOURCE: game-skills-guide.md -->


---

# Source file: handouts/student-workbook.md

<!-- BEGIN COURSE SOURCE: handouts/student-workbook.md -->

# Student workbook

Use this workbook to finish two projects during the class: a simple website and a small browser game. The day contains **360 teaching minutes**, with lunch and breaks added separately. Use your favorite chatbot. You can paste or attach a skill's instructions; native skill installation is optional.

Keep a separate folder, GitHub repository, and Vercel project for each project. Your website belongs in `my-first-site`; your game belongs in `my-first-game`. Choose your own names if you prefer, but record them below and check the destination before every upload or release.

The [setup guide](setup-guide.md) explains the portable file route and connected coding workspaces. The [website skill guide](skill-guide.md) and [game skill guide](game-skills-guide.md) provide the instructions to use at each stage.

## My workspace

| Item | My answer |
| --- | --- |
| Name | |
| Class date | |
| Preferred chatbot | |
| Route: portable files or connected workspace | |
| Website folder and GitHub repository URL | |
| Website Vercel project name | |
| Game folder and GitHub repository URL | |
| Game Vercel project name | |
| My partner for testing | |
| Setup blocker, if any | |

A connection badge does not establish what your assistant can do. Confirm that you can receive complete runnable files. For a connected workspace, also confirm the repository and branch before asking it to make changes. If setup is blocked, use the instructor's checkpoint or work with a partner and record what remains unresolved.

## Project 1: my website brief

Copy the completed brief into the website project's `project-brief.md`. Use [vc-project-brief](skills/vc-project-brief/SKILL.md), then [vc-project-plan](skills/vc-project-plan/SKILL.md).

| Question | My answer |
| --- | --- |
| Working title | |
| Who is this website for? | |
| What should a visitor understand or accomplish? | |
| Main heading | |
| Two or three useful sections | |
| Main link or button label | |
| Exact destination or behavior of that link/button | |
| Content and images I can use | |
| Desired style in three words | |
| What is deliberately outside the first version? | |

**My one-sentence outcome:** A visitor can ____________________________________.

**My completion checks:** Write observable actions. “It looks good” is not enough; “the main button opens the stated event page” can be tested.

| Check | Action to try | Expected result |
| --- | --- | --- |
| W1: purpose | Ask a partner what this page is for | |
| W2: content | Read the heading and sections | |
| W3: main action | Follow the primary link/button | |
| W4: navigation | Follow each navigation link | |
| W5: phone layout | Open or resize the page to a phone-sized view | |

Build the smallest complete version using [vc-build-small](skills/vc-build-small/SKILL.md). Request complete runnable files. Open the exported `index.html` in your browser and keep any supporting files at their expected paths. Save a working checkpoint before a larger change.

**A focused change request:** For this audience, change ____________. Preserve ____________. I will check it by ____________.

## Project 2: my game brief

Copy this brief into the game project's `game-brief.md`. Use [vc-game-brief](game-skills/vc-game-brief/SKILL.md). Choose one short round and one main mechanic.

| Question | My answer |
| --- | --- |
| Game title and theme | |
| Who will play? | |
| Choice: Alien Tic-Tac-Toe, five-question quiz, one-button space dodger, or another approved small idea | |
| What is the player's goal? | |
| What is the main action? | |
| How long should one round take? | |
| What makes a round end? | |
| What will make someone want to play again? | |
| What is outside the first version? | |

**My one-sentence game:** The player ____________ to ____________ before ____________.

Use [vc-game-rules](game-skills/vc-game-rules/SKILL.md) to complete the following rules table. Save it as `game-rules.md`. A partner should be able to explain a round from this table before the game is built.

| Situation | Player action or event | What the game remembers or changes | What the player sees | Check |
| --- | --- | --- | --- | --- |
| Before play | Open the game | | | Instructions and Start are understandable |
| Start | Activate Start | | | One new round begins |
| Play | Use the main control | | | The control has the stated effect |
| Success during play | | | | Progress or score changes once |
| Invalid input or mistake | | | | The response matches the rules |
| Round ends | | | | Play stops or changes as intended; result is clear |
| Restart | Activate Play again | | | Score, positions, guesses, timers, and other round state reset as agreed |
| Repeat | Finish and restart several rounds | | | No duplicated actions or unintended speed changes |

| Controls and scoring | My rule |
| --- | --- |
| Keyboard control | |
| Pointer or touch control | |
| How points/progress are earned | |
| Win condition, if applicable | |
| Loss or round-end condition | |
| Difficulty setting I can adjust | |
| Optional best score: absent or stored only in this browser | |

Build the complete start → play → result → restart loop using [vc-game-build](game-skills/vc-game-build/SKILL.md). Add appearance and feedback after that loop works. Use [vc-game-look-feel](game-skills/vc-game-look-feel/SKILL.md) and [vc-game-feedback](game-skills/vc-game-feedback/SKILL.md) for clear controls, readable scores, understandable results, and replay.

## Test report template

Create **one report per project**. Save the website's as `test-report.md` and the game's as `game-test-report.md`. Use [vc-quality-check](skills/vc-quality-check/SKILL.md) or [vc-game-playtest](game-skills/vc-game-playtest/SKILL.md).

| Test context | Record |
| --- | --- |
| Project and tester | |
| Date | |
| Version: commit/checkpoint label and file copy tested | |
| Location: local files, preview URL, or published URL | |
| Browser and device | |
| Real phone used, or only a resized browser? | |

Use only **Passed**, **Failed**, or **Not tested**. Record what you actually observed. A chatbot's claim is not a substitute for opening the files and trying the behavior. A local result does not establish the published result; repeat the key checks after deployment.

| ID | Steps | Expected result | Observed result | Status | Evidence or blocker |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

For the website, cover purpose, content, the main action, navigation, and phone layout. For the game, cover instructions, Start, controls, scoring, the end of a round, and repeated restart. If you added saved scores, also check refresh and what happens when browser storage is unavailable. Mark an untested device honestly.

**Two-minute partner playtest:** Let your partner try the game without coaching.

| Prompt | Observation |
| --- | --- |
| Where did the player hesitate or ask for help? | |
| Which rule or outcome surprised them? | |
| Which control or score behaved incorrectly? | |
| Would they replay, and why? | |
| Biggest issue to fix first | |

| Repair record | Record |
| --- | --- |
| Issue selected | |
| One change requested | |
| New version/checkpoint | |
| Same test repeated and actual result | |
| Other working behavior checked again | |
| Remaining failure or untested behavior | |

## Release record template

Complete this separately for both projects. Save the website's as `release-record.md` and the game's as `game-release.md`. Use [vc-publish-site](skills/vc-publish-site/SKILL.md) or [vc-game-publish](game-skills/vc-game-publish/SKILL.md).

**Before deployment:** The first Vercel deployment of a project is production. Confirm that the intended content is suitable for the people who can access the URL. Later updates to the configured production branch can trigger deployment. Follow the [setup and publication guide](setup-guide.md#publish-each-project).

| Release detail | Record |
| --- | --- |
| Project: website or game | |
| GitHub repository URL and owner | |
| Vercel account/team and project name | |
| Branch and commit/checkpoint released | |
| Intended audience and access behavior | |
| Person approving this publication and date | |
| Deployment status | |
| Actual URL, if one exists | |
| Date and device used to open that URL | |
| Key published checks and observations | |
| Second person/device check, or Not tested | |
| Remaining failures or limitations | |
| If blocked: exact blocker and working files retained | |

Choose an accurate completion statement:

- **Published and checked:** I opened the URL above and observed the recorded checks.
- **Published, verification incomplete:** A deployment exists, but these checks remain: ____________.
- **Working files retained, deployment blocked:** My files are at ____________; the blocker is ____________.

## Two-project handoff

Use [vc-project-handoff](skills/vc-project-handoff/SKILL.md) to prepare this record. Keep a copy with your class notes and a project-specific copy in each repository if useful.

| Detail | Website | Game |
| --- | --- | --- |
| Purpose and intended user | | |
| Owner | | |
| Working files/folder | | |
| GitHub repository | | |
| Vercel project and actual URL | | |
| Version/checkpoint | | |
| Test report location | | |
| Release record location | | |
| What works, based on checks | | |
| Known limitations and Not tested items | | |
| How to open or run it | | |
| Next small improvement | | |
| How I will check that improvement | | |

**My final demonstration:** Show the website's main action, complete a game round and restart, then point to the saved versions and test records. If a deployment is blocked, demonstrate the working files and explain the recorded blocker.

**What I learned:** One assumption I corrected was ____________. The evidence that changed my mind was ____________.

## Optional: offer your game to the Arcade

Choose from the [game menu](docs/game-options.md). For Alien Tic-Tac-Toe, record both battle and board outcomes, including X win, O win, draw, and restart during battle. If you want your finished game considered for the All Things AI Arcade, fill in the [submission template](templates/arcade-submission.md) and share it with the instructor. Explain what is fun, include your playable link and source version, and record known issues. Selection and integration happen later.

## Optional: share your class experience on LinkedIn

Want Mark to endorse your vibe coding skill? Add the skill to your profile, publish an honest LinkedIn post about the class, and send Mark your profile link, post link, and exact skill name. Connect with him if needed. Follow the [LinkedIn wrap-up guide](docs/linkedin-wrap-up.md) for the post example and handoff checklist. This is optional; you can post after class.

## Website choice, scope, and plan

My starting point: vanilla / ATA Orbit / ATA Groove / dream restaurant / dream product / dream business / pet / my own idea.

Use [the scope-and-plan lesson](docs/scope-and-plan.md), [scope template](templates/website-scope.md), and [plan template](templates/website-plan.md). Record what belongs now, what waits, and how each of three small changes will be checked. Keep this within the website’s existing planning time.

<!-- END COURSE SOURCE: handouts/student-workbook.md -->


---

# Source file: templates/AGENTS.md

<!-- BEGIN COURSE SOURCE: templates/AGENTS.md -->

# Learner project instructions

This is a template. Before using it, copy it to the root of one learner project, keep the filename `AGENTS.md`, and fill in the fields below. Website and game projects get separate copies. Do not invent missing project details.

## Project identity

- Project name: [fill in]
- Project type: [website or browser game]
- Owner and coordinator: [fill in]
- Purpose and intended user: [fill in]
- Working folder: [fill in]
- GitHub repository: [fill in, or not connected]
- Vercel project: [fill in, or not created]
- Brief and rules files: [fill in]
- Current saved version or checkpoint: [fill in]
- Current stage and next approved outcome: [fill in]

## Work with the learner

Use plain language. Explain the next action and why it helps. Confirm project identity and read the brief before editing. Distinguish files and tools you actually accessed from material that is unavailable. If a link cannot be read, ask for its contents or an attachment.

For ordinary chat, return complete runnable files with exact filenames and saving instructions. Do not substitute a screenshot or description for the requested files. For a connected workspace, inspect existing files and preserve working behavior. Use the actual project setup; do not invent test commands or claim tests ran.

The core project uses static HTML, CSS, and JavaScript. Keep the scope small. Accounts, remote databases, multiplayer, and external score services require a separate decision and are outside the first classroom version.

## Stage workflow

1. Define the user, purpose, first-version scope, and observable acceptance checks.
2. Plan one small increment. Ask only for missing decisions that affect the outcome.
3. Build the agreed increment in the designated project folder. Preserve a working checkpoint before substantial changes.
4. Check the actual files against the brief. Report Passed, Failed, or Not tested with observations.
5. Repair the most important failure and repeat its check plus the core working flow.
6. Prepare the specific release details for the owner's approval. After an authorized deployment, check the actual URL.
7. Leave a handoff identifying the version, tests, limitations, and next action.

## Acceptance checks

For a website, check its purpose, accurate content, main link/button destination, navigation, phone layout, and keyboard usability.

For a game, check instructions, Start, supported keyboard and touch controls, score changes, invalid actions, round-end behavior, and repeated restart. Restart must reset the state specified in the rules. If browser-local scores are included, check refresh and unavailable storage.

Record the version, browser/device, steps, expectation, and observation. Keep local-file, preview, and production results separate. A code-reading concern is not an executed browser test. Ask the learner or a partner to perform checks your tools cannot do. Record real-device gaps honestly.

## Boundaries

Edits require an agreed task. Saving a local draft does not authorize a commit, push, merge, or deployment. Obtain the owner's explicit authorization for those actions and name the destination and version. Account credentials remain with the learner; do not request that they paste authentication material into chat. Do not make purchases, change account permissions, or activate paid services automatically.

Do not publish private or personal material without the owner's specific approval. Ask before transferring project material to another provider. A private repository does not establish private website access. The first Vercel deployment is production; explain that before the owner approves publication.

## Optional multiple-agent work

Use helpers only when the owner requests delegation or approves the proposed split. Start with one builder and one read-only reviewer. Give every helper a bounded task, exact input version, allowed files, checks, and stopping point.

One writer owns each working folder. Concurrent writers require separate worktrees or isolated copies; never share a checkout. Same-file implementation is sequential. Freeze the reviewed version. The reviewer reports findings without edits and identifies untested behavior. Only the coordinator integrates approved work; retest the integrated version. Do not describe several roles within one chat as independent agents.

## Resume record

Keep this record in `project-state.md` at a stopping point, following the course's state template. The coordinator owns that shared record; individual helpers return separate handoffs instead of overwriting it. Update the existing record rather than creating a competing summary.

- Current project, folder, and saved version:
- Brief/rules and current stage:
- Completed outcome and files changed:
- Checks performed and observations:
- Failures and Not tested items:
- Publication status and actual URL, if any:
- Pending owner decision or blocker:
- Next single action and how to verify it:

On resume, inspect the actual files and compare their version with the handoff before proceeding. A handoff describes prior work; it is not evidence that the current files still match it.

<!-- END COURSE SOURCE: templates/AGENTS.md -->


---

# Source file: templates/CLAUDE.md

<!-- BEGIN COURSE SOURCE: templates/CLAUDE.md -->

@AGENTS.md

# Claude Code project instructions

This optional bridge belongs beside a completed `AGENTS.md` at the root of a learner project. The import above is Claude Code syntax. Keep shared project rules in `AGENTS.md`.

Before work, identify the project and summarize its instructions. Verify the imported file is available. If it is missing, stop and ask for the completed project instructions rather than inventing them.

Use the capabilities available in the current session. Do not claim that ordinary Claude chat loaded this file automatically. In ordinary chat, the learner should paste or attach the completed `AGENTS.md` directly.

Claude Code's documented import and discovery behavior was checked on October 5, 2026 in the [official memory guide](https://code.claude.com/docs/en/memory). Check `/memory` or `/context` in the actual Claude Code session to confirm loaded instructions.

<!-- END COURSE SOURCE: templates/CLAUDE.md -->


---

# Source file: templates/project-state.md

<!-- BEGIN COURSE SOURCE: templates/project-state.md -->

# Project state: resume here

Copy this template into your own project as `project-state.md`. Update it at checkpoints. Attach the actual latest files along with this record when changing chats or assistants.

| Field | Value |
| --- | --- |
| Project name and type: website or game | |
| Owner and intended audience | |
| Local folder or workspace | |
| GitHub repository and branch, if available | |
| Version: commit or clearly named saved copy | |
| Last updated | |
| Chatbot and route: portable or connected | |
| Current lesson and skill | |
| Vercel project and URL, if deployed | |
| Last working copy and how to reopen it | |

## Goal and agreed scope

Purpose:

First version includes:

Out of scope:

## Files the next assistant must receive

List the actual file names and locations. Do not write “in the previous chat” as the only location.

## Observed state

| Check | Version and location tested | Passed / Failed / Not tested | Actual observation |
| --- | --- | --- | --- |
| | | | |

## Current blocker or last change

Exact steps:

Expected result:

Actual result or error (remove sensitive information):

Repairs already attempted and their results:

## Next action

One small task:

Completion check:

Who owns the next edit:

Permissions already given, including any specific release destination:

## Prompt for a new chat

> Read this state record and the attached current files. Identify the project, version, what has actually been tested, and the next action. Tell me if a necessary file is missing. Continue from that action; do not rebuild the entire project or claim access to the earlier conversation.

<!-- END COURSE SOURCE: templates/project-state.md -->


---

# Source file: templates/help-request.md

<!-- BEGIN COURSE SOURCE: templates/help-request.md -->

# Help request

Use this to get useful help from your chatbot, a partner, or the instructor. Share the smallest relevant files and observations. Remove passwords, keys, authentication codes, private customer information, and sensitive log values.

- Project and version:
- Current lesson or skill:
- Exact file or URL:
- Browser/device and chatbot route:
- What I clicked or typed:
- What I expected:
- What actually happened:
- Exact error text, if any:
- Last change before the problem:
- What I already tried and what happened:
- Location of my last working copy:
- Screenshot or relevant file attached (if available):

**Request:** Help me identify one likely cause and one reversible check. Explain what a successful result would look like. Preserve my working files and do not replace the entire project to fix this one problem.

<!-- END COURSE SOURCE: templates/help-request.md -->


---

# Source file: templates/agent-task.md

<!-- BEGIN COURSE SOURCE: templates/agent-task.md -->

# Bounded agent task

Fill this in and paste or attach it with the actual input files. A file link alone does not establish access.

## Assignment

- Task name:
- Role: builder / read-only reviewer / researcher / coordinator
- Project: website / game
- Owner and coordinating chat:
- Desired outcome in one sentence:
- Why this task can proceed independently, or which earlier result it needs:

## Exact inputs and ownership

- Input version: exact commit or frozen file-copy label
- Working folder or isolated worktree:
- Files supplied and brief/rules:
- Allowed files to edit, or “none — read-only”:
- Files and working behavior to preserve:
- Other active writer and their separate ownership, if any:
- Missing access or tools to report before work:

## Checks and limits

- Observable acceptance checks:
- Browser/device or other evidence needed:
- Checks the learner must perform if tools are unavailable:
- Time limit and stopping point:
- Maximum review findings or other output limit:
- Decision to return to the owner if encountered:

Do not change another agent's files. Do not perform a commit, push, merge, deployment, purchase, account change, or transfer to another provider unless the owner explicitly authorizes that specific action. Reviewers return findings without edits. Stop if the input version or ownership is unclear.

## Return to the coordinator

Use the agent handoff format. Identify the version inspected, files changed or read, actual checks, findings, untested behavior, and next action. State whether work was performed by a real delegated agent or supplied through a separate manual chat. Do not claim independent review when you reviewed your own implementation.

<!-- END COURSE SOURCE: templates/agent-task.md -->


---

# Source file: templates/agent-handoff.md

<!-- BEGIN COURSE SOURCE: templates/agent-handoff.md -->

# Agent handoff

## Identity and result

- Task and role:
- Project and working folder:
- Coordinating chat or person:
- Exact input version:
- Output version or frozen file-copy label:
- Status: complete for assigned scope / incomplete / blocked
- Outcome in one sentence:
- Files changed, or files inspected for read-only work:

## Checks and findings

Use Passed, Failed, or Not tested. Record observations, not an assurance that the project is perfect. Label code-reading concerns separately from executed checks.

| Check or finding | Version and location | Steps or evidence | Expected | Observed | Status |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

- Browser and device actually used:
- Biggest remaining issue:
- Untested behavior and why:
- Whether the result was independently reviewed, by whom, and at what exact version:

## Integration and continuation

- Changes the coordinator may need to compare or integrate:
- Conflicts or overlapping ownership:
- Specific owner authorization still needed:
- Publication status and actual URL, if any:
- Next single action:
- Check to repeat after that action:

The coordinator must inspect the actual version, integrate only approved work, and retest the combined result. This handoff does not itself authorize a commit, push, merge, deployment, account change, purchase, or transfer to another provider.

<!-- END COURSE SOURCE: templates/agent-handoff.md -->


---

# Source file: game-skills/vc-game-brief/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-brief/SKILL.md -->

---
name: vc-game-brief
description: Helps a non-programmer pick one small game they can finish in class and writes game-brief.md with the goal, the main action, the theme, and five completion checks. Use when a learner says "help me choose a game," "which game should I make," "write the game brief," "I want a cat-themed tic-tac-toe," or "what can I finish today."
---

# Choose a small game

You are helping a non-programmer choose one small browser game and describe it before anything is built. Your one job is game-brief.md: the concept, the player, the one main action, the theme, what is left out, and five checks a partner can perform.

## When this applies

- The learner is starting project 2 and has not chosen, or has an idea that needs to be made small.
- The learner wants to re-theme Alien Tic-Tac-Toe (cats vs dogs, pizza vs tacos, their own pair).
- Not for the rules and state table. That is vc-game-rules.
- Not for the website or a Track B tool. That is vc-project-brief.
- Not for building. That is vc-game-build.

## What you need before starting

- docs/game-options.md (the three choices) and, for the featured game, docs/alien-tic-tac-toe.md. If either did not arrive, say so and ask for its text; never invent rules.
- The learner's theme and the kind of play they enjoy (board, quiz, action). If missing, ask once and offer Alien Tic-Tac-Toe as the default.
- Never a password, API key, or token.

## Steps

1. Say what you received. Offer the three choices in one line each: Alien Tic-Tac-Toe (featured; a board plus a short battle), five-question quiz (easiest), one-button space dodger (action). The learner picks one.
2. Ask only what changes the brief, in one message: the theme (you, the opponent, three attacks and their three counters, two colors), and whether it is for fun or teaches something. Offer the default theme so "yes" is an answer.
3. Write game-brief.md and show it in full:
   - Concept in one sentence, and the intended player.
   - Main action (featured game: choose an empty square, then answer the opponent's move).
   - A round. For Alien Tic-Tac-Toe: every battle starts at 2 health each; one response is accepted per exchange; an explicit Next exchange button advances; a finished battle fills exactly one cell; no automatic opponent move; X line wins, O line loses, full board draws; Restart game is available throughout play.
   - Theme table: you, opponent, attacks 1 to 3, counters 1 to 3, colors.
   - Left out of version 1: timers, sound, random opponent, logins, leaderboards, downloaded art, extra levels.
   - Five completion checks a partner can perform.
4. Name the recovery route: the three tested checkpoints in examples/alien-tic-tac-toe/ (checkpoint-1-board, checkpoint-2-battle, checkpoint-3-complete). If the build stalls, the learner continues from the one for their stage.
5. Hand back. Say: "Read it. Fix any rule you did not mean. Then vc-game-rules turns it into the state table." Do not build.

## Rules

- Never change the mechanics when the theme changes. Renaming attacks and counters is the only thing a theme does.
- Never add a second mechanic to version 1. The one bounded exception is the featured game: one board plus one short battle.
- Never invent a lesson or business purpose for a game the learner wants for fun.
- Scope rule: one screen or board, one mechanic, finishable today.
- If asked to build, write rules, or pick a font, say the brief comes first and name vc-game-rules.

## Example

**Learner:** "I want the tic-tac-toe one but with cats and dogs. I'm the cat. Write the brief."

**You:** "Received: docs/game-options.md and docs/alien-tic-tac-toe.md. Choice: Alien Tic-Tac-Toe, cats-dogs theme, for fun.

game-brief.md

Concept: a solo tic-tac-toe where you fight a short cat-versus-dog battle for every square. Player: anyone with a phone and two minutes.
Main action: choose an empty square, then answer the dog's move with the right counter.
A round: every battle starts at You 2, Dog 2. The dog shows Bark, then Pounce, then Slobber. One response is accepted per exchange; a correct one takes 1 from the dog, a wrong one takes 1 from you. A Next exchange button appears only while both sides have health. At zero, the battle ends at once: a win puts your cat (X) in the chosen square, a loss puts the dog (O) there. Exactly one square per battle; the dog never takes an extra turn. Three cats in a line wins, three dogs loses, a full board with no line draws. Restart game is on screen during any board or battle and clears everything.
Theme: You 🐱 cat. Opponent 🐶 dog. Bark → Hiss. Pounce → Climb. Slobber → Shake Off. Background #1f1410, accent #fdba74.
Left out of version 1: timers, sound, random dog moves, logins, leaderboards, downloaded art, levels.
Checks a partner can perform:
1. Open the game; the instructions show the three counters before Start.
2. Choose square 1, answer Hiss, Next exchange, Climb; exactly one cat appears in square 1 and no dog appears anywhere.
3. Answer Climb, Next exchange, Hiss on another square; exactly one dog appears there.
4. Win squares 1, 2, 3; 'You won' shows and no other square can be chosen.
5. Start a battle, answer once, press Restart game; all nine squares are empty and the next battle starts at 2 and 2.

Recovery: examples/alien-tic-tac-toe/ has checkpoint-1-board, checkpoint-2-battle, and checkpoint-3-complete. If you stall, continue from the one for your stage; checkpoint 3 already has the cats-dogs theme built in.

Read it. Fix any rule you did not mean. Then vc-game-rules turns it into the state table."

## Checks that it worked

- game-brief.md names one game, one main action, and a theme table with three attacks and three counters.
- The round description matches docs/alien-tic-tac-toe.md: 2 health each, one response per exchange, Next exchange, one cell per battle, Restart game.
- Five checks are written as things a partner can do and see.

<!-- END COURSE SOURCE: game-skills/vc-game-brief/SKILL.md -->


---

# Source file: game-skills/vc-game-build/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-build/SKILL.md -->

---
name: vc-game-build
description: Builds one increment of a small browser game from the brief and rules as a complete index.html the learner can double-click, board first, battle second, connected third. Use when a learner says "build the board," "build the battle," "connect them," "make it playable," or "build the first version of my game."
---

# Build the first playable version

You are helping a non-programmer get a working game one increment at a time. Your one job is the next increment as one complete runnable file, with the exact checks to run before the next increment starts.

## When this applies

- game-brief.md and game-rules.md exist and name the increment: 1 board, 2 battle, 3 connected.
- A previous increment passed its checks and the learner asks for the next.
- Not before the rules. If there are none, use vc-game-rules first. If a change touches more than one file, plan it with ../../skills/vc-plan-first/SKILL.md first.
- Not for looks. That is vc-game-look-feel. Not for result messages. That is vc-game-feedback.
- Not for testing with a partner. That is vc-game-playtest.

## What you need before starting

- game-brief.md and game-rules.md. If missing, ask; never build from memory of the rules.
- The previous increment's file, if there is one. For increment 3, both prototypes. If a file did not arrive, ask for it.
- Which increment to build. If unclear, propose the next one in order and wait.
- Never a password, API key, or token.

## Steps

1. Say what you received, which increment you are building, and that you will return one complete index.html. The learner sees the scope before code.
2. Build only that increment, with plain shapes and text, ordinary buttons, no sound, no timers, no outside files:
   - Increment 1, board: nine cells; select one pending cell and lock the board; two temporary buttons (Award to me, Award to alien) stand in for the battle; all eight lines detected before a full-board draw; Play again; Restart game.
   - Increment 2, battle: 2 health each shown as text; moves in the fixed order; one response accepted per exchange, then responses lock; Next exchange only while both have health; immediate end at zero; Fight again.
   - Increment 3, connected: the pending cell is the only destination; fresh health every battle; the cell is filled exactly once; no automatic opponent move; Return to board places nothing; temporary buttons removed; Restart game in every active state.
3. Return the complete file, first line to last, ready to save as index.html. Never a fragment.
4. Say how to save and open it (plain text editor, no .txt, double-click), and in which folder: prototypes in their own folders; increment 3 in my-first-game.
5. Give the checks for this increment from game-rules.md as "press X, you should see Y," and say which behaviors you did not check yourself.
6. Hand back. Say: "Run the checks. Save a copy named for this checkpoint before anything else changes. If it fails and one repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-1-board, checkpoint-2-battle, or checkpoint-3-complete, whichever matches your stage."

## Rules

- Always return the whole file. A chatbot preview is not the deliverable; the saved file that opens is.
- Never let one click do two things: the answer click never advances the exchange; Next exchange does. Never fill a cell twice; never add an opponent move.
- Never claim a browser check you did not run. Say what you inspected and what the learner must press.
- Scope rule: one increment, one file, one set of checks. Looks, sound, random moves, and levels wait.
- If the rules turn out to be unclear mid-build, stop, say which rule, and return to vc-game-rules.

## Example

**Learner:** "Board and battle prototypes both pass. Here are both files, the brief, and the rules. Connect them."

**You:** "Received: alien-board-checkpoint-01/index.html, alien-battle-checkpoint-02/index.html, game-brief.md, game-rules.md (cats-dogs theme). Increment 3: the connected game. One complete index.html for my-first-game.

Built: choosing an empty cell locks the board and opens the battle for that cell only; every battle starts You 2, Dog 2 at Bark; one response accepted per exchange, then responses lock and Next exchange appears only while both have health; at zero the battle ends and the cell is filled exactly once, cat for a win, dog for a loss; the board is checked at once, lines before draw; Return to board dismisses the summary and places nothing; no automatic dog move; Play again clears the board; Restart game is on screen in every board and battle state and clears everything. Removed: Award to me, Award to alien, Fight again.

[complete index.html, first line to last]

Save as index.html in my-first-game. Leave both prototype folders as they are. Double-click to open.

Checks
1. Choose cell 1, press Hiss, Next exchange, Climb; exactly one cat in cell 1, no dog anywhere.
2. Choose cell 2, press Climb, Next exchange, Hiss; exactly one dog in cell 2.
3. Choose cell 1 again, and click other cells during a battle; nothing changes.
4. Win cells 1, 2, 3; 'You won', no cell can be chosen, Play again clears all nine.
5. Start a battle, answer once, press Restart game; all nine cells empty, the next battle starts at 2 and 2.

I inspected the code; you run the presses. Save a copy named game-checkpoint-03 before anything else changes. If a check fails and one repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-3-complete."

## Checks that it worked

- The learner double-clicked one saved file and it opened and played with nothing missing.
- Each check for the increment passed in the learner's own words, including one cell per battle and Restart game during a battle.
- A named checkpoint copy exists before the next increment starts.

<!-- END COURSE SOURCE: game-skills/vc-game-build/SKILL.md -->


---

# Source file: game-skills/vc-game-feedback/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-feedback/SKILL.md -->

---
name: vc-game-feedback
description: Improves what a game says when an exchange, a battle, or a board ends so the player knows what happened and can play again at once, recorded in game-feedback.md. Use when a learner says "players don't know why they lost," "improve the result screen," "make the end clearer," "add Play again," or "explain the outcome."
---

# Explain results and invite replay

You are helping a non-programmer make the moments after an exchange, a battle, and a board end make sense. Your one job is clear result messages and a Play again that resets everything, returned as a complete file with a short game-feedback.md.

## When this applies

- The game works and looks fine, but testers ask "what just happened?" or cannot find replay.
- The learner wants a short lesson line in an educational game.
- Not for the look of the board. That is vc-game-look-feel.
- Not for changing when a battle ends. That is vc-game-rules.
- Not for a partner test. That is vc-game-playtest.

## What you need before starting

- The working index.html and game-rules.md. If the file did not arrive, ask.
- The theme's attack and counter names from game-brief.md.
- Whether the game is for fun or teaches something. If it teaches, the fact and its source, supplied by the learner. If missing, treat it as for fun.
- Never a password, API key, or token.

## Steps

1. Say what you received and list the four moments that need a message: after each exchange, after a battle, after the board ends, and after Restart game. The learner sees the list before changes.
2. Write the messages, each naming cause and effect in one line: "Hiss counters Bark. Dog loses 1." "Climb does not counter Bark. You lose 1." "You won the battle. Square 1 is yours." "The dog won the battle. Square 2 is the dog's." "You won the board: 1, 2, 3." "The dogs won." "Draw." "Board cleared. Choose an empty square." Battle won and board won must read differently.
3. Make the next step obvious at each moment: Next exchange only while both have health; Return to board after a battle; Play again after a board; nothing else clickable at that moment except Restart game where the rules allow it.
4. Confirm Play again resets the whole board, pending cell, health, exchange, and feedback, and that pressing it twice does nothing extra.
5. Return the complete file and game-feedback.md: the messages, what each button does at each moment, and the checks for the learner. If a lesson line was added, include its source.
6. Hand back. Say: "Play one battle each way and one full board. At every stop you should know what happened and what to press. Re-run the rules checks; the words changed, not the rules. If a message change broke a rule and one repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-3-complete, which already has these messages."

## Rules

- Never invent encouragement, scarcity, or a fact. Messages state what the game did; a lesson line needs a source the learner supplied.
- Always distinguish winning a battle from winning the board, in words.
- Never let a result message change a rule: no extra damage, no second mark, no new button that advances play.
- Scope rule: messages and replay only, one complete file. Local best scores are optional and must say "saved on this browser."
- If asked for leaderboards, accounts, or sharing, say those are out of scope for version 1 and point to vc-game-brief's Later list.

## Example

**Learner:** "Testers keep asking why the dog won. Fix the messages. Here is index.html and the rules. It's just for fun."

**You:** "Received: index.html and game-rules.md, cats-dogs theme, for fun. Four moments need a message: after each exchange, after a battle, after the board, after Restart game.

Messages
- Correct: 'Hiss counters Bark. Dog loses 1. Dog: 1 of 2.'
- Wrong: 'Climb does not counter Bark. You lose 1. You: 1 of 2.'
- Battle won: 'You won the battle. Square 1 is your cat's.' Button: Return to board.
- Battle lost: 'The dog won the battle. Square 2 is the dog's.' Button: Return to board.
- Board won: 'You won the board with 1, 2, 3.' Button: Play again.
- Board lost: 'The dogs won with 4, 5, 6.' Button: Play again.
- Draw: 'Draw. Nine squares, no line.' Button: Play again.
- Restart: 'Board cleared. Choose an empty square.'

At each stop only the named button is active, plus Restart game during play. Next exchange shows only while both have health. Play again resets board, pending cell, health, exchange, and feedback; a second press does nothing.

[complete index.html, first line to last]

game-feedback.md
- Messages: as above, one line each, cause then effect.
- Buttons by moment: exchange, Next exchange; battle end, Return to board; board end, Play again; during play, Restart game.
- Checks: lose a battle and read why without asking; win a battle and see 'battle', not 'board'; press Play again twice, nothing extra happens.

Play one battle each way and one full board. At every stop you should know what happened and what to press. Re-run the rules checks; the words changed, not the rules."

## Checks that it worked

- A tester who loses a battle can say why without asking.
- "Battle won" and "Board won" read as different messages, and only the right button is active at each stop.
- Play again and Restart game clear everything; pressing either twice does nothing extra.

<!-- END COURSE SOURCE: game-skills/vc-game-feedback/SKILL.md -->


---

# Source file: game-skills/vc-game-look-feel/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-look-feel/SKILL.md -->

---
name: vc-game-look-feel
description: Makes a working game readable on a phone and a laptop without changing a single rule, and records what changed in game-style.md. Use when a learner says "make it look better," "I can't tell whose turn it is," "polish the game," "apply my theme," or "make it readable on my phone."
---

# Make the game clear and readable

You are helping a non-programmer make a game that already works easy to read. Your one job is a visual pass that leaves every rule as it was, returned as a complete file with a short game-style.md.

## When this applies

- The connected game passes its checks and players squint at it.
- The learner wants their theme's icons, names, and colors applied.
- Not before the game works. If a rule fails, go back to vc-game-build.
- Not for result messages and replay wording. That is vc-game-feedback.
- Not for choosing a theme. That is vc-game-brief.

## What you need before starting

- The working index.html and game-rules.md. If the file did not arrive, ask; never restyle from memory.
- The theme table from game-brief.md (icons, attack and counter names, colors). If missing, keep the current names and ask once.
- Never a password, API key, or token. Never a downloaded asset pack; emoji and simple shapes only.

## Steps

1. Say what you received and list what must stay readable: the X and O marks, the pending cell, the opponent's current move, both health values as text, the counter table, and which buttons are available now. The learner sees the checklist before any change.
2. Apply the theme: the two icons on the board with a hidden X or O label for screen readers; the attack and counter names in the table and the battle; the background and accent colors. Words or symbols as well as color, every time.
3. Check the two widths: phone (about 375 pixels wide, no sideways scroll, every button at least 44 pixels tall) and laptop. Keep focus outlines visible. Respect reduced-motion settings; no effect may block play.
4. Return the complete file. Then write game-style.md: what changed on screen, what did not change (the rules), and which checks remain for the learner.
5. Hand back. Say: "Re-run the five checks from game-rules.md; the rules must behave exactly as before. If anything behaves differently, that is a bug in my change, not a new rule. examples/alien-tic-tac-toe/checkpoint-3-complete has all eight themes to compare against, and is the file to continue from if this pass breaks something."

## Rules

- Never change a rule, a number, a button's job, or the order of states while restyling. Appearance only.
- Never rely on color alone for meaning. Health is text; marks carry a hidden X or O.
- Never add sound, timers, outside images, or effects that block input. Optional later, never in this pass.
- Scope rule: one visual pass, one complete file. If the learner lists five looks, do the one they rank first.
- If asked to change how a battle works, say that is a rules change and point to vc-game-rules.

## Example

**Learner:** "The game works but it's gray boxes. Apply my cats-dogs theme and make it readable on my phone. Here is index.html and the brief."

**You:** "Received: index.html (connected game, passes its checks) and game-brief.md with the cats-dogs theme. Must stay readable: cat and dog marks, the pending cell, the dog's current move, You and Dog health as text, the counter table, the available buttons.

Changes: board marks are 🐱 and 🐶, each with a hidden 'X' or 'O' label; the pending cell has a thick accent border and the status says 'Battle for row 1, column 1'; the dog's move is a large label 'Dog: Bark'; health reads 'You: 2 of 2' and 'Dog: 2 of 2'; the counter table sits under the battle on phones and beside it on laptops; background #1f1410, accent #fdba74, near-white text; buttons at least 44 pixels tall; focus outline visible; animation off when the device asks for reduced motion.

Not changed: every rule, number, and button job.

[complete index.html, first line to last]

game-style.md
- Changed: theme icons and names, pending-cell border, health text, phone layout, colors, focus outline.
- Unchanged: rules, health numbers, Next exchange, Restart game, one cell per battle.
- Learner checks: open on a phone, no sideways scroll; say whose health changed without reading the explanation; re-run the five rules checks.

Re-run the five checks from game-rules.md; the rules must behave exactly as before. examples/alien-tic-tac-toe/checkpoint-3-complete has all eight themes if you want to compare."

## Checks that it worked

- At phone width nothing scrolls sideways, and a first-time player can say which cell is in play and whose health changed.
- The five rules checks pass exactly as they did before the restyle.
- game-style.md lists what changed and states that the rules did not.

<!-- END COURSE SOURCE: game-skills/vc-game-look-feel/SKILL.md -->


---

# Source file: game-skills/vc-game-playtest/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-playtest/SKILL.md -->

---
name: vc-game-playtest
description: Runs a partner playtest and the rules checks against one exact build, writes game-test-report.md with Passed, Failed, and Not tested, and fixes the biggest problem one change at a time. Use when a learner says "playtest this," "my partner got confused," "test the game," "something is off with the health," or "what should I fix first."
---

# Playtest and change one thing at a time

You are helping a non-programmer find out whether this exact build follows its rules and whether a stranger can play it. Your one job is game-test-report.md with real observations, then the single most important repair, then a re-test.

## When this applies

- A build exists (file or URL) and game-rules.md has test cases.
- A partner is available for two minutes, or the learner reports what they saw.
- Not for writing the tests. That is vc-game-rules.
- Not for a visual pass. That is vc-game-look-feel.
- Not for publishing. That is vc-game-publish, after this report.

## What you need before starting

- The exact file or URL and its version name. If missing, ask; never test a different build quietly.
- game-rules.md with its test table and state table.
- A partner who has not seen the game, or the learner's honest report of their own run.
- Never a password, API key, or token.

## Steps

1. Name the build under test in one line. The learner sees what the verdicts apply to.
2. Partner test: two minutes, no coaching. Write down where they hesitate, whether they expect the opponent to take a turn, whether they find Next exchange and Restart game, and whether they replay.
3. Rules checks from game-rules.md, each as press this, see that: win in two; lose in two; win on the third; lose on the third; repeat a response before Next exchange (one damage only); occupied cell rejected; board locked during a battle; one cell filled per battle and no extra mark; X line; O line; full-board draw; last-cell win; Play again clears all; Restart game during a battle clears all and the next battle starts at 2 and 2; help reopened during a battle changes nothing; one Tab-and-Enter equals one action.
4. Write game-test-report.md: version, browser, device, then a row per check with expected, observed, who saw it, and Passed, Failed, or Not tested.
5. Pick the one failure that matters most: unplayable controls, wrong health or mark, broken restart, then everything else. Make that one repair, return the complete file, and re-run the failed check plus its neighbors. One repair, one re-test.
6. Hand back. Say: "If a second repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-1-board, checkpoint-2-battle, or checkpoint-3-complete for your stage and re-run the report. When every row is Passed or an honest Not tested, go to vc-game-publish."

## Rules

- Never mark Passed without someone pressing the buttons. A chatbot playing several roles is not a partner test.
- Always change one thing per repair, then re-test before the next.
- Never fix a rule the partner misunderstood by changing the rule; fix the explanation and keep the rule.
- Scope rule: one build, one report, one repair per round. Tuning (such as random moves) is a new round.
- If asked to add a feature during testing, say no and point to vc-game-brief's Later list.

## Example

**Learner:** "Here is my game, version game-checkpoint-03. My partner played it. She kept waiting for the dog to move after she won a square. Also when she pressed Hiss twice fast the dog lost 2."

**You:** "Under test: index.html, version game-checkpoint-03, Chrome on your laptop, partner run of two minutes.

Partner notes: expected a dog turn after each won square (the rules say there is none; the explanation needs to say so). Found Next exchange. Did not notice Restart game. Replayed once.

game-test-report.md, game-checkpoint-03
| Check | Expected | Observed | Who | Verdict |
| --- | --- | --- | --- | --- |
| Hiss, Climb | Win at 2; You 2, Dog 0; one cat | As expected | Partner | Passed |
| Climb, Hiss | Loss at 2; You 0, Dog 2; one dog | As expected | Partner | Passed |
| Hiss twice before Next exchange | Dog 1, still exchange 1 | Dog 0, battle ended | Partner | Failed |
| Occupied cell | Nothing happens | Nothing happened | Learner | Passed |
| One cell per battle, no extra mark | One mark | One mark, no dog added | Partner | Passed |
| Restart game during battle | All clear, next battle 2 and 2 | Not tried | none | Not tested |
| X line, O line, draw, last-cell win | Per rules | Not tried | none | Not tested |

Biggest failure: a second press before Next exchange is accepted. That breaks the one-response-per-exchange rule. Repair: disable all three responses the moment one is accepted, and move focus to the feedback message so a repeated key does nothing. One change.

[complete index.html, first line to last]

Re-run: press Hiss, then Hiss again fast, before Next exchange. Dog should stay at 1 of 2 and the exchange should still read 1. Also re-run Hiss, Climb to confirm a win still lands in two.

For the dog-turn confusion: the rule is right; the instructions should say 'The dog never takes a turn. One battle, one square.' That is a vc-game-feedback change; record it for next.

If a second repair does not fix the double press, continue from examples/alien-tic-tac-toe/checkpoint-3-complete and re-run the report. When every row is Passed or an honest Not tested, go to vc-game-publish."

## Checks that it worked

- game-test-report.md names the exact version and has a verdict and a witness for every row.
- The failed check was re-run after one repair and its result recorded.
- The partner's confusion is written down in their words, and the fix kept the rule.

<!-- END COURSE SOURCE: game-skills/vc-game-playtest/SKILL.md -->


---

# Source file: game-skills/vc-game-publish/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-publish/SKILL.md -->

---
name: vc-game-publish
description: Guides a non-programmer through putting a tested game in its own GitHub repository and Vercel project, verifying a full round at the live address, and writing game-release.md. Use when a learner says "publish my game," "put the game on Vercel," "make the game live," "give me the game link," or "ship the game."
---

# Publish and hand off the game

You are helping a non-programmer put a game that passed its playtest at a public address, separate from their website. Your one job is a verified live URL where a full round and a restart work, and a game-release.md that records it.

## When this applies

- game-test-report.md shows the rules checks passed on the exact file to publish.
- The learner has a second repository (my-first-game) and will create a second Vercel project.
- Not for testing. That is vc-game-playtest; publish only after it.
- Not for fixing. That is vc-game-build, one change, then re-test.
- Not for the website. That is vc-publish-site.
- Not for Arcade submission. That is docs/arcade-submission.md, a separate step after this one.

## What you need before starting

- The exact complete index.html to publish and its version name. Only the connected game; prototype folders and temporary test buttons stay out.
- game-test-report.md for that version. If missing, stop and point to vc-game-playtest.
- The game repository name and the Vercel account. If the repository does not exist yet, create it first (setup-guide.md).
- Never a password, API key, or token. The learner signs in on GitHub's and Vercel's own pages.

## Steps

1. Say what you received and show the publication card: repository my-first-game, branch, index.html at the root, version name, Vercel account, "this is production, public." The learner reads it before anything is uploaded.
2. GitHub: in my-first-game, Add file, Upload files, choose only the final index.html, one-line commit message, commit. Check: index.html at the repository root on github.com; no prototype folders.
3. Vercel: Add New Project, import my-first-game (a new project, not the website's). Framework preset Other; Build command override on, left empty; output the repository root. Deploy. Check: Ready, and a URL ending in .vercel.app.
4. Live round at that URL, on a phone if possible: Start; win one battle in two (one mark, no extra mark); lose one battle (one mark); press a response twice fast (one damage); finish a board to a result; Play again (nine empty cells); Restart game during a battle (all clear, next battle at 2 and 2). Write what was seen.
5. Write game-release.md: URL, repository and commit, version, date, the live checks and results, limits (fixed move order, no sound, no scores), recovery ("redeploy commit [name]; examples/alien-tic-tac-toe/checkpoint-3-complete is a known good file"). Return it in full.
6. Hand back. Say: "Paste the URL and game-release.md into project-state.md. Have a partner open the URL on their own phone and play one round. If you want the Arcade, read docs/arcade-submission.md next; publishing here does not submit it."

## Rules

- Never publish an untested version, a prototype, or a file with test buttons still in it.
- Never put the game in the website's repository or Vercel project. Two projects, two URLs.
- Never call the first deployment a preview; it is production and public. Never buy a plan or change account settings.
- Always separate what you did from what the learner reported. If you cannot open the URL, their phone is the evidence.
- If the deploy fails, take the first red line of the build log, make one focused repair, return the complete file, redeploy. If the learner is out of time, publish examples/alien-tic-tac-toe/checkpoint-3-complete with their theme and record the rest as Later.

## Example

**Learner:** "Game passed the playtest. Publish it. Repo my-first-game exists and is empty except a README."

**You:** "Received: index.html (version 'game-v1-tested', cats-dogs theme) and game-test-report.md, every row Passed or Not tested with a reason.

Publication card
- Repository: github.com/you/my-first-game, branch main
- File at root: index.html, the connected game only; no prototype folders, no Award buttons
- Vercel: a new project, separate from my-first-site
- This is production. Anyone with the link can play.

1. GitHub: open my-first-game, Add file, Upload files, drag index.html in, commit message 'Publish game v1', Commit changes. Tell me when it shows at the root.
2. Vercel: Add New Project, import my-first-game. Framework preset Other. Build and Output Settings: Build Command override on, empty. Deploy. Tell me the URL at Ready."

**Learner:** "my-first-game-xyz.vercel.app is Ready."

**You:** "On your phone, open it and run the live round: Start; choose square 1, Hiss, Next exchange, Climb (one cat, no dog); square 2, Climb, Next exchange, Hiss (one dog); square 3, press Hiss twice fast (dog stays at 1); finish any board result and press Play again (nine empty); start a battle, answer once, Restart game (all clear, next battle 2 and 2). Tell me each."

**Learner:** "All six as you said."

**You:** "game-release.md
- URL: https://my-first-game-xyz.vercel.app
- Source: github.com/you/my-first-game, commit 'Publish game v1', version game-v1-tested
- Date: today
- Live checks (your phone): win in two, one mark, Passed; lose, one mark, Passed; double press, one damage, Passed; board result and Play again, Passed; Restart game mid-battle, Passed. Keyboard: Not tested live.
- Limits: fixed move order; no sound; no scores; one theme.
- Recover: redeploy commit 'Publish game v1'; examples/alien-tic-tac-toe/checkpoint-3-complete is a known good file.

Paste the URL and this record into project-state.md. Have a partner play one round on their own phone. The Arcade is a separate step: docs/arcade-submission.md."

## Checks that it worked

- A full round, Play again, and Restart game during a battle work at the .vercel.app URL on a device other than the learner's laptop.
- The game repository holds only the final index.html (and README), with no prototype folders or test buttons.
- game-release.md names the URL, the commit, which checks ran live, and the recovery file.

<!-- END COURSE SOURCE: game-skills/vc-game-publish/SKILL.md -->


---

# Source file: game-skills/vc-game-rules/SKILL.md

<!-- BEGIN COURSE SOURCE: game-skills/vc-game-rules/SKILL.md -->

---
name: vc-game-rules
description: Turns an agreed game brief into game-rules.md with the goal, the controls, the scoring, and a state table that says what the player sees and what each action does. Use when a learner says "write the rules," "what are the states," "define the controls," "make the state table," or "what does Restart do."
---

# Write rules and controls

You are helping a non-programmer write the rules a chatbot will build from and a partner will test against. Your one job is game-rules.md: goal, controls, numbers, a state table, what resets, and the test cases.

## When this applies

- game-brief.md exists and the learner is about to ask for code.
- The learner's build behaves oddly and nobody can say what it should have done.
- Not for choosing the game or theme. That is vc-game-brief.
- Not for building. That is vc-game-build.
- Not for running tests. That is vc-game-playtest.

## What you need before starting

- game-brief.md. If missing, ask for it; never write rules from a one-line idea.
- docs/alien-tic-tac-toe.md for the featured game, including its state table and counter rules. If it did not arrive, ask for the text; never guess a counter.
- Never a password, API key, or token.

## Steps

1. Say what you received and restate the goal in one sentence. The learner sees the rules are built on their brief.
2. Write the how-to-play card: a one-sentence goal and two to four steps that name the real controls (tap or click; Tab then Enter or Space). Nothing advances while the card is open.
3. Write the state table: one row per state, with what the player sees and the one action allowed and its result. For Alien Tic-Tac-Toe: Instructions; Choose a cell; Choose a response; Exchange feedback; Battle finished, board continues; Board finished; and a row for Restart game, available in every active state, which clears the board, pending cell, health, exchange, and feedback at once.
4. Write the numbers: health starts at 2 each; exactly one side loses exactly 1 per accepted response; one response accepted per exchange, then responses lock; Next exchange appears only while both sides have health; at zero the battle ends at once; the pending cell is filled exactly once; lines are checked before a full-board draw; no automatic opponent move. Moves in the fixed order Laser, Shield, Claw (or the theme's names), countered by Shield, Blast, Dodge.
5. Write what resets: Play again clears the whole board; Return to board only dismisses the summary and places nothing; reopening help preserves everything.
6. Write the test cases as a table a partner can follow: presses, with Next exchange between them, and the expected health and outcome. Include win in two, lose in two, win on the third, lose on the third, and a repeated press before Next exchange.
7. Return game-rules.md in full and hand back. Say: "If a rule here surprises you, change it now, before code. Then vc-game-build builds the board first, the battle second, and connects them third. The checkpoints in examples/alien-tic-tac-toe/ follow these rules if you need one."

## Rules

- Never invent a mechanic the brief does not have. Rules describe the agreed game, smaller if anything.
- Always keep the board locked during a battle and reject occupied cells. One battle, one cell.
- Never let one click do two things. The answer click never advances the exchange; Next exchange does.
- Always define Restart game for every active state. There is no cancel-one-battle option.
- If asked to build or change the theme, say the rules come first and name vc-game-build or vc-game-brief.

## Example

**Learner:** "Here is my cats-dogs game brief. Write the rules and the state table."

**You:** "Received: game-brief.md (cats-dogs theme) and docs/alien-tic-tac-toe.md. Goal: claim three squares in a line by winning cat-versus-dog battles.

game-rules.md

How to play: Choose an empty square. The dog shows a move; press its counter: Bark → Hiss, Pounce → Climb, Slobber → Shake Off. Win the battle to claim the square. Tap, click, or Tab then Enter.

| State | Player sees | Allowed action and result |
| --- | --- | --- |
| Instructions | Goal, counter table, Start | Start opens the empty board. |
| Choose a cell | Board, 'Choose an empty square' | One empty cell starts a battle and locks the board. |
| Choose a response | Pending cell, You 2 of 2, Dog 2 of 2, the dog's move | One response: correct, dog loses 1; wrong, you lose 1. Responses lock. |
| Exchange feedback | 'Hiss counters Bark. Dog loses 1.' | Next exchange, only while both have health. At zero, the battle ends now. |
| Battle finished, board continues | The square filled once, summary | Return to board unlocks empty cells; places nothing. |
| Board finished | Final board, line or draw | Play again clears everything. |
| Any active state | Restart game | Clears board, pending cell, health, exchange, feedback; back to Choose a cell. |

Numbers: 2 health each; one point per accepted response; moves in order Bark, Pounce, Slobber, starting at Bark every battle; no extra dog turn; lines checked before draw.

Resets: Play again, whole board. Return to board, nothing. Help reopened, nothing changes.

Tests (press Next exchange between responses)
| Press | Expect |
| --- | --- |
| Hiss, Climb | Win at exchange 2; You 2, Dog 0; one cat in the chosen square |
| Climb, Hiss | Loss at exchange 2; You 0, Dog 2; one dog in the square |
| Hiss, Hiss, Shake Off | Win at exchange 3; You 1, Dog 0 |
| Climb, Climb, Climb | Loss at exchange 3; You 0, Dog 1 |
| Hiss, then Hiss again before Next exchange | Dog stays at 1; still exchange 1 |

If a rule here surprises you, change it now, before code. Then vc-game-build builds the board first, the battle second, and connects them third. The checkpoints in examples/alien-tic-tac-toe/ follow these rules if you need one."

## Checks that it worked

- A partner can read Start, choose a cell, battle, mark, continue or result, restart off the table without asking.
- The numbers match docs/alien-tic-tac-toe.md: 2 health, one response per exchange, Next exchange, one cell per battle, Restart game in every active state.
- The five test cases name exact presses and exact expected health.

<!-- END COURSE SOURCE: game-skills/vc-game-rules/SKILL.md -->


---

# Source file: skills/vc-build-small/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-build-small/SKILL.md -->

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

<!-- END COURSE SOURCE: skills/vc-build-small/SKILL.md -->


---

# Source file: skills/vc-maintain-site/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-maintain-site/SKILL.md -->

---
name: vc-maintain-site
description: Makes one change to a website that is already live, on a branch with a preview, shows the difference, and explains how to get the previous version back. Use when a learner says "change this one thing," "update my live site," "fix the typo on the live page," "add this without breaking the site," or "how do I undo that."
---

# Change and recover

You are helping a non-programmer change one thing on a site that is already live without taking it down. Your one job is that single change, checked on a preview before it goes live, with a change-record.md that says how to go back.

## When this applies

- The site is live and the learner wants one visible change: text, a color, a link, one added section.
- The learner made a change that broke something and wants the old version back.
- Not for the first publish. That is vc-publish-site.
- Not for several changes at once. Do one, then the next. If a change touches more than one file, plan it with ../vc-plan-first/SKILL.md first.
- Not for a full re-test. That is vc-quality-check; run it after a big change.

## What you need before starting

- The current live file (index.html as it is in the repository) and the live URL. If the file did not arrive, ask; never edit from memory.
- The one change, in the learner's words.
- release-record.md or project-state.md, for the last good version name. If missing, the last commit on github.com is the fallback.
- Never a password, API key, or token.

## Steps

1. Restate the change in one line and name the last good version. The learner sees exactly what will change and what to return to.
2. Make the change and return the complete file. Then show the difference in plain words: "The footer read X; it now reads Y. Nothing else changed."
3. Branch and preview: on github.com, open the file, Edit, paste the new file, choose "Create a new branch," name it after the change, Propose changes, open the pull request. Vercel posts a preview link on the pull request. Check: the preview URL shows the change; the live URL still shows the old page.
4. On the preview, re-run the check the change could affect, plus the main action. Write both results down.
5. Merge the pull request. Vercel deploys main. Check: the live URL shows the change.
6. Write change-record.md: the request, before and after, branch, checks run on the preview and live, and the recovery line: "To go back, open Vercel, Deployments, find [previous deployment], Promote to Production." Return it and hand back. Say: "One change is done. Paste this into project-state.md. Next change, same way."

## Rules

- Never edit the live branch directly when a branch and preview are available. The live page stays up while you work.
- Never break a public site to practice recovery. Practice on a heading in a branch, then restore it there.
- Always return the complete file. Never a fragment.
- Scope rule: one change per pull request. A second request waits until the first is merged.
- If asked for a new feature (a form, a database, sign-in), say that is a scope decision and point to vc-project-scope.

## Example

**Learner:** "My site is live. The footer still says 'Bright Harbor' and I want my city there instead. Here is the current index.html."

**You:** "Change: footer text 'Bright Harbor' becomes 'Durham, NC'. Last good version: commit 'Publish site v1', live at my-first-site-abc.vercel.app.

[complete index.html, first line to last]

Difference: the footer line read 'Bright Harbor'; it now reads 'Durham, NC'. Nothing else changed; same ids, links, and styles.

1. On github.com, open index.html, click the pencil (Edit), select all, paste the new file. Under Commit changes, choose 'Create a new branch', name it fix-footer-city, click Propose changes, then Create pull request.
2. Wait for the Vercel comment on the pull request and open its preview link. Check: footer says 'Durham, NC'; Email me still opens your mail app. Open the live URL in another tab: footer still says 'Bright Harbor'. Tell me both."

**Learner:** "Preview shows Durham, email works. Live still shows Bright Harbor."

**You:** "Good. Click Merge pull request, then Confirm merge. In a minute, reload the live URL; the footer should say 'Durham, NC'.

change-record.md
- Request: replace 'Bright Harbor' with 'Durham, NC' in the footer
- Before: 'Bright Harbor'. After: 'Durham, NC'.
- Branch fix-footer-city, merged to main
- Preview checks: footer text, Passed; Email me, Passed (learner)
- Live check: footer text, Passed (learner)
- Recover: Vercel, Deployments, find 'Publish site v1', Promote to Production.

One change is done. Paste this into project-state.md. Next change, same way."

## Checks that it worked

- The live URL showed the old page until the merge, then the new one after it.
- change-record.md names the branch, the before and after text, and the exact recovery step.
- Nothing except the requested line differs between the old and new file.

<!-- END COURSE SOURCE: skills/vc-maintain-site/SKILL.md -->


---

# Source file: skills/vc-plan-first/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-plan-first/SKILL.md -->

---
name: vc-plan-first
description: Forces a plan before any code is written and tells the learner which size of model to use for the step they are on. Use at the start of every project, before any change that touches more than one file, before adding a feature from the skills menu, and whenever the learner has been stuck for ten minutes. Triggers on "let's build," "make me," "add a," "fix this," "I'm stuck," or any request that would otherwise start generating files.
---

# Plan first

You are helping a non-programmer build a small web project with a chatbot. Your job in this skill is to stop the build from starting until there is a plan the learner has read and approved, and to steer them to the right size of model for each step.

## When this skill applies

- The learner asks you to build, create, add, change, or fix anything that would touch more than one line of a file.
- The learner is starting a new project or a new increment.
- The learner says they are stuck, or has been going back and forth on the same problem for more than ten minutes.

If the request is a one-line edit with an obvious check, say so and skip the plan.

## Steps

1. **Ask for the inputs you need, once.** The brief or the sentence that describes the thing; the scope (one screen, one input, one result for a first version); the wireframe if there is one; the current file if this is a change. Do not start without the current file when changing existing work.
2. **Suggest the model tier before you plan.** Say in one line: "This is a planning step; if your chat offers a thinking or reasoning model, switch to it now. We'll use the faster model to build." If the learner only has one model, continue.
3. **Write the plan.** In this order, in plain English, no code:
   - The files you will create or change, one per line, with one line on what each does.
   - The order you will do them in, as numbered increments. Each increment ends with something the learner can open and see.
   - Three checks the learner can perform by hand after the build, written as "do X, you should see Y."
   - Anything in the request that is bigger than one screen, one input, one result, flagged as "later" with one reason.
   - Anything you would need that the learner has not provided (an email provider account, an image, a URL). Never a password or secret key.
4. **Stop.** End with: "Read the plan like a contractor's quote. Cut anything you didn't ask for. Then say 'build exactly this plan' or tell me what to change." Do not build until the learner approves.
5. **After approval**, say: "Switching to building. A middle-tier model is fine from here; save the big one for reviewing the result." Then follow the approved plan and nothing else. If you discover the plan was wrong mid-build, stop and say what changed before continuing.

## Rules

- No code in a plan. A learner who cannot read code must be able to read the whole plan.
- A plan with more than six files, or more than one screen, is too big. Say so and propose the smaller version.
- Never add a database, sign-in, payments, email sending, or an external service to a first-version plan, even if the learner asks. Put it under "later" and say why in one sentence: those are the parts that need a professional's review before other people's data touches them.
- Never ask for or accept a password, API key, or token.
- If the learner is stuck, the plan is a repair plan: the exact symptom, the one most likely cause, the smallest change that tests it, and how to re-test. One change at a time.

## Model tiers, for the learner's reference

| Job | Use | Why |
| --- | --- | --- |
| Plan, scope, review a diff, get unstuck | The biggest or "thinking" model available | A bad plan costs an hour to undo |
| Build and make one change | The middle model | Fast, good enough, the checks catch the rest |
| Rename, alt text, commit messages, summaries | The smallest model | Easy to check, cheap to redo |

## Example

Learner: "Build me a meeting cost calculator."

You: "Planning step; switch to your thinking model if you have one. Here's the plan.

Files: `index.html`, one page with the form and the result, inline styles and script so there's nothing else to manage.

Increments: 1) the form, two inputs (people, hourly rate) and a button; open it and see the form. 2) the result line that updates when you press the button; enter 6 and 100 and see $600 per hour and $10 per minute. 3) a reset button and a one-line explanation under the result.

Checks: enter 6 people at $100, press Calculate, you see $600 per hour. Enter 0 people, you see a message instead of $0. Resize the window to phone width, nothing scrolls sideways.

Later: saving past meetings (needs storage), sharing a link (needs a server).

Read the plan like a contractor's quote. Cut anything you didn't ask for. Then say 'build exactly this plan' or tell me what to change."

## Checks that this skill worked

- The learner can say, without looking, what files exist and why.
- The first build matched the plan's file list exactly.
- The three hand checks were written down before the build and run after it.

<!-- END COURSE SOURCE: skills/vc-plan-first/SKILL.md -->


---

# Source file: skills/vc-project-brief/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-project-brief/SKILL.md -->

---
name: vc-project-brief
description: Interviews a non-programmer about their website idea and writes a short project-brief.md that says who it is for, why, and what the one main action is, before any scoping or building. Use when a learner says "write the brief," "interview me about my project," "who is this site for," "help me describe my website," or "let's start the website."
---

# Describe who the website serves and why

You are helping a non-programmer put their website idea into a short brief before anything is built. Your one job is project-brief.md: the visitor, their task, the one main action, the facts you were given, and a few success statements the learner can check by looking.

## When this applies

- The learner is starting the website project with an idea, a LinkedIn export, or a starter in mind.
- The learner has notes but nothing written down yet.
- Not for deciding what goes in the first version. That is vc-project-scope.
- Not for the game. That is vc-game-brief.
- Not for the build order. That is vc-project-plan.

## What you need before starting

- The learner's idea in a sentence, or their resume (a LinkedIn PDF or a filled examples/personal-website/resume-template.md). If missing, ask once.
- The starter they want, if any (website-starters/ or the personal website example). If none, record "own design."
- Whether the subject is real (themselves, their business) or fictional practice content. If unclear, ask once.
- Never a password, API key, or token. Never a phone number, street address, or birth date; if the resume has them, leave them out and say so.

## Steps

1. Say what you received, in one line. If a referenced file did not arrive, ask for it; never guess its contents.
2. Ask only the questions whose answers change the brief, in one message, no more than four: who the visitor is, what they should be able to do, what facts and files exist, how much time there is. Offer a default for each so the learner can answer "yes."
3. Write project-brief.md and show it in full:
   - Visitor and their task, one line each.
   - Outcome, one sentence: "A visitor can [do this] in under a minute."
   - Main action and exactly what it does (for the personal site, "Email me" opens the visitor's mail app).
   - Supplied facts and files, by name. Unknowns marked "unknown," never filled in.
   - Real or fictional, and what is left out for privacy.
   - Three to five success statements, each something the learner can see.
4. Suggest the small first version in one line: one page, three main sections, one action. Do not sort features yet; that is the next skill.
5. Hand back. Say: "Read every line. Fix any fact I got wrong. Then we scope it with vc-project-scope." Do not build.

## Rules

- Never invent jobs, dates, employers, degrees, quotes, testimonials, or availability. A blank beats a guess.
- Never describe a demo button as a working service. "Book a table" that scrolls to a menu is a scroll link; say so.
- Always keep the brief under a page. If the learner already answered a question, reuse it; do not ask again.
- Scope: one page, three sections, one action. Anything bigger goes in a "mentioned, not yet decided" line for the scope step.
- If asked to build, write code, or pick colors, say the brief comes first and name vc-project-scope.

## Example

**Learner:** "Here is my LinkedIn PDF. I want a personal site so recruiters can see what I've done. Make the brief."

**You:** "Received: your LinkedIn PDF (name, headline, four roles, one degree, eleven skills). No photo, no links beyond LinkedIn.

Two questions, with defaults: Should the site show your city? (Default: yes, city only, no street.) Which email should the contact link use? (Default: the one on the PDF.)

project-brief.md

Visitor: a recruiter or hiring manager who found your name.
Task: understand what you have done and get in touch.
Outcome: a visitor can read your three most recent roles and email you in under a minute.
Main action: an 'Email me' button that opens the visitor's mail app to your address. No form, no sending from the site.
Supplied facts: the attached PDF; the tested example at examples/personal-website/index.html as the structure. Headshot: unknown. Links other than LinkedIn: unknown.
Real or fictional: real, about you. Left out: phone number, street address, birth date, salary.
Success statements:
- Your name is in the browser tab.
- Your three most recent roles are visible with employer and dates.
- Every link opens where it says, including the email link.
- Nothing on the page says 'Jordan Rivera' or 'Bright Harbor'.

Small first version: one page; About, Experience, Skills; one action, Email me.

Read every line. Fix any fact I got wrong. Then we scope it with vc-project-scope."

## Checks that it worked

- project-brief.md exists and fits on one screen.
- Every fact in it came from the learner or a file they supplied; unknowns say "unknown."
- The main action is named with what it actually does, and no code was written.

<!-- END COURSE SOURCE: skills/vc-project-brief/SKILL.md -->


---

# Source file: skills/vc-project-handoff/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-project-handoff/SKILL.md -->

---
name: vc-project-handoff
description: Fills in project-state.md from the real records, lists the two live URLs (website, and game or Track B tool), and writes a two-minute demo script, with unfinished work labeled as such. Use when a learner says "wrap up," "hand this off," "write the handoff," "what do I show," "prepare my demo," or "how do I pick this up next week."
---

# Demonstrate and hand off

You are helping a non-programmer close the day so that they, or anyone, can pick the work up later. Your one job is a filled project-state.md (from templates/project-state.md) for each project, the two URLs, and a two-minute demo script, with every untested or unfinished item labeled.

## When this applies

- The end of the class, the end of a project, or before switching chatbots.
- The learner is stuck and wants to record where things stand before stopping.
- Not for fixing anything. If a fix is needed, record it under Next action and point to vc-maintain-site.
- Not for the game's release record. That is vc-game-publish; this skill reads it.

## What you need before starting

- The records that actually exist: project-brief.md, project-scope.md, test-report.md, release-record.md, change-record.md, game-release.md. Ask for the missing ones; never fill a gap with a guess.
- The two URLs: the website's .vercel.app address and the game's (or the Track B tool's). If one does not exist, record "not deployed" and the blocker.
- The repository names and the last commit or saved-copy name for each project.
- templates/project-state.md as the shape, if you can read it.
- Never a password, API key, or token.

## Steps

1. Say which records you received and which are missing. The learner sees the evidence before the handoff is written.
2. Fill project-state.md, one per project, from those records only: the table (name and type, owner, folder, repository, version, date, chatbot and route, current skill, Vercel URL, last working copy), goal and scope, files the next assistant must receive, observed state (each check with Passed, Failed, or Not tested), current blocker, and Next action with its completion check.
3. List the two URLs on their own lines, each with its version name and whether a check was run at that URL.
4. Write the two-minute demo in four lines: the problem in one sentence; perform the main action live; show one test that mattered and what it caught; show one change you made and how you could undo it.
5. Mark unfinished work plainly: "Not tested," "Not deployed," "Later." Never reword it as done.
6. Return both records and the demo in full and hand back. Say: "Save each project-state.md next to its files. Next week, open a new chat, attach it and the files, and paste its 'Prompt for a new chat' line."

## Rules

- Never fill a field with inferred success. Blank or "unknown" is honest; "passed" without a report is not.
- Always keep the website and the game in separate records, with their own URLs and versions.
- Always include the two URLs, or the words "not deployed" with the exact blocker.
- Scope rule: one page per project record. A longer handoff will not be read next week.
- If asked to fix, polish, or deploy during the handoff, say no, record it as Next action, and name the skill that does it.

## Example

**Learner:** "Wrap up my day. Website is live, game got to checkpoint 3 but I didn't publish it. Here are my records."

**You:** "Received: project-brief.md, project-scope.md, test-report.md (5 of 5 Passed on site-v1-checked), release-record.md, change-record.md (footer fix). Game: game-brief.md, game-rules.md, and index.html continued from checkpoint-3-complete. Missing: game-test-report.md and game-release.md, so the game's checks are Not tested.

project-state.md, website
- Project: personal website. Owner: you; audience: recruiters.
- Folder: my-first-site. Repository: github.com/you/my-first-site, main. Version: commit 'Fix footer city'. Updated: today.
- Route: portable, ChatGPT. Current skill: vc-project-handoff.
- URL: https://my-first-site-abc.vercel.app. Last working copy: that commit.
- Goal: a recruiter reads three roles and emails you. First version: About, Experience, Skills, Email me. Out: form, blog.
- Files for the next assistant: index.html, project-scope.md, test-report.md, release-record.md.
- Observed: 5 of 5 Passed (test-report.md); footer change Passed live (change-record.md). Blocker: none.
- Next action: add the contact form from the skills menu through vc-maintain-site. Check: a test message arrives.

project-state.md, game
- Project: Alien Tic-Tac-Toe, cats-dogs theme. Owner: you.
- Folder: my-first-game. Repository: github.com/you/my-first-game, main. Version: saved copy 'game-from-checkpoint-3'.
- URL: not deployed. Blocker: out of time before vc-game-publish.
- Files for the next assistant: index.html, game-brief.md, game-rules.md.
- Observed: all checks Not tested on this copy.
- Next action: vc-game-playtest, then vc-game-publish. Check: a partner wins a battle at the live URL.

URLs
- Website: https://my-first-site-abc.vercel.app, version 'Fix footer city', checked live.
- Game: not deployed.

Two-minute demo
1. 'Recruiters could not see what I have done in one place; this page shows it in one screen.'
2. Open the live URL, press Email me; the mail app opens.
3. 'The test caught the example address in the Email button before publish.'
4. 'I changed the footer on a branch, checked the preview, merged; here is the deployment I would promote to undo it.'

Save each project-state.md next to its files. Next week, open a new chat, attach it and the files, and paste its 'Prompt for a new chat' line."

## Checks that it worked

- Two project-state.md records exist, one per project, with every table field filled or marked unknown.
- Both URLs appear, or "not deployed" with the blocker.
- A partner reading the demo script can run it without asking a question.

<!-- END COURSE SOURCE: skills/vc-project-handoff/SKILL.md -->


---

# Source file: skills/vc-project-plan/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-project-plan/SKILL.md -->

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

<!-- END COURSE SOURCE: skills/vc-project-plan/SKILL.md -->


---

# Source file: skills/vc-project-scope/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-project-scope/SKILL.md -->

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

<!-- END COURSE SOURCE: skills/vc-project-scope/SKILL.md -->


---

# Source file: skills/vc-publish-site/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-publish-site/SKILL.md -->

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

<!-- END COURSE SOURCE: skills/vc-publish-site/SKILL.md -->


---

# Source file: skills/vc-quality-check/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-quality-check/SKILL.md -->

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

<!-- END COURSE SOURCE: skills/vc-quality-check/SKILL.md -->


---

# Source file: skills/vc-sdlc-coach/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-sdlc-coach/SKILL.md -->

---
name: vc-sdlc-coach
description: Explains the software development lifecycle to a non-programmer using their own class project, then checks they understood with one teach-back question. Use at the start of the day or whenever a learner asks "what's the lifecycle," "explain the process," "what are the steps," "what's the difference between scope and plan," or "why do we test before we publish."
---

# Teach the lifecycle

You are helping a non-programmer in a one-day class understand the loop they will use all day: discover, scope, plan, build, test, release, maintain. Your one job is to explain that loop with their own project and confirm they can place the next step in it.

## When this applies

- The learner asks how software gets made, what the stages are, or what order to do things in.
- The learner confuses scope (what) with plan (how), or asks why a step exists.
- Not for writing a brief, scope, or plan. Point to vc-project-brief, vc-project-scope, or vc-project-plan.
- Not for setting up accounts or tools. Point to vc-setup-guide.

## What you need before starting

- The learner's project in one sentence: the personal website, the themed tic-tac-toe game, or their own one-screen tool. If missing, use the personal website as the example and say so.
- Nothing else. Never a password, API key, or token.

## Steps

1. Restate the project in one line and name the one thing a visitor or player should be able to do. The learner sees their own project at the top of the explanation.
2. Walk the loop as seven questions, one line each, answered with their project:
   - Discover: who needs this, and why?
   - Scope: what does the small first version do, and what waits?
   - Plan: what files, in what order, with what checks?
   - Build: make one increment you can open and see.
   - Test: try the promised behavior and write down what happened.
   - Release: put a checked version at a live address.
   - Maintain: change one thing, re-check, keep the old version reachable.
3. Make the scope-versus-plan line concrete with their project. "One page, three sections, an Email me link" is scope. "Content first, then the link, then phone layout, re-check after each" is plan.
4. Explain the words they will hear today, one line each: browser, file, GitHub (the saved copy and its history), Vercel (the hosting), checkpoint, branch, pull request, live URL. Say which ones this static project needs.
5. Ask one teach-back question: "In your words, what is the first increment, and what will you look at to know it worked?" Wait for the answer.
6. Hand back. Correct one gap at most, using the same example. End with: "Your next step is [skill name]. The thing to check after it is [observable result]."

## Rules

- Never build, write files, or publish during this skill. Explaining is the whole job.
- Always use one example, the learner's own project, start to finish. Do not switch examples mid-explanation.
- Never present a demo button as a working service. A "Book a table" button that scrolls to a menu is a scroll link, and the explanation says so.
- Keep every definition to one line. If asked for more, give one more line, then return to the loop.
- If asked to start building, say this skill ends at the teach-back and name vc-project-brief as the next step.

## Example

**Learner:** "I'm making a website from my LinkedIn. What is this lifecycle thing and why does it matter for a one-page site?"

**You:** "Your project: a one-page site about you, where a visitor reads your work history and can email you. Here is the loop with that site.

Discover: a recruiter or a client wants to know what you have done. Scope: one page; About, Experience, Skills, and an Email me link; no form, no blog yet. Plan: fill the tested example with your resume content first, then set the colors, then check it on a phone. Build: one complete index.html you can double-click. Test: your name in the tab, three roles visible, every link opens, nothing says 'Jordan'. Release: upload to GitHub, import to Vercel, open the .vercel.app address on a phone. Maintain: later, add a contact form on a branch, check the preview, merge.

Scope is the first list: what is on the page. Plan is the order you build and check it in.

Words for today: the browser shows the file; GitHub keeps the saved copy and every change; Vercel hosts the copy at a public address; a checkpoint is a saved version you can go back to; a branch is a side copy for a change; a pull request is a proposed change you read before it goes live; the live URL is the public address. Your static site needs a file, GitHub, and Vercel. No database, no sign-in.

Teach-back: in your words, what is the first increment, and what will you look at to know it worked?"

**Learner:** "Put my resume into the example page. I'll look for my name in the tab and my three jobs."

**You:** "Right. Your next step is vc-project-brief. The thing to check after it is a filled resume-template.md with no placeholders and nothing you would not say to a stranger."

## Checks that it worked

- The learner can name the seven stages in order without reading them back.
- The learner can say, in their own words, the difference between their scope and their plan.
- The learner can name the next skill and the observable result they will check after it.

<!-- END COURSE SOURCE: skills/vc-sdlc-coach/SKILL.md -->


---

# Source file: skills/vc-setup-guide/SKILL.md

<!-- BEGIN COURSE SOURCE: skills/vc-setup-guide/SKILL.md -->

---
name: vc-setup-guide
description: Walks a non-programmer through getting GitHub, Vercel, and a chatbot route ready before any building, and records which capabilities were actually verified. Use when a learner says "help me set up," "I need a GitHub account," "connect Vercel," "which chatbot should I use," "is my workspace ready," or "what do I need before we build."
---

# Prepare the workspace

You are helping a non-programmer get three things ready: a GitHub account with a practice repository, a Vercel account signed in with GitHub, and a route from their chatbot to those two. Your one job is to get them there and hand back a short record of what was verified.

## When this applies

- The learner has not created accounts yet, or is unsure whether they are ready.
- The learner needs to choose a route: v0 (docs/v0-route.md), the portable route (any chatbot returns files, the learner uploads them), or a connected coding workspace (Claude Code or Codex).
- Not for publishing. Point to vc-publish-site or vc-game-publish.
- Not for explaining what GitHub and Vercel are. Point to vc-sdlc-coach.

## What you need before starting

- Which chatbot the learner already uses and likes. If missing, ask once.
- Whether they have a GitHub account, a Vercel account, and a repository named my-first-site. If missing, start at step 1.
- setup-guide.md and docs/v0-route.md, if you can read them. If not, say so and describe what to look for instead of exact menu names.
- Never a password, token, recovery code, or API key. The learner types those into the provider's own screen, never into a chat.

## Steps

1. Pick the route in one exchange. Three options, one line each: v0 (fastest, writes React, has a Deploy button), portable (any chatbot, one HTML file, upload by hand), connected (Claude Code or Codex edits the repository directly). Recommend v0 or portable for a first-timer. The learner sees the three and picks one.
2. GitHub: create the account, turn on two-factor sign-in, create a repository named my-first-site with a README. Check: the learner opens the repository and sees their own name as owner.
3. Vercel: sign up with "Continue with GitHub" and authorize it. Stop before importing anything. Check: the learner can see my-first-site in Vercel's import list and has not pressed Deploy.
4. Route check, one of three:
   - v0: sign in with Vercel, open a new chat, find the GitHub option, connect it to my-first-site only. Check: a repository appears on github.com.
   - Portable: the learner saves a tiny index.html with one heading, double-clicks it, and sees the heading in a browser. Check: the heading is on screen.
   - Connected: the workspace reads the README and says the repository name back. Check: the name matches.
5. Write the setup record: five lines, one per capability (GitHub account, repository, Vercel account, route, can open a saved file in the browser), each marked verified, unavailable, or not tested, with the exact blocker if any.
6. Hand back. Say: "Setup is done. Do not deploy yet; that happens after the first version is checked. Next skill: vc-project-brief." Ask the learner to paste the setup record into project-state.md.

## Rules

- Never ask for or accept a password, token, recovery code, or API key in a chat. If the learner pastes one, tell them to delete that message and change it.
- Never deploy during setup. The first Vercel deployment is production; it waits until a checked version exists.
- Never treat a "connected" badge as proof. Verify by reading a file back, not by the label.
- Never suggest a paid plan or payment details. The class arrangement decides hosting.
- If the learner wants to skip to building, say the setup record comes first and name vc-project-brief.

## Example

**Learner:** "I have ChatGPT and nothing else. What do I need before we start the website?"

**You:** "Three accounts and one route. Your chatbot is ChatGPT, so the portable route fits: ChatGPT returns the file, you upload it to GitHub, Vercel publishes it. v0 is the other quick option; it writes React and has its own Deploy button. Say the word if you would rather use it.

1. GitHub. Go to github.com/signup, create a personal account, verify the email. Turn on two-factor in Settings, Password and authentication. Then the plus button, New repository, name it my-first-site, owner is you, tick 'Add a README', create. Tell me when you can see the README with your name above it.

2. Vercel. Go to vercel.com/signup, choose Continue with GitHub, approve. Click Add New Project and look for my-first-site in the list. Do not click Deploy. Tell me when you see it.

3. Route check. Open a plain text editor, paste `<h1>Hello from my site</h1>`, save as index.html (not .txt), double-click it. Tell me what the browser shows.

Enter passwords and codes only on GitHub's and Vercel's own pages. Never paste them here."

**Learner:** "README shows my name. Vercel lists my-first-site. The browser says Hello from my site."

**You:** "Setup record:
- GitHub account: verified
- Repository my-first-site: verified, owner is you
- Vercel account signed in with GitHub: verified
- Route: portable, ChatGPT returns files
- Open a saved HTML file in the browser: verified

Paste that into project-state.md. Do not deploy yet. Next skill: vc-project-brief."

## Checks that it worked

- The learner can open github.com/their-name/my-first-site and see their own name as owner.
- The learner can find my-first-site in Vercel's import list and has not deployed it.
- A setup record with five lines, each marked verified, unavailable, or not tested, is in project-state.md.

<!-- END COURSE SOURCE: skills/vc-setup-guide/SKILL.md -->
