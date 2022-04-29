import React from 'react'

// ICONS
import {
    MdImage,
    MdHighlight,
    MdAccountBox,
    MdShortText,
} from "react-icons/md"


const highlightRender = props => (
    <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
)

const interviewNameRender = props => (
    <span style={{ backgroundColor: 'lightgrey', fontWeight: 'bold' }}>{props.children}</span>
)

const alignCenterRender = props => (
    <p style={{ textAlign: 'center' }}>{props.children}</p>
)

const alignRightRender = props => (
    <p style={{ textAlign: 'right' }}>{props.children}</p>
)

const footNoteRender = props => (
    <span style={{ background: 'rgba(0,0,255,0.2)' }}>{props.children}</span>
)

const noteRender = props => (
    <p style={{ fontSize: '0.8em' }}>{props.children}</p>
)

export default {
    type: 'object',
    name: 'contentEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        {
                            title: 'Center aligned', value: 'center-aligned', blockEditor: {
                                render: alignCenterRender
                            }
                        },
                        {
                            title: 'Right aligned', value: 'right-aligned', blockEditor: {
                                render: alignRightRender
                            }
                        },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                        {
                            title: 'Note', value: 'note', blockEditor: {
                                render: noteRender
                            }
                        }
                    ],
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
                            {
                                name: 'footnote',
                                type: 'object',
                                title: 'Footnote',
                                blockEditor: {
                                    icon: MdShortText,
                                    render: footNoteRender
                                },
                                fields: [
                                    {
                                        title: 'Footnote text',
                                        name: 'content',
                                        type: 'simpleEditor'
                                    },
                                ]
                            },
                        ]
                    },
                },
                {
                    type: 'image',
                    icon: MdImage,
                    fields: [
                        {
                            title: 'Caption',
                            name: 'caption',
                            type: 'simpleEditor',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            name: 'attribution',
                            type: 'string',
                            title: 'Attribution',
                            options: {
                                isHighlighted: true
                            }
                        },
                        {
                            title: 'Fullbredd',
                            name: 'fullWidth',
                            type: 'boolean',
                            options: {
                                isHighlighted: true
                            }
                        },
                    ]
                },
                {
                    type: 'videoBlock'
                },
                {
                    type: 'audioBlock'
                },
                {
                    type: 'embedBlock'
                },
            ]
        }
    ]
}