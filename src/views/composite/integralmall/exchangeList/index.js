import { goods as ajaxs } from 'services'
import {composite as ajax} from 'services'

export default {
    
    data() {
        return {
            // 搜索条件
            query: {
                condition: {
                    proName: '',
                    customNo: '',
                    deptID: '',
                    mobile: '',
                    nick: '',
                },
                page: 1,
                pageSize: 15
            },
            resetForm: {
                condition: {
                    proName: '',
                    customNo: '',
                    deptID: '',
                    mobile: '',
                    nick: '',
                },
                page: 1,
                pageSize: 15
            },
            dialogVisible: false,
            total: 0,//总条数   
            classList: [],
            exchangeLiat: [], // 兑换记录
            isShowMoreQuery: false,
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '商品名称',
                        model: 'proName'
                    },
                    {
                        type: 'input',
                        label: '商品编号',
                        model: 'customNo'
                    }
                ]
            }
        },
        // 搜索区展开
        moreQuery: {
            get() {
                return [
                    {
                        type: 'input',
                        label: '昵称',
                        model: 'nick'
                    },
                    {
                        type: 'input',
                        label: '手机号',
                        model: 'mobile'
                    },
                    {
                        type: 'select',
                        label: '商品分类',
                        text: 'name',
                        value: 'deptID',
                        model: 'deptID',
                        options: this.classList    
                    }
                ]
            }
        }
    }, 
    mounted() {
        // 获取商品分类
        this.getGoodsTree()
        this.getCustomPageList()
    },
    methods: {
        // 获取自定义页面列表
        getCustomPageList() {
            ajax.getExchangeLogPageList(this.query).then((result) => {
                this.exchangeLiat = result.data
                this.total = result.totalCount
            })
        },
        // 获取商品分类
        getGoodsTree() {
            ajaxs.getGoodsTree().then((result) => {
                this.classList = []
                result.forEach((item) => {
                    this.classList.push({
                        name: item.name,
                        deptID: item.deptID
                    })
                })
            })
        },
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.query.page = 1
            this.getCustomPageList()
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getCustomPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getCustomPageList()
        },
    }
}