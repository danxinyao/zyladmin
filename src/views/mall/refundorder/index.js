import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import PgOrderdialog from './components/dialog/index.vue'
import {order as ajax} from 'services'
import { cloneDeep } from 'lodash'

export default {
    components: {
        PgTable,
        PgEdit,
        PgOrderdialog
    },
    data() {
        return {
            // 搜索条件
            query: {
                condition: {
                    sheet: '',
                    linkTel: '',
                    memberName: '',
                    // goodName: '',
                    // orderTime: {
                    //     begin: '',
                    //     end: ''
                    // },
                    // linkMan: '',
                    // state: '',
                    // city: '',
                    // district: '',
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            // 重置搜索条件
            resetForm: {
                condition: {
                    sheet: '',
                    linkTel: '',
                    memberName: '',
                    // goodName: '',
                    // orderTime: {
                    //     begin: '',
                    //     end: ''
                    // },
                    // linkMan: '',
                    // state: '',
                    // city: '',
                    // district: '',
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
            isShowMoreQuery: false,
            showDialog: false,
            dialogType: 0,
            dialogSize: 'small',
            // 操作区按钮
            operations: [
                {
                    name: '高级搜索',
                    action: 'advanceSearch',
                    type: 'default'
                },
            ],
            customPageList: [],
            refundOrder: {}
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
                        model: 'linkTel'
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
                        model: 'memberName'
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
        this.getCustomPageList()
    },
    methods: {
        // 获取退货单列表
        getCustomPageList() {
            ajax.getRefundOrderPageList(this.query).then((result) => {
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
        // 同意退货
        returnGoods(item) {
            console.log('同意退货')
            console.log('改价')
            this.dialogType = 2
            this.showDialog = true
            this.refundOrder = item
        },
        // 同意退款
        agreeRefund(item) {
            console.log('同意退款')
            this.$confirm('您确定退回款项给买家?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.agree(item.refundOrderID).then(() => {
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
        // 备注
        noting(item) {
            console.log('备注')
            this.dialogType = 0
            this.showDialog = true
            this.refundOrder = item
        },
        // 关闭对话框
        closeDialog() {
            this.showDialog = false
        },
        // 拒绝退货/退款
        refuse(item) {
            console.log('改价')
            this.dialogType = 1
            this.showDialog = true
            this.refundOrder = item
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