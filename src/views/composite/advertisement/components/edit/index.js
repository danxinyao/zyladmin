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
            form: {},
            // 初始表单
            initForm: {
                teamname: '',
                name: '',
                content: '',
                active: ''
            },
            actives: [
                {
                    label: 'aaa',
                    value: '1'
                },
                {
                    label: 'bbb',
                    value: '2'
                }
            ],
            uploadFiles: '',
            content: '', // 编辑器初始显示值
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
        // 保存
        save() {
            
        },
        // 新增商品
        add() {
            this.$emit('addGoods')
        },
    }
}