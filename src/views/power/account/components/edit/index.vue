<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" v-if="type !== 2">
            <el-form-item label="账号" prop="login">
                <el-input v-model="form.login" class="input_item"></el-input>
                <span>用户密码默认为手机号后6位</span>
            </el-form-item>
            <el-form-item label="名字" prop="name">
                <el-input v-model="form.name" class="input_item"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="tele">
                <el-input v-model="form.tele" class="input_item"></el-input>
            </el-form-item>
            <el-form-item label="所属角色" prop="roleID">
                <el-select v-model="form.roleID" class="input_item">
                    <el-option :label="item.text" :value="item.value" v-for="item in roleList"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules" v-else>
            <el-form-item label="账号" prop="login">
                <el-input v-model="form.login" class="input_item" disabled></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password1">
                <el-input type="password" v-model="form.password1" class="input_item"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="password2">
                <el-input type="password" v-model="form.password2" class="input_item"></el-input>
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
