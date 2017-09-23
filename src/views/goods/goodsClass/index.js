import {goods as ajax} from 'services'
import PgEdit from './components/edit/index.vue'

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
            showEdit: false,
            isEdit: false,
            editForm: {},
            isFirst: false,
            propertyForm: {},
            showProperty: false,
        }
    },
    mounted() {
        this.getGoodsTree()
    },
    methods: {
        // 初始化数据
        getGoodsTree() {
            ajax.getGoodsTree().then((result) => {
                const subDept = []//一级
                result.forEach((item) => {
                    const subDept2 = []//二级
                    if(item.subItems.length){
                        item.subItems.forEach((item2) => {
                            const subDept3 = []//三级
                            if(item2.subItems.length){
                                item2.subItems.forEach((item3) => {
                                    const subDept4 = []//四级
                                    if(item3.subItems.length){
                                        item3.subItems.forEach((item4) => {
                                            subDept4.push({
                                                value: item4.deptID ,
                                                label: item4.name,
                                                level: 4,
                                                children:[],
                                                parentID:item4.parentID
                                            })
                                        })
                                    }
                                    subDept3.push({
                                        value: item3.deptID ,
                                        label: item3.name,
                                        level: 3,
                                        children:subDept4,
                                        parentID:item3.parentID
                                    })
                                })
                            }
                            subDept2.push({
                                value: item2.deptID ,
                                label: item2.name,
                                level: 2,
                                children:subDept3,
                                parentID:item2.parentID
                            })
                        })
                    }
                    subDept.push({
                        value: item.deptID ,
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
            this.getGoodsTree()
        },
        // 新增子分类
        addSubDept(store, data) {
            this.editForm = {
                id:'',
                name: '',
                parentId:data.value,
            }
            this.title = '新增子分类'
            this.showEdit = true
        },
        // 修改分类
        updateDept(store, data) {
            this.editForm = {
                id: data.value,
                name: data.label,
                parentID:data.parentID,

            }
            this.title = '修改'
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
                        message: '请先删除该分类下的商品'
                    })
                    return false
                }
                ajax.deleteGoodsType(delData.value).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })

                    this.getGoodsTree()
                }).catch((error) => {
                    this.$message({
                        type: 'error',
                        message: error
                    })
                })
            })
        },
        // 关闭编辑框
        closeEdit() {
            this.showEdit = false
        },
        //移动
        move(store, data, flag) {
            ajax.moveGoodsClassfiy({id :data.value,flag:flag}).then(result=>{
                this.getGoodsTree()
            })
        },
        renderContent(h, { node, data, store }) {
            if (data.level !== 4) {
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
                        </span>
                    </span>
                )
            }
        }
    }
}