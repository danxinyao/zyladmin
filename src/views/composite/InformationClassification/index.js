// import { homePage, dept } from 'services'
import {information as ajax} from 'services'
import PgEdit from './components/edit/index.vue'
let id = 1000;
export default {
    components: {
        PgEdit,
    },
    data() {
        return {
            deptData: [],
            defaultProps: {
              children: 'children',
              label: 'label'
            },
            title: '编辑',
            isEdit: false,
            showEdit: false,
            editForm: {},
            isFirst: false,
            propertyForm: {},
            showProperty: false,
        }
    },
    mounted() {
        this.getArticleTree()
    },
    methods: {
        // 关闭编辑框
        closeEdit() {
            this.showEdit = false
        },
        // 初始化数据
        getArticleTree() {
            ajax.getArticleTree().then((result) => {
                const subDept = []
                result.forEach((item) => {
                    const subDept2 = []
                    item.subArticleCategory.forEach((item2) => {
                        subDept2.push({
                            value: item2.articleCategoryID,
                            label: item2.name,
                            level: 2,
                            children:[],
                            parentID:item2.parentID
                        })
                    })
                    subDept.push({
                        value: item.articleCategoryID,
                        label: item.name,
                        level: 1,
                        children: subDept2,
                        parentID:item.parentID
                    })
                })

                this.deptData = subDept
            })
        },
        // 刷新页面
        refresh() {
            this.getArticleTree()
        },
        // 新增一级分类
        addSubsOne() {
            this.isFirst = true
            this.editForm = {}
            this.title = '新增一级分类'
            this.isEdit = false
            this.showEdit = true
        },
        // 新增子分类
        addSubDept(store, data) {
            console.info(data)
            this.editForm = {
                articleCategoryID:'',
                name: '',
                parentID:data.value,
            }
            this.title = '新增子分类'
            this.isEdit = false
            this.isFirst = false
            this.showEdit = true
        },
        // 删除分类
        delDept(store, data) {
            const delData = data
            this.$confirm('确定删除 '+ delData.label +' 吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                if(delData.children.length>0){
                     this.$message({
                        type: 'error',
                        message: '请先删除该分类下的资讯'
                    })
                    return false
                }
                ajax.deleteArticleType(delData.value).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })

                    this.getArticleTree()
                }).catch((error) => {
                    this.$message({
                        type: 'error',
                        message: error
                    })
                })
            })
        },
        // 修改分类
        updateDept(store, data) {
            console.log(data)
            this.editForm = {
                name: data.label,
                articleCategoryID: data.value,
                parentID:data.parentID,

            }
            this.title = '修改'
            this.isEdit = true
            this.isFirst = false
            this.showEdit = true
        },
        // 属性
        getProperty(store, data) {
            this.propertyForm = data
            this.showProperty = true
        },
        // 关闭属性弹窗
        closeProperty() {
            this.showProperty = false
        },
        //移动
        move(store, data, flag) {
            ajax.moveArticleClassfiy({articleCategoryID:data.value,flag:flag}).then(result=>{
                this.getArticleTree()
            })
        },
        renderContent(h, { node, data, store }) {
            if (data.level === 1) {
                return (
                    <span>
                        <span>
                          <span>{ node.label }</span>
                        </span>
                        <span style="margin-left:10%">
                            <el-button type="text" size="mini" on-click={ () => this.move(store, data, 0) }>上移</el-button>
                            <el-button type="text" size="mini" on-click={ () => this.move(store, data, 1) }>下移</el-button>     
                        </span>
                        <span  class="btnList"  style="display:block; width:122px; float: right; margin-right:45px;">
                          <el-button type="text" size="mini" on-click={ () => this.updateDept(store, data) }>编辑</el-button>
                          <el-button type="text" size="mini" on-click={ () => this.delDept(store, data) }>删除</el-button>
                          <el-button type="text" size="mini" on-click={ () => this.addSubDept(store, data) }>增加子类</el-button>
                        </span>
                    </span>
                )
            }
            else {
                return (
                    <span>
                        <span>
                          <span>{ node.label }</span>
                        </span>
                        <span style="margin-left:10%">
                            <el-button type="text" size="mini" on-click={ () => this.move(store, data, 0) }>上移</el-button>
                            <el-button type="text" size="mini" on-click={ () => this.move(store, data, 1) }>下移</el-button>     
                        </span>
                        <span class="btnList" style="display:block; width:122px; float: right; margin-right:45px;">
                            <el-button type="text" size="mini" on-click={ () => this.updateDept(store, data) }>编辑</el-button>
                            <el-button type="text" size="mini" on-click={ () => this.delDept(store, data) }>删除</el-button>
                            {/* <el-button type="text" size="mini" on-click={ () => this.updateDept(store, data) }>查看属性</el-button> */}
                        </span>
                    </span>
                )
            }
        } 
    }
}