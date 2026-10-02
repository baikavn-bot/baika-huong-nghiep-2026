import { clamp, escapeHTML } from '../lib/html.js';
import { Icon } from '../icons/index.js';
export function Button({ label, type = 'primary', size = 'm', icon = 'arrow-right', iconPosition = 'end', disabled = false, attrs = '' }) {
    const renderedIcon = icon ? Icon(icon, { size: size === 's' ? 16 : 20, className: 'hn-button__icon' }) : '';
    const content = iconPosition === 'start' ? `${renderedIcon}<span>${escapeHTML(label)}</span>` : `<span>${escapeHTML(label)}</span>${renderedIcon}`;
    return `<button class="hn-button hn-button--${type} hn-button--${size}"${disabled ? ' disabled' : ''} ${attrs}>${content}</button>`;
}
export function ChipFilter({ label, count, selected = false, size = 'm' }) {
    return `<button class="hn-chip hn-chip--${size}" type="button" aria-pressed="${selected}">${selected ? Icon('check', { size: size === 's' ? 14 : 16, className: 'hn-chip__icon' }) : ''}<span>${escapeHTML(label)}</span>${count !== undefined ? `<span class="hn-chip__count">${escapeHTML(count)}</span>` : ''}</button>`;
}
export function StatusBadge(label, status = 'open') {
    return `<span class="hn-status hn-status--${status}">${escapeHTML(label)}</span>`;
}
export function SearchField(placeholder = 'Tìm học bổng, nước, ngành, trường…') {
    return `<form class="hn-search" role="search">${Icon('search', { size: 22, className: 'hn-search__icon' })}<input name="q" autocomplete="off" placeholder="${escapeHTML(placeholder)}"/>${Button({ label: 'Tìm', size: 's', icon: false, attrs: 'type="submit"' })}</form>`;
}
export function Select(value, options) {
    return `<select class="hn-select" aria-label="Sắp xếp">${options.map(o => `<option${o === value ? ' selected' : ''}>${escapeHTML(o)}</option>`).join('')}</select>`;
}
export function Checkbox(label, checked = false) {
    return `<label class="hn-checkbox"><input type="checkbox"${checked ? ' checked' : ''}/><span>${escapeHTML(label)}</span></label>`;
}
export function ScholarshipCard(p) {
    const locked = p.access === 'locked';
    return `<article class="hn-card hn-card--interactive hn-scholarship-card" data-access="${locked ? 'locked' : 'free'}">
    <div class="hn-scholarship-card__top"><span class="hn-stamp">${escapeHTML(p.countryCode)}</span><span class="hn-eyebrow">${escapeHTML(p.eyebrow)}</span></div>
    <h3 class="hn-title-l">${escapeHTML(p.title)}</h3>
    <p class="hn-scholarship-card__provider">${escapeHTML(p.provider)}</p>
    <p class="hn-scholarship-card__value">${escapeHTML(p.valueText)}</p>
    <div>${StatusBadge(p.statusLabel || p.deadline, p.status || 'open')}</div>
    ${locked ? `<div class="hn-scholarship-card__locked" aria-label="Nội dung dành cho gói năm">${Icon('lock-keyhole', { size: 16, className: 'hn-scholarship-card__lock' })}<span class="hn-skeleton"></span><br><span class="hn-skeleton" style="width:72%"></span></div>` : `<a href="${escapeHTML(p.href || '#')}" class="hn-button hn-button--ghost hn-button--s"><span>Xem chi tiết</span>${Icon('arrow-right', { size: 16, className: 'hn-button__icon' })}</a>`}
  </article>`;
}
export function DeadlineTicket(p) {
    return `<article class="hn-deadline-ticket"><div class="hn-deadline-ticket__stub"><strong class="hn-deadline-ticket__date">${escapeHTML(p.date)}</strong><span class="hn-deadline-ticket__year">${escapeHTML(p.year || '2026')}</span></div><div class="hn-deadline-ticket__body"><strong class="hn-title-m">${escapeHTML(p.name)}</strong><span class="hn-body-s">${escapeHTML(p.meta)}</span>${StatusBadge(p.statusLabel, p.status || 'soon')}</div></article>`;
}
export function CountryPostcard(p) {
    return `<article class="hn-card hn-card--interactive hn-country-card" aria-selected="${!!p.compare}"><div class="hn-country-card__cover" aria-hidden="true"><span class="hn-door-panel" style="position:absolute;width:120px;height:170px;right:18px;top:14px"></span></div><div class="hn-country-card__body"><div style="display:flex;justify-content:space-between;align-items:center"><span class="hn-stamp">${escapeHTML(p.code)}</span>${p.newPolicy ? '<span class="hn-caption">Chính sách mới</span>' : ''}</div><h3 class="hn-h3">${escapeHTML(p.country)}</h3><p class="hn-data-bold">${escapeHTML(p.cost)}</p><p class="hn-body-s">Ngôn ngữ · ${escapeHTML(p.lang)}<br>Làm thêm · ${escapeHTML(p.work)}<br>${escapeHTML(p.count)}</p><button class="hn-button hn-button--ghost hn-button--s" type="button" aria-pressed="${!!p.compare}">${p.compare ? Icon('check', { size: 14, className: 'hn-button__icon' }) : Icon('plus', { size: 14, className: 'hn-button__icon' })}<span>${p.compare ? 'Đã chọn so sánh' : 'Thêm vào so sánh'}</span></button></div></article>`;
}
export function SalaryRange(p) {
    const min = clamp(p.min, 0, 80), max = clamp(p.max, 0, 80);
    const left = (min / 80) * 100, width = (Math.max(0, max - min) / 80) * 100;
    const entryMid = clamp((p.entryMin + p.entryMax) / 2, min, max);
    const entry = ((entryMid - min) / Math.max(1, max - min)) * 100;
    return `<div class="hn-salary"><div style="display:flex;justify-content:space-between"><span class="hn-caption">Lương thị trường</span><strong class="hn-data">${escapeHTML(p.rangeText)}</strong></div><div class="hn-salary__track"><span class="hn-salary__base"></span><span class="hn-salary__range" style="left:${left}%;width:${width}%"><i class="hn-salary__entry" style="left:${entry}%"></i></span></div><div class="hn-salary__ticks"><span>0</span><span>20</span><span>40</span><span>60</span><span>80+ tr</span></div><span class="hn-body-s hn-salary__note"><span class="hn-salary__entry-dot" aria-hidden="true"></span>${escapeHTML(p.note)}</span></div>`;
}
export function JobCard(p) {
    return `<article class="hn-card hn-card--interactive hn-job-card"><div class="hn-job-card__meta"><span class="hn-job-card__group">${escapeHTML(p.group)}</span><span class="hn-job-card__holland">${escapeHTML(p.holland)}</span></div><h3 class="hn-title-l">${escapeHTML(p.title)}</h3><p class="hn-body-s">${escapeHTML(p.summary)}</p>${SalaryRange(p.salary)}${Button({ label: 'Xem nhiệm vụ chính', type: 'ghost', size: 's' })}</article>`;
}
export function JourneyStep(title, meta, state) {
    return `<article class="hn-journey-step" data-state="${state}"><h3 class="hn-title-m">${escapeHTML(title)}</h3><p class="hn-body-s">${escapeHTML(meta)}</p></article>`;
}
export function PaywallLock(title, body) {
    return `<section class="hn-paywall">${Icon('lock-keyhole', { size: 22, className: 'hn-paywall__icon' })}<h3 class="hn-h3">${escapeHTML(title)}</h3><p class="hn-body-m">${escapeHTML(body)}</p><div aria-hidden="true"><span class="hn-skeleton"></span><br><span class="hn-skeleton" style="width:82%;margin:auto"></span></div>${Button({ label: 'Mở khoá gói năm', type: 'spark' })}</section>`;
}
export function SectionHeading(p) {
    return `<header class="hn-section-heading"><div class="hn-section-heading__lead"><div class="hn-section-heading__eyebrow"><span class="hn-spark-shape" aria-hidden="true"></span><span class="hn-eyebrow">${escapeHTML(p.eyebrow)}</span></div><h2 class="hn-h1">${escapeHTML(p.title)}</h2><p class="hn-body-m hn-section-heading__desc">${escapeHTML(p.description)}</p></div>${p.linkLabel ? `<a href="${escapeHTML(p.linkHref || '#')}" class="hn-button hn-button--ghost hn-button--s"><span>${escapeHTML(p.linkLabel)}</span>${Icon('arrow-right', { size: 16, className: 'hn-button__icon' })}</a>` : ''}</header>`;
}
export function QuizOption(answer, letter, selected = false, name = 'holland') {
    return `<label class="hn-quiz-option" role="radio" aria-checked="${selected}" tabindex="0"><input type="radio" name="${escapeHTML(name)}" value="${escapeHTML(letter)}"${selected ? ' checked' : ''} hidden/><span class="hn-quiz-option__letter">${escapeHTML(letter)}</span><span class="hn-body-m">${escapeHTML(answer)}</span></label>`;
}
export function PricingTicket(plan) {
    const yearly = plan === 'year';
    return `<article class="hn-pricing" data-plan="${plan}">${yearly ? '<span class="hn-pricing__badge">NÊN CHỌN</span>' : ''}<p class="hn-eyebrow">${yearly ? 'GÓI NĂM' : 'MIỄN PHÍ'}</p><h3 class="hn-h2">${yearly ? '199.000đ / năm' : '0đ'}</h3><p class="hn-body-m">${yearly ? 'Mở tiêu chí chi tiết, hồ sơ mẫu, lộ trình và nhắc hạn.' : 'Tra cứu cơ bản và nội dung miễn phí.'}</p>${Button({ label: yearly ? 'Mở khoá gói năm' : 'Dùng miễn phí', type: yearly ? 'spark' : 'secondary', icon: yearly ? 'arrow-right' : false })}</article>`;
}
export function CompareBar(selected) {
    const enabled = selected >= 2;
    return `<aside class="hn-compare-bar" aria-label="So sánh nước"><strong class="hn-body-m">Đã chọn ${selected}/3 nước</strong><span style="flex:1"></span>${Button({ label: 'So sánh', size: 's', disabled: !enabled })}</aside>`;
}
export function Toast(message, undoLabel) {
    return `<div class="hn-toast" role="status" aria-live="polite">${escapeHTML(message)}${undoLabel ? ` <button class="hn-button hn-button--ghost hn-button--s" type="button">${escapeHTML(undoLabel)}</button>` : ''}</div>`;
}
export function AuthButton(provider, label) {
    return `<button class="hn-auth-button" type="button" data-provider="${provider}"><span aria-hidden="true" data-provider-mark></span><span>${escapeHTML(label)}</span></button>`;
}
export function BottomSheetFilter(content, resultCount) {
    return `<section class="hn-bottom-sheet" role="dialog" aria-modal="true" aria-label="Bộ lọc"><div class="hn-bottom-sheet__handle" aria-hidden="true"></div>${content}<div style="position:sticky;bottom:0;padding-top:16px;background:var(--hn-bg-surface)">${Button({ label: `Xem ${resultCount} kết quả`, type: 'primary' })}</div></section>`;
}
export function NavDesktop(active) {
    const links = [
        ['Học bổng', '#/hoc-bong'], ['Du học', '#/du-hoc'], ['Nghề nghiệp', '#/nghe-nghiep'], ['Tuyển sinh 2026', '#/hoc-bong'], ['Trắc nghiệm', '#/trac-nghiem']
    ];
    return `<header class="hn-nav-desktop"><a href="#/" aria-label="Hướng Nghiệp">HƯỚNG NGHIỆP</a><nav>${links.map(([label, href]) => `<a class="hn-nav-link" href="${href}"${label === active ? ' aria-current="page"' : ''}>${escapeHTML(label)}</a>`).join(' &nbsp;&nbsp; ')}</nav><div>${Button({ label: 'Đăng nhập', type: 'ghost', size: 's', attrs: 'data-route="#/dang-nhap"' })}${Button({ label: 'Gói năm 199k', type: 'spark', size: 's', attrs: 'data-route="#/thanh-toan"' })}</div></header>`;
}
export function NavMobile() {
    return `<header class="hn-nav-mobile"><a href="#/" aria-label="Hướng Nghiệp">HƯỚNG NGHIỆP</a><div><a class="hn-touch44" href="#/hoc-bong" aria-label="Tìm kiếm">${Icon('search', { size: 22 })}</a><a class="hn-touch44" href="#/lo-trinh" aria-label="Đã lưu">${Icon('heart', { size: 22 })}</a><button class="hn-touch44" type="button" aria-label="Mở menu">${Icon('menu', { size: 22 })}</button></div></header>`;
}
export function Footer(updated) {
    return `<footer class="hn-footer"><div class="hn-container"><strong>Hướng Nghiệp · Một sản phẩm của BAIKA</strong><p class="hn-body-s">© 2026 Công ty Cổ phần Công nghệ BAIKA · MST 0319512450</p><p class="hn-caption">Dữ liệu cập nhật: <span id="hnUpd">${escapeHTML(updated || '—')}</span></p></div></footer>`;
}
export function DoorPanel(p) {
    const rise = clamp(p.rise ?? 13, 0, 40), bg = p.tone === 'peach' ? 'var(--hn-bg-peach)' : p.tone === 'sky' ? 'var(--hn-bg-sky)' : 'var(--hn-brand-primary)';
    return `<svg width="${p.width}" height="${p.height}" viewBox="0 0 ${p.width} ${p.height}" aria-hidden="true"><polygon points="0,${p.height * rise / 100} ${p.width},0 ${p.width},${p.height} 0,${p.height}" fill="${bg}"/></svg>`;
}
export function RisingPanel(width, height, rise = 26) {
    const y = height * clamp(rise, 0, 50) / 100;
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true"><polygon points="0,${y} ${width},0 ${width * .86},${height} 0,${height}" fill="var(--hn-brand-primary)"/></svg>`;
}
export function Spark(size = 18) {
    const h = Math.round(size * .72);
    return `<svg width="${size}" height="${h}" viewBox="0 0 ${size} ${h}" aria-hidden="true"><polygon points="0,${h * .34} ${size},0 ${size * .78},${h} 0,${h * .74}" fill="var(--hn-brand-spark)"/></svg>`;
}
