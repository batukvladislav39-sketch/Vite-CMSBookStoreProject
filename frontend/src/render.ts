import { type DashboardData, type DashboardWidget, type UIState } from "./types";

import { renderStatsBlock } from "./blocks/Stats";
import { renderQuickActionsBlock } from "./blocks/QuickActions";
import { renderInventoryBlock } from "./blocks/Inventory";

export const renderUIState = (state: UIState, container: HTMLElement | null, errorMessage?: string) => {
    if (!container) return;

    if (state === 'loading') {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px; color: #64748b;">
                <h2>⏳ Завантаження даних...</h2>
                <p>Отримуємо актуальні залишки та статистику</p>
            </div>
        `;
    } else if (state === 'error') {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px; color: red;">
                <h2>❌ Сталася помилка</h2>
                <p>${errorMessage || 'Не вдалося завантажити систему управління.'}</p>
                <button onclick="window.location.reload()" style="margin-top: 15px; padding: 10px 20px; cursor: pointer;">Спробувати знову</button>
            </div>
        `;
    }
};

export const renderDashboard = (data: DashboardData, container: HTMLElement | null) => {
    if (!container) return;

    const widgetsHtml = data.layout.map((widget: DashboardWidget) => {
        
        switch (widget.blockType) {
            case 'stats':
                return renderStatsBlock(widget);
            
            case 'actions':
                return renderQuickActionsBlock(widget);
            
            case 'inventory':
                return renderInventoryBlock(widget);
            
            default:
                console.warn(`Невідомий тип віджета: ${(widget as any).blockType}`);
                return ''; 
        }
    }).join('');

    container.innerHTML = widgetsHtml;
};