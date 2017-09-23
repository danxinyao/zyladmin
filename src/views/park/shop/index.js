import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {shop as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            query: {
                name: ''
            },
            pageSize: 15,
            page: 1,
            total: 0,
            editTitle: '新增商户', // 新增/修改标题
            editForm: {}, // 新增/修改数据传递的数据对象
            isEdit: false, // 是否新增 false为新增
            showEdit: false, // 是否显示新增弹出窗口
            // 操作区按钮
            operations: [
                {
                    name: '新增商户',
                    action: 'add',
                    type: 'primary'
                }
            ],
            customerList: []
        }
    },
    computed: {
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '商户名',
                        model: 'name'
                    }
                ]
            }
        }
    },
    mounted() {
        this.search()
    },
    methods: {
        search() {
            this.page = 1
            this.getShopList()
        },
        //获取商户列表
        getShopList() {
            ajax.getShopList(this.query.name, this.page, this.pageSize).then((result) => {
                this.customerList = result.data
                this.total = result.totalCount
            })
        },
        delUser(item) {
            ajax.deleteShop(item.shopID).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.search()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增商户'
            this.editForm = {}
        },
        //操作：编辑按钮
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑商户'
            ajax.detailShop(item.shopID).then(result=>{
                this.editForm = result
            })
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
            this.getShopList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.page = 1
            this.getShopList()
        }
    }
}