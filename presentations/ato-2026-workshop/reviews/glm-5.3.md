# Outside review: z-ai/glm-5.3 · 2026-10-15 · via OpenRouter · reasoning_effort=high · max_tokens=12000 · timeout_ms=900000 · system prompt: senior presentation editor / instructional designer · input: review-prompt.md + deck-text.md (85 slides) · usage: 30,972 in / 10,096 out (8,250 reasoning)

**Verdict:** The bones are good: the sequence is sound, the checkpoints and cut list mean nobody has to leave empty-handed, and most of the voice is genuinely Mark's. The three things that will actually hurt the room are a printed terminal command most laptops can't run, a venue contradiction at the very close, and the jargon load on the one slide that makes the day's promise. Everything else is polish.

**Findings, ranked by how much they'd help the room:**

1. **Slide 30 · Clarity/Accuracy/Risk.** The printed command `pbpaste | vercel env add RESEND_API_KEY production` only works on macOS, requires the Vercel CLI (which contradicts slide 25's "Nothing is installed on your laptop"), and will strand most of the room during the secrets lesson. Replace the headline and command with the browser route: "THE BROWSER MOVE: copy the key from your password manager, open Vercel → your project → Settings → Environment Variables, and paste it there. The agent never sees it." Replace the verbatim prompt with: "I have an API key saved in my password manager. Tell me exactly where in the Vercel dashboard to paste it, and what line to add to .gitignore. Do not ask me to paste the key."

2. **Slide 84 · Accuracy.** "in this same building: the Atlantic Union Bank Convention Center" contradicts slide 1's "RALEIGH CONVENTION CENTER." This lands at 5:28 and will cost credibility at the worst moment. Fix: use the same venue name as slide 1 on both slides.

3. **Slide 4 · Voice/Clarity.** At 9:04, before any definition, it says "GitHub as your system of record," "You write the spec, not the syntax," and "The pull request is your checkpoint" — ERP-speak plus two unexplained terms on the promise slide. Replace the first with "GitHub keeps every version — Every change is saved, and you can go back to any of them. Nothing is lost." Replace the second row's subtitle with "You say what it should do; the chatbot writes the code. A person approves every change." (Slide 25's notes also say "system of record" — change there too.)

4. **Slide 34 · Accuracy.** The three tier rows name specific current models, which is exactly the detail that goes stale between writing and October. Do not trust memory for this; verify the tier examples against live data by calling the `list-models` (and if needed `list-daily-model-rankings` or `list-benchmarks`) MCP tools before printing. The slide's own hedge — "Names drift; the sizes don't" — is the right instinct; the fix is checking the names, not deleting the hedge.

5. **Slides 2, 6, 16, 35, 49 vs. 5 · Flow/Timing.** The deck alternates between "LIVE WEBSITE URL by 11:30" (slides 2, 6, 49) and "By 11:45 every word on it is yours" (slide 35) with 11:45 as the cut-gate (slide 5 notes). Students doing math all day will notice. Fix: standardize on 11:30 everywhere as the target, and change slide 35 to "By 11:30 every word on it is yours." In slide 5's notes, relabel 11:45 as "the hard stop," not the goal.

6. **Slide 36 · Accuracy.** "LinkedIn emails a link in about ten minutes" is too specific; export timing varies a lot by account. Replace with "LinkedIn emails a link; it's usually fast but can be slower. Start it now and keep going on Route A."

7. **Slide 26 · Clarity/Risk.** The note "private doesn't make the website private, Vercel decides that" is both vague and misleading — it's not a decision, the Vercel URL is public either way. Replace with: "private doesn't make the website private; the Vercel URL is public no matter what. Privacy of the page is controlled on Vercel, not in this checkbox."

8. **Slide 49 · Clarity.** "Build Command: override on, leave empty" is telegraphic; a first-timer can't parse it in ten seconds. Replace with: "Framework preset: Other. Under Build Command, turn on the override and leave it empty. Output: repository root." (Same fix on slide 77.)

9. **Slide 48 · Accuracy.** "click Deploy, then connect the project to GitHub" fixes a specific v0 ordering that has already changed more than once. Replace with: "v0 route: click Deploy, and connect the project to GitHub when it offers (it may ask before or after — accept, and pick my-first-site). Every version is pushed there."

10. **Slide 30 notes · Flow.** The notes promise "Composio, authorize-don't-paste for Slack and Gmail, is the sprint 3 bonus" — but slide 78's extension list has no Composio, no Slack, no Gmail. Delete that sentence from the notes, or add it to slide 78; never promise the room something the deck never delivers.

11. **Slide 56 · Density.** Six install variants in a table during a three-minute live demo, and the notes don't say "point, don't read." Cut to the two rows Mark actually demos (the Claude paste/Project row and the ChatGPT paste row), move the rest to docs/skills-guide.md, and add "Reference, point, don't read" to the notes.

12. **Slide 23 · Density.** The eight-tool grid gets read aloud for five minutes with no "point, don't read" instruction. Add that instruction to the notes, and trim each cell caption to six words or fewer (e.g., drop "which way it syncs is unverified" to a footnote in the doc); the line and the one question (slide 24) carry the lesson.

13. **Slide 50 · Clarity.** "Not 'Refactor site.'" uses jargon the deck never explains. Replace with "Not 'Update index.html.'" — which also calls back to the lesson Mark already taught on slide 28, so it lands twice as hard.

14. **Slide 54 · Clarity.** "The front matter" is typesetting jargon for a non-technical room. Replace with "The top of the file: a name, and a description that says when to use it."

15. **Slide 31 · Risk.** "it's included with the free Vercel plan" glosses over v0's free-tier generation limits; a heavy morning can exhaust them mid-build, and nothing tells helpers what to do. Add to the notes: "If v0 stops generating on the free plan, that pair switches to the portable route for this project; helpers know the pattern."

**Fix first: slide 30** (the command strands the room and the fallback prompt needs rewriting to match), **slide 84** (the venue contradiction is a factual error spoken out loud), **slide 4** (the jargon on the promise slide sets the register for every non-programmer's whole day).

(model: z-ai/glm-5.3, generation id: gen-1792120375-3Q5OPwxzEYW2txCcVnYQ, input tokens: 30972, output tokens: 10096, reasoning tokens: 8250)
