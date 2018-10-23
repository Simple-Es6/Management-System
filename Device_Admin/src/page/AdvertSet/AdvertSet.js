let list =  {
  name: 'AdvertSet',
  data () {
    return {
    	dialogFormVisible:false,
    	dialogFormVisible1:false,
    	channestr:'',
    	channeparm:'',
    	qdstr:'',
    	channelList:[],   	
    	checkboxList:[],
    	qdId:null,
    	fwId:null
    }
  },
  created:function(){
  	this.getDataList();
  },
  methods:{
  	delItem(id,index,type){
  		let that = this;
  		that.$confirm('确定要删除吗?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	      that.$axios('post',that.Global.PATH.addictdelete,{adId:id},function(res){
		  		if(res.code==200){
		  			if(type){
		  				that.channelList.splice(index,1);
		  			}else{
		  				that.checkboxList.splice(index,1);
		  			};
		  			that.$message({
		          message: '删除成功',
		          type: 'success'
		        });
		  		}else{
		  			that.$message.error(res.msg);
		  		};
		  	});
	    }).catch(() => {
	      that.$message({
	        type: 'info',
	        message: '已取消删除'
	      });          
	    });
  		
  	},
  	//增加渠道
  	addQd(){
  		this.qdstr = '';
  		this.dialogFormVisible1 = true;
  	},
  	//增加范围
  	addFw(){
  		this.channestr = '';
    	this.channeparm = '';
  		this.dialogFormVisible = true;
  	},
  	sendData(type){
  		let obj = {};
  		if(type){
  			if(!this.qdstr){
  				this.$message.error('请输入渠道值');
	  			return false;
  			};
  			obj.name = this.qdstr;
  			obj.parentId = this.qdId;
  		}else{
  			if(!this.channestr){
  				this.$message.error('请输入范围值');
	  			return false;
  			};
  			obj.name = this.channestr;
  			obj.parentId = this.fwId;
  		};
  		let that = this;
  		that.$axios('post',that.Global.PATH.addictsave,obj,function(res){
	  		if(res.code==200){
	  			if(type){
	  				that.channelList.unshift(res.data);
	  				that.dialogFormVisible1 = false;
	  			}else{
	  				that.checkboxList.unshift(res.data);
	  				that.dialogFormVisible = false;
	  			};
	  		}else{
	  			that.$message.error(res.msg);
	  		};
	  		
	  	});	
  	},
  	//请求设置数据
  	getDataList(){
  		let that = this;
  		that.$axios('post',that.Global.PATH.addictlist,{},function(res){
	  		if(res.code==200){
	  			that.qdId = res.data[0].adId;
	  			that.fwId = res.data[1].adId;
	  			that.channelList = res.data[0].childAdDict;
	  			that.checkboxList = res.data[1].childAdDict;
	  		};
	  	});
  	},
  	goAdd(id){
  		if(id==1){
  			this.$router.push({name:'AddAdvert'});  		
  		}else{
  			this.$router.push({name:'Advertisement'}); 			
  		};
  	}
  },
  components:{
	}
};
export default list;