---
name: vc-quality-check
description: "Check a classroom website against its acceptance criteria and produce an evidence-based test report before release or after an update."
---

# Test the actual experience

Read the acceptance checks and identify the exact files or URL being evaluated. If the target is inaccessible, report that limitation; do not substitute a different version silently.

Test the primary link or button, navigation, images, keyboard interaction, accurate supplied content, and narrow-screen layout. For a game, use its explicit rules and test start, play, result, and restart as well. Inspect content for invented claims and files for accidentally exposed credentials or unintended data collection.

Use a browser when available. Otherwise give the learner precise manual steps and wait for observed results. Record unperformed work as Not tested. Write test-report.md with test, expected outcome, actual outcome, evidence, and Passed, Failed, or Not tested. Distinguish functional testing, code inspection, and automated scores.

Prioritize failures that prevent the agreed visitor task. Report defects with reproduction steps. If asked to fix them, repair within scope and rerun the failed and adjacent checks. Invite a partner to attempt the task independently. Call the result a classroom quality check, not a complete accessibility or security certification.
