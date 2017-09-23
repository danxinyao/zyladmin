<template>
    <!-- 综合管理 - 首页 -->
    <div class="customer">
        
        <div class="pg_content">
            <div>
                <el-button @click="edit('')">新增运费模板</el-button>
            </div>
            <br>
        <el-row :gutter="20" v-for="list in lists">
            <el-col :span="18">
                <logis-list
                    :title="list.name"
                    :tableData="list"
                    @edit="edit"
                    @deleteM="deleteM">
                </logis-list>
            </el-col>
        </el-row>
            <pg-edit  :show="isShow" @close="edit" @addPlace="showNewPlace"  :checkedPlace="addPlaceParam.checkedPlace" :editForm="editItem"></pg-edit>
            <add-place  :show="isShowAddPlace" :provinceList="provinceList" :eidtCheckedPlace="addPlaceParam.checkedPlace" @closePlace="closePlace" @add="addPlace"></add-place>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-tab-pane{
        overflow-x: auto; 
    }
    .info{
        &Box{
            //width: 100%;
            height: 250px - 40px;
            padding:  20px;
            background: #fafafa;
            &__icon{
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 40px;
                height: 40px;
                line-height: 40px;
                font-size: 28px;
                text-align: center;
                border-radius: 50%;
                overflow: hidden;
                background: #cccccc;
            }
            &__msgNum{
                font-size: 48px;
                font-weight: bold;
                line-height: 1.5;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            &__title{
                font-size: 18px;
                line-height: 2;
                text-align: center;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 20px;
            }
            &__txt{
                width: 100%;
                text-align: center;
                font-size:  18px;
                line-height: 2;
                span{
                    display: inline-block;
                    margin: 0 10px;
                }
            }
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>