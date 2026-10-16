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

Put this in your project's `AGENTS.md` (template in [templates/AGENTS.md](../templates/AGENTS.md)) so every session starts with the rule:

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
