import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'

import {ycManager as ajax} from 'services'

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
                shopId: "",
                sheet:"",
                flag: -1,
                courseId:'',
                eCode:'',
                name:'',
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
            roomList:[],//启用教室下拉列表
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
            classOrderList: [],
            classList:[],
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
                                text: '已出码'
                            },
                            {
                                value: 90,
                                text: '已兑票'
                            },
                            {
                                value: 97,
                                text: '已取消'
                            },
                            {
                                value: 99,
                                text: '已过期'
                            },
                            {
                                value: 100,
                                text: '已使用'
                            },
                        ]
                    },
                    {
                        type: 'select',
                        label: '课室',
                        model: 'shopId',
                        text: 'text',
                        value: 'value',
                        options: this.roomList
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
                        model: 'name'
                    },
                    {
                        type: 'input',
                        label: '取票码',
                        model: 'eCode'
                    },
                ]
            }
        }
    },
    mounted() {
        this.getCultureOrderList()
        this.getCultureRoomDropDownList()
        this.getCultureClassDropDownList()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.getCultureOrderList()
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
            let id = item.scenicTicketTypeID 
            ajax.getTicketTypeDetail(id).then(result=>{
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
        
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        //保存成功关闭
        saveClose() {
            this.showEdit = false
            this.search()
        },
        //获取文化课订单列表
        getCultureOrderList() {
            ajax.getCultureOrderList(this.query,this.page,this.pageSize).then(result=>{
                this.total = result.totalCount
                this.page = result.page
                this.classOrderList = result.data
                
            })
        },
        //获取启用课室的下拉列表
        getCultureRoomDropDownList(){
            ajax.getCultureRoomDropDownList().then(result=>{
                this.roomList = result
            })
        },
        //获取门票类型下拉列表
        getCultureClassDropDownList() {
            ajax.getCultureClassDropDownList().then(result=>{
                this.classList = result 
            })   
        },
        //兑换电子码
        changeCultureCode(item){
            let id = item.courseOrderID 
            ajax.changeCultureCode(id).then(result=>{
                this.$message.success("兑换成功")
                this.search()
            }).catch(error=>{
                this.$message.error(error)
            })
        },
        //取消订单
        cancelCultureOrder(item){
            let id = item.courseOrderID 
            ajax.cancelCultureOrder(id).then(result=>{
                this.$message.success("取消成功")
                this.search()
            }).catch(error=>{
                this.$message.error(error)
            })
        },
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