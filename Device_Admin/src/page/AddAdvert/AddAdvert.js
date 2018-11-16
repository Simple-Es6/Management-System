let list =  {
  name: 'AddAdvert',
  data () {
    return {
    	showType:1,
    	starPage:false,
    	channelList:[
    		{
          "adId":"9b8eaa49bef9473cb3338494eddcdb5a",
          "parentId": "1",
          "name": "百度",
          "value": 1,
          "childAdDict": null
        },
        {
          "adId":"6918ed67b2ce457fbd837c986b618246",
          "parentId": "1",
          "name": "腾讯",
          "value": 2,
          "childAdDict": null
        }
    	],
    	checkboxList:[
    		{
          "adId": "4283d1f81dd3468eb5766f7166db4d31",
          "parentId": "2",
          "name": "启动页",
          "value": 1,
          "childAdDict": null
        },
        {
          "adId": "9284cebae9ca464bad005c8b8848a563",
          "parentId": "2",
          "name": "星空",
          "value": 2,
          "childAdDict": null
        },
        {
          "adId": "4d27bb24f4937af43954",
          "parentId": "2",
          "name": "发现",
          "value": 3,
          "childAdDict": null
        },
        {
          "adId": "12df7d99d4f",
          "parentId": "2",
          "name": "活动",
          "value": 4,
          "childAdDict": null
        },
        {
          "adId": "12df8187e794413bbe04a",
          "parentId": "2",
          "name": "我的",
          "value": 5,
          "childAdDict": null
        }
    	],
    	adId:'',//主键id ,
    	dataObj:{
				appShow:0,// app显示（ 0每次启动；1每天只显示一次；默认0） ,
				codeContent:'',//代码内容 ,
				contentType:0,//广告内容类型（0代码；1图片；默认0） ,
				createTime:'',//创建时间 ,
				dRValueList:[],//显示范围 ,
				plantIdList:[],//显示的星球
				endTime:'',//投放结束时间 ,
				name:'',//广告位名称 ,
				picBic:'',//图片内置连接 ,
				picDescription:'',//图片描述 ,
				picHigh:'',//图片高度 ,
				picPath:'',//图片路径 ,
				picWidth:'',//图片宽度 ,
				startTime:'',//投放开始时间 ,
				timeLimit:0,//时间限制（0永不过期；1在设定时间内有效；默认0）
			}
    }
  },
  created:function(){
  	this.getDataList();
  	if(this.$route.params.adId){
  		this.adId = this.$route.params.adId;
  		//this.adId = '2d86e19ce1ea4b1abefa0c32793c2e17';
  		this.showType = 2;
  		this.getData();
  	};
  },
  methods:{
  	starChange(val){
  		this.starPage = val;
  	},
  	goUrl(){
  		if(this.regUrl(this.dataObj.picBic)){
  			window.open(this.dataObj.picBic);
  		}else{
  			this.$message.error('请输入正确的广告图片的链接地址');
  		};
  	},
  	back(){
  		this.$router.replace({name:'Advertisement'});
  	},
  	//提交/修改广告
  	save(type){
  		let urls = type==1?this.Global.PATH.adlistsave:this.Global.PATH.adlistupdate,
  		that = this;
  		if (!that.dataObj.name) {
  			that.$message.error('请输入广告名称');
  			return false;
  		};
  		if (that.dataObj.dRValueList.length==0) {
  			that.$message.error('请选择广告的显示范围');
  			return false;
  		};
  		if (that.starPage&&that.dataObj.plantIdList.length==0) {
  			that.$message.error('请勾选要显示的星球');
  			return false;
  		};
  		if(that.dataObj.timeLimit==1){
  			if (!that.dataObj.endTime||!that.dataObj.startTime) {
	  			that.$message.error('请输入广告投放的起始时间');
	  			return false;
	  		};
  		};
  		if(that.dataObj.contentType==1){
  			if (!that.regUrl(that.dataObj.picBic)) {
	  			that.$message.error('请输入正确的广告图片的链接地址');
	  			return false;
	  		};
	  		if (!that.dataObj.picDescription) {
	  			that.$message.error('请输入广告图片的描述');
	  			return false;
	  		};
	  		that.dataObj.codeContent = '';
  		}else{
  			if (!that.dataObj.codeContent) {
	  			that.$message.error('请输入HTML代码');
	  			return false;
	  		};
	  		that.dataObj.picDescription = '';
	  		that.dataObj.picBic = '';
	  		that.dataObj.picPath = '';
	  		that.dataObj.picWidth = '';
				that.dataObj.picHigh = '';
  		};
  		if(that.showType==2){
  			that.dataObj.adId = that.adId;
  		};
  		that.$axios1('post',urls,that.dataObj,function(res){
	  		if(res.code==200){
	  			if(that.showType==2){
		  			that.$message({
		          message: '修改成功',
		          type: 'success'
		        });
		  		}else{
		  			that.$message({
		          message: '创建成功',
		          type: 'success'
		        });
		  		};
	  			that.$router.replace({name:'Advertisement'});
	  		};
	  	});
  	},
  	//上传图片
		upLoadStart1(e){
			let that = this;
  		that.$axios2('post',that.Global.PATH.upload,{
  			'mufile':e.target.files[0]
  		},function(res){
  			if(res.code==200){
  				that.dataObj.picPath = res.url;
  				let img = new Image();
					// 改变图片的src
					img.src = res.url;
					// 加载完成执行
					img.onload = function(){
						that.dataObj.picWidth = img.width;
						that.dataObj.picHigh = img.height;
					};	
  			};
  		});
		},
		//请求下拉数据
  	getDataList(){
  		let that = this;
  		that.$axios('post',that.Global.PATH.adlistgetPlanet,{},function(res){
	  		if(res.code==200){
	  			that.channelList = res.data;
	  		};
	  	});
  	},
  	regUrl(val){
  		let strRegex = /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/;
	    //let re=new RegExp(strRegex);
	    if (!strRegex.test(val)) {
	      this.$message.error('图片链接输入错误');
	      return false;
	    }else{
	    	return true;
	    };
  	},
  	//请求数据
  	getData(){
  		let that = this;
  		that.$axios('post',that.Global.PATH.adlistgetone,{adId:that.adId},function(res){
	  		if(res.code==200){
	  			//console.log(res);
	  			let obj = res.data;
	  			obj.dRValueList = [];
	  			obj.plantIdList = [];
	  			new Promise(function(resolve,reject){
	  				console.log(obj.adDisplayRangeList)
	  				for (let i = 0;i<obj.adDisplayRangeList.length;i++) {
	  					obj.dRValueList.push(obj.adDisplayRangeList[i].value);
	  					if(obj.adDisplayRangeList[i].value==6){
	  						that.starPage = true;
	  					};
	  				};
	  				for (let i = 0;i<obj.adPlanetList.length;i++) {
	  					obj.plantIdList.push(obj.adPlanetList[i].planetId);
	  				};
	  				resolve();
	  				reject();
	  			}).then(function(){
	  				console.log(123);
	  				delete obj.adDisplayRangeList;
		  			delete obj.adPlanetList;
		  			delete obj.isDisable;
		  			delete obj.clickCount;
		  			console.log(obj)
		  			that.dataObj = obj;
	  			}).catch(function(){
	  				window.location.reload();
	  			});
	  		};
	  	});
  	}
  }
};
export default list;