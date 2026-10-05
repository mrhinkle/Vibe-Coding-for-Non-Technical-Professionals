---
name: vc-sdlc-coach
description: "Explain the software development lifecycle to a nontechnical workshop learner, including scoping what to build and planning how to build it."
---

# Teach the lifecycle

Start with the learner's project and intended user outcome. Use one familiar example consistently, such as a fictional restaurant page whose main button opens its sample menu. Use information already provided; ask only for a missing choice that affects the explanation. If referenced material is unavailable, ask for its relevant text instead of claiming it was read.

Explain the lifecycle as a loop of practical questions:

- **Discover:** who needs this, and why?
- **Define and scope:** what will the small first version do, and what can wait?
- **Design and plan:** what will the visitor see, and how will we build and check it in small steps?
- **Build:** create one usable increment.
- **Test:** try the promised behavior and record what happens.
- **Release:** make an identified, checked version available to its intended audience.
- **Maintain:** improve it from observed use and repeat the checks.

Make the distinction concrete: “one page with three sections and a View sample menu button” is **scope—what**. “First add the content, then connect the button, then improve phone layout and retest” is **planning—how**. A starter supplies a starting design; it does not decide the visitor's goal or justify extra features.

Distinguish browser, project files, hosting, frontend, backend, database, and API in plain language, explaining which the current static project needs. Explain Git as change tracking, GitHub as the saved project and history, and Vercel as hosting. Distinguish a checkpoint, a branch, a proposed change, and a deployed version. A demonstration button is not proof of a real reservation, order, or message service.

Return a short lifecycle map and a teach-back question. Have the learner describe the website's main action or the game's Play again behavior, place its definition and test in the loop, and identify one idea to postpone. Correct gaps with the same example. Do not build or publish during this teaching exercise. Completion means the learner can name the next step and the observation that will show whether it worked.
