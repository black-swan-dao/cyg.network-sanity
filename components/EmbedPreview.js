import React from 'react'
import PropTypes from 'prop-types'
import getVideoId from "get-video-id";

export default class EmbedPreview extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        console.dir(value)

        // YOUTUBE
        if (value.url.includes('youtube')) {
            return (
                <iframe style={{ padding: '10px' }} width='480' height='320' src={'https://www.youtube.com/embed/' + getVideoId(value.url).id} />
            )
        }

        // VIMEO
        if (value.url.includes('vimeo')) {
            return (
                <iframe style={{ padding: '10px' }} width='480' height='320' src={'https://player.vimeo.com/video/' + getVideoId(value.url).id} />
            )
        }

        // SOUNDCLOUD
        if (value.url.includes('soundcloud')) {
            return (
                <iframe style={{ padding: '10px' }} width='480' height='320' src={'https://w.soundcloud.com/player/?url=' + value.url} />
            )
        }

    }
}