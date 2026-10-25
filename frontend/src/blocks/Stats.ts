import type { MetricKey, SiteData, StatsBlock, StockStats } from '../types';
import { escapeHtml } from '../utils/escapeHtml';
import { formatNumber } from '../utils/format';

const METRICS: Record<MetricKey, { label: string; unit: string; value: (s: StockStats) => number }> = {
  totalUnits: { label: 'Книг на складі', unit: 'шт.', value: (s) => s.totalUnits },
  titlesCount: { label: 'Назв у каталозі', unit: '', value: (s) => s.titlesCount },
  stockValue: { label: 'Вартість залишків', unit: '₴', value: (s) => s.stockValue },
  lowStockCount: { label: 'Закінчується', unit: 'назв', value: (s) => s.lowStockCount },
  outOfStockCount: { label: 'Немає в наявності', unit: 'назв', value: (s) => s.outOfStockCount },
};

export const renderStatsBlock = (data: StatsBlock, ctx: SiteData, anchor: string): string => {
  const id = escapeHtml(anchor);

  const cardsHtml = (data.metrics ?? [])
    .filter((key) => key in METRICS)
    .map((key) => {
      const m = METRICS[key];
      return `
        <div class="stat">
          <p class="stat__label">${m.label}</p>
          <p class="stat__value">${formatNumber(m.value(ctx.stats))}${m.unit ? `<small>${m.unit}</small>` : ''}</p>
        </div>`;
    })
    .join('');

  return `
    <section class="panel" id="${id}" aria-labelledby="${id}-title">
      <div class="panel__head">
        <h2 class="panel__title" id="${id}-title">${escapeHtml(data.title)}</h2>
      </div>
      <div class="stats">${cardsHtml}</div>
    </section>
  `;
};