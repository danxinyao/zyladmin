export default {
	props: {
        isShowUp: Boolean,
        isShowDown: Boolean,
        isShowName: Number,
        isShowPrice: Number,
        isShowNote: Number,
        title: String,
		list: Array
	},
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        edit() {
            this.$emit('edit')
        },
        dele() {
            this.$emit('dele')
        },
        moveUp() {
            this.$emit('moveUp')
        },
        moveDown() {
            this.$emit('moveDown')
        },
        editGoods() {
            this.$emit('editGoods')
        }
    }
}