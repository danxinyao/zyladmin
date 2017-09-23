import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        // 订单详情
        edit(item) {
            this.$emit('edit', item)
        },
        // 同意退货
        returnGoods(item) {
            this.$emit('returnGoods', item)
        },
        // 同意退款
        agreeRefund(item) {
            this.$emit('agreeRefund', item)
        },
        // 拒绝
        refuse(item) {
            this.$emit('refuse', item)
        },
        noting(item) {
            this.$emit('noting', item)
        },
        // 选择
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}