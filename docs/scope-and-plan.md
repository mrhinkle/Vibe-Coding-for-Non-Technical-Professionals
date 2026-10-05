# Decide what to build, then how to build it

Spend **10–15 minutes** on this exercise at the start of the website project. It fits inside the existing 90-minute website block; it is not an extra lesson added to the day. Your result is a small brief, a clear scope, and three build steps. Short notes are enough.

> **For an AI receiving only this lesson:** State which materials you received. Ask whether the learner is starting or continuing. Read their current files and project state before changing existing work. Ask for a named skill or starter if its contents are unavailable. Reuse answers already given and ask only for decisions that affect the result.

Three questions keep the work clear:

| Record | Question | Restaurant example |
| --- | --- | --- |
| Brief | Who is this for, and why? | A curious visitor wants to understand my fictional dream restaurant. |
| Scope | **What** belongs in this small first version? | One page, three sections, and a working View sample menu button. |
| Plan | **How** will we build and check it? | Add the content, connect the action, then improve phone layout and retest. |

## 1. Choose a starting point and purpose — about 3 minutes

Choose a starter **or your own idea/design**. You are building one website, not completing every template. A starter can save layout work, but you still decide its purpose and behavior.

| Starting point | File to inspect or copy |
| --- | --- |
| Vanilla | [website-starters/vanilla/index.html](../website-starters/vanilla/index.html) |
| ATA Orbit | [website-starters/ata-orbit/index.html](../website-starters/ata-orbit/index.html) |
| ATA Groove | [website-starters/ata-groove/index.html](../website-starters/ata-groove/index.html) |
| Dream restaurant | [website-starters/dream-restaurant/index.html](../website-starters/dream-restaurant/index.html) |
| Dream product | [website-starters/dream-product/index.html](../website-starters/dream-product/index.html) |
| Dream business | [website-starters/dream-business/index.html](../website-starters/dream-business/index.html) |
| Pet | [website-starters/pet/index.html](../website-starters/pet/index.html) |
| My own | Begin with your brief and request complete runnable files. |

Open the actual starter in your browser before deciding what to keep. Copy the chosen files into your own `my-first-site` folder, preserving any supporting file paths; keep the course copy unchanged. A starter's example button or form is not evidence of a real business service. Inspect what it does.

Use [vc-project-brief](../skills/vc-project-brief/SKILL.md) with this prompt:

> My first website is for [visitor]. They should be able to [outcome]. I want to start from [starter name / my own design]. Use what I have already told you and ask only for missing decisions. Write a short project-brief.md. Separate supplied facts from fictional practice content. Do not build yet.

For the worked example, invent **Moonlight Noodle Club**, a clearly fictional dream restaurant. The visitor should understand the dining idea and browse a sample menu. No real booking or ordering is promised.

## 2. Select the scope — about 5 minutes

Use [vc-project-scope](../skills/vc-project-scope/SKILL.md) and the [scope template](../templates/website-scope.md). Decide what earns a place in the first version.

| Category | Moonlight Noodle Club example |
| --- | --- |
| Must-have now | One page; concept, sample menu, and sample visit details; visible fiction label; a View sample menu button that scrolls to the menu. |
| Later | Another page about the imagined chef, more menu choices, or additional visual polish. |
| Out of scope for this project | Real reservations, orders, payments, customer accounts, and collected visitor information. |

The three main sections are **Concept**, **Sample menu**, and **Sample visit details**. Add a heading, navigation, and footer if useful; they do not need their own extra pages. Keep invented locations and hours visibly labeled as sample information.

> Use my brief to scope one page with three main sections and one primary action. Separate must-have, later, and out-of-scope ideas. For Moonlight Noodle Club, View sample menu must scroll to that section; the page must not claim to book a table. Write five checks a person can actually perform. Return a compact project-scope.md. Keep decisions we already made.

For this example, the five checks are:

1. A partner can explain the restaurant concept and identify the site as fictional practice.
2. All displayed menu and visit information matches the brief and is labeled as sample content where needed.
3. View sample menu reaches the menu section; it does not pretend to place an order or reservation.
4. Navigation reaches the named sections, and the main action can be reached and activated using the keyboard.
5. The page remains readable in a narrow browser window, with the primary action visible and usable. Record a real-phone check separately if performed.

If you want a real business action, name exactly what it needs to do. A supplied link to an existing booking service differs from building a new reservation system. Resolve that scope choice before code is generated; postpone it if it would consume the workshop. Do not invent a working service behind a decorative button.

## 3. Make a three-step plan — about 4 minutes

Use [vc-project-plan](../skills/vc-project-plan/SKILL.md) and the [plan template](../templates/website-plan.md). Carry the scope forward instead of interviewing yourself again.

| Increment | Build | Check before continuing |
| --- | --- | --- |
| 1. Content and structure | Heading, the three sections, and fiction label | Open the file and compare its content with the brief. |
| 2. Action and navigation | The menu button and links to the sections | Activate each link; confirm the right section appears and try keyboard access. |
| 3. Usability and finish | Readable spacing and phone layout | Narrow the window, then repeat the content and button checks. |

> Plan HOW to deliver this agreed scope in three small increments. Use my chosen starter if I supplied it; otherwise plan one complete index.html. For each increment name the result, expected files to change, and a visible check. Preserve any already-working parts. Keep later and out-of-scope features out. Return project-plan.md and the first build instruction.

Save the short records with your website files and identify the next step in `project-state.md`. If your assistant cannot write files, ask for the complete text to save yourself. The blank templates are optional conveniences; complete answers already in your conversation are enough to proceed.

**Ready to build:** you can name the visitor, the three sections, what the primary action really does, and the first increment's check. Continue with [vc-build-small](../skills/vc-build-small/SKILL.md) and the [website walkthrough](website-walkthrough.md). Check the actual result after each increment before expanding it.
