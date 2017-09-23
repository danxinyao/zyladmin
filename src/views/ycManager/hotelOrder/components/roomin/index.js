import { cloneDeep } from 'lodash'
import {ycManager as ajax} from 'services'

export default {
    props: {
        show: Boolean,
        isEdit: Boolean,
        hotelOrderId: String,
        freeRoomList:Array,
    },
    data() {
        return {
            form: {},
            // 初始表单
            initForm: {
                hotelOrderID: "",
                hotemRoomID: "",
                linkName: "",
                certType:1,
                certNo:"",
                linkTel:"",
                personInfo:[],
            },
            // 输入验证
            rules: {
                linkName: [
                    { required: true, message: '请填写入住人'},
                ],
                certNo:[{ required: true, message: '请填写入住人证件号码'},],
                hotemRoomID:[{ required: true, message: '请选择入住房间型号'},],
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
            this.$emit('close','2')
        },
        //保存成功关闭
        saveSuccess() {
            this.$emit('saveSuccess')
        },
   
        // 保存
        save() {
            // 判断编辑器内容是否修改
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveCheckInInfo(this.form).then(result=>{
                        this.$message.success('保存成功')
                        this.resetForm()
                        this.saveSuccess()

                    }).catch((error) => {
                        this.$message.error(error)
                    })
                    
                }

            })
        },
        //增加入住人
        addPerson() {
            let person = {
                linkName: "",
                certType:1,
                certNo:""
            }
            this.form.personInfo.push(person)
        },
        //删除入住人
        remove(index) {
            this.form.personInfo.splice(index,1)
        }
    }
}