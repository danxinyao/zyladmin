import PgTable from './components/table/index.vue'

import {msg as ajax} from 'services'

export default {
    components: {
        PgTable
    },
    data() {
        return {
            // 搜索条件
            query: {
                name: '',
                mobile: '',
                startTime: '',
                endTime: ''
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 0, // 总条数
            selected: [],
            customerList: []
        }
    },
    computed: {

    },
    methods: {
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        },
        getPageList() {
            ajax.getPageList(this.query,this.page,this.pageSize).then(result=>{
                //console.info(result)
                this.total = result.totalCount
                this.page = result.page
                this.customerList = result.data
            })
        }
    },
    mounted() {
        this.getPageList()
    }
}