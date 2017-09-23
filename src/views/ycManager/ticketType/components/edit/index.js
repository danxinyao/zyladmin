import { cloneDeep } from 'lodash'
import {ycManager as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object,
        ableScenic:Array,
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                scenicTicketTypeID: "",
                name: "",
                shopID: "",
                effectiveDay: 0,
                price: 0,
                description: '',
                
            },
            
            // 输入验证
            rules: {
                name: [
                    { required: true, message: '请输入门票类型名称'},
                ],
                shopID:[{ required: true, message: '请选择关联景点'},],
                effectiveDay:[{ required: true, message: '请输入有效日志'},],
                price:[{ required: true, message: '请输入价格'},],

            },
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    created() {
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
        save() {
            // 判断编辑器内容是否修改
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveTicketType(this.form).then(result=>{
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