# Tasks

Status values: TODO / IN_PROGRESS / BLOCKED / VERIFY / DONE

## GOV-001 — Establish AI project-state protocol
Status: DONE
Owner: Codex

Acceptance:
- `AGENTS.md`
- `docs/PROJECT-STATE.md`
- `docs/TASKS.md`
- `docs/DECISIONS.md`
- `.ai/state.json`
- reconcile all state against actual repo
- no secrets in state files

## VP-001 — Reconcile Visual Parity R3
Status: DONE
Owner: Codex

Acceptance:
- confirm R3 is present
- record current branch and latest commit
- run typecheck
- run build
- update project state

## VP-002 — Desktop visual audit 1440
Status: TODO
Owner: Codex

Acceptance:
- compare key desktop screens against Figma
- record concrete mismatches
- fix only verified mismatches
- typecheck/build pass

## VP-003 — Tablet visual audit
Status: TODO
Owner: Codex

Acceptance:
- validate 1024 and 768
- responsive grid/filter/overflow/typography behavior
- no clipping or layout overflow

## VP-004 — Mobile visual audit 390
Status: TODO
Owner: Codex

Acceptance:
- validate M2–M6
- nav/tabbar/filter sheet/sticky bars/quiz/safe area

## VP-005 — Exact logo asset parity
Status: BLOCKED
Owner: Codex

Blocker:
A durable exact approved logo asset is still required.

## QA-001 — Visual regression workflow
Status: TODO
Owner: Codex

Acceptance:
- repeatable local screenshots for key routes
- at minimum 1440 and 390
- documented workflow

## Reconciliation — 2026-10-02
- GOV-001: five governance files prepared from the package, reconciled against clean main at a296ee0a3ea58c6210f29179a0b8711838130826; typecheck/build PASS. Completion means protocol content and reconciliation; the enclosing commit is resolved through Git.
- VP-001: R3 commit and local source confirmed; typecheck/build PASS. This does not mark pixel-level visual acceptance complete.
- Active task: none. Next queued task: VP-002; not started by this governance task.
- VP-005 remains BLOCKED based on the existing R3 QA report; logo/Figma revalidation is outside this task.
- No push in GOV-001.
