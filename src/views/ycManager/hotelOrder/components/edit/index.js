import { cloneDeep } from 'lodash'
import {ycManager as ajax} from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object,
        hotelList:Array,
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                linkMan: "",
                linkTel: "",
                shopID: "",
                roomTypeID: "",
                qty: 0,
                planOpenTime: '',
                planEndTime: '',
                price: 0,
                note:'',
            },
            roomList:[],
            basePrice:0,
            // 输入验证
            rules: {
                
                linkMan: [{ required: true, message: '请输入联系人名字'},],
                linkTel: [{ required: true, message: '请输入联系人电话'},],
                shopID: [{ required: true, message: '请选择酒店'},],
                roomTypeID: [{ required: true, message: '请选择房间类型'},],
                qty: [{ required: true, message: '请填写需要房间的数量'},],
                planOpenTime: [{ required: true, message: '请选择入住时间'},],
                planEndTime: [{ required: true, message: '请选择离店时间'},],
                price: [{ required: true, message: '请输入实付款'},],
                
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
            this.roomList = []
            this.basePrice = 0
        },
        setForm(editForm) {
            if (this.isEdit) {
                
                this.$nextTick(() => {
                    this.form = cloneDeep(this.editForm)
                })
            }
            else {
                this.resetForm()
            }

            
        },
        // 返回
        close() {
            this.$emit('close','1')
        },
        //保存成功关闭
        saveSuccess(){
            this.$emit('saveSuccess')
        },
       
        //获取房型下拉列表
        getRoomTypeDropList(id) {
            ajax.getRoomTypeDropList(id).then(result=>{
                this.roomList = result
            })
        },
        //获取房型详情
        getRoomTypeDetail(id){
            ajax.getRoomTypeDetail(id).then(result=>{
                this.basePrice = result.basePrice 
            })
        },
        //酒店更改
        changeHotel(val) {
            this.getRoomTypeDropList(val)
        },
        //房型更改
        changeRoomType(val) {
            this.getRoomTypeDetail(val)
        },
        // 保存
        save() {
            // 判断编辑器内容是否修改
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveHotelOrder(this.form).then(result=>{
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