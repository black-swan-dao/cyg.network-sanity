export default {
    type: 'object',
    name: 'voteAllocation',
    fields: [
        {
            title: 'Proposal',
            name: 'proposal',
            type: 'reference',
            to: [{ type: 'proposal' }],
            weak: true
        },
        {
            title: 'Vote credits',
            name: 'voteCredits',
            type: 'number',
        },
        {
            title: 'Effective votes',
            name: 'effectiveVotes',
            type: 'number',
        },
    ],
    preview: {
        select: {
            proposalTitle: 'proposal.title',
            voteCredits: 'voteCredits',
            effectiveVotes: 'effectiveVotes',
            proposalImage: 'proposal.mainImage'
        },
        prepare(selection) {
            const { proposalTitle, voteCredits, effectiveVotes, proposalImage } = selection
            return {
                title: proposalTitle + ': ' + voteCredits + ' => ' + effectiveVotes,
                media: proposalImage
            }
        },
    }
}