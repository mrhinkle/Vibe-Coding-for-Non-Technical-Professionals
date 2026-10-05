# Learner project instructions

This is a template. Before using it, copy it to the root of one learner project, keep the filename `AGENTS.md`, and fill in the fields below. Website and game projects get separate copies. Do not invent missing project details.

## Project identity

- Project name: [fill in]
- Project type: [website or browser game]
- Owner and coordinator: [fill in]
- Purpose and intended user: [fill in]
- Working folder: [fill in]
- GitHub repository: [fill in, or not connected]
- Vercel project: [fill in, or not created]
- Brief and rules files: [fill in]
- Current saved version or checkpoint: [fill in]
- Current stage and next approved outcome: [fill in]

## Work with the learner

Use plain language. Explain the next action and why it helps. Confirm project identity and read the brief before editing. Distinguish files and tools you actually accessed from material that is unavailable. If a link cannot be read, ask for its contents or an attachment.

For ordinary chat, return complete runnable files with exact filenames and saving instructions. Do not substitute a screenshot or description for the requested files. For a connected workspace, inspect existing files and preserve working behavior. Use the actual project setup; do not invent test commands or claim tests ran.

The core project uses static HTML, CSS, and JavaScript. Keep the scope small. Accounts, remote databases, multiplayer, and external score services require a separate decision and are outside the first classroom version.

## Stage workflow

1. Define the user, purpose, first-version scope, and observable acceptance checks.
2. Plan one small increment. Ask only for missing decisions that affect the outcome.
3. Build the agreed increment in the designated project folder. Preserve a working checkpoint before substantial changes.
4. Check the actual files against the brief. Report Passed, Failed, or Not tested with observations.
5. Repair the most important failure and repeat its check plus the core working flow.
6. Prepare the specific release details for the owner's approval. After an authorized deployment, check the actual URL.
7. Leave a handoff identifying the version, tests, limitations, and next action.

## Acceptance checks

For a website, check its purpose, accurate content, main link/button destination, navigation, phone layout, and keyboard usability.

For a game, check instructions, Start, supported keyboard and touch controls, score changes, invalid actions, round-end behavior, and repeated restart. Restart must reset the state specified in the rules. If browser-local scores are included, check refresh and unavailable storage.

Record the version, browser/device, steps, expectation, and observation. Keep local-file, preview, and production results separate. A code-reading concern is not an executed browser test. Ask the learner or a partner to perform checks your tools cannot do. Record real-device gaps honestly.

## Boundaries

Edits require an agreed task. Saving a local draft does not authorize a commit, push, merge, or deployment. Obtain the owner's explicit authorization for those actions and name the destination and version. Account credentials remain with the learner; do not request that they paste authentication material into chat. Do not make purchases, change account permissions, or activate paid services automatically.

Do not publish private or personal material without the owner's specific approval. Ask before transferring project material to another provider. A private repository does not establish private website access. The first Vercel deployment is production; explain that before the owner approves publication.

## Optional multiple-agent work

Use helpers only when the owner requests delegation or approves the proposed split. Start with one builder and one read-only reviewer. Give every helper a bounded task, exact input version, allowed files, checks, and stopping point.

One writer owns each working folder. Concurrent writers require separate worktrees or isolated copies; never share a checkout. Same-file implementation is sequential. Freeze the reviewed version. The reviewer reports findings without edits and identifies untested behavior. Only the coordinator integrates approved work; retest the integrated version. Do not describe several roles within one chat as independent agents.

## Resume record

Keep this record in `project-state.md` at a stopping point, following the course's state template. The coordinator owns that shared record; individual helpers return separate handoffs instead of overwriting it. Update the existing record rather than creating a competing summary.

- Current project, folder, and saved version:
- Brief/rules and current stage:
- Completed outcome and files changed:
- Checks performed and observations:
- Failures and Not tested items:
- Publication status and actual URL, if any:
- Pending owner decision or blocker:
- Next single action and how to verify it:

On resume, inspect the actual files and compare their version with the handoff before proceeding. A handoff describes prior work; it is not evidence that the current files still match it.
