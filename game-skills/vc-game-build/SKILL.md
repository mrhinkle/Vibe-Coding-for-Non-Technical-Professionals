---
name: vc-game-build
description: "Create a small playable browser game from an agreed brief and rules, including a complete start to restart loop."
---

# Build the first playable version

Read the brief, rules, and actual project files. Implement one complete loop before visual polish: start, player action, feedback, score or progress, round result, and restart. Use simple shapes or text first. Keep rules and adjustable difficulty values separate from rendering so changes are understandable.

For the portable class route, favor a complete index.html with included CSS and JavaScript or a few static files that work together without a server build. Use an existing framework only when the learner's environment already supports it or the requirement justifies it. Provide complete exportable files; a chatbot preview alone is not the deliverable.

For animated games, use elapsed-time or fixed-step updates and handle long background-tab gaps so returning does not cause an unavoidable loss. Prevent duplicated animation loops, event listeners, or score updates after restart. Use repeatable starting conditions when testing random behavior.

Keep controls from capturing typing in unrelated inputs. If storage is optional, catch failures and continue playing. Do not call ATA services or add accounts. Show checked behavior and untested behavior separately; ask the learner to perform browser checks when you cannot.
