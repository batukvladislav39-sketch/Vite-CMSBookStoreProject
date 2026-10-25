import { API_URL } from '../api';
import { escapeHtml } from './escapeHtml';

export const linkAttrs = (href: string): string => {
  const h = href.trim();
  let url = '#/';
  let external = false;

  if (h.startsWith('#/')) url = h;
  else if (h.startsWith('/')) { url = `${API_URL}${h}`; external = true; }
  else if (/^https?:\/\//i.test(h)) { url = h; external = true; }

  return `href="${escapeHtml(url)}"${external ? ' target="_blank" rel="noopener"' : ''}`;
};