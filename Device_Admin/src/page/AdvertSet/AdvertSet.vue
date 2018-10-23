<template>
  <div class="wrap">
  	<el-dialog title="显示范围" width="30%" :visible.sync="dialogFormVisible">
		  <div class="aditem1">
		  	<div class="aditeml">
		  		显示范围
		  	</div>
		  	<div class="aditemr">
		  		<el-input
		  			size="mini"
					  placeholder="请输入显示范围"
					  v-model="channestr"
					  clearable>
					</el-input>
		  	</div>
		  </div>
		  <div class="aditem1">
		  	<div class="aditeml">
		  		参数
		  	</div>
		  	<div class="aditemr">
		  		<el-input
		  			size="mini"
					  placeholder="请输入显示参数"
					  v-model="channeparm"
					  clearable>
					</el-input>
		  	</div>
		  </div>
		  <div slot="footer" class="dialog-footer">
		    <el-button size="mini" @click="dialogFormVisible = false">取 消</el-button>
		    <el-button size="mini" @click="sendData(0)" type="primary" >确 定</el-button>
		  </div>
		</el-dialog>
		<el-dialog title="广告渠道" width="30%" :visible.sync="dialogFormVisible1">
		  <div class="aditem1">
		  	<div class="aditeml">
		  		广告渠道
		  	</div>
		  	<div class="aditemr">
		  		<el-input
		  			size="mini"
					  placeholder="请输入渠道名称"
					  v-model="qdstr"
					  clearable>
					</el-input>
		  	</div>
		  </div>
		  <div slot="footer" class="dialog-footer">
		    <el-button size="mini" @click="dialogFormVisible1 = false">取 消</el-button>
		    <el-button size="mini" @click="sendData(1)" type="primary" >确 定</el-button>
		  </div>
		</el-dialog>
  	<div class="aditem textMain h0Title">
  		广告设置
  	</div>
  	<div class="aditem">
  		<el-button type="primary" size="mini" @click="goAdd(1)">新增广告</el-button>
  		<el-button type="primary" size="mini" @click="goAdd(2)">广告列表</el-button>
  	</div>
 		<div class="aditem">
 			<div class="aditeml">
				<div class="aditem">
					<div class="aditeml">
						广告渠道
					</div>
					<div class="aditemr">
						<el-button size="mini" @click="addQd">增加一条</el-button>
						<div v-show="!channelList.length" class="adspan textInfo h4Title">
							暂无数据
						</div>
						<div class="adspan" v-show="channelList.length" v-for="(val,indexs) in channelList" :key="indexs">
							<span class="textMain h3Title">{{indexs+1}}、</span>
							<span class="textMain h3Title">{{val.name}}</span>
							<el-button  size="mini" type="text" @click="delItem(val.adId,indexs,1)">删除</el-button>
						</div>
					</div>
				</div>
 			</div>
 			<div class="aditemr">
 				<div class="aditem">
					<div class="aditeml">
						投放范围
					</div>
					<div class="aditemr">
						<el-button size="mini" @click="addFw">增加一条</el-button>
						<div v-show="!checkboxList.length" class="adspan textInfo h4Title">
							暂无数据
						</div>
						<div class="adspan" v-show="checkboxList.length" v-for="(item,index) in checkboxList" :key="index">
							<span class="textMain h3Title">{{index+1}}、</span>
							<span class="textMain h3Title">{{item.name}}</span>
							<el-button  size="mini" type="text">参数</el-button>
							<el-button  size="mini" type="text" @click="delItem(item.adId,index,0)">删除</el-button>
						</div>
					</div>
				</div>
 			</div>
 		</div>
  </div>
</template>
<script>
import list from './AdvertSet.js';
export default list; 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-select .el-input {
	  width: 110px !important;
	}
	.wrap{
		width:800px;
	}
	.aditem{
		width: 100%;
		display: flex;
		align-items:flex-start;
		min-height: 60px;
	}
	.aditem1{
		width:100%;
		display: flex;
		align-items:center;
		min-height:30px;
	}
	.aditeml,.aditemr{
		display: flex;
		flex-direction: column;
		justify-content:flex-start;
		align-items:flex-start;
		width:50%;
		min-height: 60px;
	}
	.aditeml{
		padding-right: 20px;
		align-items: flex-end;
	}
	.aditem1 .aditemr{
		min-width: 90px;
		min-height:28px !important;
	}
	.aditem1 .aditeml{
		width: 90px;
		min-height:28px !important;
		line-height:28px;
	}
	.adspan{
		padding-top: 15px;
	}
</style>