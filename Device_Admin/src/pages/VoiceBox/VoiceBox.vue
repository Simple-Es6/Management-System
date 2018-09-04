<template>
  <div>
  	<div class="VoiceBox">
			<div class="textMain h0Title">
				音箱列表
			</div>
			<div class="voicetime">
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
			</div>
			<div class="searchDiv">
				<el-input placeholder="请输入内容" size="small" v-model="searchStr" class="input-with-select">
			    <el-select v-model="select" slot="prepend" placeholder="请选择">
			      <el-option label="手机号码" value="1"></el-option>
			      <el-option label="SN机器码" value="2"></el-option>
			    </el-select>
			    <el-button slot="append" icon="el-icon-search">查询</el-button>
			  </el-input>
			</div>
		</div>
		<div class="dataDiv">
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
		      prop="date"
		      label="时间"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="设备名称"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="SN机器码"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="MAC地址"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="黑珍珠数量"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="绑定手机号"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="节点存储"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="上网IP"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="所有状态"
		    >
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="操作"
		      column-key="order"
		      :filter-multiple="false"
		      :filters="[{text:'所有状态', value:0}, { text:'播放中', value:1},{ text:'联网中',value:2},{ text:'暂停中',value:3},{ text:'不在线',value:4},{ text:'已听完',value:5},{ text:'未听完',value:6}]"
					:filter-method="filterTag">
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
import list from './VoiceBox.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("./VoiceBox.css");
</style>
