// ICONS
import {
    MdStar,
} from "react-icons/md"

export default {
    title: 'Resource',
    name: 'resource',
    icon: MdStar,
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
    ]
}