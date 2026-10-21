import { StatsBlock } from "../types";

export const renderStatsBlock = (data: StatsBlock): string => {
    const cardsHtml = data.statsList.map((stat) => {
    return `
      <div class="card">
        <div class="card-title">${stat.label}</div>
        <div class="card-value">${stat.value}</div>
        <div class="card-trend">${stat.trend}</div>
      </div>
    `;
  }).join('');

  return `
    <section class="anatomy-section" id="stats-${data.id}">
      <h3>${data.title}</h3>
      <div class="grid-container">
        ${cardsHtml} <!-- Вставляємо згенеровані картки сюди -->
      </div>
    </section>
  `;
}