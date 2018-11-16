<template>
  <div>
  	<audio ref="audiodom" :src="musicPath" @canplay="musicCanPlay"></audio>
  	<input @change="musiclrcupload" type="file" id="lrcinput" />
  	<input @change="upLoadStart($event)" id="avatar" accept="image/jpeg,image/png" class="avatar-img" type="file"  />
  	<input @change="musicupload" type="file" accept="audio/x-pn/realaudio,audio/x-waw,audio/x-aiff,audio/basic,audio/x-mpeg" id="musicinput" />
  	<div class="upitem">
  		<div class="upitemLeft" >
  			上传作品{{musiclist.length>0?'('+musiclist.length+')':''}}
  		</div>
  		<div class="upitemRight">
  			<div class="mlist" v-for="(val,index) in musiclist" :key="index">
  				<div :class="{mlistleft:true,mlistleftact:kaiIndex==index}" @click="leftclick(index)"><span class="el-icon-arrow-right"></span></div>
  				<div class="mlistright">
  					<div class="mlistrighttop">
  						<span class="sort">{{index+1}}</span>
  						<span class="fliename">{{val.music_name}}</span>
  						<span>{{val.singer_name}}</span>
  						<span>{{sec_to_time1(val.duration)}}</span>
  						<span v-if="val.state==0">正在上传</span>
  						<span class="textSuccess" v-else-if="val.state==1">上传成功</span>
  						<span class="textDanger" v-else>上传失败</span>
  						<el-button type="text" @click="delitem(val,index)">删除</el-button>
  					</div>
  					<div class="mlistrightbot" v-show="kaiIndex==index">
  						<!--<div class="mitem">
  							<div class="miteml">
  								歌曲类型
  							</div>
  							<div class="mitemr">
  								<el-select v-model="val.musictype" placeholder="请选择" size="small">
								    <el-option
								      v-for="item in options"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
								  </el-select>
  							</div>
  						</div>-->
  						<div class="mitem">
  							<div class="miteml h2Title">
  								上传歌词
  							</div>
  							<div class="mitemr">
  								<label class="labelinput" @click="changIndex(index)" for="lrcinput">{{val.lyrics?'已上传':'上传'}}</label>
  							</div>
  						</div>
  						<div class="mitem">
  							<div class="miteml h2Title">
  								音乐封面
  							</div>
  							<div class="mitemr">
  								<div class="avatar-uploader">
									 	<label for="avatar" @click="changIndex(index)">
									 		<i v-if="!val.music_picture" class="el-icon-plus avatar-uploader-icon"></i>
									 		<img v-if="val.music_picture" :src="val.music_picture" class="avatar">
									 	</label>
									</div>
  							</div>
  						</div>
  						<div class="mitem">
  							<div class="miteml h2Title">
  								歌手名
  							</div>
  							<div class="mitemr">
  								<el-input placeholder="请输入内容" v-model="val.singer_name" size="small" clearable></el-input>
  							</div>
  						</div>
  						<div class="mitem">
  							<div class="miteml">
  								歌曲名
  							</div>
  							<div class="mitemr">
  								<el-input placeholder="请输入内容" v-model="val.music_name" size="small" clearable></el-input>
  							</div>
  						</div>
  						<!--<div class="mitem">
  							<div class="miteml">
  								曲作者
  							</div>
  							<div class="mitemr xiala">
  								<el-input placeholder="请输入内容" size="small" :disabled="val.ismysong" v-model="val.songwriter" class="input-with-select">
								    <el-select v-model="val.hasauthor" slot="prepend" placeholder="请选择">
								      <el-option label="无" value="0"></el-option>
								      <el-option label="有" value="1"></el-option>
								    </el-select>
								  </el-input>
								  <div class="danxuan">
								  	<el-checkbox v-model="val.ismysong">我是曲作者(输入框内无需再次输入)</el-checkbox>
								  </div>
  							</div>
  						</div>-->
  						<!--<div class="mitem">
  							<div class="miteml">
  								词作者
  							</div>
  							<div class="mitemr xiala">
  								<el-input placeholder="请输入内容" :disabled="val.ismylrc" size="small" v-model="val.lyricist" class="input-with-select">
								    <el-select v-model="val.hasauthorlrc" slot="prepend" placeholder="请选择">
								      <el-option label="无" value="0"></el-option>
								      <el-option label="有" value="1"></el-option>
								    </el-select>
								  </el-input>
								  <div class="danxuan">
								  	<el-checkbox v-model="val.ismylrc">我是词作者(输入框内无需再次输入)</el-checkbox>
								  </div>
  							</div>
  						</div>-->
  					</div>
  				</div>
  			</div>
  			<div class="lablewrap">
  				<label class="labelinput" for="musicinput">上传音乐</label>
  			</div>
  		</div>
  	</div>
  	<div class="musictips">
  		<p>说明：</p>
  		<p>1. 专辑、歌曲信息中，请不要输入任何emoji表情</p>
  		<p>2. 如果关联其他入驻音乐人，需要经过对方的验证才能正式关联。一旦关联成功后将无法进行修改。</p>
  		<p>3. 翻唱和电音歌曲切勿将原唱/原作者名字填写在“歌手名”空格内</p>
  		<p>4. 歌曲上线后再次修改歌手名需要进行审核</p>
  		<p>5. 歌曲类型提交审核以后将不可以再修改</p>
  		<p>6. 如果没有词曲作者请在相应的空格内填写无</p>
  	</div>
  	<div class="subclick">
  		<el-button v-if="isNew==1" size="small" @click="subMusic(1)" type="primary">提交发布</el-button>
  		<el-button  size="small" @click="subMusic(2)" type="primary" v-else>保存修改</el-button>
  	</div>
  </div>
</template>
<script>
import list from './UpLoadMusic.js'
export default list;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("./UpLoadMusic.css" );	
</style>
