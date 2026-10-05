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
