import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {composite as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit,
    },
    data() {
        return {
            pageType: 0,//所属的模块类型
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
            ],
            slideShowList: []
        }
    },
    mounted() {
        this.pageType = this.$route.query.pageType
        this.getSlideShowList()
    },
    methods: {
        // 轮播图列表
        getSlideShowList() {
            ajax.getSlideShowList(this.pageType).then((result) => {
                this.slideShowList = result
            })
        },
        //删除轮播图
        del(item) {
            this.$confirm('您确定要删除该轮播图?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ajax.deleteSlideShow(item.advertisingPositionID).then(() => {
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    })
                    this.refresh()
                }).catch((error) => {
                    this.$message.error(error)
                })
            })
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
            console.log(selections)
        },
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '编辑'
            this.editForm = item
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = false
            this.editTitle = '新增'
            this.editForm = {
                pageType: this.pageType
            }
        },
        // 上移/下移
        sortPos(index, type, list) {
            ajax.sortSlideShow({
                id: list[index].advertisingPositionID,
                flag: type
            }).then(() => {
                this.$message({
                    message: '排序成功',
                    type: 'success'
                })
                this.refresh()
            }).catch((error) => {
                this.$message.error(error)
            })
        },
        // 刷新页面
        refresh() {
            this.page = 1
            this.getSlideShowList()
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
        },
    }
}