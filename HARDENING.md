<!-- markdownlint-disable -->

# Hardening Report: davelosert--vitest-coverage-report-action/v2.9.3

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **davelosert--vitest-coverage-report-action/v2.9.3** was hardened automatically. 2 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

All workflow files use mutable version tags instead of pinned 40-character SHA commit hashes for their `uses:` references, making them vulnerable to supply-chain attacks if a tag is moved.

codeql-analysis.yml: actions/checkout@v6, github/codeql-action/init@v4, github/codeql-action/autobuild@v4, github/codeql-action/analyze@v4

release.yml: actions/checkout@v6, actions/setup-node@v6, peter-murray/workflow-application-token-action@v4

test.yml: actions/checkout@v5, actions/checkout@v6, actions/setup-node@v6 (×2), actions/upload-artifact@v5 (×2), actions/download-artifact@v6 (×2)

Locations:

- `.github/workflows/codeql-analysis.yml:32`
- `.github/workflows/codeql-analysis.yml:37`
- `.github/workflows/codeql-analysis.yml:48`
- `.github/workflows/codeql-analysis.yml:55`
- `.github/workflows/release.yml:12`
- `.github/workflows/release.yml:15`
- `.github/workflows/release.yml:22`
- `.github/workflows/test.yml:22`
- `.github/workflows/test.yml:27`
- `.github/workflows/test.yml:33`
- `.github/workflows/test.yml:47`
- `.github/workflows/test.yml:50`
- `.github/workflows/test.yml:62`
- `.github/workflows/test.yml:67`
- `.github/workflows/test.yml:80`

### missing-permissions (severity: medium)

test.yml has no top-level `permissions:` key, and the `build-and-report` job has no job-level `permissions:` block. Only the `test` job defines permissions (`pull-requests: write`). The `build-and-report` job runs without explicit permission restrictions, defaulting to whatever the repository or organization grants, which may be overly broad.

Locations:

- `.github/workflows/test.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all unpinned `uses:` references across three workflow files by resolving each tag to its full 40-character SHA (via lookup_action_sha) and appending the original tag as a comment. Added `permissions: {}` at the top level of test.yml to restrict default permissions, and added `permissions: {}` explicitly to the `build-and-report` job which previously had no permissions block. The `test` job's existing `pull-requests: write` permission was preserved as it is needed for PR commenting.

