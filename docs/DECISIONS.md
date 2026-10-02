# Decisions

## ADR-001 — Frontend stack
Status: ACCEPTED

Use Vite + TypeScript + vanilla DOM for V1.
Do not migrate frameworks without explicit approval.

## ADR-002 — Routing
Status: ACCEPTED

Use hash routing for V1.

## ADR-003 — Visual authority
Status: ACCEPTED

Figma file `RxVjl3wcnyUyfms6o5DDzB` is the visual source of truth.

## ADR-004 — Icon system
Status: ACCEPTED

Use the standardized icon registry and semantic icon names.
Do not introduce emoji, Unicode UI icons, icon fonts, or ad-hoc standard UI SVGs.

## ADR-005 — AI operating model
Status: ACCEPTED

- ChatGPT = orchestrator/reviewer
- Codex = implementation executor
- Git = implementation source of truth
- Project-state files = cross-session synchronization mechanism

## ADR-006 — Production authority
Status: ACCEPTED

Human owner retains final authority for destructive operations and production-connected pushes/deployments.

## ADR-007 — Versioned state snapshots
Status: ACCEPTED

Commit governance snapshots with the implementation when practical. Record the inspected base commit in `latest_commit`; resolve the commit containing the snapshot via `git log -1 --format=%H -- .ai/state.json`. This avoids a self-referential commit hash. Git status and remote observations are timestamped and must be rechecked each session. ChatGPT and Codex synchronize through these versioned files, not automatic shared chat memory. Deployment claims inherited from a package remain unverified until independently checked.
