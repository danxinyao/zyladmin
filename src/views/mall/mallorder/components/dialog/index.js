import { cloneDeep } from 'lodash'
import { order as ajax } from 'services'
export default {
    props: {
        showDialog: Boolean,
        dialogType: Number,
        size: String,
        order: Object
    },
    data() {
        return {
            noteForm: {
                id: '',
                note: ''
            },
            form: {
                id: "",
                postFee: 0,
                amount: 0
            },
            height: 4.5
        }
    },
    watch: {
        'order.id'() {
            if (this.dialogType === 0) {
                this.noteForm.id = this.order.id
                this.noteForm.note = this.order.note
            }
            else {
                this.form.id = this.order.id
                this.form.postFee = this.order.postFee
                this.form.amount = this.order.amount
            }
        }
    },
    methods: {
        // 关闭
        close() {
            this.$emit('closeDialog')
        },
        // 保存
        save() {
            if (this.dialogType === 0) {
                ajax.modifyRemark(this.noteForm).then(() => {
                    this.$message({
                        message: '备注成功',
                        type: 'success'
                    })
                    this.refresh()
                    this.close()
                })
            }
            else {
                ajax.modifyAmount(this.form).then(() => {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    })
                    this.refresh()
                    this.close()
                }).catch((error) => {
                    this.$message.error(error)
                })
            }
        },
        // 刷新页面
        refresh() {
            this.$emit('refresh')
        }
    }
}