export default {
    props: {
        list: Array
    },
    methods: {
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}