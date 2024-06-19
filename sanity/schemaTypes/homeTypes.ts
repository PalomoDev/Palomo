import {defineField, defineType} from "sanity"


export const homeType = defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
        }),
        {
            title: 'Cover',
            name: 'cover',
            type: 'array',
            of: [
                {
                    title: 'Cover Item',
                    type: 'object',
                    fields: [
                        {title: 'Description', name: 'description', type: 'string'},
                        {title: 'Image', name: 'image', type: 'image'}
                    ]
                }
            ]
        }

    ]
})