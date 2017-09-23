import { auctionGoodsStatus } from 'util/type.js'
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
        selectChange(val) {
            this.$emit('select-change', val)
        },
        status(index) {
            let text = ''
            for (let i = 0; i < auctionGoodsStatus.length; i++) {
                if (auctionGoodsStatus[i].value === index) {
                    text = auctionGoodsStatus[i].text
                    break
                }
            }

            return text
        }
    }
}