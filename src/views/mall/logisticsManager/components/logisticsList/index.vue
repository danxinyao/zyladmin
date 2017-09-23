<template>
    <div class="payList">
        <div class="box_title">
            {{title}}
            <div class="btnDiv">
                <el-button @click="edit">修改</el-button>
                <el-button @click="deleteM">删除</el-button>
            </div>
        </div>
        <div class="payList__box">
            <el-table :data="tableData.basFreightTemplatePriceList" style="width: 100%" v-if="tableData.priceFlag == 0">
                <el-table-column label="运送方式" width="180">
                    <template scope="scope">
                        <span>快递</span>
                    </template>
                </el-table-column>
                <el-table-column  label="可运送至" width="180">
                    <template scope="scope">
                        <span v-for="place in scope.row.region">{{place.name}} &nbsp;</span>
                    </template>
                </el-table-column>
                <el-table-column prop="firstUnit" label="首（件）">
                </el-table-column>
                <el-table-column prop="firstPrice" label="运费" width="180">
                </el-table-column>
                <el-table-column prop="nextUnit" label="每增加（件）" width="180">
                </el-table-column>
                <el-table-column prop="nextPrice" label="增加运费" width="180">
                </el-table-column>
            </el-table>

            <el-table :data="tableData.basFreightTemplatePriceList" style="width: 100%" v-if="tableData.priceFlag == 1">
                <el-table-column label="运送方式" width="180">
                    <template scope="scope">
                        <span>快递</span>
                    </template>
                </el-table-column>
                <el-table-column  label="可运送至" width="180">
                    <template scope="scope">
                        <span v-for="place in scope.row.region">{{place.name}} &nbsp;</span>
                    </template>
                </el-table-column>
                <el-table-column prop="firstUnit" label="首（kg）">
                </el-table-column>
                <el-table-column prop="firstPrice" label="运费" width="180">
                </el-table-column>
                <el-table-column prop="nextUnit" label="每增加（kg）" width="180">
                </el-table-column>
                <el-table-column prop="nextPrice" label="增加运费" width="180">
                </el-table-column>
            </el-table>

            <el-table :data="tableData.basFreightTemplatePriceList" style="width: 100%" v-if="tableData.priceFlag == 2">
                <el-table-column label="运送方式" width="180">
                    <template scope="scope">
                        <span>快递</span>
                    </template>
                </el-table-column>
                <el-table-column  label="可运送至" width="180">
                    <template scope="scope">
                        <span v-for="place in scope.row.region">{{place.name}} &nbsp;</span>
                    </template>
                </el-table-column>
                <el-table-column prop="firstUnit" label="首（方）">
                </el-table-column>
                <el-table-column prop="firstPrice" label="运费" width="180">
                </el-table-column>
                <el-table-column prop="nextUnit" label="每增加（方）" width="180">
                </el-table-column>
                <el-table-column prop="nextPrice" label="增加运费" width="180">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .fr {
        float: right;
    }
    .payList{
        background: #fafafa;
        padding: 20px;
        .btnDiv{
            float: right;
        }
        &__box{
            //height: 24px * 10;
            overflow: hidden;
            font-size: 14px;
            line-height: 24px;
            li{
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
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