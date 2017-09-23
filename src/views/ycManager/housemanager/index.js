import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import PgOrderdialog from './components/dialog/index.vue'

import { hotelManager as ajax } from 'services'

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
                shopID: "",
                name: "",
                editor: "",
                time: "",
                editTimeBegin: "",
                editTimeEnd: "",
                dinnerType: 0,
                status: -2,
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
            // 操作区按钮    
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '启用',
                    action: 'able',
                },
                {
                    name: '禁用',
                    action: 'unable'
                }
            ],
            hotelList: [], //列表数据
            dropdownList: [], //下拉数据
            showDialog: false,
            dialogSize: 'small',
            hotelRoomTypeID: {},  //录入房型
            roomList: [],  //获取房间列表
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
                        model: 'status',
                        text: 'text',
                        value: 'value',
                        options: [
                            {
                                value: -2,
                                text: '全部'
                            },
                            {
                                value: 1,
                                text: '未满'
                            },
                            {
                                value: 0,
                                text: '已满'
                            },                            
                            {
                                value: -1,
                                text: '禁用'
                            }
                        ]
                    },
                    {
                        type: 'select',
                        label: '酒店名称',
                        model: 'shopID',
                        text: 'text',
                        value: 'value',
                        options: this.dropdownList
                    },                    
                ]
            }
        },
        moreQuery: {
            get() {
                return[
                    {
                        type: 'input',
                        label: '房型名称',
                        model: 'name'
                    },                
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'editor'
                    },                    
                    {
                        type: 'select',
                        label: '餐饮',
                        model: 'dinnerType',
                        text: 'text',
                        value: 'value',
                        options: [
                            {
                                value: 0,
                                text: '不含餐'
                            },
                            {
                                value: 1,
                                text: '含早'
                            },
                            {
                                value: 2,
                                text: '全包'
                            },                            
                        ]
                    }, 
                    {
                        type: 'timeRange',
                        label: '录入时间段',
                        model: 'time',
                        start: 'editTimeBegin',
                        end: 'editTimeEnd'
                    },                     
                ]
            }
        }
    },
    mounted() {
        this.getDropdownList()
        this.search()
    },
    methods: {
        //获取房间列表
        expand(val) {
            let id = ''
            if(val.roomTypeID) {
                id = val.roomTypeID
            }else if(val.hotelRoomTypeID) {
                id = val.hotelRoomTypeID
            }
            ajax.getRoomList(id).then((result) => {
                this.roomList = result
                this.hotelList.forEach((item) => {
                    if(item.roomTypeID == id) {
                        item.roomList.length = 0
                        item.roomList.push(...result)
                    }
                })
                console.log(this.hotelList)
            })
        },   
        //启用房间
        enabledRoom(val) {
            ajax.enabledRoom({id:val.hotelRoomID}).then((result) => {
                this.$message.success("启用成功！")
                //this.expand(val)
                this.search() 
            })           
        },
        //禁用房间
        disabledRoom(val) {
            ajax.disabledRoom({id:val.hotelRoomID}).then((result) => {
                this.$message.success("禁用成功！")
                //this.expand(val) 
                this.search()
            })                       
        },        
        refresh() {
            this.search()
        },
        // 关闭对话框
        closeDialog() {
            this.showDialog = false
        },
        //获取酒店下拉列表
        getDropdownList() {
            ajax.getDropdownHotelList().then((result) => {
                this.dropdownList = result 
            })
        },
        //录入房型
        editRoomType(val) {
            console.log(val)
            this.hotelRoomTypeID = val
            this.showDialog = true

        },       
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.getHotelList()
        },
        // 全选
        selectChange(selections) {
            let self = this
            self.selected = []
            selections.forEach(function(element,index) {
                self.selected.push(element.roomTypeID)
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
            let id = item.roomTypeID  
            ajax.getRoomDetail(id).then(result=>{
                this.editForm = result
                this.showEdit = true
                this.isEdit = true
                this.editTitle = "编辑"
            })
            
        },
        // 批量启用
        able() {
            //disabledScenic
            if( this.selected.length < 1 ){
                this.$message({
                    message: '请至少勾选一条',
                    type: 'warning'
                })
                return
            }else{
                this.$confirm('您确定要启用吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                 }).then(() => {
                    ajax.enabledRoomType({ids: this.selected}).then(result=>{
                        this.search()
                    })
                 })                
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
                this.$confirm('您确定要禁用吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                 }).then(() => {
                    ajax.disabledRoomType({ids: this.selected}).then(result=>{
                        this.search()
                    })
                 })                
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
        //获取用户列表
        getHotelList() {
            ajax.getRoomPagelList(this.query,this.page,this.pageSize).then(result=>{
                this.total = result.totalCount
                this.page = result.page
                this.hotelList = result.data
                this.hotelList.forEach((item) => {
                    item.roomList = []
                })
                
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