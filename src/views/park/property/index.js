import PgTable from './components/table/index.vue'
import PgGoods from './components/addGoods/index.vue'

import {property as ajax} from 'services'
import {shop as ajaxs} from 'services'

export default {
    components: {
        PgTable,
        PgGoods
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                shopID: '',
                mobile: '',
                shopName: '',
                time: '',
                beginTime: '',
                endTime: '',
                feeType: -1
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 0, // 总条数
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            isShowGoods: false, // 是否显示商品列表弹出框
            // 操作区按钮
            operations: [
                {
                    name: '费用录入',
                    action: 'add',
                    type: 'primary'
                },
            ],
            shopList: [],
            customerList: []
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '商家',
                        model: 'shopID',
                        text: 'customerName',
                        value: 'shopID',
                        options: this.shopList
                    },
                    {
                        type: 'input',
                        label: '手机号码',
                        model: 'mobile'
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '店铺名称',
                        model: 'shopName'                            
                    },
                    {
                        type: 'timeRange',
                        label: '录入时间段',
                        model: 'time',
                        start: 'beginTime',
                        end: 'endTime'
                    },
                    {
                        type: 'select',
                        label: '收费类型',
                        text: 'text',
                        value: 'value',
                        model: 'feeType',
                        options: [
                            {
                                value: -1,
                                text: '全部'
                            },
                            {
                                value: 10,
                                text: '物业费'
                            },
                            {
                                value: 20,
                                text: '租金'
                            },
                            {
                                value: 30,
                                text: '水费'
                            },
                            {
                                value: 40,
                                text: '电费',
                            },
                            {
                                value: 999,
                                text: '其他'
                            }
                        ]
                    }
                ]
            }
        }
    },
    mounted() {
        this.search()
        this.getShopList()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 当前页数更新触发
        currentChange(current) {
            this.page = current
            this.getCustomerList()
        },
        // 每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.getCustomerList()
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getCustomerList()
            //this.getDecorationEffects()
        },
        // 编辑
        edit(item) {
            ajax.getDetail(item.paySheetID).then((result) => {
                this.title = '编辑'
                this.isEdit = true
                this.isShowGoods = true
                this.editForm = result
                //console.log(result)
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 新增
        add() {
            this.title = '新增'
            this.isEdit = false
            this.isShowGoods = true
            this.editForm = {}
        },
        // 删除
        del(item) {
            this.$confirm('确定删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    ajax.deleteProperty(item.paySheetID).then((result) => {
                        this.$message.success('删除成功')
                        this.search()
                    })
                }).catch(() => {

                })
        },
        // 关闭商品列表弹出框
        closeGoods() {
            this.isShowGoods = false
        },
        //获取物业管理列表
        getCustomerList() {
            ajax.getPageList(this.query,this.page,this.pageSize).then((result) => {
                //console.log(result.data)
                this.total = result.totalCount                              
                this.customerList = []

                for( var i = 0; i < result.data.length; i++ ) {
                    var index = this.customerList.length
                    if (this.customerList.length === 0) {
                        this.customerList.push(result.data[i])
                        this.customerList[index].feeType = this.stringToArray(this.customerList[index].feeType)
                        this.customerList[index].amount = this.stringToArray(this.customerList[index].amount)
                        this.customerList[index].content = this.stringToArray(this.customerList[index].content)
                    }else {
                        var isRepeatId = false 
                        for(var j = 0 ; j < this.customerList.length; j++) {
                            if( this.customerList[j].paySheetID == result.data[i].paySheetID ) {
                                isRepeatId = true
                                this.customerList[j].feeType.push(result.data[i].feeType)
                                this.customerList[j].amount.push(result.data[i].amount)
                                this.customerList[j].content.push(result.data[i].content)
                                break
                            }
                        }
                        if(isRepeatId == false) {
                            this.customerList.push(result.data[i])
                            this.customerList[index].feeType = this.stringToArray(this.customerList[index].feeType)
                            this.customerList[index].amount = this.stringToArray(this.customerList[index].amount)
                            this.customerList[index].content = this.stringToArray(this.customerList[index].content)
                        }
                    }
                }
                // result.data.forEach((item) => {
                //     var index = this.customerList.length
                //     if (this.customerList.length === 0) {
                //         this.customerList.push(item)
                //         this.customerList[index].feeType = this.stringToArray(this.customerList[index].feeType)
                //         this.customerList[index].amount = this.stringToArray(this.customerList[index].amount)
                //         this.customerList[index].content = this.stringToArray(this.customerList[index].content)
                //     }else {
                //         var isRepeatId = false 
                //         for(var i = 0 ; i < this.customerList.length; i++) {
                //             if( this.customerList[i].paySheetID == item.paySheetID ) {
                //                 isRepeatId = true
                //                 // this.customerList[i].feeType.push(item.feeType)
                //                 // this.customerList[i].amount.push(item.amount)
                //                 // this.customerList[i].content.push(item.content)
                //                 break
                //             }
                //         }
                //         if(isRepeatId == false) {
                //             this.customerList.push(item)
                //             this.customerList[index].feeType = this.stringToArray(this.customerList[index].feeType)
                //             this.customerList[index].amount = this.stringToArray(this.customerList[index].amount)
                //             this.customerList[index].content = this.stringToArray(this.customerList[index].content)
                //         }
                //     }
                // })
                //result.data = this.customerList
                //console.log(this.customerList)
            })
        },
        stringToArray(str){
            let arr = []
            arr.push(str)
            return arr
        },
        getShopList(){
            ajaxs.getShopList("",this.page,this.pageSize).then((result) => {
                this.shopList = result.data
            })
        },
    }
}