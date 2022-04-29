import React from 'react'
import PropTypes from 'prop-types'

export default class PostPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)
        console.log('XXXXXXXXX')

        // const url = value.audio && value.audio.asset && value.audio.asset._ref ? 'https://cdn.sanity.io/files/1tpw92x3/production/' + value.audio.asset._ref
        //     .replace('file-', '')
        //     .replace('-mp3', '.mp3') : ''

        return (
            <div style={{ width: '100%', padding: '40px', border: '0', borderRadius: '0px' }}>
                XXXX
            </div >
        )
    }
}
