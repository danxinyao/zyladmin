<template>
    <section class="informationClassfiy">        
        <div style="padding: 15px 0">
            <el-button type="primary" size="small" icon="plus" @click="addSubsOne">新增一级分类</el-button>
        </div>
        <el-tree 
            :data="deptData" 
            :props="defaultProps" 
            :expand-on-click-node="false"
            :default-expand-all="false"
            :render-content="renderContent">
        </el-tree>
        <pg-edit :title="title" :show="showEdit" :isFirst="isFirst" :isEdit="isEdit" :editForm="editForm" @close="closeEdit" @refresh="refresh"></pg-edit>
    </section>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>