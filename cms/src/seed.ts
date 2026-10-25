import type { Payload } from 'payload'

export const seedPages = async (payload: Payload) => {
  const { totalDocs } = await payload.count({ collection: 'pages' })
  if (totalDocs > 0) return

  const pages = [
    {
      title: 'Головна',
      slug: 'home',
      layout: [
        {
          blockType: 'intro',
          eyebrow: 'Облік · склад · продажі',
          title: 'Книжковий магазин під контролем',
          text: 'BookAbyss це система обліку, організації та контролю продажів у книжковому магазині. Залишки на складі, статистика й контент сайту в одному місці.',
          primaryLabel: 'Переглянути склад',
          primaryHref: '#/inventory',
          secondaryLabel: 'Статистика',
          secondaryHref: '#/stats',
        },
        {
          blockType: 'features',
          title: 'Що вміє система',
          items: [
            { title: 'Склад', text: 'Список книг із залишками, статусами та цінами. Видно, що закінчується.', href: '#/inventory' },
            { title: 'Статистика', text: 'Кількість книг, вартість залишків і позиції, що потребують поповнення.', href: '#/stats' },
            { title: 'Керування з адмінки', text: 'Книги, сторінки й блоки сайту редагуються в адмін-панелі без зміни коду.', href: '#/overview' },
          ],
        },
      ],
    },
    {
      title: 'Огляд',
      slug: 'overview',
      description: 'Склад на полиці й ключові показники одним поглядом.',
      layout: [
        { blockType: 'hero', title: 'Книг на складі' },
        { blockType: 'stats', title: 'Ключові показники', metrics: ['titlesCount', 'stockValue', 'lowStockCount'] },
        {
          blockType: 'actions',
          title: 'Швидкі операції',
          actionsList: [
            { label: 'Додати книгу', href: '/admin/collections/books/create' },
            { label: 'Усі книги', href: '/admin/collections/books' },
          ],
        },
      ],
    },
    {
      title: 'Склад',
      slug: 'inventory',
      description: 'Повний список книг із залишками.',
      layout: [{ blockType: 'inventory', title: 'Усі книги', limit: 100, onlyLow: false }],
    },
    {
      title: 'Статистика',
      slug: 'stats',
      description: 'Підсумки по складу.',
      layout: [
        {
          blockType: 'stats',
          title: 'Показники складу',
          metrics: ['totalUnits', 'titlesCount', 'stockValue', 'lowStockCount', 'outOfStockCount'],
        },
        { blockType: 'inventory', title: 'Потребує поповнення', limit: 20, onlyLow: true },
      ],
    },
  ]

  for (const data of pages) {
    await payload.create({ collection: 'pages', data: data as any })
  }
  payload.logger.info('Створено початкові сторінки: home, overview, inventory, stats')
}