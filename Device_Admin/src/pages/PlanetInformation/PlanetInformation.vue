 <template>
   <div>
  	<input @change="upLoadStart($event)" id="avatar2" accept="image/jpeg,image/png" class="avatar-img" type="file"  />
  	<div class="plantitem">
  		<div class="item">
  			<div class="avatarimg" :style="{'background-image':'url('+head_portrait+')'}"></div>
  			<div class="avatarimg"></div>
  			<div class="info">
  				<div class="textMain h3Title">
  					{{nickname}}
  				</div>
  				<div class="textInfo h4Title">
  					{{planet_name}}
  				</div>
  			</div>
  			<div class="goedit textBlue h3Title" @click="showMsy(1)">
 					个人资料  				
   			</div>
   		</div>
   		<div class="item">
   			<div class="itembig textMain h1Title">
   				总收益折合： ≈ 600CNY
   			</div>
   			<div class="goedit textBlue h3Title">
 					收益详情				
   			</div>
   		</div>
   	</div>
   	<div class="plantTitle">
   		<div class="textMain h2Title">
   			星球信息
   		</div>
   		<div class="goedit textBlue h2Title" @click="showMsy(2)">
   			编辑星球资料
   		</div>
  	</div>
  	<div class="plantitem">
  		<div class="item1 item">
  			<div class="avatarimg" :style="{'background-image':'url('+pic_url+')'}"></div>
  			<div class="avatarimg"></div>
  			<div class="info">
  				<div class="textMain h3Title">
  					{{planet_name }}
  				</div>
  				<div class="textInfo h4Title">
  					{{signature}}
  				</div>
  			</div>
  			<div class="info info1" style="border-right:1px solid #8C939D;">
  				<div class="textMain h0Title">
  					{{specialcount}}
  				</div>
  				<div class="textMain h3Title">
  					专题
  				</div>
  			</div>
  			<div class="info info1">
  				<div class="textMain h0Title">
  					{{musiccount}}
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
  				音乐人
  				机构
  			</p>
  			<p class="textMain h0Title">{{musicusercount}}</p>
  		</div>
  		<div class="pitem">
  			<p class="textMain h1Title">
  				星球居民
  				机构
  			</p>
  			<p class="textMain h0Title">{{planetusercount}}</p>
  		</div>
  		<div class="pitem">
  			<p class="textMain h1Title">
  				审核员
  				机构
  			</p>
  			<p class="textMain h0Title">{{examineuser}}</p>
  		</div>
  		<div class="pitem">
  			<p class="textMain h1Title">
  				粉丝
  				机构
  			</p>
  			<p class="textMain h0Title">{{fensicount}}</p>
  		</div>
  	</div>
  	<div class="msyBox" v-show="msyShow>0">
   		<div class="msyBoxCon">
   			<div class="msyBoxTitle">
 	  			<div class="title h1Title">
 	  				修改
 	  			</div>
 	  			<div class="el-icon-close h0Title close" @click="closeMsy"></div>
 	  		</div>
   			<div class="msyBoxItem" v-show="msyShow==1">
   				<div class="boxl">昵称</div>
   				<div class="boxr">
   					<el-input
   						size="mini"
 						  placeholder="请输入内容"
 						  v-model="edit_nickname"
 						  clearable>
 						</el-input>
   				</div>
   			</div>
   			<div class="msyBoxItem" v-show="msyShow==2">
   				<div class="boxl">星球名称</div>
   				<div class="boxr">
  					<el-input size="mini" placeholder="请输入内容" v-model="planetName" clearable></el-input>
  				</div>
   			</div>
   			<div class="msyBoxItem" v-show="msyShow==1">
  				<div class="boxl">头像</div>
  				<div class="boxr">
  					<div class="avatar-uploader">
						 	<label for="avatar2" @click="changType(1)">
						 		<i v-if="!edit_head_portrait " class="el-icon-plus avatar-uploader-icon"></i>
						 		<img v-if="edit_head_portrait " :src="edit_head_portrait " class="avatar">
						 	</label>
						</div>
  				</div>
  			</div>
			<div class="msyBoxItem" v-show="msyShow==2">
  				<div class="boxl">星球图片</div>
  				<div class="boxr">
  					<div class="avatar-uploader">
						 	<label for="avatar2" @click="changType(2)">
						 		<i v-if="!edit_pic_url" class="el-icon-plus avatar-uploader-icon"></i>
						 		<img v-if="edit_pic_url" :src="edit_pic_url" class="avatar">
						 	</label>
						</div>
  				</div>
   			</div>
   			<div class="msyBoxItem" v-show="msyShow==2">
  				<div class="boxl">星球背景图</div>
  				<div class="boxr">
  					<div class="avatar-uploader">
						 	<label for="avatar2" @click="changType(3)">
						 		
						 		<i v-if="!background_url" class="el-icon-plus avatar-uploader-icon"></i>
						 		<img v-if="background_url" :src="background_url" class="avatar">
						 	</label>
						</div>
  				</div>
   			</div>
   			<div class="msyBoxItem" v-show="msyShow==2">
   				<div class="boxl">星球介绍</div>
   				<div class="boxr">
   					<el-input
  						type="textarea"
						  rows="5"
						  placeholder="请输入内容"
						  v-model="edit_signature"
						  clearable>
						</el-input>
  				</div>
  			</div>
  			<div class="boxSub">
  				<el-button type="success" style="width: 100%;" size="mini"  @click="alter">提交</el-button>
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