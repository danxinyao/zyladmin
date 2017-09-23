<!-- 积分商城 -->
<template>
	<div class="customView">
        <!-- 搜索 -->
        <pg-search-form
            v-model="query"
            :default-form="defaultQuery"
            :more="moreQuery"
            :resetForm="resetForm"
            :is-show-more="isShowMoreQuery"
            @openMore="toggleOpen"
            slot="search-form"
            @search="search"
            class="search"
        >
        </pg-search-form>
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations :btns="operations" @add="add"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                :list="customPageList"
                @select-change="selectChange"
                @edit="edit"
                @del="del"
                @ending="ending"
                @copy="copy">
            </pg-table>
            <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="query.pageSize" :total="total"></pg-pagination>
        </div>
        <!-- 编辑弹窗页 -->
        <pg-edit :title="editTitle" :show="showEdit" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh" @addGoods="addGoods"></pg-edit>	
        <!-- 商品选择 -->
        <pg-goodlist :showDialog="showDialog" @closeDialog="closeDialog"></pg-goodlist>
	</div>
</template>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .pg_content {
        padding: 0 20px;
    }

</style>