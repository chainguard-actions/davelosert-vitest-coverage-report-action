<!-- markdownlint-disable -->

# Hardening Report: davelosert--vitest-coverage-report-action/v2.13.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **davelosert--vitest-coverage-report-action/v2.13.0** was hardened automatically. 1 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### missing-permissions (severity: medium)

The workflow file .github/workflows/test.yml has no top-level `permissions:` key, and the `build-and-report` job has no job-level `permissions:` block. Only the `test` job defines permissions (`pull-requests: write`). The `build-and-report` job inherits the default (broad) repository permissions, violating the principle of least privilege.

Locations:

- `.github/workflows/test.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** missing-permissions

**Notes:**

Added top-level `permissions: {}` to restrict defaults, added a job-level `permissions:` block to the `build-and-report` job with `contents: read`, `pull-requests: write`, and `checks: write` (minimum needed for checkout, PR commenting, and commit checks), and added `contents: read` to the `test` job's existing permissions block for its checkout step.

