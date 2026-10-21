import { InventoryBlock } from "../types";

export const renderInventoryBlock = (data: InventoryBlock): string => {
    const booksHtml = data.booksList.map((item) => {
        const stockStyle = item.stockLevel < 5 ? 'color: red; font-weight: bold;' : '';
        
        return `
            <tr>
                <td>${item.isbn}</td>
                <td>${item.title}</td> <!-- 2. Повернули назву -->
                <td>${item.year}</td>  <!-- 2. Додали рік -->
                <td>${item.author}</td>
                <td style="${stockStyle}">${item.stockLevel} шт.</td>
                <td>${item.price} ₴</td>
            </tr>
        `;
    }).join('');

    return `
        <section class="anatomy-section dashboard-widget" id="inventory-${data.id}">
            <span class="anatomy-label">Block: InventoryBlock</span>
            <h3>${data.title}</h3>
            <table>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Назва книги</th> <!-- 2. Відповідні заголовки -->
                        <th>Рік</th>
                        <th>Автор</th>
                        <th>Залишок</th>
                        <th>Ціна</th>
                    </tr>
                </thead>
                <tbody>
                    ${booksHtml}
                </tbody>
            </table>
        </section>
    `;
};