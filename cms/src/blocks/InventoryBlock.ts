import { Block } from 'payload';

export const InventoryBlock: Block = {
    slug: 'inventory',
    labels: {singular: 'Віджет інвентаризації', plural: 'Віджети інвентаризації'},
    fields: [
        {name: 'title', type: 'text', required: true, label: 'Назва віджета'},
        {name: 'booksList', type: 'array', label: 'Список книг', fields: [
            {name: 'isbn', type: 'text', required: true, label: 'ISBN'},
            {name: 'title', type: 'text', required: true, label: 'Назва книги'},
            {name: 'year', type: 'number', required: true, label: 'Рік випуску книги'},
            {name: 'author', type: 'text', required: true, label: 'Автор книги'},
            {name: 'stockLevel', type: 'number', required: true, label: 'Кількість на складі'},
            {name: 'price', type: 'number', required: true, label: 'Ціна книги'},
        ]}
    ]
}