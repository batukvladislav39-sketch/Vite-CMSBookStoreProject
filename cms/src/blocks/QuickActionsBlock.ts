import type { Block } from 'payload'

export const QuickActionsBlock: Block = {
  slug: 'actions',
  labels: { singular: 'Швидкі операції', plural: 'Швидкі операції' },
  fields: [
    { name: 'title', type: 'text', label: 'Заголовок', defaultValue: 'Швидкі операції', required: true },
    {
      name: 'actionsList',
      type: 'array',
      label: 'Кнопки',
      minRows: 1,
      maxRows: 6,
      fields: [
        { name: 'label', type: 'text', label: 'Текст кнопки', required: true },
        {
          name: 'href',
          type: 'text',
          label: 'Посилання',
          required: true,
          admin: { description: 'Шлях в адмінці (наприклад /admin/collections/books/create) або повна адреса https://…' },
        },
      ],
    },
  ],
}