import PgTable from './components/table/index.vue'
import { goods as ajax } from 'services'

export default {
    components: {
        PgTable,
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                condition: {
                    time: '', // 商品标签
                    editTimeRange: {//时间范围
                        editTimeBegin: '',
                        editTimeEnd: ''
                    },
                },
                page: 1, // 当前页码
                pageSize: 15 // 每页条数
            },
            total: 0, // 总条数
            // 操作区按钮
            operations: [
                {
                    name: '数据导出',
                    action: 'exportData',
                    type: 'primary'
                },
            ],
            goodsList: []
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'timeRange',
                        label: '时间范围',
                        model: 'time',
                        start: 'editTimeRange.editTimeBegin',
                        end: 'editTimeRange.editTimeEnd'     
                    }
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                ]
            }
        }
    },
    mounted() {
        this.getPageList()
    },
    methods: {
        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.query.page = 1
            this.getPageList()
        },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.query.page = current
            this.getPageList()
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.query.pageSize = size
            this.getPageList()
        },
        getPageList() {
            ajax.getPageList(this.query).then((result) => {
                this.goodsList = result.data
                this.total = result.totalCount
            })
        },
        // 导出数据
        exportData() {

        }
    }
}