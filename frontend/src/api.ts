import type { Book, PageDoc, SiteData, StockStats } from './types';

export const API_URL: string = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`${path}: статус ${res.status}`);
  return (await res.json()) as T;
}

export async function fetchPage(slug: string): Promise<PageDoc | null> {
  const res = await getJson<{ docs: PageDoc[] }>(
    `/api/pages?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=0`,
  );
  return res.docs[0] ?? null;
}

export async function fetchSiteData(): Promise<SiteData> {
  const [stats, books] = await Promise.all([
    getJson<StockStats>('/api/stats'),
    getJson<{ docs: Book[] }>('/api/books?limit=100&depth=0&sort=title'),
  ]);
  return { stats, books: books.docs };
}