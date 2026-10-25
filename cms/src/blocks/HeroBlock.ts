import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Головний екран', plural: 'Головні екрани' },
  fields: [
    { name: 'title', type: 'text', label: 'Підпис над числом', defaultValue: 'Книг на складі', required: true },
    { name: 'subtitle', type: 'text', label: 'Підпис під числом (необов’язково)' },
  ],
}