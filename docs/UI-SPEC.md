# UI Spec — Hướng Nghiệp V1

**UI source of truth:** toàn bộ Figma file `RxVjl3wcnyUyfms6o5DDzB`.

Trang nguồn:
- `03 · Foundations` — token, type, grid, effect, visual grammar.
- `05 · Desktop 1440` — desktop screens.
- `06 · Mobile 390` — mobile screens.
- `07 · Prototype & Motion` — motion.
- `08 · Dev Handoff` — responsive/a11y/performance implementation rules.

Không dùng prototype v0.5 làm visual baseline. v0.5 chỉ là nguồn logic/data cần migrate.

## 1. Semantic colors

| Token CSS | Light | Dark |
|---|---|---|
| `--hn-bg-canvas` | `#FBF8F2` | `#0F1420` |
| `--hn-bg-surface` | `#FFFFFF` | `#171D2B` |
| `--hn-bg-sunken` | `#F4EFE6` | `#0A0E17` |
| `--hn-bg-sky` | `#EEF4FF` | `#111D38` |
| `--hn-bg-peach` | `#FFF4EA` | `#2A1C12` |
| `--hn-bg-inverse` | `#23282E` | `#EEF1F5` |
| `--hn-text-primary` | `#23282E` | `#EEF1F5` |
| `--hn-text-secondary` | `#4A515B` | `#CCD1D7` |
| `--hn-text-muted` | `#626A75` | `#A3AAB3` |
| `--hn-text-on-brand` | `#FFFFFF` | `#FFFFFF` |
| `--hn-text-inverse` | `#FFFFFF` | `#23282E` |
| `--hn-text-link` | `#004BD6` | `#8AB0FF` |
| `--hn-brand-primary` | `#0159F9` | `#4F86FC` |
| `--hn-brand-primary-hover` | `#004BD6` | `#8AB0FF` |
| `--hn-brand-primary-soft` | `#DCE8FF` | `#0E2350` |
| `--hn-brand-spark` | `#FE852C` | `#FE852C` |
| `--hn-brand-spark-text` | `#9A4007` | `#FFAA6B` |
| `--hn-border-default` | `#E4E6E9` | `#2E374B` |
| `--hn-border-strong` | `#A3AAB3` | `#626A75` |
| `--hn-status-open-bg` | `#E7F6EE` | `#12301F` |
| `--hn-status-open-fg` | `#12714B` | `#5FD39C` |
| `--hn-status-soon-bg` | `#FDECEA` | `#3A1A17` |
| `--hn-status-soon-fg` | `#A32418` | `#F2877C` |
| `--hn-status-closed-bg` | `#F1F1EF` | `#222A3B` |
| `--hn-status-closed-fg` | `#626A75` | `#A3AAB3` |
| `--hn-focus-ring` | `#4F86FC` | `#8AB0FF` |
| `--hn-highlight-marker` | `#FFE7A3` | `#2A1C12` |

Production UI dùng semantic token; primitive palette chỉ là alias source, không gọi trực tiếp nếu chưa có lý do.

## 2. Typography

| Style | Font | Size | Weight | Line height | Letter spacing |
|---|---|---:|---:|---:|---:|
| Display/XL | Be Vietnam Pro | 76 | 800 | 104% | -2.5% |
| Display/L | Be Vietnam Pro | 56 | 800 | 108% | -2% |
| Heading/H1 | Be Vietnam Pro | 40 | 700 | 115% | -1.5% |
| Heading/H2 | Be Vietnam Pro | 32 | 700 | 120% | -1% |
| Heading/H3 | Be Vietnam Pro | 24 | 700 | 125% | -0.5% |
| Title/L | Be Vietnam Pro | 20 | 600 | 135% | -0.3% |
| Title/M | Be Vietnam Pro | 17 | 600 | 140% | 0 |
| Body/L | Be Vietnam Pro | 18 | 400 | 160% | 0 |
| Body/M | Be Vietnam Pro | 16 | 400 | 160% | 0 |
| Body/S | Be Vietnam Pro | 14 | 400 | 155% | 0 |
| Caption | Be Vietnam Pro | 12 | 500 | 145% | 0.2% |
| Label/Eyebrow | Be Vietnam Pro | 12 | 600 | 130% | 8%, uppercase |
| Button/M | Be Vietnam Pro | 16 | 600 | 120% | 0 |
| Button/S | Be Vietnam Pro | 14 | 600 | 120% | 0 |
| Accent/Serif XL | Fraunces | 76 | 600 italic | 104% | -2% |
| Accent/Serif M | Fraunces | 22 | 400 italic | 140% | 0 |
| Note/Hand | Patrick Hand | 20 | 400 | 125% | 0 |
| Data/Mono | JetBrains Mono | 14 | 500 | 140% | 0 |
| Data/Mono Bold | JetBrains Mono | 14 | 700 | 140% | 0 |

Rules:
- Be Vietnam Pro gánh UI chính.
- Fraunces chỉ một cụm cảm xúc trong mỗi khối; không dùng cho button/số.
- Patrick Hand tối đa một lời dặn/màn hình; không dùng cho thông tin bắt buộc.
- JetBrains Mono dùng cho ngày, học phí, lương, giá và số liệu.
- Nội dung không nhỏ hơn 14px; 12px chỉ caption/eyebrow.

## 3. Spacing, radius, effects

Spacing scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px`.

Radius: `sm=8`, `md=14`, `lg=20`, `xl=28`, `full=999px`.

Effects:
- Shadow/Soft: `0 2px 6px rgba(35,40,46,.06), 0 14px 32px -12px rgba(35,40,46,.12)`.
- Shadow/Lift: `0 20px 40px -16px rgba(1,89,249,.22)`.
- Focus/Ring Figma effect: 3px ring `focus/ring`.

**Lưu ý lệch nguồn nhỏ:** mô tả Button trong component ghi “focus vòng xanh 2px”, nhưng Dev Handoff/Effect Style dùng 3px. Production spec lấy **token Effect Style/Dev Handoff = 3px**; nếu designer muốn 2px cần chốt lại và cập nhật cả Figma + spec.

## 4. Responsive grid

| Breakpoint | Grid | Main behavior |
|---|---|---|
| Mobile 360–599 | 4 cột, margin 20, gutter 12 | Hero stack; Door thu góc phải dưới; card 1 cột; filter bottom sheet; action/tab bar sticky bottom |
| Tablet 600–1023 | 8 cột, margin 40, gutter 20 | Card 2 cột; filter sidebar thành nút; compare table scroll ngang, cột đầu sticky |
| Desktop 1024–1439 | 12 cột, margin 64, gutter 24 | Cùng desktop 1440 nhưng co margin; hero Door 80% |
| Desktop 1440+ | 12 cột, margin 120, gutter 24 | content max 1200; section background full width |

Typography responsive: Display `76 → 56 → 44`; H1 `40 → 32 → 28`.

## 5. Composition / visual grammar

- Bất đối xứng 7/5: text trái, Door panel phải.
- Door được bleed mép phải; top edge luôn dốc lên trái→phải 12–14%.
- Section background luân phiên `canvas → sunken → sky → surface`; không lặp hai section cùng nền liền nhau.
- Mỗi trang có đúng một “big moment”: hero hoặc infographic.
- V1 không stock photo; hình học thương hiệu là visual chính.
- Không gradient tím/xanh, glow, neon, glassmorphism, noise, blob, icon 3D, mascot.
- ISO stamp thay flag emoji.
- Marker vàng chỉ dưới 1–3 từ khóa, cao khoảng 40% thân chữ.
- Spark cam 1–3 cái/màn hình.
- Hand note tối đa 1/màn hình.

## 6. Motion

Tokens:
- fast 120ms
- base 200ms
- slow 320ms
- door 480ms
- card stagger 40ms
- bar stagger 60ms
- rise distance 24px

Production chỉ animate `transform` + `opacity`.
`prefers-reduced-motion`: bỏ nghiêng/trượt; chỉ fade 120ms.

## 7. Accessibility

- `html lang="vi"`.
- Keyboard focus luôn hiển thị, tab order theo reading order.
- Deadline/status luôn có text, không truyền đạt chỉ bằng màu.
- Toast: `role=status`, `aria-live=polite`.
- Modal/drawer/bottom sheet: focus trap + Esc để đóng.
- Quiz: A–D + Enter; mỗi option là radio có label.
- Decorative Door/Spark/RisingPanel: `aria-hidden=true`.
- Ảnh thật sau này phải có alt mô tả người + hành động.
- Mobile touch target tối thiểu 44×44.

## 8. Performance

- Preload Be Vietnam Pro 400/600/700/800 + JetBrains Mono 500/700; subset latin+vietnamese.
- Fraunces Italic + Patrick Hand load sau, `font-display: swap`.
- Brand geometry inline SVG, mục tiêu mỗi hình <1KB.
- V1 không ảnh nặng.
- Target: LCP <2.5s trên 4G, CLS <0.05.
- Scholarship/job list pagination: 12 items; filter client-side trên data đã load.


## 9. Icon system

**Design source of truth:** Figma `04 · Components` → frame `Icons` (`67:2168`) trong file `RxVjl3wcnyUyfms6o5DDzB`.

Rules:
- Functional UI icon chỉ dùng icon đã có trong registry `src/icons/index.ts`; không dùng emoji, ký tự Unicode thay icon, icon font, hoặc SVG tự phát.
- Tên icon trong code dùng đúng kebab-case theo Figma, ví dụ `arrow-right`, `calendar-days`, `lock-keyhole`, `graduation-cap`.
- Base grid là 24×24, stroke mặc định 2px, linecap/linejoin round. Kích thước render chuẩn: 14, 16, 18, 20, 22, 24px theo component/context.
- Màu icon luôn `currentColor` và đi qua semantic color token của component cha; không hard-code màu vào SVG/icon component.
- Icon chỉ trang trí: `aria-hidden=true`. Icon mang nghĩa mà không có text kèm theo: phải có accessible label trên button/link hoặc truyền `label` cho `Icon()`.
- Touch target vẫn tối thiểu 44×44; kích thước glyph không đồng nghĩa kích thước hit area.
- `DoorPanel`, `RisingPanel`, `Spark` là brand geometry, **không** thuộc icon set. Logo/provider marks cũng là asset riêng.
- Figma icon set và source registry phải đổi cùng một commit/task. Khi thêm icon mới: thêm vào Figma → registry → `ICON-SPEC.md` → component/screen sử dụng.


## 2026-10-02 visual parity review
- Icons render as inline SVG at component render time; no hydration dependency for standalone HTML.
- Brand shapes DoorPanel/RisingPanel/Spark use rounded vector geometry from Figma Foundations.
- Scholarship Card, Footer, D2 Page header/Filter sidebar, D3 Detail hero, D4 Controls, D6 Header/Filter/result banner aligned to current Figma nodes.
