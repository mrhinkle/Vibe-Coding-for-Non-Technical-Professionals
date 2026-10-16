# Deck text: AI Agents & Vibe Coding, All Things Open 2026

Every visible word on each of the 85 slides, extracted from `ato-2026-workshop.pdf` with `pdftotext -layout` (footer page counter removed), followed by the speaker note from `speaker-notes.md`. Generated after the Tufte pass; for outside review. Prompts inside the dark cards are verbatim from the course docs and must not be reworded.

## 01 · Hold slide: doors open

```
ALL THINGS OPEN 2026 · EXTENDED WORKSHOP · RALEIGH CONVENTION CENTER

AI Agents & Vibe Coding
Doors 7:30           ·     We start at 9:00

THREE THINGS TO DO RIGHT NOW                                                             WI-FI

1 Open github.com and make sure you’re signed in.                                        Network:    ________________

2 Open vercel.com and sign in with GitHub.                                               Password:   ________________
3 Open prep/laptop-check.html from the course folder. Green check
means you’re ready.

Slides and all course materials: github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals

MARK HINKLE · CEO, PERIPETY LABS · PUBLISHER, THE AIE NETWORK · CO-ORGANIZER, ALL THINGS AI
```

Notes: 7:30–9:00. This slide stays up until 9:00 and I don’t start talking before then. I walk the tables with the helpers. Every laptop gets the laptop check on the big screen, prep/laptop-check.html, and a helper confirms two things per person: signed in to GitHub, signed in to Vercel with GitHub. Wi-Fi goes on this slide and on the whiteboard before anyone walks in. My laptop has ChatGPT, Claude, and v0 tabs signed in, so the demo matches whichever chatbot most people brought. Watch for: people who skipped the prework. Don’t debug one laptop for more than five minutes; sit them next to a partner and put them on the list for the setup block. Gate: by 9:00 every seat shows a green check on the laptop check, or is on the helper list.

## 02 · Welcome

```
WELCOME

By 5:30 you’ll have two live URLs.
One loop all day: describe, plan, build, check, save, publish. Both projects.

                                 11:30                                                          4:35

 9:00                                     12:00                                                                5:30

                    A website about you, built from your                        A themed tic-tac-toe battle game, live at
                         LinkedIn, live on Vercel.                                           its own URL.
```

Notes: 9:00–9:04. The promise first, then one minute on me. By 5:30 you have two live URLs: a website about you and a game you can hand to a friend. And one loop you can run again on Monday. The listing promised a working, deployed application. That’s the website, and it ships before lunch. If you’re thinking this is a lot, it is. Every stage has a tested file you can download and continue from. Everyone here gets stuck today, me included. That’s the plan, not the exception. Nobody is judging your code. Watch for: anyone who thinks they need to code. Nobody types code by hand today. You describe, the chatbot builds, you check. Gate: everyone can say the two deliverables and the time each is due.

## 03 · Who is talking

```
WHO IS TALKING

Who’s talking, and why trust me with your Monday.

                 CEO and founder of Peripety Labs. Co-founder of All Things AI.

                 Founding publisher of The AIE Network, read by about 90,000 business
                 leaders.

                 25-plus years in enterprise software, from open source to cloud to AI.

                 VP at Cloud.com. Executive Director of the Node.js Foundation. First
                 company, 1995.

MARK HINKLE
```

Notes: 9:00–9:04. The gray hair is the credential. I started my first company in 1995 and I’ve been in enterprise software through open source, cloud, and now AI. I’ve shipped every mistake I’m about to show you, some of them more than once. I’m not a daily coder. I direct the people, and now the agents, who build. That’s the seat you’re in today, so if that’s you, you’re in the right room. Watch for: me talking about myself past sixty seconds. Gate: none; move.

## 04 · What you will learn

```
WHAT YOU WILL LEARN

The listing promised four things. Here they are.

How software gets built              The lifecycle in plain words, and a six-step loop you run a dozen times.

GitHub as your system of record      Every change tracked, reviewed, and reversible. Nothing is lost.

Vercel and v0 build and deploy       v0 writes the code. Vercel ships it live on every push.

Directing agents instead of coding   You write the spec, not the syntax. The pull request is your checkpoint.
```

Notes: 9:04–9:05. The listing made four promises and this is them. How software actually gets built. GitHub as your system of record: every change tracked, reviewed, reversible. Vercel and v0 build and deploy, with nothing installed on your laptop. And the big one, directing agents instead of coding. You write the specification, not the syntax, and the pull request is where a human says yes or no. Three kinds of people are here today. If you don’t code, you leave with two live things you made and a loop you can repeat. Developers get a disciplined agent process with a review gate. Leaders, you get what to put in GitHub first and where agents still need supervision. Watch for: developers checking out during the basics. The review and rollback material at 11:30 is for them. Gate: none; talk slide.

## 05 · How today works: behind, ahead, stuck

```
HOW TODAY WORKS

Behind? Grab a checkpoint. Stuck? Say one sentence.

We go as fast as the slowest table still working. I check in every 30 minutes and move the schedule out loud.
Behind: every stage has a tested file you can continue from. Using one is smart, not cheating.
Ahead: ten skills for your site and four game extensions. One at a time.

WHEN YOU NEED HELP, RAISE A HAND AND SAY ONE SENTENCE

“I clicked X, expected Y, saw Z.”
```

Notes: 9:05–9:07. The schedule is a plan, not a contract. We go as fast as the slowest table still working; every 30 minutes I check in and move the schedule out loud. Checkpoints are tested files you continue from; grabbing one is smart. Help? One sentence: “I clicked X, expected Y, saw Z.” Nobody here is judging your code. Feedback at the close earns you my book’s preview edition. If we run late, the cuts, in order: 1) drop sprint 1 at 11:45; a live URL by 11:45 is the gate; 2) everyone continues from game checkpoint 2 at 2:15; 3) everyone continues from checkpoint 3 at 3:00, straight to theme and publish; 4) drop sprints 2 and 3 to publish the game; 5) never cut the handoff. Watch for: people hiding they’re behind. Gate: everyone can say the help sentence.

## 06 · The day at a glance: morning

```
THE DAY AT A GLANCE · MORNING

The morning: website before lunch.
                   CLOCK      BLOCK                                 YOU LEAVE WITH

                   7:30       Doors                                 Laptop check, sign-ins

                              How software gets built; the map of
                   9:00                                             You can name the loop
                              tools
                              Setup: GitHub tour, v0, Vercel, the
                   9:30                                             A repo with two commits
                              secrets rule

                   10:00      Website: export → build               index.html with your content

                   10:45      Break

                   11:00      ★ Colors, check, publish              LIVE WEBSITE URL by 11:30

                   11:30      Reading what the agent wrote          Diff, PR, rollback

                   11:45      LIVE HACKING 1                        Skills, then one skill loaded

                   12:00      Lunch

                 Blue row: deliverable one. Orange row: you pick one skill from the menu and build it yourself.
```

Notes: 9:07–9:08. Reference slide, point at it, don’t read it. Thirty seconds. Morning is the website: setup, build, publish by 11:30, then fifteen minutes on reading what the agent wrote: diffs, pull requests, rollback. The blue row is deliverable one. The orange row is live hacking: you pick one skill from the menu and build it, and I build one on the projector. Break at 10:45, lunch at noon for forty-five minutes. Watch for: the people doing the math on 8.5 hours. It’s 360 teaching minutes plus 55 of sprints; the rest is breaks and lunch. Gate: nothing to check; move on.

## 07 · The day at a glance: afternoon

```
THE DAY AT A GLANCE · AFTERNOON

The afternoon: the game, or your own project.
                   CLOCK    BLOCK                             YOU LEAVE WITH

                   12:45    Choose a track, theme, sketches   Theme table, three sketches

                   1:20     Brief and rules                   game-brief.md with checks

                   1:40     Build: board, battle, connect     A playable round

                   2:45     Break

                   3:00     Look and feel                     Theme applied, fits a phone

                   3:30     Playtest, one fix                 One observed issue repaired

                   4:10     ★ Publish the game                LIVE GAME URL by 4:35

                   4:35     LIVE HACKING 2 + 3                Show and tell at 5:05

                   5:15     Tuesday, handoff, LinkedIn        Two URLs, two state files

                   5:30     End

                             Blue row: deliverable two. Orange rows: sprints two and three.
```

Notes: 9:07–9:08. Reference slide, point at it, don’t read it. Afternoon is the game, or your own one-screen project on Track B: choose, sketch, brief, build in three increments, polish, playtest, publish by 4:35. That’s deliverable two, the blue row. Orange rows are sprints two and three, then show and tell at 5:05. Break at 2:45. The handoff at 5:15 never gets cut. Watch for: questions about Track B now. Hold them; the track slide comes after lunch. Gate: nothing to check; move on.

## 08 · Room rules

```
FOUR RULES

Four rules for the day.

Pairs                               The nervous one types. The other reads the prompt out loud. Swap after each
                                    break.

Stickies, not hands                 Green on your lid when the step is done. Red when you are stuck; a helper
                                    comes to you.

No passwords in chats               No passwords, keys, or tokens in any chatbot. Make accounts in the provider’s
                                    own window.

Your account, not mine              Your GitHub, your Vercel, your chatbot. My repo is materials, not the destination.

  Green sticky on your lid = done     Red sticky = a helper comes to you
```

Notes: 9:08–9:10. Four rules. Pairs: the more nervous person types, the other reads the prompt out loud; swap after each break. Stickies: green on your lid when the step’s done, red when you’re stuck and a helper comes to you, so I can see from the front who needs a helper. Nothing secret goes into a chat: no passwords, no API keys, no form endpoints with secrets. You create accounts yourself in the provider’s own window. And everything lands in your account, not mine: your GitHub, your Vercel, your chatbot. You own the repo. I never touch it. My course repo is a source of materials, not a destination. Watch for: somebody pasting a password into the chatbot “to save time.” Stop it on the spot. Gate: every table has stickies and a pair.

## 09 · The loop: describe, plan, build, check, save, publish

```
THE LOOP                                                                                                9:00 – 9:20

Same loop, two sets of words.
Big words: what you do today. Small words: what the listing calls it.

  DESCRIBE                PLAN                     BUILD                    CHECK            SAVE     PUBLISH

       PROMPT             GENERATE                  COMMIT                    REVIEW         DEPLOY    REPEAT

                                                  and again, for the next increment

Describe                 The outcome, in one sentence. You write the spec, not the syntax.

Plan                     Files, order, three hand checks, before it touches a file.

Build, check             The smallest version that works. Open it, click it, phone it.

Save, publish            A named checkpoint in GitHub, then a URL someone else can open.
```

Notes: 9:10–9:12. This is the whole course on one slide. The strip is what you do: describe the outcome, plan before anything gets built, build the smallest version, check it with your own eyes, save the version that passed, publish only that. The small words under each box are the same loop in the words the listing uses: prompt, generate, commit, review, deploy, repeat. Review happens in a pull request, where you say yes or no. Both projects run this a dozen times, and the line at the bottom of every working slide shows which step we’re on. Next six slides: one step each, thirty seconds apiece. Watch for: people who want to describe everything at once. One increment, one check. Gate: everyone can say either row in order.

## 10 · Block 1: a website, a game, and three kinds of file

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                                 9:00 – 9:20

Both are a few plain files in a folder.

                                          HTML                   Structure. Headings, sections, links, buttons: what is on
                                                                 the page.

                                          CSS                    Appearance. Colors, spacing, fonts, how it fits a phone.

                                          JavaScript             Behavior. What happens when you click: health goes
                                                                 down, a square is claimed.
               A game you can hand to a
               friend

                                          The AI helps write the files. The finished site and game never call an AI.

A website about you
```

Notes: 9:12–9:14. Show the two finished examples: Jordan Rivera’s site and the space-theme game. Ask who’d use each. Then the three kinds of file. Back in ’95 I was doing tech support at an ISP, and a web page was a text file you typed by hand. It still is. HTML is structure: headings, sections, buttons. CSS is appearance: colors, spacing, fonts. JavaScript is behavior: what happens when you click. Your browser reads them off your laptop; hosting puts the same files where everyone else’s browser can. Backends and databases exist; neither project needs them today. The AI helps write the files; the finished site and game never call one. Watch for: the word “backend” causing panic. One sentence and move on. Gate: everyone can point at the heading in the file and the same heading on screen.

## 11 · The loop, one step: Describe

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                               9:14 – 9:17

Describe: say what you want, like briefing a contractor.

  DESCRIBE                 PLAN                  BUILD                  CHECK                  SAVE           PUBLISH

                                                and again, for the next increment

Website: “A one-page site about me, from my resume, with a working            THE QUESTION YOU ASK YOURSELF

email link.”
                                                                              What would I show a friend to prove
Game: “Tic-tac-toe where each square is won in a short battle.”
                                                                              it works?

                              DESCRIBE   ·   PLAN   ·   BUILD     ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 9:14–9:17. Describe. One sentence, the way you’d brief a contractor: what it is, who it’s for, what done looks like. Not how to build it. If you can’t say what you’d show a friend to prove it works, you’re not ready to type. Watch for: paragraphs. One sentence. Gate: none; thirty seconds.

## 12 · The loop, one step: Plan

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                              9:14 – 9:17

Plan: make it tell you before touching a file.

  DESCRIBE                PLAN                   BUILD                 CHECK                  SAVE           PUBLISH

                                                and again, for the next increment

Website: one index.html, three hand checks.                                  THE QUESTION YOU ASK YOURSELF

Game: board, then battle, then connected. Three checks each.                 Does the file list match my sketch?
                                                                             Is anything in it I didn’t ask for?
  THE PLAN PROMPT · docs/plan-first-and-models.md · VERBATIM

  Before you write any code, give me the plan: the files you will create or change, one line on
  what each does, the order you'll do them in, and three checks I can perform by hand to know it
  worked. Flag anything in my brief that is bigger than one screen, one input, one result. Do not
  build yet.

                             DESCRIBE   ·     PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 9:14–9:17. Plan, the new step. Before it writes a file, make it list the files, the order, and three checks you can do by hand. Read it like a contractor’s quote: anything you didn’t ask for? Biggest thinking model for the plan, middle model to build. A bad plan costs an hour; reading one costs three minutes. Watch for: the chatbot already typing code. Stop it; ask for the plan. Gate: none; thirty seconds.

## 13 · The loop, one step: Build

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                                 9:14 – 9:17

Build: ask for the smallest version that could work.

  DESCRIBE                  PLAN                  BUILD                   CHECK                  SAVE           PUBLISH

                                                 and again, for the next increment

Website: the whole page, with your words in it. Nothing else yet.               THE QUESTION YOU ASK YOURSELF

Game: the board alone, with two stand-in buttons for the battle.                What is the smallest thing I can
                                                                                check in five minutes?

                               DESCRIBE   ·   PLAN   ·   BUILD      ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 9:14–9:17. Build. Ask for the smallest version that could work, one file, and nothing you can’t check in five minutes. The website is the whole page with your words. The game starts as a board with two stand-in buttons. Small builds make small diffs, and small diffs are the ones you can read. Watch for: asking for the whole game at once. Board first. Gate: none; thirty seconds.

## 14 · The loop, one step: Check

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                              9:14 – 9:17

Check: open it, click it, phone it.

  DESCRIBE                  PLAN                  BUILD                   CHECK               SAVE           PUBLISH

                                                 and again, for the next increment

Website: every link, fits a phone, print preview, no “Jordan” anywhere.      THE QUESTION YOU ASK YOURSELF

Game: win, lose, draw, and Restart, each seen once.                          What did I actually see, not what did
                                                                             the chatbot say?

                               DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 9:14–9:17. Check. Open it, click it, open it on your phone, and write down what you saw. The chatbot saying “done” is not a check. For the website: every link, fits a phone, prints, no Jordan left. For the game: win, lose, draw, restart, each one seen with your own eyes. Watch for: trusting the chatbot’s summary. Your eyes, every time. Gate: none; thirty seconds.

## 15 · The loop, one step: Save

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                               9:14 – 9:17

Save: keep the version that passed, with a name.

  DESCRIBE                  PLAN                  BUILD                 CHECK                  SAVE           PUBLISH

                                                 and again, for the next increment

Website: commit to GitHub, “First version of my site.”                        THE QUESTION YOU ASK YOURSELF

Game: “First playable version.” Increment 2 goes through a pull               If the next change breaks it, where
request.
                                                                              do I go back to?

                               DESCRIBE   ·   PLAN   ·   BUILD    ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 9:14–9:17. Save. Keep the version that passed, in GitHub, with a message that says what it is. “First version of my site.” Now when the next change breaks it, and one will, you have a place to go back to. Nothing in GitHub is lost. Watch for: saving only at the end of the day. Save every time a check passes. Gate: none; thirty seconds.

## 16 · The loop, one step: Publish

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                             9:14 – 9:17

Publish: put it where someone else can open it.

  DESCRIBE                PLAN                  BUILD                 CHECK                  SAVE           PUBLISH

                                               and again, for the next increment

Website: a vercel.app URL on a classmate’s phone by 11:30.                  THE QUESTION YOU ASK YOURSELF

Game: a second vercel.app URL by 4:35.                                      Does it open on someone else’s
                                                                            phone, not just mine?

                             DESCRIBE    ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 9:14–9:17. Publish. Put it where someone else can open it: a vercel.app URL, on a classmate’s phone, not yours. Only the version that passed its checks. The website by 11:30, the game by 4:35. Then back to describe for the next increment. Watch for: publishing before the checks. Only what passed. Gate: none; thirty seconds.

## 17 · Block 1: the lifecycle, before you build

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                   9:00 – 9:20

Before you build: three questions.

DISCOVER                            DEFINE                               DESIGN AND PLAN

Who is this for?                    What must version one do?            What will the person see?

Website: a recruiter on a phone.    Website: three sections, a working   Website: a centered or sidebar
                                    email link.                          wireframe.
Game: a friend with 90 seconds.
                                    Game: one playable round, restart    Game: three screens, sketched.
                                    works.
```

Notes: 9:17–9:18. Walk the first three with both projects. Discover: who’s this for? For the site, a recruiter on a phone. For the game, a friend with ninety seconds. Define: what must the first version do? Three sections and a working email link; one playable round with a restart that works. Design: what will they see? A page outline; three sketched screens. These three happen before anyone types a prompt, and they prevent most of the afternoon’s trouble. Watch for: people treating this as theory. Every one of these becomes a slide this afternoon. Gate: none; this is a talk slide.

## 18 · Block 1: the lifecycle, build through maintain

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                         9:00 – 9:20

Then build, test, release, maintain. And repeat.

Build                  The smallest useful version. One index.html; board, then battle, then connected.

Test                   Does it do what you promised? Six checks; win, lose, draw, restart.

Release                Which version did we publish? A vercel.app URL on a phone.

Maintain               What changes after people use it? One skill; one extension, one check.
```

Notes: 9:17–9:18. Build: the smallest useful version. One index.html for the site; board, then battle, then connected for the game. Test: does the behavior match the promise? Six checks before the site goes public; win, lose, draw, and restart observed for the game. Release: which version did we actually publish? A vercel.app URL open on a phone. Maintain: what should change after people use it? One skill from the menu, one game extension, each with its own check. It’s a loop. A game that feels unfair needs a rule change. A confusing site needs a clearer purpose. And you’re saving the whole way through. Watch for: people treating this as theory. Every row becomes a slide this afternoon. Gate: none; this is a talk slide.

## 19 · Block 1: four tools, four jobs

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                                              9:00 – 9:20

Four tools, four jobs.

                                  you upload,                                             every push
                                  or v0 pushes

        Your chatbot                                           GitHub                                               Vercel

Drafts and changes the files.                    Stores the project and its history, in                Hosts the published version at a
ChatGPT, Claude, Gemini, or v0.                  your account.                                         URL anyone can open.

                                                 tracks every change underneath GitHub. You won’t
                                        Git
                                                 type a Git command today.

                             DESCRIBE    ·    PLAN     ·   BUILD    ·   CHECK    ·   SAVE     ·     PUBLISH
```

Notes: 9:18–9:19. Four tools, four jobs. The chatbot drafts and changes the files. Git tracks changes underneath; you won’t type a Git command today. GitHub stores the project and its history in your account. Vercel hosts the published version. People mix up Git and GitHub all day: GitHub is the website that stores it, Git is the tracking underneath. Today you only touch GitHub. Watch for: confusing GitHub with Git. GitHub is the website that stores it; Git is the tracking underneath. Today you only touch GitHub. Gate: everyone can say what GitHub is for and what Vercel is for.

## 20 · Block 1: four words you will hear all day

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                                             9:00 – 9:20

Four words you’ll hear all day.

Repository                             The project folder and its whole history.

Commit                                 A named checkpoint. “Added my About section.”

Branch                                 A separate line of changes that never touches the live one.

Pull request                           A proposed change for review, with a preview, before it goes live.

On the projector: one heading change, and the difference from the earlier version.

                                 DESCRIBE    ·   PLAN   ·    BUILD   ·   CHECK       ·   SAVE   ·   PUBLISH
```

Notes: 9:18–9:19. Four words. Repository: the project folder and its whole history. Commit: a named checkpoint, like “Added my About section.” Branch: a separate line of changes you can try without touching the live one. Pull request: a proposed change for review, with a preview, before it goes live. Now I show one small heading change on the projector and the difference from the earlier version. That’s the whole mechanism. Everything else today is this, repeated. Watch for: eyes glazing at vocabulary. The projector demo is the fix; don’t skip it. Gate: everyone can say what GitHub is for and what Vercel is for.

## 21 · Block 1: where do these four go?

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                                                9:00 – 9:20

Where do these four go on the loop?
1 Choose the website’s audience
2 Describe what its button does
3 Test the game’s Restart
4 Publish a checked version

 DESCRIBE             PLAN           BUILD                CHECK         SAVE   PUBLISH

                                    and again, for the next increment
```

Notes: 9:19–9:20. One minute of participation. Put four actions on the loop: choose the website’s audience, describe what its button does, test the game’s restart, publish a checked version. Call on four tables. Don’t wait for hands; pick a table and ask. Watch for: nobody answering. Pick a table by name; don’t wait for volunteers. Gate: everyone can place “test the restart” and “publish a checked version” on the loop.

## 22 · Block 1: is it finished?

```
BLOCK 1 · HOW SOFTWARE GETS BUILT                  9:00 – 9:20

Is a beautiful game with wrong scoring finished?

THE SENTENCE FOR THE DAY

Describe the outcome, build in small steps, check
the evidence, save progress.
```

Notes: 9:19–9:20. Then the question: a beautiful game with incorrect scoring, is it finished? No. Working beats pretty, every time today. I’ve shipped pretty things that didn’t work, and I’d rather not do it again in front of you. Close the block with the sentence on the slide, out loud, and we go look at the map of tools. Watch for: someone arguing for pretty. Pretty is this afternoon at 3:00; working comes first. Gate: everyone can place “test the restart” and “publish a checked version” on the loop.

## 23 · The map of tools: where your code lives afterward

```
  THE MAP OF TOOLS · DOCS/PLATFORM-LANDSCAPE.MD                                                                                                            9:20 – 9:30

  Eight tools, one line: where does your code live afterward?
  Placed by the “Your GitHub?” column of the landscape doc. Prices and menus drift; the line doesn’t.

  ◀   HOSTED BUILDER · their code, their servers                                                                                     YOUR REPO · your Vercel           ▶

         Emergent                            Google AI Studio                            Bolt.new                                    v0

GitHub only on paid plans; which                                                Two-way sync; imports a repo you       Branch and pull request into your
    way it syncs is unverified          Push, import, or download a ZIP                  already have                    repo; deploys to your Vercel

                               Base44                                     Lovable                             Replit                               Claude Code
                                                                                                                                                  Codex · Cursor
                  Code syncs; your data and backend          Two-way sync, one branch, every      Two-way through its own Git pane
                           stay on Base44                                 plan                                                               It is your folder. You make the
                                                                                                                                                          commit.
```

Notes: 9:20–9:25. Every tool on this line turns a sentence into a working app. The demo is never the difference; where your code lives afterward is. Left end: the builder keeps code and data on its servers. Right end: a repository you own, deployed to your Vercel. Emergent and Base44 sit left: code comes out, data and backend stay. Lovable, Bolt, and Replit sync two ways with a repository you own. v0, today’s tool, commits to a branch, opens a pull request, and deploys to your Vercel. Claude Code, Codex, and Cursor: it’s your folder. None is a bad tool. Read the line before you pay. Watch for: people asking which one is best. Ask them where they want the code to live next month. Gate: everyone can point at the spot on the line where their code would live.

## 24 · The map of tools: the one question and three facts

```
THE MAP OF TOOLS · DOCS/PLATFORM-LANDSCAPE.MD                                                                        9:20 – 9:30

The one question to ask any tool.

“Where does my code live afterward, and can I take it
with me?”
THREE CAUTIONARY FACTS, VERIFIED, WITH DATES

July 18, 2025          Replit’s agent deleted a production database during a code freeze. Rollback worked. Replit now separates
                       development and production databases.

May 30, 2025           CVE-2025-48757: one in ten scanned Lovable apps had a database anyone could read or write. Lovable
                       added a pre-publish scan.

June 18, 2025          Wix bought Base44, six months after launch, for about $80 million. The product you build on can change
                       owners.
```

Notes: 9:25–9:30. One question to ask any tool, any sales rep, any demo: where does my code live afterward, and can I take it with me? Three facts, all verified, with dates. July 2025: Replit’s agent deleted a production database during a code freeze; rollback worked, the CEO called it unacceptable, and Replit now separates development and production. May 2025: one in ten scanned Lovable apps had a database anyone could read; Lovable added a pre-publish scan. June 2025: Wix bought Base44 six months after launch. None of these is a reason to avoid the tools. They’re the reasons for GitHub, your own secrets, and reading the diff, which is the rest of today. docs/platform-landscape.md has the prices and the sources. Watch for: this turning into a vendor fight. Receipts, then move on. Gate: everyone can say the question out loud.

## 25 · Setup: your three accounts, one loop

```
BLOCK 2 · SETUP                                                                                                       9:30 – 9:55

Three accounts, one loop.
v0 writes, GitHub remembers, Vercel ships. Nothing is installed on your laptop.

                                    pushes the code                         deploys every push

                    v0                                   GitHub                                     Vercel

        Writes the code you describe              Remembers every version of              Ships every push as a live URL
                                                         every file
         v0.app · sign in with GitHub                  github.com · free                  vercel.com · sign in with GitHub

                                  you open the URL on your phone and describe the next change
```

Notes: 9:30–9:32. Three accounts, and they chain together. GitHub is the system of record: every version of every file, in your name. v0 writes the code: you describe, it generates a working app, and it comes with a free Vercel account, so sign in with GitHub and you’ve got it. Vercel ships: every push to GitHub becomes a live URL. The arrow runs left to right and loops back: v0 pushes to GitHub, GitHub triggers Vercel, you look at the URL and describe the next change. Most of you made these accounts in the prework; the next slides confirm each one works. Watch for: people with a Vercel account under a different email than GitHub. Sign in to Vercel with GitHub so the two are linked. Gate: everyone can point at the three tabs in their browser.

## 26 · Setup: GitHub repository

```
BLOCK 2 · SETUP                                                                                                   9:30 – 9:55

GitHub: one empty repository with your name on it.
Done when: you open your repository, read the README, and the owner shown is you, not me.

1 Open github.com, signed in. Click “+” then “New repository.”

2 Owner: you. Name: my-first-site. Public or private, on purpose.

3 Tick “Add a README.” Click “Create repository.”

4 Copy the repository URL into your notes. This is your project.

This afternoon the game gets its own repository, my-first-game. Never this one.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 9:32–9:36. Everyone makes one empty repository now. Plus, New repository. You’re the owner. Name it my-first-site. Initialize it with a README so there’s a first saved file. Pick public or private on purpose; private doesn’t make the website private, Vercel decides that. Copy the URL into your notes. The game gets its own repository this afternoon, my-first-game. Don’t put the game in this one. Watch for: two-factor prompts and organization accounts. Use a personal account. If GitHub wants a code, that’s normal; the student types it, not the helper. Gate: you can open your repository, read the README, and the owner is your account.

## 27 · A ten-minute tour of GitHub: the six screens

```
BLOCK 2 · SETUP                                                                                                             9:30 – 9:55

A ten-minute tour of GitHub: six screens, in this order.

                                        1                                              2                                                3

 Home · the Code tab                        Commits                                        A commit
 The file list, the README, the green       The history: one row per saved change,         The diff: green lines added, red lines
 Code button, Add file.                     with its message.                              removed.

                                        4                                              5                                                6

 Branches                                   Pull requests                                  Settings
 The dropdown that says main. Type a        Review a branch, then merge it. Or close       Public or private. Collaborators. Nothing
 name to make a safe copy.                  it: no.                                        asks for your password except delete.
```

Notes: 9:36–9:38. Six screens, in the order you’ll meet them, on the projector in my own repository. Home is the Code tab: the file list, the README, Add file. Commits is the history, one row per saved change. Click a row and you get the diff: green added, red removed. The branch dropdown says main; type a new name and GitHub offers to make a branch. Pull requests is where a branch gets reviewed and merged. Settings holds visibility and collaborators; nothing in there asks for your password except delete, and you’ll never need delete today. That’s the whole interface you need. Watch for: people clicking Clone or the Actions tab. Not today. Gate: everyone can name the six screens.

## 28 · A ten-minute tour of GitHub: do it once yourself

```
BLOCK 2 · SETUP                                                                                                   9:30 – 9:55

Do the tour once yourself. Five steps.
Done when: Commits shows two rows in your repository and you have opened one diff.

1 Create my-first-site with a README. You just did this.

2 Upload one starter from website-starters/ with “Add file” → “Upload files.” Message: “Add starter page.”

3 Open Commits, open that commit, find your file in the diff.

4 Edit the README in the browser: one line that says what the site will be. Commit it.

5 Open Commits again. Two rows. That was the loop with no chatbot: change, save, history.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 9:38–9:41. Now you. Five steps. You already made my-first-site with a README; that’s step one done. Upload one of the website starters from website-starters/ with the message “Add starter page.” Open Commits, open that commit, find your file in the diff. Edit the README in the browser: one line that says what the site will be. Commit it. Open Commits again. Two rows. You just ran the loop with no chatbot: change, save, history. If every message in Commits says “Update index.html,” that’s a lesson for your prompts later: ask for a message that says what changed. Watch for: the upload landing in a folder, or the commit message left blank. Gate: two commits in your own repository, and you have opened the diff of one.

## 29 · The one rule that never bends

```
THE ONE RULE · DOCS/SECRETS-TOKENS-AND-THE-CLIPBOARD.MD   9:41 – 9:43

Nothing that unlocks an account goes
into a chat window. Ever.
```

Notes: 9:41–9:42. Say it with me: nothing that unlocks an account goes into a chat window. Ever. Not your password, not a key, not a token. Chats get logged, summarized, shared, and trained on. An agent that read your key may write it into a file, that file may land in GitHub, and bots read GitHub for exactly that within minutes. Today needs almost no secrets; GitHub, Vercel, and v0 sign you in through Authorize screens, which is the safe pattern. You approve, they swap tokens between themselves, and you never touch one. Watch for: someone who already pasted a key into a chatbot this year. Rotate it tonight. Gate: everyone can say the rule in one sentence.

## 30 · The one rule: where secrets live, and the clipboard move

```
THE ONE RULE · DOCS/SECRETS-TOKENS-AND-THE-CLIPBOARD.MD                                                  9:41 – 9:43

Where a secret lives. Where it never goes.
YES                                                         NEVER

Your password manager: the source of truth.                 A chat window.
Vercel → your project → Settings → Environment Variables.   The code, a README, a commit message, an issue.
A .env.local file, if .gitignore lists it.                  A screenshot, a slide, a shared doc.

THE CLIPBOARD MOVE: COPY THE KEY, THEN ONE COMMAND MOVES IT. THE AGENT NEVER SEES IT.

pbpaste | vercel env add RESEND_API_KEY production

   ASK FOR THE COMMAND, NOT THE VALUE · VERBATIM

   I have the Resend API key on my clipboard. Give me the one command that saves it into .env.local
   as RESEND_API_KEY using pbpaste, and the line to add to .gitignore. Do not ask me to paste the
   key.
```

Notes: 9:42–9:43. Where secrets live: your password manager, your Vercel project’s environment variables, a .env.local file that’s in .gitignore. Where they never go: a chat window, the code, a README, a commit message, a screenshot. The first time you need one today is the skills-menu contact form. The clipboard move: copy the key from your password manager, and one command moves it from the clipboard into Vercel. Your eyes see it; the agent never does. Don’t type that command from memory; ask for it with the prompt on the screen. If the agent says “paste your key here,” say no. Composio, authorize-don’t-paste for Slack and Gmail, is the sprint 3 bonus if most tables have published by 4:50. Watch for: “but it’s just a test key.” Same rule. Gate: everyone can name one Yes place and one Never place.

## 31 · Setup: Vercel and v0

```
BLOCK 2 · SETUP                                                                                                   9:30 – 9:55

Vercel and v0: sign in with GitHub, then stop.
Done when: Vercel and v0 both show your GitHub account, my-first-site is in the import list, nothing is deployed.

1 vercel.com → “Continue with GitHub.” Authorize it in Vercel’s own window.

2 Let Vercel see my-first-site. Check it appears under “Add New” → “Project.” Don’t import.

3 v0.app → sign in. Find the GitHub option, grant “only select repositories,” pick my-first-site.

4 Stop. Nothing deployed, nothing generated. We build at 10:00.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 9:43–9:48. Vercel’s the host and v0 comes with it. Sign in to Vercel with GitHub; that links the two and lets Vercel see your repository. Authorize the GitHub integration for my-first-site when it asks. Then open v0.app and sign in with the same account; it’s included with the free Vercel plan. Then stop. Don’t import, don’t deploy, don’t generate anything yet. Vercel Hobby is for noncommercial personal use. A site about you is fine today. A business site needs a paid plan later. Watch for: Vercel asking for a team name or a plan. Personal account, Hobby, no card. v0 showing a different account than Vercel: sign out and back in with GitHub. Gate: signed in to Vercel and v0 with the same GitHub account; my-first-site visible in the import list; nothing deployed.

## 32 · Setup: two ways to build today

```
BLOCK 2 · SETUP                                                                                                             9:30 – 9:55

Two ways to build. Same prompts, same checks.
Pick one by 10:00 and write it at the top of your notes. Stay on it until lunch.

THE V0 ROUTE · FEATURED

                                                                                                             Connect to GitHub: my-
  Describe in the v0 chat           Live preview, a React app                    Click Deploy
                                                                                                                   first-site

Every version lands in your repository. Hand v0 the example as the style reference and your template as the content.

THE PORTABLE ROUTE · ANY CHATBOT THAT RETURNS FILES

ChatGPT, Claude, Gemini,                                                 Upload to GitHub in the
                                        Save as index.html                                                       Import in Vercel
        Copilot                                                                 browser

Every example and checkpoint is one HTML file; it works here as is. Claude Code or Codex: same route, and you review the pull request.

                                DESCRIBE    ·   PLAN    ·   BUILD    ·   CHECK    ·   SAVE   ·   PUBLISH
```

Notes: 9:48–9:51. Two ways to build, same prompts, same checks. v0 is featured: describe in the v0 chat, it generates a React app with a live preview, click Deploy, connect it to GitHub so every version gets pushed there. The portable route is any chatbot that returns files: ChatGPT, Claude, Gemini, Copilot. Save index.html, upload to GitHub in the browser, import in Vercel. The examples and checkpoints are single HTML files; they work as is on the portable route. v0 produces a React app, so you hand it the example as the style reference and your resume template as the content. Claude Code or Codex? Connected portable route; you review the pull request. Watch for: people switching routes mid-morning. Pick one by 10:00, stay on it until lunch. Gate: every pair has written their route at the top of their notes.

## 33 · Setup: the capability check

```
BLOCK 2 · SETUP                                                                                                           9:30 – 9:55

Prove your route works now, not at 11:30.
  CONNECTED ROUTE (CLAUDE CODE, CODEX) · TYPE THIS, VERBATIM

  Identify the GitHub account, repository, and branch for this class project. Read the README. Tell
  me which of these you can actually do here: edit project files, run checks, create a branch or
  pull request, and inspect Vercel deployments. Distinguish what you verified from what you have
  not tried. Do not change the repository or deploy anything yet.

V0 AND PORTABLE ROUTES: THE CHECK

1 v0: ask for a one-screen page that says hello with your name. Don’t deploy.
2 Portable: ask for a one-line index.html that says hello. Save as index.html, “All files” type. Double-click it: your name shows in
the browser.
3 Something fails? Write down the exact message and move on. Helpers fix accounts at the break.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 9:51–9:55. Prove the route works before you need it. Connected route: paste the prompt on the slide. The answer has to separate what it verified from what it hasn’t tried. Then ask it for a one-sentence README improvement, look at the difference, and save it through the pull request. Portable route: ask your chatbot for a one-line index.html that says hello with your name, save it as index.html, double-click it. If your name shows in the browser, your route works. If something fails, write down the exact failure. We don’t fix accounts for twenty minutes. Watch for: the file saved as index.html.txt on Windows. Save with “All files” type. That’s stuck.md row two. Gate: green sticky when your route produced a file you opened, or a saved README change.

## 34 · Plan first: the right size model for each job

```
PLAN FIRST · DOCS/PLAN-FIRST-AND-MODELS.MD                                                                                                9:55 – 10:00

Plan with the biggest model, build with the middle, tidy with the
smallest.
   PLAN The biggest, thinking model

The brief, the scope, the plan, reviewing a diff, deciding what to cut, getting unstuck     Claude Opus-class · ChatGPT thinking or pro · Gemini Pro
after ten minutes.

   BUILD The middle model

Generate the files, make one change, add one feature from a skill.                          Claude Sonnet-class · the standard ChatGPT model · Gemini
                                                                                            Flash with thinking on

   TIDY The smallest, fastest model

Rename things, write alt text, summarize an error message, draft a commit message,          Claude Haiku-class · the ChatGPT mini tier · Gemini Flash-Lite
reformat a list.
Claude Code: Shift+Tab until the prompt says plan. ChatGPT and Claude.ai: the thinking model in the selector, then the plan prompt.

                                  DESCRIBE    ·    PLAN    ·   BUILD    ·   CHECK    ·    SAVE    ·    PUBLISH
```

Notes: 9:55–10:00. Five minutes, two habits. First, make it tell you the plan before it touches a file. Claude Code: Shift+Tab until the prompt says plan; it can’t change files until you approve. ChatGPT and Claude.ai: pick the thinking model in the selector, then type the plan prompt from the Plan step. Second, spend your best model on the plan and cheaper ones after. Biggest, thinking model: the brief, the plan, reading a diff, getting unstuck. Middle: generate the files, make one change. Smallest: rename things, alt text, commit messages. Only one model on a free plan? Use its thinking option for the plan, off for chores. Names drift; the sizes don’t. Watch for: people hunting for the toggle for five minutes. The prompt alone does the job. Gate: everyone knows where the thinking toggle is in their own chatbot.

## 35 · Project 1: what done looks like

```
PROJECT 1 · PERSONAL WEBSITE · STEP 0 · WHAT DONE LOOKS LIKE                                                      10:00 – 11:45

Meet Jordan Rivera. Jordan isn’t real.
                                                                                       examples/personal-website/index.html

                                                                                       One file. Opens by double-click.

                                                                                       Six color themes, two layouts, a
                                                                                       picker in the footer.

                                                                                       Prints as a tidy resume.

                                                                                       By 11:45 every word on it is yours.

slate · centered                        ocean · sidebar

                         DESCRIBE   ·    PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 10:00–10:03. This is Jordan Rivera. Jordan doesn’t exist. This is the tested example in examples/personal-website, and by 11:45 every word on it is yours and it’s live. Six color themes and two layouts are built in; the picker’s in the footer. It prints as a resume, and the ADD-ON SLOT comments mark where the afternoon features go. Click through the themes on the big screen so people see the range. Time inside this block: export 10, content 20, build 30, colors 10, publish 20. Then we go get your content out of LinkedIn. Watch for: people wanting a different design. Today you change the words, the colors, and the layout. The structure is tested; keep it. Gate: everyone has opened the example index.html from the course folder.

## 36 · Step 1: get your content out of LinkedIn

```
PROJECT 1 · PERSONAL WEBSITE · STEP 1 · EXPORT                                                                                     10:03 – 10:13

Get your content out of LinkedIn.
Done when: you can see your name, headline, and at least two roles in the PDF or the template.

ROUTE A · THE QUICK PDF                             ROUTE B · THE FULL EXPORT                           NO LINKEDIN, OR IT WON’T EXPORT?

1 Your own profile. Below the                       1 Your photo → Settings & Privacy →                 Open examples/personal-website/
headline, “More” (sometimes                         Data privacy → “Get a copy of your                  resume-template.md and type your
“Resources”).                                       data.”                                              details in.
2 Choose “Save to PDF.” Profile.pdf                 2 Choose the smaller option: profile,               Fifteen minutes of typing beats fifteen
downloads.                                          positions, education, skills.                       minutes of fighting a menu.
3 That’s your resume for today.                     3 LinkedIn emails a link in about ten
                                                    minutes. Start it now.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·    PUBLISH
```

Notes: 10:03–10:13. Ten minutes. Route A is the quick one: your own profile, the More button, sometimes labeled Resources, then Save to PDF. A file called Profile.pdf downloads. That’s your resume for today. Route B is the full export from Settings and Privacy; it emails you a link in about ten minutes, so start it now if you want your skills as text, and keep working on Route A meanwhile. No LinkedIn, or it won’t export? Open resume-template.md and type. Fifteen minutes of typing beats fifteen minutes of fighting a menu. Watch for: the menu label moving. Look for the words, not the position. Helpers have done this on a current account. Gate: you can open the PDF or the template and see your name, headline, and at least two roles.

## 37 · Step 2: decide what stays private

```
PROJECT 1 · PERSONAL WEBSITE · STEP 2 · PRIVACY PASS                                                10:13 – 10:18

The site is public. So is the chat.
Can’t edit the PDF? The next prompt leaves these out. Check its output anyway.

REMOVE BEFORE THE CHATBOT SEES IT                                 KEEP

Phone number, street address, birth date.                         Name, city, and headline.

ID numbers, salary, anything about health or family.              Work history, with outcomes.

Email addresses you don’t want strangers using.                   Skills and education.

Anything a former employer would call confidential.               Public links.

                            DESCRIBE   ·   PLAN   ·   BUILD   ·    CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 10:13–10:18. Five minutes, and it matters. The site is public and so is the chat you’re about to paste into. Before the chatbot sees your content, take out: phone number, street address, birth date, ID numbers, salary, anything about health or family, email addresses you don’t want strangers using, anything a former employer would call confidential. Keep: name, city, headline, work history with outcomes, skills, education, public links. Can’t edit the PDF? The next prompt leaves those out; check anyway. This is the step where people feel exposed. That’s fair. You decide what the world sees, and you can take anything down later. Watch for: the phone number sitting in the PDF header. LinkedIn puts it there. Check. Gate: everyone has read their export once with the red list in hand.

## 38 · Step 3: turn the export into site content

```
PROJECT 1 · PERSONAL WEBSITE · STEP 3 · CONTENT                                                                   10:18 – 10:38

Turn your export into site content.
Done when: resume-template.md is filled, with no placeholders and nothing you wouldn’t say to a stranger.

  ATTACH YOUR RESUME PDF + resume-template.md · TYPE THIS, VERBATIM

  Read my attached resume and fill in resume-template.md with my real information only. Do not
  invent anything. Leave a field blank if the resume does not say. Rewrite each job as a title,
  employer, dates, and two or three bullets that state what changed because of my work, in plain
  English. Draft a three-paragraph About section in first person that sounds like a person, not a
  brochure. Leave out my phone number, street address, and birth date. Show me the result; do not
  build the site yet.

THEN YOU DO THE EXPERT PART

Read every line. Fix dates. Fix titles. Cut anything that sounds like a press release.
If it invented something, say so and ask again.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 10:18–10:38. Twenty minutes. Open the vc-project-brief skill, attach your resume PDF or the typed template, attach resume-template.md for the shape, and type the prompt exactly. It fills the template; it doesn’t build the site yet. Then you read every line. Think of the chatbot as a new hire on day one: smart, fast, and it has never met you. You’d read everything they wrote about you before it went out. Fix dates. Fix titles. Cut anything that sounds like a press release. This is the one step today where you’re the expert and the chatbot is not. Watch for: invented jobs and dates. Stuck.md row five: “Use only facts from my resume. Leave blanks blank. Do not invent.” Gate: a completed resume-template.md with no placeholders and nothing you would not say to a stranger.

## 39 · Step 4: build the first version

```
PROJECT 1 · PERSONAL WEBSITE · STEP 4 · BUILD                                                                     10:38 – 10:45 · 11:00

One prompt, one complete file back.
Done when: your name is in the tab, three roles are visible, every link works, and nothing says “Jordan.”

  ATTACH THE EXAMPLE index.html + YOUR resume-template.md · VERBATIM

  Using the attached index.html as the exact structure and style, replace all of Jordan Rivera's
  content with mine from resume-template.md. Keep every id, every CUSTOMIZE comment, every ADD-ON
  SLOT comment, the theme and layout system, and the print stylesheet. Delete the Projects section
  if my template has nothing for it. Return the complete file.

THEN CHECK IT

1 Save as index.html. Double-click it.
2 Send it to your phone and open it there.
3 Search the page for “Jordan.” Find nothing.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 10:38–10:45, continues at 11:00. Now the build. Use vc-build-small. Attach the example index.html and your completed template. Type the prompt exactly. The point of “keep every id, every CUSTOMIZE comment, every ADD-ON SLOT comment” is that the file stays compatible with the themes, the print stylesheet, and the afternoon features. Open the result by double-clicking it. Send it to your phone if you can. We break at 10:45; if your file isn’t open yet, that’s the first thing after the break. Watch for: a fragment instead of a whole file. Stuck.md row one: “Return the complete index.html file, every line, nothing omitted.” Gate: your name in the browser tab, three roles visible, every link goes where it should, and nothing says “Jordan.”

## 40 · Step 4 on the v0 route: first generation

```
PROJECT 1 · PERSONAL WEBSITE · STEP 4 · BUILD · V0 ROUTE                                                          10:38 – 10:45 · 11:00

On v0: one generation, then check facts before looks.

  ATTACH resume-template.md + THE EXAMPLE index.html AS STYLE REFERENCE · VERBATIM

  Build a one-page personal website from the attached resume-template.md. Use only the facts in it;
  invent nothing and leave blank fields out. Match the structure and restraint of the attached
  index.html: header with name and nav, hero with name, headline, city, and three link buttons,
  About, Experience, Skills, Education, optional Projects, Contact with a mailto link, footer. Use
  the "slate" palette from the reference as CSS variables so I can change colors later. No contact
  form yet. No images. Fits a phone. Readable code with short comments.

THEN CHECK THE PREVIEW

1 Your name, your three roles, every link. Fix facts before you fix looks.
2 Something you didn’t ask for? “Version 1 has no form, no database, no sign-in.”
3 Don’t press Deploy yet. That’s 11:20.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 10:38–10:45, continues at 11:00. v0 route. v0 needs content, not a PDF, so steps 1 to 3 were the same. Attach your completed resume-template.md and, as a style reference, the example index.html. Type the prompt exactly. v0 writes a React app and shows a preview. Look at the preview: your name, your three roles, every link. Fix facts before you fix looks. The CSS variables line lets you change colors in one request at 11:00. Don’t press Deploy yet; that’s the 11:20 slide. Watch for: v0 inventing a quote or a testimonial. “Remove everything not in resume-template.md. Use only my facts.” And v0 adding a form or sign-in: “Version 1 has no form, no database, no sign-in.” Gate: a preview with your name, three roles, and every link right. Same gate as the portable route.

## 41 · Break

```
BREAK

10:45 – 11:00
Back at 11:00 sharp. Stickies up when you sit down.

WHEN YOU SIT BACK DOWN, HAVE THIS

1 index.html open in your browser with your name in the tab
2 Nothing on the page says “Jordan”
3 If not: the first ten minutes after the break are yours, helpers circulate
```

Notes: 10:45–11:00. Fifteen minutes. Helpers go to every red sticky and every laptop that failed setup. Anyone without a file open yet gets the fallback: download the finished example, replace only the hero and About sections with your own words, and we publish that. A live page with three sections beats a perfect page still on your laptop. Watch for: people skipping the break to fight the chatbot. Send them out; the helper takes the laptop. Gate: at 11:00 every pair has an index.html that opens.

## 42 · Step 5: choose your colors

```
 PROJECT 1 · PERSONAL WEBSITE · STEP 5 · COLORS                                                                                              11:00 – 11:08

 Six themes built in. Try three, pick one.
 Use the picker in the footer, or add this to the end of the address: ?theme=forest&layout=sidebar

   Your Name                 Your Name                 Your Name                      Your Name                   Your Name             Your Name
   Headline, city            Headline, city            Headline, city                 Headline, city              Headline, city        Headline, city

      Email                    Email                     Email                          Email                       Email                 Email

        slate                    forest                    sunset                          ocean                        mono                  plum
Most professions; the safe   Health, education,       Creative and people-          Technology, consulting    Design, writing, anyone   Marketing, events,
         default               sustainability             facing roles                                          who wants it quiet          speakers

 Want a palette that is yours? Pick one color, ask for background, text, and accent that pass contrast checks, and write the three hex codes
 in project-state.md.

                                       DESCRIBE   ·   PLAN      ·       BUILD   ·     CHECK      ·     SAVE   ·    PUBLISH
```

Notes: 11:00–11:08. Eight minutes, and it’s the fun part. Six themes are built in; the chips are the real colors, point at them. Use the picker in the footer, or add ?theme=forest to the end of the address. Try three. Pick one. Want a palette that’s actually yours? Pick one color, ask for a background, text, and accent that pass contrast checks, and write the three hex codes in project-state.md so the next chat doesn’t drift. Watch for: people spending the whole eight minutes picking. Two minutes to choose; the prompt two slides on locks it in. Gate: everyone can say their theme id and layout out loud.

## 43 · Step 5: two layouts

```
PROJECT 1 · PERSONAL WEBSITE · STEP 5 · LAYOUT                                                                                        11:08 – 11:12

Two layouts. Centered or sidebar.

                                                                                                         Pick one. Both are tested.

                                                                                                         Want to change more than the palette?
                                                                                                         Sketch on one of these first and paste
                                                                                                         the sketch into your prompt.

                                                                  sidebar
                                              Name, links, and skills stay visible on a laptop.
                                                          Centered on a phone.

           centered
  Reads top to bottom. Same on a
       phone and a laptop.

                                   DESCRIBE     ·    PLAN     ·    BUILD      ·    CHECK     ·    SAVE    ·   PUBLISH
```

Notes: 11:08–11:12. Two layouts, drawn as boxes and labels in docs/wireframes. Centered reads top to bottom and looks the same on a phone and a laptop. Sidebar keeps your name, links, and skills visible on a laptop and collapses to centered on a phone. If you want to change more than the palette, sketch on one of these first and paste the sketch into your prompt. Most of you won’t; you’ll pick one and lock it in on the next slide. Watch for: people redesigning. Two layouts, both tested. Pick one. Gate: the page looks the same after a reload with no ?theme= in the address, and the footer picker is gone.

## 44 · Step 5: the lock-in prompt, portable route

```
PROJECT 1 · PERSONAL WEBSITE · STEP 5 · LOCK IT IN                                                           11:08 – 11:12

One prompt locks your choice in.
Done when: you reload with no ?theme= in the address, the look is the same, and the footer picker is gone.

  PORTABLE ROUTE · REPLACE THE THREE BRACKETS · VERBATIM

  Set the theme to [ocean] and the layout to [sidebar] permanently, remove the footer
  picker, and change the accent color to [#0B6E4F]. Change nothing else. Return the
  complete file.

“Change nothing else” is the sentence that matters. It is the difference between one edit and a rewrite.

                             DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 11:08–11:12. One prompt locks your theme and layout in. Portable route: replace the three bracketed parts and type it. “Change nothing else” is the important sentence; it’s the difference between one edit and a rewrite. Watch for: the chatbot rewriting the whole file. Stuck.md row three: go back to the saved copy, ask for one change, add “Change nothing else.” Gate: the page looks the same after a reload with no ?theme= in the address, and the footer picker is gone.

## 45 · Step 5: the lock-in prompt, v0 route

```
PROJECT 1 · PERSONAL WEBSITE · STEP 5 · LOCK IT IN · V0 ROUTE                                     11:08 – 11:12

On v0: your three hex codes, one request.
Done when: the preview shows your colors and nothing else moved.

  v0 ROUTE · YOUR THREE HEX CODES · VERBATIM

  Change only the colors: background #F6F3EE, text #1C2330, accent #0B6E4F. Change
  nothing else.

                           DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 11:08–11:12. v0 route, same idea: your three hex codes in one request. “Change nothing else” does the same job here; without it v0 restyles the layout along with the colors. Check the preview, then move on. Watch for: v0 changing the layout along with the colors. Go back one version and ask again with the sentence. Gate: the colors are yours in the preview and nothing else moved.

## 46 · Step 6: check before you publish, first three

```
PROJECT 1 · PERSONAL WEBSITE · STEP 6 · CHECK                                                                     11:12 – 11:20

Six checks before it goes public. First three.
Your eyes, not the chatbot’s word. Tick each one only when you saw it.

       1      Every link opens the right place, including the mailto link.

       2      The page fits a phone with no sideways scrolling.

       3      Print preview shows a tidy resume with no buttons.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 11:12–11:20. Run vc-quality-check, but do these six with your own eyes first. The chatbot’s word is not a check. Every link opens the right place, including the mailto. The page fits a phone with no sideways scrolling. Print preview shows a tidy resume with no buttons. Three more on the next slide. Watch for: sideways scrolling on a phone. Stuck.md row eight: “Make it fit a 375 pixel wide screen with no sideways scrolling. Change nothing else.” Gate: six green checks on your sheet, or the failed one written down with what you saw.

## 47 · Step 6: check before you publish, last three

```
PROJECT 1 · PERSONAL WEBSITE · STEP 6 · CHECK                                                                     11:12 – 11:20

Six checks before it goes public. Last three.
One fails? Say exactly what you saw, ask for the smallest fix, re-check that one thing.

       4      Search the file for “Jordan”, “Bright Harbor”, and “example”. Find nothing.

       5      Nothing private is in the file, including in comments.

       6      It opens on a classmate’s phone, not just yours.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 11:12–11:20. Search the file for Jordan, Bright Harbor, and example, and find nothing. Nothing private is in the file, including in the comments. And the sixth, the one that counts: it opens on someone else’s phone. Pairs swap phones. If one fails, say exactly what you saw, ask for the smallest fix, and re-check that one thing. Publish only what passed. Watch for: people skipping the phone swap. That one is the real check. Gate: six green checks on your sheet, or the failed one written down with what you saw.

## 48 · Step 6: save to GitHub

```
PROJECT 1 · PERSONAL WEBSITE · STEP 6 · SAVE                                                                      11:20 – 11:30

Save it: upload index.html to GitHub.
v0 route: click Deploy, then connect the project to GitHub. Every version is pushed to my-first-site. Skip the steps below.

1 Open my-first-site. “Add file” → “Upload files.”

2 Choose index.html itself. Not a ZIP. Not a folder.

3 Commit message: “First version of my site.” Commit to main.

4 Refresh. index.html is at the top level, lowercase.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 11:20–11:30. Ten minutes and deliverable one. v0 route: click Deploy, then connect the project to GitHub, and you’re done with this slide. Portable route: follow the setup guide, don’t improvise. Open my-first-site. Add file, Upload files. Choose index.html itself, not a ZIP, not a folder. Commit message like “First version of my site,” commit to main. Refresh and make sure index.html sits at the top level, lowercase. That’s the save. Watch for: a ZIP or a folder uploaded instead of the file. index.html itself, at the top level. Gate: a live *.vercel.app address open on someone else’s phone, recorded in project-state.md.

## 49 · Step 6: publish on Vercel

```
PROJECT 1 · PERSONAL WEBSITE · STEP 6 · PUBLISH                                                                   11:20 – 11:30

Publish it: import my-first-site in Vercel.
Deliverable one: a live *.vercel.app address that opens on someone else’s phone.

1 “Add New” → “Project” → Import my-first-site.

2 Framework preset: Other. Build Command: override on, leave empty. Output: repository root.

3 Deploy. Wait for the green check. Click Visit.

4 Open the URL on a classmate’s phone. Record it in project-state.md.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 11:20–11:30. Vercel: Add New, Project, import my-first-site. Framework preset Other. Turn on the Build Command override and leave it empty. Output is the repository root. Deploy. Wait for the green check and click Visit. Open the URL and hand your phone to the person next to you. Write the URL in project-state.md. That’s the gate for lunch. If we’re behind, I drop sprint 1; a live URL by 11:45 is what matters. Watch for: Vercel 404. Stuck.md: index.html must be at the top level, lowercase. Old version showing: refresh GitHub, wait a minute, hard refresh. Gate: a live *.vercel.app address open on someone else’s phone, recorded in project-state.md.

## 50 · Reading what the agent wrote 1: a commit and a diff

```
READING WHAT THE AGENT WROTE · 1 OF 3 · 15 MIN TOTAL                                                            11:30 – 11:35

A diff shows what the agent changed.
                                                                   READ IT IN THIS ORDER
    <h1>Jordan Rivera</h1>
  - <p>Operations Manager who turns messy…</p>
                                                                   1 The message                Does it say what you asked
  + <p>Project lead for community programs…</p>
                                                                                                for? Not “Refactor site.”
    <p>Durham, North Carolina</p>
  - <a href="mailto:jordan@example.com">Email</a>                  2 The file names             Only the files you expected.
  + <a href="mailto:you@yourdomain.com">Email</a>                                               One index.html, not six.

                                                                   3 The lines                  Green added, red removed.
                                                                                                Read the red closely.

                         DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 11:30–11:35. Your site’s live and GitHub holds at least one commit. Open it on the projector. A commit is a named checkpoint; a diff is what changed between two checkpoints. Green added, red removed. Read it in this order: the message first, does it say what you asked for; the file names second, did it touch only the files you expected; the lines last, and only the red ones closely, because deletions are where the surprises hide. You don’t need to understand every line. You need to notice when the shape of the change doesn’t match the size of your request. Watch for: developers skimming. Ask one of them to read a diff aloud to everyone. Gate: everyone has opened one commit in their own repository and found the green and red.

## 51 · Reading what the agent wrote 2: the pull request

```
READING WHAT THE AGENT WROTE · 2 OF 3 · 15 MIN TOTAL                                                                             11:35 – 11:40

The pull request is the human checkpoint.
This afternoon: increment 2 of the game goes through a pull request. Every route.

                                                                                                            yes

         Branch                           Pull request                            Review                                    Merge

The agent works on a              “Here is what I propose.”             You read it: message, files,              Yes: it goes live in about a
separate line. The live site      The diff, the message, a              lines. You click the preview.             minute.
is untouched.                     preview URL.

                                                                                         no

                                                                  Close it. Ask for a smaller change. The
                                                                  branch and its files are still there.

                               DESCRIBE    ·   PLAN   ·   BUILD     ·   CHECK    ·    SAVE    ·    PUBLISH
```

Notes: 11:35–11:40. The pull request is the human checkpoint in the agent loop. The agent works on a branch, a separate line of changes. It opens a pull request: here’s what I propose. You review the diff, Vercel shows you a preview URL, and you merge or you say no. This afternoon you practice it: increment 2 of the game, the battle, is done on a branch and merged through a pull request. Everyone, including the v0 route. Watch for: people merging without opening the Files changed tab. The green button is not the review. Gate: everyone can name the four red flags.

## 52 · Reading what the agent wrote 2: four red flags

```
READING WHAT THE AGENT WROTE · 2 OF 3 · 15 MIN TOTAL                                               11:35 – 11:40

Four red flags. Any one of them means no.
Saying no costs one sentence: “Redo this with only what I asked for.”

      Changed files you did not ask about

      Deleted tests or checks

      Secrets or keys in the code

      A scope bigger than the prompt

                            DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 11:35–11:40. Four red flags that mean no. Files changed that you didn’t ask about. Tests or checks deleted. Secrets or keys in the code; that one stops everything, it must never be in a repository. A scope bigger than the prompt. Any one of them and you say no. Saying no feels rude the first time. It isn’t. It’s the job, and the agent has no feelings about it. Ask for a smaller change, or restore the previous version. Watch for: people merging without opening the Files changed tab. The green button is not the review. Gate: everyone can name the four red flags.

## 53 · Reading what the agent wrote 3: rollback

```
READING WHAT THE AGENT WROTE · 3 OF 3 · 15 MIN TOTAL                                                                 11:40 – 11:45

Nothing is lost if it’s in GitHub.
Never fix a broken file by hand. Go back to the last good version and ask for a smaller change.

GITHUB · REVERT                              V0 · RESTORE A VERSION                        VERCEL · PROMOTE

1 Open the merged pull request that          1 Every generation is a version. Open         1 Open the Deployments list.
broke it.                                    the history.
                                                                                           2 Pick an earlier successful deploy.
2 Click “Revert.” Merge the new pull         2 Restore the one that worked.
                                                                                           3 Promote it while you fix the new
request.
                                             3 Push; GitHub and the live URL               one.
3 Vercel ships the previous version.         follow.

                              DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·    PUBLISH
```

Notes: 11:40–11:45. Nothing is lost if it’s in GitHub. A merge that broke the site is one commit. Revert it: GitHub opens a new pull request that undoes it; merge it and Vercel ships the previous version. On v0, every generation is a version; open the history and restore the one that worked. Third way: promote an earlier good deploy in Vercel. The rule for the day: never fix a broken file by hand. Go back to the last good version and ask for a smaller change. I demonstrate one revert on the projector, on my own site, now. Watch for: people who “fixed it” by editing the live file in the chat until it half works. Back to the last good commit. Gate: everyone can find the Revert button on a merged pull request and the version history in v0.

## 54 · Skills 1: what a skill is

```
SKILLS · DOCS/SKILLS-GUIDE.MD                                                                              11:45 – 11:51

A skill is a folder with one file in it: SKILL.md.
Instructions you’d otherwise retype, saved once, so the next session and the next model behave the same.
 vc-plan-first/

 SKILL.md                                                The front matter: a name, and a description that says when to
  ---
                                                         use it. Put the trigger phrases in.
  name: vc-plan-first
  description: what it does, and the trigger phrases
  ---
                                                         The body: six parts, in this order.

  1   Who you’re helping and what the job is             Open skills/vc-plan-first/SKILL.md. That exact shape. Copy it
                                                         from templates/SKILL-template.md.
  2   When this applies, and when it doesn’t

  3   Steps, each ending in something you can see

  4   Rules: the short never-do-this list

  5   One worked example

  6   Checks that it worked
```

Notes: 11:45–11:47. You’ve been using skills all morning without the word. A skill is instructions you’d otherwise retype, saved once in a file, so the next session, the next model, and your colleague get the same behavior. No code, no account. It’s a folder with one file in it, SKILL.md. Front matter at the top: a name and a description with the trigger phrases, because a skill nobody triggers is a skill nobody uses. Then the body, in this order: who you’re helping and the job, when it applies, steps that each end in something you can see, the never-do-this rules, one worked example, and the checks. Open skills/vc-plan-first/SKILL.md and you’ll see exactly that shape. Watch for: people hearing “plugin” and expecting an install wizard. It’s a text file. Gate: everyone can say what a skill is in one sentence.

## 55 · Skills 2: what makes a skill good

```
SKILLS · DOCS/SKILLS-GUIDE.MD                                                                           11:45 – 11:51

What makes a skill good: six things.
The test: hand it and the same request to two different chatbots. Same shape of answer? It’s working.

1 One job. “Write the brief.”
2 Triggers in the description.
3 Steps end in something you can see.
4 A rules list with the three ways it goes wrong.
5 One worked example.
6 Under about 300 lines.
```

Notes: 11:47–11:48. What makes one good. One job: “write the brief,” not “handle the project.” Triggers in the description. Steps that end in something you can see, not “ensure quality.” A rules list with the three ways it goes wrong. One worked example. Under about 300 lines; a novel gets skimmed. The test: hand the skill and the same request to two different chatbots. Same shape of answer from both? The skill’s doing the work. Different answers? The skill’s relying on the model to guess. In sprint 2 or 3 you can write one in ten minutes with the prompt in docs/skills-guide.md. Watch for: twenty rules and no example. Gate: everyone can name two of the six.

## 56 · Skills 3: install it where you work (the live demo)

```
SKILLS · DOCS/SKILLS-GUIDE.MD                                                                                                      11:45 – 11:51

Install it where you work. Three ways in each.
A skill is text. Any chatbot that can read a file or a paste can use one. The rows differ in how automatically it loads.

Claude                                                                   ChatGPT
Claude.ai, any plan                                                      Any chat, any plan

Open a Project. Add SKILL.md to its knowledge. One line in the project   Paste SKILL.md after the one-line instruction on the next slide. Lasts
instructions: “Follow the attached skills when their trigger phrases     one conversation.
apply.”
Claude.ai, plans with Skills                                             A Project

Settings → Capabilities → Skills. Upload the skill folder as a ZIP.      Create a Project. Upload the SKILL.md files. In the instructions: “Follow
Toggle it on. It loads itself when the description matches.              the attached skills when their trigger phrases apply. Say which one you
                                                                         are using.”
Claude Code and Cowork                                                   A custom GPT

Put the folder at .claude/skills/<name>/SKILL.md in your project. It     Create a GPT. Upload the skills as Knowledge. Same line in its
appears as /<name>. Nothing to upload.                                   instructions. Share it with your team.
```

Notes: 11:48–11:51. Three minutes, live, both chatbots. Claude first: I attach skills/vc-project-brief/SKILL.md, type the brief prompt from the walkthrough, and you see the shape: brief, scope, checks, no code. Fresh chat, no skill, same prompt, and you see the difference; that gap is what a skill buys. ChatGPT: same prompt three ways. Plain chat, no skill. Plain chat with the skill pasted after the one-line instruction. A Project with the skill uploaded and one line in its instructions. The Project version didn’t need the paste. Pick the row that matches the chatbot you actually use; the paste route works everywhere, including free plans, and lasts one conversation. Watch for: menu names that moved since this morning. Describe the shape, not the pixel. Gate: one skill installed in your own chatbot.

## 57 · Live hacking sprint 1: the skills menu

```
LIVE HACKING · SPRINT 1 · YOUR CHATBOT, YOUR KEYBOARD                                                                                       11:51 – 12:00

Pick one row. Load one skill. Check it.
Open source, use them after class: github.com/mrhinkle/aienterprise-skills · github.com/mrhinkle/VibeCoding-a-Website

#    FEATURE YOU GET                                                          SKILL
                                                                                                               PASTE THE SKILL BELOW THIS
1    Your own colors, fonts, and look, recorded so they never drift           site-customizer                  Use the following
2    A headline and About section that sell without sounding salesy           copy-editor                      instructions as a skill for
                                                                                                               my next request. Read them,
3    Writing that sounds like a person, not a chatbot                         ai-slop-killer
                                                                                                               confirm what you will and
4    A prompt for a hero or background image                                  brand-to-images                  will not do, then wait for
5    A contact form that actually delivers                                    aie-web-forms
                                                                                                               my task.

6    Your name finds your site in Google and in AI answers                    aie-web-seo
                                                                                                           Raw links and task prompts: docs/website-
7    Every link, image, and anchor works                                      aie-web-links                skills-menu.md. Save a copy of index.html
                                                                                                           first. One skill, one task, one complete file.
8    A usability review from a stranger’s point of view                       aie-web-ux

9    The “does it actually work” gate before you share it                     aie-web-qa

10   A LinkedIn post that announces the site in your voice                    aie-social-linkedin

                                         DESCRIBE         ·   PLAN    ·   BUILD   ·   CHECK     ·   SAVE   ·    PUBLISH
```

Notes: 11:51–12:00. Nine minutes, your keyboard. You just saw what a skill is; now load one. Ten of them, from my public repositories, open source. The table is a reference, point at it. Pick one row. Load it with the prompt on the right: open the raw link, select all, copy, paste it in with that line first. Then attach your index.html and give the task prompt from the menu. Do the check in the table. Save a copy before the change. One skill, one task, one complete file back. Start the change now; it finishes in sprint 2. If I called cut one, we skip this and keep publishing. Watch for: loading three skills at once. The chatbot tries to do all three. One row. Gate: one skill loaded and its change started, or the blocker written in project-state.md.

## 58 · Lunch

```
LUNCH

12:00 – 12:45
Back at 12:45. The afternoon is the game.

WHEN YOU SIT BACK DOWN, HAVE THIS

1 Your website URL in project-state.md
2 examples/alien-tic-tac-toe/checkpoint-3-complete/index.html open; play one round
3 Think about two emoji that are easy to tell apart
```

Notes: 12:00–12:45. Forty-five minutes. Before I let them go: play the space-theme game on the big screen once, so they come back knowing what they’re building. Helpers use lunch to fix the accounts that failed this morning. Put the ?theme=space URL on the screen while they eat. Watch for: anyone who did not publish. They publish during lunch with a helper, not during the game. Gate: at 12:45 everyone has played one round of the example game.

## 59 · Two tracks after lunch

```
PROJECT 2 · THE GAME · CHOOSE A TRACK                                                                                12:45 – 12:50

Two tracks after lunch. Same gates, same deadline.
Both tracks: a brief with checks by 1:40, a pull request per increment, live by 4:35.

TRACK A · THE GUIDED GAME                                             TRACK B · YOUR OWN SMALL PROJECT

Themed tic-tac-toe battle game                                        The thing you brought

Tested checkpoints at every stage. Eight themes.                      A tool for your team, a dashboard, a prototype.
Board, then battle, then connected. Theme, playtest,                  One screen, one input, one result. Nothing more today.
publish.
                                                                      Built with v0, one pull request per increment. Back tables.
Pick it if you want to be sure you ship.

                              DESCRIBE     ·   PLAN   ·   BUILD   ·    CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 12:45–12:50. Two tracks this afternoon, same gates. Track A is the guided game: checkpoints at every stage, every prompt on the screen. Pick it if you want to be sure you ship. Track B is the thing you brought: a tool for your team, a dashboard, a prototype. One screen, one input, one result. Built with v0, one pull request per increment. Track B sits together at the back; helpers rotate. Same gates: a brief with checks by 1:40, a PR per increment, live by 4:35. Track B stalls at 3:00? Game checkpoint 3. Nobody leaves without a second URL. Watch for: Track B scopes that need a database or a login. One screen, one input, one result. The rest goes under “later.” Gate: every pair has chosen a track; Track B has written their one-screen scope.

## 60 · Track B: one screen, one input, one result

```
PROJECT 2 · THE GAME · TRACK B · YOUR OWN PROJECT · DOCS/YOUR-OWN-PROJECT.MD                                       12:50 – 4:35

Track B: one screen, one input, one result.
Write the “later” list in project-state.md. Half of it you will not need.

FITS VERSION ONE                                                       WAITS FOR LATER, NO MATTER HOW REASONABLE

A meeting-cost calculator.                                             Sign-in.

A which-form-do-I-need chooser for your team.                          A database, payments, or email sending.

A checklist, or a dashboard you paste numbers into.                    Anything that calls another company’s system.

A pitch page with a signup button that is a mailto link.               Anything that stores other people’s data.

                                DESCRIBE   ·   PLAN   ·    BUILD   ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 12:50–1:40 for Track B. Track B, while Track A tours the Arcade and picks a theme. The scope rule is the whole lesson: one screen where someone types or picks something and sees a useful result. A meeting-cost calculator. A which-form-do-I-need chooser. A checklist. A paste-in dashboard. A pitch page with a mailto button. Sign-in, a database, payments, email, anything that calls another company’s system, anything that stores other people’s data: all of it goes under “later.” Half of it you won’t need. When the thing you brought stalls, scope is almost always why, and cutting scope isn’t giving up. It’s how it ships. Watch for: scope creep in the plan. If the plan lists more files than you understand, cut. Gate: a brief with three observable checks and a plan with a file list you understand.

## 61 · Track B: the plan prompt

```
PROJECT 2 · THE GAME · TRACK B · YOUR OWN PROJECT · DOCS/YOUR-OWN-PROJECT.MD                                12:50 – 1:40

Track B: plan mode again, from scratch.
Biggest model. Fill the scope template, draw one wireframe, type this. Cut anything not on the wireframe.

  12:50 · BRIEF AND PLAN · ATTACH SCOPE + WIREFRAME · VERBATIM

  Here is my brief, scope, and a wireframe. Version 1 is one screen, one input, one result, no
  sign-in, no database, no external services. Tell me the plan: which files you will create, what
  each does, and three checks I can perform by hand to know it works. Do not build yet.

                             DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 12:50–1:40 for Track B. Plan mode again, from scratch, on your biggest model. Fill the scope template, draw one wireframe, type the plan prompt. Read the plan; cut anything not on the wireframe. If the plan lists more files than you understand, cut. Watch for: scope creep in the plan. If the plan lists more files than you understand, cut. Gate: a brief with three observable checks and a plan with a file list you understand.

## 62 · Track B: the build prompt, and the afternoon

```
PROJECT 2 · THE GAME · TRACK B · YOUR OWN PROJECT · DOCS/YOUR-OWN-PROJECT.MD                                  1:40 – 4:35

Track B: build increment 1, then the afternoon.
  1:40 · BUILD INCREMENT 1 · VERBATIM

  Build the plan as described. Keep it to the files you listed. Plain, readable code with short
  comments. Fits a phone. Return the complete files.

1:40                        Increment 1. Deploy. Three checks pass on the live URL.

3:00                        One improvement through a pull request. A two-minute stranger test. One fix through another
                            PR.
4:10                        Publish. Five-line README. The “later” list in project-state.md.

3:30, nothing live?         Switch to game checkpoint 3 and ship that. Come back to your idea after class.

                         DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 1:40–4:35 for Track B. 1:40, the build prompt: increment 1, and get it live. 3:00, one improvement through a pull request, then a two-minute stranger test and one fix through another PR. 4:10, publish with a five-line README. 3:30 and nothing live? Game checkpoint 3, and come back to your idea with the materials after class. Watch for: a plan that grew since 12:50. Build only the files it listed. Gate: a live URL with three checks passing on it, or checkpoint 3 open.

## 63 · Arcade tour and the three game choices

```
PROJECT 2 · THE GAME · ARCADE TOUR AND CHOOSE                                                                                    12:50 – 12:58

Pick one of three games.
The rest of this deck follows the featured game. No accounts, databases, leaderboards, or downloaded art in class.

FEATURED                                         SIMPLEST                                           MOST MOTION

Alien Tic-Tac-Toe                                Five-question quiz                                 One-button space dodger

The player chooses a board cell and wins         The player answers one question at a               The player taps or presses a key to rise
or loses a short alien battle to claim it.       time, sees feedback, and tries again.              between obstacles.
Why: a familiar board plus a small battle        Why: the simplest complete game, no                Why: one control and a theme you can
system.                                          movement. A good scope cut if you are              customize. The most motion to debug.
                                                 behind.
Test: a battle awards exactly one cell and                                                          Test: motion, collisions, scoring, and
the board ends correctly.                        Test: one answer scores once; final score          restart work every time.
                                                 and replay are right.

                                 DESCRIBE    ·   PLAN    ·   BUILD   ·    CHECK   ·      SAVE   ·    PUBLISH
```

Notes: 12:50–12:58. Eight minutes. Show the All Things AI Arcade: short instructions, clear results, replay. Every game in it runs the same loop you ran this morning. Three choices for your game; pick one. The featured one is Alien Tic-Tac-Toe: choose a square, win or lose a short battle, claim it. It’s mine, it’s new, and the rest of this deck follows it. The quiz is the simplest complete game and a good scope cut if you’re behind. The dodger has the most motion to debug. Same seven skills for all three. No accounts, databases, or leaderboards in class. Watch for: pairs splitting across two games. One game per pair. Gate: every pair has written their choice in game-brief.md.

## 64 · Choose a theme: eight built in

```
     PROJECT 2 · THE GAME · CHOOSE A THEME                                                                         12:58 – 1:05

     Same game, eight looks. Renaming is all a theme does.
     Try one on the checkpoint: checkpoint-3-complete/index.html?theme=ghosts-pumpkins

           🧑🚀 👽                            🐱 🐶                                  🍕 🌮                       🤖 🦖
     space-invasion · default              cats-dogs                            pizza-tacos               robots-dinos

           👻 🎃                                          🌙                       🧙 🐉                       ☕ 🍩
          ghosts-pumpkins                      sun-moon                    wizards-dragons                coffee-donuts

                                DESCRIBE   ·     PLAN   ·   BUILD   ·   CHECK    ·   SAVE   ·   PUBLISH

☀️
```

Notes: 12:58–13:05. Reference slide, point at it, don’t read it. The game is the same under every theme: choose a square, win or lose a battle, claim it. What you choose is the look: who you are, who you fight, what the three attacks and counters are called, the colors. Eight themes are built into the checkpoint, all emoji, so nobody downloads art or worries about licensing. Pick one, or make your own on the next slide. The mechanics never change: three attacks, each with exactly one correct counter, one health point per exchange. Renaming is the only thing a theme does. The attack and counter names are in docs/tic-tac-toe-variants.md. Watch for: a theme that makes a rule unclear. Pick a different name, not a different rule. Gate: every pair can say their two emoji and three attack-counter pairs.

## 65 · Make your own theme: write it down first

```
PROJECT 2 · THE GAME · YOUR OWN THEME                                                                                     1:05 – 1:10

Making your own? Fill this in first.
                                                                                           AVOID
FIELD                                        YOUR ANSWER

Theme id (lowercase, hyphens)
                                                                                           Pairs that look alike (🐱 and 🐯 ).

You (emoji + name)                                                                         One emoji that is mostly the
                                                                                           background color.
Opponent (emoji + name)
                                                                                           Anything that only reads as “mine”
Attack 1 → counter 1                                                                       versus “theirs” by color.

Attack 2 → counter 2

Attack 3 → counter 3

Background, accent, and text colors

                                  DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 13:05–13:10. Want your own? Pick two emoji that are easy to tell apart at a glance. Name three attacks the opponent does and three counters that obviously beat them. Choose two or three colors. Write it in this table before you prompt. A theme that exists only in your head produces a game that changes every time you ask for a change. Avoid pairs that look alike, pairs where one emoji is mostly the background color, and anything that only reads as mine versus theirs by color. Each board mark also carries a hidden X or O label for screen readers. Watch for: counters that do not obviously beat the attack. Read the three pairs to your partner; if they hesitate, rename. Gate: the table filled in on paper or in a text file.

## 66 · Wireframe before you build: three screens

```
PROJECT 2 · THE GAME · WIREFRAMES                                                                                 1:10 – 1:20

Draw the three screens first. Five minutes.
                                                                        EVERY SKETCH HAS

                                                                        A title, a status line in words, one obvious next
                                                                        button.

                                                                        Health written as text: “You: 2 of 2.”

                                                                        Nothing that depends on color alone.

                                                                        A board that fits a phone held upright.

 1 · Instructions       2 · Board              3 · Battle

                         DESCRIBE   ·   PLAN   ·   BUILD    ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 13:10–13:20. A wireframe is boxes and labels. Five minutes now saves an hour of “that’s not what I meant.” Three screens: instructions with the theme table and a Start button; the board with a status line in words, a Restart button, and Play again when it’s over; the battle with health as text, the attack the opponent uses, three counter buttons, a result line, Next exchange, Return to board. Draw them on paper or copy the text versions from the variants doc. You’ll paste them under your prompts. Low fidelity is the point; the chatbot matches your layout, not your handwriting. Watch for: people drawing art. Low fidelity is the point; the chatbot matches your layout, not your handwriting. Gate: three sketches per pair, photographed or typed.

## 67 · Game brief

```
PROJECT 2 · THE GAME · BRIEF · VC-GAME-BRIEF                                                                        1:20 – 1:30

Describe the game once, with your theme.
Done when: game-brief.md has your theme and at least five checks you could show a partner. Nothing built yet.

  ATTACH alien-tic-tac-toe.md + vc-game-brief · REPLACE THE BRACKETS · VERBATIM

  Write game-brief.md for a themed tic-tac-toe battle game using the rules in alien-tic-tac-toe.md
  exactly. Theme: I am [🐱 Cat], the opponent is [🐶 Dog]. The opponent's attacks are [Bark,
  Pounce, Slobber] and my correct counters are [Hiss, Climb, Shake Off], in that order. Colors:
  [dark brown background, peach accent, light text]. Rename only; do not change the health,
  exchange, or board rules. Give me observable completion checks. Do not build yet.

Observable means you can see it on screen: “three of my marks in a row shows You won.” If a check isn’t observable, ask for one
that is.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 13:20–13:30. Open the vc-game-brief skill. Type the prompt with your theme in the brackets. The rules come from alien-tic-tac-toe.md and the prompt says exactly: rename only. The chatbot gives you game-brief.md with observable completion checks, things you can see, like “three of my marks in a row shows You won.” Read the checks. If one isn’t observable, ask for one that is. Don’t build yet. Watch for: the chatbot adding mechanics: timers, random enemies, upgrades. Say no. Write them under “later.” Gate: game-brief.md with your theme and at least five observable checks.

## 68 · Rules and states

```
PROJECT 2 · THE GAME · RULES · VC-GAME-RULES                                                          1:30 – 1:40

List every state the game can be in.
This list is what you test against all afternoon.

  PASTE YOUR THREE WIREFRAMES BELOW IT · TYPE THIS, VERBATIM

  Using the brief, list every state the game can be in and what the player sees and can do in each.
  Use my three wireframes below as the screens. Confirm there is no automatic opponent move after a
  battle and that Restart game is available in every active state.

TWO THINGS IT MUST CONFIRM

1 No automatic opponent move after a battle.
2 Restart game is available in every active state.

                               DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 13:30–13:40. Paste your three wireframes under the prompt. The chatbot lists every state and what the player sees and can do in each. Two things it has to confirm: no automatic opponent move after a battle, and Restart game available in every active state. Misses either? Say so. The rules in one breath: pick an empty cell, a battle starts. Two health each; a correct counter costs them one, a wrong one costs you one. The winner marks the cell, exactly once. Three in a line wins; a full board is a draw. This list is what you test against all afternoon. Watch for: a state list that skips the “board finished” state or forgets Restart during a battle. Ask again for those two. Gate: a state list you can read in two minutes with both confirmations in it.

## 69 · Build increment 1: the board

```
PROJECT 2 · THE GAME · BUILD 1 OF 3 · THE BOARD · VC-GAME-BUILD                                                   1:40 – 2:00

Build the board alone.
Behind at 2:00? Download checkpoint-1-board/index.html and build the battle next.

  PASTE THE BOARD WIREFRAME BELOW IT · REPLACE THE BRACKETS · VERBATIM

  Build only the board screen as one index.html with inline CSS and JavaScript and no external
  files. Cells show [🐱 ] for my marks and [🐶 ] for the opponent's, each with a visually hidden "X"
  or "O" label. For now, two buttons "Award to me" and "Award to opponent" stand in for the battle.
  Detect the eight lines, a draw, Play again, and Restart game. Return the complete file.

CHECKPOINT 1 · WHAT YOU MUST SEE

1 Three of your marks in a row shows “You won.” Three of theirs: you lost.
2 A full board with no line shows Draw. Play again and Restart both work.
3 Test the diagonals: 1-5-9 and 3-5-7.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 13:40–14:00. First increment. Board only. Two buttons, Award to me and Award to opponent, stand in for the battle so you can test the board on its own. One index.html, inline CSS and JavaScript, no external files. Open it. Click three of your marks in a row: it says you won. Three of theirs: you lost. Fill the board with no line: Draw. Play again and Restart both work. Compare with checkpoint 1. If yours doesn’t detect wins by 2:00, download checkpoint 1 and keep going. Watch for: the diagonal lines not detected. “Detect the eight lines” is in the prompt; test 1-5-9 and 3-5-7 specifically. Gate: win, lose, and draw each observed once, with Restart in between.

## 70 · Build increment 2: the battle

```
PROJECT 2 · THE GAME · BUILD 2 OF 3 · THE BATTLE · VC-GAME-BUILD                                                  2:00 – 2:15

Build the battle as its own file, on a branch.
This one goes through a pull request: branch, upload, “Compare & pull request,” read message, files, lines, then merge.

  PASTE THE BATTLE WIREFRAME BELOW · REPLACE THE BRACKETS · VERBATIM

  Build the battle screen as its own index.html. Both sides start with 2 health shown as text. The
  opponent's attacks cycle [Bark → Pounce → Slobber]. One accepted answer per exchange; disable the
  answer buttons after I click; show an explicit Next exchange button only while both sides still
  have health; end immediately when either side reaches zero. Return the complete file.

CHECKPOINT 2 · WHAT YOU MUST SEE

1 Answer correctly twice: the battle ends in two exchanges, with no Next exchange button after the win.
2 A wrong answer costs you one health, shown as text.
3 Buttons disable after one click.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 14:00–14:15. Second increment, its own file, and the pull request exercise. Do it on a branch. v0: a new generation, push it, accept GitHub’s offer to open a pull request. Portable: branch dropdown, type battle, create it, upload the file to that branch, “Compare & pull request.” Health is text, two each. Attacks cycle in your order. One answer per exchange. Ends at zero. Test: two correct answers end it in two exchanges. Read the diff: message, files, lines. Merge. At 2:15, if I call cut two, everyone continues from checkpoint 2. Watch for: health not changing on a correct answer. The exact help sentence from stuck.md: “I click Shield when it shows Laser and the alien’s health does not change.” Gate: two correct answers end the battle in two exchanges with no Next exchange button after the win.

## 71 · Stuck? Grab a checkpoint

```
STUCK? START HERE · DOCS/STUCK.MD                                                                                                             ANY TIME

Stuck? Grab the rung for where you are.
Say what you see. Try the fix in stuck.md. Grab a checkpoint. Raise a hand. Using one is not cheating.

                         WHERE YOU ARE                      DOWNLOAD THIS                THEN CONTINUE WITH

                                                                                         Replace Jordan Rivera’s content with yours, section by
                Website: nothing works yet         personal-website/index.html
                                                                                         section.
                                                                                         Paste your text into the fresh file instead of fixing the broken
         Website: content in, look is broken          the same file, fresh
                                                                                         one.

        Website: looks fine, cannot publish                  your own file               Setup guide: recover from common setup failures.

         Game: board does not detect wins                 checkpoint-1-board             Build the battle next.

                Game: battle logic is wrong               checkpoint-2-battle            Connect it to the board.

                                                                                         Pick your theme with ?theme= and go straight to look and
    Game: board and battle will not connect           checkpoint-3-complete
                                                                                         feel and playtest.

      Game: everything works but it is 4:30           checkpoint-3-complete              Change the theme, publish it, record the rest as “later.”

                                 DESCRIBE      ·   PLAN     ·   BUILD   ·    CHECK   ·   SAVE    ·    PUBLISH
```

Notes: 14:15 (and any time). Reference slide, point at it, don’t read it. Say it at 2:15 either way. Being stuck is normal. If you’re thinking “I’m the only one who doesn’t get this,” you’re not; look around. The goal is to be moving again in under five minutes. Say what you see in one sentence. Try the matching fix in stuck.md. Still stuck, jump to the checkpoint for your stage: a tested file you continue from. Write “continued from checkpoint N” in project-state.md. That’s honest and it’s fine. Professionals start from working code every day. Your job today is the loop, not the typing. Watch for: pride. The person who refuses the checkpoint at 2:15 is the person without a game at 4:35. Gate: nobody is more than five minutes stuck without a sticky up.

## 72 · Build increment 3: connect them

```
PROJECT 2 · THE GAME · BUILD 3 OF 3 · CONNECT · VC-GAME-BUILD                                                     2:15 – 2:45

Connect them. Now it’s a game.
Compare with checkpoint-3-complete/index.html. At 3:00 everyone may continue from it.

  ATTACH BOTH FILES + THE INSTRUCTIONS WIREFRAME · TYPE THIS, VERBATIM

  Connect the board and the battle into one index.html. Selecting an empty cell locks the board and
  starts a battle for that cell. A battle win places my mark, a loss places the opponent's mark,
  exactly once, then the board is evaluated. Add the instructions screen from my wireframe with the
  theme table. Keep Restart game available everywhere. Return the complete file.

CHECKPOINT 3 · WHAT YOU MUST SEE

1 Win three battles on squares 1, 2, and 3: the game says you won.
2 Restart in the middle of a battle: empty board, no battle.
3 One finished battle fills exactly one cell.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 14:15–14:45. Third increment. Attach both files. Selecting an empty cell locks the board and starts a battle for that cell. A win places your mark, a loss places theirs, exactly once, then the board is evaluated. Add the instructions screen from your wireframe with the theme table. Restart available everywhere. Test: win three battles on squares 1, 2, and 3 and it says you won. Restart in the middle of a battle gives an empty board and no battle. Compare with checkpoint 3. At 3:00, if I call cut three, everyone continues from checkpoint 3. Watch for: a cell resolved twice, or the board not evaluated after a loss. Both are in the prompt; quote it back. Gate: a playable round from instructions to “You won,” or checkpoint 3 open and continued from.

## 73 · Break

```
BREAK

2:45 – 3:00
Back at 3:00. Then theme, phone fit, and playtest.

WHEN YOU SIT BACK DOWN, HAVE THIS

1 A playable round, or checkpoint 3 open with your ?theme=
2 Your three colors written down
3 Swap who types
```

Notes: 14:45–15:00. Fifteen minutes. Helpers go to every red sticky. Anyone without a connected game downloads checkpoint 3 now, sets their theme with ?theme=, and that’s their game. Nobody debugs through the break. Watch for: the pair that is “almost there.” Almost there at 2:45 means checkpoint 3 at 3:00; say so kindly. Gate: at 3:00 every pair has a game that plays a full round.

## 74 · Look and feel

```
PROJECT 2 · THE GAME · LOOK AND FEEL · VC-GAME-LOOK-FEEL · VC-GAME-FEEDBACK                                                    3:00 – 3:30

Your colors, and it fits a phone.
Then play one round on a phone, held upright, with your thumb.

  ATTACH YOUR CURRENT index.html · TYPE THIS, VERBATIM

  Apply my theme colors and make the board fit a 375 pixel wide phone. Buttons at least
  44 pixels tall. Keep every status message in words. Do not change any rule.

THEN FEEDBACK: EVERY CLICK ANSWERS YOU

Every click answers                             “Correct! Dog −1.” “Square 5 is yours.” “You won!” In words, not only color.

Health is text                                  “You: 2 of 2.” Icons may reinforce it; they never replace it.

One obvious next button                         Next exchange, Return to board, Play again. Never two choices at once.

   Green sticky on your lid = done                   Red sticky = a helper comes to you

                                     DESCRIBE   ·    PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 15:00–15:30. Thirty minutes. vc-game-look-feel, then vc-game-feedback. Apply your colors. Make the board fit a 375 pixel wide phone. Buttons at least 44 pixels tall. Every status message stays in words. Don’t change any rule. Then feedback: every click should answer you. A correct counter says so. A claimed square shows the mark. A finished board says who won. Open it on a phone, held upright, and play one round with your thumb. Watch for: the chatbot “improving” a rule while restyling. The prompt says do not change any rule; if health or lines change, go back to the saved copy. Gate: theme applied, plays on a phone held upright with no sideways scrolling.

## 75 · Partner playtest, one fix, re-test

```
PROJECT 2 · THE GAME · PLAYTEST · VC-GAME-PLAYTEST                                                                3:30 – 4:10

Swap laptops. Say nothing. Watch. Fix one thing.
If you have to explain the game to your tester, that is the finding.

1 Swap with the pair next to you. Hand over the phone or laptop. Say nothing.
2 Watch one full round. Write the moment they hesitate or click wrong.
3 Describe that moment in the prompt. Make the one change it proposes.
4 Re-test exactly as told. Then swap back and do theirs.

  REPLACE THE BRACKET WITH WHAT YOU SAW · TYPE THIS, VERBATIM

  Watch me describe a partner's playtest: [what confused them]. Propose the single smallest change
  that fixes it. Change one thing, then tell me exactly how to re-test it.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 15:30–16:10. Forty minutes. Swap laptops with the pair next to you. Say nothing. Watch them play one full round. Write down the moment they hesitate or click the wrong thing. Watching someone fumble your game is uncomfortable. Don’t talk and don’t point. The moment they hesitate is the one thing you fix, and it’s the input to the prompt on the slide. The single smallest change. Change one thing, then re-test exactly as the chatbot tells you. Then swap back and do it for the other game. One observed issue repaired beats three guesses. Watch for: coaching the playtester. If you have to explain it, that is the finding. Gate: one observed issue, one change, one re-test that passed, written in project-state.md.

## 76 · Publish the game: a second repository

```
PROJECT 2 · THE GAME · PUBLISH · VC-GAME-PUBLISH                                                                  4:10 – 4:35

A second repository: my-first-game.
Same moves as this morning. Two projects, two repositories, two URLs. The game never goes in the website repository.

1 GitHub: “+” → “New repository.” Name: my-first-game. Add a README.

2 “Add file” → “Upload files.” index.html at the top level, lowercase.

3 Commit: “First playable version.”

4 Never upload the game into my-first-site. That replaces your website.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 16:10–16:35. Deliverable two. Same moves as this morning, new repository. GitHub: New repository, my-first-game, add a README. Upload index.html at the root, lowercase. Commit: “First playable version.” Don’t upload the game into the website repository; that replaces your website. Two projects, two repositories, two URLs. Watch for: the game uploaded into my-first-site, which replaces the website. Separate repository, always. Gate: a second live *.vercel.app address that plays a round on a phone.

## 77 · Publish the game: a second Vercel project

```
PROJECT 2 · THE GAME · PUBLISH · VC-GAME-PUBLISH                                                                  4:10 – 4:35

A second Vercel project, a second live URL.
Deliverable two: a second live *.vercel.app address that plays a round on a phone.

1 “Add New” → “Project” → Import my-first-game.

2 Framework: Other. Build Command: override on, empty. Output: root.

3 Deploy. Visit. Play one round on a phone.

4 Try ?theme=your-theme on the live address. Record the URL in project-state.md.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD    ·    CHECK     ·   SAVE   ·   PUBLISH
```

Notes: 16:10–16:35. Vercel: Add New, Project, import my-first-game. Framework Other, Build Command override on and empty, output root. Deploy. Open the URL on a phone and play one round. Try ?theme= on the live address; deep links work. Record the URL in the game’s project-state.md. If we’re behind, sprints 2 and 3 become this. Watch for: Vercel 404 again. index.html at the top level, lowercase, in the game repository. Gate: a second live *.vercel.app address that plays a round on a phone.

## 78 · Live hacking sprints 2 and 3: extensions and the menu

```
LIVE HACKING · SPRINTS 2 + 3 · YOUR CHATBOT, YOUR KEYBOARD                                                                              4:35 – 5:05

One skill for your site, or one game extension.
Skills menu: ten rows, same rules as sprint 1. Suggested: #5, the contact form, or #6, SEO. Or one extension below.

GAME EXTENSION                 WHAT CHANGES                                                  CHECK

                               The opponent picks any attack each exchange instead of
Random attacks                                                                               Over ten exchanges you see all three attacks.
                               cycling.

                                                                                             Play again keeps the tally; Restart during a board does
Score across boards            Count boards won and lost in the session.
                                                                                             not count it.

                               The player chooses the opponent separately from
Two themes at once                                                                           The counter table updates to match.
                               themselves.

Sound                          One short sound on win and one on loss, with a mute button. Muted stays muted after Play again.

Not in class: accounts, leaderboards, a database, timers, downloaded art. Show and tell at 5:05.

   Green sticky on your lid = done                  Red sticky = a helper comes to you

                                     DESCRIBE   ·   PLAN    ·    BUILD     ·   CHECK     ·   SAVE    ·   PUBLISH
```

Notes: 16:35–17:05. Thirty minutes, your keyboard. Two choices. Add one skill to your site from the menu, same rules as this morning. Or one game extension from the list, after the basic loop works, never before. Each one is a separate increment with its own check. Pick at most one. Don’t add accounts, leaderboards, a database, timers, or downloaded art; write them under “later.” I hack on mine on the projector. Show and tell starts at 5:05 whatever state you’re in. Watch for: the extension that breaks the game. Save a copy first; if the check fails, go back to the saved copy and demo that. Gate: something new that passed its check, or the saved copy intact.

## 79 · Show and tell

```
PROJECT 2 · THE GAME · SHOW AND TELL                                                                                    5:05 – 5:15

Sixty seconds. Your live URL. One thing that broke.
Everyone else: one thing you noticed, on a sticky, handed to them.

1                                            2                                               3

Your live URL on the big                     One move or one scroll                          One thing that broke, and
screen                                                                                       what fixed it

Not the file on your laptop. The URL         Play one battle, or scroll to your About        The most useful sentence of the day.
went through your gate.                      section.                                        Everyone got stuck there too.

                              DESCRIBE   ·   PLAN    ·   BUILD   ·   CHECK    ·   SAVE   ·       PUBLISH
```

Notes: 17:05–17:15. Ten minutes. Sixty seconds each, as many as fit. Your live URL on the big screen, not the file on your laptop; live is the thing that went through your gate. Play one move or scroll one section. Then the one thing that broke and what fixed it. That’s the most useful sentence of the day; everyone else got stuck on it too. I pick volunteers during the sprint so nobody’s surprised. Everyone else: write one thing you noticed about their project on a sticky and hand it over. Watch for: demos running long. Call time at sixty seconds, kindly, every time. Gate: at least five live URLs shown on the big screen.

## 80 · Tuesday morning: taking this back to your team

```
HANDOFF · TUESDAY                                                                                                      5:15 – 5:30

Tuesday morning. Three decisions to make before lunch.
The pull request is how you supervise. Smallest repeatable task first. Which tool after today: docs/platform-
landscape.md.

1                                             2                                             3

What goes in GitHub first                     What to automate next                         Where agents still need
                                                                                            adult supervision

The thing your team edits most and            One repeatable task, small enough to          Secrets and keys. Customer data.
backs up least. A checklist, a process        check by eye. The report you rebuild          Anything customer-facing. Anything
doc. Put it in a repository.                  every Monday.                                 you can’t test yourself.

                               DESCRIBE   ·   PLAN   ·   BUILD   ·   CHECK   ·   SAVE   ·       PUBLISH
```

Notes: 17:15–17:18. Tuesday morning, three decisions. Amara’s Law: we overestimate this short term and underestimate it long term, so start small on purpose. First, what goes in GitHub first: the thing your team edits most and backs up least. A checklist, a page everyone copies. Second, what to automate next: one repeatable task, small enough to check by eye. The report you rebuild every Monday. Third, where agents still need adult supervision: secrets and keys, customer data, anything customer-facing, anything you can’t test yourself. Those get a human review every time; that’s the pull request. “Which tool do I use after today?” docs/platform-landscape.md; read the Your GitHub column first. Watch for: leaders who want to automate the hardest thing first. Smallest task first; earn the trust. Gate: everyone has written one answer to each of the three questions.

## 81 · Handoff: two URLs, two state files, next actions

```
HANDOFF · WRAP-UP                                                                                                    5:15 – 5:30

Write it down so Monday-you can continue.
Unfinished is fine. Say what works and what doesn’t. Never relabel it as done.

PROJECT-STATE.MD · ONE PER PROJECT                                 YOU LEAVE WITH

Project, repository, branch, and version.                          A live website and a live game, in your Vercel.

Vercel project and URL.                                            Two repositories, in your GitHub.

What you tested and what you saw.                                  Two state files that let any chat continue.

Current blocker, and one next action with its check.               A loop you can run on Monday: describe, plan, build,
                                                                   check, save, publish.

                             DESCRIBE   ·   PLAN   ·   BUILD   ·    CHECK   ·   SAVE   ·   PUBLISH
```

Notes: 17:18–17:23. Never cut this. Two URLs and two state files are the deliverable. Fill project-state.md for each project: name and type, repository, version, Vercel URL, what you actually tested and what you saw, the current blocker if any, and one next action with its check. Unfinished is fine; say what works and what doesn’t. Don’t relabel it as done. Attach the actual files when you open a new chat; the new chat knows nothing about the old one. Optional: proud of the game? The Arcade submission guide is in docs; All Things AI and I review before anything is listed. Watch for: state files that say “in the previous chat” as a file location. Name the actual files. Gate: two project-state.md files with URLs and a next action, open on screen.

## 82 · LinkedIn close: the optional post and endorsement

```
HANDOFF · OPTIONAL                                                                                5:15 – 5:30

Optional: post about today and I’ll endorse the skill.
Recognition of a skill you practiced today, not a certification. You choose what to publish.

1 Add “Vibe Coding” in your profile’s Skills section. Can’t find it? Ask me which label to use.
2 Connect with me on LinkedIn, using the profile I show you now, not a guess.
3 Publish a post in your own words: something you built, learned, or worked through.
4 Send me your profile URL, post URL, and the exact skill name. I endorse it personally.

  ASK YOUR CHATBOT FOR A DRAFT · VERBATIM

  Help me draft a short LinkedIn post about this class using only these facts: [what I built, what
  works, what I learned, and a challenge]. Keep my voice. Mention that Mark offered a skill
  endorsement to participants who post about their experience. Do not invent outcomes, praise, or
  expertise. Give me a draft to review; do not publish it or message anyone.
```

Notes: 17:23–17:26. Optional, and it doesn’t affect anything about today. Add Vibe Coding to your LinkedIn skills if the label exists; if not, ask me which accurate label to use. Connect with me; I’ll give you the exact profile, don’t guess it. Publish a post in your own words about something you built, learned, or worked through; honest beats flattering. Send me the profile URL, the post URL, and the exact skill name through the class contact channel and I endorse it personally. It’s recognition of a skill you practiced today, not a certification. The chatbot prompt on the slide drafts it; you decide whether to post. Watch for: posts that claim more than was built. Describe what you actually completed. Gate: none; optional.

## 83 · Two offers: the slides and the book

```
HANDOFF · TWO OFFERS                                                                              5:15 – 5:30

Everyone gets the slides. Reviewers get the book.
EVERYONE GETS THE SLIDES

The slides and all the course materials are in the repo. PDF and PPTX in
presentations/ato-2026-workshop.
github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals

REVIEWERS GET THE BOOK

Send me feedback, good or bad, and you get the preview release edition of Software
Development for Non-Programmers: Beyond Vibecoding.

To: mrhinkle@allthingsai.org
Subject: ATO workshop feedback
Or hand me the printed sheet before you leave.                                       Advance Release Edition
```

Notes: 17:26–17:28. Two offers, open to everyone. First, everyone gets the slides and all the course materials. They’re in the repo on the screen, github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals; the PDF and the PPTX sit in presentations/ato-2026-workshop. The link is also on the hold slide and the thank-you slide. Second, reviewers get the book. Tell me what worked and what didn’t and I send you the preview release edition of Software Development for Non-Programmers: Beyond Vibecoding. Good or bad, specific or short, it all counts, and the critical stuff helps me most; tell me what to cut. Email mrhinkle@allthingsai.org, subject “ATO workshop feedback,” or hand me the printed sheet before you leave. I read every one myself. Watch for: people writing only nice things. Ask for the one thing to cut. Gate: everyone knows the email address and the subject line.

## 84 · See you in the spring: All Things AI

```
HANDOFF · ONE INVITATION                                                                5:15 – 5:30

See you in the spring: All Things AI.

April 18–20, 2027
All Things AI 2027, in this same building: the Atlantic Union Bank Convention Center.

April 18 is the Agent Hackathon. April 21 is a separate, screened Executive Summit.

allthingsai.org
```

Notes: 17:28–17:30. One sentence, not a pitch. I co-founded All Things AI. It’s the hands-on conference for people like you, and workshops like today’s are what you’ll find there. April 18 to 20, 2027, in this same building. The 18th is the Agent Hackathon. The 21st is a separate, screened Executive Summit. allthingsai.org. If you want in, you know where to find me. Watch for: turning this into a sell. One sentence and on to thank you. Gate: none.

## 85 · Thank you

```
THAT’S THE DAY

Now it’s two URLs you own.

A site about you, live in your Vercel. A game you drew on paper at one
o’clock, playing on a phone.

Run the same six steps on Monday, on something at work.

MARK HINKLE

mrhinkle@allthingsai.org
All Things AI · allthingsai.org         The AIE Network · theaienterprise.io

Feedback sheets on the table on your way out. Subject line: ATO workshop feedback.
Slides and all course materials: github.com/mrhinkle/Vibe-Coding-for-Non-Technical-Professionals
```

Notes: 17:28–17:30. That’s the day. This morning your résumé lived in a LinkedIn menu. Now a site about you is live, in your Vercel. A game you drew on paper at one o’clock plays on a phone, at a URL you own. And you ran the same six steps both times. If you walked in this morning nervous, look at what you’re walking out with. Run those six steps on Monday on something small at work. The slides and everything else are in the repo on the screen. Feedback sheets on the table on the way out, or mrhinkle@allthingsai.org. Thank you. Watch for: nothing. Say thank you and stop on time. Gate: done at 5:30.
