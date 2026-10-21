import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'isbn',
      type: 'text',
      required: true,
      label: 'ISBN / Артикул',
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Назва книги',
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      label: 'Рік видання',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Автор',
    },
    {
      name: 'stockLevel',
      type: 'number',
      required: true,
      label: 'Залишок на складі (шт.)',
      min: 0,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Ціна (грн)',
      min: 0,
    },
  ],
}