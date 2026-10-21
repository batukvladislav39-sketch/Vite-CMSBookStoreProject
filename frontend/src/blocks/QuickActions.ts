import { QuickActionsBlock } from "../types";

export const renderQuickActionsBlock = (data: QuickActionsBlock): string => {
  const buttonsHtml = data.actionsList.map((action) => {
    return `
      <button class="card action-btn" data-action="${action.actionId}" style="cursor: pointer; text-align: center; font-weight: bold; background: #3b82f6; color: white; border: none; padding: 15px;">
        ${action.label}
      </button>
    `;
  }).join('');

  return `
    <section class="anatomy-section dashboard-widget" id="actions-${data.id}">
      <h3>${data.title}</h3>
      <div class="grid-container">
        ${buttonsHtml}
      </div>
    </section>
  `;
};