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
            AdpositionList: [],//广告位模块列表
        }
    },
    mounted() {
        this.getModuleList()
    },
    methods: {
        // 获取广告位管理模块列表
        getModuleList() {
            ajax.getModuleList().then((result) => {
                this.AdpositionList = result
            })
        },
        // 编辑
        edit(item) {
            this.$router.push({
                path: '/homeSwiper',
                query: {
                    pageType: item.positionType
                }
            })
        },        
    }
}