import { mapGetters, mapActions } from 'vuex'

export default {
    props: {
        list: Array
    },
    computed: {
        ...mapGetters([
            'localLoading'
        ])
    },
    methods: {
        edit(item) {
            this.$emit('edit', item)
        },
        del(item) {
            this.$emit('del', item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}