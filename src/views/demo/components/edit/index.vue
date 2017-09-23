<template>
    <pg-box :isShowBox="show" @close="close">
        <div>
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
            <pg-title title="分段一"></pg-title>
            <el-form-item label="所属团队" prop="teamname">
                <el-input v-model="form.teamname"></el-input>
            </el-form-item>
            <el-form-item label="分销客户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动" prop="active">
                <el-select v-model="form.active">
                    <el-option :label="active.label" :value="active.value" v-for="active in actives"></el-option>
                </el-select>
            </el-form-item>
            <pg-title title="分段二"></pg-title>
            <el-form-item label="新增">
                <el-button size="small" @click="add">新增</el-button>
            </el-form-item>
            <pg-title title="上传"></pg-title>
            <el-form-item label="">
                <pg-img-upload tip="只能上传.png、.jpg格式的图片" :image="imageUrl" @success="uploadSuccess"></pg-img-upload>
            </el-form-item>
            <pg-title title="多张上传"></pg-title>
            <el-form-item label="">
                <pg-img-upload multiple :imageList="imageUrlList" @success="multipleUploadSuccess"></pg-img-upload>
            </el-form-item>
            <br>
            <el-form-item label="编辑器">
                <pg-editor ref="contentEditor" v-model="form.content" :init-content="content"></pg-editor>
            </el-form-item>
            <br>
            <el-form-item class="el-form-item_btns">
                <el-button size="small" type="primary" @click="save">保存</el-button>
                <el-button size="small" @click="close">返回</el-button>
            </el-form-item>
        </el-form>
        <!-- 分页 -->
            <pg-pagination slot="pagination" @size-change="sizeChange" @current-change="currentChange" :page-size="pageSize" :total="total"></pg-pagination>
        </div>
    </pg-box>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
