<template>
  <div>
  	<div class="VoiceBox">
			<div class="textMain h0Title">
				黑珍珠明细
			</div>
			<div class="textInfo h2Title" v-if="showType==1||showType==3">
				设备名称:<span class="textDanger" style="margin-right: 20px;">{{deviceName}}</span>获得黑珍珠数:<span class="textDanger">{{allBp}}</span>
			</div>
			<div class="textInfo h2Title" v-else>
				手机号:<span class="textDanger" style="margin-right: 20px;">{{timeStart}}</span>
				获得黑珍珠数:<span class="textDanger" style="margin-right: 20px;">{{allBp}}</span>
				音箱数量:<span class="textDanger" style="margin-right: 20px;">{{xwCount}}</span>
			</div>
			<div class="searchDiv" v-show="showType==1">
				<el-input placeholder="请输入内容" size="small" @keyup.enter.native="searchbtn"  v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="手机号码" value="1"></el-option>
			      <el-option label="SN机器码" value="2"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search" @click="searchbtn">查询</el-button>
			  </el-input>
			</div>
			<div class="searchDiv" v-show="showType==2">
				<el-input placeholder="请输入内容" size="small" @keyup.enter.native="searchbtn"  v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="SN机器码" value="1"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search" @click="searchbtn">查询</el-button>
			  </el-input>
			</div>
			<div class="searchDiv" v-show="showType==3">
				<el-input placeholder="请输入内容" size="small" @keyup.enter.native="searchbtn"  v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="手机号码" value="1"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search" @click="searchbtn">查询</el-button>
			  </el-input>
			</div>
		</div>
		<div class="dataDiv" v-if="showType==1">
			<el-table
				size="mini"
		    :data="tableData"
		    style="width: 100%">
		    <el-table-column
	      	type="selection"
	      	width="55">
		    </el-table-column>
		    <el-table-column
		      label="播放时间"
		    >
		    	<template slot-scope="scope">{{Global.oTime(scope.row.allocationTime)}}</template>
		    </el-table-column>
		    <el-table-column
		      prop="bp"
		      sortable
		      label="黑珍珠数量"
		    >
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
		      prop="mac"
		      label="Mac地址"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="snCode"
		      label="SN码"
		    >
		    </el-table-column>
		 	</el-table>
		</div>
		<div class="dataDiv" v-else-if="showType==2">
			<el-table
				size="mini"
		    :data="tableData2"
		    style="width: 100%">
		    <el-table-column
		      label="播放时间"
		    >
		    	<template slot-scope="scope">{{Global.oTime(scope.row.allocationTime)}}</template>
		    </el-table-column>
		    <el-table-column
		      prop="bp"
		      sortable
		      label="黑珍珠数量"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="deviceName"
		      label="设备名称"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="mac"
		      label="mac地址"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="snCode"
		      label="SN码"
		    >
		    </el-table-column>
		 	</el-table>
		</div>
		<div class="dataDiv" v-else>
			<el-table
				size="mini"
		    :data="tableData3"
		    style="width: 100%">
		    <el-table-column
		      label="播放时间"
		    >
		    	<template slot-scope="scope">{{Global.oTime(scope.row.allocationTime)}}</template>
		    </el-table-column>
		    <el-table-column
		      prop="bp"
		      sortable
		      label="黑珍珠数量"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="bindingPhone"
		      label="绑定手机号"
		    >
		    </el-table-column>
		 	</el-table>
		</div>
		<div class="botAdmin">
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
import list from './DetailsDay.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./DetailsDay.css");
</style>
