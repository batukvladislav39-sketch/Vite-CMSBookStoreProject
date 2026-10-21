import { GlobalConfig } from 'payload';
import { StatsBlock } from "@/blocks/StatsBlock";
import { QuickActionBlock } from "@/blocks/QuickActionsBlock";
import { InventoryBlock } from "@/blocks/InventoryBlock";

export const Dashboard: GlobalConfig = {
    slug: 'dashboard',
    label: 'Панель управління',
    access: {
        read: () => true
    },
    fields: [
        {name: 'title', type: 'text', required: true, defaultValue: 'Книжковий магазин - Панель управління'},
        {name: 'layout', type: 'blocks', label: 'Блоки та віджети дашборду', blocks: [
            StatsBlock, QuickActionBlock, InventoryBlock
        ]}
    ]
}