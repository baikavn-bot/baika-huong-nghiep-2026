# AGENTS.md

## Roles
- ChatGPT: planning, orchestration, review, Figma parity review, acceptance criteria, prioritization.
- Codex: implementation, refactor, testing, build verification, Git operations.
- Human owner: final authority for product decisions, destructive actions, production push/deploy approval, and credentials.

## Sources of truth
1. Git repository = implementation truth.
2. Figma file `RxVjl3wcnyUyfms6o5DDzB` = visual truth.
3. Vercel = deployment truth.
4. `docs/PROJECT-STATE.md` = current project snapshot.
5. `docs/TASKS.md` = work queue and acceptance criteria.
6. `docs/DECISIONS.md` = durable decisions.
7. `.ai/state.json` = machine-readable state.

## Required workflow
Before implementation:
1. Read this file.
2. Read `docs/PROJECT-STATE.md`.
3. Read `docs/TASKS.md`.
4. Read `docs/DECISIONS.md`.
5. Read `.ai/state.json`.
6. Inspect Git status, branch, recent commits, and remote.
7. Repository state overrides stale chat history.

After implementation:
1. Run available typecheck/build/tests.
2. Update `PROJECT-STATE.md`.
3. Update `TASKS.md`.
4. Update `DECISIONS.md` only for new durable decisions.
5. Update `.ai/state.json`.
6. Commit code and state together when practical.
7. Report files changed, validation, commit hash, blockers, and next task.

## Git rules
- Default branch: `main`.
- Do not rewrite history.
- Do not force-push.
- Do not change remote without approval.
- Do not push production-connected branches unless explicitly requested.
- Prefer one coherent commit per task.

## Security
- Never commit secrets, `.env`, API keys, passwords, tokens, recovery codes, or credentials.

## Project constraints
- Frontend: Vite + TypeScript + vanilla DOM.
- Routing: hash routing.
- Do not introduce React, Vue, Astro, Tailwind, or another framework without approval.
- Figma is authoritative for visual parity.
- Preserve standardized icon naming and design tokens.

## Snapshot protocol
- Read state files from the same Git revision as the implementation. Sharing a chat does not automatically synchronize another checkout or session.
- State fields describe the observed repository before the commit containing them. `latest_commit` is the inspected base commit, not a claim about current HEAD after that commit.
- Resolve the snapshot commit with `git log -1 --format=%H -- .ai/state.json`; inspect current HEAD/status/remote before every task.
- Working-tree and ahead/behind fields are timestamped observations. Do not treat a planned commit or push as completed.
- Unverified deployment claims must remain explicitly unverified until checked against Vercel.
