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
            note: '',
            reason: '',
            list: [],
            form: {
                id: '',
                linkMan: '',
                linkTel: '',
                state: '',
                city: '',
                district: '',
                address: ''
            },
            rules: {
                linkMan: [
                    { required: true, message: '请输入收货人', trigger: 'blur' },
                ],
                linkTel: [
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                ],
                address: [
                    { required: true, message: '请输入详细地址', trigger: 'blur' },
                ],
                district: [
                    { required: true, message: '请选择城市', trigger: 'blur' },
                ],
            },
        }
    },
    methods: {
        // 关闭
        close() {
            this.$emit('closeDialog')
        },
        // 保存
        save() {
            // 退货
            if (this.dialogType === 2) {
                this.form.id  = this.order.refundOrderID
                ajax.agreeRefundGoods(this.form).then(() => {
                    this.$message({
                        message: '备注成功',
                        type: 'success'
                    })
                    this.refresh()
                    this.close()
                }).catch((error) => {
                    this.$message.error(error)
                })
            }
            // 备注
            if (this.dialogType === 0) {
                this.noteForm.id = this.order.refundOrderID
                ajax.modifyRemark(this.noteForm).then(() => {
                    this.$message({
                        message: '备注成功',
                        type: 'success'
                    })
                    this.refresh()
                    this.close()
                }).catch((error) => {
                    this.$message.error(error)
                })
            }
            if (this.dialogType === 1) {
                ajax.reject({
                    id: this.order.refundOrderID,
                    sellMemo: this.reason
                })
            }
            
            else {
                this.form.id = this.order.id
                this.form.postFee = this.order.postFee
                this.form.amount = this.order.amount
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
        }
    }
}