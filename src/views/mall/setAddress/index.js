import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
export default {
    components: {
        PgTable,
        PgEdit,
    },
    data() {
        return {
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 40, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            isShowGoods: false, // 是否显示商品列表弹出框
            // 操作区按钮
            operations: [
                {
                    name: '新增地址',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '批量删除',
                    action: 'del',
                    isConfirm: true
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
            this.editTitle = '新增地址'
            this.editForm = {}
        },
        // 删除
        del() {
            console.log('删除')
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        // 新增选择商品
        addGoods() {
            this.isShowGoods = true
        },
        // 选择的商品
        changeGoods(list) {
            console.log(list)
        },
        // 关闭商品列表弹出框
        closeGoods() {
            this.isShowGoods = false
        }
    }
}