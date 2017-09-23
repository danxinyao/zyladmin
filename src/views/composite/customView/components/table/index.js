import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        edit(item) {
            this.$emit('edit', item)
        },
        del(item) {
            this.$emit('del', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}