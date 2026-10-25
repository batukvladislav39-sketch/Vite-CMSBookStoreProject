import type { FeaturesBlock, SiteData } from '../types';
import { escapeHtml } from '../utils/escapeHtml';
import { linkAttrs } from '../utils/href';

export const renderFeaturesBlock = (data: FeaturesBlock, _site: SiteData, anchor: string): string => {
  const cards = (data.items ?? [])
    .map((item, i) => {
      const inner = `
        <span class="feature__num">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="feature__title">${escapeHtml(item.title)}</h3>
        ${item.text ? `<p class="feature__text">${escapeHtml(item.text)}</p>` : ''}
        ${item.href ? `<span class="feature__more">Відкрити →</span>` : ''}`;
      return item.href
        ? `<a class="feature" ${linkAttrs(item.href)}>${inner}</a>`
        : `<div class="feature">${inner}</div>`;
    })
    .join('');

  return `
    <section class="features" id="${escapeHtml(anchor)}">
      ${data.title ? `<h2 class="features__title">${escapeHtml(data.title)}</h2>` : ''}
      <div class="features__grid">${cards}</div>
    </section>
  `;
};