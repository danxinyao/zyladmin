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
        // 改价
        changePrice(item) {
            this.$emit('changePrice', item)
        },
        // 确认付款
        confirmPay(item) {
            this.$emit('confirmPay', item)
        },
        // 备注
        noting(item) {
            this.$emit('noting', item)
        },
        // 选择
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}