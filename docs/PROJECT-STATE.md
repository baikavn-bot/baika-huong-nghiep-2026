# Project State

Last updated: 2026-10-02T15:21:45+07:00
Updated by: Codex

## Project and Git snapshot
- Project: Hướng nghiệp
- Repository: baikavn-bot/baika-huong-nghiep-2026
- Local checkout: D:\BK. Web\hnfull
- Current/default branch: main
- Inspected latest commit: a296ee0a3ea58c6210f29179a0b8711838130826 — Visual parity R3 - align UI with Figma
- Origin fetch/push URL: https://github.com/baikavn-bot/baika-huong-nghiep-2026.git
- Before governance edits: working tree clean; index empty; ahead 0 / behind 0 against origin/main.
- GitHub main independently checked with ls-remote: a296ee0a3ea58c6210f29179a0b8711838130826, matching local HEAD and origin/main.
- This snapshot records the base before its enclosing governance commit. Resolve that commit with `git log -1 --format=%H -- .ai/state.json`, then recheck HEAD/status/ahead-behind. A successful unpushed governance commit adds one local commit over the observed remote; that outcome must be verified after commit.
- Push: not authorized in this task; not performed.

## Architecture and source
- Vite + TypeScript + vanilla DOM; hash routing; CSS semantic tokens and components; vite-plugin-singlefile.
- package.json devDependencies: typescript ^5.9.0, vite ^7.1.0, vite-plugin-singlefile ^2.3.0. Build used installed Vite 7.3.6.
- src/main.ts, src/runtime.ts: bootstrap/router; src/home.ts and src/pages.ts: screens; src/components/index.ts: render functions; src/icons/index.ts: icon registry; src/styles/: tokens/typography/foundations/components/home/pages; src/lib/html.ts: helpers.
- Specs: docs/ARCHITECTURE.md, UI-SPEC.md, COMPONENT-SPEC.md, ICON-SPEC.md, ROUTE-SPEC.md.
- Runtime data contract: /data/hn-data.js -> window.HN_DATA; embedded fallback data. Some copy/data remains prototype content per R3 QA report.
- No architecture, UI, route, dependency, Vercel configuration or remote changes in GOV-001.

## Visual source and milestone
- Figma file: RxVjl3wcnyUyfms6o5DDzB.
- Relevant pages: 03 Foundations; 04 Components; 05 Desktop 1440; 06 Mobile 390; 07 Prototype & Motion; 08 Dev Handoff.
- Milestone: Visual Parity R3; implementation present in inspected commit and local source; visual acceptance IN_PROGRESS.
- Local .website-agent/qa/visual-parity-r3.md describes R3 scope but is ignored by Git, so it is supporting local evidence, not a durable shared report.
- Still outstanding per existing QA report: exact approved durable logo assets; visual audit 1440/1024/768/390; repeatable screenshot comparison. No new visual audit in this task.

## Validation on 2026-10-02
- Typecheck: PASS, exit 0 (`npx --no-install tsc --noEmit`; local installed compiler; no package download).
- Build: PASS, exit 0 (`npm run build`); 15 modules; dist/index.html 175.23 kB, gzip 41.39 kB.
- Build warning: external /data/hn-data.js script cannot be bundled without type=module. Existing architecture intentionally loads this runtime endpoint separately; no configuration change made.
- dist/ is ignored; build output is not included in the governance commit.
- Automated visual regression: not established/ not run in this task.

## Deployment
- Package claims Vercel demo deployed at https://huongnghiep.tech and https://www.huongnghiep.tech with GitHub pipeline active.
- These claims and the deployed revision are UNVERIFIED in this task. Repository/GitHub main equality establishes remote code presence, not deployment success.

## Tasks and baseline discrepancies
- GOV-001: protocol preparation and reconciliation complete; VP-001: repo/typecheck/build reconciliation complete.
- Active task: none; next queued task VP-002 (desktop visual audit), not started.
- Package latest_commit was null and checks needed reconciliation; actual R3 commit already exists and checks now pass.
- Package R3 source-prepared/local workflow assertions replaced by directly inspected Git/source evidence.
- Historical R3 report said build unavailable; this machine builds successfully now.
- Deployment confidence reduced from asserted deployed_demo to unverified baseline claim.

Repository observations override stale conversational memory. Snapshots do not replace live Git checks.
