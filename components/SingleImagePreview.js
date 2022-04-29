import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from 'part:@sanity/base/client'

export default class SingleImage extends React.Component {
    static propTypes = {
        value: PropTypes.object
    }
    render() {
        const { value } = this.props
        const imageBuilder = imageUrlBuilder(sanityClient)
        console.dir(value)
        const bgColor = value.backgroundColor ? value.backgroundColor.hex : '#f4f4f4'
        let align = ''
        if (value.alignment === 'left') {
            align = 'flex-start'
        } else if (value.alignment === 'right') {
            align = 'flex-end'
        } else {
            align = 'center'
        }
        if (value.fullwidth) {
            align = 'flex-start'
        }
        return (
            <div style={{ display: 'inline-flex', minHeight: '100px', justifyContent: align, width: '100%', padding: '40px', background: bgColor, border: '0', borderRadius: '0px' }}>
                {value.image ? <img src={imageBuilder
                    .image(value.image)
                    .height(200)
                    .quality(100)
                    .url()} /> : 'No image selected'}
                {/* <div>{value.caption}</div> */}
            </div>
        )
    }
}