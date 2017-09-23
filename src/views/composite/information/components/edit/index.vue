<template>
    <pg-box :isShowBox="show" @close="close('0')">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="150px"  :inline="true">
            <el-form-item label="文章标题：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="文章描述：" >
                <el-input  type="textarea" v-model="form.description "></el-input>
            </el-form-item>
            <br>
            <br>
            <el-form-item label="文章归属：" >
                <el-select v-model="form.articleType">
                    <el-option :label="abt.text" :value="abt.sortId" v-for="abt in articleBaseType">
                    </el-option>
                </el-select>
            </el-form-item>
            <br>
            <el-form-item label="文章分类：">
                <el-select v-model="first" @change="changeF">
                    <el-option :label="ar.text" :value="ar.value " v-for="ar in FArticleType"></el-option>
                </el-select>
                
                <el-select v-model="second">
                    <el-option :label="ar.text" :value="ar.value" v-for="ar in SArticleType"></el-option>
                </el-select>                
            </el-form-item>
            <br>
            <el-form-item label="主图：" >
                <pg-img-upload @success="success" :image="imgurl"></pg-img-upload>
            </el-form-item>
            <br>
            <div style="margin-left:11%">
                <el-checkbox v-model="checked">推荐上咨询轮播</el-checkbox>
            </div>           
            <br>
            <el-form-item label="详细内容：" >
                <pg-editor ref="contentEditor" v-model="form.content" :init-content="content"></pg-editor>
            </el-form-item>            
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" v-if="isEdit != '2'" type="primary" @click="save">保存</el-button>
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
