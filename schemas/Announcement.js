import {
    MdMail,
} from "react-icons/md"

export default {
    title: 'Announcement',
    name: 'announcement',
    icon: MdMail,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Announcement date and time',
            description: 'Date and time schedule of when to send the announcement out',
            name: 'time',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            title: 'Link URL',
            description: 'URL the announcement will point to (Cygnet page, event...)',
            name: 'link',
            type: 'url',
            validation: Rule => Rule.max(256)
        },
        {
            title: 'Text',
            description: 'Announcement body text',
            name: 'text',
            type: 'text',
            validation: Rule => Rule.required().max(4000)
	},
	{
	    title: 'Recipient roles',
            description: 'Discord roles which will receive the announcement',
	    name: 'recipient_roles',
	    type: 'array',
	    of: [{ type: 'string' }],
	    options: {
	        layout: 'tags'
	    }
	},
	{
	    title: 'Recipient channels',
            description: 'Discord guild channels the announcement gets posted to',
	    name: 'recipient_channels',
	    type: 'array',
	    of: [{ type: 'string' }],
	    options: {
	        layout: 'tags'
	    }
	},
	{
	    title: 'Is posted',
	    description: 'Determine whether announcement was sent out',
	    name: 'isPosted',
	    type: 'boolean',
	    initialValue: false
	},
	{
	    title: 'Instance',
	    name: 'instance',
	    type: 'reference',
	    validation: Rule => Rule.required(),
	    to: [{ type: 'instance' }]
	},
    ]
}
