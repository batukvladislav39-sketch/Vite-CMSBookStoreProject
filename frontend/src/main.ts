import './style.css'
import './styles/main.css';

import { fetchDashboardData } from './api';
import { renderDashboard, renderUIState } from './render';

async function initApp() {
  const appContainer: HTMLElement | null = document.querySelector('#app-root');

  if (!appContainer) {
    console.error('Can\'t get appContainer css-id(#app-root)');
    return;
  }

  renderUIState('loading', appContainer);

  const dashboardData = await fetchDashboardData();

  if (!dashboardData) {
    renderUIState('error', appContainer, 'Не вдалося підключитися до базм даних книжкового магазину. Перевірте з\'єднання з сервером.')
  } else {
    renderDashboard(dashboardData, appContainer);
  }
}

document.addEventListener('DOMContentLoaded', initApp);