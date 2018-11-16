let list =  {
  name: 'AddAssets',
  data () {
    return {
    	imgType:1,
    	showType:1,
    	reg:/^(((19[0-9]{1})|(17[0-9]{1})|(16[0-9]{1})|(14[0-9]{1})|(12[0-9]{1})|(13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
    	starPage:false,
    	adId:'',//主键id ,
    	dataObj:{
			  "apiKeyToken":"",
			  "apiUrl":"",
			  "backgroundUrl": "",
			  "cId": "",
			  "companyLogo": "",
			  "companyName": "",
			  "description": "",
			  "handlingFee": 0,
			  "isEnable": 0,
			  "isHave": 0,
			  "minNumber": 0,
			  "name": "",
			  "phone": "",
			  "smCount": 0,
			  "smNumber": 0,
			  "storageAddress": "",
			  "totalAmount": 0,
			  "xwTotal": 0
			}
    }
  },
  created:function(){
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
  			this.$message.error('请输入正确的币种图片的链接地址');
  		};
  	},
  	back(){
  		this.$router.replace({name:'Advertisement'});
  	},
  	//提交/修改币种
  	save(type){
  		let urls = '',
  		that = this;
  		if(type==1){
  			urls = this.Global.PATH.cmanagesave;
  		}else{
  			urls = this.Global.PATH.cmanageupdate;
  		};
  		if (!that.dataObj.name) {
  			that.$message.error('请输入币种名称');
  			return false;
  		};
  		if (!that.dataObj.companyName) {
  			that.$message.error('请输入公司名称');
  			return false;
  		};
  		if (!that.dataObj.apiKeyToken) {
  			that.$message.error('请输入Api-Key Token');
  			return false;
  		};
  		if (!that.dataObj.totalAmount) {
  			that.$message.error('请输入平台投放总量');
  			return false;
  		};
  		if (!that.dataObj.handlingFee) {
  			that.$message.error('请输入手续费');
  			return false;
  		};
  		if (!that.dataObj.minNumber) {
  			that.$message.error('请输入最小提币数');
  			return false;
  		};
  		if (!that.dataObj.storageAddress) {
  			that.$message.error('请输入存放地址');
  			return false;
  		};
  		if (!that.dataObj.xwTotal) {
  			that.$message.error('请输入每台音响释放数量');
  			return false;
  		};
  		if (!that.dataObj.smCount) {
  			that.$message.error('请输入每台音响听完所有星歌获得的数量');
  			return false;
  		};
  		if (!that.dataObj.smNumber) {
  			that.$message.error('请输入每台音响需要听的星歌数量 ');
  			return false;
  		};
  		if (!that.regUrl(that.dataObj.apiUrl)) {
  			that.$message.error('请输入正确的api链接地址');
  			return false;
  		};
  		if (!that.dataObj.companyLogo) {
  			that.$message.error('请上传币种logo');
  			return false;
  		};
  		if (!that.dataObj.backgroundUrl) {
  			that.$message.error('请上传背景图片');
  			return false;
  		};
			if(!that.reg.test(that.dataObj.phone)){
				that.$message.error('请输入正确的手机号');
	  		return false;			
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
	  			that.$router.replace({name:'AssetsList'});
	  		};
	  	});
  	},
  	//改变上传类型
  	changeImgType(val){
  		this.imgType = val;	
  	},
  	//上传图片开始
		upLoadStart1(e){
			this.upLoad(e.target.files[0],this.imgType);
		},
		upLoad(fil,type){
			let that = this;
  		that.$axios2('post',that.Global.PATH.upload,{
  			'mufile':fil
  		},function(res){
  			if(res.code==200){
  				if(type==1){
  					that.dataObj.companyLogo = res.url;
  				}else{
  					that.dataObj.backgroundUrl = res.url;
  				};
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
  		that.$axios('post',that.Global.PATH.cmanagegetone,{cId:that.adId},function(res){
	  		if(res.code==200){
	  			//console.log(res);
	  			let obj = res.data;
	  			new Promise(function(resolve,reject){
	  				delete obj.isEnable;
		  			delete obj.operationTime;
		  			delete obj.createTime;
		  			delete obj.pageNum;
		  			delete obj.pageSize;
		  			delete obj.isHave;
	  				resolve();
	  				reject();
	  			}).then(function(){
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