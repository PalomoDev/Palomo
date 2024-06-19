import {defineField, defineType} from "sanity";

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'cover',
            title: 'Cover',
            type: 'image',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'metatitle',
            title: 'Meta Title',
            type: 'string',
        }),
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                }
            ]
        },
    ]
})
