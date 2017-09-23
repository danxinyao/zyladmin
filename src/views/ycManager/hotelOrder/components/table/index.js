import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        edit(item) {
            this.$emit('edit', item)
        },
        saveIn(item) {
            this.$emit('saveIn', item)
        },
        cancel(item) {
            this.$emit('cancel', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}