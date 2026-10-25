const MAP: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

// Усі значення з CMS, що потрапляють у innerHTML, мають проходити через цю функцію.
export const escapeHtml = (value: unknown): string =>
  String(value ?? '').replace(/[&<>"']/g, (ch) => MAP[ch] ?? ch);