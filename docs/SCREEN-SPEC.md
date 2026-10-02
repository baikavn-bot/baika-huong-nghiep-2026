# Screen Spec — live Figma snapshot 2026-10-02

File: RxVjl3wcnyUyfms6o5DDzB. Source commit inspected: 608a2191f711e9f1a92120c2728a342a673a8a75.
This supplement preserves frame names, node IDs, reference bounds and section order. Frame heights are design canvas bounds, not mandatory CSS fixed heights. See CONTENT-SPEC.md for exact reference copy, ROUTE-SPEC.md for route contracts, and figma/spec-snapshot.json for component definitions, variables, typography/effects and extracted text.

## Desktop references

### D1 · Trang chủ
- Node: 15:2; reference 1440 × 7157px.
- Direct-child composition: Nav / Desktop → Hero / Threshold → Section / Ba lối vào → Section / Sắp hết hạn → Section / Học bổng nổi bật → Section / Du học → Section / Nghề & lương → Section / Lộ trình 4 bước → Section / Bảng giá → Section / Liên hệ → Footer

### D2 · Học bổng
- Node: 20:629; reference 1440 × 2132px.
- Direct-child composition: Nav / Desktop → Page header → Body → Footer

### D3 · Chi tiết học bổng
- Node: 22:897; reference 1440 × 2565px.
- Direct-child composition: Nav / Desktop → Detail hero → Body → Footer

### D4 · Du học
- Node: 23:1039; reference 1440 × 2225px.
- Direct-child composition: Nav / Desktop → Header / Cost ladder → Controls → Grid → Footer

### D5 · So sánh 3 nước (modal)
- Node: 24:1438; reference 1440 × 1180px.
- Direct-child composition: Scrim → Modal / Compare → ô xanh = điểm mạnh nhất trong 3 nước

### D6 · Nghề nghiệp
- Node: 25:1443; reference 1440 × 2204px.
- Direct-child composition: Nav / Desktop → Header → Body → Footer

### D6b · Chi tiết nghề (drawer)
- Node: 26:1742; reference 1440 × 1697px.
- Direct-child composition: Scrim → Drawer / Job

### D7 · Trắc nghiệm
- Node: 28:1786; reference 1440 × 960px.
- Direct-child composition: Quiz bar → Door / number → 14 → / 36 → Spark → không có đáp án đúng sai, chọn theo cảm giác đầu tiên → Stack

### D8 · Kết quả trắc nghiệm
- Node: 29:1807; reference 1440 × 2241px.
- Direct-child composition: Nav / Desktop → Result hero → Section / Nghề hợp → Section / Ngành học → Section / Tiếp theo → Footer

### D9 · Thanh toán gói năm
- Node: 30:1974; reference 1440 × 1191px.
- Direct-child composition: Stack → Stack

### D9b · Thanh toán thành công
- Node: 30:2151; reference 520 × 563px.
- Direct-child composition: Stack → Xong rồi, cửa đã mở! → Tài khoản gói năm đã gửi về minh.hs2008@gmail.com. Hạn dùng đến 30/09/2027. → Stack → Stack → Stack → Button

### D10 · Đăng nhập (modal)
- Node: 31:1982; reference 1440 × 960px.
- Direct-child composition: Scrim → Modal / Login → Modal / OTP → mã tự điền trên điện thoại nếu trình duyệt hỗ trợ

### D11 · Lộ trình của tôi
- Node: 32:2002; reference 1440 × 1689px.
- Direct-child composition: Nav / Desktop → Greeting → Stack → Footer

## Mobile references

- M1 · Trang chủ: 34:2, 390 × 4078.80004882812px.
- M2 · Học bổng: 35:227, 390 × 1554px.
- M3 · Bộ lọc (bottom sheet): 35:387, 390 × 844px.
- M4 · Chi tiết học bổng: 36:429, 390 × 1921.40002441406px.
- M5 · Chi tiết nước · Nhật Bản: 36:577, 390 × 1809px.
- M6 · Trắc nghiệm: 37:515, 390 × 844px.

M3 is the scholarship filter state, not a separate route. D6b is career drawer, D5 compare modal, D9b success, D10 includes provider/OTP states. Tablet and small-desktop requirements are derived from Dev Handoff §21 rather than separate 768/1024 design frames.

## Scope and source conflicts
- There are 13 canonical desktop frames (D1–D11 plus D6b and D9b), six mobile frames, 23 main component contracts, and 38 source icon names.
- Desktop page also contains Homepage architecture board and an extra frame `102:2232` named `Bỏ giá`, with no extracted text. No approved route/scope for this extra frame was found; it is excluded from canonical metrics and requires owner clarification before implementation.
- Journey component description and D11 design use Hiểu mình / Chọn ngành / Chọn nước, chọn trường / Săn học bổng. Current D11 code differs; CONTENT-SPEC records the target.
- Focus descriptions in Foundations/Button say 2px while Focus/Ring style and Dev Handoff specify 3px. Existing spec resolves to 3px; preserved as a source conflict, not silently normalized Figma.
- Art direction mentions one to three Sparks, while final memo flags three Sparks as an error. Prefer conservative use (one to two) until designer resolves; do not change Figma or source in this documentation task.

## Acceptance
Presence of a route/component is structural coverage only. Verify visible copy, widths/spacing, fonts and assets, states, keyboard/focus, responsive behavior and screenshots before marking pixel parity complete. No browser screenshot diff was run in this task.
