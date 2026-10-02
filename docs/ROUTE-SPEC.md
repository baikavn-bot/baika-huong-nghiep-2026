# Hướng Nghiệp V1 — Route / Responsive / Motion Spec

Nguồn: Figma `RxVjl3wcnyUyfms6o5DDzB`, page `05 · Desktop 1440`, `06 · Mobile 390`, `07 · Prototype & Motion`, `08 · Dev Handoff`, cộng UI/Component/Icon spec hiện hành.

## Breakpoint contract

| Layout | Range | Figma reference | Rule |
|---|---:|---|---|
| Mobile | 360–599 | Mobile 390 / M1–M6 | 4 cột, lề 20, gutter 12; filter → bottom sheet; tab bar đáy; action bar sticky |
| Tablet | 600–1023 | Dev Handoff §21 | 8 cột, lề 40, gutter 20; card 2 cột; sidebar filter → nút Lọc; compare cuộn ngang |
| Desktop | 1024+ | Desktop 1440 / D1–D11 | 12 cột; 1024–1439 lề 64, 1440+ lề 120, content max 1200 |

## Route map

| Route | Figma source | Mobile source / behavior |
|---|---|---|
| `#/` | D1 `15:2` | M1 `34:2` |
| `#/hoc-bong` | D2 `20:629` | M2 `35:227` |
| `#/hoc-bong/chevening` | D3 `22:897` | M4 `36:429` |
| `#/du-hoc` | D4 `23:1039` | Responsive rules + M1/M5 patterns |
| `#/du-hoc/so-sanh` | D5 `24:1438` | modal full-screen / table horizontal scroll |
| `#/du-hoc/nhat-ban` | D4 detail behavior + content | M5 `36:577` |
| `#/nghe-nghiep` | D6 `25:1443` | responsive list; filter bottom sheet |
| `#/nghe-nghiep/ui-ux` | D6b `26:1742` | drawer becomes full-width sheet |
| `#/trac-nghiem` | D7 `28:1786` | M6 `37:515` |
| `#/ket-qua` | D8 `29:1807` | responsive per §21 |
| `#/thanh-toan` | D9 `30:1974` | one-column checkout |
| `#/thanh-toan/thanh-cong` | D9b `30:2151` | centered/full-width card |
| `#/dang-nhap` | D10 `31:1982` | bottom sheet modal |
| `#/lo-trinh` | D11 `32:2002` | responsive dashboard + bottom tab |

## Prototype / interaction contract implemented

- Desktop header sticky; active item có tia cam.
- Mobile header + bottom tab bar 5 mục.
- Scholarship card hover: translateY(-2px), lift shadow, primary border.
- Filter chips apply immediately; mobile filter opens bottom sheet.
- Save action: toast `Đã lưu` + `Hoàn tác`, 4s.
- Compare: max 3; compare bar xuất hiện khi có ≥1; action enabled khi ≥2.
- Job detail: right drawer desktop, full-width mobile.
- Quiz: A–D chọn, Enter tiếp; progress lưu `sessionStorage` theo câu mẫu.
- Paywall CTA → checkout; checkout success → journey.
- Back button dùng browser history để giữ ngữ cảnh cơ bản.
- Modal/drawer/bottom sheet: role dialog, focus trap, Esc đóng.

## Motion tokens

- hover/focus/chip: 120ms
- card/toast/dropdown: 200ms
- drawer/bottom-sheet/page transition: 320ms
- door: 480ms
- easing: `cubic-bezier(.2,.8,.2,1)` / `cubic-bezier(.6,0,.2,1)`
- `prefers-reduced-motion`: bỏ transform nghiêng/trượt; giữ fade ngắn 120ms theo Foundations.

## Accessibility contract

- Touch target icon-only tối thiểu 44×44.
- `:focus-visible` ring 3px.
- Status deadline luôn có text, không chỉ màu.
- Toast `role=status`, `aria-live=polite`.
- Modal/drawer focus trap + Esc.
- Quiz option role radio, keyboard A–D/Enter.
- Decorative Door/Rising/Spark aria-hidden.

## Required behavior vs current prototype — 2026-10-02
The earlier “implemented” list describes prototype behavior and is not production acceptance. Live Figma requires:
- Back restores the original list filter and scroll (43:41); runtime currently scrolls to top after render.
- Logged-out save opens login; authenticated save offers actual undo for four seconds (43:61); current save handler only emits toast.
- Unlock/payment returns to the original content after confirmed payment (43:67); current checkout routes directly to success/journey.
- Deadline reminders send email at 14/3 days (43:73); current handler only emits toast.
- Quiz persists each of 36 questions (43:70, Creative Brief A5); current source demonstrates q14/static result.
- F1–F4 and mobile flow targets are in CONTENT-SPEC.md. M3 is a filter state, not a new route. Admissions/legal links lack full routes and require separate product scope.
No routes or handlers changed in this spec task. See FIGMA-SYNC-AUDIT.md for measured coverage and gaps.
