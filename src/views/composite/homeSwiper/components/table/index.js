
export default {
    props: {
        list: Array
    },
    data() {
        return {
            len: 0,
        }
    },
    watch: {
        // 监听列表数组的变化
        list: {
            handler: function(newVal, oldVal) {
                this.len = this.list.length
            },
            deep: true
        }
    },
    methods: {
        edit(item) {
            this.$emit('edit', item)
        },
        del(item) {
            this.$emit('del', item)
        },
        // 上移/下移
        sortPos(index, type) {
            this.$emit('sortPos', index, type, this.list)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}