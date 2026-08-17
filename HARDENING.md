<!-- markdownlint-disable -->

# Hardening Report: davelosert--vitest-coverage-report-action/v2.12.2

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **davelosert--vitest-coverage-report-action/v2.12.2** was hardened automatically. 4 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

All `uses:` references in codeql-analysis.yml use version tags instead of full 40-character SHA digests: `actions/checkout@v6`, `github/codeql-action/init@v4`, `github/codeql-action/autobuild@v4`, `github/codeql-action/analyze@v4`. Tag-based refs are mutable and vulnerable to supply-chain attacks.

Locations:

- `.github/workflows/codeql-analysis.yml:30`
- `.github/workflows/codeql-analysis.yml:35`
- `.github/workflows/codeql-analysis.yml:43`
- `.github/workflows/codeql-analysis.yml:57`

### unpinned-uses (severity: high)

All `uses:` references in release.yml use version tags instead of full 40-character SHA digests: `actions/checkout@v6`, `actions/setup-node@v6`, `actions/create-github-app-token@v3`. Tag-based refs are mutable and vulnerable to supply-chain attacks.

Locations:

- `.github/workflows/release.yml:14`
- `.github/workflows/release.yml:17`
- `.github/workflows/release.yml:22`

### unpinned-uses (severity: high)

All `uses:` references in test.yml use version tags instead of full 40-character SHA digests: `actions/checkout@v5`, `actions/setup-node@v6`, `actions/upload-artifact@v5`, `actions/checkout@v6`, `actions/setup-node@v6`, `actions/download-artifact@v6` (×2), `actions/upload-artifact@v5`. Tag-based refs are mutable and vulnerable to supply-chain attacks.

Locations:

- `.github/workflows/test.yml:21`
- `.github/workflows/test.yml:24`
- `.github/workflows/test.yml:33`
- `.github/workflows/test.yml:40`
- `.github/workflows/test.yml:43`
- `.github/workflows/test.yml:57`
- `.github/workflows/test.yml:63`
- `.github/workflows/test.yml:68`
- `.github/workflows/test.yml:80`

### missing-permissions (severity: medium)

test.yml has no top-level `permissions:` key, and the `build-and-report` job has no job-level `permissions:` block. Only the `test` job defines permissions. The `build-and-report` job runs without explicit permission restrictions, defaulting to whatever the repository or organization grants (potentially write access to contents, packages, etc.).

Locations:

- `.github/workflows/test.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all unpinned `uses:` references across three workflow files by resolving each tag to its full 40-character SHA digest (preserving the tag as a comment). Added a top-level `permissions: {}` block to test.yml and a job-level `permissions` block to the `build-and-report` job with minimal permissions (pull-requests: write for PR commenting, contents: read for checkout). Specific changes: codeql-analysis.yml: pinned 4 actions; release.yml: pinned 3 actions; test.yml: pinned 9 action references and added missing permissions blocks.

