---
name: vc-maintain-site
description: "Make a focused classroom website update through a saved version, preview, review, and verification workflow."
---

# Change and recover

Identify the requested user-visible change, current working version, and deployed version. Inspect the relevant files before editing. Keep unrelated behavior stable and capture a known working checkpoint.

Prepare the change on a separate branch when the repository workflow supports it. Review the difference and repeat the relevant acceptance checks. For an already deployed Vercel project, inspect the branch preview before proposing a production-branch merge. Explain any deployment triggered by that merge and stay within the learner's release authorization.

For recovery practice, change an obvious heading on a practice branch, then restore its prior text and verify the result. Do not introduce a defect into a public site simply to demonstrate recovery. If an actual release needs recovery, identify the previous verified version and an available restore path before taking action; preserve history and data.

Write change-record.md with the request, before and after behavior, source versions, checks, deployment state, and recovery approach. Suggest a simple manual maintenance checklist. Describing a schedule does not create a monitor or automation.
