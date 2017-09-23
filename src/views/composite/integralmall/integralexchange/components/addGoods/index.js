import { cloneDeep } from 'lodash'
import { composite as ajax } from 'services'
import { goods as ajaxs } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    props: {
        showDialog: Boolean,
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                condition: {
                    name: '',
                    code: '',
                    deptID: ''
                },
                page: 1, // 当前页码
                pageSize: 15, // 每页条数
            },
            total: 0, // 总条数
            selected: [],
            goodList: [],
            goodClass: []
        }
    },
    computed: {
        ...mapGetters([
            'goodsList'
        ]),
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '商品名',
                        model: 'name'
                    },
                    {
                        type: 'input',
                        label: '商品货号',
                        model: 'code'
                    },
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '分类',
                        text: 'name',
                        value: 'deptID',
                        model: 'deptID',
                        options: this.goodClass
                    }
                ]
            }
        }
    },
    watch: {
        showDialog() {
            if (this.showDialog) {
                // 改变商品列表中商品的选择状态
                this.$nextTick(() => {
                    this.toggleRowSelection()
                }) 
            }
        }
    },
    mounted() {
        // 获取商品列表
        this.getExchangeGoodsPageList()
        // 获取商品分类
        this.getGoodsTree()
    },
    methods: {
        ...mapActions([
            'selectGoods'
        ]),
        // 获取商品列表
        getExchangeGoodsPageList() {
            ajax.getExchangeGoodsPageList(this.query).then((result) => {
                this.goodList = result.data
                this.total = result.totalCount
            })
            
        },
        // 获取商品分类
        getGoodsTree() {
            ajaxs.getGoodsTree().then((result) => {
                this.goodClass = []
                result.forEach((item) => {
                    this.goodClass.push({
                        name: item.name,
                        deptID: item.deptID
                    })
                })
                
            })
        },
        // 关闭
        close() {
            this.$emit('closeDialog')
            this.$refs.multipleTable.clearSelection()
        },
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.query.page = 1
            this.getExchangeGoodsPageList()
        },
        // 全选
        selectChange(selections) {
            this.selected = selections
        },
        // 初始化表格中商品的选中状态
        toggleRowSelection() {
            for(let i = 0; i < this.goodsList.length; i++) {
                for(let j = 0; j < this.goodList.length; j++) {
                    if (this.goodsList[i].goodsID === this.goodList[j].goodsID) {
                        console.log(this.goodList[j])
                        this.$refs.multipleTable.toggleRowSelection(this.goodList[j], true)
                    }   
                }
            }
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getExchangeGoodsPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getExchangeGoodsPageList()
        },
        // 添加
        save() {
            this.selectGoods(this.selected)
            this.close()
        }
    }
}