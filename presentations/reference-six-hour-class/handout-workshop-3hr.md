# Get Unstuck — participant materials

Friday, September 11, 2026 · 9:00 AM–12:00 PM · echo Community Hub, 404 Hunt St, Suite 500, Durham
Mark Hinkle · Peripety Labs · The AIE Network · All Things AI

Prices and product facts below were checked against vendor pages on September 7, 2026. Re-check the cost card the day before.

---

## 1. Prework email (send Tuesday, resend Thursday)

Subject: Friday's workshop: five things to do before you arrive

Friday is hands-on from the first minute, so the setup happens now, not in the room. Five things:

1. **A paid Claude plan.** Claude Pro is $20/month ($17 billed annually). Claude Code is not on the free plan and it will fail at the door. This is the only subscription you need to build with; the tool you leave with has none. If you already pay for ChatGPT Plus, that works too, but the room demo is Claude.
2. **The Claude Desktop app.** Install it, sign in, and open Code once. No terminal, no Node.js, nothing else. Requirements: macOS 13 or newer, or Windows 10 (1809) or newer.
   Windows only: install Git for Windows first (click Next on every screen). The Desktop app needs it.
3. **A GitHub account.** Free plan is plenty. Sign in once so you remember the password.
4. **GitHub Desktop.** Install it and sign in with your GitHub account. Windows: if you run the installer directly, sign out of Windows and back in afterward, the night before.
5. **A Vercel account, created by clicking "Continue with GitHub."** Hobby plan, free, no card. Signing in with GitHub is what lets Friday's one-click step put the repo in your account.

Reply to this email by Thursday with two screenshots: the Claude Desktop app open on a chat, and GitHub Desktop signed in. If you cannot get either one working, tell me, and you will work in a browser at claude.ai/code on Friday. It works fine and you lose nothing.

Bring: your laptop and charger, and the spreadsheet or tool you currently use (or pay for) to handle the process you want to fix, with its column names visible. Write two sentences about who uses it and what comes out. That is your spec.

Optional: think of a domain name you would actually use. We will price it live (about $11 for a .com). Nobody has to buy anything.

One thing said plainly, because the listing says "no recurring subscription": the tool you build has no subscription to a builder. The AI that helps you build it is $20/month while you are using it, and a site that makes money belongs on Vercel's $20/month plan by Vercel's own rules. That is the whole bill.

---

## 2. Room card (one page, printed)

**Deploy Button:** `https://vercel.com/new/clone?repository-url=https://github.com/mrhinkle/unstuck-starter`

**Stickies:** green on your lid = step done. Red = stuck, a helper comes to you. No hands.

**Pairs:** the nervous one types. The confident one reads the plan out loud.

**GitHub in four words**
- Repository: the folder and its whole history. In your account.
- Branch: a photocopy you can scribble on. The live site never sees it until you say so.
- Commit: a saved snapshot with a note.
- Pull request: asking to merge the photocopy back. It gets a preview URL and a check first.

**The loop:** branch → pull request → preview URL → merge → live. Rollback is one click in Vercel.

**Three Vercel gotchas**
- The first deploy on a project is always production.
- Hobby rolls back one deployment. Pro rolls back to any.
- After a rollback, nothing goes live until you click Undo Rollback.

---

## 3. Every prompt used in the room, in order

Type these verbatim. Fill in the brackets.

**Spec (0:33)**
```
Read spec.md. Use plan mode. Plan how to build what it describes as ONE page in this app, using the starter's form and table. Do not write any code yet. Show me the plan.
```

**First ship (0:48)**
```
Create a branch called first-change. Change the site title to "[your business name]". Commit with a clear message, push the branch, and open a pull request.
```

**Build the one thing (1:18)**
```
Read spec.md and the plan we agreed on. On a new branch called my-tool, build it as ONE page in this app: a form to add a row and a table to see the rows, using the starter's sample data. Do not change anything else. Run the build and fix any errors before you tell me it is done. Then commit, push, and open a pull request.
```

**Test (1:43)**
```
Add Playwright to this project. Write ONE test that loads my-tool, fills in the form with the example under "How we know it works" in spec.md, submits it, and checks that the result described under "What comes out" appears. Add the GitHub Actions workflow so the test runs on every push and pull request to main. Run the test locally and show me the output. Commit and push to the my-tool branch.
```
If the check is red:
```
Fix the code so the test passes. Do not change the test.
```

**Break it on purpose (1:55)**
```
On a new branch called break-it, rename the first form field label to something else. Commit, push, and open a pull request.
```
Watch the red X. Do not merge. Close the pull request.

**Rollback (2:13)**
```
On a new branch called oops, change the headline on the home page to OOPS. Commit, push, and open a pull request.
```
Merge it. Vercel → Deployments → previous deployment → Instant Rollback. Then Undo Rollback. Then:
```
Put the headline back on a branch, push, and open a pull request.
```

**Secrets (2:18)**
```
Confirm .env.local is listed in .gitignore. Search the whole project for anything that looks like an API key, token, or password and list every place you find one. Move any real value into an environment variable and tell me which Vercel environment it belongs in.
```
Then in Vercel → Settings → Environment Variables: add `DEMO_KEY` = `not-a-real-key`, scope Production, tick Sensitive. Real keys stay in your password manager today.

**Review (2:22)**, in a fresh Claude session:
```
/code-review
```

**Skill (2:37)**
```
Create .claude/skills/my-deploy-checklist/SKILL.md. Front matter: name my-deploy-checklist; description, under 200 characters, saying to run it before merging any pull request to main. Body: a numbered checklist that (1) runs the Playwright test, (2) confirms .env.local is in .gitignore and no key strings are in the code, (3) confirms the PR has a green check and a preview URL I looked at, (4) only then merges, (5) after merge opens the production URL and submits the form once. Under 40 lines.
```
Then `/my-deploy-checklist`. Then:
```
Copy this skill to .agents/skills so Codex and Cursor read it too. Commit, push, and open a pull request.
```

**Homework prompts**
```
Run npm audit. Update Next.js and any dependency with a known vulnerability to a safe version. Run the build and the Playwright test. Open a pull request with what changed and why.
```
```
Enable Row Level Security on every table and write policies so users only see their own rows. Show me each policy and explain it in one sentence.
```
```
Add Sentry to this project and send me a test error.
```

---

## 4. Cost card (checked September 7, 2026)

**Yours**
| Item | Price | Note |
|---|---|---|
| .com domain | $10–12/yr | $11.25 inside Vercel (skips DNS). Porkbun $11.08, same on renewal. Verisign raises wholesale $0.71 on Nov 1, 2026. Beware $6.98-then-$15.88 first-year offers. |
| Vercel Hobby | $0 | Personal, non-commercial only. Exceed a limit and, in most cases, you wait 30 days. Runtime logs kept 1 hour. |
| Vercel Pro | $20/mo | Includes $20 usage credit, 1 TB transfer, rollback to any deployment, one free first-year .app/.dev/.site domain. Turn on spend management; lower the $200 default notification. |
| GitHub Free | $0 | Unlimited private repos. 2,000 Actions minutes/month (unlimited on public repos). |
| Neon Free | $0 | Scales to zero after 5 min, wakes on request. Launch tier is pay-as-you-go, no minimum. |
| Supabase Free | $0 | 500 MB, pauses after 7 idle days. Pro from $25. Turn on RLS. |
| Resend Free | $0 | 3,000 emails/month, 100/day, 3 domains. Verify your domain. |
| Sentry Developer | $0 | 5,000 errors/month, 30-day lookback. |
| Clerk (logins) | $0 | Free to 50,000 monthly retained users. Pro $25. |
| Claude Pro | $20/mo | Includes Claude Code. $17 billed annually. Or ChatGPT Plus $20 for Codex. |

Vercel's own definition of commercial use includes "receiving payment to create, update, or host the site" and running ads. A business site belongs on Pro.

**The builders**
| Tool | Price | What stays behind |
|---|---|---|
| Lovable Pro | $25/mo | Backend: no one-click migration off Lovable Cloud; secrets and edge-function code never export. Site and domains do stay live after cancel. |
| Bolt Pro | $25/mo | Export and custom domain need Pro. Version history and the bolt.host URL do not travel. |
| Replit Core | $20/mo + metered hosting (since Aug 2026) | Cancel: "published apps may go offline, custom domain connections are removed." |
| Base44 Builder | $50/mo ($40 annual) | The tier where GitHub sync starts. Backend functions need Base44's runtime. |
| v0 Plus | $30/user/mo (Free tier syncs to GitHub) | Nothing proprietary: plain Next.js you own. The old $20 tier is being sunset. |

**Exit doors from Vercel**
- Netlify Free: 300 credits/month, hard cap. A production deploy is 15 credits; when credits run out every site shows "Site not available." Personal $9/mo.
- Cloudflare Workers: static asset requests free and unlimited. Workers Paid $5/mo. Cloudflare now steers new sites to Workers, not Pages.

---

## 5. Rent-versus-own scorecard

| Tool | Export | GitHub sync | Plan gate | Backend portable? | Cancel → site stays up? |
|---|---|---|---|---|---|
| Lovable | ZIP (paid), GitHub | Two-way, one branch | All plans | No: Cloud data exports, secrets and functions do not | Yes |
| v0 | ZIP, GitHub | Branch + PR | Free | Plain Next.js | It is your Vercel |
| Bolt | GitHub (Pro) | Two-way, polls every 30s | Pro $25 | Rows, logins, uploads, secrets stay | Not stated |
| Replit | ZIP, GitHub panel | Push/pull | Any | DB, auth, secrets are Replit's | "May go offline" |
| Base44 | GitHub (Builder) | Two-way, main only | Builder $50 | Functions need Base44's runtime | "Apps stay live," no detail |
| Google AI Studio | ZIP, GitHub | Two-way with conflict UI | Free | Standard React + Node on Cloud Run | Deployed apps keep running |
| Firebase Studio | GitHub, one-way | Publish branch | Free | Product ends Mar 22, 2027; data deleted | Being shut down |

Three questions before any new builder: which pricing row says GitHub, which doc says which way sync goes, and what happens on cancel. If any answer is missing, assume the worst.

---

## 6. Helper triage card (stop after step 3)

1. Does the Claude Desktop app open and sign in? The free plan fails here; it needs Pro.
2. Windows: is Git for Windows installed? Mac: macOS 13 or newer?
3. If either answer is no, move them to claude.ai/code in a browser on their own repo. Do not debug further.
4. GitHub Desktop signed in? Installed today on Windows → sign out of Windows and back in.
5. Vercel signed in with GitHub, not email? Otherwise the Deploy Button puts the repo in the wrong place.
6. Behind by more than one block? Re-template from the current checkpoint branch instead of fixing their state.

Checkpoint branches in the starter: `checkpoint-1-deployed`, `checkpoint-2-first-ship`, `checkpoint-3-tool`, `checkpoint-4-tests`, `checkpoint-5-skill`.

---

## 7. Starter repo spec (to build before Friday)

`github.com/mrhinkle/unstuck-starter`, marked as a GitHub Template, public, with a Deploy Button link in the README.

- A small Next.js site: a home page with a headline and site title, and a `my-tool` page with a form and a table over sample data.
- `spec.md` with the five headings: Who uses it / What they type in / What comes out / What must never happen / How we know it works.
- `CLAUDE.md` and `AGENTS.md`, four lines: always follow spec.md; never commit .env files; build on a branch and open a PR, never push to main; ask for a plan before changing more than one file.
- `.gitignore` already excluding `.env.local`.
- An empty `.claude/skills/` folder and an example `SKILL.md` in `docs/`.
- The five checkpoint branches above.
- A demo copy on Mark's account already at checkpoint-5, plus a deliberately broken demo app with a fake key in the browser bundle for the DevTools demonstration. Never use a stranger's app for that demo.

---

## 8. Room kit

Two colors of sticky notes (they double as minute cards). A printed QR of the Deploy Button link by the door. A shared doc for live URLs. Projector with Claude Code and github.com side by side. Sanitized copies of brand-voice, deploy-to-vercel, qa-tester, and webmaster SKILL.md files with client names removed. Verify echo's Wi-Fi handles 15 laptops running Vercel builds and one Playwright browser download each; bring a hotspot.
