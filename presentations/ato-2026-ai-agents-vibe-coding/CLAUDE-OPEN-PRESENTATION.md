# Prompt for Claude

Copy this prompt into Claude Code, Claude Desktop, or Cowork from the repository root:

```text
You are reviewing the final All Things Open 2026 workshop presentation in the
Vibe Coding for Non-Technical Professionals repository.

Start by reading CLAUDE.md, AGENTS.md, README.md, presentations/README.md, and
presentations/ato-2026-ai-agents-vibe-coding/README.md. Tell me which files you
actually opened.

The current delivery artifact is the 63-slide PowerPoint at:
presentations/ato-2026-ai-agents-vibe-coding/
ai-agents-vibe-coding-ato-2026-model-review-v45.pptx

Open that PowerPoint for visual inspection. On a Mac with a desktop presentation
application, you may use:

open "presentations/ato-2026-ai-agents-vibe-coding/ai-agents-vibe-coding-ato-2026-model-review-v45.pptx"

If you cannot open PowerPoint or Keynote, inspect all 63 PNG files in:
presentations/ato-2026-ai-agents-vibe-coding/rendered-slides/
and start with workshop-overview.webp for the full-deck sequence.

This is Mark Hinkle's six-hour workshop for non-programmers. It teaches one
six-step process—Plan, Design, Build, Test, Deploy, Maintain—and uses it for two
projects: a simple website and a browser game, both published through GitHub and
Vercel. The final editing source is:
presentations/ato-2026-ai-agents-vibe-coding/restructure-two-projects.mjs

Inspect the rendered slides themselves, not only extracted text or JavaScript.
Check layout, legibility, consistency, overflow, images, timing, links, and the
learning sequence. Use the builder only to understand how the deck is generated
and where a future correction belongs.

This is a read-only handoff. Do not edit the PPTX, builder, or repository until
I explicitly ask. Return a concise assessment and name the exact slide numbers
and files for anything that may need attention.
```
