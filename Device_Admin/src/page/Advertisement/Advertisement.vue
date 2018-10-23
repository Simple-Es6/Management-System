<template>
  <div>
 		<el-row type="flex"  justify="center" :gutter="30">
 			<el-col  :span="8">
 				<el-radio-group v-model="userradio" size="mini" @change="tabclick">
			      	<el-radio-button label="0" >所有广告</el-radio-button>
			      	<el-radio-button label="1">正常广告</el-radio-button>
			      	<el-radio-button label="2">失效广告</el-radio-button>
			      	<el-radio-button label="3">禁用广告</el-radio-button>
			      	<!--<el-radio-button label="3"></el-radio-button>-->
			    </el-radio-group>
			</el-col>
			<el-col  :span="6">
				<el-button type="primary" size="mini" @click="goAdd(0)">新增广告</el-button>
  			<el-button type="primary" size="mini" @click="goSet">广告设置</el-button>
			</el-col>
			<el-col  :span="9">
			  <el-input size="mini" placeholder="请输入广告账号或昵称" @keyup.enter.native="search"  clearable v-model="userinput" class="input-with-select">
			    	<el-select v-model="selectOption" slot="prepend" placeholder="请选择">
				      	<el-option label="广告名称" value="1"></el-option>
				    </el-select>
				    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
				</el-input>
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
				      	label="广告名称"
				      	prop="name"
				      	width="80">
				    </el-table-column>
				    <el-table-column
				      	prop="channelStr"
				      	label="广告渠道">
				    </el-table-column>
				    <el-table-column
				      label="显示范围"
				      width="200"
				    >
				    	<template slot-scope="scope">
				    		<span v-for="(val,indexs) in scope.row.displayRangeStrList" :key="indexs">
				    			<span v-show="indexs!=0">-</span>
				    			{{val}}
				    		</span>
				    	</template>	
				    </el-table-column>
				    <el-table-column
				      label="是否限时">
				    	<template slot-scope="scope">
				    		{{scope.row.timeLimit==0?'不限时':'限制时间'}}
				    	</template>	
				    </el-table-column>
				    <el-table-column
				      label="创建时间">
				      <template slot-scope="scope">{{Global.oTime(scope.row.createTime)}}</template>
				    </el-table-column>
				    <el-table-column
				      label="开始时间">
				      <template slot-scope="scope">{{scope.row.startTime?Global.oTime(scope.row.startTime):'无'}}</template>
				    </el-table-column>
				    <el-table-column
				      label="结束时间">
				      <template slot-scope="scope">{{scope.row.endTime?Global.oTime(scope.row.endTime):'无'}}</template>
				    </el-table-column>
				    <el-table-column
				      	prop="clickCount"
				      	label="点击量">
				    </el-table-column>
				    <el-table-column
				      label="app显示">
				    	<template slot-scope="scope">
				    		{{scope.row.appShow==0?'每次启动':'每天只显示一次'}}
				    	</template>	
				    </el-table-column>
				    <el-table-column
				      	label="广告状态">
				      <template slot-scope="scope"><p>{{scope.row.disable==2?'正常广告':'禁用广告'}}</p></template>	
				    </el-table-column>
				    <el-table-column
				      label="操作"
				    	width="230">
							<template slot-scope="scope">
								<el-button @click="goAdd(scope.row.adId)" size="mini">修改</el-button>
								<el-button v-show="scope.row.isDisable==1" size="mini" @click="disabled(scope.row,scope.$index)" type="success">启用</el-button>
								<el-button v-show="scope.row.isDisable==0" @click="disabled(scope.row,scope.$index)" size="mini" type="warning">禁用</el-button>
								<el-button @click="delectUser(scope.row,scope.$index)" size="mini" type="danger">删除</el-button>
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
import list from './Advertisement.js';
export default list; 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-select .el-input {
	  width: 110px !important;
	}
	
</style>