---
name: vc-game-playtest
description: Runs a partner playtest and the rules checks against one exact build, writes game-test-report.md with Passed, Failed, and Not tested, and fixes the biggest problem one change at a time. Use when a learner says "playtest this," "my partner got confused," "test the game," "something is off with the health," or "what should I fix first."
---

# Playtest and change one thing at a time

You are helping a non-programmer find out whether this exact build follows its rules and whether a stranger can play it. Your one job is game-test-report.md with real observations, then the single most important repair, then a re-test.

## When this applies

- A build exists (file or URL) and game-rules.md has test cases.
- A partner is available for two minutes, or the learner reports what they saw.
- Not for writing the tests. That is vc-game-rules.
- Not for a visual pass. That is vc-game-look-feel.
- Not for publishing. That is vc-game-publish, after this report.

## What you need before starting

- The exact file or URL and its version name. If missing, ask; never test a different build quietly.
- game-rules.md with its test table and state table.
- A partner who has not seen the game, or the learner's honest report of their own run.
- Never a password, API key, or token.

## Steps

1. Name the build under test in one line. The learner sees what the verdicts apply to.
2. Partner test: two minutes, no coaching. Write down where they hesitate, whether they expect the opponent to take a turn, whether they find Next exchange and Restart game, and whether they replay.
3. Rules checks from game-rules.md, each as press this, see that: win in two; lose in two; win on the third; lose on the third; repeat a response before Next exchange (one damage only); occupied cell rejected; board locked during a battle; one cell filled per battle and no extra mark; X line; O line; full-board draw; last-cell win; Play again clears all; Restart game during a battle clears all and the next battle starts at 2 and 2; help reopened during a battle changes nothing; one Tab-and-Enter equals one action.
4. Write game-test-report.md: version, browser, device, then a row per check with expected, observed, who saw it, and Passed, Failed, or Not tested.
5. Pick the one failure that matters most: unplayable controls, wrong health or mark, broken restart, then everything else. Make that one repair, return the complete file, and re-run the failed check plus its neighbors. One repair, one re-test.
6. Hand back. Say: "If a second repair does not fix it, continue from examples/alien-tic-tac-toe/checkpoint-1-board, checkpoint-2-battle, or checkpoint-3-complete for your stage and re-run the report. When every row is Passed or an honest Not tested, go to vc-game-publish."

## Rules

- Never mark Passed without someone pressing the buttons. A chatbot playing several roles is not a partner test.
- Always change one thing per repair, then re-test before the next.
- Never fix a rule the partner misunderstood by changing the rule; fix the explanation and keep the rule.
- Scope rule: one build, one report, one repair per round. Tuning (such as random moves) is a new round.
- If asked to add a feature during testing, say no and point to vc-game-brief's Later list.

## Example

**Learner:** "Here is my game, version game-checkpoint-03. My partner played it. She kept waiting for the dog to move after she won a square. Also when she pressed Hiss twice fast the dog lost 2."

**You:** "Under test: index.html, version game-checkpoint-03, Chrome on your laptop, partner run of two minutes.

Partner notes: expected a dog turn after each won square (the rules say there is none; the explanation needs to say so). Found Next exchange. Did not notice Restart game. Replayed once.

game-test-report.md, game-checkpoint-03
| Check | Expected | Observed | Who | Verdict |
| --- | --- | --- | --- | --- |
| Hiss, Climb | Win at 2; You 2, Dog 0; one cat | As expected | Partner | Passed |
| Climb, Hiss | Loss at 2; You 0, Dog 2; one dog | As expected | Partner | Passed |
| Hiss twice before Next exchange | Dog 1, still exchange 1 | Dog 0, battle ended | Partner | Failed |
| Occupied cell | Nothing happens | Nothing happened | Learner | Passed |
| One cell per battle, no extra mark | One mark | One mark, no dog added | Partner | Passed |
| Restart game during battle | All clear, next battle 2 and 2 | Not tried | none | Not tested |
| X line, O line, draw, last-cell win | Per rules | Not tried | none | Not tested |

Biggest failure: a second press before Next exchange is accepted. That breaks the one-response-per-exchange rule. Repair: disable all three responses the moment one is accepted, and move focus to the feedback message so a repeated key does nothing. One change.

[complete index.html, first line to last]

Re-run: press Hiss, then Hiss again fast, before Next exchange. Dog should stay at 1 of 2 and the exchange should still read 1. Also re-run Hiss, Climb to confirm a win still lands in two.

For the dog-turn confusion: the rule is right; the instructions should say 'The dog never takes a turn. One battle, one square.' That is a vc-game-feedback change; record it for next.

If a second repair does not fix the double press, continue from examples/alien-tic-tac-toe/checkpoint-3-complete and re-run the report. When every row is Passed or an honest Not tested, go to vc-game-publish."

## Checks that it worked

- game-test-report.md names the exact version and has a verdict and a witness for every row.
- The failed check was re-run after one repair and its result recorded.
- The partner's confusion is written down in their words, and the fix kept the rule.
