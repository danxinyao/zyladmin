import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'

import {user as ajax} from 'services'

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
                name: '',
                mobile: '',
                isNew: -1
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
                    name: '批量删除',
                    action: 'dele'
                },
                {
                    name: '调整等级',
                    action: 'rank',
                    type: 'primary'
                },
                {
                    name: '导出用户',
                    action: 'exportUser'
                }
            ],
            customerList: [],
            rankDialogVisible: false,
            rankValue: '',
            rankDiscount: '',
            rankOptions: [],
            markDialogVisible: false,
            markText: ''
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '是否新用户',
                        model: 'isNew',
                        text: 'text',
                        value: 'value',
                        options: [
                            {
                                value: -1,
                                text: '不限'
                            },
                            {
                                value: 1,
                                text: '是'
                            },
                            {
                                value: 2,
                                text: '否'
                            }
                        ]
                    },
                    {
                        type: 'input',
                        label: '用户名',
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
                        label: '手机号',
                        model: 'mobile'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getPageList()
        this.getLevelPageList()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getPageList()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
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
        // 批量删除
        dele() {
            if( this.selected.length < 1 ){
                this.$confirm('您还没有选择用户', '提示', {
                    showCancelButton: false,
                    confirmButtonText: '确定',
                    type: 'warning'
                }).then(() => {

                }).catch(() => {

                })
            }else{
                this.delUser()
            }
        },
        // 确定删除
        delUser() {
            this.$confirm('删除后用户数据不可恢复，您确认要删除该用户吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    console.log('删除')
                }).catch(() => {

                })
        },
        //调整等级
        rank() {
            if( this.selected.length < 1 ){
                this.$confirm('您还没有选择用户', '提示', {
                    showCancelButton: false,
                    confirmButtonText: '确定',
                    type: 'warning'
                }).then(() => {

                }).catch(() => {

                })
            }else{
                this.rankDialogVisible = true
            }
        },
        rankChange() {
            //console.log(this.rankValue)
            for( var i = 0; i < this.rankOptions.length; i++ ) {
                if( this.rankOptions[i].memberGradeID  == this.rankValue ) {
                    this.rankDiscount = this.rankOptions[i].discount
                    break
                }
            }
        },
        rankSave() {
            var rankList = []
            for (var i = 0; i < this.selected.length; i++) {
                var obj = new Object()
                obj.memberID = this.selected[i].memberID
                obj.memberGradeID = this.rankValue
                rankList.push(obj)
            }
            this.rankDialogVisible = false
            //console.log(rankList)
            ajax.modifyLevel(rankList).then(result=>{
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.getPageList()
            })
        },
        //导出用户
        exportUser() {
            ajax.exportCsvUser(this.query,this.page,this.pageSize).then(result=>{
                console.log(result)
                this.util.exportFile(result)
                this.$message({
                    message: '导出成功',
                    type: 'success'
                }).catch((error) => {
                    console.log(error)
                    this.$message.error(error)
                })
            })
        },
        //用户定义设置
        setUsertype() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '用户定义设置'
            this.editForm = {}
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        //获取用户列表
        getPageList() {
            ajax.getPageList(this.query,this.page,this.pageSize).then(result=>{
                this.total = result.totalCount
                this.page = result.page
                this.customerList = result.data
                
            })
        },
        //获取等级列表
        getLevelPageList() {
            ajax.getLevelPageList(this.page,this.pageSize).then(result=>{
                //console.log(result)
                this.rankOptions = result.data
                this.rankValue = this.rankOptions[0].memberGradeID
                this.rankChange()
            })
        },
        
    }
}