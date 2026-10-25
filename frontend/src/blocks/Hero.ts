import type { HeroBlock, SiteData } from '../types';
import { escapeHtml } from '../utils/escapeHtml';
import { formatNumber } from '../utils/format';

const COLORS = ['--oxblood', '--navy', '--mustard', '--forest', '--plum', '--slate'];
const WIDTHS = [1, 1.3, 0.9, 1.1, 1, 1.2];
const MAX_SPINES = 12;

export const renderHeroBlock = (data: HeroBlock, ctx: SiteData, anchor: string): string => {
  const id = escapeHtml(anchor);
  const { stats } = ctx;
  const books = ctx.books.slice(0, MAX_SPINES);
  const maxStock = Math.max(1, ...books.map((b) => b.stockLevel));

  const spines = books
    .map((b, i) => {
      const height = Math.max(12, Math.round((b.stockLevel / maxStock) * 100));
      const tip = `${b.title} · ${b.stockLevel} шт.`;
      return `<span class="spine" tabindex="0" style="--h:${height}%;--c:var(${COLORS[i % COLORS.length]});--i:${i};--w:${WIDTHS[i % WIDTHS.length]}" data-tip="${escapeHtml(tip)}"></span>`;
    })
    .join('');

  const sub = data.subtitle
    ? escapeHtml(data.subtitle)
    : `${formatNumber(stats.titlesCount)} назв · вартість залишків ${formatNumber(stats.stockValue)} ₴`;

  const shelf = books.length
    ? `<div class="shelf" role="img" aria-label="Книги на полиці: висота корінця відповідає залишку">${spines}</div>
       <p class="hero__caption">Висота корінця це залишок на складі. Наведіть або торкніться, щоб побачити книгу.</p>`
    : `<p class="empty">Полиця порожня. Додайте книги в адмін-панелі.</p>`;

  return `
    <section class="hero" id="${id}">
      <div>
        <p class="hero__label">${escapeHtml(data.title)}</p>
        <p class="hero__value">${formatNumber(stats.totalUnits)}<small>шт.</small></p>
        <p class="hero__sub">${sub}</p>
      </div>
      <div>${shelf}</div>
    </section>
  `;
};