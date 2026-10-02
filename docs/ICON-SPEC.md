# Icon Spec — Hướng Nghiệp V1

**Figma source of truth:** file `RxVjl3wcnyUyfms6o5DDzB`, page `04 · Components`, frame `Icons` (`67:2168`).

**Code source of truth:** `src/icons/index.ts`.

## Contract

- Base icon grid: **24×24**.
- Stroke: **2px**, `round` cap, `round` join.
- Runtime color: `currentColor`; component cha quyết định semantic token.
- Render sizes: **14 / 16 / 18 / 20 / 22 / 24px**. Không scale bằng CSS transform.
- Decorative icon: `aria-hidden=true`. Icon-only button/link phải có `aria-label`.
- Không dùng emoji, Unicode symbol, icon font hoặc SVG tự phát để thay icon functional.
- Không đổi tên icon theo ngữ cảnh. Code giữ đúng kebab-case Figma.
- Brand geometry (`DoorPanel`, `RisingPanel`, `Spark`), logo BAIKA và provider logo không thuộc icon set.

## Registry chuẩn hiện tại

| Code/Figma name | Vai trò chính |
|---|---|
| `search` | search field / search action |
| `arrow-right` | CTA/link đi tiếp |
| `arrow-left` | back |
| `chevron-down` | select/dropdown |
| `check` | selected/checklist/success item |
| `phone` | hotline/phone auth |
| `heart` | saved/favorite action ở nav mobile |
| `menu` | mobile menu |
| `bookmark` | lưu học bổng/nước |
| `calendar-days` | deadline/date |
| `calendar-clock` | deadline/reminder timing |
| `lock-keyhole` | paywall/locked content |
| `wallet-cards` | cost/visa/finance metadata |
| `plus` | add to compare |
| `mail` | email/auth/delivery |
| `house` | mobile tab Trang chủ |
| `graduation-cap` | mobile tab Học bổng |
| `plane` | mobile tab Du học |
| `briefcase-business` | mobile tab Nghề |
| `user-round` | mobile tab Của tôi/account |
| `sliders-horizontal` | filter controls |
| `x` | remove/close |
| `share-2` | share |
| `shield-check` | secure payment |
| `circle-check-big` | success confirmation/toast |
| `clock` | due item/time |
| `external-link` | external source |
| `save` | save/progress action |
| `bell-ring` | reminder/notification |
| `file-text` | criteria/document checklist |
| `sparkles` | suggestion/result aid |
| `credit-card` | payment method |
| `badge-dollar-sign` | cost/value |
| `globe` | countries/international scope |
| `timer` | quiz duration |
| `receipt-text` | invoice |
| `smartphone` | device/account delivery |
| `refresh-cw` | policy/data update |

## Figma → code mapping policy

`src/icons/index.ts` là boundary duy nhất với package icon. Tên Figma và tên code public luôn giống nhau. Khi package implementation dùng export khác tên, registry alias nội bộ, ví dụ:

- `house` → implementation `Home`
- `briefcase-business` → implementation `Briefcase`
- `circle-check-big` → implementation `CheckCircle2`

Screen/component **không được biết** alias nội bộ này.

## Accessibility

- Icon có text label kế bên: decorative (`aria-hidden`).
- Icon-only control: accessible name đặt trên control, ví dụ `aria-label="Lưu học bổng"`.
- Không truyền nghĩa trạng thái chỉ bằng icon/màu. Deadline, selected, locked, success vẫn phải có text/state semantics.

## Workflow khi thêm icon

1. Chọn icon trong frame `Icons` trên Figma.
2. Dùng đúng tên kebab-case của Figma.
3. Thêm vào `ICON_NAMES` + implementation map trong `src/icons/index.ts`.
4. Cập nhật bảng registry trong file này nếu là semantic icon mới.
5. Dùng qua `Icon()` trong component/screen; không import package trực tiếp.
6. Chạy build/typecheck và rà `grep` để đảm bảo không còn Unicode/emoji placeholder.


## 2026-10-02 visual parity review
- Icons render as inline SVG at component render time; no hydration dependency for standalone HTML.
- Brand shapes DoorPanel/RisingPanel/Spark use rounded vector geometry from Figma Foundations.
- Scholarship Card, Footer, D2 Page header/Filter sidebar, D3 Detail hero, D4 Controls, D6 Header/Filter/result banner aligned to current Figma nodes.

## Live registry reconciliation — 2026-10-02
Icons frame contains 1,694 entries. All 38 source registry names exist in that frame at 24×24 (100% name membership). Source uses a selected subset, not a missing requirement to ship the whole catalog. Exact matched node IDs are in figma/spec-snapshot.json. SVG vector-path equality was not tested; do not report 100% glyph parity from names alone. Runtime emits SVG directly and hydrateIcons is a compatibility no-op.

## ICON-001 implementation update
The 38 registry glyphs now use unchanged local Figma SVG exports as CSS masks with currentColor. Shared and screen-specific slots were updated; see ICON-UPDATE-REPORT.md and figma/icon-assets.json. iconSVG remains a compatibility name but returns mask markup. Overall pixel parity is not certified.
