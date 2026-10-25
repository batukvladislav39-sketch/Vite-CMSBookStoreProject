export type UIState = 'loading' | 'error' | 'notFound' | 'ready';
export type BlockType = 'intro' | 'features' | 'hero' | 'stats' | 'inventory' | 'actions';

export type Book = {
  id: number | string;
  isbn: string;
  title: string;
  author: string;
  year: number;
  stockLevel: number;
  minStock?: number | null;
  price: number;
};

export type StockStats = {
  totalUnits: number;
  titlesCount: number;
  stockValue: number;
  lowStockCount: number;
  outOfStockCount: number;
};
export type MetricKey = keyof StockStats;

type BaseBlock = { id: string; blockType: BlockType };

export type IntroBlock = BaseBlock & {
  blockType: 'intro';
  eyebrow?: string | null;
  title: string;
  text?: string | null;
  primaryLabel?: string | null;
  primaryHref?: string | null;
  secondaryLabel?: string | null;
  secondaryHref?: string | null;
};
export type FeatureItem = { id?: string; title: string; text?: string | null; href?: string | null };
export type FeaturesBlock = BaseBlock & { blockType: 'features'; title?: string | null; items?: FeatureItem[] | null };
export type HeroBlock = BaseBlock & { blockType: 'hero'; title: string; subtitle?: string | null };
export type StatsBlock = BaseBlock & { blockType: 'stats'; title: string; metrics?: MetricKey[] | null };
export type InventoryBlock = BaseBlock & {
  blockType: 'inventory';
  title: string;
  limit?: number | null;
  onlyLow?: boolean | null;
};
export type ActionItem = { id?: string; label: string; href: string };
export type QuickActionsBlock = BaseBlock & { blockType: 'actions'; title: string; actionsList?: ActionItem[] | null };

export type DashboardWidget =
  | IntroBlock
  | FeaturesBlock
  | HeroBlock
  | StatsBlock
  | InventoryBlock
  | QuickActionsBlock;

export type PageDoc = {
  id: number | string;
  title: string;
  slug: string;
  description?: string | null;
  layout?: DashboardWidget[] | null;
};

export type SiteData = { stats: StockStats; books: Book[] };