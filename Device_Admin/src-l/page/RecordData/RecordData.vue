<template>
  <div>
  	<div class="aditemtitle textMain h1Title">趋势分析</div>
		<div class="aditemtab">
			<el-radio-group v-model="timeType" size="mini">
	      	<el-radio-button label="1">今日</el-radio-button>
	      	<el-radio-button label="2">昨日</el-radio-button>
	      	<el-radio-button label="3">本月</el-radio-button>
	      	<el-radio-button label="4">今年</el-radio-button>
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
		</div>
		<div class="aditemtab1">
			<div class="list">
				<p class="textInfo h4Title">浏览量pv</p>
				<p class="textMain h1Title">7999</p>
			</div>
			<div class="list">
				<p class="textInfo h4Title">独立访问数uv</p>
				<p class="textMain h1Title">7999</p>
			</div>
			<div class="list">
				<p class="textInfo h4Title">IP数</p>
				<p class="textMain h1Title">7999</p>
			</div>
		</div>
		<div ref="recordAxis" class="axisCon"></div>
		<div class="axisCon1">
			<div class="axisItem axisItem1">
				<div class="list">时段</div>
				<div class="list">浏览量pv</div>
				<div class="list">独立访问数uv</div>
				<div class="list">IP数</div>
			</div>
			<div class="axisItem">
				<div class="list">00:00-00:59</div>
				<div class="list">123</div>
				<div class="list">456</div>
				<div class="list">789</div>
			</div>
		</div>
  </div>
</template>
<script>
import list from "./RecordData.js";
export default list;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./RecordData.css");
</style>
