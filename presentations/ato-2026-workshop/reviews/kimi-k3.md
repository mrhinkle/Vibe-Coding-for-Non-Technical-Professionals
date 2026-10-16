# Outside review: moonshotai/kimi-k3 · 2026-10-15 · via OpenRouter · SUCCEEDED on the third attempt, input split in two

## Attempt log

1. FAILED · reasoning_effort=high · max_tokens=12000 · timeout_ms=900000 · full deck (85 slides, ~31k input tokens) in one message. Result: `Tool call timed out waiting for server response.` (MCP client timeout; no generation id.)
2. FAILED · reasoning_effort=low · max_tokens=12000 · timeout_ms=900000 · same full-deck message. Same error.
3. SUCCEEDED · deck split at the "## 43" boundary into two calls, sent in parallel. Both returned on the plain `moonshotai/kimi-k3` slug; the `:nitro` fallback was not needed.
   - Part 1 (slides 1–42): input 15,255 tokens · output 6,000 (4,500 reasoning) · generation gen-1792122613-KSg1N4zqvQTXeR4the50
   - Part 2 (slides 43–85): input 16,828 tokens · output 6,000 (4,500 reasoning) · generation gen-1792122862-UuL3BnO97mkWDtH9bH5w

Parameters for attempt 3, both halves: model `moonshotai/kimi-k3` · reasoning_effort `low` · max_tokens 6000 · timeout_ms 840000 · system prompt: "You are a senior presentation editor and instructional designer reviewing a workshop deck for a non-technical audience. Be specific, quote slide numbers and exact words, and give replacement wording. Do not praise. Do not pad." · message: review-prompt.md + a PART n of 2 marker + that half of deck-text.md. Part 2's marker also carried a six-line summary of what Part 1 had already taught, so the reviewer would not flag terms as undefined that slides 1–42 define.

Known limit: both responses hit `max_output_tokens` (6000 cap, 4500 of it spent on reasoning). Part 1 stops mid-finding 12; Part 2 stops mid-finding 13. Neither half delivered its "three slides to fix first" closing section. 23 complete findings were returned. A re-run with max_tokens around 9000 would likely complete both lists; not done here because the brief fixed the parameters.

Responses below are verbatim, including the truncation marker the MCP server prepended.

## Part 1 (slides 1–42)

[incomplete: max_output_tokens. Raise max_tokens or lower reasoning_effort and retry.]

**Verdict.** This is a well-built deck: the "fluid day" framing lands at 9:05 with an explicit cut list, the checkpoints are honest, and most of Mark's voice survives intact. The serious problems are concentrated in the secrets material — slide 30 teaches a macOS-only, CLI-dependent move that contradicts the deck's own "nothing is installed on your laptop" promise and will strand the Windows majority. Beyond that, the morning has a deadline that wobbles between 11:30 and 11:45, two parallel build slides where only one is labeled by route, and a vendor-facts slide whose dated claims about competitors are the least likely text in the deck to survive until October 2026.

**Findings, ranked:**

1. **Slide 30 · Accuracy/Risk.** "pbpaste | vercel env add RESEND_API_KEY production" requires the Vercel CLI (an install, contradicting slide 25's "Nothing is installed on your laptop") and pbpaste, which doesn't exist on Windows. The verbatim prompt bakes in "using pbpaste." Fix: replace the command block with "THE CLIPBOARD MOVE: copy the key from your password manager, paste it yourself into Vercel → your project → Settings → Environment Variables. The agent never sees it." Change the verbatim prompt to: "I have an API key on my clipboard. Tell me exactly where to paste it myself — Vercel environment variables, or a .env.local file — and the line to add to .gitignore. Do not ask me to paste the key."

2. **Slide 38 · Clarity.** The notes say "Open the vc-project-brief skill" and slide 39's notes say "Use vc-build-small," but no slide in 1–42 has ever said what a skill is, where these files live, or how to "open" one — first-timers will stall here. Fix: add one line to slide 38's visible text above the prompt card: "A skill is a file of instructions you paste before the prompt. Open vc-project-brief.md from the course folder, paste it, then the prompt below."

3. **Slide 39 vs 40 · Clarity/Flow.** Slide 40 is labeled "V0 ROUTE" but slide 39 has no route label, so v0 students will try to "Save as index.html. Double-click it." on a React app. Fix: change slide 39's kicker to "PROJECT 1 · PERSONAL WEBSITE · STEP 4 · BUILD · PORTABLE ROUTE."

4. **Slides 2, 5, 6, 16, 35 · Accuracy/Flow.** The website deadline is "11:30" on slides 02 ("LIVE WEBSITE URL by 11:30" on 06; "by 11:30" on 16), but slide 05's notes say "a live URL by 11:45 is the gate" and slide 35 says "By 11:45 every word on it is yours." Fix: make the publish gate 11:30 everywhere; in slide 05's notes change to "a live URL by 11:30 is the gate," and in slide 35 change "By 11:45" to "By 11:30 it's live; by 11:45 every word is yours."

5. **Slide 24 · Accuracy.** "CVE-2025-48757: one in ten scanned Lovable apps…", "Replit now separates development and production databases," and slide 23's "GitHub only on paid plans" for Emergent are dated claims about named competitors presented as current fact; any one can be stale or challenged by October 2026, and slide 23 even prints "unverified" on the slide. Fix: move the CVE number and remediation sentences to the notes, and change the slide header from "THREE CAUTIONARY FACTS, VERIFIED, WITH DATES" to "THREE THINGS THAT HAPPENED IN 2025"; add a notes line: "Re-verify all three in September 2026."

6. **Slides 20 and 22 · Flow (notes).** Gates are copy-pasted from the wrong slides: slide 20's gate repeats slide 19's ("everyone can say what GitHub is for and what Vercel is for"), and slide 22's repeats slide 21's. Fix: slide 20's gate should be "everyone can define commit and pull request in one sentence"; slide 22's gate should be "the room answers 'no' to the scoring question out loud."

7. **Slides 9 and 11–16 · Flow.** Slide 09 already defines all six loop steps in its bottom rows, then slides 11–16 teach the same six steps again at 30 seconds each — the one place the deck teaches twice. Fix: delete the four definition rows from slide 09 (keep the strip and "Same loop, two sets of words"), and let 11–16 carry the definitions.

8. **Slide 25 and 31 · Accuracy.** The notes claim v0 "comes with a free Vercel account" and "it's included with the free Vercel plan" — v0 is a separate product with its own small free credit allowance, and a full day of generations can exhaust it mid-morning with no fallback stated. Fix: change slide 31's notes to "v0 has its own free tier; if anyone runs out of credits before lunch, they switch to the portable route — same prompts, same checkpoints."

9. **Slides 04, 06, 09 · Clarity.** "Pull request" (slide 04, 9:04), "repo" and "commits" (slide 06, 9:07), and "review happens in a pull request" (slide 09's notes, 9:10) are all used 10–14 minutes before slide 20 defines them. Fix: on slide 04 change "The pull request is your checkpoint" to "A human yes-or-no is your checkpoint," and on slide 06 change "A repo with two commits" to "A project folder with two saved versions."

10. **Slide 38 · Clarity.** Route B's no-LinkedIn students typed their details directly into resume-template.md on slide 36, then slide 38 tells them to attach "YOUR RESUME PDF + resume-template.md" to fill in the template — circular for anyone without the PDF. Fix: add one visible line: "Typed your template by hand on slide 36? It's already done — read it once and skip to step 4."

11. **Slide 23 · Density.** Nine-to-ten tools with per-tool sync caveats is a wall of text, and the notes don't mark it "point, don't read" the way slides 06–07 do. Fix: cut the per-product detail lines to three (Emergent/Base44 grouped left, Lovable/Bolt/Replit middle, v0/Claude Code right), move the rest to the notes, and add "Reference slide, point, don't read" to the notes.

12

(model: moonshotai/kimi-k3, generation id: gen-1792122613-KSg1N4zqvQTXeR4the50, input tokens: 15255, output tokens: 6000, reasoning tokens: 4500)

## Part 2 (slides 43–85)

[incomplete: max_output_tokens. Raise max_tokens or lower reasoning_effort and retry.]

## Overall verdict

Part 2 is in good shape: timings are honest, the cut ladder is real, the voice is mostly Mark's, and the rollback/checkpoint safety net is the deck's strongest feature. The serious problems are concentrated at the seams — the v0 pull-request promise (slide 70) contradicts how slide 48 says v0 works, the LinkedIn slide (82) risks students sending personal URLs to the wrong place, and the 15-minute close (slides 80–85) asks students to transcribe emails and repo URLs with no QR code or link slide. Fix those three first; everything else is tightening.

## Findings (ranked by impact on the room)

1. **Slide 70 / Accuracy-risk — the v0 route can't do a pull request as described.** Slide 48's v0 instruction ("Every version is pushed to my-first-site") implies v0 syncs to main, but slide 70's notes say "v0: a new generation, push it, accept GitHub's offer to open a pull request," and slide 51 promises the PR happens "Every route." Verify what v0 actually does on workshop day, and add fallback wording to slide 70's notes, e.g.: "v0 route: if your v0 pushes straight to main, open the pull request yourself on GitHub: new branch, upload the battle file there, 'Compare & pull request.' The review is the lesson, not which button made the branch."

2. **Slide 82 / Risk — "Send me your profile URL, post URL, and the exact skill name" has no destination on the slide.** The notes say "through the class contact channel," but the channel is never named on the slide, so students will DM their profile and post URLs to guesses of Mark's LinkedIn account — the same slide that warns "not a guess." Fix: add a line under step 4: "Send them to mrhinkle@allthingsai.org, subject: endorsement."

3. **Slides 80–85 / Flow — the close requires copying long URLs and an exact subject line in 15 minutes with no scannable link.** Slide 83's repo URL (`github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals`) and the subject "ATO workshop feedback" are the two things students most need to leave with. Fix: one QR code or short link on slide 83 and slide 85, and change the gate on 83's notes from "everyone knows the email address" to "everyone has scanned the link or photographed this slide."

4. **Slides 51–52 / Accuracy — both slides are labeled "2 OF 3."** The series runs 1, 2, 2, 3. Fix: retitle slide 52 to `READING WHAT THE AGENT WROTE · 2 OF 3 · RED FLAGS` (keeping "2 of 3" since it completes the pull request lesson) or renumber the series 1–4.

5. **Slide 48 / Flow — the gate in the notes belongs to slide 49.** Slide 48 is SAVE, but its notes end "Gate: a live *.vercel.app address open on someone else's phone, recorded in project-state.md" — that's the publish gate, word-for-word from slide 49. Fix slide 48's gate to: "Gate: index.html at the top level of my-first-site, lowercase, visible after a refresh."

6. **Slides 50–53 / Flow — commit, diff, and PR are re-taught without acknowledging the morning.** Part 1 (slides 20, 26–28) already defined commit, branch, PR, and had students open a diff; slide 50's notes define them again from zero ("A commit is a named checkpoint"). Fix the notes' opening: "You opened a diff this morning. Now we read one like a reviewer, because this afternoon the agent hands you one." Same content, thirty seconds shorter, and it respects the room.

7. **Slides 46–47 / Voice — "Green sticky on your lid = done / Red sticky = a helper comes to you" is copy-pasted onto at least nine slides.** Once it's room convention it stops being read; worse, slide 47's most important line — "the sixth, the one that counts" — competes with the banner. Fix: keep the banner on slides 46, 69, 70, 72 (work blocks), delete it from 47, 74, 75, 76, 77 where the checkpoint list already tells students what done looks like.

8. **Slide 63 / Voice — "It's mine, it's new, and the rest of this deck follows it" belongs on the slide, and the slide's header reads like a spec.** Slide header: "The rest of this deck follows the featured game." Fix, in Mark's voice: "Alien Tic-Tac-Toe is mine, it's new, and it's the one the rest of today follows." Then move "No accounts, databases, leaderboards, or downloaded art in class" down as a standalone bottom line so the rule doesn't hide inside a sentence.

9. **Slide 56 / Accuracy-risk — plan-availability claims won't survive contact with reality.** "Claude.ai, any plan" (Projects) and "Any chat, any plan" overpromise; plan gates change. The notes already hedge ("menu names that moved"), so hedge the slide too: change the plan lines to "Claude.ai — most plans" and "Any chat, including free" and add a bottom line: "If a row's missing on your plan, the paste route always works."

10. **Slide 56 / Density — six install paths, each with two-sentence instructions, is the densest slide in Part 2.** It survives as a reference table only because Mark demos live. Fix: bold the first four words of each cell ("Open a Project," "Settings → Capabilities," "Put the folder at," "Paste SKILL.md," "Create a Project," "Create a GPT") so students find their row by shape; cut nothing else.

11. **Slide 69 / Clarity — "each with a visually hidden 'X' or 'O' label" is jargon inside a verbatim prompt with no plain-English anchor.** The prompt can't change, so add one slide line under it: "'Visually hidden' = a label only screen readers hear. It's how a symbol-only board stays accessible." Slide 65's notes already assume this concept; this gives it a home.

12. **Slide 71 / Flow — the best safety slide in the deck has no scheduled slot.** Notes say "14:15 (and any time)," but 14:15 is inside build increment 2 (slide 70, 2:00–2:15), so it will never actually be shown. Fix: make slide 71 the first slide after the 3:00 break, or add to slide 73's notes: "Show slide 71 while they settle, before 'swap who types.'"

13. **Slide 62 / Density — the Track B timeline lists the contingency out of

(model: moonshotai/kimi-k3, generation id: gen-1792122862-UuL3BnO97mkWDtH9bH5w, input tokens: 16828, output tokens: 6000, reasoning tokens: 4500)
