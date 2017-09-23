<template>
    <div class="source">
        <ul class="el-uplaod-list el-upload-list--picture-card">
            <li class="el-upload-list__item is-success" v-for="file in imageUrlList" :key="file.imgUrl">
                <transition name="el-fade-in-linear">
                    <pg-img class="el-upload-list__item-thumbnail" :src="file.imgUrl" v-if="file.isSuccess"></pg-img>
                </transition>
                <transition name="el-fade-in-linear">
                    <div class="el-loading-spinner" v-if="!file.isSuccess">
                        <svg viewBox="25 25 50 50" class="circular">
                            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
                        </svg>
                    </div>
                </transition>
                <span class="el-upload-list__item-actions" v-if="file.imgUrl">
                    <span class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <i class="el-icon-delete2"></i>
                    </span>
                </span>
            </li>
        </ul>
        <div class="pg_img_upload">
            <el-upload
                class="avatar-uploader"
                ref="upload"
                :action="action"
                :headers="headers"
                :show-file-list="false"
                :before-upload="beforeUpload"
                :on-success="handleSuccess"
                :on-error="handleError"
                :accept="accept"
                :multiple="multiple">
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div slot="tip" class="el-upload_tip">{{ tip ? tip : accept }}</div>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less">
    @import '~assets/styles/_variables';
    .el-upload-list--picture-card .el-upload-list__item {
        width: 100px;
        height: 100px;
    }
    .pg_img_upload {
        display: inline-block;
        vertical-align: top;
        .avatar-uploader {
            line-height: 0;
        }
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #20a0ff;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
        }
        .avatar {
            width: 100px;
            height: 100px;
            display: block;
        }
        .el-upload_tip {
            font-size: 12px;
            color: #8391a5;
            margin-top: 5px;
        }
    }
</style>

<script type="text/babel">
    import imgUpload from './imgUpload'
    export default {
        ...imgUpload
    }
</script>