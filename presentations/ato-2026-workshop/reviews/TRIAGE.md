# Triage of outside reviews · ATO 2026 workshop deck · 2026-10-15

Sources: `glm-5.3.md` (z-ai/glm-5.3, 15 findings) and `kimi-k3.md` (moonshotai/kimi-k3, FAILED twice with client timeouts, 0 findings). Because only one model returned, there is no cross-model overlap to mark; the "Raised by" column is GLM for every row. Nothing below has been applied to the deck.

Rule of the deck that constrains several fixes: prompts inside the dark cards are verbatim from the course docs and must not be reworded in the deck. Where a finding asks to change a dark-card prompt, the fix belongs in the course doc first, then flows into the deck.

## Findings by slide

| # | Slide | Criterion | Finding | Proposed fix | Raised by | Both? |
|---|---|---|---|---|---|---|
| 1 | 1, 84 | accuracy | Slide 1 says "RALEIGH CONVENTION CENTER"; slide 84 says "in this same building: the Atlantic Union Bank Convention Center." One of them is wrong, and the contradiction lands at 5:28. | Confirm the building's current name and use it on both slides. If the venue was renamed, slide 1 is the one to update. | GLM | no |
| 2 | 2, 6, 16, 35, 49 vs 5 | flow | The deck says "LIVE WEBSITE URL by 11:30" on slides 2, 6, 16, 49 but slide 35 says "By 11:45 every word on it is yours," and slide 5's cut list treats 11:45 as the gate. | Slide 35: change "By 11:45 every word on it is yours." to "By 11:30 every word on it is yours, and it's live." Slide 5 notes: call 11:45 "the hard stop," not the gate. | GLM | no |
| 3 | 4 | voice | "GitHub as your system of record" and "The pull request is your checkpoint" are corporate register on the promise slide, spoken at 9:04 before any term is defined. Slide 25 notes repeat "system of record." | Right-hand description: "Every change is saved, and you can go back to any of them. Nothing is lost." If the left label quotes the ATO listing, keep it and let the description do the plain-words work. Slide 25 notes: "GitHub keeps every version of every file, in your name." | GLM | no |
| 4 | 4 | voice | "You write the spec, not the syntax." flagged as jargon before "spec" is explained. | GLM proposed "You say what it should do; the chatbot writes the code. A person approves every change." | GLM | no |
| 5 | 23 | density | Eight-tool map with multi-line captions is read aloud for five minutes; notes do not say "point, don't read." | Add "Reference slide, point at it, don't read it" to the slide 23 notes. Optionally shorten captions to six words or fewer. | GLM | no |
| 6 | 26 | clarity | Notes say "private doesn't make the website private, Vercel decides that," which is vague about what actually happens. | Notes: "A private repository doesn't make the website private. Once Vercel publishes it, the URL is public either way." | GLM | no |
| 7 | 30 | accuracy / risk | The printed command `pbpaste \| vercel env add RESEND_API_KEY production` is macOS-only (`pbpaste`) and needs the Vercel CLI installed, which contradicts slide 25's "Nothing is installed on your laptop." Most of the room cannot run it. | Slide headline: replace "THE CLIPBOARD MOVE: COPY THE KEY, THEN ONE COMMAND MOVES IT." with the browser route that is already in the YES column: "THE BROWSER MOVE: copy the key from your password manager, paste it in Vercel → your project → Settings → Environment Variables. The agent never sees it." Keep the pbpaste line as a labeled "Mac + Vercel CLI" variant or drop it. The dark-card prompt is verbatim from docs/secrets-tokens-and-the-clipboard.md; change the doc first if the prompt should change. | GLM | no |
| 8 | 30 (notes) | flow | Notes promise "Composio, authorize-don't-paste for Slack and Gmail, is the sprint 3 bonus" but slide 78's extension list never mentions Composio, Slack, or Gmail. | Delete that sentence from the slide 30 notes (or add a Composio row to slide 78; deleting is cleaner given the no-secrets rule and a 30-minute sprint). | GLM | no |
| 9 | 31 | risk | "it's included with the free Vercel plan" glosses v0's free-tier generation limits; a heavy morning can exhaust them mid-build and nothing tells helpers what to do. | Add to slide 31 notes: "If v0 stops generating on the free plan, that pair switches to the portable route for this project. Helpers know the pattern." | GLM | no |
| 10 | 34 | accuracy | Model tier examples name specific current products that may be stale by Oct 19. | GLM asked for the names to be verified against live data before printing; the slide's own hedge "Names drift; the sizes don't" stays. | GLM | no |
| 11 | 36 | accuracy | "LinkedIn emails a link in about ten minutes" is too specific to survive variation. | GLM proposed "LinkedIn emails a link; it's usually fast but can be slower. Start it now and keep going on Route A." | GLM | no |
| 12 | 48 | accuracy | "v0 route: click Deploy, then connect the project to GitHub" hard-codes an order v0 has changed before, and slide 31 already had students grant v0 access to my-first-site at setup. | Slide 48 line: "v0 route: click Deploy. When v0 offers to connect the project to GitHub (before or after Deploy), accept and pick my-first-site. Every version is pushed there. Skip the steps below." | GLM | no |
| 13 | 49, 77 | clarity | "Build Command: override on, leave empty. Output: repository root." is telegraphic for a first-timer. | GLM proposed a full sentence: "Under Build Command, turn on the override and leave it empty. Output: repository root." | GLM | no |
| 14 | 50 | clarity | "Not 'Refactor site.'" uses jargon the deck never explains. | Replace with "Not 'Update index.html.'" which calls back to the commit-message lesson on slide 28. | GLM | no |
| 15 | 54 | clarity | "The front matter" is typesetting jargon. | Slide: "The top of the file: a name, and a description that says when to use it. Put the trigger phrases in." Notes: say "the top of the file" once, then "front matter" in parentheses if Mark wants the term to stick. | GLM | no |
| 16 | 56 | density | Six install variants in a table during a three-minute live demo; notes do not say "point, don't read." | Add "Reference table; point at the row that matches their chatbot, don't read it" to the slide 56 notes. Keep all six rows: students use different chatbots and take the deck home. | GLM | no |

(GLM's finding 1 covers rows 7; its finding 10 is row 8; the slide 4 finding is split into rows 3 and 4 because the recommendation differs.)

## Recommended to apply

Ordered by how much they help the room. Each is specific, factually safe, and consistent with Mark's voice rules (plain words, contractions, no corporate register, "open source" never hyphenated).

1. **Row 7 · Slide 30 · browser route for the secret.** The pbpaste/CLI line cannot be run by Windows users or anyone without the Vercel CLI, and it contradicts "nothing installed." Lead with the Vercel dashboard paste (already in the YES column), label the pbpaste line as a Mac + CLI variant. Dark-card prompt stays verbatim; route any prompt rewrite through docs/secrets-tokens-and-the-clipboard.md.
2. **Row 1 · Slides 1 and 84 · venue name.** Make both slides say the same thing. Mark confirms which name is current; the fix is consistency, not a guess.
3. **Row 12 · Slide 48 · v0 connect order.** Don't hard-code "Deploy, then connect." Slide 31 already connected v0 to my-first-site at setup, so the current line is also redundant with setup.
4. **Row 8 · Slide 30 notes · Composio promise.** Cut the sentence. Nothing on slide 78 delivers it.
5. **Row 2 · Slide 35 · 11:30 vs 11:45.** One word on slide 35 and one phrase in slide 5 notes; students who do math all day will notice the mismatch.
6. **Row 14 · Slide 50 · "Refactor site" → "Update index.html."** Plainer, and it reuses the slide 28 lesson.
7. **Row 15 · Slide 54 · "front matter" → "the top of the file."** Plain words rule.
8. **Row 9 · Slide 31 notes · v0 free-tier fallback.** One sentence for helpers; prevents a stuck pair at 10:40.
9. **Row 6 · Slide 26 notes · repo privacy vs site privacy.** One clearer sentence; use the wording in the table, not GLM's "Privacy of the page is controlled on Vercel" (Hobby plan has no password protection, so that would mislead).
10. **Row 3 · Slide 4 right-hand description and slide 25 notes · "system of record."** Change the description text to plain words. Keep the left-hand label if it quotes the ATO listing (slide 9 says the small words are "what the listing calls it").
11. **Rows 5 and 16 · Slides 23 and 56 · notes line only.** Add "Reference slide, point at it, don't read it" to both notes. No cuts to the tables.

## Recommended to skip

- **Row 4 · Slide 4 "You write the spec, not the syntax."** It is Mark's own line, repeated on slide 9, and "spec" is defined by the next clause on slide 4 notes ("You write the specification, not the syntax"). GLM's replacement is flatter and loses the hook.
- **Row 10 · Slide 34 model names.** The slide already uses "-class" tiers and the hedge "Names drift; the sizes don't." GLM's fix is a reviewer-process instruction (call MCP tools), not a deck edit. Worth a two-minute check the week of, not a change now.
- **Row 11 · Slide 36 LinkedIn timing.** LinkedIn's own export flow says the smaller file arrives in about ten minutes, and the slide already says "about." GLM's rewrite adds words without adding accuracy.
- **Row 13 · Slides 49 and 77 build settings.** The notes already read the same steps as full sentences; the slide is a checklist students follow with the notes read aloud. Marginal gain, and it lengthens a bullet past the 12-word rule.
- **Row 5 and 16, the caption-trimming half.** Dropping "which way it syncs is unverified" from slide 23 removes an honest hedge that matches Mark's verification-language rule. Cutting slide 56 to two rows removes the take-home value for students on other chatbots. The notes line fixes the density complaint without those losses.

## Counts

- GLM-5.3: 15 findings (split into 16 rows here).
- Kimi-K3: 0 findings; both calls timed out before any response (see kimi-k3.md).
- Overlap: none measurable with one model.
- Recommended to apply: 11 rows. Recommended to skip: 5 rows (plus the trimming half of two apply rows).
