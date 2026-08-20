<!-- markdownlint-disable -->

# Hardening Report: davelosert--vitest-coverage-report-action/v2.10.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **davelosert--vitest-coverage-report-action/v2.10.0** was hardened automatically. 4 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

All `uses:` references in codeql-analysis.yml use mutable version tags instead of pinned 40-character SHA digests, making the workflow vulnerable to supply-chain attacks if the referenced action tags are moved. Failing references: `actions/checkout@v6` (line 35), `github/codeql-action/init@v4` (line 40), `github/codeql-action/autobuild@v4` (line 55), `github/codeql-action/analyze@v4` (line 63).

Locations:

- `.github/workflows/codeql-analysis.yml:35`
- `.github/workflows/codeql-analysis.yml:40`
- `.github/workflows/codeql-analysis.yml:55`
- `.github/workflows/codeql-analysis.yml:63`

### unpinned-uses (severity: high)

All `uses:` references in release.yml use mutable version tags instead of pinned 40-character SHA digests. Failing references: `actions/checkout@v6` (line 14), `actions/setup-node@v6` (line 18), `peter-murray/workflow-application-token-action@v4` (line 27).

Locations:

- `.github/workflows/release.yml:14`
- `.github/workflows/release.yml:18`
- `.github/workflows/release.yml:27`

### unpinned-uses (severity: high)

All `uses:` references in test.yml use mutable version tags instead of pinned 40-character SHA digests. Failing references: `actions/checkout@v5` (line 22), `actions/setup-node@v6` (line 26), `actions/upload-artifact@v5` (line 33), `actions/checkout@v6` (line 38), `actions/setup-node@v6` (line 40), `actions/download-artifact@v6` (line 55), `actions/download-artifact@v6` (line 60), `actions/upload-artifact@v5` (line 72).

Locations:

- `.github/workflows/test.yml:22`
- `.github/workflows/test.yml:26`
- `.github/workflows/test.yml:33`
- `.github/workflows/test.yml:38`
- `.github/workflows/test.yml:40`
- `.github/workflows/test.yml:55`
- `.github/workflows/test.yml:60`
- `.github/workflows/test.yml:72`

### missing-permissions (severity: medium)

test.yml has no top-level `permissions:` key, and the `build-and-report` job has no job-level `permissions:` block. Only the `test` job defines permissions (`pull-requests: write`). The `build-and-report` job therefore runs with the default (potentially broad) repository permissions.

Locations:

- `.github/workflows/test.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all unpinned action references across three workflow files by resolving each tag to its full 40-character SHA digest using lookup_action_sha. Pinned: actions/checkout@v6 → d23441a48e516b6c34aea4fa41551a30e30af803, actions/checkout@v5 → fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09, actions/setup-node@v6 → 249970729cb0ef3589644e2896645e5dc5ba9c38, github/codeql-action/{init,autobuild,analyze}@v4 → ff2f1c621b7f889edc0d3c761ac2e6a3f8cdb0dd, peter-murray/workflow-application-token-action@v4 → d17e3a9a36850ea89f35db16c1067dd2b68ee343, actions/upload-artifact@v5 → 330a01c490aca151604b8cf639adc76d48f6c5d4, actions/download-artifact@v6 → 018cc2cf5baa6db3ef3c5f8a56943fffe632ef53. Added top-level `permissions: {}` to test.yml and explicit `permissions: {}` to the build-and-report job to restrict default permissions.

