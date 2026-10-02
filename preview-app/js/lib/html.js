export function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[char]));
}
export function boolAttr(name, value) {
    return value ? ` ${name}` : '';
}
export function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
}
