# AI Agents & Vibe Coding — All Things Open 2026

This folder contains the final workshop presentation, its visual source material, all rendered slides, and the evidence used to approve the delivery candidate.

## Open this presentation

- **Final PowerPoint:** [`ai-agents-vibe-coding-ato-2026-model-review-v45.pptx`](ai-agents-vibe-coding-ato-2026-model-review-v45.pptx)
- **Slides:** 63
- **SHA-256:** `58d4fdb1942ec4b8397d7079b7b5fb1e4e4e147a3153e5f3cf28e79f1d4f31ab`
- **Rendered slide fallback:** [`rendered-slides/`](rendered-slides/) with [SHA-linked manifest](rendered-slides/RENDER-MANIFEST.md)
- **One-page visual overview:** [`workshop-overview.webp`](workshop-overview.webp)

This is Mark Hinkle's six-hour workshop for non-programmers. Participants learn one six-step software-development process, then use it twice: first to create and publish a website, then to create and publish a browser game. The deck introduces coding agents, harnesses, model-to-model review, MCP, Composio, GitHub, Vercel, repository memory, and the two hands-on exercises.

The white editorial design uses generous space, thin rules, restrained blue and orange accents, web-safe fonts, and process diagrams derived from the All Things AI visual system and the AI-native SDLC material.

## Files

- `CLAUDE-OPEN-PRESENTATION.md` — copy/paste prompt for Claude Code or Claude Desktop.
- `restructure-two-projects.mjs` — exact reference builder and editing source used for v45; local runtime and input paths must be adapted before rebuilding elsewhere.
- `design.md` — presentation design contract.
- `design-system.mjs` and `tufte-system.mjs` — native PowerPoint layout helpers.
- `assets/` — event card, logos, screenshots, book cover, and workshop illustrations.
- `rendered-slides/` — PNG render of every final slide for visual inspection without PowerPoint; the manifest records the source deck SHA and each image hash.
- `presentation-validation.json` — exact v45 validation receipt. Font-policy checks passed; the receipt notes that native font rendering was not independently verified.
- `kimi-k3-final-review.md` — independent OpenRouter review record.

The older `edit-deck.mjs` is retained as part of the design history. Use `restructure-two-projects.mjs` to understand the final slide structure and where future edits belong, not as a portable build command without first adapting its local paths.

## Review boundary

Open and inspect the final PowerPoint or rendered slides before changing anything. Do not infer visual quality from extracted text alone. If a correction is requested, edit the builder/source, create a new versioned PowerPoint, render all slides, and review the exact new revision rather than overwriting v45.
