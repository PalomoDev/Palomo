import {defineField, defineType} from "sanity";

export const movieType = defineType({
    name: 'movie',
    title: 'Movie',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()

        }),
        defineField({
            name: 'year',
            title: 'Year',
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
            name: 'category',
            title: 'Category',
            type: 'string',
            validation: rule => rule.required(),
            options: {
                list: [
                    {title: 'series', value: 'series'},
                    {title: 'feature', value: 'feature'}
                ], // <-- predefined values

            }

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
            name: 'director',
            title: 'Director',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'dop',
            title: 'Dop',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'producer',
            title: 'Producer',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'production',
            title: 'Production',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'imdb',
            title: 'Imdb Url',
            type: 'url',
            validation: rule => rule.required()
        }),
        {
            name: 'shots',
            title: 'Shots',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true, // Включает возможность кадрирования изображений
                    },

                }
            ]
        }

    ]
})