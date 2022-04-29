export default {
    title: 'General',
    name: 'general',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Introduction',
            name: 'introduction',
            type: 'contentEditor',
        },
        {
            title: 'FAQ',
            name: 'faq',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Question',
                            name: 'question',
                            type: 'string',
                        },
                        {
                            title: 'Answer',
                            name: 'answer',
                            type: 'text',
                        },
                    ],
                },
            ]
        },
        {
            title: 'Spawn page introduction',
            name: 'spawnIntroduction',
            type: 'contentEditor',
        },
        {
            title: 'Contact',
            name: 'contact',
            type: 'contentEditor',
        },

    ]
}
