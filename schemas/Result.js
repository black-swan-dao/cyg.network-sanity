// ICONS
import {
    MdGavel,
} from "react-icons/md"

export default {
    title: 'Result',
    name: 'result',
    icon: MdGavel,
    type: 'document',
    fields: [
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
            to: [{ type: 'cycle' }],
            readOnly: true
        },
        {
            title: 'Total Vote Credits',
            name: 'totalVoteCredits',
            type: 'number',
            readOnly: true
        },
        {
            title: 'Total Effective Votes',
            name: 'totalEffectiveVotes',
            type: 'number',
            readOnly: true
        },
        {
            title: 'Number of participants',
            name: 'numberOfParticipants',
            type: 'number',
            readOnly: true
        },
        {
            title: 'Number of proposals',
            name: 'numberOfProposals',
            type: 'number',
            readOnly: true
        },
        {
            title: 'Result',
            name: 'result',
            type: 'array',
            readOnly: true,
            of: [
                {
                    title: 'Result item',
                    name: 'resultItem',
                    type: 'object',
                    fields: [
                        {
                            title: 'Proposal',
                            name: 'proposal',
                            type: 'reference',
                            to: [{ type: 'proposal' }],
                            readOnly: true
                        },
                        {
                            title: 'Effective votes',
                            name: 'effectiveVotes',
                            type: 'number',
                            readOnly: true
                        },
                        {
                            title: 'Vote credits',
                            name: 'voteCredits',
                            type: 'number',
                            readOnly: true
                        },
                    ],
                    preview: {
                        select: {
                            title: 'proposal.title',
                            effectiveVotes: 'effectiveVotes',
                            image: 'proposal.mainImage'
                        },
                        prepare(selection) {
                            const { title, effectiveVotes, image } = selection
                            return {
                                title: title,
                                subtitle: effectiveVotes,
                                media: image
                            }
                        },
                    }
                },
            ]
        },
        {
            title: 'Votes by User',
            name: 'votesByUser',
            type: 'array',
            readOnly: true,
            of: [
                {
                    title: 'User item',
                    name: 'userItem',
                    type: 'object',
                    readOnly: true,
                    fields: [
                        {
                            title: 'User',
                            name: 'user',
                            type: 'reference',
                            readOnly: true,
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
                            title: 'Vote allocation',
                            name: 'voteAllocation',
                            type: 'array',
                            readOnly: true,
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
                            title: 'user.name',
                        },
                        prepare(selection) {
                            const { title } = selection
                            return {
                                title: title
                            }
                        },
                    }
                }

            ]
        },
    ],
    preview: {
        select: {
            title: 'cycle.title',
            date: '_createdAt'
        },
        prepare(selection) {
            const { title, date } = selection
            return {
                title: title,
                subtitle: date,
            }
        },
    }
}