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
                    proName: '',
                    customNo: '',
                    deptID: '',
                    integral: '',
                    beginTime: '',
                    endTime: '',
                    maxRatio: 0,
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            resetForm: {
                condition: {
                    proName: '',
                    customNo: '',
                    deptID: '',
                    integral: '',
                    beginTime: '',
                    endTime: '',
                    maxRatio: 0,
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            total: 0,//总条数
            editTitle: '编辑', // 新增/修改标题
            exchangeLiat: [], // 兑换记录
            showEdit: false, // 是否显示新增弹出窗口
            isShowMoreQuery: false,
            // 操作区按钮
            operations: [
                {
                    name: '兑换记录',
                    action: 'record',
                    type: 'primary'
                },
                {
                    name: '高级搜索',
                    action: 'advanceSearch',
                    type: 'default'
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
                        label: '商品名称',
                        model: 'proName'
                    },
                    {
                        type: 'select',
                        label: '活动状态',
                        text: 'title',
                        value: 'value',
                        model: 'flag',
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
        this.getCustomPageList()
    },
    methods: {
        // 获取自定义页面列表
        getCustomPageList() {
            ajax.getGoodsPageList(this.query).then((result) => {
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
        // 下线
        soldOut(item) {
            this.$confirm('您确定下线该商品?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.soldOutGoods(item.integralExchangeID).then(() => {
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
        // 高级搜索
        advanceSearch() {
            this.showEdit = true
            this.editTitle = '高级搜索'
        },
        searchGoods(query) {
            ajax.getGoodsPageList(query).then((result) => {
                this.customPageList = result.data
                this.total = result.totalCount
            })
        },
        // 兑换记录
        record() {
            this.$router.push({
                path: '/exchangeList'
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