// ICONS
import { MdVideocam } from "react-icons/md"
import VideoPreview from '../components/VideoPreview'

export default {
    name: 'videoBlock',
    type: 'object',
    title: 'Video',
    icon: MdVideocam,
    fields: [
        {
            name: 'videoFile',
            type: 'file',
            title: 'video file',
            description: 'File format: mp4',
        },
        {
            title: 'Autoplay',
            name: 'autoPlay',
            type: 'boolean',
        },
        {
            title: 'Caption',
            name: 'caption',
            type: 'simpleEditor',
        },
    ],
    preview: {
        select: {
            video: 'videoFile',
            caption: 'caption',
            attribution: 'attribution'
        },
        component: VideoPreview
    }
}