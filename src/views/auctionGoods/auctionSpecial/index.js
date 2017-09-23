import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {auction as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            query: {// 搜索条件
                name: '',
                creater: ''
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 1, // 总条数
            goodsList: [],
            selected: [],
            editTitle: '新增专场', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            operations: [// 操作区按钮
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
                {
                    name: '启用',
                    action: 'enable'
                },
                {
                    name: '禁用',
                    action: 'disable'
                }
            ]
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '主题',
                        model: 'name'
                    },
                    {
                        type: 'input',
                        label: '创建人',
                        model: 'creater'
                    }
                ]
            }
        }
    },
    mounted() {
        this.getAuctionPageList()
    },
    methods: {
        //获取拍卖页面列表
        getAuctionPageList() {
            ajax.getAuctionPageList(this.query,this.page,this.pageSize).then((result) => {
                this.total = result.totalCount
                this.goodsList = result.data
            })
        },
        // 搜索按钮
        search() {
            this.page = 1
            this.getAuctionPageList()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
            this.getAuctionPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.page=1
            this.getAuctionPageList()
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑'
            this.editForm = {
                auctionID: item.auctionID,
                name: item.name,
                description: item.description,
                auctionType: item.auctionType,
                imgUrl: item.imgUrl
            }
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增专场'
            this.editForm = {}
        },
        // 启用
        enable() {
            if(!this.selected.length){
                this.$confirm('请选择启用的专场', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(() => {

                })
                return
            }
            let idArr=[]
            this.selected.forEach((item) => {
                idArr.push(item.auctionID)
            })
            ajax.auctionEnabled(idArr,).then(() => {
                this.$message({
                    type: 'success',
                    message: '启用成功!'
                })
                this.getAuctionPageList()
            })
        },
        // 禁用
        disable() {
            if(!this.selected.length){
                this.$confirm('请选择禁用的专场', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(() => {

                })
                return
            }
            let idArr=[]
            this.selected.forEach((item) => {
                idArr.push(item.auctionID)
            })
            ajax.auctionDisabled(idArr,).then(() => {
                this.$message({
                    type: 'success',
                    message: '禁用成功!'
                })
                this.getAuctionPageList()
            })
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        //重新请求
        refresh() {
            this.getAuctionPageList()
        }
    }
}