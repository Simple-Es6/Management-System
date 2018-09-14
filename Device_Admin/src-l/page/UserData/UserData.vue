<template>
  <div>
  	<div class="aditemtitle">
  		<div class="textMain h1Title">用户数据</div>
  		<el-button type="danger" size="mini">下载报表</el-button>
  	</div>
  	<div class="aditemtitle">
  		<div class="list">
  			<p class="h3Title textMain">新增用户</p>
  			<p class="h1Title textMain">39000000</p>
  			<p class="h4Title">日<span class="el-icon-arrow-up textDanger"></span>90000%</p>
  		</div>
  		<div class="list">
  			<p class="h3Title textMain">活跃用户</p>
  			<p class="h1Title textMain">39000000</p>
  			<p>日<span class="el-icon-arrow-up textDanger"></span>90000%</p>
  		</div>
  		<div class="list">
  			<p class="h3Title textMain">启动次数</p>
  			<p class="h1Title textMain">39000000</p>
  			<p>日<span class="el-icon-arrow-up textDanger"></span>90000%</p>
  		</div>
  	</div>
		<div class="aditemtab">
			<div class="textMain h1Title">用户趋势</div>
			<el-radio-group v-model="timeType" size="mini">
	      	<el-radio-button label="1">新增用户</el-radio-button>
	      	<el-radio-button label="2">活跃用户</el-radio-button>
	      	<el-radio-button label="3">启动次数</el-radio-button>
			</el-radio-group>
			<el-date-picker
				size="mini"
				value-format="timestamp"
	      v-model="timesdata"
	      type="daterange"
	      range-separator="至"
	      start-placeholder="开始日期"
	      end-placeholder="结束日期">
	    </el-date-picker>
			<el-radio-group v-model="timeType" size="mini">
	      	<el-radio-button label="1">今日</el-radio-button>
	      	<el-radio-button label="2">昨日</el-radio-button>
	      	<el-radio-button label="3">本月</el-radio-button>
	      	<el-radio-button label="4">今年</el-radio-button>
			</el-radio-group>
			
		</div>
		<div ref="recordAxis" class="axisCon"></div>
		<div class="textInfo h3Title textCenter">
			阶段内新增用户3999999
		</div>
		<div class="aditemtitle">
  		<div class="textMain h1Title">详细数据</div>
  	</div>
		<div class="axisCon1">
			<template>
		    <el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="date"
		        label="日期"
		        sortable
		     	>
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="新增用户数"
		        sortable
		      >
		      </el-table-column>
		      <el-table-column
		        prop="address"
		        sortable
		        label="活跃用户数">
		      </el-table-column>
		      <el-table-column
		        prop="name"
		        label="启动次数"
		        sortable
		      >
		      </el-table-column>
		    </el-table>
		  </template>
		</div>
  </div>
</template>
<script>
import list from "./UserData.js";
export default list;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./UserData.css");
</style>
