import type { IntroBlock, SiteData } from '../types';
import { escapeHtml } from '../utils/escapeHtml';
import { linkAttrs } from '../utils/href';

// Декоративна полиця: висота, колір, ширина
const SPINES: Array<[number, string, number]> = [
  [62, '--oxblood', 1], [85, '--navy', 1.2], [48, '--mustard', 0.9], [100, '--forest', 1.1], [70, '--plum', 1],
  [55, '--slate', 1.3], [92, '--oxblood', 0.9], [66, '--mustard', 1.1], [78, '--navy', 1],
];

const button = (label: string | null | undefined, href: string | null | undefined, cls: string): string =>
  label && href ? `<a class="btn ${cls}" ${linkAttrs(href)}>${escapeHtml(label)}</a>` : '';

export const renderIntroBlock = (data: IntroBlock, _site: SiteData, anchor: string): string => {
  const spines = SPINES.map(
    ([h, c, w], i) => `<span class="spine" style="--h:${h}%;--c:var(${c});--i:${i};--w:${w}"></span>`,
  ).join('');

  const cta = [
    button(data.primaryLabel, data.primaryHref, 'btn--primary'),
    button(data.secondaryLabel, data.secondaryHref, 'btn--ghost'),
  ].join('');

  return `
    <section class="intro" id="${escapeHtml(anchor)}">
      <div>
        ${data.eyebrow ? `<p class="intro__eyebrow">${escapeHtml(data.eyebrow)}</p>` : ''}
        <h1 class="intro__title">${escapeHtml(data.title)}</h1>
        ${data.text ? `<p class="intro__text">${escapeHtml(data.text)}</p>` : ''}
        ${cta ? `<div class="intro__cta">${cta}</div>` : ''}
      </div>
      <div class="shelf shelf--static" aria-hidden="true">${spines}</div>
    </section>
  `;
};