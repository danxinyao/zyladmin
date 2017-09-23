import {goods as ajax} from 'services'
import { mapGetters } from 'vuex'
export default {
    props: {
        list: Array
    },
    computed: {
        ...mapGetters([
            'localLoading'
        ])
    },
    filters: {
        subString(value) {
            return value.substr(0,10)
        }
    },
    methods: {
        edit(item) {
            this.$emit('edit', item)
        },
        del(item) {
            this.$emit('del',item)
        },
        selectChange(val) {
            this.$emit('select-change', val)
        }
    }
}