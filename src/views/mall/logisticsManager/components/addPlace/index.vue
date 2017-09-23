<template>
	<pg-dialog :isShow="show" @close="close"  size="small"  >
        <div class="pg-dialog" >
			<div class="content">
				 <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
					<ul>
						<li v-for="city in provinceList">
							<el-checkbox class="checkCity" :label="city.name" :key="city.regionID">{{city.name}}</el-checkbox>
						</li>
					</ul>
  				</el-checkbox-group> 
				  <!-- <ul>
						<li v-for="city in placeList">
							<el-checkbox class="checkCity" v-model="city.isChecked">{{city.name}}</el-checkbox>
						</li>
				</ul> -->
			</div>
			<div style="clear:both"></div>
			<div class="btns">
				<el-button type="primary" @click="add">确定</el-button>
				<el-button type="primary" @click="close">关闭</el-button>
			</div>
        </div>
    </pg-dialog>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
	.pg-dialog{
		.content{
			width: 70%;
			margin: 40px auto;
			ul{
				li{
					margin-left: 20px; 
					float: left;
					margin-bottom: 20px;
				}
			}
		}
		.btns{
			width: 150px;
			margin: 0 auto;
		}
	}
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>
