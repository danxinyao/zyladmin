<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="基本信息" name="info">
                <el-form ref="form" :model="form" label-width="100px" :rules="rules">
                    <pg-title title="基本信息"></pg-title>
                    <el-form-item label="商品类目">  
                        <el-cascader
                            :options="treeList"
                            v-model="deptId"
                            @change="changeTreeList">
                        </el-cascader>
                    </el-form-item>
                    <el-form-item label="商品名称">
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>
                    <el-form-item label="所属专题">
                        <el-select v-model="form.auctionID" filterable placeholder="请选择">
                            <el-option
                                v-for="item in auctionList"
                                :key="item.auctionID"
                                :label="item.name"
                                :value="item.auctionID">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <pg-title title="拍卖信息"></pg-title>
                    <el-form-item label="起拍价">
                        <el-input placeholder="0.00" v-model="form.beginPrice">
                            <template slot="prepend">￥</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="最低加价">
                        <el-input placeholder="0.00" v-model="form.minStepPrice">
                            <template slot="prepend">￥</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="最高加价">
                        <el-input placeholder="0.00" v-model="form.maxStepPrice">
                            <template slot="prepend">￥</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="保证金">
                        <el-input placeholder="0.00" v-model="form.guarantee">
                            <template slot="prepend">￥</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="开拍时间">
                        <el-date-picker
                            v-model="form.beginTime"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="结束时间">
                        <el-date-picker
                            v-model="form.endTime"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="送拍机构">
                        <el-input v-model="form.provider"></el-input>
                    </el-form-item>
                    <el-form-item label="商品主图">
                        <pg-img-upload :image="form.imgUrl" @success="uploadSuccess"></pg-img-upload>
                    </el-form-item>
                    <el-form-item label="商品副图">
                        <pg-img-upload multiple :imageList="form.subImgUrls" @success="uploadMultipleSuccess"></pg-img-upload>
                    </el-form-item>
                    <el-form-item label="商品简介">
                        <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="form.note"></el-input>
                    </el-form-item>
                    <pg-title title="物流及其他"></pg-title>
                    <el-form-item label="固定运费">
                        <el-input placeholder="0.00" v-model="form.postFee">
                            <template slot="prepend">￥</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="运费模板">
                        <el-select v-model="form.freightTemplateID" placeholder="请选择">
                            <el-option
                                v-for="item in freightTemplateList"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="长度">
                        <el-input v-model="form.long">
                            <template slot="append">cm</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="宽度">
                        <el-input v-model="form.width">
                            <template slot="append">cm</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="高度">
                        <el-input v-model="form.heigh">
                            <template slot="append">cm</template>
                        </el-input>
                    </el-form-item>
                    <!-- <el-form-item label="物流体积">
                        <el-input v-model="form.price">
                            <template slot="append">m³</template>
                        </el-input>
                    </el-form-item> -->
                    <el-form-item label="物流重量">
                        <el-input v-model="form.weigh">
                            <template slot="append">kg</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="上架时间">
                        <el-radio-group v-model="form.goodsStatus">
                            <el-radio :label="1">立即上架</el-radio>
                            <el-radio :label="0">暂不上架</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="el-form-item_btns">
                        <el-button size="small" type="primary" @click="next">下一步</el-button>
                        <el-button size="small" @click="close">返回</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="商品详情" name="detail">
                <el-form ref="form" :model="form" label-width="100px" :rules="rules" inline>
                    <el-form-item>
                        <pg-editor ref="contentEditor" v-model="form.content" :init-content="content"></pg-editor>
                    </el-form-item>
                    <el-form-item class="el-form-item_btns">
                        <el-button 
                            size="small" 
                            type="primary" 
                            @click="save"
                            :loading="localLoading === 'saveGoods'">
                            保存
                        </el-button>
                        <el-button 
                            size="small" 
                            @click="close">
                            返回
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
    </pg-box>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    .spec_list {
        margin-top: 10px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
