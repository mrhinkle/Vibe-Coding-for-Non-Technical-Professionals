# Get unstuck while building your website or game

> **For an AI receiving only this lesson:** Acknowledge which text and files you actually received. Ask whether the learner is starting fresh, continuing, or stuck. For continuing work, request `project-state.md` and the actual current files before proposing changes. Ask for a named skill when needed; do not claim to have read linked content you cannot access.

Find the first point where reality differs from what you expected. Make one reversible change, repeat the same check, and record the result. You do not need to diagnose the code before asking for help. A useful report says what you opened, what you did, what you expected, and what you actually saw.

Start from [the course entry point](../START-HERE.md). Keep the latest files and [project-state note](../templates/project-state.md) together. The [website walkthrough](website-walkthrough.md) and [quiz walkthrough](game-walkthrough.md) provide worked examples. If a fix fails, retain your working checkpoint; do not replace the entire project repeatedly.

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
3. For a connected route, follow the [setup guide](../setup-guide.md) and let the learner review any permission screen.

**Success:** the assistant accurately identifies the supplied current files. **Fallback:** continue through portable files and manual upload; direct repository access is optional.

### 3 The chatbot rejects a ZIP or cannot inspect its contents

**Possible causes:** unsupported archive uploads, file-size limits, or a surface that accepts only particular document types.

1. Extract a local copy with your computer's normal archive-opening function.
2. Provide the relevant `SKILL.md`, brief, and `index.html` separately. If that file type is rejected, paste its complete text with a filename label.
3. Ask the assistant to list what it received before making changes.

**Success:** it can describe the current title and main action from the actual contents. **Fallback:** use the single-file example. Do not repeatedly rename an archive to unrelated extensions.

### 4 The named skill is not installed or does not appear

**Possible causes:** native skills are unsupported, the assistant's discovery mechanism differs, or the package was not installed.

1. Open the skill link in the [website guide](../skill-guide.md) or [game guide](../game-skills-guide.md).
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
2. Confirm it contains plain HTML text. Rename a copy to `index.html`; for a Mac, use TextEdit's plain-text HTML save route in the [walkthrough](website-walkthrough.md#4-save-the-file-and-open-it).
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

**Success:** the exact expected score appears and no question is skipped. **Fallback:** return to ordinary button controls and remove automatic advance. Use the [quiz's scoring tests](game-walkthrough.md#6-test-exact-scoring-and-repeated-play).

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
2. Follow the [setup guide](../setup-guide.md) to inspect the integration's allowed repository. The learner reviews any authorization change.
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
3. Follow [multiple agents](multiple-agents.md), record who owns each task, and review proposed changes before applying them.

**Success:** you can identify one current file and its latest tested behavior. **Fallback:** restore the last known working copy and apply one small change. Do not merge incompatible versions by alternating downloads.

### 29 The chatbot forgot the project or a new chat starts from scratch

**Possible causes:** conversation context limits, a new session, or files never being supplied to the new assistant.

1. Provide the [project-state note](../templates/project-state.md), brief/rules, latest actual file, and test report.
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
