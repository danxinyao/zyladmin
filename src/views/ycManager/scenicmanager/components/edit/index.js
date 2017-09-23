import { cloneDeep } from 'lodash'
import {ycManager as ajax} from 'services'

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
                shopID: "",
                name: "",
                imgUrl: "",
                imgUrls: [
                ],
                basShopDetail:{
                    linkTele: "",
                    state: "",
                    city: "",
                    district: "",
                    address: "",
                    note: "",
                },
                basShopExt:{
                    longitud: 0,
                    latitude: 0,
                    bookTime: 0,
                    beginTime: "",
                    endTime: "",
                }
                
            },
            
            // 输入验证
            rules: {
                'name': [
                    { required: true, message: '请输入景点名称'},
                ],
                'basShopDetail.linkTele':[{ required: true, message: '请输入联系电话'},],
                'basShopDetail.address':[{ required: true, message: '请输入详细地址'},],
                'basShopExt.beginTime':[{ required: true, message: '请选择开门时间'},],
                'basShopExt.endTime':[{ required: true, message: '请选择打烊时间'},],

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
                    if (this.form.imgUrls.length>30) {
                        this.$message({
                            message: '景点副图最多允许上传30张',
                            type: 'warning'
                        })
                        return 
                    }
                    ajax.saveScenic(this.form).then(result=>{
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
            this.form.imgUrls = imageList
        },
        // 主图上传
        uploadSuccess(image) {
            this.form.imgUrl = image
        },
    }
}