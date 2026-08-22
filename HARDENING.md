<!-- markdownlint-disable -->

# Hardening Report: davelosert--vitest-coverage-report-action/v2.11.2

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **davelosert--vitest-coverage-report-action/v2.11.2** was hardened automatically. 2 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

All `uses:` references in workflow files use mutable version tags instead of full 40-character SHA commit hashes, making the workflows vulnerable to supply-chain attacks if a tag is moved or a dependency is compromised.

.github/workflows/test.yml: actions/checkout@v5, actions/setup-node@v6, actions/upload-artifact@v5, actions/checkout@v6, actions/setup-node@v6, actions/download-artifact@v6 (×2), actions/upload-artifact@v5

.github/workflows/release.yml: actions/checkout@v6, actions/setup-node@v6, actions/create-github-app-token@v3

.github/workflows/codeql-analysis.yml: actions/checkout@v6, github/codeql-action/init@v4, github/codeql-action/autobuild@v4, github/codeql-action/analyze@v4

Locations:

- `.github/workflows/test.yml:22`
- `.github/workflows/test.yml:26`
- `.github/workflows/test.yml:33`
- `.github/workflows/test.yml:43`
- `.github/workflows/test.yml:47`
- `.github/workflows/test.yml:57`
- `.github/workflows/test.yml:63`
- `.github/workflows/test.yml:73`
- `.github/workflows/release.yml:14`
- `.github/workflows/release.yml:18`
- `.github/workflows/release.yml:23`
- `.github/workflows/codeql-analysis.yml:33`
- `.github/workflows/codeql-analysis.yml:37`
- `.github/workflows/codeql-analysis.yml:44`
- `.github/workflows/codeql-analysis.yml:55`

### missing-permissions (severity: medium)

The workflow file test.yml has no top-level `permissions:` key, and the `build-and-report` job has no job-level `permissions:` block. Only the `test` job defines permissions (`pull-requests: write`). The `build-and-report` job therefore inherits the default GitHub token permissions, which may be broader than necessary (e.g., write access to contents). Every job must have an explicit `permissions:` block, or a restrictive top-level `permissions:` must be set.

Locations:

- `.github/workflows/test.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all three workflow files:

**test.yml**:
- Added top-level `permissions: {}` to restrict default token permissions
- Added `permissions: pull-requests: write` to the `build-and-report` job (needed since it runs the coverage report action that comments on PRs)
- Pinned all action refs to full SHAs: actions/checkout@v5→fbc6f39, actions/setup-node@v6→2499707, actions/upload-artifact@v5→330a01c, actions/checkout@v6→d23441a, actions/download-artifact@v6→018cc2c (×2), actions/upload-artifact@v5→330a01c

**release.yml**:
- Pinned all action refs to full SHAs: actions/checkout@v6→d23441a, actions/setup-node@v6→2499707, actions/create-github-app-token@v3→bcd2ba4

**codeql-analysis.yml**:
- Pinned all action refs to full SHAs: actions/checkout@v6→d23441a, github/codeql-action/init@v4→db488dd, github/codeql-action/autobuild@v4→db488dd, github/codeql-action/analyze@v4→db488dd

All original tag names preserved as inline comments for readability.

