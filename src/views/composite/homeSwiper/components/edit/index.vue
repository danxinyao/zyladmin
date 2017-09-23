<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="图片上传：">
                <pg-img-upload tip="只能上传.png、.jpg格式的图片" :image="form.imgUrl" @success="uploadSuccess"></pg-img-upload>
                <!-- <pg-img-upload @success="uploadSuccess" ref="upload"></pg-img-upload> -->
            </el-form-item>
            <el-form-item label="链接：">
                <el-input v-model="form.url" class="input_item"></el-input>
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

</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
