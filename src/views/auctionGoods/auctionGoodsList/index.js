import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { auction as ajax } from 'services'
import { auctionGoodsStatus } from 'util/type.js'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                condition: {
                    status: -1, // 开拍状态
                    name: '', // 拍品名称
                    customNo: '', // 条形码
                    deptID: '', // 分类ID
                    GoodsStatus: -1 // 拍品状态
                },
                page: 1,
                pageSize: 15
            },
            total: 1, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            // 操作区按钮
            operations: [
                {
                    name: '发布拍品',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '启用',
                    action: 'enable'
                },
                {
                    name: '禁用',
                    action: 'disable'
                }
            ],
            goodsList: []
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '拍品名称',
                        model: 'condition.name'
                    },
                    {
                        type: 'select',
                        label: '状态',
                        model: 'condition.GoodsStatus',
                        text: 'text',
                        value: 'value',
                        options: [
                            {
                                value: -1,
                                text: '全部'
                            },
                            {
                                value: 1,
                                text: '启用'
                            },
                            {
                                value: 0,
                                text: '禁用'
                            }
                        ]
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                ]
            }
        }
    },
    mounted() {
        this.search()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getGoodsPageList()
        },
        // 获取数据
        getGoodsPageList() {
            ajax.getGoodsPageList(this.query).then((result) => {
                this.goodsList = result.data
                this.total = result.total
            })
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getGoodsPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getGoodsPageList()
        },
        // 编辑
        edit(item) {
            ajax.getGoodsDetail(item.auctionItemID).then((result) => {
                this.showEdit = true
                this.isEdit = true
                this.editTitle = '编辑'
                this.editForm = result
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增'
            this.editForm = {}
        },
        // 启用
        enable() {
            if (this.selected.length === 0) {
                this.$message({
                    message: '请先选择要启用的拍品',
                    type: 'warning'
                })
                return
            }
            const ids = []
            this.selected.forEach((item) => {
                ids.push(item.auctionItemID)
            })

            ajax.enableGoods(ids).then((result) => {
                this.$message.success('启用成功')
                this.getGoodsPageList()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 禁用
        disable() {
            if (this.selected.length === 0) {
                this.$message({
                    message: '请先选择要禁用的拍品',
                    type: 'warning'
                })
                return
            }
            const ids = []
            this.selected.forEach((item) => {
                ids.push(item.auctionItemID)
            })

            ajax.disableGoods(ids).then((result) => {
                this.$message.success('禁用成功')
                this.getGoodsPageList()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        }
    }
}