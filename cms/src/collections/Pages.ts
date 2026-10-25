import type { CollectionConfig } from 'payload'
import { IntroBlock } from '../blocks/IntroBlock'
import { FeaturesBlock } from '../blocks/FeaturesBlock'
import { HeroBlock } from '../blocks/HeroBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { QuickActionsBlock } from '../blocks/QuickActionsBlock'
import { InventoryBlock } from '../blocks/InventoryBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Сторінка', plural: 'Сторінки' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'slug', 'updatedAt'] },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', label: 'Заголовок', required: true },
    {
      name: 'slug',
      type: 'text',
      label: 'Адреса (slug)',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'home = головна. Для меню: overview, inventory, stats. Латиниця, цифри, дефіс.' },
    },
    { name: 'description', type: 'textarea', label: 'Короткий опис під заголовком (крім головної)' },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Блоки сторінки (порядок = порядок на сайті)',
      blocks: [IntroBlock, FeaturesBlock, HeroBlock, StatsBlock, QuickActionsBlock, InventoryBlock],
    },
  ],
}