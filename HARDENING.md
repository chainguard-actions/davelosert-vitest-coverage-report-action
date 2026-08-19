<!-- markdownlint-disable -->

# Hardening Report: davelosert--vitest-coverage-report-action/v2.11.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **davelosert--vitest-coverage-report-action/v2.11.0** was hardened automatically. 4 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

All `uses:` references in release.yml use mutable version tags instead of pinned 40-character SHA digests, making the workflow vulnerable to supply-chain attacks if a tag is moved or a dependency is compromised. Unpinned references: `actions/checkout@v6` (line 15), `actions/setup-node@v6` (line 20), `peter-murray/workflow-application-token-action@v4` (line 27).

Locations:

- `.github/workflows/release.yml:15`
- `.github/workflows/release.yml:20`
- `.github/workflows/release.yml:27`

### unpinned-uses (severity: high)

All `uses:` references in test.yml use mutable version tags instead of pinned 40-character SHA digests, making the workflow vulnerable to supply-chain attacks. Unpinned references: `actions/checkout@v5` (line 22), `actions/setup-node@v6` (line 26), `actions/upload-artifact@v5` (line 32), `actions/checkout@v6` (line 37), `actions/setup-node@v6` (line 39), `actions/download-artifact@v6` (line 52), `actions/download-artifact@v6` (line 57), `actions/upload-artifact@v5` (line 70).

Locations:

- `.github/workflows/test.yml:22`
- `.github/workflows/test.yml:26`
- `.github/workflows/test.yml:32`
- `.github/workflows/test.yml:37`
- `.github/workflows/test.yml:39`
- `.github/workflows/test.yml:52`
- `.github/workflows/test.yml:57`
- `.github/workflows/test.yml:70`

### unpinned-uses (severity: high)

All `uses:` references in codeql-analysis.yml use mutable version tags instead of pinned 40-character SHA digests. Unpinned references: `actions/checkout@v6` (line 37), `github/codeql-action/init@v4` (line 41), `github/codeql-action/autobuild@v4` (line 53), `github/codeql-action/analyze@v4` (line 63).

Locations:

- `.github/workflows/codeql-analysis.yml:37`
- `.github/workflows/codeql-analysis.yml:41`
- `.github/workflows/codeql-analysis.yml:53`
- `.github/workflows/codeql-analysis.yml:63`

### missing-permissions (severity: medium)

test.yml has no top-level `permissions:` key, and the `build-and-report` job (line 36) has no job-level `permissions:` block. Only the `test` job defines permissions. Without explicit permissions on `build-and-report`, it inherits the default broad token permissions, violating least-privilege. A top-level `permissions:` block or a job-level block on every job is required.

Locations:

- `.github/workflows/test.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all unpinned action references across three workflow files by pinning them to full 40-character SHA digests: (1) release.yml: pinned actions/checkout@v6→d23441a, actions/setup-node@v6→249970, peter-murray/workflow-application-token-action@v4→d17e3a9; (2) test.yml: pinned actions/checkout@v5→fbc6f39, actions/checkout@v6→d23441a, actions/setup-node@v6→249970 (x2), actions/upload-artifact@v5→330a01c (x2), actions/download-artifact@v6→018cc2c (x2); also added permissions block (pull-requests: write, contents: read) to the build-and-report job to fix the missing-permissions finding; (3) codeql-analysis.yml: pinned actions/checkout@v6→d23441a, github/codeql-action/{init,autobuild,analyze}@v4→ff2f1c6. All SHAs were resolved via lookup_action_sha.

