import type { CollectionConfig } from 'payload'

export const Sales: CollectionConfig = {
    slug: 'sales',
    admin: {
        useAsTitle: 'title'
    },
    access: {
        read: () => true
    },
    fields: []
}