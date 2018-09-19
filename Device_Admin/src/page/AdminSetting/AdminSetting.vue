<template>
  <div>
  	<div class="boxset">
  		<div class="boxtitle">
  			分贝奖励
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					用户注册获得分贝
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.allBlackPearl"></el-input-number>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					用户评论获得分贝
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  			<div class="boxitemcen">
  				<p class="textInfo h4Title">当天最大值</p>
  			</div>
  			<div class="boxitemright">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					用户点赞获得分贝
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  			<div class="boxitemcen">
  				<p class="textInfo h4Title">当天最大值</p>
  			</div>
  			<div class="boxitemright">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					用户转发获得分贝
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  			<div class="boxitemcen">
  				<p class="textInfo h4Title">当天最大值</p>
  			</div>
  			<div class="boxitemright">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					用户喜欢获得分贝
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  			<div class="boxitemcen">
  				<p class="textInfo h4Title">当天最大值</p>
  			</div>
  			<div class="boxitemright">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  		</div>
  		<div class="boxitem">
  			<div class="boxitemleft">
  				<p class="textMain h2Title">
  					每天APP听星歌得分贝
  				</p>
  			</div>
  			<div class="boxitemcen">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  			<div class="boxitemcen">
  				<p class="textInfo h4Title">当天最大值</p>
  			</div>
  			<div class="boxitemright">
  				<el-input-number size="mini" v-model="dataObj.complete"></el-input-number>
  			</div>
  		</div>
  	</div>
  	<el-button type="primary" @click="subMit">提交</el-button>
  </div>
</template>
<script>
import list from './AdminSetting.js';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./AdminSetting.css");
</style>
