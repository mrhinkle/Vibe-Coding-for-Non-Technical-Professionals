# Personal website example: your LinkedIn profile as a one-page site

This folder is a finished, working example of a personal website. It is the kind of page you can build in class by giving your chatbot your LinkedIn profile.

The person on the page, **Jordan Rivera**, is fictional. So are the employers, schools, and talks. Nothing here is a real company or a real person.

## What is in the folder

| File | What it is |
| --- | --- |
| `index.html` | The whole website. One file. Styles and the tiny theme picker script are inside it. No fonts, images, libraries, or network calls. |
| `resume-template.md` | A fill-in form with the exact fields the site uses, plus a "do not publish" list. |
| `resume-sample.md` | The template filled in with Jordan Rivera's content. It matches `index.html` exactly. |
| `tests/run-checks.mjs` | The automated browser checks. See "Checks we ran" below. |
| `previews/` | Screenshots at phone (375px) and laptop (1200px) widths in a few themes. |

## Open it

Download or copy this folder. Double-click `index.html`. It opens in your browser. Nothing to install.

To print it as a resume, use your browser's Print command. The navigation, buttons, and theme picker disappear. Text turns black. Link addresses print after the link text. It fits on one to two pages.

## Make it yours

1. Export your LinkedIn profile. On your profile page choose **More** → **Save to PDF**.
2. Open `resume-template.md`. Fill it in from the PDF. Read the "do not publish" list at the bottom first.
3. Give your chatbot three things: `index.html`, your filled-in template, and this request:

> Read the attached index.html before changing anything. Replace every piece of Jordan Rivera's sample content with the content in my template. Keep the HTML structure, the ids, the CSS, and every comment that starts with CUSTOMIZE or ADD-ON SLOT. Do not add sections I did not fill in. Delete the Projects section and its nav link if my template has nothing there. Return the complete file.

4. Save the file, open it, and check it at phone width and laptop width. Follow every link.

Every spot a student should edit is marked with an HTML comment that begins `<!-- CUSTOMIZE: ... -->`.

## How the page maps to your LinkedIn PDF

| On the page | In the LinkedIn PDF |
| --- | --- |
| Header: name | Your name at the top |
| Hero: name, headline, city | Name, the headline line under it, and your location |
| Hero: LinkedIn button | The profile address printed on the PDF (or copy it from your browser) |
| Hero: Email button | Contact info → email |
| Hero: Resume (PDF) button | Nothing in the PDF. Save a resume as `resume.pdf` next to `index.html`, or delete the button. |
| About (3 paragraphs) | **About** |
| Experience (3 roles, outcome bullets) | **Experience**, newest first. Turn duties into outcomes with a number where you can. |
| Skills (3 groups of chips) | **Skills**. Group them yourself; LinkedIn lists them flat. |
| Education | **Education** and **Licenses & certifications** |
| Projects & Talks (optional) | **Projects**, **Publications**, or talks you gave. Delete the section if empty. |
| Contact | Contact info → email only |

What stays off the page, on purpose: phone number, street address, birth date, ID numbers, salary. The full list is at the bottom of `resume-template.md`.

## Switch the theme and layout

There are six themes: `slate` (default), `forest`, `sunset`, `ocean`, `mono`, `plum`. There are two layouts: `centered` (default, one 760px column) and `sidebar` (on screens 900px and wider, your name, links, and skills sit in a left column; on phones it is one column).

**With the picker.** Use the two menus in the footer. The browser remembers your choice.

**With the web address.** Add `?theme=forest&layout=sidebar` to the end of the address. The address wins over the remembered choice.

**Hard-code it before you publish.** The footer comment in `index.html` walks through this. In short:

1. At the top of the file, set `data-theme="..."` and `data-layout="..."` on the `<html>` tag.
2. Delete the `<div class="picker"> ... </div>` block in the footer.
3. Delete the `<script>` block at the bottom.

The page then shows your choice to everyone and has no JavaScript at all.

To make a new theme, copy one `html[data-theme="..."]` block in the CSS, rename it, and change its six colors.

## ADD-ON SLOT comments

Version 1 is deliberately plain. Four HTML comments mark where later additions go. Search `index.html` for `ADD-ON SLOT`.

| Slot | Where | Note |
| --- | --- | --- |
| contact form | Inside the Contact section | Needs a form service; the comment points to `docs/website-skills-menu.md` |
| newsletter signup | Inside the Contact section | Needs a newsletter service |
| blog/posts list | After the Contact section | Add a `<section id="posts">` and a nav link |
| testimonials | After the Contact section | Add a `<section id="testimonials">` with two or three short quotes |

Do not add these in class unless the add-on guide tells you how. A form that silently goes nowhere is worse than a mailto link.

## Publish

Follow the course [setup guide, "Publish each project"](../../setup-guide.md#publish-each-project). Put `index.html` (and `resume.pdf` if you added one) at the root of your website repository. Do not upload this whole examples folder.

## Checks we ran

Date: 2026-10-15. Browser: Chromium (Playwright 1.64.1, headless), opening `index.html` over `file://`. This is a classroom quality check, not a full accessibility or security audit.

Command, run from this folder:

```
node tests/run-checks.mjs
```

(Playwright was installed in a scratch folder, so the run used `NODE_PATH=<scratch>/node_modules node tests/run-checks.mjs`. Installing Playwright in this folder with `npm install playwright && npx playwright install chromium` makes the plain command work.)

Observed output: `46 passed, 0 failed.` Line by line:

| Check | Result | Observed |
| --- | --- | --- |
| Sections `#hero #about #experience #skills #education #projects #contact` exist, each with a visible heading | Passed (7 checks) | Headings: Jordan Rivera, About, Experience, Skills, Education, Projects & Talks, Contact |
| Landmarks `#header #main #footer` exist | Passed (3) | |
| Every link has non-empty text | Passed | 12 links checked |
| Contact mailto link is correct | Passed | Both hero and contact links are `mailto:jordan.rivera@example.com` |
| Every nav link points at an existing section | Passed | |
| Each of the six themes applies and changes the body background, and is saved to localStorage | Passed (6) | slate rgb(246,243,238); forest rgb(241,245,239); sunset rgb(255,246,238); ocean rgb(15,27,45); mono rgb(255,255,255); plum rgb(248,243,250) |
| Layout picker sets `data-layout` and remembers it | Passed | attr=sidebar, stored=sidebar |
| Remembered theme and layout survive a reload | Passed | slate/sidebar |
| `?theme=forest&layout=sidebar` applies on load (attributes and both menus) | Passed | forest,sidebar,forest,sidebar |
| Unknown `?theme`/`?layout` values fall back to defaults | Passed | slate,centered |
| 375px, slate and ocean, centered and sidebar: no horizontal scroll, nav visible, hero buttons visible | Passed (4) | scrollWidth=375 in every case |
| 1200px with `layout=sidebar` (slate, ocean, forest): hero and skills column sits left of about and experience; no horizontal scroll | Passed (6) | hero right edge 374px, about left edge 422px; hero and about tops both at 103.6px |
| 1200px centered: main column at most 760px wide | Passed | width=760 |
| Print media: nav, buttons, picker hidden | Passed | all `display: none` |
| Print media: body text black on white | Passed | rgb(0,0,0) on rgb(255,255,255) |
| Print media: link URLs appear after link text | Passed | `(https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE)` and `(jordan.rivera@example.com)` |
| Keyboard: first Tab lands on a visible skip link | Passed | focused element has class `skip` and is on screen |
| No console errors or page errors across all runs | Passed | |
| No external network requests | Passed | only `file://` requests seen |
| Six screenshots saved to `previews/`, each under 300 KB | Passed (6) | slate-375 125 KB; ocean-375 124 KB; slate-1200-centered 197 KB; slate-1200-sidebar 262 KB; ocean-1200-sidebar 261 KB; forest-1200-sidebar 263 KB |

Two things were found and fixed during testing, then re-run: the print stylesheet left the body background transparent (the `* { background: transparent }` rule won over the body rule), and full-page screenshots were 358–374 KB, so the previews are capped at 1500px tall instead.

Not tested: a real printer or PDF export (print was checked by emulating print media and reading computed styles), screen readers, and the page after you edit it. Re-run the checks after any change.

Preview screenshots: `previews/slate-375.png`, `previews/ocean-375.png`, `previews/slate-1200-centered.png`, `previews/slate-1200-sidebar.png`, `previews/ocean-1200-sidebar.png`, `previews/forest-1200-sidebar.png`.
