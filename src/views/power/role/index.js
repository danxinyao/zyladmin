import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { power as ajax} from 'services'

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
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            isShowGoods: false, // 是否显示商品列表弹出框
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
            ],
            roleList: [],//角色列表
        }
    },
    mounted() {
        // 获取角色列表
        this.getPageList()
    },
    methods: {
        // 获取角色列表
        getPageList() {
            ajax.getPageList(this.page, this.pageSize).then((result) => {
                this.roleList = result.data
                this.total = result.totalCount
            })
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
            this.getPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getPageList()
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑'
            ajax.getDetail(item.roleID).then((result) => {
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
            this.$confirm('您确定删除角色, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.deleteRole(item.roleID).then(() => {
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
        // 启用
        enable() {
            console.log('启用')
        },
        // 禁用
        disable() {
            console.log('禁用')
        },
        refresh() {
            this.page = 1
            this.getPageList()
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
    }
}