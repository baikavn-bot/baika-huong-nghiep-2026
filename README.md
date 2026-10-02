# Hướng Nghiệp V1 — frontend foundation pack

Pack này là kết quả audit Figma trước khi dựng screen.

## Stack đã chốt đề xuất

- HTML5
- CSS3 + CSS Custom Properties
- TypeScript
- Vite build
- `vite-plugin-singlefile` để output vẫn là `index.html` phù hợp pipeline VPS hiện tại
- Không React/Tailwind ở V1

## File quan trọng

- `docs/ARCHITECTURE.md` — quyết định ngôn ngữ/stack và data contract
- `docs/UI-SPEC.md` — Variable/Style/Figma foundation → CSS spec
- `docs/COMPONENT-SPEC.md` — 23 component + brand primitives
- `src/styles/tokens.css` — semantic Light/Dark tokens + spacing/radius/motion/effects
- `src/styles/typography.css` — type styles
- `src/styles/foundations.css` — grid/responsive/a11y/visual grammar
- `src/styles/components.css` — component visual baseline
- `src/components/index.ts` — typed component render library

## Chạy local

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

Output dự kiến: `dist/index.html`.

## Homepage implementation (D1 / M1)

Trang chủ đã được dựng theo Figma source of truth mới `RxVjl3wcnyUyfms6o5DDzB`:
- Desktop: `D1 · Trang chủ` — node `15:2`
- Mobile: `M1 · Trang chủ` — node `34:2`

Các file chính:
- `src/home.ts`: markup + dữ liệu mẫu + tương tác trang chủ
- `src/styles/home.css`: layout responsive Desktop/Tablet/Mobile
- `preview/index.html`: bản standalone để mở trực tiếp không cần build tool

Production vẫn giữ contract `/data/hn-data.js` trước script chính và hiển thị `HN_DATA.upd` ở footer khi dữ liệu runtime tồn tại.


## Icon system

Icon UI đã chuẩn hoá theo Figma `04 · Components / Icons` (`67:2168`). Đọc `docs/ICON-SPEC.md`; mọi source chỉ dùng `Icon()` từ `src/icons/index.ts`.


## Full route implementation

Đã dựng toàn bộ screen còn lại theo Figma V1, Prototype & Motion, Dev Handoff và spec hiện hành. Runtime là hash-router static, giữ compatibility với output `index.html`.

Breakpoint production:
- Mobile: 360–599 (reference 390px / M1–M6)
- Tablet: 600–1023 (8 cột; suy ra đúng §21 Dev Handoff)
- Desktop: 1024+ (reference 1440px / D1–D11, max content 1200)

File chính:
- `src/pages.ts` — D2–D11/D9b + route/interaction logic
- `src/styles/pages.css` — responsive rules cho 3 layout breakpoint
- `src/runtime.ts` — hash router/bootstrap
- `docs/ROUTE-SPEC.md` — route ↔ Figma screen ↔ responsive/interaction contract
- `preview-app/` — build ESM tĩnh để test không cần Vite

Standalone review artifact: `huong-nghiep-v1-all-pages.html` (được xuất riêng ở thư mục bàn giao).
