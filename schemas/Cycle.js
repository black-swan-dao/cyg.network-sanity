// ICONS
import {
  MdReplay,
} from "react-icons/md"

export default {
  title: 'Cycle',
  name: 'cycle',
  icon: MdReplay,
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
      title: 'Discord role',
      name: 'discordRole',
      type: 'string'
    },
    {
      title: 'Text (Landing page)',
      name: 'textLanding',
      type: 'simpleEditor'
    },
    {
      title: 'Text (Proposal phase)',
      name: 'textProposal',
      type: 'simpleEditor'
    },
    {
      title: 'Text (Vote phase)',
      name: 'textVote',
      type: 'simpleEditor'
    },
    {
      title: 'Text (Result phase)',
      name: 'textResult',
      type: 'simpleEditor'
    },
    {
      title: "Phase",
      name: "phase",
      type: "string",
      options: {
        list: [
          { title: "Proposal", value: "proposal" },
          { title: "Vote", value: "vote" },
          { title: "Result", value: "result" }
        ],
      },
    },
    {
      title: 'Cycle start',
      description: 'Proposal phase starts',
      name: 'start',
      type: 'datetime'
    },
    {
      title: 'Cycle midpoint',
      description: 'Proposal phase ends and vote phase starts',
      name: 'midpoint',
      type: 'datetime'
    },
    {
      title: 'Cycle end',
      description: 'Vote phase ends and result phase starts',
      name: 'end',
      type: 'datetime'
    },
    {
      title: 'Rank results by resource',
      name: 'rankResultsByResource',
      type: 'boolean',
      initialValue: false
    },
    {
      title: 'Use voting weights',
      name: 'useVotingWeights',
      type: 'boolean',
      initialValue: false
    },
    {
      title: 'Vote weights',
      name: 'voteWeights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Role',
              name: 'role',
              type: 'string',
            },
            {
              title: 'Weight',
              name: 'weight',
              type: 'number',
            },
          ],
          preview: {
            select: {
              role: 'role',
              weight: 'weight',
            },
            prepare(selection) {
              const { role, weight } = selection
              return {
                title: role + ': ' + weight,
              }
            },
          }
        },
      ],
      hidden: ({ document }) => !document?.useVotingWeights,
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
  initialValue: {
    phase: "proposal"
  },
  preview: {
    select: {
      title: 'title',
      discordRole: 'discordRole'
    },
    prepare(selection) {
      console.log(selection)
      const { title, discordRole } = selection
      return {
        title: title,
        subtitle: `Discord role: ${discordRole}`,
      }
    },
  }
}