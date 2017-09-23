import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        // 下架
        soldOut(item) {
            this.$emit('edit', item)
        },
    }
}