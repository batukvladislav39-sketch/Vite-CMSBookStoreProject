import { Block } from 'payload';

export const StatsBlock: Block = {
    slug:'stats',
    labels: {singular: 'Віджет статистики', plural: 'Віджет статистики'},
    fields: [
        {name: 'title', type: 'text', required: true, label: 'Заголовок віджета'},
        {name: 'statsList', type: 'array', label: 'Картки показників', fields: [
            {name: 'label', type: 'text', required: true, label: 'Назва показника'},
            {name: 'value', type: 'text', required: true, label: 'Значення (напр. 12 450 ₴)'},
            {name: 'trend', type: 'text', required: true, label: 'Тренд (напр. +15%)'}
        ]}
    ]
}