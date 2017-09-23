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
                name: "",
                shopId: "",
                editor: "",
                status: -1,
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
            ableScenic:[],//启用景点下拉列表
            // 操作区按钮    
            operations: [
                {
                    name: '新增',
                    action: 'add'
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
            ticketTypeList: [],
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
                                text: '不限'
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
                    },
                    {
                        type: 'select',
                        label: '景点',
                        model: 'shopId',
                        text: 'text',
                        value: 'value',
                        options: this.ableScenic
                    },
                ]
            }
        },
        moreQuery: {
            get() {
                return[
                    {
                        type: 'input',
                        label: '名称',
                        model: 'name'
                    },
                    {
                        type: 'input',
                        label: '修改人',
                        model: 'editor'
                    },
                ]
            }
        }
    },
    mounted() {
        this.getTicketTypeList()
        this.getAbleScenicList()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.getTicketTypeList()
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
        
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        //保存成功关闭
        saveClose() {
            this.showEdit = false
            this.search()
        },
        //获取门票类型列表
        getTicketTypeList() {
            ajax.getTicketTypeList(this.query,this.page,this.pageSize).then(result=>{
                this.total = result.totalCount
                this.page = result.page
                this.ticketTypeList = result.data
                
            })
        },
        //获取启用景点的下拉列表
        getAbleScenicList(){
            ajax.getAbleScenicList().then(result=>{
                this.ableScenic = result
                this.ableScenic.splice(0,0,{"text": "不限",
                "value": '',})
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