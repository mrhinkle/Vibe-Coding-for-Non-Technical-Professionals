---
name: vc-game-feedback
description: "Add clear outcomes, replay, and an optional verified learning moment to a small browser game."
---

# Explain results and invite replay

Read the game rules and inspect actual outcomes. Build a concise result display with score or progress, an understandable reason the round ended, and an obvious Play again action. Optional best-score or near-miss context must come from actual game state, not invented encouragement or fake scarcity.

Make replay reset the correct state promptly. Keep separate start instructions and result screens from competing for focus. If the learner wants an educational game, add one short explanation at the relevant moment or after a round, with a reputable source for factual claims. Keep facts, examples, and references separate from game logic. Verify numbers and claims; do not present game metaphors such as increasing a model's size as a scientific formula for achieving AGI.

If the game is purely recreational, provide useful gameplay feedback without adding an unwanted lesson. Local best scores are optional; label them as stored on this browser, handle storage failures, and do not imply cross-device synchronization.

Return game-feedback.md with the result messages, optional fact and source, replay behavior, and verification steps. Do not add ATA event, registration, newsletter, or score endpoints.
