# ICON-001 — Figma icon placement

Updated 2026-10-02 in D:\BK. Web\hnfull; base main 608a2191f711e9f1a92120c2728a342a673a8a75.

- 38/38 downloaded 24×24 SVGs retained byte-for-byte. Provenance and SHA256: figma/icon-assets.json. All 38 load successfully in a local browser gallery.
- Runtime imports local SVG URLs as CSS masks in sized slots; currentColor follows existing tokens. No icon dependency, remote URL, SVG geometry edit, architecture/config/route change. Icon API preserved; iconSVG is a legacy function name returning mask markup.
- Shared slots: search submit arrow16, select chevron18, navigation phone16, postcard wallet16, completed journey check20, selected quiz check22, pricing checks18 and CTA arrow20, compare-chip x14 with removal, toast circle-check14, auth phone/mail16.
- Home slots: timer/sparkles/save; calendar-clock/file-text/bell-ring; globe/badge-dollar-sign/refresh-cw, each18. FAQ credit-card/mail/smartphone18; contact phone26 desktop/20 mobile. Mobile quiz back22; previous/next arrow20 follow Figma. Checkout mail/receipt18, drawer close20, weekly clock16 only for unfinished items.
- Checks: typecheck PASS; production build PASS (210.85 kB, gzip49.09kB); git diff --check PASS. Existing external /data/hn-data.js bundling warning retained.
- Browser smoke: 14 actual routes × 1440/390; no missing mask or page errors. Quiz selected check visible; compare x removes an actual selected country (3→2). Screenshots inspected for gallery, pricing, quiz, login and compare. These are targeted checks, not overall pixel parity acceptance.

## Limits and remaining work

Figma MCP hit its Full-seat Professional tool-call limit while requesting high-fidelity contexts for M3 (35:387), M4 (36:429), M6 (37:515). Their icon inventory was already read, but those full contexts require later revalidation. D1 top-level context was sparse; component contexts and inventories informed shared slots. Overall visual match is unmeasured. Official brand/provider logos are separate assets and remain outstanding; no substitute logos added. Existing page layout/copy/service gaps in FIGMA-SYNC-AUDIT remain.

No commit or push for this task: previous SPEC-001 documentation edits and ICON-001 changes remain in the working tree together for review. main/origin/main observed at base with ahead0/behind0; remote was not fetched in this task.
