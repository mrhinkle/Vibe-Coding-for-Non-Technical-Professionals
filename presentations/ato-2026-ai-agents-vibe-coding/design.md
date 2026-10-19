# AI Agents & Vibe Coding — Presentation Design System

This document is the visual contract for the All Things Open 2026 workshop deck. It translates the All Things AI website and the October 2, 2026 All Things AI sponsorship prospectus into a projection-first presentation system.

The deck should feel like a sophisticated field guide: practical, confident, spacious, and technically precise. It should not feel like a software dashboard, a generic corporate template, or decorative science fiction.

## Source direction

- All Things AI website: strong midnight and electric-blue fields, bold business-tech typography, rounded white cards, restrained hairlines, real event photography, and subtle orbital or wave detail.
- All Things AI 2027 prospectus: generous white pages, navy/orange hierarchy, pale-blue editorial panels, thin vector icons, blue/orange dotted filament ribbons, fine rules, circular nodes, and clean process timelines.
- ATO 2026 workshop card: the official opening visual. Use it unchanged and full bleed.
- Existing six-hour class: preserve its teaching sequence, speaker notes, hands-on cues, and semantic green/red/orange system.

### External frameworks and examples

External frameworks supply the underlying idea, not the visual treatment. Use the Claude AI-Native SDLC stages as the workshop's process vocabulary, explain each stage in plain language, and cite the original beside the adapted diagram. Use one descriptive, clickable source link plus a full speaker-notes citation. Do not paste a framework screenshot when the same relationship can be drawn cleanly in this system.

## Canonical six-step process

The workshop uses one process vocabulary everywhere: footer rails, process diagrams, section eyebrows, exercise names, recaps, and presenter cues.

1. **Plan** — Name the person, the goal, the finish line, and the risks.
2. **Design** — Map the experience and decide what must stay true.
3. **Build** — Change a safe copy in small increments.
4. **Test** — Try the important action yourself and give the result to a fresh person.
5. **Deploy** — Put the tested version in the intended live home with an undo path ready.
6. **Maintain** — Watch real use, repair problems, and carry what you learn into the next Plan step.

Use those exact six labels in the footer rail, lifecycle diagrams, exercise eyebrows, recaps, and presenter cues. Plain-language verbs such as say, sketch, try, review, publish, and listen may explain what happens inside a stage, but they do not replace the stage name. Never place a second process glossary on the same slide.

## Workshop architecture

Start with the workshop promise, then explain the parts of an agent: model, tools, and memory. A good agent uses memory to continue the project, but checks that memory against the current files before acting.

Define the coding harness next. The harness is the working environment around the model: project context, tools, permissions, the work loop, and evidence. Do not treat a model and a coding product as interchangeable.

Introduce Claude Code, Codex, and Grok Build as three coding-agent products and harnesses. Explain what each is and why someone would use it before naming product features. Then explain vibe coding and the six-step lifecycle before GitHub, Vercel, or account setup.

Open with the promise that this is a workshop, not passive training. The participant is here to make two small apps and leave feeling capable of repeating the process. The early sequence is: workshop promise → agent parts → coding harness → three harnesses → vibe coding → six-step lifecycle.

Frame the room as a choose-your-own-adventure workshop with a fixed finish line. Participant questions decide where the facilitator slows down, which explanation or example gets improved, and what useful change is proposed for the course repository. Show that the training materials can move through the same Plan → Design → Build → Test → Deploy → Maintain loop as an app. Do not promise that every idea is accepted without review, and do not let optional branches replace the website and game.

Include one balanced comparison between prompt-first hosted builders such as Lovable, Bolt.new, Base44, and Replit and this repo-first lifecycle. Treat the builders as a faster route to an initial preview, not as inferior products. The workshop distinction is explicit ownership of the repository, saved versions, tests, human review, hosting project, and live URL.

The course README must provide a portable start prompt that works when pasted into Claude, Grok, ChatGPT, or another capable assistant. The prompt must make the assistant name the files it actually read, choose one checkpoint, preserve the separate website and game projects, and stop with an exact blocker instead of pretending it has access.

The workshop has exactly two exercises:

1. **Website** — Adapt one working page, check its main action, save it in `my-first-site`, and publish it as its own Vercel project.
2. **Game** — Build one complete start-to-finish game loop, save it in `my-first-game`, and publish it as a separate Vercel project.

Each exercise starts with what participants will learn, follows Plan → Design → Build → Test → Deploy → Maintain, and ends with a review of observable evidence. The final demonstration shows both projects together; it is not a third exercise.

Teach account setup before the first exercise. Define GitHub as the online home for the project and its history. Define Vercel as the publishing service that turns a connected repository into preview and production URLs. Require a ready check: the learner can open the GitHub profile, identify the learner-owned repository, open the intended Vercel account or team, and locate that repository in Vercel's import flow.

Keep the projects separate. The website and game each need their own folder, GitHub repository, Vercel project, live URL, and check record. Do not overwrite the website when the game begins.

## Design principles

1. **Whitespace is a teaching tool.** Use space to show sequence, separation, and priority.
2. **Diagrams do the explaining.** If a relationship is ordered, gated, cyclical, or branching, show it with a diagram instead of a row of prose boxes.
3. **One flourish per slide.** A faint filament, a return arc, a glow, or a small orbital mark is enough.
4. **Thin lines, decisive nodes.** Connectors are quiet; the current action or state is where color belongs.
5. **Real evidence over decoration.** Use actual event photography and recognizable workflow objects when imagery adds meaning.
6. **Projection first.** The smallest important text must remain readable from the back of a room.

### Editorial image use

- Reuse course imagery when it reinforces a specific concept, transition, or human action. Do not add an image only to fill open space.
- Keep the primary teaching text on the white canvas. Place the image in one bounded crop with a quiet hairline so the slide still reads like a field guide.
- Use the earlier orange-and-blue illustrations sparingly: agent definition, lifecycle loop, major transition, and take-home practice. Treat them as illustrations, never product screenshots.
- Use a different image for each purpose. Do not repeat a decorative image elsewhere in the deck.
- Prefer one image occupying roughly one-third of the slide. Avoid collages, text over busy areas, and photo strips that compete with the title or process footer.
- Real workflow screenshots remain evidence. Editorial illustrations remain atmosphere and memory cues. Do not blur the two roles.
- Prefer white, warm-white, or pale-blue backgrounds for concept illustrations on ordinary teaching slides. Reserve dark or black image fields for the official event cover, book promotion, and closing beats where the contrast marks a real section change.

### Opening destination slide

Show the finished idea before explaining the process. The opening outcome slide uses one real website starter and one course game example, with direct labels and no surrounding card grid. It answers three questions at a glance: what the learner will make, what a person can do with it, and what counts as finished.

- Prefer a real course artifact over a generic mockup.
- Crop the website to the part that communicates its purpose from the back of the room.
- Show the game in a recognizable play state or rule diagram, not as code.
- Keep the completion sentence outside the visuals: both projects live in the learner's repository and end with a URL another person can open.

## Data-ink rules

This deck borrows Tufte's restraint without turning the workshop into an academic chart book. Every mark should teach, orient, or verify.

- Start with an open white canvas. Add a panel only when it marks a real boundary, state, or piece of evidence.
- Give each slide one primary evidence object: a process rail, gate lane, artifact plate, small multiple, dot plot, or sparse matrix.
- Label the evidence directly. If a legend can be removed by putting the word beside the mark, remove the legend.
- Use 0.5 pt hairlines for structure, 1 pt lines for primary relationships, and 2.5–3 pt only for the one emphasized series or path.
- Use blue for system structure, orange for a human action or decision, green for literal pass/live states, and red for literal stop/unsafe states.
- Use small multiples when the same grammar repeats. Keep scales and alignment identical so the comparison happens without explanation.
- Prefer proportional position and length to decorative area. A time rail should show time; a cost plot should share one axis.
- Keep annotations adjacent to the thing they explain. Avoid detached footnotes, leader lines that cross, and legends that require eye travel.
- Never add a rounded card just to hold a sentence. Whitespace is the default container.
- Reflection and break slides use open prompts separated by whitespace or one hairline. Do not simulate sticky notes with tinted panels, colored rails, or card pairs.

## Voice and copy

The presenter is Mark Hinkle: technically experienced, practical, optimistic about what the tools make possible, and candid about where they fail. The language should sound like a capable person talking to another capable person—not a corporate narrator and not an AI evangelist.

- Lead with the plain-English point. Introduce the technical term only when it helps the audience act.
- Prefer first-person experience over abstract authority: “I have shipped the mistakes I am about to show you.”
- Use one concrete analogy when it makes a new idea easier to hold: a branch is a photocopy; a test is a circuit breaker; a plan is a contractor’s quote.
- Use contractions, short turns, and varied sentence length. Fragments are welcome when they make the rhythm clearer.
- Be enthusiastic without hype. Show what the tool enables, then name the operating guardrail.
- Use humor sparingly and usually at Mark’s expense. Never turn the audience or a beginner’s mistake into the joke.
- Sound direct when safety or ownership matters: “If a key lands in chat, you have made a copy you do not control.”
- Keep one voice flourish per slide. The procedure, prompt, URL, or checklist must remain exact.
- Never invent or casually round a number. Time-sensitive claims belong in speaker notes with a stage-day verification cue.

Useful voice anchors for this deck:

- “You do not have to become a programmer. You do have to own the work.”
- “The green check is the circuit breaker at the end.”
- “A useful review beats a polite one.”

Avoid corporate mush (“leverage,” “unlock,” “transformative journey”), inflated AI claims, fake folksiness, repeated filler words, and jokes that compete with the teaching point.

### Non-coder audience rule

The slide says what the participant is doing, what success looks like, and the one safety rule that matters. Speaker notes and the participant guide carry filenames, commands, platform vocabulary, and exact implementation prompts.

- Introduce a technical term only after the plain-language idea is clear.
- Prefer “safe copy,” “review screen,” “automatic check,” “put it live,” “secret setting,” and “saved checklist” in explanations.
- Keep exact product terms inside copyable prompts when the tool needs them.
- Never imply that participants must read code to judge whether the result works.
- Use risk examples to explain a safeguard, not to frighten the room.

### Title rule

- Titles are spoken headlines, not descriptions of the slide.
- Prefer 2–6 words and keep the title on one line.
- Name the subject or the action plainly: “Plan before code,” “Connect the database,” “Watch the gate close.”
- Use Mark's natural cadence where it helps, but do not turn every title into a slogan.
- No trailing periods. Avoid stacked clauses, setup language, and titles that merely repeat the eyebrow.
- Preserve exact technical meaning. Shorter does not mean vaguer.

## Color tokens

| Token | Hex | Use |
| --- | --- | --- |
| `midnight` | `#0B1426` | Dark slides, dark callouts, code and prompt panels |
| `deep-space` | `#07172D` | Atmospheric dark backgrounds and edge fields |
| `ink` | `#0F172A` | Primary text on light slides |
| `slate` | `#475569` | Body copy and secondary labels |
| `brand-blue` | `#307FE2` | Core brand marks and standard flow state |
| `electric-blue` | `#0055FF` | Links, active technical nodes, selected words |
| `light-blue` | `#66AAFF` | Dark-background highlights and subtle glows |
| `orange` | `#EF8B39` | Human action, workshop activity, active step |
| `editorial-orange` | `#B93800` | Small light-background eyebrows only |
| `green` | `#22C55E` | Passed, live, complete |
| `red` | `#EF4444` | Blocked, unsafe, failed |
| `ice` | `#F2F6FC` | Pale editorial panels |
| `soft-gray` | `#FAFBFC` | Alternate light surface |
| `hairline` | `#D8E2EF` | Rules and card borders |
| `muted-line` | `#94A3B8` | Secondary connectors |
| `white` | `#FFFFFF` | Primary dark-slide text and light surfaces |

Orange is an accent, not a background system. Green and red are semantic only.

## Typography

The deck and website use the same three roles: editorial display, highly legible body, and technical mono. Keep those roles stable even when the exact application font changes.

| Role | Web stack | PowerPoint adapter | Use |
| --- | --- | --- | --- |
| Display | `Verdana, Geneva, Tahoma, sans-serif` | Verdana | Slide titles, hero statements, short diagram labels |
| Body | `Montserrat, Arial, sans-serif` | Montserrat | Body copy, captions, cards, labels, numbers, tables |
| Mono | `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace` | Courier New | Prompts, code, filenames, system labels, slide numbers |

JetBrains Mono is the preferred web mono face. Courier New stays in the PowerPoint file because it is a portable Office fallback and avoids silent font substitution on a presentation machine. Do not introduce another font family to solve emphasis; use weight, size, color, or spacing instead.

### Display

- Preferred: **Verdana Bold** or **Verdana Bold Italic** when emphasis is needed.
- Use for slide titles, large section statements, and short diagram labels.
- Tight but not cramped: approximately -1% to -2% tracking.
- Sentence case is preferred; avoid long all-caps headlines.

### Body and labels

- Preferred: **Montserrat Regular**, **SemiBold**, and **Bold**.
- Use for body copy, captions, cards, labels, numbers, and diagram explanations.
- Use Courier New only where the workshop intentionally represents code, a prompt, a filename, a slide number, or a system label from the source deck.
- Use Montserrat for all table text. Weight and surface color—not another font—separate headers from data.

### Projection sizes on the 1280 × 720 canvas

- Slide title: 38–48 px.
- Hero title: 52–64 px.
- Section eyebrow: 13–16 px, bold, uppercase, 1.5–2.5 px tracking.
- Body: 19–24 px.
- Diagram node label: 18–22 px.
- Diagram explanation: 15–18 px.
- Caption or source note: 12–14 px.
- Never put required audience content below 15 px.

## Canvas and spacing

- Canvas: 1280 × 720 px, corresponding to 13.333 × 7.5 inches.
- Standard side margins: 72–88 px.
- Top content start: 60–80 px.
- Bottom content limit: 620 px; reserve the remaining area for workshop navigation and slide number.
- Major content gap: 32–48 px.
- Card gap: 20–28 px.
- Card padding: 20–28 px.
- Use two columns only when the relationship is genuinely paired. Prefer one dominant visual structure per slide.

## Surfaces and geometry

- Standard content card: white or `ice`, 14–16 px radius, 1 px `hairline`, no shadow.
- Dark prompt panel: `midnight`, 12–14 px radius, 1 px orange or white at low opacity.
- Editorial panel: `ice`, 12 px radius, no accent bar unless it encodes meaning.
- Pills: reserve for true state badges or timing. Do not turn full sentences into pills.
- Image corners: 12–16 px radius with a restrained 1 px border. Use a soft shadow only for a hero image.
- Rules: 1–1.25 px. Large filled arrows are not part of this system.

## Connectors and diagram semantics

- Standard connector: 1–1.25 px `muted-line`, round caps.
- Directed connector: use a small arrowhead only when direction is not obvious from layout.
- Secondary dependency: dotted or dashed 1 px line.
- Return or recovery loop: curved connector, never a detached caption box.
- Normal state: blue.
- Human action or current workshop step: orange.
- Passed/live: green.
- Blocked/unsafe: red.
- Inactive future state: white or `ice` with 35–50% opacity.

Nodes should be compact. Explanations belong below or beside nodes rather than inside oversized boxes.

## Diagram patterns

### 1. Operating rail

A horizontal hairline with compact rounded nodes for a linear or cyclical process. Definitions sit below nodes. A low-contrast curved return connector may close a lifecycle.

Use for:

- `Plan → Design → Build → Test → Deploy → Maintain`
- `Branch → Pull request → Preview → Merge → Live`
- the green and red gate pair
- the Monday action sequence

### 2. Paired mapping

Left-side risks connect one-to-one across a thin rule to right-side controls. A small orange control marker can sit on the center line. Avoid heavy arrows.

Use for:

- failure → practice mappings
- verification inputs converging on a ship gate

### 3. Two-lane operational flow

Two labeled horizontal lanes show how an account/setup path enables a code/delivery path. A single vertical connector should make the dependency obvious.

Use for:

- database setup plus code migration
- API key setup plus message delivery

### 4. Recovery or decision flow

Use branching only when the audience must understand a threshold, exception, or recovery loop. Keep the main path visually stronger than exception paths.

Use for:

- rollback and repair
- when to call a professional
- persistent instructions versus reusable skills

## Flourishes

- Preferred motif: a small cobalt/orange filament ribbon with dots embedded inside the ribbon surface.
- Other permitted motifs: sparse stars, a short orbital arc, a tiny orange spark, or one pale blue glow.
- Place flourishes at an edge or corner and keep them below 12% of the slide area.
- Keep opacity low enough that the flourish never competes with text or diagrams.
- Do not combine a filament, starfield, glow, and photographic treatment on the same slide.

## Icons

- Use single-color line icons with 1.5–2 px strokes, round caps, and minimal interior detail.
- Place icons directly on the surface or inside a small outline square; avoid filled icon tiles.
- Use familiar system metaphors: branch, preview, check, database, environment variable, inbox, rollback.
- Icons are supporting cues, not the main visual language.

### Product marks and pictograms

- Use official product marks only when the slide teaches what that product does. Keep the original proportions and color treatment.
- Put Git, GitHub, and Vercel marks together on the toolchain map so the audience can connect the names to the services once.
- Do not repeat logos as decoration. A repeated mark must support product recognition or a real integration step.
- Use one distinct line pictogram for a concept slide: undo, secret setting, database, or inbox. Keep it in open space instead of placing it in a new card.
- Standard concept pictogram: 48–56 px on the 1280 × 720 canvas. Standard icon inside a process node: 26–40 px.
- Use the deck's semantic color: blue for system structure, orange for secrets or human control, green for a live destination. White is allowed inside a green or dark filled node.
- Source product marks from the vendor brand kit. Source general pictograms from Lucide under the ISC license. Record the source in speaker notes.

### Interface screenshots

- Use screenshots when the learner needs to recognize a real product screen or handoff. Keep diagrams for the underlying idea and screenshots for what the learner will actually see.
- Capture public or sanitized views only. Do not expose account names, private projects, secrets, billing details, or customer information.
- Crop to the decision point: repository name and files in GitHub, project connection and deployment state in Vercel. Remove browser clutter that does not help the learner.
- Use one or two screenshots on a process slide. Give each screenshot one plain-language caption and pair the sequence with an observable checkpoint.
- Keep screenshots at their native proportions where possible. Use a small rounded crop, no shadow, and no fake browser chrome.
- Record the page URL and capture date in speaker notes because product interfaces change.

## Photography

- Use candid All Things AI event photography showing people working, listening, or collaborating.
- Prefer landscape crops with consistent height and natural color.
- Use little or no filtering; a subtle navy wash is acceptable on dark slides.
- Captions should be quiet and directly adjacent to the image.
- Do not default to generic robot, circuit-brain, or neural-network stock art.

## Header, footer, and branding

- Preserve the official ATO card as slide 1 with no overlays.
- On ordinary slides, keep the All Things AI mark small with generous clear space.
- Retain the workshop stage rail and slide number, but use the new 54-slide total. The stage rail is one thin line with small nodes and direct labels; the active phase is the only orange mark.
- Every teaching slide uses one metadata rail at the same position and on the same baseline.
- Eyebrow grammar: `// MODE OR BLOCK · SHORT SECTION`. Keep the section short enough to remain on one line.
- Eyebrow type: Montserrat Bold, 14 px, uppercase, at `left 68 / top 52 / width 850 / height 24` on the 1280 × 720 canvas.
- Time type: Montserrat Regular, 12 px, right aligned, at `left 940 / top 52 / width 130 / height 24`.
- Time ranges use an en dash without surrounding spaces: `1:00–1:25`.
- Blue is the default metadata color. Orange is reserved for a real room-mode change: break, lunch, or live build. Red and green never appear in the metadata rail.
- Use exactly two leading slashes followed by one space. Do not alternate between a bare label, a mono eyebrow, and a `//` eyebrow.
- The title begins at `left 68 / top 91`, uses Verdana Bold at 36 px, and stays visually dominant.
- Do not recreate, recolor, or stretch the logo spark.

## Dark slides

- Use `midnight` or `deep-space` with white text.
- Use `light-blue` for technical emphasis and orange for a human decision or CTA.
- Code/prompt panels may be slightly lighter than the slide background with a fine orange border.
- Use the strongest full-image treatment only for the opening and closing beats.

## Content-density rules

- One primary message per slide.
- Prefer 5–7 nodes maximum in a single rail.
- Use no more than two short lines inside a diagram node.
- Move detail into speaker notes or a short caption under the diagram.
- If a diagram needs a legend longer than one line, the semantics are not yet simple enough.

## Teaching a new platform

- Explain a platform before asking someone to click it: what it is, what it does here, what to click, and what success looks like.
- Keep the real product term on first use, then translate it in the same sentence. Example: “Environment Variable — a private setting for the live site.”
- Teach the toolchain as four distinct jobs: Git records changes, GitHub stores and reviews them, Vercel publishes them, and the visitor opens the live URL.
- Use the workshop rhythm `explain → model → participant repeats → visible proof` for every new workflow.
- Start every exercise with one visible `WHAT YOU'LL LEARN` sentence before listing the steps.
- Close every exercise with two distinct lines: a concrete checkpoint and a brief review question.
- Keep the review open on the canvas: one small `REVIEW` label and one sentence, with no panel or box.
- Pair every hands-on instruction with one observable checkpoint: a GitHub project exists, Vercel says Ready, the preview opens, or saved information survives refresh.
- Put exact prompts and facilitator contingencies in speaker notes. Keep room-facing copy focused on decisions, clicks, and proof.

## Do / do not

### Do

- Use rounded nodes, fine rules, and generous gaps.
- Keep repeated diagram geometry identical when teaching a state change.
- Let one blue phrase or one orange node carry emphasis.
- Use circular nodes and curved return paths where the process is genuinely cyclical.
- Preserve editable native shapes and connectors in PowerPoint.

### Do not

- Reproduce website navigation, search, newsletter, or testimonial UI.
- Use heavy arrows, thick outlines, stacked shadows, or dashboard chrome.
- Decorate every slide with constellations or ribbons.
- Shrink explanatory text to fit a crowded diagram.
- Invent new semantics for the established blue/orange/green/red system.

## Priority redesigns in this deck

1. Slide 13: paired failure → control mapping.
2. Slide 14: six-stage lifecycle rail with a return arc.
3. Slide 18: branch → preview → live rail with rollback loop.
4. Slides 25–26: identical gate geometry shown in pass and fail states.
5. Slide 29: rollback-protection loop followed by permanent repair.
6. Slide 33: two-lane database/account and code-change flow.
7. Slide 37: key route to the inbox with blocked leak paths.
8. Slide 43: professional-handoff threshold and package.
9. Slide 45: persistent instructions versus reusable skill decision.
10. Slide 50: Monday action sequence as a stepped path.

## Source provenance

- All Things AI website, inspected October 16, 2026: `https://allthingsai.org/`
- All Things AI 2027 Sponsorship Prospectus, stakeholder edition dated October 2, 2026; the supplied reference PDF is not included in this repository.
- All Things Open 2026 workshop card: `https://2026.allthingsopen.org/wp-content/uploads/2026/09/2026_ATO_ExtendedWorkshop_AIAgentsVibeCoding.jpg`
