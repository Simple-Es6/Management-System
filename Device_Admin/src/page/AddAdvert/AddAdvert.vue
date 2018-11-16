<template>
  <div>
		<input @change="upLoadStart1($event)" id="avatar2" accept="image/jpeg,image/png" class="avatar-img" type="file"  />
 		<div class="additem textMain h0Title" style="line-height:60px;height:60px;">
			{{showType==1?'广告添加':'修改广告'}}
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				广告名称
 			</div>
 			<div class="additemr">
 				<el-input
 					size="mini"
				  placeholder="请输入广告名称"
				  v-model="dataObj.name"
				  clearable>
				</el-input>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				APP显示
 			</div>
 			<div class="additemr">
 				<el-radio-group size="mini" v-model="dataObj.appShow">
			    <el-radio :label="0">每次启动</el-radio>
			    <el-radio :label="1">每天只显示一次</el-radio>
			  </el-radio-group>
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				时间限制
 			</div>
 			<div class="additemr">
 				<el-radio-group size="mini" v-model="dataObj.timeLimit">
			    <el-radio :label="0">永不过期</el-radio>
			    <el-radio :label="1">在选定的时间内</el-radio>
			  </el-radio-group>
 			</div>
 		</div>
 		<div class="additem" v-show="dataObj.timeLimit==1">
 			<div class="additeml">
 				选择时间
 			</div>
 			<div class="additemr">
 				<span>从</span>
		    <el-date-picker
		    	size="mini"
		      v-model="dataObj.startTime"
		      type="datetime"
		      placeholder="选择开始的日期时间">
		    </el-date-picker>
		    <span>到</span>
		    <el-date-picker
		    	size="mini"
		      v-model="dataObj.endTime"
		      type="datetime"
		      placeholder="选择结束的日期时间">
		    </el-date-picker>
 			</div>
 		</div>
 		
 		<div class="additem">
 			<div class="additeml">
 				显示范围
 			</div>
 			<div class="additemr">
 				<el-checkbox-group size="mini" v-model="dataObj.dRValueList">
			    <el-checkbox  v-for="check in checkboxList" :label="check.value"  :key="check.adId">{{check.name}}</el-checkbox>
			    <el-checkbox  :label="6" @change="starChange">星球首页</el-checkbox>
			  </el-checkbox-group>
			  <!--<el-checkbox-group v-model="starPage">
			    <el-checkbox  :label="6">星球首页</el-checkbox>
			  </el-checkbox-group>-->
 			</div>
 		</div>
 		<div class="additem" v-show="starPage">
 			<div class="additeml">
 				显示星球
 			</div>
 			<div class="additemr">
 				<el-checkbox-group size="mini" v-model="dataObj.plantIdList">
			    <el-checkbox  
			    	v-for="item in channelList"
			      :key="item.planetId"
			      :label="item.planetId">{{item.planetName}}</el-checkbox>
			  </el-checkbox-group>
 				<!--<el-select size="mini" v-model="dataObj.channel" placeholder="请选择">
			    <el-option
			      v-for="item in channelList"
			      :key="item.planetId"
			      :label="item.planetName"
			      :value="item.planetId">
			    </el-option>
			  </el-select>-->
 			</div>
 		</div>
 		<div class="additem">
 			<div class="additeml">
 				广告内容
 			</div>
 			<div class="additemr">
 				<el-radio-group size="mini" v-model="dataObj.contentType">
			    <el-radio :label="0">代码</el-radio>
			    <el-radio :label="1">图片</el-radio>
			  </el-radio-group>
 			</div>
 		</div>
 		<div class="additem" v-show="dataObj.contentType==0">
 			<div class="additeml">
 				广告代码
 			</div>
 			<div class="additemr">
 				<el-input
				  type="textarea"
				  :rows="5"
				  placeholder="请填写广告代码，支持html代码"
				  v-model="dataObj.codeContent">
				</el-input>
 			</div>
 		</div>
 		<div class="additem" v-show="dataObj.contentType==1">
 			<div class="additeml">
 				广告图片
 			</div>
 			<div class="additemr">
 				<div class="avatar-uploader">
				 	<label for="avatar2">
				 		<i v-show="!dataObj.picPath" class="el-icon-plus avatar-uploader-icon"></i>
				 		<img v-show="dataObj.picPath" :src="dataObj.picPath" class="avatar">
				 	</label>
				</div>
				<div class="additem1">
					<div class="additem">
						<div class="additeml">
			 				链接图片
			 			</div>
						<div class="additemr">
							<el-input
			 					size="mini"
			 					@change="regUrl"
							  placeholder="请输入广告链接"
							  v-model="dataObj.picBic"
							  clearable>
							</el-input>
							<el-button style="float: right;margin-top: 10px;" size="mini"  @click="goUrl">跳转</el-button>
						</div>
					</div>
					<div class="additem">
						<div class="additeml">
			 				图片宽度
			 			</div>
						<div class="additemr">
							<el-input
			 					size="mini"
								:disabled="true"
							  v-model="dataObj.picWidth"
							  clearable>
							</el-input>
						</div>
					</div>
					<div class="additem">
						<div class="additeml">
			 				图片高度
			 			</div>
						<div class="additemr">
							<el-input
			 					size="mini"
			 					:disabled="true"
							  v-model="dataObj.picHigh"
							  clearable>
							</el-input>
						</div>
					</div>
					<div class="additem">
						<div class="additeml">
			 				图片描述
			 			</div>
						<div class="additemr">
							<el-input
							  type="textarea"
							  :rows="3"
							  placeholder="显示在图片上面的文字"
							  v-model="dataObj.picDescription">
							</el-input>
						</div>
					</div>
				</div>
 			</div>
 		</div>
 		<div class="additem">
 			<el-button size="mini" @click="back">返回</el-button>
 			<el-button v-show="showType==1" size="mini" type="primary" @click="save(1)">提交创建</el-button>
 			<el-button v-show="showType==2" size="mini" type="primary" @click="save(2)">保存修改</el-button>
 		</div>
  </div>
</template>
<script>
import list from './AddAdvert.js';
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
		min-width:110px;
		height: 30px;
		font-size: 16px;
	}
	.additem .additemr{
		min-width:400px;
		padding-bottom: 20px;
	}
	.additem1{
		float: right;
	}
	.additem1 .additeml{
		padding-left: 30px;
		width:130px;
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