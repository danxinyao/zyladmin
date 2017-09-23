<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="box_title">{{title}}</div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="商品信息" name="info">
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
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="品牌名称">
                        <el-select v-model="form.brandId" allow-create filterable placeholder="请选择">
                            <el-option
                                v-for="item in brandList"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="供应商名称">
                        <el-select v-model="form.venderId" placeholder="请选择">
                            <el-option
                                v-for="item in supplierList"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品类型">
                        <el-select v-model="form.wholesaleFlag" placeholder="请选择">
                            <el-option
                                v-for="item in wholesaleType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品标签">
                        <el-select v-model="form.goodsTags" multiple placeholder="请选择">
                            <el-option
                                v-for="item in goodsFlagList"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <pg-title title="SKU"></pg-title>
                    <el-form-item label="商品规格">
                        <el-button type="primary" @click="addSpec" icon="plus" size="small">添加规格项目</el-button>
                        <!-- 颜色 -->
                        <div class="spec_list">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-input v-model="form.colorName"></el-input>
                                </el-col>
                                <el-col :span="2">
                                    <el-button @click="submitSpec" size="small">确定</el-button>
                                </el-col>
                                <el-col :span="16">
                                    <el-button type="primary" @click="delSpec(0)" size="small" icon="delete">删除</el-button>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <el-tag class="pg_property" v-for="(property, pIndex) in form.colorProperties" :key="property.name" :closable="true" :close-transition="false" @close="delProperty(form.colorProperties, pIndex)">
                                        {{property.name}}
                                    </el-tag>
                                    <el-input  
                                        class="input-new-property"
                                        v-if="inputVisibleColor"
                                        v-model="inputValueColor"
                                        ref="savePropertyInput"
                                        size="mini"
                                        @keyup.enter.native="addProperty(form.colorProperties)"
                                        @blur="addProperty(form.colorProperties)">
                                        </el-input>
                                        <el-button 
                                            v-else 
                                        class="button-new-tag" 
                                        size="mini" 
                                        @click="showPropertyInput(0)">
                                            + 新增属性
                                        </el-button>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 尺码 -->
                        <div class="spec_list">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-input v-model="form.sizeName"></el-input>
                                </el-col>
                                <el-col :span="2">
                                    <el-button @click="submitSpec" size="small">确定</el-button>
                                </el-col>
                                <el-col :span="16">
                                    <el-button type="primary" @click="delSpec(1)" size="small" icon="delete">删除</el-button>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <el-tag class="pg_property" v-for="(property, pIndex) in form.sizeProperties" :key="property.name" :closable="true" :close-transition="false" @close="delProperty(form.sizeProperties, pIndex)">
                                        {{property.name}}
                                    </el-tag>
                                    <el-input  
                                        class="input-new-property"
                                        v-if="inputVisibleSize"
                                        v-model="inputValueSize"
                                        ref="savePropertyInput"
                                        size="mini"
                                        @keyup.enter.native="addProperty(form.sizeProperties)"
                                        @blur="addProperty(form.sizeProperties)">
                                        </el-input>
                                        <el-button 
                                            v-else 
                                        class="button-new-tag" 
                                        size="mini" 
                                        @click="showPropertyInput(1)">
                                            + 新增属性
                                        </el-button>
                                </el-col>
                            </el-row>
                        </div>
                        <!-- 其他 -->
                        <div class="spec_list">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-input v-model="form.otherName"></el-input>
                                </el-col>
                                <el-col :span="2">
                                    <el-button @click="submitSpec" size="small">确定</el-button>
                                </el-col>
                                <el-col :span="16">
                                    <el-button type="primary" @click="delSpec(2)" size="small" icon="delete">删除</el-button>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="24">
                                    <el-tag class="pg_property" v-for="(property, pIndex) in form.otherProperties" :key="property.name" :closable="true" :close-transition="false" @close="delProperty(form.otherProperties, pIndex)">
                                        {{property.name}}
                                    </el-tag>
                                    <el-input  
                                        class="input-new-property"
                                        v-if="inputVisibleOther"
                                        v-model="inputValueOther"
                                        ref="savePropertyInput"
                                        size="mini"
                                        @keyup.enter.native="addProperty(form.otherProperties)"
                                        @blur="addProperty(form.otherProperties)">
                                        </el-input>
                                        <el-button 
                                            v-else 
                                        class="button-new-tag" 
                                        size="mini" 
                                        @click="showPropertyInput(2)">
                                            + 新增属性
                                        </el-button>
                                </el-col>
                            </el-row>
                        </div>
                    </el-form-item>
                    <br>
                    <el-form-item label="商品库存">
                        <el-table
                            :data="form.skus"
                            border
                            style="width: 100%"
                            ref="table">
                            <el-table-column
                                resizable
                                fixed
                                width="100">
                                <template scope="scope">
                                    <el-button type="primary" size="mini" icon="delete" @click="delSku(scope.$index)"></el-button>
                                </template>
                            </el-table-column>
 <!--                            <el-table-column label="颜色" prop="colorName">
                            </el-table-column>
                            <el-table-column label="尺寸" prop="sizeName">
                            </el-table-column>
                            <el-table-column label="其他" prop="otherName">
                            </el-table-column> -->
                           <el-table-column v-if="form.colorName" :label="form.colorName" prop="colorName">
                            </el-table-column>
                            <el-table-column v-if="form.sizeName" :label="form.sizeName" prop="sizeName">
                            </el-table-column>
                            <el-table-column v-if="form.otherName" :label="form.otherName" prop="otherName">
                            </el-table-column>
                            <el-table-column label="零售价(元)">
                                <template scope="scope">
                                    <el-input v-model="scope.row.price"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="成本价(元)">
                                <template scope="scope">
                                    <el-input v-model="scope.row.basePrice"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="商品编码">
                                <template scope="scope">
                                    <el-input v-model="scope.row.code"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="条形码">
                                <template scope="scope">
                                    <el-input v-model="scope.row.barcode"></el-input>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form-item>
                    <el-form-item label="商品货号">
                        <el-input v-model="form.customNo"></el-input>
                    </el-form-item>
                    <pg-title title="商品信息"></pg-title>
                    <el-form-item label="零售价">
                        <el-input placeholder="0.00" v-model="form.price">
                            <template slot="prepend">￥</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="商品主图">
                        <pg-img-upload :image="form.imgUrl" @success="uploadSuccess"></pg-img-upload>
                    </el-form-item>
                    <el-form-item label="商品副图">
                        <pg-img-upload multiple :imageList="form.imgUrls" @success="uploadMultipleSuccess"></pg-img-upload>
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
                        <el-select v-model="form.freightTemplateId" placeholder="请选择">
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
                        <el-input v-model="form.height">
                            <template slot="append">cm</template>
                        </el-input>
                    </el-form-item>
                    <!-- <el-form-item label="物流体积">
                        <el-input v-model="form.price">
                            <template slot="append">m³</template>
                        </el-input>
                    </el-form-item> -->
                    <el-form-item label="物流重量">
                        <el-input v-model="form.weight">
                            <template slot="append">kg</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="上架时间">
                        <el-radio-group v-model="form.stockStatus">
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
                            :loading="localLoading === 'saveGoods'"
                            @click="save">
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
    .pg_property {
        margin-right: 5px;
    }
    .input-new-property {
        width: 70px;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
