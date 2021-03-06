let list =  {
  name: 'VoiceBox',
  data () {
    return {
    		multipleSelection:[],
    		selectList:[],
    		dialogFormVisible:false,
    		currencysList:[],
      	timeStart:[],
      	searchStr:'',
      	select:'1',
      	tableData:[],
      	bindingState:'',
      	totals:0,
      	currentPage:1,
      	pageSize:10,
      	allXwcount:0,
      	bindedXwcount:0,
      	noBindXwcount:0
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData();
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		getData(){
			let that = this,
			obj = {
				pageNum:that.currentPage,
  			pageSize:that.pageSize,
  			startTime:that.timeStart[0]||'',
  			endTime:that.timeStart[1]||'',
  			bindingState:that.bindingState
			};
			if(that.select==1){
				obj.bindingPhone = that.searchStr;
				obj.snCode = '';
			}else{
				obj.snCode = that.searchStr;
				obj.bindingPhone = '';
			};
  		that.$axios('post',that.Global.PATH.xwlist,obj,function(res){
	  		if(res.code==200){
	  			that.totals = res.data.count;
	  			that.allXwcount  = res.data.allXwcount;
	  			that.bindedXwcount = res.data.bindedXwcount;
	  			that.noBindXwcount = res.data.noBindXwcount;
	  			that.tableData = res.data.snList;
	  		};
  		});
		},
		saveChange(){
			let that = this;
			that.$axios1('post',that.Global.PATH.xwcurrencyupadte,{
				cIdLIst:that.selectList,
				mac:that.setMac
				
			},function(res){
	  		if(res.code==200){
	  			that.dialogFormVisible = false;
	  			that.setMac = '';
	  			that.selectList = [];
		  		that.$message({
		        message: '修改成功',
		        type: 'success'
		      });
	  		};
	  	});
		},
		searchbtn(){
			this.currentPage = 1;
			this.getData();
		},
		timeStartEnd(e){
			this.getData();
		},
		filterTag(value,row){
			return row.bindingState === value;
		},
		handleFilterChange(val){
			console.log(val);
			this.bindingState = val.order[0];
			this.getData();
		},
		setting(val){
			this.setMac = val;
			this.getSetData(val);
		},
		getSetData(mac){
			let that = this,
			obj = {
				mac:mac
			};
			that.$axios('post',that.Global.PATH.xwcurrencys,obj,function(res){
	  		if(res.code==200){
	  			let obj = res.data;
	  			let arr = [];
	  			that.currencysList = res.data;
	  			new Promise(function(resolve,reject){
	  				obj.forEach(function(val){
	  					if(val.isHave==1){
	  						arr.push(val.cId);
	  					};
	  				});
	  				resolve();
	  				reject();
	  			}).then(function(){
	  				that.selectList = arr;
		  			that.dialogFormVisible = true;
	  			}).catch(function(){
	  				window.location.reload();
	  			});
	  		}else{
	  			that.$message.error(res.msg);
	  		};
  		});
		},
		//解绑/绑定
		bangding(val,index){
			let that = this,
			obj = {
				mac:val.mac
			};
			that.$axios('post',that.Global.PATH.updateUntied,obj,function(res){
	  		if(res.code==200){
	  			that.$message({
	          message:res.msg,
	          type: 'success'
	       });
	        val.bindingState = 0;
	        that.$set(that.tableData,index,val);
	  		}else{
	  			that.$message.error(res.msg);
	  		};
  		});	
		},
		//全选
  	handleSelectionChange(val){
      this.multipleSelection = val;
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
  	//页面数变更
  	handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.getData();
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        this.getData();
    }
	},
	//使用的组件
  	components:{
		
	}
};
export default list;