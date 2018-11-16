<template>
  <div>
 		<el-row type="flex"  justify="center" :gutter="30">
 			<el-col  :span="8">
 				<el-radio-group v-model="userradio" size="mini" @change="tabclick">
			      	<el-radio-button label="2" >全部币种</el-radio-button>
			      	<el-radio-button label="0">启用币种</el-radio-button>
			      	<el-radio-button label="1">禁用币种</el-radio-button>
			      	<!--<el-radio-button label="3"></el-radio-button>-->
			    </el-radio-group>
			</el-col>
			<el-col  :span="6">
				<el-button type="primary" size="mini" @click="goAdd(0)">新增币种</el-button>
  			<!--<el-button type="primary" size="mini" @click="goSet">广告设置</el-button>-->
			</el-col>
			<el-col  :span="9">
				<div class="inputwrap">
				  <el-input size="mini" placeholder="请输入币种名称" @keyup.enter.native="search"  clearable v-model="userinput" class="input-with-select">
				    	<el-select v-model="selectOption" slot="prepend" placeholder="请选择">
					      	<el-option label="币种名称" value="1"></el-option>
					    </el-select>
					    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
					</el-input>
				</div>
 			</el-col>
		</el-row>	
		<el-row type="flex"  justify="center" :gutter="30">
 			<el-col  :span="23">
 				<el-table
 					ref="multipleTable"
				    :data="tableData"
				    tooltip-effect="dark"
				    style="width: 100%"
				    @selection-change="handleSelectionChange">
				    <el-table-column
				      	type="selection"
				      	width="55">
				    </el-table-column>
				    <el-table-column
				      label="币种名称"
				      prop="name"
				    >
				    </el-table-column>
				    <el-table-column
				    	prop="companyName"
				      label="公司名称"
				    >
				    </el-table-column>
				    <el-table-column
				      label="logo">
				    	<template slot-scope="scope">
				    		<img class="logoImg" :src="scope.row.companyLogo"/>
				    	</template>	
				    </el-table-column>
				    <el-table-column
				    	prop="totalAmount"
				      label="平台发放总量"
				    >
				    </el-table-column>
				    <el-table-column
				    	prop="companyName"
				      label="已发放"
				    >
				    </el-table-column>
				    <el-table-column
				      label="剩余量">
				      <template slot-scope="scope">{{Global.oTime(scope.row.createTime)}}</template>
				    </el-table-column>
				    <el-table-column
				    	prop="handlingFee"
				      label="手续费">
				    </el-table-column>
				    <el-table-column
				    	prop="phone"
				      label="联系电话"
				    	width="120">
				    </el-table-column>
				    <el-table-column
				      	label="状态">
				      <template slot-scope="scope">{{scope.row.isEnable==0?'启用':'禁用'}}</template>	
				    </el-table-column>
				    <el-table-column
				      label="操作"
				    	width="290">
							<template slot-scope="scope">
								<el-button @click="goAdd(scope.row.cId)" size="mini">修改</el-button>
								<el-button v-show="scope.row.isEnable==1" size="mini" @click="disabled(scope.row,scope.$index)" type="success">启用</el-button>
								<el-button v-show="scope.row.isEnable==0" @click="disabled(scope.row,scope.$index)" size="mini" type="warning">禁用</el-button>
							</template>
				    </el-table-column>
				</el-table>
 			</el-col>
		</el-row>
		<el-row type="flex"  justify="center" :gutter="30" style="margin-top: 30px;">
 			 <el-col :span="10">
 				<el-button-group>
					<el-button type="primary" size="mini" @click="invertselect(tableData)">反选</el-button>
					<!--<el-button @click="disableds" type="warning" size="mini">禁用/启用</el-button>-->
					<el-button @click="delectUsers" type="danger" size="mini">删除</el-button>
				</el-button-group>
 			</el-col>
 			<el-col :span="13">
 				<el-pagination
		      	@size-change="handleSizeChange"
		      	@current-change="handleCurrentChange"
		      	:current-page="currentPage"
		      	:page-sizes="[10,20,30,40,50,100,200]"
		      	:page-size="pageSize"
		      	layout="total, sizes, prev, pager, next, jumper"
		      	:total="totals">
		    </el-pagination>
 			</el-col>
		</el-row>
  </div>
</template>
<script>
import list from './AssetsList.js';
export default list; 
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.inputwrap .el-select{
	  width: 110px !important;
	}
	.logoImg{
		border-radius:50%;
		width:40px;
		height:40px;
		object-fit: contain;
	}
	.aditem1{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 400px;
	}
	.aditem1>div{
		width: 100%;
		height: 380px;
		overflow-y:auto;
	}
	.aditem1 img{
		width: auto;
		height:360px;
	}
</style>