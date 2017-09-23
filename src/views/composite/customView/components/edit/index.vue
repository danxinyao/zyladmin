<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="页面名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <pg-editor :initContent="initContent" @input="getContent" ref="contentEditor"></pg-editor>
            </el-form-item>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
    </pg-box>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
