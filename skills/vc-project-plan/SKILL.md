---
name: vc-project-plan
description: "Turn an agreed small website scope into a visitor journey, page outline, and three checked build increments without adding features."
---

# Plan how to build and check the agreed version

Planning decides **how** to deliver the scope, which already states **what** belongs in this version. Read the available brief, scope, and chosen starter or current files. If a referenced input cannot be accessed, ask for the relevant contents. Do not require a separate scope file when the same decisions are already clear in the conversation. Ask only about missing goals, required behavior, or dependencies that affect the plan.

Write a compact `project-plan.md`, or return its complete contents in chat. Include the visitor's first impression and task, three main sections in order, concise style guidance, required content, starter choice or own design, and these three build increments:

1. **Content and structure:** show the heading, sections, and accurate or visibly fictional content. State what the learner will read and check.
2. **Main action and navigation:** implement the exact agreed link/button behavior and navigation. State the action and expected result, including keyboard use.
3. **Usability and finish:** improve phone layout and readability, then repeat the main checks. Preserve the working content and behavior.

Adapt the increments to existing working files; do not rebuild completed parts. Give each increment an observable completion test and name the files expected to change. Keep must-have items within the plan and leave postponed or excluded features out.

For the core class, prefer one portable `index.html` with styles included or a few static files when the chosen starter requires them. Preserve needed relative paths. Use the learner's own project folder, leaving the course starter unchanged. Do not add a framework, backend, or service without a concrete agreed requirement. A demonstration interaction must remain labeled as such rather than being planned as a working business service.

List missing facts, assets, and decisions briefly. Favor supplied images or simple typography when asset creation would consume the build time. Brief, scope, and planning together use about 10–15 minutes of the existing 90-minute website block; keep the records short enough for that purpose.

Show the completed plan and its first check. Resolve only material unknowns before implementation; do not repeat approvals already given. This skill ends with the plan and does not commit, push, or deploy.
