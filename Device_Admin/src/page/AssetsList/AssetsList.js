let list =  {
  name: 'AssetsList',
  data () {
    return {
    	currentPage:1,
    	viewPath:'',
    	contentType:1,
    	contentHtml:'',
    	multipleSelection:[],
    	pageSize:10,
    	tableData:[],
    	userradio:'2',
    	userinput:'',
    	totals:0,
    	selectOption:'1'
    }
  },
  created:function(){
  	this.getData(1);
  },
  methods:{
  	goLink(){
  		window.open(this.showPicBic); 
  	},
  	goAdd(id){
  		if(id){
  			this.$router.push({name:'AddAssets',params:{
  				adId:id
  			}});
  		}else{
  			this.$router.push({name:'AddAssets'});  			
  		};
  	},
  	//禁用单个
  	disabled(val,index){
  		let arr = [],
  		that = this,
  		strs = '';
  		if(val.isDisable==1){
  			strs = '确定要启用该币种吗?';
  		}else{
  			strs = '确定要禁用该币种吗?';
  		};
  		that.$confirm(strs, '提示', {
	      confirmButtonText: '确定',
	      cancelButtonText: '取消',
	      type: 'warning'
	    }).then(() => {
	    	that.sendDis(val.adId);
	    }).catch(() => {
	      that.$message({
	        type: 'info',
	        message: '已取消'
	      });          
	    });
  	},
  	//禁用币种
  	sendDis(id){
  		let that = this,
  		urls = '';
  		that.$axios('post',that.Global.PATH.adlistoperation,{'operationType':'1','adId':id},function(res){
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
  		that.$confirm('确定要禁用/启用选中的币种吗?', '提示', {
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
  		that.$confirm('确定要删除该币种吗?', '提示', {
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
  		that.$confirm('确定要删除选中的币种吗?', '提示', {
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
  	//删除币种
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
  	//切换币种类型
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
  		if(that.userradio==2){
  			obj.isEnable = '';
  		}else{
  			obj.isEnable = that.userradio;
  		};
  		if(that.selectOption==1){
  			obj.name = that.userinput;
  		}else{
  			obj.name = that.userinput;
  		};
  		that.$axios('post',that.Global.PATH.cmanagelist,obj,function(res){
	  		if(res.code==200){
	  			that.tableData = res.data.cManagementList;
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