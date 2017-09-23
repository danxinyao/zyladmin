import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {goods as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit
    },
    data() {
        return {
            pageSize: 15,//页容量
            page: 1,//页码
            total: 0,//总数量
            editTitle: '新增商品标签', // 新增/修改标题
            editForm: {}, // 新增/修改数据传递的数据对象
            isEdit: false, // 是否新增 false为新增
            showEdit: false, // 是否显示新增弹出窗口
            operations: [// 操作区按钮
                {
                    name: '新增标签',
                    action: 'add',
                    type: 'primary'
                }
            ],
            customerList: []
        }
    },
    mounted() {
        this.getGoodsTagList()
    },
    methods: {
        //获取商品标签列表
        getGoodsTagList() {
            ajax.getGoodsTagList(this.page, this.pageSize).then((result) => {
                this.total = result.totalCount
                this.customerList = result.data
            })
        },
        //删除商品标签
        delUser(item) {
            ajax.deleteGoodsTag(item.tagID).then(() => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.getGoodsTagList()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 新增商品标签
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增商品标签'
            this.editForm = {}
        },
        //操作：编辑按钮
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑商品标签'
            this.editForm = {
                "name": item.name,
                "tagID": item.tagID,
                "iconUrl": item.iconUrl
            }
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
            this.getGoodsTagList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
            this.page = 1
            this.getGoodsTagList()
        },
        //重新请求
        refresh() {
            this.getGoodsTagList()
        }
    }
}