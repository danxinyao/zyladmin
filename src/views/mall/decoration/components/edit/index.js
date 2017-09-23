import { cloneDeep } from 'lodash'
import {decoration as ajax} from 'services'

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
                goodsColumnId: '',
                name: '',
                orderNo: 0,
                showCount: 10,
                isName:  true,
                isPrice: true,
                isNote: true
            },
            sorts: [
                {
                    label: '创建时间越晚越靠前',
                    value: 1
                },
                {
                    label: '创建时间越早越靠前',
                    value: 2
                },
                {
                    label: '最热的排在最前面',
                    value: 3
                },
                {
                    label: '销量最高的排在最前面',
                    value: 4
                },
                {
                    label: '销量最低的排在最前面',
                    value: 5
                }
            ],
            nums: [
                {
                    label: '5',
                    value: 5
                },
                {
                    label: '10',
                    value: 10
                },
                {
                    label: '15',
                    value: 15
                },
                {
                    label: '20',
                    value: 20
                }
            ],
            // 输入验证
            rules: {
                title: [
                    { required: true, message: '请输入栏目标题', trigger: 'blur' },
                ],
                sortType: [
                    { required: true, message: '请输入商品排序类型', trigger: 'change' },
                ],
                num: [
                    { required: true, message: '请输入显示数量', trigger: 'change' }
                ]
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
                    // 验证通过  
                    this.form.isName = Number(this.form.isName)
                    this.form.isPrice = Number(this.form.isPrice)
                    this.form.isNote = Number(this.form.isNote) 
                    //console.log(this.form)        
                    ajax.saveColumn(this.form).then((result) => {
                        //console.log(this.form)
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.close()
                    })
                }
            })
        },
    }
}