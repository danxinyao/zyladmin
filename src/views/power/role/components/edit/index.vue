<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="角色名" prop="name">
                <el-input v-model="form.name" class="input_item"></el-input>
            </el-form-item>
            <el-form-item label="职能说明">
                <el-input type="textarea" v-model="form.note" class="input_item"></el-input>
            </el-form-item>
            <el-form-item label="菜单权限">
                <div class="menus" v-for="item in form.moduleList">
                    <pg-title title="item.systemType"></pg-title>
                    <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.checkAll" @change.native="handleCheckAllChange(item)" class="isCheckAll">全选</el-checkbox>
                    <el-checkbox v-for="items in item.moduleList" v-model="items.isChecked" :true-label="1" :false-label="0" @change.native="handleCheckedItemChange(item)" class="checkbox_item">
                        {{items.name}}
                    </el-checkbox>
                    <!-- <el-checkbox-group v-model="item.checkList" @change="handleCheckedItemChange">
                        <el-checkbox v-for="items in item.moduleList" v-model="items.isChecked" :true-label="1" :false-label="0" class="checkbox_item">
                            {{items.name}}
                        </el-checkbox>
                    </el-checkbox-group> -->
                </div>
            </el-form-item>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .input_item {
        width: 50%;
    }
    .isCheckAll{
        display: block;
    }
    .checkbox_group {
        margin-left: 20px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
