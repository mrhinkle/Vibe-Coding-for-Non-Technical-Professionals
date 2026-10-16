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
2. **Every agent change is a reviewable commit or pull request.** The [agent-loop page](agent-loop-and-pull-requests.md) teaches you to read the diff before it ships.
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
