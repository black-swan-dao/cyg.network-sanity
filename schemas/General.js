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
            title: 'About',
            name: 'about',
            type: 'contentEditor',
        },
        {
            title: 'FAQ',
            name: 'faq',
            type: 'contentEditor',
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
