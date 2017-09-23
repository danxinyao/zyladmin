export default {
    name: 'PgInfoBox',
    props: {
        isCircle: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        title: String,
        msgNum: Number,
        msgList: Array
    },
    data() {
        return{
            msgFrom: {
                type: Number,
                default: 1
            }
        }
    },
    mounted() {
        this.msgFrom = this.msgList.length
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        }
    }
}