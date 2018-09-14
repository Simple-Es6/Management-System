<template>
  <div>
  	<div class="VoiceBox">
			<div class="textMain h0Title">
				SN管理
			</div>
			<div class="voicetime">
				<el-date-picker
					size="small"
					clearable
					@change="timeStartEnd"
		      v-model="timeStart"
		      type="daterange"
		     	value-format="yyyy-MM-dd"
		      range-separator="-"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期">
		    </el-date-picker>
			</div>
			<div class="searchDiv">
				<el-input placeholder="请输入内容" size="small" @keyup.enter.native="searchbtn"  v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="手机号码" value="1"></el-option>
			      <el-option label="SN机器码" value="2"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search" @click="searchbtn">查询</el-button>
			  </el-input>
			</div>
		</div>
		<div class="dataDiv">
			<el-table
				size="mini"
				ref="multipleTable"
		    :data="tableData"
		    @filter-change="handleFilterChange"
		    @selection-change="handleSelectionChange"
		    style="width: 100%">
		    <el-table-column
	      	type="selection"
	      	width="55">
		    </el-table-column>
		    <el-table-column
		      label="播放时间"
		    >
		    	<template slot-scope="scope">{{Global.oTime(scope.row.createTime)}}</template>
		    </el-table-column>
		    <el-table-column
		      prop="deviceName"
		      label="设备名称"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="snCode"
		      label="sn机器码"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="mac"
		      label="Mac地址"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="bindingPhone"
		      label="绑定手机号"
		    >
		    </el-table-column>
		    <el-table-column
		      label="绑定时间"
		    >
		    	<template slot-scope="scope">{{scope.row.bindingTime?Global.oTime(scope.row.bindingTime):''}}</template>
		    </el-table-column>
		    <el-table-column
		      prop="bindingState"
		      label="绑定状态"
		      column-key="order"
		      :filter-multiple="false"
		      :filters="[{text:'已绑定',value:1},{text:'未绑定',value:0}]"
					:filter-method="filterTag">
					<template slot-scope="scope">{{scope.row.bindingState==0?'未绑定':'已绑定'}}</template>
		    </el-table-column>
		 	</el-table>
		</div>
		<div class="botAdmin">
			<div class="btn">
				<el-button-group>
					<el-button type="primary" size="mini" @click="invertselect(tableData)">反选</el-button>
					<el-button type="danger" size="mini">删除</el-button>
				</el-button-group>
			</div>
			<div class="paginat">
				<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[10,100, 200, 300, 400]"
		      :page-size="pageSize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="totals">
		    </el-pagination>
			</div>
		</div>
  </div>
</template>
<script>
import list from './SnAdmin.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("./SnAdmin.css");
</style>
