import type { BlockType, DashboardWidget, SiteData } from '../types';
import { renderIntroBlock } from './Intro';
import { renderFeaturesBlock } from './Features';
import { renderHeroBlock } from './Hero';
import { renderStatsBlock } from './Stats';
import { renderQuickActionsBlock } from './QuickActions';
import { renderInventoryBlock } from './Inventory';

type Renderer<K extends BlockType> = (
  data: Extract<DashboardWidget, { blockType: K }>,
  site: SiteData,
  anchor: string,
) => string;

const renderers: { [K in BlockType]: Renderer<K> } = {
  intro: renderIntroBlock,
  features: renderFeaturesBlock,
  hero: renderHeroBlock,
  stats: renderStatsBlock,
  actions: renderQuickActionsBlock,
  inventory: renderInventoryBlock,
};

export const renderBlock = (widget: DashboardWidget, site: SiteData, anchor: string): string => {
  const render = renderers[widget.blockType] as unknown as
    | ((w: DashboardWidget, s: SiteData, a: string) => string)
    | undefined;

  if (!render) {
    console.warn(`Невідомий тип блоку: ${(widget as { blockType: string }).blockType}`);
    return '';
  }
  return render(widget, site, anchor);
};