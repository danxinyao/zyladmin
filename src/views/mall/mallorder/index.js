import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import PgOrderdialog from './components/dialog/index.vue'
import { cloneDeep } from 'lodash'
import {order as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit,
        PgOrderdialog
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                condition: {
                    sheet: '',
                    mobile: '',
                    name: '',
                    platformType: 1,
                    goodName: '',
                    orderTime: {
                        begin: '',
                        end: ''
                    },
                    linkMan: '',
                    state: '',
                    city: '',
                    district: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            // 重置搜索条件
            resetForm: {
                condition: {
                    sheet: '',
                    mobile: '',
                    name: '',
                    platformType: 1,
                    goodName: '',
                    orderTime: {
                        begin: '',
                        end: ''
                    },
                    linkMan: '',
                    state: '',
                    city: '',
                    district: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            total: 0,//总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            type: 0, // 弹出框的类型
            showEdit: false, // 是否显示新增弹出窗口
            showDialog: false,
            dialogType: 0,
            dialogSize: 'small',
            // 操作区按钮
            operations: [
                {
                    name: '订单导出',
                    action: 'exportOrder',
                    type: 'primary'
                },
                {
                    name: '删除',
                    action: 'del',
                    type: 'default'
                },
                {
                    name: '高级搜索',
                    action: 'advanceSearch',
                    type: 'default'
                },
            ],
            customPageList: [],
            order: {}
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '订单号',
                        model: 'sheet'
                    },
                    {
                        type: 'input',
                        label: '手机号',
                        model: 'mobile'
                    }      
                ]
            }
        },
        // 搜索区展开
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '买家名称',
                        model: 'name'
                    },
                    {
                        type: 'select',
                        label: '订单状态',
                        text: 'title',
                        value: 'value',
                        model: 'flag',
                        options: [
                            {
                                title: '全部',
                                value: -1
                            },
                            {
                                title: '待付款',
                                value: 0
                            },
                            {
                                title: '待发货',
                                value: 1
                            },
                            {
                                title: '已发货',
                                value: 2
                            },
                            {
                                title: '交易完成',
                                value: 3
                            }
                        ]
                    }
                ]
            }
        }
    },
    mounted() {
        // 获取订单列表
        this.getCustomPageList()
    },
    methods: {
        // 获取订单列表
        getCustomPageList() {
            ajax.getPageList(this.query).then((result) => {
                //console.log(result)
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
            this.type = 1
            this.editTitle = '订单详情'
            ajax.getOrderDetail(item.id).then((result) => {
                this.editForm = result
                this.editForm.platformType = this.query.condition.platformType
            })
        },
        // 高级搜索
        advanceSearch() {
            this.showEdit = true
            this.type = 0
            this.editTitle = '高级搜索'
            this.editForm = cloneDeep(this.query)
        },
        // 高级搜索订单
        searchOrder(query) {
            ajax.getPageList(query).then((result) => {
                this.customPageList = result.data
                this.total = result.totalCount
            })
        },
        // 订单导出
        exportOrder() {
            console.log('订单导出')
        },
        // 确认付款
        confirmPay(item) {
            this.$confirm('您确定要确认此订单已付款?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.modifyPayState(item.id).then(() => {
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
        // 修改价格
        changePrice(item) {
            this.dialogType = 1
            this.dialogSize = 'large'
            this.showDialog = true
            this.order = cloneDeep(item)
        },
        // 备注
        noting(item) {
            this.dialogType = 0
            this.showDialog = true
            this.order = item
        },
        // 关闭对话框
        closeDialog() {
            this.showDialog = false
        },
        // 删除
        del(item) {
            this.$confirm('您确定删除该页面, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // ajax.deleteCustomPageList(item.definePageID).then(() => {
                //     this.$message({
                //         message: '删除成功',
                //         type: 'success'
                //     })
                //     // 刷新页面
                //     this.refresh()
                // }).catch((error) => {
                //     this.$message.error(error)
                // })
            })
        },
        // 商城切换
        handleClick(tab, event) {
            this.query = cloneDeep(this.resetForm)
            this.query.condition.platformType = parseInt(tab.index)+1
            this.getCustomPageList()
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