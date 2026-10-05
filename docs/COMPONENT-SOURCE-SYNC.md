# Component → source synchronization

2026-10-05 · Figma RxVjl3wcnyUyfms6o5DDzB · base main 1fa9b5d840853b41e26ac2c2452c94c28c882aa7.

Implemented with the existing vanilla TypeScript string renderers and semantic CSS tokens. Runtime content, routes, event selectors and dependencies preserved. Documentation-only Figma components are not production UI.

| Figma component | Node | Source renderer / caller |
|---|---|---|
| Timeline / Day Row | 146:1908 | TimelineDayRow / CareerDetailPage |
| Chip / Skill | 157:1989 | SkillChip / CareerDetailPage |
| Feature / Benefit Row | 157:1975 | BenefitRow / home path cards |
| Pricing / FAQ Row | 157:1981 | PricingFAQRow / home pricing |
| Auth / OTP Digit | 157:1992 | OTPDigit / LoginPage |
| Filter / Checkbox Count Row | 141:1912 | CheckboxCountRow / scholarship and career filters |
| Nav / Tab Item | 160:1979 | NavTabItem / home and route mobile tabs |
| Scholarship / Summary Text | 157:1986 | SummaryText / related and country scholarships |
| Scholarship / Inline Row / Mobile | 161:2023 | ScholarshipInlineRow / CountryDetailPage |
| Action Bar / Status + Mobile | 157:1996; 161:2010 | MobileActionBar / scholarship and country details |
| Account / Success Item | 157:2008 | AccountSuccessItem / CheckoutSuccessPage |
| Journey / Task Row | 160:1998 | JourneyTaskRow / JourneyPage |
| Form / Section Heading | 160:1999 | FormSectionHeading / CheckoutPage |
| Payment / Method Description | 136:1941 | Shared SummaryText typography / payment option descriptions |

Timeline: original 12 × 12 SVG dots, primary/spark variants, 56px time column, 16px gaps, 20px trailing space except final row, mono 14/1.4 and body 16/1.6. All four activities preserved. New exact Figma SVGs are local under src/components/assets; unchanged existing icon registry reused. Form panel 44 × 34, icon 18 × 18.

Validation: typecheck PASS; build PASS (233.01 kB before final activity-width refinement), existing external /data/hn-data.js warning retained; diff check PASS. Browser DOM checks pass for timeline asset loading, fonts, padding, transparent background, skill chip color/font, 9 benefits + 3 FAQ icon slots, 22px filter boxes and count font, mobile tab colors/one marker, action status font/color, scholarship rows without overflow, form panel loading and icons, success text composition, journey 24px boxes and done/next color. Checkbox toggling and OTP auto-advance pass. Six OTP inputs and existing routing behavior preserved. Mobile browser reported 375px effective viewport despite a requested 390px override; no claim of exact 390px pixel QA.

Screenshot capture failed twice with browser capture timeout. Pixel comparison is pending; this is implementation plus DOM/interaction verification, not a complete visual regression certification. No overall Figma/source percentage asserted. Broader existing screen layout/copy differences remain outside this component pass.

Git: main, HEAD 1fa9b5d, ahead0/behind0 against local origin/main at inspection. Working tree dirty with this task and pre-existing untracked desktop.ini. No commit/push. Source + PROJECT-STATE/TASKS/state/report updated together.
