import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        changeOrder(item) {
            this.$emit('changeOrder', item)
        },
        cancelScenicOrder(item) {
            this.$emit('cancelScenicOrder', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        },
    }
}