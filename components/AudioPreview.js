import React from 'react'
import PropTypes from 'prop-types'

export default class AudioPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)

        const url = value.audio && value.audio.asset && value.audio.asset._ref ? 'https://cdn.sanity.io/files/1ejdxaih/production/' + value.audio.asset._ref
            .replace('file-', '')
            .replace('-mp3', '.mp3') : ''

        return (
            <div style={{ width: '100%', padding: '40px', border: '0', borderRadius: '0px' }}>
                {value.audio ? <audio src={url} controls style={{ maxWidth: '300px', maxHeight: '300px' }} /> : 'No audiofile selected'}
            </div >
        )
    }
}