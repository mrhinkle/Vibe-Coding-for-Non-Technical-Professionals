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

A commit page shows every file the change touched, and in each file, the lines added (green, plus sign) and removed (red, minus sign), with a few gray lines of context around them. Read it like a supervisor, not a programmer: did it touch only what I asked, did it remove any safety, is there anything that looks like a key or a password, does it match my prompt. The full method is in [reading what the agent wrote](agent-loop-and-pull-requests.md).

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
