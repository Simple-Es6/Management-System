<template>
  <div>
  	<input @change="upLoadStart($event)" id="avatar2" accept="image/jpeg,image/png" class="avatar-img" type="file"  />
  	<div class="plantitem">
  		<div class="item">
  			<div class="avatarimg"></div>
  			<div class="info">
  				<div class="textMain h3Title">
  					礼品动动
  				</div>
  				<div class="textInfo h4Title">
  					文艺星球星球主
  				</div>
  			</div>
  			<div class="goedit textBlue h3Title">
					个人资料  				
  			</div>
  		</div>
  		<div class="item">
  			<div class="itembig textMain h1Title">
  				总收益折合： ≈ 600CNY
  			</div>
  			<div class="goedit textBlue h3Title">
					个人资料  				
  			</div>
  		</div>
  	</div>
  	<div class="plantTitle">
  		<div class="textMain h2Title">
  			星球信息
  		</div>
  		<div class="goedit textBlue h2Title">
  			编辑星球资料>
  		</div>
  	</div>
  	<div class="plantitem">
  		<div class="item1 item">
  			<div class="avatarimg"></div>
  			<div class="info">
  				<div class="textMain h3Title">
  					礼品动动
  				</div>
  				<div class="textInfo h4Title">
  					文艺星球星球主
  				</div>
  			</div>
  			<div class="info info1" style="border-right:1px solid #8C939D;">
  				<div class="textMain h0Title">
  					142
  				</div>
  				<div class="textMain h3Title">
  					专题
  				</div>
  			</div>
  			<div class="info info1">
  				<div class="textMain h0Title">
  					142
  				</div>
  				<div class="textMain h3Title">
  					音乐
  				</div>
  			</div>
  		</div>
  	</div>
  	<div class="plantitem">
  		<div class="pitem">
  			<p class="textMain h1Title">
  				机构
  			</p>
  			<p class="textMain h0Title">142</p>
  		</div>
  		<div class="pitem">
  			<p class="textMain h1Title">
  				机构
  			</p>
  			<p class="textMain h0Title">142</p>
  		</div>
  		<div class="pitem">
  			<p class="textMain h1Title">
  				机构
  			</p>
  			<p class="textMain h0Title">142</p>
  		</div>
  		<div class="pitem">
  			<p class="textMain h1Title">
  				机构
  			</p>
  			<p class="textMain h0Title">142</p>
  		</div>
  		<div class="pitem">
  			<p class="textMain h1Title">
  				机构
  			</p>
  			<p class="textMain h0Title">142</p>
  		</div>
  	</div>
  	<div class="msyBox">
  		<div class="msyBoxCon">
  			<div class="msyBoxTitle">
	  			<div class="title h1Title">
	  				修改
	  			</div>
	  			<div class="el-icon-close h0Title close"></div>
	  		</div>
  			<div class="msyBoxItem">
  				<div class="boxl">昵称</div>
  				<div class="boxr">
  					<el-input
  						size="mini"
						  placeholder="请输入内容"
						  v-model="nickname"
						  clearable>
						</el-input>
  				</div>
  			</div>
  			<div class="msyBoxItem">
  				<div class="boxl">头像</div>
  				<div class="boxr">
  					<div class="avatar-uploader">
						 	<label for="avatar2">
						 		<i v-if="!music_picture" class="el-icon-plus avatar-uploader-icon"></i>
						 		<img v-if="music_picture" :src="music_picture" class="avatar">
						 	</label>
						</div>
  				</div>
  			</div>
  			<div class="msyBoxItem">
  				<div class="boxl">星球背景图</div>
  				<div class="boxr">
  					<div class="avatar-uploader">
						 	<label for="avatar2">
						 		<i v-if="!music_picture" class="el-icon-plus avatar-uploader-icon"></i>
						 		<img v-if="music_picture" :src="music_picture" class="avatar">
						 	</label>
						</div>
  				</div>
  			</div>
  			<div class="msyBoxItem">
  				<div class="boxl">星球介绍</div>
  				<div class="boxr">
  					<el-input
  						type="textarea"
						  autosize
						  placeholder="请输入内容"
						  v-model="nickname"
						  clearable>
						</el-input>
  				</div>
  			</div>
  			<div class="boxSub">
  				<el-button type="success" style="width: 100%;" size="mini">提交</el-button>
  			</div>
  		</div>
  	</div>
  </div>
</template>
<script>
	import list from './PlanetInformation.js';
	export default list; 
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./PlanetInformation.css");
</style>
