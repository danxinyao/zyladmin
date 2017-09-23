import PgTable from './components/table/index.vue'
import PgEdit from './components/edit/index.vue'
import {information as ajax} from 'services'

export default {
    components: {
        PgTable,
        PgEdit,
    },
    data() {
        return {
            isShowMoreQuery: false, // 搜索区是否显示更多
            // 搜索条件
            query: {
                articleType:-1,
                name: '',
                articleCategoryID:''
            },
            page: 1, // 当前页码
            pageSize: 15, // 每页条数
            total: 40, // 总条数
            selected: [],
            editTitle: '编辑', // 新增/修改标题
            editForm: {}, // 新增/修改数据
            isEdit: "0", // 0代表修改 ，1代表新增 ，2代表详情
            showEdit: false, // 是否显示新增弹出窗
            articleList:[],//资讯文章列表
            // 操作区按钮
            operations: [
                {
                    name: '新增',
                    action: 'add',
                    type: 'primary'
                },
            ],
            articleTypes: [
            ],//全部归属
            articleCategory:[]//全部分类
        }
    },
    computed: {
        // 搜索区默认显示
        defaultQuery: {
            get() {
                return [
                    {
                        type: 'select',
                        label: '全部归属',
                        model: 'articleType',
                        text: 'text',
                        value: 'sortId',
                        options: this.articleTypes
                    },
                    {
                        type: 'select',
                        label: '全部分类',
                        model: 'articleCategoryID',
                        text: 'text',
                        value: 'value',
                        options: this.articleCategory
                    },
                ]
            }
        },
        moreQuery: {
            get() {
                return [
                    
                    {
                        type: 'input',
                        label: '咨询名称',
                        model: 'name',
                    },
                ]
            }
        }
    },
    methods: {

        // 搜索区显示更多
        toggleOpen(isShow) {
            this.isShowMoreQuery = isShow
        },
        // 搜索按钮
        search() {
            this.queryArticleList()
        },
        // // 全选
        // selectChange(selections) {
        //     this.selected = selections
        //     console.log(selections)
        // },
        // 分页-当前页数更新触发
        currentChange(current) {
            this.page = current
        },
        // 分页-每页条数更改时触发
        sizeChange(size) {
            this.pageSize = size
        },
        // 编辑
        edit(item) {
            
            ajax.getArticleDetail(item.articleID).then(result=>{
                this.editForm = result
                this.showEdit = true
                this.isEdit = "0"
                this.editTitle = '编辑'
            })
        },
        // 新增
        add() {
            this.showEdit = true
            this.isEdit = "1"
            this.editTitle = '新增'
            this.editForm = {}
        },
        //详情
        detail(item){
            ajax.getArticleDetail(item.articleID).then(result=>{
                this.editForm = result
                this.showEdit = true
                this.isEdit = "2"
                this.editTitle = '详情'
            })
        },
        //删除
        deleteOne(item){
            this.$confirm('确定删除吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    ajax.deleteArticle(item.articleID).then(result=>{
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        })
                        this.search()
                    })
                }).catch(() => {

                })
           
        },
        // 启用
        selects() {
            this.isShowSelects = true
            this.isEdit = false
            this.titleSelects = '资讯分类'
            this.editForm = {}
        },
        // 关闭弹出窗口
        closeEdit(index) {
            this.showEdit = false
            if( index=='1' ) {
                this.search()
            }

        },
        closeSelects() {
            this.isShowSelects = false
        },
        //获取文章列表
        queryArticleList() {
            ajax.getArticlePageList(this.query,this.page,this.pageSize).then(result=>{
                console.info(result)
                this.total = result.totalCount
                this.page = result.page
                this.articleList = result.data
            })

        },
         //获取文章文类型
        getArticleType() {
            ajax.getArticleTypeList(null).then(result=>{
                this.articleCategory = result
            })
        },
        //获取文章归属类型列表
        getArticleBaseType() {
            ajax.getArticleBaseType().then(result =>{
                console.log(result)
                this.articleTypes = result
                this.articleTypes.splice(0, 0, {
                    text:'不限',
                    sortId:-1,
                }); 
            })
        }
    },
    mounted(){
        this.getArticleBaseType()
        this.search()
        this.getArticleType()
        
    },
    watch:{
        page(val){
            this.search()
        },
        pageSize(val){
            this.search()
        }
    }
}