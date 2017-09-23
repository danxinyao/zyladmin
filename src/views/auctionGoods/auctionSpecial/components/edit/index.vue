<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
            <div class="box_title">{{title}}</div>
            <el-form ref="form" :model="form" label-width="120px" :rules="rules">
                <el-form-item label="拍卖类型" prop="radio">
                    <el-radio-group v-model="form.auctionType">
                        <el-radio :label="0">普通拍卖</el-radio>
                        <el-radio :label="1">大宗拍卖</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="专场名称" prop="name">
                    <el-input v-model="form.name" class="input_item"></el-input>
                </el-form-item>
                <el-form-item label="专场图片">
                    <pg-img-upload
                        :image="form.imgUrl"
                        @success="success"></pg-img-upload>
                </el-form-item>
                <el-form-item label="专场描述" prop="description">
                    <el-input
                        v-model="form.description"
                        type="textarea"
                        :rows="5"
                        class="input_item"></el-input>
                </el-form-item>
                <el-form-item class="el-form-item_btns">
                    <el-button size="small" type="primary" @click="save">保存</el-button>
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
