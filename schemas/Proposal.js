// ICONS
import {
    MdDescription,
} from "react-icons/md"

export default {
    title: 'Proposal',
    name: 'proposal',
    icon: MdDescription,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Instance',
            name: 'instance',
            type: 'reference',
            validation: Rule => Rule.required(),
            to: [{ type: 'instance' }]
        },
        {
            title: 'Cycle',
            name: 'cycle',
            type: 'reference',
            validation: Rule => Rule.required(),
            to: [{ type: 'cycle' }],
            weak: true
        },
        {
            title: 'Submitted',
            name: 'submitted',
            type: 'boolean'
        },
        {
            title: 'Authors',
            name: 'authors',
            type: 'array',
            of: [
                {
                    title: 'Author',
                    name: 'author',
                    type: 'reference',
                    to: [{ type: 'user' }]
                },
            ]
        },
        {
            title: 'Resources',
            name: 'resources',
            type: 'array',
            of: [
                {
                    title: 'Resource',
                    name: 'resource',
                    type: 'reference',
                    to: [{ type: 'resource' }],
                    weak: true
                },
            ]
        },
        {
            title: 'Main image',
            name: 'mainImage',
            type: 'image',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            },
        },
        {
            title: 'Content',
            name: 'content',
            type: 'text',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            options: {
                source: 'title',
                maxLength: 200
            }
        },
    ],
    preview: {
        select: {
            title: 'title',
            cycle: 'cycle',
            author0: 'authors.0.name',
            author1: 'authors.1.name',
            author2: 'authors.2.name',
            author3: 'authors.3.name',
            mainImage: 'mainImage'
        },
        prepare(selection) {
            console.log(selection)
            const { title, cycle, mainImage, author0, author1, author2, author3 } = selection
            const authors = [author0, author1, author2].filter(Boolean)
            const subtitle = authors.length > 0 ? `${authors.join(', ')}` : ''
            const hasMoreAuthors = Boolean(author3)
            return {
                title: title,
                subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle,
                media: mainImage
            }
        },
    }
}