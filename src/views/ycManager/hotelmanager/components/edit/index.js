import { cloneDeep } from 'lodash'
import {hotelManager as ajax} from 'services'

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
                id: "",
                name: "",
                linkTele: "",
                state: "",
                city: "",
                district: "",
                address: "",
                longitud: "",
                latitude: "",
                bookTime: "",
                keepTime: "",
                overTime: "",
                refundTime: "",
                note: "",
                mainImg: "",
                imgUrls: [
                ], 
            },                      
            // 输入验证
            rules: {
                'name': [{ required: true, message: '请输入景点名称'},],
                'linkTele':[{ required: true, message: '请输入联系电话'},],
                'address':[{ required: true, message: '请输入详细地址'},],
                'keepTime':[{ required: true, message: '请选择保留时间'},],
                'overTime':[{ required: true, message: '请选择退房时间'},],
                'refundTime':[{ required: true, message: '请选择退款时间'},],

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

            // this.$nextTick(() => {
            //     if (this.$refs.contentEditor) {
            //         this.$refs.contentEditor.updateEditor()
            //     }
            // })
        },
        // 返回
        close() {
            this.resetForm()
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
                    if (this.form.imgUrls.length>30) {
                        this.$message({
                            message: '景点副图最多允许上传30张',
                            type: 'warning'
                        })
                        return 
                    }
                    ajax.saveHotel(this.form).then(result=>{
                        this.$message.success('保存成功')
                        this.resetForm()
                        this.saveSuccess()

                    }).catch((error) => {
                        this.$message.error(error)
                    })
                    
                }

            })
        },
        // 景点副图上传
        uploadMultipleSuccess(imageList) {
            this.form.imgUrls= imageList
        },
        // 主图上传
        uploadSuccess(image) {
            this.form.mainImg = image
        },
    }
}