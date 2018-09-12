<template>
  <div>
  	<div class="aditemtitle">
  		<div class="textMain h1Title">访问量数据</div>
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
		<div class="axisCon3">
			<div ref="regionAxis" class="axisCon2"></div>
			<div ref="playbackAxis" class="axisConitem"></div>
		</div>
  </div>
</template>
<script>
import list from "./AccessData.js";
export default list;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./AccessData.css");
</style>
