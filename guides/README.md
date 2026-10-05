# Illustrated participant guide

An 18-page field guide for the two-project class, using the existing All Things AI logo, blue and orange accents, clean white pages, and Arial typography from the reference presentation.

- [PDF](participant-guide.pdf): designed for reading, printing, or sharing with authorized participants.
- [Markdown](participant-guide.md): read directly in GitHub or give to a chatbot.
- [HTML](participant-guide.html): download the repository and open this file in a browser for a responsive edition with chapter navigation. GitHub shows its source rather than hosting it as a live page.

Diagrams explain the development lifecycle, tool roles, separate project folders, a website wireframe, game states, release flow, troubleshooting, evidence, and agent collaboration. They are conceptual illustrations, not screenshots of provider interfaces. Text descriptions accompany the diagrams in the HTML/Markdown editions.

## Brand and provenance

The authoritative class reference is `presentations/reference-six-hour-class/build.js`, imported from Mark's private Presentations repository. This guide uses its primary blue `#307FE2`, orange `#EF8B39`, ink `#0D1219`, navy `#121B2B`, pale background `#F3F6FB`, line `#D9E0EA`, and muted text `#5B6675`. Small orange type is limited to dark prompt panels; main text uses dark ink. The HTML edition uses a darker blue for small text links.

The original logo and course artwork are copied byte-for-byte into `assets/`; they were not redrawn or regenerated. New diagrams use these colors and label every important distinction in text, including test status. Reuse follows the repository's [source license notes](../licenses/README.md).

## Rebuild

The content and layout source is [tools/build_guide.py](../tools/build_guide.py). Install the dependencies in [tools/requirements.txt](../tools/requirements.txt) in your own Python environment, then run `python3 tools/build_guide.py` from the repository root. The builder uses no network or AI service. It writes the PDF, HTML, Markdown, SVG diagrams, and a content JSON snapshot in this directory. Arial is used when present on macOS; other systems fall back to Helvetica for the PDF. Review typography if rebuilding on another system.

After changing content, rebuild, render every PDF page, visually inspect the result, and verify the HTML at desktop and phone widths. Do not edit generated editions independently. Rebuild the AI course pack with `python3 tools/build_course_pack.py` after updating its input documents.

The guide supports the course; it does not certify student applications, account connections, or classroom timing. See the [instructor preflight](../instructor/preflight.md).
