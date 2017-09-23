import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'

import {user as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit
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
                }
            ],
            customerList: []
        }
    },
    computed: {

    },
    mounted() {
        this.getLevelPageList()
    },
    methods: {
        // 全选
        selectChange(selections) {
            this.selected = selections
            console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑'
            this.editForm = item
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增等级'
            this.editForm = {}
        },
        // 确定删除
        delUser(item) {
            console.log(item)
            this.$confirm('删除后数据不可恢复，您确认要删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    //console.log('删除')
                    this.deleteLevel(item.memberGradeID)
                }).catch(() => {

                })
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
            this.getLevelPageList()
        },
        //获取等级列表
        getLevelPageList() {
            ajax.getLevelPageList(this.page,this.pageSize).then(result=>{
                console.info(result)
                this.total = result.totalCount
                this.page = result.page
                this.customerList = result.data
            })
        },
        deleteLevel(id) {
            ajax.deleteLevel(id).then(result=>{
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.getLevelPageList()
            })
        }
    }
}