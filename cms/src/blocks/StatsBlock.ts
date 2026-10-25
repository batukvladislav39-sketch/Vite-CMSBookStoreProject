import type { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'stats',
  labels: { singular: 'Статистика', plural: 'Статистика' },
  fields: [
    { name: 'title', type: 'text', label: 'Заголовок', defaultValue: 'Огляд складу', required: true },
    {
      name: 'metrics',
      type: 'select',
      hasMany: true,
      label: 'Показники',
      defaultValue: ['totalUnits', 'stockValue', 'lowStockCount'],
      options: [
        { label: 'Книг на складі (шт.)', value: 'totalUnits' },
        { label: 'Назв у каталозі', value: 'titlesCount' },
        { label: 'Вартість залишків', value: 'stockValue' },
        { label: 'Закінчується (назв)', value: 'lowStockCount' },
        { label: 'Немає в наявності (назв)', value: 'outOfStockCount' },
      ],
    },
  ],
}