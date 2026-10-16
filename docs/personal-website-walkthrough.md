# Build a personal website from your LinkedIn profile

> **For an AI receiving only this lesson:** State which text and files you actually received. Ask whether the learner is starting, continuing, or stuck, and ask for their resume text and `project-state.md` before writing any site content. Never invent jobs, dates, degrees, or employers. Never publish a phone number, street address, or birth date. Return complete runnable files.

Your first project is a website about the one subject you know best: you. LinkedIn already holds most of the content. You will export it, hand it to your chatbot with a tested starter, pick colors and a layout, publish it on Vercel, and then add features from the [skills menu](website-skills-menu.md).

A finished, tested example lives at [`examples/personal-website/`](../examples/personal-website/). Open its `index.html` first so you know what "done" looks like. It belongs to a fictional person named Jordan Rivera; you are going to replace every word of it with your own.

Time budget inside the 90-minute website block: export 10, content 20, build 30, colors and layout 10, publish 20.

## 1. Get your content out of LinkedIn (10 minutes)

Pick the route that works on your laptop. Menu labels change; look for the words below.

**Route A, the quick PDF.** Open your own LinkedIn profile in a browser. Below your headline, find the **More** button (on some accounts it says **Resources**). Choose **Save to PDF**. A file like `Profile.pdf` downloads. This is your resume for today.

**Route B, the full export.** Click your photo, then **Settings & Privacy**, then **Data privacy**, then **Get a copy of your data**. Choose the smaller option that includes profile, positions, education, and skills. LinkedIn emails a link within about ten minutes; the archive contains CSV files you can attach instead of the PDF. Use Route B if Route A is missing from your menu, or if you want your skills list as text.

**No LinkedIn, or it will not export?** Open [`resume-template.md`](../examples/personal-website/resume-template.md) and type your details in. Fifteen minutes of typing beats fifteen minutes of fighting a menu.

Checkpoint: you can open the PDF or the template and see your name, headline, and at least two roles.

## 2. Decide what stays private (5 minutes)

The site is public. Remove these before the chatbot sees your content, or tell it to leave them out:

- Phone number, street address, birth date
- ID numbers, salary, anything about health or family
- Email addresses you do not want strangers to use (create a dedicated one if you prefer)
- Anything a former employer would consider confidential

Keep: name, city, headline, work history with outcomes, skills, education, public links.

## 3. Turn the export into site content (20 minutes)

This step is content prep, no skill needed yet. Give your chatbot the resume PDF or the filled template, plus [`resume-template.md`](../examples/personal-website/resume-template.md) so it knows the shape. (The [vc-project-brief](../skills/vc-project-brief/SKILL.md) skill comes next, once the facts are right.)

> Read my attached resume and fill in resume-template.md with my real information only. Do not invent anything. Leave a field blank if the resume does not say. Rewrite each job as a title, employer, dates, and two or three bullets that state what changed because of my work, in plain English. Draft a three-paragraph About section in first person that sounds like a person, not a brochure. Leave out my phone number, street address, and birth date. Show me the result; do not build the site yet.

Read every line. Fix dates, fix titles, and cut anything that sounds like a press release. This is the only step where you are the expert and the chatbot is not.

Checkpoint: a completed `resume-template.md` with no placeholders and nothing you would not say out loud to a stranger.

## 4. Build the first version (30 minutes)

Use [vc-build-small](../skills/vc-build-small/SKILL.md). Attach the example `index.html` and your completed template.

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

Sketch first if you want to change more than the palette: [site-centered.svg](wireframes/site-centered.svg), [site-sidebar.svg](wireframes/site-sidebar.svg). Then one prompt:

> Set the theme to [ocean] and the layout to [sidebar] permanently, remove the footer picker, and change the accent color to [#0B6E4F]. Change nothing else. Return the complete file.

Want a palette that is actually yours? Pick one color you like, ask the chatbot for a background, text, and accent that pass contrast checks with it, and record the three hex codes in your project-state file so the next chat does not drift.

Checkpoint: the page looks the same after a reload with no `?theme=` in the address, and the footer picker is gone.

## 6. Check, save, publish (20 minutes)

Run [vc-quality-check](../skills/vc-quality-check/SKILL.md), then [vc-publish-site](../skills/vc-publish-site/SKILL.md). The GitHub and Vercel steps are in the [setup guide](../setup-guide.md); do not improvise them.

Minimum checks before publishing:

1. Every link opens the right place, including the mailto link.
2. The page fits a phone with no sideways scrolling.
3. Print preview shows a tidy resume with no buttons.
4. Search the file for "Jordan", "Bright Harbor", and "example" and find nothing.
5. Nothing private is in the file, including in comments.

Checkpoint: a live `*.vercel.app` address that opens on someone else's phone. Record it in `project-state.md`.

## 7. Add features from the skills menu (the rest of the day, in increments)

Now the site becomes "cool." Each feature below is one small increment with its own check, using a skill from Mark's public skill repositories. Pick one at a time from the [website skills menu](website-skills-menu.md):

- A contact form that actually sends
- A newsletter signup
- Copy that sounds like you and not like a chatbot
- An image prompt for a hero or background
- SEO so your name finds your site
- A UX and link check before you share it
- A LinkedIn post announcing it

The `ADD-ON SLOT` comments in the file mark exactly where each one goes. Finish one, check it, save it, then pick the next.

## If you fall behind

Download the finished example, replace only the hero and About sections with your own words, publish that, and record the rest as "next" in your project-state file. A live page with three sections beats a perfect page that is still on your laptop. More recovery routes are in [stuck.md](stuck.md).
