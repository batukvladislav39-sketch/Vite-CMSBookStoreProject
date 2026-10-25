import './styles/dashboard.css';

import { fetchPage, fetchSiteData } from './api';
import { renderPage, renderUIState } from './render';
import { currentPath, setActiveNav, slugFromPath } from './router';

const container = document.querySelector<HTMLElement>('#app-root');
let navigationId = 0;

async function navigate() {
  if (!container) {
    console.error("Can't find #app-root");
    return;
  }

  const id = ++navigationId;
  const path = currentPath();
  const slug = slugFromPath(path);

  setActiveNav(path);
  window.scrollTo({ top: 0 });

  if (!slug) {
    renderUIState('notFound', container);
    return;
  }

  renderUIState('loading', container);

  try {
    const [page, site] = await Promise.all([fetchPage(slug), fetchSiteData()]);
    if (id !== navigationId) return;

    if (!page) renderUIState('notFound', container);
    else renderPage(page, site, container);
  } catch (err) {
    console.error(err);
    if (id !== navigationId) return;
    renderUIState('error', container, 'Не вдалося підключитися до сервера. Перевірте, чи запущена CMS.');
  }
}

window.addEventListener('hashchange', navigate);
document.addEventListener('DOMContentLoaded', navigate);