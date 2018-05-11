export default {
    functional: true,
    props: {
        custom: {
            type: Boolean,
            default: true
        }
    },
    render(h, {
        parent,
        props
    }) {
        return h(compName, {
            class: props.custom ? 'custom' : ''
        })
    }
}