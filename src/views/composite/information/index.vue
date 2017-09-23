<!-- 资讯中心 -->
<template>
	<div class="reference">
        <!-- 搜索条件 -->
        <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :is-show-more="isShowMoreQuery"
            :reset-form = "query"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search">
        </pg-search-form>
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations :btns="operations" @add="add" ></pg-operations>
            <!-- 列表 -->
            <pg-table 
                id="print_table"
                :list="articleList"
                @edit="edit"
                @deleteOne="deleteOne"
                @detail="detail">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :articleBaseType="articleTypes"  :show="showEdit"  :isEdit="isEdit" :editForm="editForm" @close="closeEdit"></pg-edit>

	</div>
</template>
<script type="text/bale"></script>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>