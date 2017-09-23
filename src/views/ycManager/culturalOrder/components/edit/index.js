import { cloneDeep } from 'lodash'
import {ycManager as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object,
        roomList:Array,
        classList:Array,
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                courseID: "",
                totalQty: 0,
                shopID: "",
                totalAmount: 0,
                beginTime:'',
                payMode:0,
            },
            // 输入验证
            rules: {
                courseID: [
                    { required: true, message: '请选择课程'},
                ],
                shopID:[{ required: true, message: '请选择课室'},],
                beginTime:[{ required: true, message: '请选择开始时间'},],
                totalAmount:[{ required: true, message: '请输入付款金额'},],
                totalQty:[{ required: true, message: '请输入课程数量'},],
            },
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    created() {
        this.initForm.beginTime = new Date()
        this.resetForm()
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
            }
            else {
                this.resetForm()
            }

            this.$nextTick(() => {
                if (this.$refs.contentEditor) {
                    this.$refs.contentEditor.updateEditor()
                }
            })
        },
        // 返回
        close() {
            this.$emit('close')
        },
        //保存成功关闭
        saveSuccess(){
            this.$emit('saveSuccess')
        },
   
        // 保存
        save(){
            // 判断编辑器内容是否修改
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveCultureOrder(this.form).then(result=>{
                        this.$message.success('保存成功')
                        this.resetForm()
                        this.saveSuccess()

                    }).catch((error) => {
                        this.$message.error(error)
                    })
                    
                }

            })
        },
    }
}