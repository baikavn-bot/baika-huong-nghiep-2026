# Component Spec — Hướng Nghiệp V1

**Nguồn:** Figma page `04 · Components` (`2:5`) + `08 · Dev Handoff`.

Quy ước code hiện tại: component là TypeScript render function trả semantic HTML; visual nằm ở `src/styles/components.css`. Khi dựng screen, props/data mapping có thể mở rộng nhưng **không thêm visual variant ngoài Figma** nếu chưa được duyệt.

## 1. Button — Figma `8:130`

Props: `label`, `showIcon`; variants `Type = Primary | Secondary | Ghost | Spark`, `Size = M | S`, `State = Default | Hover | Focus | Disabled`.

Rules: Primary tối đa 1 CTA chính/khối; Spark chỉ cho mở khóa gói năm; Ghost cho secondary action/link; focus dùng focus token.

Code: `Button(props)`.

## 2. Chip / Filter — `8:148`

Props: `label`, `count`, `showCount`; variants `Selected true/false`, `Size M/S`.
Selected bắt buộc có check + primary-soft, không chỉ đổi màu. Code dùng `aria-pressed`.

## 3. Status Badge — `8:161`

Props: `label`; statuses `Open | Soon | Closed | Rolling`. Luôn có dot + chữ. `Soon` = còn ≤14 ngày.

## 4. Search Field — `9:29`

Props: `placeholder`; states `Default | Focus | Filled`.
Behavior: search toàn trang; tìm theo tiền tố từ; nếu query có dấu thì matching phân biệt dấu (`qMatch` từ prototype); Enter = submit.

## 5. Select — `9:30`

Prop: `value`. Dùng cho sort compact. Mobile ưu tiên native OS select/menu.

## 6. Checkbox — `9:43`

Props: `label`, `checked`. Native checkbox để giữ keyboard/accessibility.

## 7. Nav / Desktop — `9:45`

1440×76 baseline. Sticky top. Active item có spark marker cam 18×4. Canvas 92% + bottom border. Production logo phải dùng asset BAIKA chính thức.

## 8. Nav / Mobile — `9:78`

390×60 baseline. Touch target 44×44. Menu mở bottom sheet, không dùng left drawer.

## 9. Footer — `9:93`

Nền `bg/sunken`, không dark footer. Thông tin pháp nhân BAIKA bắt buộc. Có `#hnUpd` để hiển thị `HN_DATA.upd`.

## 10. Scholarship Card — `10:119`

Props: Title, Provider, Eyebrow, Country code, Value text, Deadline.
Variants: `Access Free/Locked × State Default/Hover`.

Rules:
- ISO stamp thay emoji flag.
- Locked vẫn thấy tên + value + deadline; tiêu chí chi tiết bị khóa.
- Paywall dữ liệu thật **không được render rồi blur**; render skeleton để tránh lộ trong DOM.
- Hover: border primary + Shadow/Lift + translateY(-2px).

## 11. Deadline Ticket — `10:120`

Props: Date, Name, Meta. Stub peach + date mono. Hai notch tròn dùng màu canvas; component chỉ đặt trực tiếp trên canvas background.

## 12. Country Postcard — `12:103`

Props: Country, Code, Cost text, Lang, Work, Count, New-policy boolean. Variant `Compare true/false`.

Rules: cost scale `$–$$$$` phải có USD amount cùng lúc; tối đa 3 nước trong compare.

## 13. Salary Range — `12:104`

Props text: Range, Note. Runtime numeric contract thêm `min`, `max`, `entryMin`, `entryMax`.

Với track width `W`:
- Lead = `min / 80 × W`
- Segment = `(max - min) / 80 × W`
- Entry dot = `((entryMin + entryMax)/2 - min) / (max-min) × segmentWidth`
- Giá trị >80 clamp tại `80+`.

Orange dot = entry salary; blue segment = common market range.

## 14. Job Card — `12:123`

Props: Job title, Group, Holland, Summary; compose `Salary Range`. Holland code kết nối kết quả trắc nghiệm.

## 15. Journey Step — `12:181`

Props: Title, Meta. State `Done | Current | Next`.
Four-step journey: Hiểu mình → Chọn ngành → Chọn nước/trường → Săn học bổng. Rising panel = progress; Current có Spark.

## 16. Paywall Lock — `13:47`

Props: Title, Body. Luôn cho user biết giá trị nhận được trước CTA. Nội dung locked phía server không trả cho tài khoản free; UI chỉ skeleton.

## 17. Section Heading — `13:67`

Props: Eyebrow, Desc, Show link. H1 nằm trong Title wrap; Marker dưới 1–3 từ khóa. Link optional. Khi copy thay đổi, marker phải được điều chỉnh theo độ dài từ khóa, không kéo hết câu.

## 18. Quiz Option — `13:92`

Props: Answer, Letter. Variant Selected. Vùng chạm toàn dòng. Keyboard A/B/C/D + Enter. Semantics radio.

## 19. Pricing Ticket — `13:162`

Variant `Plan Free | Year`. Bảng giá 2 cột. Year: primary border + orange label. Price dùng JetBrains Mono để số không “nhảy”.

## 20. Compare Bar — `13:163`

Floating bottom bar xuất hiện khi chọn ≥1 nước. Max 3. Compare button enabled khi ≥2. Mobile chừa iOS safe-area.

## 21. Toast — `13:183`

Prop Message. Hiện khoảng 4 giây; `role=status`, `aria-live=polite`; có Undo action khi cần.

## 22. Auth Button — `13:208`

Variants: Google / Facebook / Phone / Email. Provider mark chỉ là placeholder trong Figma; production phải dùng logo chính thức theo guideline provider.

## 23. Bottom Sheet / Filter — `13:209`

Mobile filter sheet. Swipe/kéo xuống để đóng. CTA chính luôn hiển thị số kết quả. Focus trap + Esc (khi keyboard/external keyboard).

## Brand assets ngoài page Components

### Logo / Horizontal — `4:4`
Dùng header. Minimum height 28px. Hiện Figma ghép từ raster asset gốc; production cần SVG chính thức BAIKA trước release.

### Logo / Stacked — `4:7`
Dùng cover/footer/login. Production cũng cần SVG chính thức.

## Code-only brand primitives theo Dev Handoff

Ba primitive phải là inline SVG, không PNG:

- `DoorPanel(width, height, rise, tone)` — top edge rise 12–14%, decorative unless content is inside.
- `RisingPanel(width, height, rise)` — dốc lên về bên phải.
- `Spark(size)` — orange directional accent.

Các primitive này dùng semantic tokens và `aria-hidden=true` khi chỉ trang trí.

## Component implementation status trong source pack

Đã tạo baseline render function cho toàn bộ 23 component concept + 3 brand primitives. Nav/Footer/logo asset vẫn cần thay bằng SVG BAIKA chính thức trước production. Screen-level composition hiện đã có trong home.ts/pages.ts (R3); chưa thể đánh PASS pixel parity trước khi so ảnh browser với Figma.


## Icon contract áp dụng cho component

Component không tự vẽ icon. Tất cả icon functional gọi `Icon(name, options)` từ `src/icons/index.ts`. Danh mục và semantic mapping đầy đủ nằm ở `docs/ICON-SPEC.md`.

Mapping mặc định quan trọng:
- Button CTA/link: `arrow-right`.
- Chip selected / checklist: `check`.
- Search Field: `search`.
- Select: `chevron-down`.
- Nav mobile: `search`, `heart`, `menu`.
- Scholarship Card: `bookmark`, `calendar-days`, `arrow-right` hoặc `lock-keyhole`.
- Country Postcard compare: `plus` / `check`; cost/visa metadata: `wallet-cards` khi icon được hiển thị.
- Paywall: `lock-keyhole`.
- Compare remove: `x`.
- Contact: `phone`; email: `mail`.
- Mobile tab bar: `house`, `graduation-cap`, `plane`, `briefcase-business`, `user-round`.

Không dùng ký tự `→`, `✓`, `⌂`, `◇`, `◎`, `▤`, `☆` để giả lập icon trong component hoặc screen.


## 2026-10-02 visual parity review
- Icons render as inline SVG at component render time; no hydration dependency for standalone HTML.
- Brand shapes DoorPanel/RisingPanel/Spark use rounded vector geometry from Figma Foundations.
- Scholarship Card, Footer, D2 Page header/Filter sidebar, D3 Detail hero, D4 Controls, D6 Header/Filter/result banner aligned to current Figma nodes.

## Live component reconciliation — 2026-10-02
All 23 main component definitions and their properties/variants were read live and preserved in figma/spec-snapshot.json. All 23 have source render functions, but this is structural coverage only. Native button/checkbox/select states must still be browser-verified. Save authentication/undo, swipe-dismiss sheet, reminder delivery and payment context preservation are required behavior, not implied by a rendered component. Brand logo/provider marks remain separate production asset requirements.
