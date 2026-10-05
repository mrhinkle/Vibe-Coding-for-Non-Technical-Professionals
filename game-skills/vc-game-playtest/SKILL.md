---
name: vc-game-playtest
description: "Playtest and tune a small game against its rules using observed results and another person's first attempt."
---

# Playtest and change one thing at a time

Read the brief, rules, and exact build or URL. Ask another person to play for two minutes without coaching. Record where they hesitate, whether controls respond, why they think they lost or won, and whether they choose to replay. A chatbot adopting several roles is not an independent human playtest.

Use five perspectives as questions: player understanding, fair rules, accuracy of any teaching, visual readability, and implementation correctness. Check instructions before play, valid and invalid inputs, score boundaries, each outcome, repeated restart, keyboard and touch, resize, and help during play. For animated games check returning from a background tab. For saved scores check refresh and unavailable storage. Apply relevant checks rather than imposing action-game tests on a turn-based puzzle.

Write game-test-report.md with expected versus observed outcomes and Passed, Failed, or Not tested. Prioritize unplayable controls, incorrect scoring, unfair outcomes, and broken restart. Fix the largest problem, then retest it and adjacent behavior.

Tune one setting at a time, such as speed, gap size, attempts, or opponent reaction. Compare equivalent starting conditions. Do not claim tests, browser observations, or player feedback that did not occur.

For Alien Tic-Tac-Toe, check X win, O win, draw, occupied-square rejection, board lock during fights, rapid repeated answers, a single square assignment per fight, and restart during and after battle. Verify health and pending square reset. Do not report these as passed without playing the actual build.

If a referenced course file is unavailable, request its text or the relevant course-pack section. Do not invent missing rules or submission instructions.
