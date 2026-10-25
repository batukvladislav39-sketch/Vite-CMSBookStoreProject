import type { InventoryBlock, SiteData } from '../types';
import { escapeHtml } from '../utils/escapeHtml';
import { formatPrice } from '../utils/format';
import { STATUS_LABEL, stockFill, stockState } from '../utils/stock';

export const renderInventoryBlock = (data: InventoryBlock, ctx: SiteData, anchor: string): string => {
  const id = escapeHtml(anchor);

  let books = ctx.books;
  if (data.onlyLow) books = books.filter((b) => stockState(b) !== 'ok');
  books = books.slice(0, data.limit ?? 10);

  const rowsHtml = books
    .map((book) => {
      const state = stockState(book);
      return `
        <tr>
          <td class="isbn" data-label="ISBN">${escapeHtml(book.isbn)}</td>
          <td class="book-title">${escapeHtml(book.title)}</td>
          <td data-label="Автор">${escapeHtml(book.author)}</td>
          <td data-label="Рік">${escapeHtml(book.year)}</td>
          <td data-label="Залишок">
            <div class="stock stock--${state}" style="--fill:${stockFill(book)}%">
              <span class="stock__num">${escapeHtml(book.stockLevel)} шт.</span><span class="stock__bar"></span>
            </div>
          </td>
          <td data-label="Статус"><span class="badge badge--${state}">${STATUS_LABEL[state]}</span></td>
          <td class="num" data-label="Ціна">${escapeHtml(formatPrice(book.price))}</td>
        </tr>`;
    })
    .join('');

  const body = books.length
    ? `
      <div class="table-wrap">
        <table class="inventory">
          <thead>
            <tr>
              <th>ISBN</th><th>Назва книги</th><th>Автор</th><th>Рік</th>
              <th>Залишок</th><th>Статус</th><th class="num">Ціна</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>`
    : `<p class="empty">${data.onlyLow ? 'Усе в наявності, нічого не закінчується.' : 'Книг поки немає. Додайте їх в адмін-панелі.'}</p>`;

  return `
    <section class="panel" id="${id}" aria-labelledby="${id}-title">
      <div class="panel__head">
        <h2 class="panel__title" id="${id}-title">${escapeHtml(data.title)}</h2>
      </div>
      ${body}
    </section>
  `;
};