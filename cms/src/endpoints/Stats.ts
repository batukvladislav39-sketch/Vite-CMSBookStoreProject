import type { Endpoint } from 'payload'

type BookDoc = { stockLevel?: number | null; minStock?: number | null; price?: number | null }

const DEFAULT_MIN_STOCK = 5

export const statsEndpoint: Endpoint = {
  path: '/stats',
  method: 'get',
  handler: async (req) => {
    const { docs } = await req.payload.find({
      collection: 'books',
      pagination: false,
      depth: 0,
    })

    let totalUnits = 0
    let stockValue = 0
    let lowStockCount = 0
    let outOfStockCount = 0

    for (const book of docs as BookDoc[]) {
      const stock = book.stockLevel ?? 0
      const min = book.minStock ?? DEFAULT_MIN_STOCK
      totalUnits += stock
      stockValue += stock * (book.price ?? 0)
      if (stock <= 0) outOfStockCount += 1
      else if (stock < min) lowStockCount += 1
    }

    return Response.json({
      totalUnits,
      titlesCount: docs.length,
      stockValue,
      lowStockCount,
      outOfStockCount,
    })
  },
}