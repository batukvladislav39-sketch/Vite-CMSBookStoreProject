export type UIState = 'loading' | 'error' | 'ready';
export type BlockType = 'stats' | 'inventory' | 'actions';

export type BaseBlock = {
  id: string;
  blockType: BlockType;
};

export type StatItem = {
  label: string;
  value: string;
  trend: string;
};

export type StatsBlock = BaseBlock & {
  blockType: 'stats';
  title: string;
  statsList: StatItem[];
};

export type BookItem = {
  isbn: string;
  title: string;
  year: number;
  author: string;
  stockLevel: number;
  price: number;
};

export type InventoryBlock = BaseBlock & {
  blockType: 'inventory';
  title: string;
  booksList: BookItem[];
};

export type ActionItem = {
  label: string;
  actionId: string;
};

export type QuickActionsBlock = BaseBlock & {
  blockType: 'actions';
  title: string;
  actionsList: ActionItem[];
};

export type DashboardWidget = StatsBlock | InventoryBlock | QuickActionsBlock;

export type DashboardData = {
  id: string;
  title: string;
  layout: DashboardWidget[]; 
};