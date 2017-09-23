import { cloneDeep } from 'lodash'
import {hotelManager as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object,
        //dropdownList: Array,
    },
    data() {
        return {      
            form: {},
            // 初始表单
            initForm: {
                hotelRoomTypeID: "",//房型ID，新增不用传 ,
                shopID: "",//所属酒店ID ,
                name: "",//房型名称 ,
                basePrice: "",//房型价格 ,
                area: "",//房型面积
                dinnerType: "",//餐饮
                bed: "",//床铺大小 ,
                description: "",//房型描述
                mainImg: "",
                imgUrls: [
                ], 
            }, 
            dropdownList: [], //酒店下拉列表                   
            //餐饮下拉
            options: [
                {
                    value: 0,
                    text: '不含餐'
                },
                {
                    value: 1,
                    text: '含早'
                },
                {
                    value: 2,
                    text: '全包'
                },                            
            ],                                   
            // 输入验证
            rules: {
                'shopID': [{ required: true, message: '请选择所属酒店'},],
                'name': [{ required: true, message: '请输入房型名称'},],
                'basePrice':[{ required: true, message: '请输入房型价格'},],
                'area':[{ required: true, message: '请输入房型面积'},],
                'bed':[{ required: true, message: '请输入床铺大小'},],
                'dinnerType':[{ required: true, message: '请选择餐饮类型'},],
            },
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    mounted() {
        this.resetForm()
        this.getDropdownList()
    },
    methods: {
        //获取酒店下拉列表
        getDropdownList() {
            ajax.getDropdownHotelList().then((result) => {
                this.dropdownList = result
                this.dropdownList.forEach((item) => {
                    //value 转换成小写
                    item.value = item.value.toLowerCase()
                }) 
            })
        },        
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
            this.$emit('close')
            this.resetForm()
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
                    ajax.saveRoomType(this.form).then((result) => {
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