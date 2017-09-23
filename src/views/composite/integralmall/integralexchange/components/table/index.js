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
        // 结束
        ending(item) {
            this.$emit('ending', item)
        },
        // 复制
        copy(item) {
            this.$emit('copy', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}