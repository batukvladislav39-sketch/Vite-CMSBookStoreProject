import type { Block } from 'payload'

export const InventoryBlock: Block = {
  slug: 'inventory',
  labels: { singular: 'Стан складу', plural: 'Стан складу' },
  fields: [
    { name: 'title', type: 'text', label: 'Заголовок', defaultValue: 'Стан складу', required: true },
    { name: 'limit', type: 'number', label: 'Максимум рядків', defaultValue: 10, min: 1, max: 100 },
    { name: 'onlyLow', type: 'checkbox', label: 'Показувати лише ті, що закінчуються', defaultValue: false },
  ],
}   