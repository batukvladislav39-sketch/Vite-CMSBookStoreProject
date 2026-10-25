import type { Block } from 'payload'

export const IntroBlock: Block = {
  slug: 'intro',
  labels: { singular: 'Вступний екран', plural: 'Вступні екрани' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Малий напис над заголовком' },
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    { name: 'text', type: 'textarea', label: 'Опис' },
    { name: 'primaryLabel', type: 'text', label: 'Головна кнопка: текст' },
    { name: 'primaryHref', type: 'text', label: 'Головна кнопка: посилання', admin: { description: 'Сторінка сайту (#/inventory), шлях в адмінці (/admin/...) або https://…' } },
    { name: 'secondaryLabel', type: 'text', label: 'Друга кнопка: текст' },
    { name: 'secondaryHref', type: 'text', label: 'Друга кнопка: посилання' },
  ],
}