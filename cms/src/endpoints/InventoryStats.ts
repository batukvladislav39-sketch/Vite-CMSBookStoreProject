import { Endpoint } from 'payload';

type BookData = {
  stockLevel: number;
  price: number;
};

export const inventoryStatsEndpoint: Endpoint = {
  path: '/inventory-stats',
  method: 'get',
  handler: async (req) => {
    try {
      const booksResult = await req.payload.find({
        collection: 'books' as any,
        limit: 1000,
      });

      const books = booksResult.docs as unknown as BookData[];

      const totalBooksInStock = books.reduce((sum, book) => sum + book.stockLevel, 0);
      
      const totalInventoryValue = books.reduce((sum, book) => sum + (book.stockLevel * book.price), 0);
      
      const criticalItemsCount = books.filter(book => book.stockLevel < 5).length;

      return Response.json({
        success: true,
        message: 'Статистика складу успішно згенерована',
        data: {
          totalBooksInStock,
          totalInventoryValue,
          criticalItemsCount,
        }
      });
    } catch (error) {
      console.error('Помилка при розрахунку статистики:', error);
      return Response.json({ success: false, message: 'Помилка сервера' }, { status: 500 });
    }
  },
};