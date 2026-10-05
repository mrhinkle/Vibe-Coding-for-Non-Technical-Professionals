# Build and publish your first website

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

This walkthrough takes a fictional one-page website from a short brief to a checked Vercel URL. Use your favorite chatbot. You will receive actual files, open them yourself, save them in your own GitHub repository, and publish the checked version. The course repository contains instructions; your website belongs in a separate project.

Allow about 90 minutes during class. Start with [the course entry point](../START-HERE.md) and complete the [account and connection guide](../setup-guide.md). If something stops working, follow the matching symptom in [troubleshooting](troubleshooting.md). The instructor must prepare any recovery checkpoint mentioned there before class; a tested starter is not automatically supplied by these instructions.

**Prefer a ready-made starting point?** Choose one of the [seven website starters](../website-starters/README.md), or make your own. This reading-club example remains an optional from-scratch walkthrough. Use [scope and plan](scope-and-plan.md) and `vc-project-scope` between the brief and build plan; when adapting a starter, inspect its actual HTML before changing it.

## Continuing from a starter or your own plan

If you already finished [scope and plan](scope-and-plan.md), keep your chosen project and skip the Riverbend brief and planning prompts below. Give `vc-build-small` your current HTML, agreed brief/scope/plan, and first unfinished increment. Use this prompt:

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
4. Start a project-state note using [the project state template](../templates/project-state.md). Record the folder, repository, preferred chatbot, and current stage: “writing the website brief.” Record unknown information as unknown.

**Checkpoint:** you can point to the local website folder and the matching GitHub repository. If they do not exist yet, use the [setup guide](../setup-guide.md) before continuing.

## 2 Write a brief before asking for a website

Open [vc-project-brief](../skills/vc-project-brief/SKILL.md). Copy or attach its instructions to your chatbot, followed by this prompt:

> Use the attached project-brief skill. I am a beginner making a fictional Riverbend Reading Club website for class. Make a one-page brief using the example content below. The primary action is a button that scrolls to the next gathering section. Keep the group and event clearly fictional. No signup, payment, accounts, database, or email sending. Give me five observable completion checks. Do not build yet. Here is the content: [paste the example table or your own content].

Read the response. Correct any invented features or changed facts. Save the agreed brief as `project-brief.md` in your website folder, or keep the same text in your workbook until you can save it. A `.md` file is a plain-text document with simple formatting marks.

Use [vc-project-scope](../skills/vc-project-scope/SKILL.md) to save the one-page scope, its primary action, must-have/later/out-of-scope lists, and five checks. Reuse the brief rather than starting another interview. Then use [vc-project-plan](../skills/vc-project-plan/SKILL.md) with the brief:

> Plan this as one static page. List the sections in order and explain what each link or button does. Use one complete index.html with the styles included and a simple decoration that needs no downloaded image. Give me a small build plan that fits this class. Do not add a framework or server.

**Checkpoint:** you can explain the visitor's goal and the exact action of the main button without reading code. Keep only the sections you need.

## 3 Ask for a complete file

Open [vc-build-small](../skills/vc-build-small/SKILL.md), provide the agreed brief and plan, and use this prompt:

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

Use [vc-quality-check](../skills/vc-quality-check/SKILL.md) and report what you actually see:

> I opened the exported file in [browser]. I expected [specific outcome]. I observed [specific result]. Here is the current index.html and the brief. Identify the smallest likely repair, explain it in plain language, and return the complete corrected file. Preserve the working content and button behavior. Tell me what to repeat in the browser; do not mark it passed until it has been observed.

Save the returned file over the active website file only after retaining your checkpoint. Reopen that exact file. Do not assume a newer chatbot preview means the downloaded file changed.

Record these checks in `test-report.md` or your [workbook](../handouts/student-workbook.md):

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

Use [vc-publish-site](../skills/vc-publish-site/SKILL.md) and the exact steps in [Publish each project](../setup-guide.md#publish-each-project). Identify the Vercel account or team, repository, source version, and project before deploying. Use the class's agreed hosting arrangement.

For this plain static example, use the **Other** framework preset and an empty overridden Build Command. The output must be the folder containing `index.html`; the recommended example uses the repository root and has no `public` folder. If your project differs, inspect it before choosing settings. [Vercel build configuration, checked October 5, 2026](https://vercel.com/docs/builds/configure-a-build)

> Help me publish this checked static website to my own Vercel project. First show the repository, source version, entry file, root, build settings, and intended audience. Follow the course setup guide. I will complete account authorization myself. After publication, guide me through opening the actual deployment URL and repeating the main action and layout checks. Distinguish your observations from mine.

The first deployment is production under the course's documented flow. A private repository does not by itself make the website private. Open the URL from the actual completed deployment and have a partner open it too. A working local file is not proof of a working deployment.

**Checkpoint:** record the URL, version, actual observations, and remaining limitations in `release-record.md`. If publication is blocked, keep the working files and precise error. Update your project-state note before starting the game.
