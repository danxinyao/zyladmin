import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'

import { hotelManager as ajax } from 'services'

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
                name: "",
                address: "",
                editor: "",
                status: -1,
                linkTel: '',
                time: '',
                editTime: {
                    begin: '',
                    end: '',                
                }
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
            hotelList: [],
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
                                value: -1,
                                text: '全部'
                            },
                            {
                                value: 1,
                                text: '在用'
                            },
                            {
                                value: 0,
                                text: '禁用'
                            }
                        ]
                    },
                    {
                        type: 'input',
                        label: '名称',
                        model: 'name'
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return[
                    {
                        type: 'input',
                        label: '地址',
                        model: 'address'
                    },
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'editor'
                    },
                    {
                        type: 'timeRange',
                        label: '录入时间段',
                        model: 'time',
                        start: 'editTime.begin',
                        end: 'editTime.end'
                    },                     
                    {
                        type: 'input',
                        label: '电话',
                        model: 'linkTel'
                    }, 
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
            this.getHotelList()
        },
        // 全选
        selectChange(selections) {
            let self = this
            self.selected = []
            selections.forEach(function(element,index) {
                self.selected.push(element.id)
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
            let id = item.id  
            ajax.getHotelDetail(id).then(result=>{
                result.keepTime = result.keepTime.substr(11,5)
                result.overTime = result.overTime.substr(11,5)
                result.refundTime = result.refundTime.substr(11,5)
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
                    ajax.enabledHotel({ids: this.selected}).then(result=>{
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
                    ajax.disabledHotel({ids: this.selected}).then(result=>{
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
            ajax.getHotePagelList(this.query,this.page,this.pageSize).then(result=>{
                this.total = result.totalCount
                this.page = result.page
                this.hotelList = result.data
                
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