import { cloneDeep } from 'lodash'
import {composite as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                definePageID: '',
                name: '',
                content: '',
            },
            initContent: '', // 编辑器初始显示值
            // 输入验证
            rules: {
                name: [
                    { required: true, message: '请输入角色名', trigger: 'blur' },
                ],
            },
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    mounted() {
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.initContent = ''
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.initContent = this.form.content // 初始化编辑器内容
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
        // 保存
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveCustomPageList(this.form).then(() => {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.refresh()
                        this.close()
                    }).catch((error) => {
                        this.$message.error(error)
                    })
                }
            })
        },
        // 编辑器中的内容
        getContent(content) {
            console.log(content)
            this.form.content = content
        },
        //刷新页面
        refresh() {
            this.$emit('refresh')
        }
    }
}