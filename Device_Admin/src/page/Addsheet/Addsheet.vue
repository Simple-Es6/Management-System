<template>
	<div>
		<div class="addCon">
			<el-row type="flex"  justify="center" :gutter="30">
				<el-col :span="2">
					<div>星歌期数:</div>
				</el-col>
				<el-col :span="22">
					<div>星歌推荐{{sheetNum}}期</div>
				</el-col>
			</el-row>
			<el-row type="flex"  justify="center" :gutter="30">
				<el-col :span="2">
					<div>发布日期:</div>
				</el-col>
				<el-col :span="4">
					<el-date-picker value-format="timestamp" v-model="time1" type="datetime" placeholder="选择日期时间"></el-date-picker>
				</el-col>
				<el-col :span="18">
					<div class="textTip h3Title">将根据设置的发布时间自动发布</div>
				</el-col>
			</el-row>
			<el-row type="flex"  justify="center" :gutter="30">
				<el-col :span="2">
					<div >添加音乐:</div>
				</el-col>
				<el-col :span="22">
					<el-button plain @click="openMsy">点击添加</el-button>
				</el-col>
			</el-row>
			<el-row type="flex" style="height: auto;"  justify="center" :gutter="30">
				<el-col :span="24">
					<el-table  :data="musicData" style="width: 100%" :cell-style="thheight">
				      	<el-table-column  label="排序">
				      		<template slot-scope="scope">
					      		<el-button @click="upClick(scope.$index)" size="mini" v-if="scope.$index>0" type="text"><i class="el-icon-sort-up h2Title"></i></el-button>
					      		<el-button @click="downClick(scope.$index)" size="mini" v-if="scope.$index<musicData.length-1" type="text"><i class="h2Title el-icon-sort-down"></i></el-button>
				      		</template>
				      	</el-table-column>
				      	<el-table-column prop="musicName" label="歌曲名"></el-table-column>
				      	<el-table-column prop="singerName" label="歌手"></el-table-column>
				      	<el-table-column prop="planetName" label="来自"></el-table-column>
				      	<el-table-column label="权重">
				      		<template slot-scope="scope">
					      		<el-select size="mini" v-model="scope.row.isMust"  placeholder="请选择">
								    <el-option :label="1" :value="1"></el-option>
								    <el-option :label="2" :value="2"></el-option>
								</el-select>
							</template>
				      	</el-table-column>
				      	<el-table-column label="操作">
				      		<template slot-scope="scope">
					      		<el-button
						          	size="mini"
						          	type="danger"
						          	@click="handleDelete(scope.$index)">删除
						        </el-button>
							</template>
				      	</el-table-column>
				    </el-table>
				</el-col>
			</el-row>
			<el-row type="flex" style="height: auto;"  justify="center" :gutter="30">
				<el-col :span="24">
					<p style="line-height: 24px;" class="textTip h3Title">提示：权重选择“1“代表此歌曲为必推歌曲，务必选择六首歌曲</p>
					<p style="line-height: 24px;" class="textTip h3Title">权重选择”2“代表歌曲为备选，星球统治者在当日推荐歌曲时会进行自动替换</p>
					<el-button
						style="width:200px;margin-top:30px;"
			          	type="success"
			          	:disabled="musicData.length<12||!time1"
			          	@click="addSub">确认提交
			        </el-button>
				</el-col>
			</el-row>
		</div>
		<div class="msyBox" v-if="msyBox">
	  		<div class="boxCon">
	  			<div @click="closeBox" class="closeBtn textInfo"><i class="el-icon-close"></i></div>
	  			<div  class="boxTitle h0Title textMain">添加音乐<span style="margin-left: 20px;" class="textInfo h2Title">{{selectMusic.length}}/12</span></div>
	  			<div class="nameBox">
	  				<el-input style="width:35%;margin-right:2%;" @clear="btnSub" clearable prefix-icon="el-icon-search" v-model="searchStr" placeholder="请输入名称"></el-input>
	  				<el-button style="width:8%;margin-right: 12%;"  @click="btnSub">搜索</el-button>
	  				<el-radio-group v-model="radio3" style="width: 25%;margin-right: 10%;">
				      <el-radio-button label="1">来自用户上传</el-radio-button>
				      <el-radio-button label="2">来自曲库</el-radio-button>
				    </el-radio-group>
	  				<el-button style="width:15%;margin-right: 0;"  @click="btnAdd" type="success">确认添加</el-button>
	  			</div>
	  			<div class="codeCon">
	  				<el-table
					    :data="musicList"
					    :cell-style="thheight"
					    style="width: 100%"
					    >
					    <el-table-column
					    	style="padding:5px 0;"
					      	prop="musicName"
					      	label="歌曲名称">
					    </el-table-column>
					    <el-table-column
					      	prop="nickname"
					      	label="歌手">
					    </el-table-column>
					    <el-table-column
					      	prop="planetName"
					      	label="星球">
					    </el-table-column>
					    <el-table-column
					      	prop="singerName"
					      	label="上传用户">
					    </el-table-column>
					    <el-table-column
					      	label="上传时间"
					      	prop="createTime"
					      	sortable
					      	width="160">
					      	<template slot-scope="scope">{{Global.oTime(scope.row.createTime)}}</template>
					    </el-table-column>
					    <el-table-column
					      	prop="likeCount"
					      	sortable
					      	label="点赞次数">
					    </el-table-column>
					    <el-table-column
					      	prop="usedCount"
					      	sortable
					      	label="使用次数">
					    </el-table-column>
					    <el-table-column
					      	label="选择"
					      	width="60">
					      	<template slot-scope="scope">
					      		<el-checkbox :disabled="!scope.row.selected&&selectMusic.length==12" v-model="scope.row.selected" @change="selectChange(scope.row)"></el-checkbox>
					      		<!--{{Global.oTime(scope.row.createTime)}}-->
					      	</template>
					    </el-table-column>
					</el-table>	
	  			</div>
	  			<div class="endCon" v-if="total">
		  			<el-pagination
				      	@current-change="handleCurrentChange"
				      	background
				      	:current-page.sync="currentPage2"
				      	:page-size="10"
				      	layout="prev,pager,next,jumper"
				      	:total="total">
				    </el-pagination>
			    </div>
	  		</div>
	  	</div>
	</div>
</template>
<script>
//	import vPageTitle from '../common/pageTitle.vue';
export default {
	name:'Addsheet',
    data(){
        return{
        	sheetNum:0,
        	time1:'',
        	radio3:1,
        	msyBox:false,
        	selectMusic:[],
        	searchStr:'',
        	currentPage2:1,
        	total:0,
        	vlude:1,
        	sortNum:0,
        	musicList:[],
        	musicData:[]
        }
    },
    created:function(){
    	let that = this;
    	that.sheetNum = this.$route.params.sheet; 
		that.$axios('post',that.Global.PATH.getSystemMusicPageInfo,{
	    	pageNum:1,
	    	pageSize:10,
	    	musicNameOrSingerName:''
	  	},function(res){
	  		if(res.code==200){
	  			that.clData(res.data.musicList);
	  			that.total = res.data.count;
	  		};
	  	});		
	},
    components:{         
//          vPageTitle
    },
    methods:{
    	upClick(index){
    		let arr1 = this.musicData[index],
    			arr2 = this.musicData[index-1];
    		this.$set(this.musicData,index,arr2);
    		this.$set(this.musicData,index-1,arr1);	
    	},
    	downClick(index){
    		let arr1 = this.musicData[index],
    			arr2 = this.musicData[index+1];
    		this.$set(this.musicData,index,arr2);
    		this.$set(this.musicData,index+1,arr1);
    	},
    	handleDelete(item){
    		let arr = this.musicData;
    		arr.splice(item,1);
    		
    		this.musicData = JSON.parse(JSON.stringify(arr));
    	},
    	selectChange(item){
    		if(item.selected){
    			this.selectMusic.push(item);
    			//console.log(item.musicid);
    		}else{
    			this.delectSel(item.musicid);
    		};
    	},
    	addSub(){
    		let that = this,
    			arr = this.musicData,
    			arr1 = [];
    		console.log(arr);
    		arr.forEach(function(val,index){
    			let obj = {};
    			obj.isMust = val.isMust;
    			obj.musicId = val.musicid;
    			obj.userId = val.userid;
    			arr1.push(obj);
    		});
    		console.log(arr1);
			that.$axios1('post',that.Global.PATH.addStarMusic,{
		    	periods:that.sheetNum,
		    	starMusicList:arr1,
		    	showTime:that.time1
		  	},function(res){
		  		if(res.code==200){
		  			that.$router.replace({name:'StarSong'});
		  		};
		  	});
    	},
    	btnAdd(){
    		let arr =  this.selectMusic;
    		this.musicData = [];
    		this.musicData = JSON.parse(JSON.stringify(arr));
    		this.msyBox = false;
    	},
    	thheight(){
    		return {padding:'5px 0'};
    	},
    	handleCurrentChange(val){
    		let that = this;
			that.$axios('post',that.Global.PATH.getSystemMusicPageInfo,{
		    	pageNum:val,
		    	pageSize:10,
		    	musicNameOrSingerName:that.searchStr
		  	},function(res){
		  		if(res.code==200){
		  			that.clData(res.data.musicList);
		  			//that.total = res.data.count;
		  		};
		  	});
    	},
    	handleSelectionChange(val) {
        	//this.multipleSelection = val;
        	console.log(val);
//      	val.for
      	},
      	openMsy(){
      		let arr = this.musicData;
      		//this.selectMusic = [];
    		this.selectMusic = JSON.parse(JSON.stringify(arr));
    		this.clData(this.musicList);
      		this.msyBox = true;
      	},
    	closeBox(){
    		let arr = this.musicData;
    		//this.selectMusic = [];
    		this.selectMusic = JSON.parse(JSON.stringify(arr));
    		this.clData(this.musicList);
	  		this.msyBox = false;
	  	},
	    btnSub(){
	    	let that = this;
			that.$axios('post',that.Global.PATH.getSystemMusicPageInfo,{
		    	pageNum:1,
		    	pageSize:10,
		    	musicNameOrSingerName:that.searchStr
		  	},function(res){
		  		if(res.code==200){
		  			that.clData(res.data.musicList);
		  			that.total = res.data.count;
		  		};
		  	});
	    },
	    clData(arr){
	    	if(arr.length>0){
		    	let arr1 = this.selectMusic;
		    	arr.forEach(function(val){
		    		val.selected = false;
		    		val.isMust = 1;
		    		if(arr1.length>0){
		    			for (let i = 0;i<arr1.length;i++) {
		    				if(val.musicid==arr1[i].musicid){
		    					console.log(val.musicid);
		    					val.selected = true;
		    					val.weight = arr1[i].weight;
		    					break;
		    				};
		    			};
		    		};
		    	});
		    	this.musicList = [];
	    		this.musicList = arr;
	    	};    		
	    },
	    delectSel(id){
	    	let arr = this.selectMusic,
	    		that = this;
	    	for(let i = 0;i<arr.length;i++){
	    		if(arr[i].musicid == id){
	    			arr.splice(i,1);
	    			that.selectMusic = arr;
	    			return false;
	    		};
	    	};
	    	
	    }
    }
}	
</script>
<style scoped>
	.el-row{
		margin-bottom: 20px;
		height: 40px;
		line-height: 40px;
	}
	.msyBox{
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 200px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}
	.msyBox .boxCon{
		position: relative;
		width:1062px;
		height:auto;
		padding:0 20px;
	    vertical-align: middle;
	    background-color: #fff;
	    border-radius: 4px;
	    border: 1px solid #ebeef5;
	    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	    backface-visibility: hidden;	
	}
	.msyBox .boxCon .boxTitle{
		margin-top: 10px;
		width:100%;
		height:40px;
		line-height:40px;
		text-align: center;
	}
	.msyBox .boxCon .nameBox{
		margin-top: 20px;
		padding-right: 20px;
		display: flex;
		align-items: center;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}
	.lnameBox{
		flex-shrink: 0;
		width: 20%;
	}
	.closeBtn{
		float: right;
		cursor: pointer;
		width:40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
	}
	.closeBtn:hover{
		color: #409EFF;
	}
	.codeCon{
		margin-top: 10px;
		height:auto;
	}
	.endCon{
		margin: 10px 0;
		text-align: center;
	}
</style>