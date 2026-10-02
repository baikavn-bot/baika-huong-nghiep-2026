/**
 * Hướng Nghiệp icon contract.
 * Source of truth: Figma v1 / 04 · Components / Icons (`67:2168`).
 *
 * Runtime is intentionally local: no icon package is required in production.
 * Public names stay identical to the Figma kebab-case component names.
 */
export const ICON_NAMES = [
    'search', 'arrow-right', 'chevron-down', 'check', 'phone', 'heart', 'menu', 'bookmark',
    'calendar-days', 'lock-keyhole', 'wallet-cards', 'plus', 'mail', 'house', 'graduation-cap',
    'plane', 'briefcase-business', 'user-round', 'sliders-horizontal', 'x', 'share-2',
    'shield-check', 'circle-check-big', 'clock', 'external-link', 'save', 'bell-ring', 'file-text',
    'sparkles', 'credit-card', 'badge-dollar-sign', 'globe', 'calendar-clock', 'timer', 'receipt-text',
    'smartphone', 'refresh-cw', 'arrow-left',
];
const I = {
    'search': [['circle', { cx: 11, cy: 11, r: 8 }], ['path', { d: 'm21 21-4.3-4.3' }]],
    'arrow-right': [['path', { d: 'M5 12h14' }], ['path', { d: 'm12 5 7 7-7 7' }]],
    'chevron-down': [['path', { d: 'm6 9 6 6 6-6' }]],
    'check': [['path', { d: 'M20 6 9 17l-5-5' }]],
    'phone': [['path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z' }]],
    'heart': [['path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z' }]],
    'menu': [['line', { x1: 4, y1: 6, x2: 20, y2: 6 }], ['line', { x1: 4, y1: 12, x2: 20, y2: 12 }], ['line', { x1: 4, y1: 18, x2: 20, y2: 18 }]],
    'bookmark': [['path', { d: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' }]],
    'calendar-days': [['path', { d: 'M8 2v4' }], ['path', { d: 'M16 2v4' }], ['rect', { x: 3, y: 4, width: 18, height: 18, rx: 2 }], ['path', { d: 'M3 10h18' }], ['path', { d: 'M8 14h.01' }], ['path', { d: 'M12 14h.01' }], ['path', { d: 'M16 14h.01' }], ['path', { d: 'M8 18h.01' }], ['path', { d: 'M12 18h.01' }], ['path', { d: 'M16 18h.01' }]],
    'lock-keyhole': [['rect', { x: 3, y: 10, width: 18, height: 12, rx: 2 }], ['path', { d: 'M7 10V7a5 5 0 0 1 10 0v3' }], ['circle', { cx: 12, cy: 16, r: 1 }]],
    'wallet-cards': [['rect', { x: 3, y: 3, width: 18, height: 18, rx: 2 }], ['path', { d: 'M3 9h18' }], ['path', { d: 'M3 12h3a2 2 0 0 1 1.4.6l1.2 1.2a5 5 0 0 0 6.8 0l1.2-1.2A2 2 0 0 1 18 12h3' }]],
    'plus': [['path', { d: 'M5 12h14' }], ['path', { d: 'M12 5v14' }]],
    'mail': [['rect', { x: 2, y: 4, width: 20, height: 16, rx: 2 }], ['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' }]],
    'house': [['path', { d: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }], ['polyline', { points: '9 22 9 12 15 12 15 22' }]],
    'graduation-cap': [['path', { d: 'm2 10 10-5 10 5-10 5z' }], ['path', { d: 'M6 12v5c3 2 9 2 12 0v-5' }], ['path', { d: 'M22 10v6' }]],
    'plane': [['path', { d: 'M17.8 19.2 16 11l3.5-3.5c1.5-1.5 2-3.5 1.5-4.5-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z' }]],
    'briefcase-business': [['rect', { x: 2, y: 7, width: 20, height: 13, rx: 2 }], ['path', { d: 'M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' }], ['path', { d: 'M12 12h.01' }], ['path', { d: 'M2 13a18 18 0 0 0 20 0' }]],
    'user-round': [['circle', { cx: 12, cy: 8, r: 5 }], ['path', { d: 'M4 21a8 8 0 0 1 16 0' }]],
    'sliders-horizontal': [['line', { x1: 4, y1: 6, x2: 10, y2: 6 }], ['line', { x1: 14, y1: 6, x2: 20, y2: 6 }], ['line', { x1: 4, y1: 12, x2: 14, y2: 12 }], ['line', { x1: 18, y1: 12, x2: 20, y2: 12 }], ['line', { x1: 4, y1: 18, x2: 8, y2: 18 }], ['line', { x1: 12, y1: 18, x2: 20, y2: 18 }], ['line', { x1: 12, y1: 4, x2: 12, y2: 8 }], ['line', { x1: 16, y1: 10, x2: 16, y2: 14 }], ['line', { x1: 10, y1: 16, x2: 10, y2: 20 }]],
    'x': [['path', { d: 'M18 6 6 18' }], ['path', { d: 'm6 6 12 12' }]],
    'share-2': [['circle', { cx: 18, cy: 5, r: 3 }], ['circle', { cx: 6, cy: 12, r: 3 }], ['circle', { cx: 18, cy: 19, r: 3 }], ['line', { x1: 8.6, y1: 13.5, x2: 15.4, y2: 17.5 }], ['line', { x1: 15.4, y1: 6.5, x2: 8.6, y2: 10.5 }]],
    'shield-check': [['path', { d: 'M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z' }], ['path', { d: 'm9 12 2 2 4-4' }]],
    'circle-check-big': [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'm8 12 3 3 5-6' }]],
    'clock': [['circle', { cx: 12, cy: 12, r: 9 }], ['polyline', { points: '12 7 12 12 15 14' }]],
    'external-link': [['path', { d: 'M15 3h6v6' }], ['path', { d: 'M10 14 21 3' }], ['path', { d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' }]],
    'save': [['path', { d: 'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z' }], ['polyline', { points: '17 21 17 13 7 13 7 21' }], ['polyline', { points: '7 3 7 8 15 8' }]],
    'bell-ring': [['path', { d: 'M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9' }], ['path', { d: 'M13.7 21a2 2 0 0 1-3.4 0' }], ['path', { d: 'M2 8c0-2.2.7-4 2-5.5' }], ['path', { d: 'M22 8c0-2.2-.7-4-2-5.5' }]],
    'file-text': [['path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }], ['polyline', { points: '14 2 14 8 20 8' }], ['line', { x1: 8, y1: 13, x2: 16, y2: 13 }], ['line', { x1: 8, y1: 17, x2: 16, y2: 17 }]],
    'sparkles': [['path', { d: 'm12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5z' }], ['path', { d: 'm5 3-.5 1.5L3 5l1.5.5L5 7l.5-1.5L7 5l-1.5-.5z' }], ['path', { d: 'm19 15-.75 2.25L16 18l2.25.75L19 21l.75-2.25L22 18l-2.25-.75z' }]],
    'credit-card': [['rect', { x: 2, y: 5, width: 20, height: 14, rx: 2 }], ['line', { x1: 2, y1: 10, x2: 22, y2: 10 }]],
    'badge-dollar-sign': [['path', { d: 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.75z' }], ['path', { d: 'M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8' }], ['path', { d: 'M12 18V6' }]],
    'globe': [['circle', { cx: 12, cy: 12, r: 10 }], ['line', { x1: 2, y1: 12, x2: 22, y2: 12 }], ['path', { d: 'M12 2a15 15 0 0 1 0 20' }], ['path', { d: 'M12 2a15 15 0 0 0 0 20' }]],
    'calendar-clock': [['path', { d: 'M8 2v4' }], ['path', { d: 'M16 2v4' }], ['rect', { x: 3, y: 4, width: 18, height: 18, rx: 2 }], ['path', { d: 'M3 10h18' }], ['circle', { cx: 17, cy: 17, r: 4 }], ['path', { d: 'M17 15v2l1 1' }]],
    'timer': [['line', { x1: 10, y1: 2, x2: 14, y2: 2 }], ['line', { x1: 12, y1: 14, x2: 15, y2: 11 }], ['circle', { cx: 12, cy: 14, r: 8 }], ['path', { d: 'M19 5 17.5 6.5' }]],
    'receipt-text': [['path', { d: 'M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z' }], ['path', { d: 'M8 8h8' }], ['path', { d: 'M8 12h8' }], ['path', { d: 'M8 16h5' }]],
    'smartphone': [['rect', { x: 5, y: 2, width: 14, height: 20, rx: 2 }], ['line', { x1: 12, y1: 18, x2: 12.01, y2: 18 }]],
    'refresh-cw': [['path', { d: 'M21 12a9 9 0 0 1-15.2 6.5L3 16' }], ['path', { d: 'M3 21v-5h5' }], ['path', { d: 'M3 12A9 9 0 0 1 18.2 5.5L21 8' }], ['path', { d: 'M21 3v5h-5' }]],
    'arrow-left': [['path', { d: 'M19 12H5' }], ['path', { d: 'm12 19-7-7 7-7' }]],
};
export function Icon(name, options = {}) {
    const size = options.size ?? 20;
    const className = options.className ? `hn-icon ${options.className}` : 'hn-icon';
    const label = options.label?.trim();
    return `<i class="${className}" data-hn-icon="${name}" data-size="${size}"${label ? ` data-label="${escapeAttribute(label)}"` : ''}></i>`;
}
export function iconSVG(name, size = 20, label) {
    const body = (I[name] || []).map(([tag, attrs]) => `<${tag}${Object.entries(attrs).map(([k, v]) => ` ${k}="${v}"`).join('')}></${tag}>`).join('');
    const aria = label ? ` role="img" aria-label="${escapeAttribute(label)}"` : ' aria-hidden="true"';
    return `<svg class="hn-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${aria}>${body}</svg>`;
}
export function hydrateIcons(root = document) {
    root.querySelectorAll('[data-hn-icon]').forEach(node => {
        const name = node.dataset.hnIcon;
        const size = Number(node.dataset.size || 20);
        const label = node.dataset.label;
        const host = document.createElement('span');
        host.innerHTML = iconSVG(name, size, label);
        const svg = host.firstElementChild;
        if (!svg)
            return;
        const extra = [...node.classList].filter(c => c !== 'hn-icon');
        extra.forEach(c => svg.classList.add(c));
        node.replaceWith(svg);
    });
}
function escapeAttribute(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
