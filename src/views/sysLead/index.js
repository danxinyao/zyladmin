import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import PgGoods from './components/addGoods/index.vue'
export default {
    components: {
        PgTable,
        PgEdit,
        PgGoods
    },
    data() {
        return {
            menuList:[
                {
                    name:'供应管理',
                    number:2
                },
                {
                    name:'商城管理',
                    number:1
                },
                {
                    name:'懿城管理',
                    number:3
                },
                {
                    name:'综合管理',
                    number:0
                },
                {
                    name:'园区管理',
                    number:0
                },
            ]//导航列表
        }
    },
    
    methods: {
        
    }
}