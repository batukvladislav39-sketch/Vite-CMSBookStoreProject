import type { PageDoc, SiteData, UIState } from './types';
import { renderBlock } from './blocks';
import { escapeHtml } from './utils/escapeHtml';

const SITE_NAME = 'BookAbyss';

export const renderUIState = (state: UIState, container: HTMLElement | null, message?: string) => {
  if (!container) return;

  if (state === 'loading') {
    container.innerHTML = `
      <div class="state" role="status">
        <div class="spinner" aria-hidden="true"></div>
        <h2 class="state__title">Завантаження…</h2>
      </div>`;
  } else if (state === 'notFound') {
    container.innerHTML = `
      <div class="state">
        <h2 class="state__title">Сторінку не знайдено</h2>
        <p>${escapeHtml(message || 'Такої сторінки немає або її ще не створено в адмін-панелі.')}</p>
        <a class="btn btn--primary" href="#/">На головну</a>
      </div>`;
    document.title = `Не знайдено — ${SITE_NAME}`;
  } else if (state === 'error') {
    container.innerHTML = `
      <div class="state state--error" role="alert">
        <h2 class="state__title">Сталася помилка</h2>
        <p>${escapeHtml(message || 'Не вдалося завантажити дані з сервера.')}</p>
        <button class="btn btn--primary" type="button" data-reload>Спробувати знову</button>
      </div>`;
    container.querySelector('[data-reload]')?.addEventListener('click', () => window.location.reload());
  }
};

export const renderPage = (page: PageDoc, site: SiteData, container: HTMLElement | null) => {
  if (!container) return;

  const head =
    page.slug === 'home'
      ? ''
      : `<header class="page-head">
           <h1>${escapeHtml(page.title)}</h1>
           ${page.description ? `<p>${escapeHtml(page.description)}</p>` : ''}
         </header>`;

  const seen = new Set<string>();
  const blocksHtml = (page.layout ?? [])
    .map((widget) => {
      const anchor = seen.has(widget.blockType) ? `${widget.blockType}-${widget.id}` : widget.blockType;
      seen.add(widget.blockType);
      return renderBlock(widget, site, anchor);
    })
    .join('');

  container.innerHTML =
    head +
    (blocksHtml ||
      `<div class="state"><h2 class="state__title">Поки що порожньо</h2><p>Додайте блоки на цю сторінку в адмін-панелі.</p></div>`);

  document.title = page.slug === 'home' ? SITE_NAME : `${page.title} — ${SITE_NAME}`;
};