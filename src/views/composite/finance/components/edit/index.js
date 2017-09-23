import { cloneDeep } from 'lodash'
import PgTable from './table/index.vue'
export default {
    components: {
        PgTable,
    },    
    props: {
        title: String,
        show: Boolean,
        isEdit: Boolean,
        editForm: Object
    },
    data() {
        return {
            // 搜索条件
            query: {
                title: '',
                uname: '',
                checker: '',
                tuijianren: '',
                status: '',
                status1: 1,
                status2: 1,
                time: ''
            },
            isShowMoreQuery: false, // 搜索区是否显示更多
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
            total: 40, // 总条数
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            // 操作区按钮
            operations: [
                {
                    name: '明细导出',
                    action: 'add',
                    type: 'primary'
                },
            ],
            customerList: [
                {
                    id: 1,
                    teamname: '天之蓝',
                    name: '66666',
                    content: '内容一'
                },
                {
                    id: 2,
                    teamname: '地之蓝',
                    name: '66666',
                    content: '内容二'
                },
                {
                    id: 3,
                    teamname: '五粮液',
                    name: '66666',
                    content: '内容三'
                }
            ]                        
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '全部供应商',
                        text: 'text',
                        value: 'value',
                        model: 'status1',
                        options: [
                            {
                                value: 1,
                                text: '商城营收'
                            },
                            {
                                value: 2,
                                text: '预订营收'
                            },
                            {
                                value: 3,
                                text: '拍卖营收'
                            },
                            {
                                value: 4,
                                text: '线下营收'
                            },                            
                        ]
                    },                    
                    {
                        type: 'select',
                        label: '全部数据',
                        text: 'text',
                        value: 'value',
                        model: 'status2',
                        options: [
                            {
                                value: 1,
                                text: '全部商城'
                            },
                            {
                                value: 2,
                                text: '紫云来商城'
                            },
                            {
                                value: 3,
                                text: '茶都商城'
                            },
                            {
                                value: 4,
                                text: '懿城商城'
                            },                            
                        ]
                    }, 
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '供应商名称',
                        model: 'checker',
                    },
                ]
            }
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
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        }, 
        search() {}, 
        // 新增
        add() {
            console.log('明细导出')
        },        
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
            // 判断编辑器内容是否修改
            if (this.form.content == undefined) {
                this.form.content = this.content
            }
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log(this.form)
                    console.log('success')
                    // 验证通过
                }
            })
        },
        // 新增商品
        add() {
            this.$emit('addGoods')
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        }
    }
}