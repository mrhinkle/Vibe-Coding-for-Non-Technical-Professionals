# Vibe Coding, Take Two: the six-hour class

Five hours of class, one hour of live hacking in three twenty-minute sprints. This sheet covers
what is new versus the three-hour workshop. The prework email, room card, triage card, cost card,
rent-versus-own scorecard, starter-repo spec, and every original prompt are in
`handout-workshop-3hr.md`; update the times in the prework email before sending.

## Run of show (360 minutes)

| Clock | Block | Min | Kind |
|---|---|---|---|
| 0:00 | 1 Land: repo and live URL | 20 | hands-on |
| 0:20 | Welcome: bio, promise, the day, room rules | 5 | talk |
| 0:25 | 2 One year later | 15 | talk |
| 0:40 | 3 Spec | 20 | hands-on |
| 1:00 | 4 First ship | 25 | hands-on |
| 1:25 | Break one (two stickies) | 10 | |
| 1:35 | 5 Build the one thing | 25 | hands-on |
| 2:00 | **Live hacking, sprint 1** (on the branch, no merge) | 20 | hack |
| 2:20 | 6 Test is the gate | 25 | hands-on |
| 2:45 | Lunch | 30 | |
| 3:15 | 7 Ship and own it: rollback, secrets, review | 20 | hands-on |
| 3:35 | 8 Give it a memory: database | 30 | hands-on, NEW |
| 4:05 | **Live hacking, sprint 2** (every change through the gate) | 20 | hack |
| 4:25 | Break two (two stickies) | 10 | |
| 4:35 | 9 Hear about it: email and errors | 20 | hands-on, NEW |
| 4:55 | 10 Own it, plus when to call a professional | 15 | talk, one NEW slide |
| 5:10 | 11 Skills | 20 | hands-on |
| 5:30 | **Live hacking, sprint 3** + show and tell | 20 | hack |
| 5:50 | 12 What you own, Monday list, close | 10 | review |

If lunch is outside the six hours, give its thirty minutes to sprints two and three, fifteen each.

## New prompts, verbatim

**Block 8, database** (after Vercel → project → Storage → Create Database → Neon, connected to
Production and Preview):

> Read spec.md. Use plan mode first. On a new branch called add-database, replace the sample data
> in my-tool with a Postgres table, using the DATABASE_URL environment variable that Vercel
> provides. Create the table if it does not exist. Never put the connection string in the code or
> in any file that git tracks. Keep the Playwright test passing; if the test needs the database,
> tell me exactly which secret to add in GitHub and where. Commit, push, and open a pull request.

**Sprint 2, the sprint prompt:**

> On a new branch called [feature-name], add [one feature] to my-tool. Add one sentence for it
> under “How we know it works” in spec.md, and extend the Playwright test to check that sentence.
> Run the build and the tests. Commit, push, and open a pull request.

**Block 9, email** (after resend.com → API Keys → Create, then Vercel → Environment Variables →
RESEND_API_KEY, Production and Preview, Sensitive):

> On a new branch called notify-me, when the my-tool form is submitted, send an email to
> [my email address] with what was entered. Use Resend with the RESEND_API_KEY environment
> variable, sending from onboarding@resend.dev. If the email fails, still save the row and log the
> error. Never put the key in the code. The Playwright test must not send real email. Commit,
> push, and open a pull request.

## Sprint menus

1. **Sprint 1, make it yours:** real columns and prices; one calculated field; name, colours,
   logo; the “what must never happen” line enforced on the form. Spec changes first. No merge.
2. **Sprint 2, through the gate:** edit and delete a row; search or filter; CSV export; totals.
3. **Sprint 3, ship and show:** finish one thing, run /my-deploy-checklist, submit once on
   production from a phone, paste the URL in the shared doc. Then three two-minute demos on
   production URLs: what it replaces, what that cost, what the AI got wrong.

## Helper notes

- Checkpoint branches the starter repo now needs: checkpoint-2, checkpoint-3-tool,
  checkpoint-4-tests, **checkpoint-5-database**, **checkpoint-6-email**.
- Sprint 1: nobody merges. Anyone without a preview at 2:00 re-templates from checkpoint-3-tool.
- Lunch: anyone not merged eats with a helper and takes checkpoint-4-tests.
- Block 8: stuck at 3:55 → checkpoint-5-database, connect the database in Vercel, redeploy.
- Block 9: keys go from Resend's page to Vercel's form. Never into chat, code, or a file.
  Behind at 4:50 → checkpoint-6-email, and they still add their own key.
- Pick the three show-and-tell volunteers during sprint 3.

## Verify before stage

- Click through Vercel → Storage → Create Database → Neon on a fresh Hobby account the day
  before. Confirm the variable is still named DATABASE_URL.
- Dry-run block 8 end to end on the starter, including the Playwright run in GitHub Actions and
  the GitHub secret it may need. Preview and production share one database in class; say so.
- Confirm on resend.com: free tier 100 emails a day, unverified accounts deliver only to the
  account's own address, onboarding@resend.dev still works as a sender.
- The bill slide still reads "checked September 7, 2026". Re-check every price and change the date.
- Decide: date, venue, seats, price, helpers (one per five seats held up at three hours; six hours
  with a database wants one per four), and whether lunch is inside the six hours.
