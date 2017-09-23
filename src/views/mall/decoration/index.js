import ZyBanner from './components/mainBanner/index.vue' // 大banner
import ZyNav from './components/nav/index.vue' // 大banner
import ZyAdvertise from './components/advertise/index.vue' // 大banner
import ZyTitle from './components/title/index.vue' // 楼层标题
import ZyList from './components/list/index.vue' // 商品列表
import PgEdit from './components/edit/index.vue'
import PgTable from './components/table/index.vue'

import {decoration as ajax} from 'services'
import { goods as ajaxs } from 'services'

export default {
    components: {
        PgEdit,
        PgTable,
        ZyBanner,
        ZyNav,
        ZyAdvertise,
        ZyTitle,
        ZyList,
    },
    data() {
        return {
            query: {
                condition: {
                    stockStatus: 1, // 库存状态,1:出售中,2:已下架,3:已售磬
                    sellType: -1, // 销售类型,1:批量,0:零售,-1:全部 
                    shopType: 101, // 商城类型,0:通用,101紫云来商城,111:懿城商城,121:茶都商城,131:拍卖
                    code: '', // 商品编码
                    name: '', // 商品名称
                    deptId: '', // 商品分类ID
                    labelIds: [] // 商品标签
                },
                page: 1, // 当前页码
                pageSize: 15 // 每页条数
            },
            total: 0, // 商品总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: false, // 是否新增
            showEdit: false, // 是否显示新增弹出窗口
            mallType: 11,
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
            curGood: {
                goodsColumnItemId: '',
                goodsColumnId: '',
                goodsId: ''
            }
        }
    },
    mounted() {
        this.getColumns()
        this.getGoodsList()
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
            //this.goodsList = item.items
            console.log(item)
            this.curGood.goodsColumnId = item.goodsColumnId
            this.curGood.goodsColumnItemId = item.goodsColumnItemId
            this.curGood.goodsId = item.goodsId
        },
        saveGoods() {
            ajax.saveColumnGoods(this.curGood).then((result) => {
                this.$message({
                    message: '保存成功',
                    type: 'success'
                })
                this.saveGoodsVisible = false
                this.getColumns()
            })
        },
        // 单选
        selectChange(selections) {
            this.selected = selections
            this.curGood.goodsId = selections.goodsId
            //console.log(selections)
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getGoodsList()
        },
        // 关闭弹出窗口
        closeEdit() {
            this.showEdit = false
            this.getColumns()
        },
        getColumns() {
            ajax.getColumns(this.mallType).then((result) => {
                console.log(result)
                this.mallList = result
            })
        },
        getGoodsList() {
            ajaxs.getPageList(this.query).then((result) => {
                this.goodsList = result.data
                this.total = result.totalCount
            })
        },
    }
}