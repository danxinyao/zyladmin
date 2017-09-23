import YcBanner from './components/mainBanner/index.vue' // 大banner
import YcNav from './components/nav/index.vue' // 导航菜单
import YcGoods from './components/goods/index.vue' // 商品
import YcAdvertise from './components/advertise/index.vue' // 广告位
import ZyTitle from './components/title/index.vue' // 楼层标题
import ZyList from './components/list/index.vue' // 商品列表
import PgEdit from './components/edit/index.vue'
import PgTable from './components/table/index.vue'

import {decoration as ajax} from 'services'

export default {
    components: {
        PgEdit,
        PgTable,
        YcBanner,
        YcNav,
        YcGoods,
        YcAdvertise,
        ZyTitle,
        ZyList,
    },
    data() {
        return {
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            mallType: 21,
            mallList: [],
            moveCol: {
                id: '',
                flag: 0
            },
            deleCol: {
                id: ''
            },
            saveGoodsVisible: false,
            goodsList: [],
            selected: [],
        }
    },
    mounted() {
        //this.getColumns()
    },
    watch: {
        moveCol(moveCol) {
            ajax.moveColumn(moveCol).then((result) => {
                this.$message({
                    message: '移动成功',
                    type: 'success'
                })
                this.getColumns()
            })
        }
    },
    methods: {
        // 编辑
        edit(item) {
            this.showEdit = true
            this.isEdit = true
            this.editTitle = '栏目管理'
            this.editForm = {
                goodsColumnId: item.goodsColumnId,
                name: item.name,
                //orderNo: 0,
                //showCount: 10,
                isName:  item.isName == 1?true:false,
                isPrice: item.isPrice == 1?true:false,
                isNote: item.isNote == 1?true:false
            }
        },
        dele(id) {
            this.deleCol.id = id
            ajax.disableColumn(this.deleCol).then((result) => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.getColumns()
            })
        },
        moveUp(id) {
            this.moveCol = {
                id: id,
                flag: 0,
            }
        },
        moveDown(id) {
            this.moveCol = {
                id: id,
                flag: 1,
            }
        },
        editGoods(item) {
            this.saveGoodsVisible = true
            this.goodsList = item.items
        },
        saveGoods() {
            var good = {
                goodsColumnItemId: this.selected.goodsColumnItemId,
                goodsColumnId: this.selected.goodsColumnId,
                goodsId: this.selected.goodsId
            }
            ajax.saveColumnGoods(good).then((result) => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.saveGoodsVisible = false
                this.getColumns()
            })
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
            //console.log(selections)
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
            this.getColumns()
        },
        getColumns() {
            ajax.getColumns(this.mallType).then((result) => {
                //console.log(result)
                this.mallList = result
            })
        },
    }
}