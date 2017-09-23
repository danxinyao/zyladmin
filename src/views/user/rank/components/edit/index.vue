<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px">

            <el-form-item label="等级名称" prop="name">
                <el-input v-model="form.name" style="width: 250px"></el-input>
            </el-form-item>
            <el-form-item label="享受折扣" prop="discount">
                <el-input v-model="form.discount" style="width: 250px"></el-input>
            </el-form-item>
            <el-form-item label="权重" prop="power">
                <el-input v-model="form.power" style="width: 250px"></el-input>
            </el-form-item>
            <pg-title title="自动升级条件"></pg-title>
            <el-form-item label="消费额" prop="upgradeAmount">
                <el-input v-model="form.upgradeAmount" style="width:250px"></el-input> ¥            
            </el-form-item>
            <el-form-item label="交易次数" prop="upgradeOrderCount">
                <el-input v-model="form.upgradeOrderCount" style="width:250px"></el-input>
            </el-form-item>
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
        </div>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
