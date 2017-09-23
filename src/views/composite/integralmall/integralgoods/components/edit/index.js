import { cloneDeep } from 'lodash'
import {power as ajax} from 'services'
import { goods as ajaxs } from 'services'

export default {
    props: {
        title: String,
        show: Boolean,
    },
    data() {
        return {
            query: {
                condition: {
                    proName: '',
                    customNo: '',
                    deptID: '',
                    integral: '',
                    beginTime: '',
                    endTime: '',
                    maxRatio: 0,
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            resetQuery: {
                condition: {
                    proName: '',
                    customNo: '',
                    deptID: '',
                    integral: '',
                    beginTime: '',
                    endTime: '',
                    maxRatio: 0,
                    flag: -1
                },
                page: 1,
                pageSize: 15
            },
            classList: [],
        }
    },
    mounted() {
         // 获取商品分类
        this.getGoodsTree()
    },
    methods: {
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
        // 返回
        close() {
            this.$emit('close')
        },
        // 保存
        save() {
            this.$emit('searchGoods', this.query)
            this.close()
        },
        // 清空搜索内容
        reset() {
            this.query = cloneDeep(this.resetQuery)
        }
    }
}