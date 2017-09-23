import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import RoomIn from './components/roomin/index.vue'

import {ycManager as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit,
        RoomIn,
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                sheet: "",
                memberName: "",
                shopID: "",
                flag: -1,
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 0, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            isShowGoods: false, // 是否显示商品列表弹出框
            hotelList:[],//启用景点下拉列表
            // 操作区按钮    
            operations: [
                {
                    name: '新增',
                    action: 'add'
                },
                {
                    name: '导出',
                    action: 'able',
                },
            ],
            orderList: [],//订单列表
            showSave:false,//是否显示添加入住信息
            checkId:'',//入住酒店订单ID
            freeRoomList:[],//空闲房间列表
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '状态',
                        model: 'flag',
                        text: 'text',
                        value: 'value',
                        options: [
                            {
                                value: -1,
                                text: '全部'
                            },
                            {
                                value: 0,
                                text: '待付款'
                            },
                            {
                                value: 10,
                                text: '预订'
                            },
                            {
                                value: 20,
                                text: '已付款'
                            },
                            {
                                value: 90,
                                text: '已入住'
                            },
                            {
                                value: 97,
                                text: '已取消'
                            },
                            {
                                value: 100,
                                text: '已完成'
                            },
                        ]
                    },
                    {
                        type: 'select',
                        label: '酒店',
                        model: 'shopID',
                        text: 'text',
                        value: 'value',
                        options: this.hotelList
                    },
                ]
            }
        },
        moreQuery: {
            get() {
                return[
                    {
                        type: 'input',
                        label: '订单号',
                        model: 'sheet'
                    },
                    {
                        type: 'input',
                        label: '下单账号',
                        model: 'memberName'
                    },
                ]
            }
        }
    },
    mounted() {
        this.getHotelOrderList()
        this.getHotelDropList()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.getHotelOrderList()
        },
        // 全选
        selectChange(selections) {
            let self = this
            self.selected = []
            selections.forEach(function(element,index) {
                self.selected.push(element.scenicTicketTypeID)
            });
            //console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        },
        //新增
        add() {
            this.showEdit = true
            this.isEdit = false 
            this.editTitle = "新增"
        },
        //编辑
        edit(item){
            let id = item.hotelOrderID 
            ajax.getHotelOrderDetail(id).then(result=>{
                this.editForm = result
                this.showEdit = true
                this.isEdit = true
                this.editTitle = "编辑"
            })
            
        },
        // 批量启用
        able() {
            //enabledScenic
            if( this.selected.length < 1 ){
                this.$message({
                    message: '请至少勾选一条',
                    type: 'warning'
                })
                return
            }else{
                ajax.enabledTicketType(this.selected).then(result=>{
                    this.search()
                })
                
                //在查询一边列表
            }
        },
        // 确定禁用
        unable() {
            //disabledScenic
            if( this.selected.length < 1 ){
                this.$message({
                    message: '请至少勾选一条',
                    type: 'warning'
                })
                return
            }else{
                ajax.disabledTicketType(this.selected).then(result=>{
                    this.search()
                })
                //在查询一边列表
            }
        },
        
        // 关闭弹出窗口 1表示关闭编辑窗口 2表示关闭

        closeEdit(flag) {
            if(flag=="1") {
                this.showEdit = false
            } else {
                this.showSave = false
            }
            
        },
        //保存成功关闭
        saveClose() {
            this.closeEdit(1)
            this.search()
        },
         //入住添加成功关闭
         closeSaveIn(){
            this.closeEdit(2)
            this.search()
         },
        //获取门票类型列表
        getHotelOrderList() {
            ajax.getHotelOrderList(this.query,this.page,this.pageSize).then(result=>{
                this.total = result.totalCount
                this.page = result.page
                this.orderList = result.data
                
            })
        },
        //获取启用酒店的下拉列表
        getHotelDropList() {
            ajax.getHotelDropList().then(result=>{
                this.hotelList = result
                this.hotelList.splice(0,0,{"text": "不限",
                "value": '',})
            })
        },
        //保存入住
        saveIn(item){
            console.log(item)
            let hotelOrderId = item.hotelOrderID
            let roomId = item.hotelRoomTypeID
            this.checkId = hotelOrderId
            ajax.getFreeRoomDropDownList(roomId).then(result=>{
                this.freeRoomList = result
                this.showSave = true
            })
        },
        cancel(item){
            let id = item.hotelOrderID 
            ajax.cancelHotelOrder(id).then(result=>{
                this.$message.success('取消订单成功')
                this.search()
            }).catch(error=>{
                this.$message.error(error)
            })
        }
    },
    watch:{
        page(page){
            this.page = page
            this.search()
        },
        pageSize(pageSize){
            this.page = 1
            this.pageSize = pageSize
            this.search()
        }
    }
}