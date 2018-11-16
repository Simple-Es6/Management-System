<template>
  <div>
  	<!--曲库管理-->
  	<el-row type="flex"  justify="center" :gutter="30">
 			<el-col  :span="6">
 				<span class="h0Title textMain">标签管理</span>
 			</el-col>
 			<el-col  :span="10">
 				<el-input placeholder="请输入标签名" clearable v-model="userinput">
				    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
				</el-input>
 			</el-col>
 			<el-col  :span="4"></el-col>
 			<el-col  :span="2">
 				<el-button type="primary" @click="showBox">添加标签</el-button>
 			</el-col>
		</el-row>
		<el-row type="flex"  justify="center" :gutter="30">
 			<el-col  :span="22">
 				<el-table
 					size="mini"
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      type="index"
			      label="序号">
			    </el-table-column>
			    <el-table-column
			      label="标签名称">
			      <template slot-scope="scope"><img src=""/></template>	
			    </el-table-column>
			    <el-table-column
			      prop="date"
			      label="标签提示">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="添加时间">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="包含音乐">
			    </el-table-column>
			    <el-table-column
			      label="操作">
			      <template slot-scope="scope">
			      	<el-button type="text">禁用</el-button>
			      	<el-button type="text">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
 			</el-col>
		</el-row>
		<div class="msyBox" v-show="msyBox">
  		<div class="boxCon">
  			<div @click="showBox" class="closeBtn textInfo"><i class="el-icon-close"></i></div>
  			<div class="boxTitle h0Title textMain">添加标签</div>
  			<input type="file" accept="audio/x-pn/realaudio,audio/x-waw,audio/x-aiff,audio/basic,audio/x-mpeg" id="musicinput" />
				<input type="file" id="lrcinput" />
  			<div class="mitem h2Title textMain">
  				<div class="lmitem">
  					标签名称
  				</div>
  				<div class="rmitem">
  					<el-input v-model="tagname" placeholder="请填写标签名称"></el-input>
  				</div>
  			</div>
  			<div class="mitem h2Title textMain" >
  				<div class="lmitem">
  					标签提示
  				</div>
  				<div class="rmitem">
  					<el-input v-model="tagtip" placeholder="请填写标签提示"></el-input>
  				</div>
  			</div>
  			<div class="mitem" style="margin: 40px 0;">
  				<el-button  :loading="btnLoad" @click="submitClick" style="width: 100%;" type="success">确认提交</el-button>
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'LabelManagement',
  data () {
    return {
    	tableData:[],
    	btnLoad:false,
    	tagname:'',
    	tagtip:'',
      userinput:'',
      msyBox:false
    }
  },
  methods:{
  	search(){
  		
  	},
  	submitClick(){
  		
  	},
  	showBox(){
  		this.msyBox = !this.msyBox;
  	},
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-select .el-input {
	    width: 110px !important;
	}
	.msyBox{
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	.msyBox .boxCon{
		position: relative;
		width:600px;
		height:auto;
		padding:0 30px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow: hidden;
    backface-visibility: hidden;	
	}
	.msyBox .boxCon .boxTitle{
		width:100%;
		height:60px;
		line-height:60px;
		text-align: center;
	}
	.closeBtn{
		margin-right: -30px;
		float: right;
		cursor: pointer;
		width:40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
	}
	.closeBtn:hover{
		color: #409EFF;
	}
	.upload-demo{
		width: 100%;
		height:180px;
	}
	.avatar-uploader{
		width: 100%;
		height:178px;
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
		width: 100% !important;
		height: 100% !important;
		background:rgba(0,0,0,0) !important;
		cursor: pointer;
	}
	.avatar-uploader-icon {
  	font-size: 28px;
  	color: #8c939d;
  	width:100%;
  	height:178px;
  	line-height:178px;
  	text-align: center;
	}
	.avatar {
	  width:100%;
	  height:180px;
	  display: block;
	}
	input{
		display: none;
	}
	.msyBox .mitem{
		margin-bottom: 20px;
		display: flex;
		
	}
	.msyBox .mitem .lmitem{
		flex-shrink: 0;
		width: 20%;
	}
	.msyBox .mitem .rmitem label{
		display: inline-block;
		cursor: pointer;
		width: 100px;
		height: 32px;
		background: #67C23A;
		border-radius: 3px;
		text-align: center;
		line-height: 32px;
		color: #FFFFFF;
		font-size: 14px;
	}
	.msyBox .mitem .rmitem{
		flex-shrink: 0;
		width: 80%;
		
	}
</style>
