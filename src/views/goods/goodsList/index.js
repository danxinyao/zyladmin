import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import { goods as ajax } from 'services'

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
                    stockStatus: 0, // 库存状态,1:出售中,2:已下架,3:已售磬
                    sellType: -1, // 销售类型,1:批量,0:零售,-1:全部 
                    shopType: 0, // 商城类型,0:通用,101紫云来商城,111:懿城商城,121:茶都商城,131:拍卖
                    code: '', // 商品编码
                    name: '', // 商品名称
                    deptId: '', // 商品分类ID
                    labelIds: [] // 商品标签
                },
                page: 1, // 当前页码
                pageSize: 15 // 每页条数
            },
            total: 0, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            // 操作区按钮
            operations: [
                {
                    name: '发布商品',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '上架',
                    loading: 'put',
                    isConfirm: true,
                    action: 'put'
                },
                {
                    name: '下架',
                    loading: 'pull',
                    isConfirm: true,
                    action: 'pull'
                },
                {
                    name: '复制商品',
                    action: 'copy'
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
                        label: '商品名称',
                        model: 'condition.name'
                    },
                    {
                        type: 'select',
                        label: '商城类型',
                        text: 'text',
                        value: 'value',
                        model: 'condition.shopType',
                        options: [
                            {
                                value: 0,
                                text: '通用'
                            },
                            {
                                value: 101,
                                text: '紫云来商城'
                            },
                            {
                                value: 111,
                                text: '懿城商品'
                            },
                            {
                                value: 121,
                                text: '茶都商城'
                            },
                            {
                                value: 131,
                                text: '拍卖'
                            }
                        ]
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '商品编码',
                        model: 'condition.code'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getPageList()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.query.page = 1
            this.getPageList()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
            console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getPageList()
        },
        getPageList() {
            ajax.getPageList(this.query).then((result) => {
                this.goodsList = result.data
                this.total = result.totalCount
            })
        },
        // 编辑
        edit(item) {
            ajax.getGoodsDetail(item.goodsId).then((result) => {
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
        // 删除
        del(item) {
            ajax.delGoods({
                id: item.goodsId
            }).then((result) => {
                this.$message.success('删除成功')
                this.getPageList()
            }).then((error) => {
                this.$message.error(error)
            })
        },
        // 上架
        put() {
            if (this.selected.length === 0) {
                this.$message({
                    message: '请先选择要上架的商品',
                    type: 'warning'
                })
                return
            }
            const ids = []
            this.selected.forEach((item) => {
                ids.push(item.goodsId)
            })
            ajax.putGoods({
                ids
            }).then((result) => {
                this.$message.success('上架成功')
                this.getPageList()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 下架
        pull() {
            if (this.selected.length === 0) {
                this.$message({
                    message: '请先选择要下架的商品',
                    type: 'warning'
                })
                return
            }
            const ids = []
            this.selected.forEach((item) => {
                ids.push(item.goodsId)
            })
            ajax.pullGoods({
                ids
            }).then((result) => {
                this.$message.success('下架成功')
                this.getPageList()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 复制
        copy() {

        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        }
    }
}