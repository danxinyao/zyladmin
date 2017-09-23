<!-- 首页轮播图 -->
<template>
	<div class="homeSwiper">
        <div class="pg_content">
            <!-- 按钮 -->
            <pg-operations :btns="operations" @add="add"></pg-operations>
            <!-- 列表 -->
            <pg-table 
                :list="slideShowList"
                @select-change="selectChange"
                @edit="edit"
                @del="del"
                @sortPos="sortPos"
            >
            </pg-table>
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