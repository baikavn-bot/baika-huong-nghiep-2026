# Hướng Nghiệp V1 — Frontend Architecture Decision

## Quyết định

**Ngôn ngữ:** HTML5 + CSS3 + TypeScript.

**Tooling build:** Vite + TypeScript + `vite-plugin-singlefile`.

**Không dùng React/Tailwind cho V1.** Figma vẫn là UI source of truth; code reference do Figma sinh ra chỉ dùng để đọc kích thước/token/variant rồi chuyển sang stack của dự án.

## Vì sao khớp với mục tiêu triển khai

1. Hướng dẫn production hiện tại coi frontend là **web tĩnh** và thay giao diện bằng một artifact `site/index.html`.
2. V1 phải tiếp tục tải `/data/hn-data.js` trước script chính và đọc `window.HN_DATA` khi backend có mặt; khi backend chưa có hoặc lỗi thì dùng dữ liệu nhúng từ prototype.
3. Prototype v0.5 đã là HTML/CSS/JS, vì vậy TypeScript cho phép giữ logic và dữ liệu hiện có nhưng thêm type safety, module hóa và component library mà không đưa runtime framework vào.
4. Vite cho dev server/build nhanh; single-file plugin giữ compatibility với pipeline hiện tại: output production vẫn là một `index.html` tự chứa CSS/JS (trừ `/data/hn-data.js` là runtime endpoint bắt buộc).
5. Khi Phase 2 chuyển GitHub + Vercel, source này vẫn deploy static trực tiếp; không cần rewrite UI lần nữa.

## Contract dữ liệu phải giữ

```html
<script src="/data/hn-data.js"
        onerror="window.HN_DATA=window.HN_DATA||null"></script>
<script type="module" src="/src/main.ts"></script>
```

Runtime ưu tiên:

- `window.HN_DATA.sch` — học bổng
- `window.HN_DATA.cty` — quốc gia
- `window.HN_DATA.adm` — tuyển sinh
- `window.HN_DATA.upd` — ngày cập nhật, render vào `#hnUpd`

Nếu `HN_DATA` không tồn tại thì dùng dữ liệu nhúng chuyển từ v0.5.

## Cấu trúc source

```text
src/
  components/       reusable UI, bám page 04 · Components
  icons/            typed icon registry, bám frame Icons 67:2168
  styles/
    tokens.css       Figma Variables → CSS Custom Properties
    typography.css   Figma Text Styles
    foundations.css  grid, responsive, focus, shape grammar
    components.css   style cho component library
  lib/
    html.ts          escape/clamp helpers
  main.ts            page/bootstrap + data adapter
```

## Boundary

Frontend không chứa PocketBase/n8n logic. Frontend chỉ nhận dữ liệu đã publish qua `HN_DATA`. API keys, token, password và encryption keys **không được đưa vào source frontend**.


## Icon architecture

Figma `04 · Components / Icons` (`67:2168`) là visual source of truth. Code dùng một typed registry duy nhất ở `src/icons/index.ts`; screen/component không import icon package trực tiếp.

Luồng chuẩn:

```text
Figma icon name (kebab-case)
        ↓
src/icons/index.ts (whitelist + alias khi cần)
        ↓
Icon(name, { size, className, label })
        ↓
hydrateIcons() sau mỗi render root
```

Icon runtime hiện được đóng local trong `src/icons/index.ts`, không cần package icon bên ngoài ở production. API `IconName` và tên semantic trong screen giữ đúng tên Figma. Không dùng emoji/unicode/icon font/ad-hoc SVG cho functional icons.

## Runtime clarification — 2026-10-02
The HN_DATA preference above is the target contract. Current main.ts imports styles/runtime; screen lists remain embedded in home.ts/pages.ts and footer reads HN_DATA.upd. A complete live data adapter has not been established by this audit. Icon runtime emits inline SVG immediately; hydrateIcons is a no-op compatibility API, not a required hydration step.
