import { MdAudiotrack } from "react-icons/md"
import AudioPreview from '../components/AudioPreview'

export default {
    name: 'audioBlock',
    type: 'object',
    title: 'Audio',
    icon: MdAudiotrack,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'audioFile',
            type: 'file',
            title: 'Audio file',
            description: 'File format: mp3'
        }
    ],
    preview: {
        select: {
            audio: 'audioFile'
        },
        component: AudioPreview
    }
}