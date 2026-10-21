import { Block } from 'payload';

export const QuickActionBlock: Block = {
    slug: 'actions',
    labels: {singular: 'Віджет швидких дій', plural: 'Віджети швидких дій'},
    fields: [
        {name: 'title', type: 'text', required: true, label: 'Заголовок віджета'},
        {name: 'actionsList', type: 'array', label: 'Кнопки дій', fields: [
            {name: 'label', type: 'text', required: true, label: 'Текст кнопки'},
            {name: 'actionId', type: 'text', required: true, label: 'ID дії (напр. sale)'}
        ]}
    ]
}