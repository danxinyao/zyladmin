import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        del(item) {
            this.$emit('del', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}