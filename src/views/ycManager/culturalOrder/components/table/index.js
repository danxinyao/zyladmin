import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        changeCultureCode(item) {
            this.$emit('changeCultureCode', item)
        },
        cancelCultureOrder(item) {
            this.$emit('cancelCultureOrder', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        },
    }
}