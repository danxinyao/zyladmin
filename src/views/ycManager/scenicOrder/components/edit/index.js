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
                totalQty: 0,
                shopID: "",
                linkName:'',
                totalAmount: 0,
                mobile: '',
                planTime:'',
                payMode:0,
            },
            ticketTypeList:[],
            // 输入验证
            rules: {
                scenicTicketTypeID: [
                    { required: true, message: '请选择门票类型名称'},
                ],
                shopID:[{ required: true, message: '请选择关联景点'},],
                planTime:[{ required: true, message: '请选择游玩时间'},],
                totalAmount:[{ required: true, message: '请输入付款金额'},],
                totalQty:[{ required: true, message: '请输入门票数量'},],
            },
        }
    },
    watch: {
        editForm(editForm) {
            this.setForm(this.editForm)
        }
    },
    created() {
        this.initForm.planTime = new Date()
        this.resetForm()
    },
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.ticketTypeList = []
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
        //景点切换选择
        scenicChange(val){
            console.log(val)
            this.getetTicketTypeDropDownList(val)
        },
        //获取门票类型下拉列表
        getetTicketTypeDropDownList(id) {
            ajax.getetTicketTypeDropDownList(id).then(result=>{
                this.ticketTypeList = result.typeDropDownItems 
            })   
        },
        // 保存
        save(){
            // 判断编辑器内容是否修改
            this.$refs.form.validate((valid) => {
                if (valid) {
                    ajax.saveScenicOrder(this.form).then(result=>{
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