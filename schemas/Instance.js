import {
    MdCircle
} from "react-icons/md"

export default {
    title: 'Instance',
    name: 'instance',
    icon: MdCircle,
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Subdomain',
            description: 'Read-only configuration value',
            name: 'subdomain',
            type: 'string',
            readOnly: true
        },
        {
            title: 'Connection',
            name: 'connection',
            type: 'string'
        },
        {
            title: 'Discord Guild ID',
            description: 'Read-only configuration value',
            name: 'discordGuildId',
            type: 'string',
            readOnly: true,
            hidden: ({ document }) => document?.connection == 'slack'
        },
        {
            title: 'Slack Workspace ID',
            description: 'Read-only configuration value',
            name: 'slackWorkspaceId',
            type: 'string',
            // readOnly: true
            hidden: ({ document }) => !document?.connection == 'slack'
        },
        {
            title: 'Slack Token',
            description: 'Read-only configuration value. Encrypted.',
            name: 'slackToken',
            type: 'string',
            // readOnly: true,
            hidden: ({ document }) => !document?.connection == 'slack'
        },
        {
            title: 'Auth0 Client ID',
            description: 'Read-only configuration value',
            name: 'auth0ClientId',
            type: 'string',
            readOnly: true
        },
        {
            title: 'Netlify Site ID',
            description: 'Read-only configuration value',
            name: 'netlifySiteId',
            type: 'string',
            readOnly: true
        },
        {
            title: 'Big logo',
            description: 'Used on login page',
            name: 'bigLogo',
            type: 'image',
        },
        {
            title: 'Small logo',
            description: 'Used in menubar',
            name: 'smallLogo',
            type: 'image',
        },
        {
            title: 'Main color',
            name: 'mainColor',
            type: 'colorPicker',
            initialValue: '#0000ff'
        },
        {
            title: 'Highlight color',
            name: 'highlightColor',
            type: 'colorPicker',
            initialValue: '#41efc8'
        },
        {
            title: 'Pre-login text',
            name: 'preLoginText',
            type: 'simpleEditor'
        },
        {
            title: 'Landing page text',
            name: 'landingPageText',
            type: 'simpleEditor'
        },
        {
            title: 'Mandatory image upload',
            name: 'mandatoryImageUpload',
            type: 'boolean',
            initialValue: true
        },
        {
            title: 'Show ETH connection',
            name: 'showEthConnection',
            type: 'boolean',
            initialValue: false
        },
        {
            title: 'ETH address connection text',
            name: 'ethConnectionText',
            type: 'simpleEditor',
            hidden: ({ document }) => !document?.showEthConnection
        },
    ]
}
