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

## Superseding live reconciliation — SPEC-001, 2026-10-02
- Inspected base HEAD/origin/main: 608a2191f711e9f1a92120c2728a342a673a8a75. Previous governance commit was pushed; observed tree clean, ahead 0/behind 0 before edits.
- Figma read access verified via connector/Plugin API, all ten pages inventoried; required spec pages/text/components/variables/styles read live. Desktop Dev Mode MCP configuration was not tested.
- SPEC-001 complete; next VP-002. CONTENT-SPEC/SCREEN-SPEC and live evidence supplement existing docs. No source/UI/route/dependency/config changes.
- Coverage: 130/130 token values, 38/38 icon-name membership, 23/23 component render functions, 13/13 canonical desktop screen coverage. Overall visual parity percentage remains unknown; see FIGMA-SYNC-AUDIT.
- Content/behavior gaps are recorded, not fixed. Visual regression still not run; deployment remains unverified. No push for this spec update.
- Typecheck/build rerun after spec update: PASS, exit 0; same external data-script warning. Snapshot base semantics remain ADR-007.

## ICON-001 — 2026-10-02
- 38 exact local SVG assets installed; icon slots updated across shared components, Home, quiz, checkout and journey. Typecheck/build/diff checks PASS. Browser smoke PASS for 14 routes at 1440/390, all 38 assets load.
- No overall pixel parity claim. Figma tool quota prevented additional M3/M4/M6 high-fidelity contexts; official logos remain outstanding. See ICON-UPDATE-REPORT.md.
- Active task: none; next VP-002. Working tree dirty with prior SPEC-001 and current ICON-001; no commit/push. main/origin/main still observed at 608a219, ahead0/behind0 (local tracking ref).

## Publication authorization
User authorized commit and push of SPEC-001 and ICON-001. This snapshot is recorded before those operations; resolve the enclosing commit and verify origin/main through Git.

## ICON-002 — Icon text/link color
Updated default icon color and explicit blue glyph overrides to --hn-text-link; filled controls preserve contrast. Base main 7dacb4c, clean before edits; previous SPEC-001/ICON-001 commit/push confirmed. Current color update is uncommitted/unpushed. Typecheck/build verification recorded below.
- ICON-002 validation: typecheck/build PASS; production browser colors match Light rgb(0,75,214) and Dark rgb(138,176,255); primary CTA icon remains white. Existing external data-script build warning retained.

## LOGO-001 — 2026-10-05
Original Figma PNG assets (mark, wordmark, tagline) installed unchanged under src/brand/assets. Shared Logo composition replaces text/CSS approximations in desktop/mobile navigation, footer, desktop quiz, checkout and login. Nodes4:4/4:7; slot sizes verified against component/screen instances. Typecheck/build PASS; browser image loading and geometry PASS at1440/390. Targeted screenshots inspected. Raster source preserved; no invented vector conversion. No commit/push in this task; pre-existing untracked desktop.ini preserved.

## COMPONENT-SYNC-001 — 2026-10-05
Shared TypeScript renderers and production callers synchronized to current Figma UI component contracts; see COMPONENT-SOURCE-SYNC.md. Timeline, chips, benefits, FAQ, OTP, filters, mobile tabs, scholarship summaries/rows, action bars, success items, journey tasks and form headings updated. Typecheck/build/diff checks PASS; browser DOM/interaction checks PASS. Browser screenshot capture timed out; pixel acceptance remains pending. Base main 1fa9b5d840853b41e26ac2c2452c94c28c882aa7, ahead0/behind0 local origin/main; dirty with implementation plus pre-existing desktop.ini. No commit/push. No route/dependency/remote/config changes.

## CAREER-OVERLAY-001 — 2026-10-05
Figma 183:4663 / panel183:5188 implemented as overlay on the preserved current page. Desktop680px panel below76px nav; mobile full-width below60px nav; independently scrollable viewport-bounded panel. Background DOM/input values/scroll/focus preserved; inert and scroll lock while open; X/scrim/Escape close; direct detail URL falls back to careers on close. Exact Figma responsibility/salary SVGs saved locally; panel typography/content/paywall/actions aligned to target. Browser checks: panel scrollTop1049 while windowY602 unchanged, search value retained after close, focus restored, direct-link close works, mobile390 no horizontal overflow. Screenshot inspected and saved in chat workspace career-overlay-preview.png. Typecheck/build verification below; no commit/push. Prior component-sync edits and desktop.ini preserved.


## NAV-SPACING-001 — 2026-10-05
Nav/Desktop synchronized to Figma 9:45: logo, five links, active marker, primary login button. Page containers, navigation, checkout and quiz use space/80 horizontal gutters from 600px; mobile retains 20px pending user preference. Typecheck/build PASS (existing external data-script bundling warning). Browser: 1440px home/directories/checkout/quiz gutters verified; 1024/768 directories and 390 mobile no horizontal overflow. Navigation height 76px desktop; tablet may wrap. Base 948feaf039752b708ee3e78a9a809663fc6bb0a5; prior commit/push confirmed through local origin/main. Current task uncommitted/unpushed; desktop.ini preserved.
