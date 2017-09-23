<template>
    <pg-box :isShowBox="show" @close="close">
        <div class="editContent">
        <div class="box_title">{{title}}</div>
        <el-form ref="form" :model="form" label-width="150px"  :inline="true">
            <el-form-item label="模板名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <br>
            <el-form-item label="计价方式" >
                <el-radio-group v-model="form.priceFlag" @change="priceFlagRadio">
                    <el-radio :label="0">按件数</el-radio>
                    <el-radio :label="1">按重量</el-radio>
                    <el-radio :label="2">按体积</el-radio>
                </el-radio-group>
            </el-form-item>
            <br>
            <el-form-item label="运送方式">
                <span>除指定地区外，其余地区的运费采用“默认运费”</span>
                <div class="placeTable">
                     <div class="newFree">
                        <el-button type="primary" @click="addSendTable">增加</el-button>
                    </div>
                    <el-table v-if="form.priceFlag=='0'" :data="form.basFreightTemplatePriceList" border style="width:100%">
                        <el-table-column   label="运送到" width="320">
                            <template scope="scope">
                                <span v-for="one in scope.row.region" >{{one.name}} &nbsp;</span> 
                                <el-button type="text" size="small" style="float:right" @click="sendAddPlace(scope.$index,scope.row.region
                                )">编辑</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column  label="首件（件）" width="120">
                            <template scope="scope">
                                <el-input v-model="scope.row.firstUnit"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column label="首费（元）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.firstPrice"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column prop="city" label="续件（件）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.nextUnit"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column prop="address" label="续费（元）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.nextPrice"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="130">
                            <template scope="scope">
                                <el-button type="text" size="small" @click="deletePrice(scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table v-if="form.priceFlag=='1'" :data="form.basFreightTemplatePriceList" border style="width:100%">
                        <el-table-column   label="运送到" width="320">
                            <template scope="scope">
                                <span v-for="one in scope.row.region" >{{one.name}}  &nbsp;</span> 
                                <el-button type="text" size="small" style="float:right" @click="sendAddPlace(scope.$index,scope.row.region
                                )">编辑</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column  label="首重（kg）" width="120">
                            <template scope="scope">
                                <el-input v-model="scope.row.firstUnit"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column label="首费（元）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.firstPrice"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column prop="city" label="续重（kg）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.nextUnit"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column prop="address" label="续费（元）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.nextPrice"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="130">
                            <template scope="scope">
                                <el-button type="text" size="small" @click="deletePrice(scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-table v-if="form.priceFlag=='2'" :data="form.basFreightTemplatePriceList" border style="width:100%">
                        <el-table-column   label="运送到" width="320">
                            <template scope="scope">
                                <span v-for="one in scope.row.region" >{{one.name}}  &nbsp;</span>
                                <el-button type="text" size="small" style="float:right" @click="sendAddPlace(scope.$index,scope.row.region
                                )">编辑</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column  label="首方（m³）" width="120">
                            <template scope="scope">
                                <el-input v-model="scope.row.firstUnit"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column label="首费（元）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.firstPrice"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column prop="city" label="续方（m³）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.nextUnit"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column prop="address" label="续费（元）" width="120">
                             <template scope="scope">
                                <el-input v-model="scope.row.nextPrice"></el-input>   
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="130">
                            <template scope="scope">
                                <el-button type="text" size="small" @click="deletePrice(scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    
                </div>
                <el-checkbox v-model="form.isShowFreeAct">是否指定包邮（选填）</el-checkbox>
                <div class="freePost" v-if="form.isShowFreeAct">
                    <div class="newFree">
                        <el-button type="primary" @click="addPostFreeInfo">增加</el-button>
                    </div>
                    <el-table  :data="form.basFreightTemplateFreeList" border style="width:100%">
                        <el-table-column   label="选择地区" width="150">
                            <template scope="scope">
                                <span v-for="one in scope.row.region" >{{one.name}}  &nbsp;</span> 
                                <el-button type="text" size="small" style="float:right" @click="freeAddPlace(scope.$index,scope.row.region
                                )">编辑</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column label="运送方式" width="80">
                            <template scope="scope">
                                <span>快递</span>
                            </template>
                        </el-table-column>
                        <el-table-column class="postInfo" label="设置包邮" width="600">
                             <template scope="scope">
                                <el-select class="selectType" v-model="scope.row.conditionFlag" @change="freeSelelctChange(scope.$index)">
                                    <el-option v-for="one in typeOption" :label="one.label" :value="one.value"></el-option>
                                </el-select> 
                                <span v-if="scope.row.conditionFlag==2">
                                    满 <el-input class="text" v-model="scope.row.qty"></el-input>件，<el-input class="text" v-model="scope.row.amount"></el-input>元以上包邮
                                </span>
                                <span v-if="scope.row.conditionFlag==0">
                                    满 <el-input class="text" v-model="scope.row.qty"></el-input>件以上包邮
                                </span>
                                <span v-if="scope.row.conditionFlag==1">
                                    满 <el-input class="text" v-model="scope.row.amount"></el-input>元以上包邮
                                </span>
                            </template>
                        </el-table-column>
                        
                        <el-table-column fixed="right" label="操作" width="100">
                            <template scope="scope">
                                <el-button type="text" size="small" @click="deletePostFree(scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>        
            </el-form-item>
            
        </el-form>
        </div>
         <el-button type="primary" @click="save">保存</el-button>
         <el-button type="primary" @click="close">关闭</el-button>
    </pg-box>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .editContent{
        min-width: 1500px;
        .newFree{
                
                margin-bottom: 20px;
            }
        .typeDiv{
            width: 100%;
        }
        .placeTable{
            border-bottom: 1px solid black;
            padding-bottom: 20px;
            margin: 20px 0;
        }
        .defaultTxt{
            .text{
                width: 176px;
            }
        }
        .freePost{
            
            .selectType{
                display: inline-block;
                width: 130px;
            }
            .text{
                width: 150px;
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
