<template>
  <div>
  	<el-row type="flex"  justify="start" :gutter="30">
		  <el-col :span="22">
		  	<span class="h1Title textMain">歌曲管理</span><span class="textTip h3Title">＞歌曲播放</span>
			</el-col>
		</el-row>
		<el-row type="flex"  justify="start" :gutter="30">
			<el-col :span="12">
				<el-row type="flex"  justify="start" :gutter="30">	
					<el-col :span="4">
						<span class="textMain h2Title">歌曲名称:</span>
					</el-col>
				  <el-col :span="16">
				  	<el-input
				  		:disabled="showType==1"
						  placeholder="请输入内容"
						  v-model="musicname"
						  clearable>
						</el-input>
					</el-col>
				</el-row>
				<el-row type="flex"  justify="start" :gutter="30">
					<el-col :span="4">
						<span class="textMain h2Title">歌手名称:</span>
					</el-col>
				  <el-col :span="16">
				  	<el-input
				  		:disabled="showType==1"
						  placeholder="请输入内容"
						  v-model="singername"
						  clearable>
						</el-input>
					</el-col>
				</el-row>
				<el-row type="flex"  justify="start" :gutter="30">
					<el-col :span="20">
						<audio id="musicplay" 
							ref="audioplay"
							controls 
							preload="auto"
							:src="musicsrc"
							@play="ready" 
		      		@error="errors"
		      		@timeupdate="updateTime"
		      		@ended="ended"
		      		@canplay="runMusic"
						>
							您的浏览器不支持 audio 标签。
						</audio>
					</el-col>
				</el-row>
				<el-row type="flex"  justify="start" :gutter="30">
					<el-col :span="20">
						<el-select :disabled="showType==1" v-model="selectOption" clearable placeholder="请选择标签">
					    <el-option
					      v-for="item in valoptions"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
					  <p style="margin-top: 10px;">歌词文件</p>
					  <label :disabled="showType==1" class="lrcbtn" for="lrcinput">选择文件</label>
					  <input type="file" id="lrcinput" />
					  <el-button style="width:120px;" @click="pageBack">返回</el-button>
		  			<el-button style="width:120px;" type="primary" @click="pageBack">确定</el-button>
					</el-col>
				</el-row>	
			</el-col>
			<el-col :span="12">
				<el-row type="flex"  justify="center" :gutter="30">
					<el-col :span="22">
						<ul ref="audiolrc" class="lrcwrap">
							<li v-for="(value,key) in lrcObj" :class="lastLyric==key?'actlrc':''">{{value}}</li>
						</ul>
					</el-col>
				</el-row>
			</el-col>
		</el-row>	
  </div>
</template>
<script>
export default {
  name: 'PlayMusic',
  data () {
    return {
    	showType:0,
      musicname:'',
      lastLyric:'',
      curtime:'',
      singername:'',
      musicsrc:'',
      selectOption:'1',
      lrcObj:{},
      valoptions:[{
	      value: '1',
	      label: '黄金糕'
	    }, {
	      value: '2',
	      label: '双皮奶'
	    }, {
	      value: '3',
	      label: '蚵仔煎'
	    }, {
	      value: '4',
	      label: '龙须面'
	    }, {
	      value: '5',
	      label: '北京烤鸭'
	    }]
    }
  },
  created:function(){
  	console.log(this.$route.params);
  	this.showType = this.$route.params.type||0;
  	this.musicname = this.$route.params.musicname||'';
  	this.singername = this.$route.params.singername||'';
  	this.musicsrc = this.$route.params.music||'';
  	//let lrc = this.$route.params.lrc||'';
  	let lrc = this.$route.params.lrc||'';
  	this.loadLrc(lrc);
	},
	methods:{
		pageBack(){
			this.$router.go(-1);
		},
		//准备
		ready(){
			console.log('123');
		},
		//错误
		errors(){
			console.log('播放错误')
		},
		//更新
		updateTime(e){
			this.scrolllrc(e.target.currentTime);
			//this.$refs.audiolrc;
		},
		//结束
		ended(){
			
		},
		//滚动歌词
		scrolllrc(time){
			let that = this;
	    if(that.lrcObj === '') return false;
	    time = parseInt(time);  // 时间取整
	    if(that.lrcObj === undefined || that.lrcObj[time] === undefined) return false;  // 当前时间点没有歌词
	    
	    if(that.lastLyric == time) return true;  // 歌词没发生改变
	    
	    let i = 0;  // 获取当前歌词是在第几行
	    for(var k in that.lrcObj){
	        if(k == time) break;
	        if(that.lrcObj[k]){
	        	i ++;
	        };
	    }
	    that.lastLyric = time;
	    console.log(that.$refs.audiolrc);
	    let scroll = (40 * (i+1)) - 300;
	    that.$refs.audiolrc.scrollTo(0,scroll);
		},
		//加载歌词
		loadLrc(urls){
			let that  = this;
	  	this.$axios('get',urls,{},function(res){
	  		that.cllrc(res);
	  	});	
		},
		runMusic(){
			this.$refs.audioplay.play();
		},
		cllrc(lrc){
			if(lrc === '') return false;
	    let lyrics = lrc.split("\n");
	    let lrcObj = {};
	    for(let i=0;i<lyrics.length;i++){
	        let lyric = decodeURIComponent(lyrics[i]);
	        let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
	        let timeRegExpArr = lyric.match(timeReg);
	        if(!timeRegExpArr)continue;
	        let clause = lyric.replace(timeReg,'');
	        for(let k = 0,h = timeRegExpArr.length;k < h;k++) {
	            let t = timeRegExpArr[k];
	            let min = Number(String(t.match(/\[\d*/i)).slice(1)),
	                sec = Number(String(t.match(/\:\d*/i)).slice(1));
	            let time = min * 60 + sec;
	            lrcObj[time] = clause;
	        };
	    };
	    this.lrcObj = lrcObj;
		},
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.el-row{
		margin-bottom: 20px;
	}
	.el-col{
		line-height:40px;
	}
	#musicplay{
		width: 600px;
	}
	.lrcwrap{
		display: block;
		width: 100%;
		height: 400px;
		padding: 30px 0;
		background: #000000;
		overflow-y:scroll;
	}
	.lrcwrap li{
		color: #FFFFFF;
		list-style: none;
		text-align: center;
	}
	.actlrc{
		color: #409EFF !important;
	}
	.lrcbtn{
		margin-bottom: 30px;
		cursor: pointer;
		display:block;
		width:100px;
		height:28px;
		text-align: center;
		line-height:28px;
		font-size: 14px;
		color: #FFFFFF;
		background: #67C23A;
		border-radius: 3px;
	}
	input{
		display: none;
	}
	
</style>
