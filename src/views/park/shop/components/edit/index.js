import { cloneDeep } from 'lodash'
import {shop as ajax} from 'services'
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
            // 初始表单
            initForm: {
                shopID: null,
                code: '',
                shopName: '',
                mobile: '',
                name: '',
                certNo: '',
                address: '',
                runBeginDate: '',
                runEndDate: '',
                leaseBeginTime: '',
                leaseEndTime: '',
                area: '',
                amount: ''
            },
            // 输入验证
            rules: {
                code: [
                    { required: true, message: '请输入商户编号', trigger: 'blur' },
                ],
                shopName: [
                    { required: true, message: '请输入商铺名称', trigger: 'blur' },
                ],
                mobile: [
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入店主姓名', trigger: 'blur' },
                ],
                certNo: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                ],
                address: [
                    { required: true, message: '请输入商铺地址', trigger: 'blur' },
                ],
                runBeginDate: [
                    { required: true, message: '请输入开始营业时间', trigger: 'blur' },
                ],
                runEndDate: [
                    { required: true, message: '请选择结束营业时间', trigger: 'blur' }
                ],
                leaseBeginTime: [
                    { required: true, message: '请选择租赁开始时间', trigger: 'blur' }
                ],
                leaseEndTime: [
                    { required: true, message: '请选择租赁结束时间', trigger: 'blur' }
                ],
                area: [
                    { required: true, message: '请输入面积' },
                    { type: 'number', message: '面积只能为数值'}
                ],
                amount: [
                    { required: true, message: '请输入租赁总价' },
                    { type: 'number', message: '价格只能为数值' }
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
        ])
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
                    ajax.saveShop(this.form).then(() =>{
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
        // 营业开始时间
        runBeginDateChage(val) {
            console.log(val)
            this.form.runBeginDate=val
        },
        // 营业结束时间
        runEndDateChage(val) {
            this.form.runEndDate=val
        },
        // 租赁开始时间
        leaseBeginTimeChage(val) {
            this.form.leaseBeginTime=val
        },
        // 租赁结束时间
        leaseEndTimeChage(val) {
            this.form.leaseEndTime=val
        }
    }
}