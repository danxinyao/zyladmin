<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <el-form-item label="栏目标题" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品排序" prop="orderNo">
                <el-select v-model="form.orderNo">
                    <el-option :label="sort.label" :value="sort.value" v-for="sort in sorts"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="显示数量" prop="showCount">
                <el-select v-model="form.showCount">
                    <el-option :label="num.label" :value="num.value" v-for="num in nums"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="isName">
                <el-checkbox v-model="form.isName">显示商品名</el-checkbox>
            </el-form-item>
            <el-form-item prop="isPrice">
                <el-checkbox v-model="form.isPrice">显示售价</el-checkbox>
            </el-form-item>
            <el-form-item prop="isNote">
                <el-checkbox v-model="form.isNote">显示简介</el-checkbox>
            </el-form-item>
            <br>
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
