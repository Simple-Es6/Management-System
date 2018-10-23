let list =  {
  name: 'Advertisement',
  data () {
    return {
    	currentPage:1,
    	multipleSelection:[],
    	pageSize:10,
    	tableData:[],
    	userradio:'0',
    	userinput:'',
    	totals:0,
    	selectOption:'1'
    }
  },
  created:function(){
  	this.getData(1);
  },
  methods:{
  	goAdd(id){
  		if(id){
  			this.$router.push({name:'AddAdvert',params:{
  				adId:id
  			}});
  		}else{
  			this.$router.push({name:'AddAdvert'});  			
  		};
  	},
  	goSet(){
  		this.$router.push({name:'AdvertSet'});
  	},
  	//禁用单个
  	disabled(val,index){
  		let arr = [],
  		that = this,
  		strs = '',
  		obj = {};
  		obj.adId = val.adId;
  		if(val.disable==1){
  			strs = '确定要启用该广告吗?';
  			obj.disable = 2;
  		}else{
  			strs = '确定要禁用该广告吗?';
  			obj.disable = 1;
  			obj.token = val.token;
  		};
  		arr.push(obj);
  		that.$confirm(strs, '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	that.sendDis(arr,);
	    }).catch(() => {
	      that.$message({
	        type: 'info',
	        message: '已取消'
	      });          
	    });
  	},
  	//禁用广告
  	sendDis(obj){
  		let that = this,
  		urls = '';
  		that.$axios1('post',that.Global.PATH.adlistoperation,{'operationType':'1','adId':obj},function(res){
	  		if(res.code==200){
	  			that.getData(that.currentPage);
	  		};
	  	});
  	},
  	//禁用多个
  	disableds(){
  		let that = this;
  		if(this.multipleSelection.length==0){return false};
  		let arr = [];
  		this.multipleSelection.forEach(function(val){
  			let obj = {};
  			obj.adId = val.adId;  			
  			/*if(val.disable==1){
	  			obj.isDisable = 2;
	  		}else{
	  			obj.isDisable = 1;
	  			obj.token = val.token;
	  		};*/
	  		arr.push(obj);
  		});
  		that.$confirm('确定要禁用/启用选中的广告吗?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	that.sendDis(arr);
	    }).catch(() => {
	      that.$message({
	        type: 'info',
	        message: '已取消'
	      });          
	    });
  		
  	},
  	delectUser(val,index){
  		let arr = [],
  		that = this;
  		arr.push(val.adId);
  		that.$confirm('确定要删除该广告吗?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	that.sendDelect(arr);
	    }).catch(() => {
	      that.$message({
	        type: 'info',
	        message: '已取消删除'
	      });          
	    });
  	},
  	delectUsers(){
  		let that = this;
  		if(this.multipleSelection.length==0){return false};
  		let arr = [];
  		this.multipleSelection.forEach(function(val){
  			let obj = [];
	  		arr.push(val.adId);
  		});
  		that.$confirm('确定要删除选中的广告吗?', '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	that.sendDelect(arr);
	      
	    }).catch(() => {
	      this.$message({
	        type: 'info',
	        message: '已取消删除'
	      });          
	    });	
  	},
  	//删除广告
  	sendDelect(obj){
  		let that = this;
  		that.$axios1('post',that.Global.PATH.adlistdelbatch,{'idList':obj},function(res){
	  		if(res.code==200){
	  			that.$message({
	        	type: 'success',
	        	message: '删除成功!'
	      	});
	  			that.getData(that.currentPage);
	  		};
	  	});
  	},
  	//切换广告类型
  	tabclick(){
  		this.getData(1);
  	},
  	//请求数据
  	getData(num){
  		let that = this,
  		obj = {
  			pageNum:num,
  			pageSize:that.pageSize
  		};
  		if(that.userradio==0){
  			obj.state = '';
  		}else{
  			obj.state = that.userradio;
  		};
  		if(that.selectOption==1){
  			obj.name = that.userinput;
  		}else{
  			obj.name = that.userinput;
  		};
  		that.$axios('post',that.Global.PATH.adlist,obj,function(res){
	  		if(res.code==200){
	  			that.tableData = res.data.adListList;
	  			that.totals = res.data.count;
	  		};
	  	});
  	},
  	search(){
  		this.getData(1);
  	},
  	//反选
  	invertselect(rows){
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        };
  	},
  	//全选
  	handleSelectionChange(val){
      this.multipleSelection = val;
   	},
  	handleSizeChange(val) {
	    this.pageSize = val;
	    this.getData(1);
    },
    handleCurrentChange(val) {
	    this.currentPage = val;
	    this.getData(val);
    }
  },
  components:{
	}
};
export default list;