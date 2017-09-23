<template>
    <!-- 用户 - 用户管理 -->
    <div class="customer">
        <!-- 搜索条件 -->
       <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations :btns="operations" @rank="rank" @dele="dele" @exportUser="exportUser"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                id="print_table"
                :list="customerList"
                @select-change="selectChange"
                @del="delUser">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit"></pg-edit>
        <!-- 用户等级弹窗 -->
        <el-dialog title="请调整等级" :visible.sync="rankDialogVisible">
            <el-select v-model="rankValue" placeholder="请选择" @change="rankChange">
                <el-option 
                    v-for="item in rankOptions"
                    :key="item.memberGradeID"
                    :label="item.name"
                    :value="item.memberGradeID">
                </el-option>
            </el-select>
            <p>可享受折扣 {{rankDiscount}} 折</p>
            <div slot="footer" class="dialog-footer">
                <el-button @click="rankDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="rankSave">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>