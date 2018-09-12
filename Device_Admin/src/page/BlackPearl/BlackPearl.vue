<template>
  <div>
  	<div class="VoiceBox">
			<div class="textMain h0Title">
				黑珍珠明细
			</div>
			<div>
				<span class="textMain" style="padding-right:100px;">释放黑珍珠总数:{{allBp}}</span>
				<el-radio-group v-model="radioType" size="small" @change="changeRadio">
		      <el-radio-button label="1">黑珍珠明细</el-radio-button>
		      <el-radio-button label="2">用户排行</el-radio-button>
		      <el-radio-button label="3">音箱排行</el-radio-button>
		   	</el-radio-group>
			</div>
			<div class="voicetime" v-show="radioType==1">
				<el-date-picker
					size="small"
					clearable
					@change="timeStartEnd"
		      v-model="timeStart"
		      type="daterange"
		      value-format="timestamp"
		      range-separator="-"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期">
		    </el-date-picker>
		    <el-button size="small" slot="append" icon="el-icon-search">查询</el-button>
			</div>	
			<div class="searchDiv" v-show="radioType==2">
				<el-input placeholder="请输入内容" size="small" @keyup.enter.native="searchbtn"  v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="手机号码" value="1"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search" @click="searchbtn">查询</el-button>
			  </el-input>
			</div>
			<div class="searchDiv" v-show="radioType==3">
				<el-input placeholder="请输入内容" size="small" @keyup.enter.native="searchbtn"  v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="SN机器码" value="2"></el-option>
			      <el-option label="手机号码" value="1"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search" @click="searchbtn">查询</el-button>
			  </el-input>
			</div>
		</div>
		<div class="dataDiv" v-show="radioType==1">
				<el-table
			    :data="tableData"
			    @filter-change="handleFilterChange"
			    @selection-change="handleSelectionChange"
			    style="width: 100%">
			    <el-table-column
		      	type="selection"
		      	width="55">
			    </el-table-column>
			    <el-table-column
			    	sortable
			    	prop="allocationTime"
			      label="发放时间"
			    >
			    	<template slot-scope="scope">{{Global.oTime(scope.row.allocationTime)}}</template>
			    </el-table-column>
			    <el-table-column
			    	sortable
			      prop="sameDayBp"
			      label="当天黑珍珠数"
			    >
			    </el-table-column>
			    <el-table-column
			    	sortable
			      prop="sameDayXwCount"
			      label="当天音箱数"
			    >
			    </el-table-column>
			    <el-table-column
			    	sortable
			      prop="userCount"
			      label="当天用户数"
			    >
			    </el-table-column>
			    <el-table-column
			      label="操作"
			    >
			    	<template slot-scope="scope">
			    		<el-button type="primary" size="mini" @click="goDetails(scope.row.allocationTime,1)">详情</el-button>
			    		<!--{{Global.oTime(scope.row.allocationTime)}}-->
			    	</template>
			    </el-table-column>
			 	</el-table>
		</div>
		<div class="dataDiv" v-show="radioType==2">
			 	<el-table
			    :data="tableData2"
			    style="width: 100%">
			    <el-table-column
		      	label="排行"
		     	>
		      	<template slot-scope="scope">{{(scope.$index+1)}}</template>
			    </el-table-column>
			    <el-table-column
			    	sortable
			    	prop="allocationTime"
			      label="发放时间"
			    >
			    	<template slot-scope="scope">{{Global.oTime(scope.row.allocationTime)}}</template>
			    </el-table-column>
			    <el-table-column
			    	sortable
			      prop="sameDayBp"
			      label="当天黑珍珠数"
			    >
			    </el-table-column>
			    <el-table-column
			    	sortable
			      prop="sameDayXwCount"
			      label="当天音箱数"
			    >
			    </el-table-column>
			    <el-table-column
			    	sortable
			      prop="userCount"
			      label="当天用户数"
			    >
			    </el-table-column>
			    <el-table-column
			      label="操作"
			    >
			    	<template slot-scope="scope">
			    		<el-button type="primary" size="mini">详情</el-button>
			    		<!--{{Global.oTime(scope.row.allocationTime)}}-->
			    	</template>
			    </el-table-column>
			 	</el-table>
		 	</div>
		 	<div class="dataDiv" v-show="radioType==3">
			 	<el-table
			    :data="tableData3"
			    style="width: 100%">
			    <el-table-column
			      label="排行"
			    >
			    	<template slot-scope="scope"><span class="textDanger">{{(scope.$index+1)}}</span></template>
			    </el-table-column>
			    <el-table-column
			      prop="bindingPhone"
			      label="绑定手机号"
			    >
			    </el-table-column>
			    <el-table-column
			      prop="deviceName"
			      label="设备名称"
			    >
			    </el-table-column>
			    <el-table-column
			      prop="snCode"
			      label="SN机器码"
			    >
			    </el-table-column>
			    <el-table-column
			      prop="snCode"
			      label="mac地址"
			    >
			    </el-table-column>
			    <el-table-column
			    	sortable
			      prop="currentBp"
			      label="当天获得黑珍珠数"
			    >
			    </el-table-column>
			    <el-table-column
			      prop="bp"
			      sortable
			      label="获得黑珍珠总数"
			    >
			    </el-table-column>
			    <el-table-column
			      label="操作"
			    >
			    	<template slot-scope="scope">
			    		<el-button type="primary" size="mini" @click="goDetails(scope.row.mac,3)">详情</el-button>
			    		<!--{{Global.oTime(scope.row.allocationTime)}}-->
			    	</template>
			    </el-table-column>
			 	</el-table>
		</div>
		<div class="botAdmin">
			<div class="btn">
				<!--<el-button-group>
					<el-button type="primary" size="mini" @click="invertselect(tableData)">反选</el-button>
					<el-button type="danger" size="mini">删除</el-button>
				</el-button-group>-->
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
import list from './BlackPearl.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("./BlackPearl.css");
</style>
