import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        edit(item) {
            this.$emit('edit', item)
        },
        detail(item) {
            this.$emit('detail', item)
        },
        deleteOne(item) {
            this.$emit('deleteOne', item)
        },
    }
}