import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {composite as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit,
    },
    data() {
        return {
            // 搜索条件
            query: {
                condition: {
                    name: ''
                },
                name: '',
                page: 1,
                pageSize: 15
            },
            resetForm: {
                condition: {
                    name: ''
                },
                name: '',
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
            customPageList: []
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '页面名称',
                        model: 'condition.name'
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
        this.getCustomPageList()
    },
    methods: {
        // 获取自定义页面列表
        getCustomPageList() {
            ajax.getCustomPageList(this.query).then((result) => {
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
            this.getCustomPageList()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
            console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getCustomPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getCustomPageList()
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑'
            ajax.getDetail(item.definePageID).then((result) => {
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
            this.$confirm('您确定删除该页面, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.deleteCustomPageList(item.definePageID).then(() => {
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
        // 刷新页面
        refresh() {
            this.query.page = 1
            this.getCustomPageList()
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
    }
}