import type { QuickActionsBlock, SiteData } from '../types';
import { escapeHtml } from '../utils/escapeHtml';
import { linkAttrs } from '../utils/href';

const VARIANTS = ['btn--primary', 'btn--secondary', 'btn--ghost'];

export const renderQuickActionsBlock = (data: QuickActionsBlock, _site: SiteData, anchor: string): string => {
  const id = escapeHtml(anchor);

  const buttonsHtml = (data.actionsList ?? [])
    .map(
      (action, i) =>
        `<a class="btn ${VARIANTS[i] ?? 'btn--ghost'}" ${linkAttrs(action.href)}>${escapeHtml(action.label)}</a>`,
    )
    .join('');

  return `
    <section class="panel" id="${id}" aria-labelledby="${id}-title">
      <div class="panel__head">
        <h2 class="panel__title" id="${id}-title">${escapeHtml(data.title)}</h2>
      </div>
      <div class="actions">${buttonsHtml}</div>
    </section>
  `;
};