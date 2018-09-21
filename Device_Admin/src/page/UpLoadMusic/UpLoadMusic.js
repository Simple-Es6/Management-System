let upmusic = {
	name: 'UpLoadMusic',
  	data () {
    	return {
	    	options:[
		    	{
		    		value: '1',
		        	label: '流行'
		    	},
		    	{
		    		value: '2',
		        	label: '潮流'
		    	},
		    	{
		    		value: '3',
		        	label: '文艺'
		    	},
		    	{
		    		value: '4',
		        	label: '热血'
		    	}
	    	],
	    	kaiIndex:0,
			musiclist:[],
			specialid:'6588c2bd3a3f43228098d51434abafe0',
			isNew:1,
			upIndex:0,
			musicPath:'',
			upMusicObj:{}
    	}
	},
  	created:function(){
  		this.specialid = this.$route.params.specialid||'';
  		if(this.specialid==''){
  			this.$router.replace({name:'UpLoadHome'});
  			return false;
  		};
  		this.isNew = this.$route.params.isNew;
  		if(this.isNew==0){
  			this.getData();
  		};
	},
	mounted(){
	},
	methods:{
		getData(){
			let that = this;
			that.$axios('post',that.Global.PATH.queryspleByid,{
				specialid:that.specialid
			},function(res){
	  			if(res.code==200){
	  				let arr = res.data.listmusic;
	  				arr.forEach(val=>{
	  					val.state = 1;
	  				});
	  				that.musiclist = arr; 
	  			};
  			});
		},
		musiclrcupload(e){
			let name = e.target.files[0].name;
			let houzhui = name.substring(name.lastIndexOf(".")+1);
			console.log(houzhui);
			if(houzhui=='lrc'){
				let that = this;
				that.upLrc(that.upIndex,e.target.files[0]);
			}else{
				this.$alert('请上传正确的歌词文件', '提示', {
		          	confirmButtonText: '确定'
		        });
			};
		},
		musicCanPlay(e){
			let that = this;
			let obj = that.musiclist[that.kaiIndex];
			obj.duration = Math.floor(e.target.duration);
  			that.$set(that.musiclist,that.kaiIndex,obj);
		},
		upLoadStart(e){
			let that = this;
			that.upImg(that.upIndex,e.target.files[0]);
		},
		//改变上传index
		changIndex(index){
			this.upIndex = index;
		},
		//上传音乐
		musicupload(e){
			let that = this;
			let obj = {
				music_picture:'',
				music_name:that.getFileName(e.target.files[0].name),
				music_path:'',
				singer_name:'',
				lyrics:'',
				duration:'',
				state:0
			};
			that.musicPath = that.getObjectURL(e.target.files[0]);
			that.musiclist.push(obj);
			that.kaiIndex = that.musiclist.length-1;
			that.upmusic(that.musiclist.length-1,e.target.files[0]);
			
		},
		//获取文件的地址
		getObjectURL(file) {
            var url = null;
            if (window.createObjcectURL != undefined) {
                url = window.createOjcectURL(file);
            } else if (window.URL != undefined) {
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
		//上传歌词
		upLrc(index,files){
			let that = this;
			that.$axios2('post',that.Global.PATH.uploadlrc,{
	  			'mufile':files
	  		},res=>{
	  			let obj = that.musiclist[index];
	  			if(res.code==200){
	  				obj.lyrics = res.url;
	  				
	  			};
	  			that.$set(that.musiclist,index,obj);
			});
		},
		upImg(index,files){
			let that = this;
			that.$axios2('post',that.Global.PATH.upload,{
	  			'mufile':files
	  		},res=>{
	  			let obj = that.musiclist[index];
	  			if(res.code==200){
	  				obj.music_picture = res.url;
	  			};
	  			that.$set(that.musiclist,index,obj);
			});
		},
		upmusic(index,files){
			let that = this;
			that.$axios2('post',that.Global.PATH.uploadmusic,{
	  			'mufile':files
	  		},res=>{
	  			let obj = that.musiclist[index];
	  			if(res.code==200){
	  				obj.state = 1;
	  				obj.music_path = res.url;
	  			}else{
	  				obj.state = 2;
	  			};
	  			that.$set(that.musiclist,index,obj);
			});
		},
		leftclick(index){
			if(index==this.kaiIndex){
				this.kaiIndex = -1;
			}else{
				this.kaiIndex  = index;
			};
		},
		subMusic(){
			let that = this;
			let arr = that.musiclist;
			console.log(arr);
			for (let i = 0;i<arr.length;i++) {
				if(arr[i].music_path==''||arr[i].music_picture==''){
					/*that.$alert('请检查第'+(i)+'项的音乐图片或歌曲文件是否上传', '提示', {
			          	confirmButtonText: '确定'
			        });*/
					return false;
				};
			};
			that.$axios1('post',that.Global.PATH.addSpecialmusic,{
	  			specialid:that.specialid,
	  			listmusic:that.musiclist
	  		},res=>{
	  			if(res.code==200){
	  				if(that.isNew ==1){
	  					
	  					that.$router.push({name:'UpLoadHome'});
	  				}else{
	  					that.$router.replace({name:'My-music'});
	  				};
	  			};
			});
		},
		delitem(val,index){
			let that = this;
			that.$confirm('确定要删除吗?', '提示', {
		      	confirmButtonText: '确定',
		      	cancelButtonText: '取消',
		      	type: 'warning'
		    }).then(()=>{
		    	that.$message({
			        type: 'success',
			        message: '已删除'
			    });
				let arr = that.musiclist;
				arr.splice(index,1);
				that.musiclist = arr;
		    }).catch(() => {
		      that.$message({
		        type: 'info',
		        message: '取消'
		      });          
		    });
		},
		getFileName(path){ 

			return path.substring(0, path.lastIndexOf("."));
		},
		//转化时间
		sec_to_time1(s){
	        let t,
	        ss = Math.floor(s);
	        if(!ss){
	        	return false;
	        };
	        if(ss>0&&ss<60){
	        	if(ss<10){
	        		t='00:0'+ss;
	        	}else{
	        		t='00:'+ss;
	        	}
	        }else{
	        	let min = Math.floor(ss/60);
	        	let sec = Math.floor(ss%60);
	        	if(min<10){
	        		min = '0'+min;
	        	};
	        	if(sec<10){
	        		sec = '0'+sec;
	        	};
	        	t = min+':'+sec;
	        };
	        return t;
	    }
	},
  	components:{
		
	}
};
export default upmusic;