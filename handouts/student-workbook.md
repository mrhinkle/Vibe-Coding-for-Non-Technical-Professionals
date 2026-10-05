# Student workbook

Use this workbook to finish two projects during the class: a simple website and a small browser game. The day contains **360 teaching minutes**, with lunch and breaks added separately. Use your favorite chatbot. You can paste or attach a skill's instructions; native skill installation is optional.

Keep a separate folder, GitHub repository, and Vercel project for each project. Your website belongs in `my-first-site`; your game belongs in `my-first-game`. Choose your own names if you prefer, but record them below and check the destination before every upload or release.

The [setup guide](../setup-guide.md) explains the portable file route and connected coding workspaces. The [website skill guide](../skill-guide.md) and [game skill guide](../game-skills-guide.md) provide the instructions to use at each stage.

## My workspace

| Item | My answer |
| --- | --- |
| Name | |
| Class date | |
| Preferred chatbot | |
| Route: portable files or connected workspace | |
| Website folder and GitHub repository URL | |
| Website Vercel project name | |
| Game folder and GitHub repository URL | |
| Game Vercel project name | |
| My partner for testing | |
| Setup blocker, if any | |

A connection badge does not establish what your assistant can do. Confirm that you can receive complete runnable files. For a connected workspace, also confirm the repository and branch before asking it to make changes. If setup is blocked, use the instructor's checkpoint or work with a partner and record what remains unresolved.

## Project 1: my website brief

Copy the completed brief into the website project's `project-brief.md`. Use [vc-project-brief](../skills/vc-project-brief/SKILL.md), then [vc-project-plan](../skills/vc-project-plan/SKILL.md).

| Question | My answer |
| --- | --- |
| Working title | |
| Who is this website for? | |
| What should a visitor understand or accomplish? | |
| Main heading | |
| Two or three useful sections | |
| Main link or button label | |
| Exact destination or behavior of that link/button | |
| Content and images I can use | |
| Desired style in three words | |
| What is deliberately outside the first version? | |

**My one-sentence outcome:** A visitor can ____________________________________.

**My completion checks:** Write observable actions. “It looks good” is not enough; “the main button opens the stated event page” can be tested.

| Check | Action to try | Expected result |
| --- | --- | --- |
| W1: purpose | Ask a partner what this page is for | |
| W2: content | Read the heading and sections | |
| W3: main action | Follow the primary link/button | |
| W4: navigation | Follow each navigation link | |
| W5: phone layout | Open or resize the page to a phone-sized view | |

Build the smallest complete version using [vc-build-small](../skills/vc-build-small/SKILL.md). Request complete runnable files. Open the exported `index.html` in your browser and keep any supporting files at their expected paths. Save a working checkpoint before a larger change.

**A focused change request:** For this audience, change ____________. Preserve ____________. I will check it by ____________.

## Project 2: my game brief

Copy this brief into the game project's `game-brief.md`. Use [vc-game-brief](../game-skills/vc-game-brief/SKILL.md). Choose one short round and one main mechanic.

| Question | My answer |
| --- | --- |
| Game title and theme | |
| Who will play? | |
| Choice: Alien Tic-Tac-Toe, five-question quiz, one-button space dodger, or another approved small idea | |
| What is the player's goal? | |
| What is the main action? | |
| How long should one round take? | |
| What makes a round end? | |
| What will make someone want to play again? | |
| What is outside the first version? | |

**My one-sentence game:** The player ____________ to ____________ before ____________.

Use [vc-game-rules](../game-skills/vc-game-rules/SKILL.md) to complete the following rules table. Save it as `game-rules.md`. A partner should be able to explain a round from this table before the game is built.

| Situation | Player action or event | What the game remembers or changes | What the player sees | Check |
| --- | --- | --- | --- | --- |
| Before play | Open the game | | | Instructions and Start are understandable |
| Start | Activate Start | | | One new round begins |
| Play | Use the main control | | | The control has the stated effect |
| Success during play | | | | Progress or score changes once |
| Invalid input or mistake | | | | The response matches the rules |
| Round ends | | | | Play stops or changes as intended; result is clear |
| Restart | Activate Play again | | | Score, positions, guesses, timers, and other round state reset as agreed |
| Repeat | Finish and restart several rounds | | | No duplicated actions or unintended speed changes |

| Controls and scoring | My rule |
| --- | --- |
| Keyboard control | |
| Pointer or touch control | |
| How points/progress are earned | |
| Win condition, if applicable | |
| Loss or round-end condition | |
| Difficulty setting I can adjust | |
| Optional best score: absent or stored only in this browser | |

Build the complete start → play → result → restart loop using [vc-game-build](../game-skills/vc-game-build/SKILL.md). Add appearance and feedback after that loop works. Use [vc-game-look-feel](../game-skills/vc-game-look-feel/SKILL.md) and [vc-game-feedback](../game-skills/vc-game-feedback/SKILL.md) for clear controls, readable scores, understandable results, and replay.

## Test report template

Create **one report per project**. Save the website's as `test-report.md` and the game's as `game-test-report.md`. Use [vc-quality-check](../skills/vc-quality-check/SKILL.md) or [vc-game-playtest](../game-skills/vc-game-playtest/SKILL.md).

| Test context | Record |
| --- | --- |
| Project and tester | |
| Date | |
| Version: commit/checkpoint label and file copy tested | |
| Location: local files, preview URL, or published URL | |
| Browser and device | |
| Real phone used, or only a resized browser? | |

Use only **Passed**, **Failed**, or **Not tested**. Record what you actually observed. A chatbot's claim is not a substitute for opening the files and trying the behavior. A local result does not establish the published result; repeat the key checks after deployment.

| ID | Steps | Expected result | Observed result | Status | Evidence or blocker |
| --- | --- | --- | --- | --- | --- |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

For the website, cover purpose, content, the main action, navigation, and phone layout. For the game, cover instructions, Start, controls, scoring, the end of a round, and repeated restart. If you added saved scores, also check refresh and what happens when browser storage is unavailable. Mark an untested device honestly.

**Two-minute partner playtest:** Let your partner try the game without coaching.

| Prompt | Observation |
| --- | --- |
| Where did the player hesitate or ask for help? | |
| Which rule or outcome surprised them? | |
| Which control or score behaved incorrectly? | |
| Would they replay, and why? | |
| Biggest issue to fix first | |

| Repair record | Record |
| --- | --- |
| Issue selected | |
| One change requested | |
| New version/checkpoint | |
| Same test repeated and actual result | |
| Other working behavior checked again | |
| Remaining failure or untested behavior | |

## Release record template

Complete this separately for both projects. Save the website's as `release-record.md` and the game's as `game-release.md`. Use [vc-publish-site](../skills/vc-publish-site/SKILL.md) or [vc-game-publish](../game-skills/vc-game-publish/SKILL.md).

**Before deployment:** The first Vercel deployment of a project is production. Confirm that the intended content is suitable for the people who can access the URL. Later updates to the configured production branch can trigger deployment. Follow the [setup and publication guide](../setup-guide.md#publish-each-project).

| Release detail | Record |
| --- | --- |
| Project: website or game | |
| GitHub repository URL and owner | |
| Vercel account/team and project name | |
| Branch and commit/checkpoint released | |
| Intended audience and access behavior | |
| Person approving this publication and date | |
| Deployment status | |
| Actual URL, if one exists | |
| Date and device used to open that URL | |
| Key published checks and observations | |
| Second person/device check, or Not tested | |
| Remaining failures or limitations | |
| If blocked: exact blocker and working files retained | |

Choose an accurate completion statement:

- **Published and checked:** I opened the URL above and observed the recorded checks.
- **Published, verification incomplete:** A deployment exists, but these checks remain: ____________.
- **Working files retained, deployment blocked:** My files are at ____________; the blocker is ____________.

## Two-project handoff

Use [vc-project-handoff](../skills/vc-project-handoff/SKILL.md) to prepare this record. Keep a copy with your class notes and a project-specific copy in each repository if useful.

| Detail | Website | Game |
| --- | --- | --- |
| Purpose and intended user | | |
| Owner | | |
| Working files/folder | | |
| GitHub repository | | |
| Vercel project and actual URL | | |
| Version/checkpoint | | |
| Test report location | | |
| Release record location | | |
| What works, based on checks | | |
| Known limitations and Not tested items | | |
| How to open or run it | | |
| Next small improvement | | |
| How I will check that improvement | | |

**My final demonstration:** Show the website's main action, complete a game round and restart, then point to the saved versions and test records. If a deployment is blocked, demonstrate the working files and explain the recorded blocker.

**What I learned:** One assumption I corrected was ____________. The evidence that changed my mind was ____________.

## Optional: offer your game to the Arcade

Choose from the [game menu](../docs/game-options.md). For Alien Tic-Tac-Toe, record both battle and board outcomes, including X win, O win, draw, and restart during battle. If you want your finished game considered for the All Things AI Arcade, fill in the [submission template](../templates/arcade-submission.md) and share it with the instructor. Explain what is fun, include your playable link and source version, and record known issues. Selection and integration happen later.
