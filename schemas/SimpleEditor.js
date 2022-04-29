export default {
    type: 'object',
    name: 'simpleEditor',
    fields: [
        {
            title: 'Simple editor',
            name: 'content',
            type: 'array',
            options: {
                isHighlighted: true
            },
            of: [
                {
                    type: 'block',
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string'
                                    }
                                ]
                            },
                        ]
                    },
                },
            ]
        },
    ]
}