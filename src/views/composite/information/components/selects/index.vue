<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-button @click="appendOne" type="primary">新增一级分类</el-button>
		<el-tree
		  :data="data2"
		  :props="defaultProps"
		  show-checkbox
		  node-key="id"
		  :expand-on-click-node="false"
		  :render-content="renderContent">
		</el-tree>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>