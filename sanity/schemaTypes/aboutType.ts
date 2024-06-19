import {defineField, defineType} from 'sanity';

export const aboutType = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'metatitle',
            type: 'string',
        }),

        defineField({
            name: 'avatar',
            type: 'image',
        }),
        {
            name: 'body',
            type: 'array',
            of: [{type: 'block'}]
        }

    ],
})