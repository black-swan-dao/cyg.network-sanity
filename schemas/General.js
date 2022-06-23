export default {
    title: 'General',
    name: 'general',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Header image',
            name: 'headerImage',
            type: 'image'
        },
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
            title: 'Request form url',
            name: 'requestFormUrl',
            type: 'url',
        },
        {
            title: 'Request form text',
            name: 'requestFormText',
            type: 'string',
        },
        {
            title: 'Spawn page introduction',
            name: 'spawnIntroduction',
            type: 'contentEditor',
        },
    ]
}
