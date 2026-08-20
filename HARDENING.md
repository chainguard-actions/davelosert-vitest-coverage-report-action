<!-- markdownlint-disable -->

# Hardening Report: davelosert--vitest-coverage-report-action/v2.11.1

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **davelosert--vitest-coverage-report-action/v2.11.1** was hardened automatically. 4 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

All `uses:` references in codeql-analysis.yml use mutable version tags instead of pinned 40-character SHA digests, making the workflow vulnerable to supply-chain attacks if the referenced action tags are moved. Failing references: `actions/checkout@v6` (line 35), `github/codeql-action/init@v4` (line 39), `github/codeql-action/autobuild@v4` (line 52), `github/codeql-action/analyze@v4` (line 64).

Locations:

- `.github/workflows/codeql-analysis.yml:35`
- `.github/workflows/codeql-analysis.yml:39`
- `.github/workflows/codeql-analysis.yml:52`
- `.github/workflows/codeql-analysis.yml:64`

### unpinned-uses (severity: high)

All `uses:` references in release.yml use mutable version tags instead of pinned 40-character SHA digests. Failing references: `actions/checkout@v6` (line 13), `actions/setup-node@v6` (line 17), `actions/create-github-app-token@v3` (line 24).

Locations:

- `.github/workflows/release.yml:13`
- `.github/workflows/release.yml:17`
- `.github/workflows/release.yml:24`

### unpinned-uses (severity: high)

All `uses:` references in test.yml use mutable version tags instead of pinned 40-character SHA digests. Failing references: `actions/checkout@v5` (line 22), `actions/setup-node@v6` (line 26), `actions/upload-artifact@v5` (line 32), `actions/checkout@v6` (line 40), `actions/setup-node@v6` (line 42), `actions/download-artifact@v6` (line 53), `actions/download-artifact@v6` (line 58), `actions/upload-artifact@v5` (line 76).

Locations:

- `.github/workflows/test.yml:22`
- `.github/workflows/test.yml:26`
- `.github/workflows/test.yml:32`
- `.github/workflows/test.yml:40`
- `.github/workflows/test.yml:42`
- `.github/workflows/test.yml:53`
- `.github/workflows/test.yml:58`
- `.github/workflows/test.yml:76`

### missing-permissions (severity: medium)

test.yml has no top-level `permissions:` key, and the `build-and-report` job has no job-level `permissions:` key. Only the `test` job defines permissions (`pull-requests: write`). The `build-and-report` job runs with the default, overly broad token permissions.

Locations:

- `.github/workflows/test.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all unpinned action references across three workflow files by resolving each tag to its full 40-character SHA digest using lookup_action_sha:

**codeql-analysis.yml** (4 fixes):
- actions/checkout@v6 → @d23441a48e516b6c34aea4fa41551a30e30af803
- github/codeql-action/init@v4 → @ff2f1c621b7f889edc0d3c761ac2e6a3f8cdb0dd
- github/codeql-action/autobuild@v4 → @ff2f1c621b7f889edc0d3c761ac2e6a3f8cdb0dd
- github/codeql-action/analyze@v4 → @ff2f1c621b7f889edc0d3c761ac2e6a3f8cdb0dd

**release.yml** (3 fixes):
- actions/checkout@v6 → @d23441a48e516b6c34aea4fa41551a30e30af803
- actions/setup-node@v6 → @249970729cb0ef3589644e2896645e5dc5ba9c38
- actions/create-github-app-token@v3 → @bcd2ba49218906704ab6c1aa796996da409d3eb1

**test.yml** (8 unpinned-uses fixes + 1 missing-permissions fix):
- actions/checkout@v5 → @fbc6f3992d24b796d5a048ff273f7fcc4a7b6c09
- actions/setup-node@v6 → @249970729cb0ef3589644e2896645e5dc5ba9c38 (x2)
- actions/upload-artifact@v5 → @330a01c490aca151604b8cf639adc76d48f6c5d4 (x2)
- actions/checkout@v6 → @d23441a48e516b6c34aea4fa41551a30e30af803
- actions/download-artifact@v6 → @018cc2cf5baa6db3ef3c5f8a56943fffe632ef53 (x2)
- Added top-level `permissions: {}` to restrict default token permissions
- Added job-level `permissions: { pull-requests: write, contents: read }` to build-and-report job

