import { cloneDeep } from 'lodash'
export default {
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            checkList: [],
            form: {
                teamname: '',
                name: '',
                content: '',
                state: '',
                city: '',
                district: '',                
                condition: {
                    sheet: '',
                    mobile: '',
                    name: '',
                    platformType: 1,
                    goodName: '',
                    orderTime: {
                        begin: '',
                        end: ''
                    },
                    linkMan: '',
                    state: '',
                    city: '',
                    district: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            initForm: {
                teamname: '',
                name: '',
                content: '',
                state: '',
                city: '',
                district: '',              
                condition: {
                    sheet: '',
                    mobile: '',
                    name: '',
                    platformType: 1,
                    goodName: '',
                    orderTime: {
                        begin: '',
                        end: ''
                    },
                    linkMan: '',
                    state: '',
                    city: '',
                    district: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },                        
            // 输入验证
            rules: {
                teamname: [
                    { required: true, message: '请输入所属团队', trigger: 'blur' },
                ],
                name: [
                    { required: true, message: '请输入分销客户名称', trigger: 'blur' },
                ],
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
    methods: {
        resetForm() {
            this.form = cloneDeep(this.initForm)
            this.content = ''
        },
        setForm(editForm) {
            if (this.isEdit) {
                this.form = cloneDeep(this.editForm)
                this.content = this.form.content // 初始化编辑器内容
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
            console.log(this.form)
            console.log(this.checkList)
        },
    }
}