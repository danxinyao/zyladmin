<template>
    <div class="region">
        <el-select v-model="stateRegionID" placeholder="省">
            <el-option v-for="state in stateList" :label="state.text" :value="state.value"></el-option>
        </el-select>
        <el-select v-model="cityRegionID" placeholder="市">
            <el-option v-for="city in cityList" :label="city.text" :value="city.value"></el-option>
        </el-select>
        <el-select v-model="districtRegionID" placeholder="区">
            <el-option v-for="district in districtList" :label="district.text" :value="district.value"></el-option>
        </el-select>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .region {
        .el-select {
            width: 120px;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>