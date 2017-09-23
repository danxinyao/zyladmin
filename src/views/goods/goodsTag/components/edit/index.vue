<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
            <div class="box_title">{{title}}</div>
            <el-form ref="form" :model="form" label-width="120px" :rules="rules">
                <el-form-item label="标签名" prop="name">
                    <el-input v-model="form.name" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="上传icon">
                    <pg-img-upload
                        :image="form.iconUrl"
                        @success="success"></pg-img-upload>
                </el-form-item>
                <el-form-item class="el-form-item_btns">
                    <el-button size="small" type="primary" :loading="localLoading === 'saveShop'" @click="save">保存</el-button>
                    <el-button size="small" @click="close">返回</el-button>
                </el-form-item>
            </el-form>
        </div>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    .input_item {
        width: 30%;
    }
    .input_inline {
        width: 10%;
        display: inline-block;
    }
    .tips {
        color: #48576a;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
