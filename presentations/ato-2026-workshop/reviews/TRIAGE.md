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

## Kimi K3 findings (added after retry)

Source: `kimi-k3.md`, attempt 3 (deck split at slide 43, two parallel calls, plain `moonshotai/kimi-k3`, reasoning_effort low, max_tokens 6000). Both halves truncated at the token cap: Part 1 returned 11 complete findings (its 12th cut off), Part 2 returned 12 (its 13th cut off), so 23 findings in total and no "fix first" closers. Rows continue the numbering above. "Both?" is yes where GLM raised the same slide for the same reason; "related" where the slide overlaps but the point differs. Nothing below has been applied to the deck.

| # | Slide | Criterion | Finding | Proposed fix | Raised by | Both? |
|---|---|---|---|---|---|---|
| 17 | 30 | accuracy / risk | Same as row 7: `pbpaste \| vercel env add` is macOS-only and needs the Vercel CLI, contradicting "Nothing is installed on your laptop." Kimi also wants the dark-card prompt rewritten to drop "using pbpaste." | Row 7's fix (browser route first, pbpaste as a labeled Mac + CLI variant). The prompt rewrite is blocked by the verbatim rule; route it through docs/secrets-tokens-and-the-clipboard.md if Mark wants it. | Kimi (P1-1) | yes, row 7 |
| 18 | 38, 39 (notes) | clarity | Notes say "Open the vc-project-brief skill" and "Use vc-build-small" at 10:18 and 10:38, but the deck doesn't say what a skill is until slide 54 at 11:45. | Slide 38 notes, before "Open the vc-project-brief skill": "A skill is a text file of instructions you paste in before the prompt; we name it properly at 11:45. For now, open skills/vc-project-brief/SKILL.md from the course folder, paste it in, then the prompt on the slide." Kimi proposed a visible slide line; notes keep the slide at its current density. | Kimi (P1-2) | no |
| 19 | 39 | clarity / flow | Slide 40 is labeled "V0 ROUTE" but slide 39 has no route label, so a v0 pair may try "Save as index.html. Double-click it." on a React app. | Slide 39 kicker: "PROJECT 1 · PERSONAL WEBSITE · STEP 4 · BUILD · PORTABLE ROUTE". | Kimi (P1-3) | no |
| 20 | 2, 5, 6, 16, 35 | flow | Same as row 2: 11:30 publish promise vs 11:45 on slide 35 and slide 5 notes. Kimi's slide 35 wording: "By 11:30 it's live; by 11:45 every word is yours." | Row 2's fix. Kimi's slide 35 line is a usable alternative if Mark wants to keep 11:45 as the content deadline. | Kimi (P1-4) | yes, row 2 |
| 21 | 23, 24 | accuracy | Dated 2025 claims about Replit, Lovable, Base44, and Emergent could be stale by Oct 19; Kimi wants the CVE and remediation sentences moved to notes and the header changed to "THREE THINGS THAT HAPPENED IN 2025." | Keep the slide. Add one line to slide 24 notes: "Re-verified [date] against docs/platform-landscape.md." | Kimi (P1-5) | no |
| 22 | 20, 22 (notes) | flow | Gates are copy-pasted from the preceding slide: slide 20's gate repeats slide 19's ("what GitHub is for and what Vercel is for"), slide 22's repeats slide 21's ("place test the restart ... on the loop"). | Slide 20 notes gate: "everyone can say what a commit and a pull request are, one sentence each." Slide 22 notes gate: "the room says no, out loud, to the scoring question." | Kimi (P1-6) | no |
| 23 | 9, 11–16 | flow | Slide 9's four definition rows and slides 11–16 teach the six loop steps twice. Kimi wants the rows cut from slide 9. | None proposed; see skip list. | Kimi (P1-7) | no |
| 24 | 25, 31 (notes) | accuracy | Same risk as row 9 (v0 free-tier limits) plus a wording problem: slide 25 notes say v0 "comes with a free Vercel account" and slide 31 notes say "it's included with the free Vercel plan," which overstate the bundling. | Row 9's helper sentence, plus slide 25 notes: "v0 writes the code: you describe, it generates a working app. It's a Vercel product, so one GitHub sign-in covers both." Slide 31 notes: replace "it's included with the free Vercel plan" with "it has its own free tier." | Kimi (P1-8) | yes, row 9 |
| 25 | 4, 6, 9 | clarity | "Pull request" (slide 4), "repo" and "commits" (slide 6), and "review happens in a pull request" (slide 9 notes) are used 10–14 minutes before slide 20 defines them. | Slide 4: covered by row 3's plain-words description. Slide 6: Kimi proposed "A project folder with two saved versions" for "A repo with two commits"; see skip list. | Kimi (P1-9) | related, row 3 |
| 26 | 38 | clarity | Students who typed resume-template.md by hand on slide 36 (no LinkedIn) are told to attach a PDF they don't have, and the prompt fills a template they already filled. | Slide 38 notes, after "type the prompt exactly": "Typed the template yourself at step 1? This step is done. Read it once with the slide 37 list in hand and move to step 4." | Kimi (P1-10) | no |
| 27 | 23 | density | Same as row 5: eight-tool map read aloud, notes lack "point, don't read." Kimi additionally wants the captions collapsed to three groups. | Row 5's notes line. Keep the captions (see row 5 skip note on the "unverified" hedge). | Kimi (P1-11) | yes, row 5 |
| 28 | 48, 51, 70 | accuracy / risk | Slide 48 says v0 pushes "Every version" to my-first-site, slide 51 promises the increment-2 pull request on "Every route," and slide 70 notes assume v0 will "accept GitHub's offer to open a pull request." If v0 pushes to main there is no PR for v0 pairs to review. | Slide 70 notes, after the v0 sentence: "If your v0 pushed straight to main, make the pull request yourself on GitHub: branch dropdown, type battle, create it, upload the battle file there, Compare & pull request. The review is the lesson, not which button made the branch." Related to row 12 (slide 48 connect order). | Kimi (P2-1) | related, row 12 |
| 29 | 82 | risk / clarity | Step 4 says "Send me your profile URL, post URL, and the exact skill name" with no destination on the slide; notes say "the class contact channel," which is never named. Students will guess a LinkedIn DM on the slide that says "not a guess." | Slide 82 step 4: "Send me your profile URL, post URL, and the exact skill name: mrhinkle@allthingsai.org, subject 'Endorsement.' I endorse it personally." Notes: replace "through the class contact channel" with the same address. | Kimi (P2-2) | no |
| 30 | 83, 85 | flow | The repo URL and the feedback subject line have to be transcribed in the last 15 minutes with no scannable link. | Add a QR code to the repo on slides 83 and 85 (slide 1 too, since it is up for 90 minutes). Slide 83 notes gate: "everyone has scanned the link or photographed this slide." | Kimi (P2-3) | no |
| 31 | 51, 52 | accuracy | Both slides carry the kicker "2 OF 3"; the series reads 1, 2, 2, 3. | Slide 52 kicker: "READING WHAT THE AGENT WROTE · 2 OF 3 · RED FLAGS". Slide 51 kicker: "... · 2 OF 3 · THE PULL REQUEST". | Kimi (P2-4) | no |
| 32 | 48 (notes) | flow | Slide 48 is the save step but its notes gate is the publish gate copied from slide 49 ("a live *.vercel.app address open on someone else's phone"). | Slide 48 notes gate: "index.html at the top level of my-first-site, lowercase, showing after a refresh." | Kimi (P2-5) | no |
| 33 | 50 (notes) | flow / voice | Slide 50 notes re-define commit and diff from zero even though slides 20 and 26–28 defined them and students opened a diff at 9:40. | Slide 50 notes opening: "You opened a diff this morning. Now we read one like a reviewer, because this afternoon the agent hands you one." Then continue from "Green added, red removed." | Kimi (P2-6) | no |
| 34 | 46–47, 74–77 | density / voice | The "Green sticky = done / Red sticky = helper" banner appears on nine or more slides; Kimi wants it removed from 47, 74, 75, 76, 77. | None proposed; see skip list. | Kimi (P2-7) | no |
| 35 | 63 | voice | Subtitle "The rest of this deck follows the featured game." reads like a spec; Kimi wants the notes line "It's mine, it's new" promoted to the slide. | None proposed; see skip list. | Kimi (P2-8) | no |
| 36 | 56 | accuracy | "Claude.ai, any plan" and "Any chat, any plan" are plan-availability claims that can change before Oct 19. | Add a bottom line to slide 56: "Row missing on your plan? The paste route always works." Leave the plan labels; the notes already say "describe the shape, not the pixel." | Kimi (P2-9) | related, row 16 |
| 37 | 56 | density | Same as row 16: densest table in Part 2. Kimi's extra: bold the first words of each cell so a student finds their row by shape, cut nothing. | Row 16's notes line, plus bold the lead words ("Open a Project," "Settings → Capabilities → Skills," "Put the folder at," "Paste SKILL.md," "Create a Project," "Create a GPT"). | Kimi (P2-10) | yes, row 16 |
| 38 | 69 | clarity | "visually hidden 'X' or 'O' label" inside the verbatim prompt has no plain-words anchor on the slide. | Slide 69 notes, after "no external files": "'Visually hidden' means a label only a screen reader hears, so a board made of emoji still reads as X and O." Kimi proposed a slide line; the slide already has a prompt card and three checks, so notes. | Kimi (P2-11) | no |
| 39 | 71 (notes) | flow | Kimi says slide 71's "14:15" slot falls inside build increment 2 (slide 70, 2:00–2:15) so it would never be shown; proposes moving it to after the 3:00 break. | None; see skip list (Kimi misread the clock). | Kimi (P2-12) | no |

Truncated and not triaged: Kimi P1-12 (slide unknown) and P2-13 (slide 62, density, "the Track B timeline lists the contingency out of" order, presumably the 3:30 row sitting after 4:10).

### Recommended to apply (new rows only)

Same rules as above: concrete, in Mark's voice, factually safe, never reword a verbatim prompt. Ordered by how much they help the room.

1. **Row 29 · Slide 82 · a destination for the endorsement URLs.** Without it, students DM a guessed LinkedIn account with their profile and post links. One address on the slide and in the notes; mrhinkle@allthingsai.org is already the deck's contact on slides 83 and 85.
2. **Row 28 · Slide 70 notes · a v0 fallback for the pull request.** Conditional wording, so it is safe whichever way v0 behaves on the day, and it protects the one PR exercise the deck promises "every route."
3. **Row 19 · Slide 39 kicker · "PORTABLE ROUTE."** One label; stops a v0 pair following the wrong build slide for seven minutes.
4. **Rows 22 and 32 · Slides 20, 22, 48 notes · copy-pasted gates.** Three notes lines, no slide changes. A gate that belongs to the previous slide gives Mark nothing to check.
5. **Row 18 · Slide 38 notes · say what a skill is before using the word.** The deck relies on "open the skill" twice before the skills block. One sentence in the notes, pointing at the actual file path.
6. **Row 26 · Slide 38 notes · the typed-template pairs.** One sentence so the no-LinkedIn pairs don't sit waiting for a PDF they never had.
7. **Row 31 · Slides 51 and 52 kickers · fix the "2 OF 3" twice.** Suffixes only.
8. **Row 33 · Slide 50 notes · acknowledge the morning's diff.** Kimi's sentence is in Mark's register and saves thirty seconds in a 15-minute block.
9. **Row 30 · Slides 1, 83, 85 · QR code to the repo.** A design add, not a copy change; cheap and it matters in the last five minutes.
10. **Row 24 · Slides 25 and 31 notes · v0 bundling wording.** Pairs with row 9; replaces two overstated phrases with safe ones.
11. **Row 36 · Slide 56 · "the paste route always works" line.** Already in the notes; promoting one sentence to the slide hedges every plan label at once.
12. **Row 37 · Slide 56 · bold the lead words.** Formatting only; pairs with row 16.
13. **Row 38 · Slide 69 notes · "visually hidden" in plain words.** Notes line, not a slide line.

### Recommended to skip (new rows only)

- **Row 21 · Slides 23–24 dated facts.** The slide's "VERIFIED, WITH DATES" framing is Mark's verification-language rule in action; moving the CVE to the notes weakens the receipts the notes call for. A re-verify note in the week of is enough, same judgment as row 10.
- **Row 23 · Slide 9 definition rows.** Slide 9 is the "whole course on one slide" overview and slides 11–16 are the thirty-second expansions; overview-then-detail is deliberate, and the rows are what students photograph.
- **Row 25, the slide 6 half.** Slide 6 is a reference table ("point at it, don't read it") and "repo" and "commits" are defined ten minutes later on slide 20; Kimi's replacement lengthens the cell past the 12-word rule. The slide 4 half is already row 3.
- **Row 34 · Sticky banner.** The banner is the room convention from slide 8, placed on every work slide on purpose; removing it from five of them makes the pattern inconsistent for no gain.
- **Row 35 · Slide 63 subtitle.** The "it's mine, it's new" line is already in the notes where Mark says it aloud; the subtitle's job is the rule about what is not in class, and Kimi's version adds words to a slide that is already a three-column table.
- **Row 39 · Slide 71 timing.** Kimi misread the clock: 14:15 is the start of increment 3 (slide 72, 2:15–2:45) and the cut-two decision point, which is exactly where the notes say "Say it at 2:15 either way." No change.
- **Row 17's prompt rewrite and row 20's alternative wording** are already covered by rows 7 and 2; apply those, not the Kimi variants.

### Counts (updated)

- GLM-5.3: 15 findings (16 rows).
- Kimi-K3: 23 complete findings (rows 17–39), 2 truncated.
- Overlap: 5 rows are the same finding as a GLM row (17, 20, 24, 27, 37); 3 more are related to a GLM row with a different point (25, 28, 36).
- New Kimi rows recommended to apply: 13. Recommended to skip: 6 (plus two variants superseded by GLM rows).
