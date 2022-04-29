// ICONS
import {
    MdThumbUp
} from "react-icons/md"

export default {
    title: 'Vote',
    name: 'vote',
    icon: MdThumbUp,
    type: 'document',
    fields: [
        {
            title: 'User',
            name: 'user',
            type: 'reference',
            to: [{ type: 'user' }]
        },
        {
            title: 'Vote multiplier',
            name: 'voteMultiplier',
            type: 'number'
        },
        {
            title: 'Vote multiplier role',
            name: 'voteMultiplierRole',
            type: 'string'
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
            to: [{ type: 'cycle' }]
        },
        {
            title: 'Submitted',
            name: 'submitted',
            type: 'boolean'
        },
        {
            title: 'Vote allocation',
            name: 'voteAllocation',
            type: 'array',
            of: [
                {
                    title: 'Vote Allocation',
                    name: 'voteAllocation',
                    type: 'voteAllocation'
                },
            ]
        },
    ],
    preview: {
        select: {
            userName: 'user.name',
            cycleTitle: 'cycle.title',
            userAvatar: 'user.avatar'
        },
        prepare(selection) {
            console.log(selection)
            const { cycleTitle, userName, userAvatar } = selection
            return {
                title: userName,
                subtitle: cycleTitle,
                media: userAvatar
            }
        },
    }
}