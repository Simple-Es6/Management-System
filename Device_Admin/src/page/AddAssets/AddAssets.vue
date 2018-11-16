<template>
  <div>
		<input @change="upLoadStart1($event)" id="avatar2" accept="image/jpeg,image/png" class="avatar-img" type="file"  />
 		<div class="additem textMain h0Title" style="line-height:60px;height:60px;">
			{{showType==1?'添加币种':'修改币种'}}
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				币种名称
 			</div>
 			<div class="additemr">
 				<el-input
 					size="mini"
				  placeholder="请输入币种名称"
				  v-model="dataObj.name"
				  clearable>
				</el-input>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				公司名称
 			</div>
 			<div class="additemr">
 				<el-input
 					size="mini"
				  placeholder="请输入公司名称"
				  v-model="dataObj.companyName"
				  clearable>
				</el-input>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				公司logo
 			</div>
 			<div class="additemr">
 				<div class="avatar-uploader">
				 	<label for="avatar2" @click="changeImgType(1)">
				 		<i v-show="!dataObj.companyLogo" class="el-icon-plus avatar-uploader-icon"></i>
				 		<img v-show="dataObj.companyLogo" :src="dataObj.companyLogo" class="avatar">
				 	</label>
				</div>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				背景图片
 			</div>
 			<div class="additemr">
 				<div class="avatar-uploader">
				 	<label for="avatar2" @click="changeImgType(2)">
				 		<i v-show="!dataObj.backgroundUrl" class="el-icon-plus avatar-uploader-icon"></i>
				 		<img v-show="dataObj.backgroundUrl" :src="dataObj.backgroundUrl" class="avatar">
				 	</label>
				</div>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				Api地址
 			</div>
 			<div class="additemr">
 				<el-input
 					size="mini"
				  placeholder="请输入Api地址"
				  v-model="dataObj.apiUrl"
				  clearable>
				</el-input>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				联系电话
 			</div>
 			<div class="additemr">
 				<el-input
 					size="mini"
				  placeholder="请输入联系电话"
				  v-model="dataObj.phone"
				  clearable>
				</el-input>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				Api-Key Token
 			</div>
 			<div class="additemr">
 				<el-input
 					size="mini"
				  placeholder="请输入Api-Key Token"
				  v-model="dataObj.apiKeyToken"
				  clearable>
				</el-input>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				平台投放总量
 			</div>
 			<div class="additemr">
 				<el-input-number size="mini" v-model="dataObj.totalAmount" :min="1"  label="请输入平台投放总量"></el-input-number>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				最小提币数
 			</div>
 			<div class="additemr">
 				<el-input-number size="mini" v-model="dataObj.minNumber" :min="1"  label="请输入最小提币数"></el-input-number>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				手续费
 			</div>
 			<div class="additemr">
 				<el-input-number size="mini" v-model="dataObj.handlingFee" :min="0"  label="请输入手续费"></el-input-number>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				存放地址
 			</div>
 			<div class="additemr">
 				<el-input
 					size="mini"
				  placeholder="请输入手续费存放地址"
				  v-model="dataObj.storageAddress"
				  clearable>
				</el-input>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				发放规则
 			</div>
 			<div class="additemr">
				<div class="additem1">
					<div class="additem">
						<div class="additeml">
			 				每台音响释放总数
			 			</div>
						<div class="additemr">
 							<el-input-number size="mini" v-model="dataObj.xwTotal" :min="0"  label="请输入每台音响释放总数"></el-input-number>
 							<span>个</span>
						</div>
					</div>
					<div class="additem">
						<div class="additeml">
			 				听完所有星歌获得数量
			 			</div>
						<div class="additemr">
							<el-input-number size="mini" v-model="dataObj.smCount" :min="0"  label="请输入听完所有星歌获得数量"></el-input-number>
							<span>个</span>
						</div>
					</div>
					<div class="additem">
						<div class="additeml">
			 				解锁预计完成天数
			 			</div>
						<div class="additemr">
							<span v-show="dataObj.smCount<=0">暂无</span>
							<span v-show="dataObj.smCount>0">{{Math.ceil(dataObj.xwTotal/dataObj.smCount)}}</span>
							<span v-show="dataObj.smCount>0">天</span>
						</div>
					</div>
					<div class="additem">
						<div class="additeml">
			 				听完星歌数≥
			 			</div>
						<div class="additemr">
							<el-input-number size="mini" v-model="dataObj.smNumber" :min="0"  label="请输入星歌数"></el-input-number>
							<span>首时获得</span>
						</div>
					</div>
				</div>
 			</div>
 		</div>
 		<div class="additem">
			<div class="additeml">
 				币种描述
 			</div>
			<div class="additemr">
				<el-input
				  type="textarea"
				  :rows="3"
				  placeholder="请输入币种描述"
				  v-model="dataObj.description">
				</el-input>
			</div>
		</div>
 		<div class="additem" style="margin-top: 40px;">
 			<el-button size="mini" @click="back">返回</el-button>
 			<el-button v-show="showType==1" size="mini" type="primary" @click="save(1)">提交创建</el-button>
 			<el-button v-show="showType==2" size="mini" type="primary" @click="save(2)">保存修改</el-button>
 		</div>
  </div>
</template>
<script>
import list from './AddAssets.js';
export default list; 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>	
	.el-select .el-input {
	  width: 110px !important;
	}
	.additem{
		display: flex;
		align-items:flex-start;
		justify-content: flex-start;
		width: 100%;
		min-height: 40px;
	}
	.additem .additeml{
		min-width:140px;
		height: 30px;
		line-height:30px;
		font-size: 16px;
	}
	.additem .additemr{
		min-width:400px;
		line-height:30px;
		padding-bottom:10px;
	}
	.additem1{
		float: right;
	}
	.additem1 .additeml{
		min-width:200px;
	}
	.additem1 .additemr{
		min-width:300px;
	}
	.avatar-uploader{
		float: left;
		width:200px;
		height:200px;
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
	}
	.avatar-uploader:hover{
		border: 1px dashed #409EFF;
	}
	.avatar-uploader:hover i{
		color: #409EFF;
	}
	.avatar-uploader label{
		display: block;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width:100%;
		height:100%;
		line-height:200px !important;
		text-align: center;
	}
	.avatar {
	    width:100%;
	  	height:100%;
	  	object-fit: contain;
	  	display: block;
	}
	input{
		display: none;
	}
</style>