# Presentation materials

The existing six-hour class from `mrhinkle/Presentations` is preserved in [reference-six-hour-class](reference-six-hour-class/), copied from commit `03a1e051e62f11134a723e498dda955e2ed2f394` on October 5, 2026. The source folder was last updated September 21, 2026.

- [PowerPoint: 51-slide existing class](reference-six-hour-class/vibe-coding-class-ata.pptx)
- [PDF: existing class](reference-six-hour-class/vibe-coding-class-ata.pdf)
- [Presentation generation source](reference-six-hour-class/build.js)
- [Original class handout](reference-six-hour-class/handout-class.md)
- [Original three-hour workshop handout](reference-six-hour-class/handout-workshop-3hr.md)
- [Original graphics and photographs](reference-six-hour-class/assets/)

These files are unmodified reference copies. The current course is defined by the root [instructor guide](../instructor-guide.md), [setup guide](../setup-guide.md), and [student workbook](../handouts/student-workbook.md). The reference handouts contain earlier requirements and dated pricing; they are not the current prerequisites.

## All Things Open 2026 workshop edition

The final 63-slide [AI Agents & Vibe Coding workshop](ato-2026-ai-agents-vibe-coding/) is the current presentation for the October 19, 2026 All Things Open extended workshop.

- [Final PowerPoint](ato-2026-ai-agents-vibe-coding/ai-agents-vibe-coding-ato-2026-model-review-v45.pptx)
- [Claude handoff prompt](ato-2026-ai-agents-vibe-coding/CLAUDE-OPEN-PRESENTATION.md)
- [All 63 rendered slides](ato-2026-ai-agents-vibe-coding/rendered-slides/), their [SHA-linked render manifest](ato-2026-ai-agents-vibe-coding/rendered-slides/RENDER-MANIFEST.md), and the [montage preview](ato-2026-ai-agents-vibe-coding/workshop-overview.webp)
- [Presentation design system](ato-2026-ai-agents-vibe-coding/design.md), [reference builder source](ato-2026-ai-agents-vibe-coding/restructure-two-projects.mjs), and [editable diagram components](ato-2026-ai-agents-vibe-coding/design-system.mjs)
- [Validation receipt](ato-2026-ai-agents-vibe-coding/presentation-validation.json) and [Kimi K3 final review](ato-2026-ai-agents-vibe-coding/kimi-k3-final-review.md)

The final deck passed package integrity, first-party PowerPoint import, font-policy checks, layout geometry, full render inspection, and independent Kimi K3 review through OpenRouter. The receipt records that native font rendering was not independently verified. Its SHA-256 is `58d4fdb1942ec4b8397d7079b7b5fb1e4e4e147a3153e5f3cf28e79f1d4f31ab`. The older reference deck remains unchanged.

## What the existing deck covers

The existing deck, titled *Vibe Coding, Take Two: The Six-Hour Class*, uses an All Things AI design and teaches a single business tool. It includes a simplified development lifecycle, requirements, GitHub, previews, testing, deployment, recovery, skills, and ownership. It also introduces database and email services and organizes live building into three 20-minute sprints.

Its six-hour window includes lunch and breaks. The new class has **360 teaching minutes plus breaks**, starts with 30 minutes of SDLC, and builds two separate projects. The deck has no game module yet.

## Adaptation plan

| New course block | Reuse from reference | Changes needed |
| --- | --- | --- |
| First 30 minutes: SDLC | Lifecycle, quality, and ownership explanations | Move into the opening; illustrate each stage with a website and game |
| Accounts and tools | GitHub vocabulary and saved versions | Match current setup guide; favorite chatbot and portable file route |
| Project 1: website | Define, build, check, publish examples | Replace business application brief with one-page static website |
| Arcade tour and game brief | Visual style and instructional pacing | Add Arcade examples and three beginner recipes |
| Game rules and first playable | Small increments and observable checks | Add state, controls, scoring, result, and restart |
| Appearance and feedback | Review and quality discussion | Add mobile readability, fair feedback, optional sound, and replay |
| Playtest | Expected versus observed results | Add cold partner playtest, tuning one setting, and repeated restart |
| Game publication | GitHub/Vercel release explanations | Demonstrate a second independent repository and Vercel project |
| Handoff | Ownership, saved versions, and next steps | Use the two-project workbook and short paired demos |

Move database, email-service, and advanced CI content to optional follow-on material. Recheck any product interface or plan reference against official documentation when revising the slides.

## Remaining presentation work

- [x] Rewrite slide content and speaker notes for the current teaching schedule.
- [x] Add GitHub and Vercel screenshots from the current setup routes.
- [x] Add website and game milestones, skill prompts, and timeboxes.
- [x] Render and visually inspect the revised PowerPoint.
- [ ] Run a timed rehearsal using the student workbook.

The imported reference generator is retained as historical source. The checked-in v45 PowerPoint is the exact reviewed delivery artifact. `restructure-two-projects.mjs` is the reference editing source used to create it, but it retains local runtime and input-deck paths and is not a portable one-command rebuild without adapting those paths.
