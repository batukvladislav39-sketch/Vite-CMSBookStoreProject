import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: { singular: 'Картки можливостей', plural: 'Картки можливостей' },
  fields: [
    { name: 'title', type: 'text', label: 'Заголовок секції' },
    {
      name: 'items',
      type: 'array',
      label: 'Картки',
      minRows: 1,
      maxRows: 9,
      fields: [
        { name: 'title', type: 'text', label: 'Назва', required: true },
        { name: 'text', type: 'textarea', label: 'Опис' },
        { name: 'href', type: 'text', label: 'Посилання (необов’язково)', admin: { description: 'Наприклад #/inventory' } },
      ],
    },
  ],
}