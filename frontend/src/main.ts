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
    renderUIState('error', appContainer, 'Failed to connect to the database. Check server connection.')
  } else {
    renderDashboard(dashboardData, appContainer);
  }
}

document.addEventListener('DOMContentLoaded', initApp);