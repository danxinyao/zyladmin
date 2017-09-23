import {goods as ajax} from 'services'
export default {
    props: {
        list: Array
    },
    methods: {
        // 编辑
        edit(item) {
            this.$emit('edit', item)
        },
        // 禁用
        disable(item) {
            this.$emit('disable', item)
        },
        // 启用
        enable(item) {
            this.$emit('enable', item)
        },
        // 删除
        del(item) {
            this.$emit('del', item)
        },
        // 重置密码
        resetPass(item) {
            this.$emit('resetPass', item)
        },
        // 选择
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}