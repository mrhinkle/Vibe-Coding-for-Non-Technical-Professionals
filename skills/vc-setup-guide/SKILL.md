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
