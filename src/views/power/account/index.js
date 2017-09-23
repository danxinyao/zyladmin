import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {power as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit,
    },
    data() {
        return {
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 0, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            type: 0, // 编辑框的类型，0-新增，1-编辑，2-重置密码
            showEdit: false, // 是否显示新增弹出窗口
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
            ],
            accountList: []
        }
    },
    mounted() {
        this.getAccountPageList()
    },
    methods: {
        // 获取账号列表
        getAccountPageList() {
            ajax.getAccountPageList(this.page, this.pageSize).then((result) => {
                this.accountList = result.data
                this.total = result.totalCount
            })
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
            console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
            this.getAccountPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getAccountPageList()
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.type = 1
            this.editTitle = '编辑'
            ajax.getAccountDetail(item.loginID).then((result) => {
                this.editForm = result
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 新增
        add() {
            this.showEdit = true
            this.type = 0
            this.editTitle = '新增'
            this.editForm = {}
        },
        // 删除
        del(item) {
            this.$confirm('您确定删除该账号, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.deleteAccount(item.loginID).then(() => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.getAccountPageList()
                }).catch((error) => {
                    this.$message.error(error)
                })
            })  
        },
        // 启用
        enable(item) {
            this.$confirm('您确定启用该账号, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.enabledAccount(item.loginID).then(() => {
                    this.$message({
                        message: '启用成功',
                        type: 'success'
                    })
                    this.getAccountPageList()
                }).catch((error) => {
                    this.$message.error(error)
                })
            })  
        },
        // 禁用
        disable(item) {
            this.$confirm('您确定禁用该账号, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.disabledAccount(item.loginID).then(() => {
                    this.$message({
                        message: '禁用成功',
                        type: 'success'
                    })
                    this.getAccountPageList()
                }).catch((error) => {
                    this.$message.error(error)
                })
            })  
        },
        // 重置密码
        resetPass(item) {
            this.showEdit = true
            this.type = 2
            this.editTitle = '重置密码'
            this.editForm = item
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        // 刷新页面
        refresh() {
            this.page = 1
            this.getAccountPageList()
        },
    }
}