<template>
    <pg-dialog :isShow="showDialog" @close="close" :size="size">
        <div class="dialog_content">
            <div class="note">
                <div class="box_title">录入房间</div>
                <el-form  ref="form" :model="form" label-width="120px" :rules="rules">
                    <el-form-item label="房间名称/号" prop="name" class="item">
                        <el-input v-model.number="form.name" placeholder="房间名称/号"></el-input>
                    </el-form-item>  
                    <el-form-item class="el-form-item_btns">
                        <el-button size="small" type="primary" @click="save">保存</el-button>
                        <el-button size="small" @click="close">返回</el-button>
                    </el-form-item>                                      
                </el-form>
            </div>          
        </div>
    </pg-dialog>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .btns {
        margin: 20px auto;
    }
</style>
