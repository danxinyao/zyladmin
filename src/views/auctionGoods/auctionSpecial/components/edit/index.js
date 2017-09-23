import { cloneDeep } from 'lodash'
import {auction as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object,
    },
    data() {
        return {
            form: {},
            initForm: {// 初始表单
                auctionID: '',
                name: '',
                description: '',
                auctionType: 0,
                imgUrl: ''
            },
            rules: {// 输入验证
                name: [
                    { required: true, message: '请输入专场名称', trigger: 'blur'}
                ],
                description: [
                    { required: true, message: '请输入专场描述', trigger: 'blur'}
                ]
            }
        }
    },
    watch: {
        //监听 editForm 对象 (editForm)变化后的值
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    mounted() {
        //判断是否为新增商户，isEdit=false则是新增商户，初始化表单
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
                    ajax.saveAuction(this.form).then(() =>{
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
        // 刷新页面
        refresh() {
            this.$emit('refresh')
        },
        //选择图片后返回的文件路径
        success(result){
            this.form.imgUrl=result
        }
    }
}