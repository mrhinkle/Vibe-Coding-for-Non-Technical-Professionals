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
| 10 | A LinkedIn post that announces the site in your voice | `aie-social-linkedin` | [raw](https://raw.githubusercontent.com/mrhinkle/aienterprise-skills/main/plugins/aie-social/skills/aie-social-linkedin/SKILL.md) · [repo](https://github.com/mrhinkle/aienterprise-skills/tree/main/plugins/aie-social/skills/aie-social-linkedin) | "Draft a LinkedIn post announcing my new personal site at [URL]. Use only what is true about what I built today. Give me three first lines to choose from. Do not post it." | You read it, cut one sentence, and it still sounds like you. Posting is your choice; see [linkedin-wrap-up.md](linkedin-wrap-up.md). |

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

aienterprise-skills and VibeCoding-a-Website are published under open source licenses; see each repository's `LICENSE` file and this course's [licenses folder](../licenses/README.md). You may use them in your own projects after class.
