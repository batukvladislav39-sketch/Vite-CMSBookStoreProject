import { LOW_STOCK_THRESHOLD } from './config';
import type { Book } from '../types';

export type StockState = 'ok' | 'low' | 'out';

export const STATUS_LABEL: Record<StockState, string> = {
  ok: 'В наявності',
  low: 'Закінчується',
  out: 'Немає',
};

const minStockOf = (b: Book): number => b.minStock ?? LOW_STOCK_THRESHOLD;

export const stockState = (b: Book): StockState =>
  b.stockLevel <= 0 ? 'out' : b.stockLevel < minStockOf(b) ? 'low' : 'ok';

export const stockFill = (b: Book): number =>
  Math.min(100, Math.max(0, Math.round((b.stockLevel / Math.max(1, minStockOf(b) * 2)) * 100)));