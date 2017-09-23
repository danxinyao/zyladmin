<!-- 自定义页面 -->
<template>
	<div class="customView">
        <div class="pg_content">
            <pg-search-form
                v-model="query"
                :default-form="defaultQuery"
                :more="moreQuery"
                :resetForm="resetForm"
                :is-show-more="isShowMoreQuery"
                @openMore="toggleOpen"
                slot="search-form"
                @search="search"
            >
            </pg-search-form>
            <!-- 按钮 -->
            <pg-operations :btns="operations" @add="add"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                :list="customPageList"
                @select-change="selectChange"
                @edit="edit"
                @del="del">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="query.pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>			
	</div>
</template>
<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>