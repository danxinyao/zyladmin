import { cloneDeep } from 'lodash'
import {goods as ajax} from 'services'
import { mapGetters } from 'vuex'

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
                tagID: '',
                name: '',
                iconUrl: ''
            },
            rules: {// 输入验证
                name: [
                    { required: true, message: '请输入标签名'},
                    { max: 20, message: '长度在20个字符以内'}
                ]
            }
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    computed: {
        ...mapGetters([
            'localLoading'
        ]),
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
                    // if(!this.form.iconUrl){
                    //     this.util.msg.error('请选择图片icon')
                    //     return
                    // }
                    ajax.saveGoodsTag(this.form).then(() =>{
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
            this.form.iconUrl=result
        }
    }
}