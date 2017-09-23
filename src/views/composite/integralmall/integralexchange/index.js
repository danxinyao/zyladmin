import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import PgGoodlist from './components/addGoods/index.vue'
import {composite as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit,
        PgGoodlist
    },
    data() {
        return {
            // 搜索条件
            query: {
                condition: {
                    name: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            resetForm: {
                condition: {
                    name: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            total: 0,//总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            isShowMoreQuery: false,
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
            ],
            customPageList: [],
            showDialog: false,
            integralExchangeID: ''
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '活动名称',
                        model: 'condition.name'
                    },
                    {
                        type: 'select',
                        label: '活动状态',
                        text: 'title',
                        value: 'value',
                        model: 'condition.flag',
                        options: [
                            {
                                title: '全部',
                                value: -1
                            },
                            {
                                title: '进行中',
                                value: 0
                            },
                            {
                                title: '未开始',
                                value: 1
                            },
                            {
                                title: '已结束',
                                value: 2
                            }
                        ]
                    }
                ]
            }
        },
        // 搜索区展开
        moreQuery: {
            get() {
                return []
            }
        }
    },
    mounted() {
        this.getActivePageList()
    },
    methods: {
        // 获取积分活动分页列表
        getActivePageList() {
            ajax.getActivePageList(this.query).then((result) => {
                this.customPageList = result.data
                this.total = result.totalCount
            })
        },
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.query.page = 1
            this.getActivePageList()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getActivePageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getActivePageList()
        },
        addGoods() {
            this.showDialog = true
        },
        //关闭添加商品的对话框
        closeDialog() {
            this.showDialog = false
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑'
            ajax.getActiveDetail(item.integralExchangeID).then((result) => {
                this.editForm = result
            })
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增'
            this.editForm = {}
        },
        // 删除
        del(item) {
            this.$confirm('您确定删除该积分活动?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.deleteActive(item.integralExchangeID).then(() => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    // 刷新页面
                    this.refresh()
                }).catch((error) => {
                    this.$message.error(error)
                })
            })
        },
        // 结束积分活动
        ending(item) {
            this.$confirm('您确定结束改积分活动?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.finishActive(item.integralExchangeID).then(() => {
                    this.$message({
                        message: '操作成功',
                        type: 'success'
                    })
                    // 刷新页面
                    this.refresh()
                }).catch((error) => {
                    this.$message.error(error)
                })
            })
        },
        // 复制
        copy(item) {
            ajax.copyActive(item.integralExchangeID).then(() => {
                this.$message({
                    message: '复制成功',
                    type: 'success'
                })
                // 刷新页面
                this.refresh()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 刷新页面
        refresh() {
            this.query.page = 1
            this.getActivePageList()
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
    }
}