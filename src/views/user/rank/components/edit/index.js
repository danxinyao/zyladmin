import { cloneDeep } from 'lodash'
import {user as ajax} from 'services'

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
                rank: '',
                discount: 1,
                power: 1,
                upgradeAmount: 0,
                upgradeOrderCount: 0
            },
            content: '', // 编辑器初始显示值
            // 输入验证
            rules: {
                rank: [
                    { required: true, message: '请输入等级名称', trigger: 'blur' },
                ],
                discount: [
                    { required: true, message: '请输入享受折扣', trigger: 'blur' },
                ],
                power: [
                    { required: true, message: '请输入权重', trigger: 'blur' },
                ]
            },
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    mounted() {
        if (!this.isEdit) {
            this.resetForm()
        }
    },
    created() {
        this.setForm(this.editForm)
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
        },
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    // 验证通过
                    ajax.saveLevel(this.form).then(result=>{
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.close()
                    })
                }
            })
        },


    }
}