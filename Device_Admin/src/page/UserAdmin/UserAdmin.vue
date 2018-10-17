<template>
  <div>
 		<el-row type="flex"  justify="center" :gutter="30">
 			<el-col  :span="8">
 				<el-radio-group v-model="userradio" @change="tabclick">
			      	<el-radio-button label="0" >所用用户</el-radio-button>
			      	<el-radio-button label="2">正常用户</el-radio-button>
			      	<el-radio-button label="1">禁用用户</el-radio-button>
			      	<!--<el-radio-button label="3"></el-radio-button>-->
			    </el-radio-group>
			</el-col>
			<el-col  :span="6">
				<el-button type="primary">新增用户</el-button>
			</el-col>
			<el-col  :span="9">
			  <el-input placeholder="请输入用户账号或昵称" @keyup.enter.native="search"  clearable v-model="userinput" class="input-with-select">
			    	<el-select v-model="selectOption" slot="prepend" placeholder="请选择">
				      	<el-option label="用户电话" value="2"></el-option>
				      	<el-option label="用户昵称" value="1"></el-option>
				    </el-select>
				    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
				</el-input>
 			</el-col>
		</el-row>	
		<el-row type="flex"  justify="center" :gutter="30">
 			<el-col  :span="23">
 				<el-table
 					ref="multipleTable"
				    :data="tableData"
				    tooltip-effect="dark"
				    style="width: 100%"
				    @selection-change="handleSelectionChange">
				    <el-table-column
				      	type="selection"
				      	width="55">
				    </el-table-column>
				    <el-table-column
				      	label="注册时间"
				      	prop="date_time"
				      	width="170">
				    </el-table-column>
				    <el-table-column
				      	prop="phone"
				      	label="手机号">
				    </el-table-column>
				    <el-table-column
				      	prop="nickname"
				      	label="用户名">
				    </el-table-column>
				    <el-table-column
				      	prop="planet_name"
				      	label="星球">
				    </el-table-column>
				    <el-table-column
				      	prop="asteroid_name"
				      	label="小新星名">
				    </el-table-column>
				    <el-table-column
				      	prop="gcount"
				      	label="关注人数">
				    </el-table-column>
				    <el-table-column
				      	prop="bgcount"
				      	label="粉丝人数">
				    </el-table-column>
				    <el-table-column
				      	prop="specialcount"
				      	label="专题数">
				    </el-table-column>
				    <el-table-column
				      	prop="musiccount"
				      	label="歌曲数">
				    </el-table-column>
				    <el-table-column
				      	label="用户状态">
				      <template slot-scope="scope"><p>{{scope.row.disable==2?'正常用户':'禁用用户'}}</p></template>	
				    </el-table-column>
				    <el-table-column
				      	label="操作"
				    	width="230">
						<template slot-scope="scope">
							<el-button v-show="scope.row.disable==1" size="mini" @click="disabled(scope.row,scope.$index)" type="success" icon="el-icon-check" circle></el-button>
							<el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
							<el-button v-show="scope.row.disable==2" @click="disabled(scope.row,scope.$index)" size="mini" type="warning" icon="el-icon-remove-outline" circle></el-button>
							<el-button @click="delectUser(scope.row,scope.$index)" size="mini" type="danger" icon="el-icon-delete" circle></el-button>
						</template>
				    </el-table-column>
				</el-table>
 			</el-col>
		</el-row>
		<el-row type="flex"  justify="center" :gutter="30" style="margin-top: 30px;">
 			 <el-col :span="10">
 				<el-button-group>
					<el-button type="primary" size="mini" @click="invertselect(tableData)">反选</el-button>
					<el-button @click="disableds" type="warning" size="mini">禁用/启用</el-button>
					<el-button @click="delectUsers" type="danger" size="mini">删除</el-button>
				</el-button-group>
 			</el-col>
 			<el-col :span="13">
 				<el-pagination
			      	@size-change="handleSizeChange"
			      	@current-change="handleCurrentChange"
			      	:current-page="currentPage"
			      	:page-sizes="[10,20,30,40,50,100,200]"
			      	:page-size="pageSize"
			      	layout="total, sizes, prev, pager, next, jumper"
			      	:total="totals">
			    </el-pagination>
 			</el-col>
		</el-row>
  </div>
</template>
<script>
export default {
  name: 'UserAdmin',
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
  	//禁用单个
  	disabled(val,index){
  		let arr = [],
  		that = this,
  		strs = '',
  		obj = {};
  		obj.userid = val.userid;
  		if(val.disable==1){
  			strs = '确定要启用该用户吗?';
  			obj.disable = 2;
  		}else{
  			strs = '确定要禁用该用户吗?';
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
  	//禁用用户
  	sendDis(obj){
  		let that = this,
  		urls = '';
  		that.$axios1('post',that.Global.PATH.disableuser,{'list':obj},function(res){
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
  			obj.userid = val.userid;  			
  			if(val.disable==1){
	  			obj.disable = 2;
	  		}else{
	  			obj.disable = 1;
	  			obj.token = val.token;
	  		};
	  		arr.push(obj);
  		});
  		that.$confirm('确定要禁用/启用选中的用户吗?', '提示', {
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
  		that = this,
  		obj = {};
  		obj.userid = val.userid;
  		arr.push(obj);
  		that.$confirm('确定要删除该用户吗?', '提示', {
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
  			let obj = {};
  			obj.userid = val.userid;
	  		arr.push(obj);
  		});
  		that.$confirm('确定要删除选中的用户吗?', '提示', {
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
  	//删除用户
  	sendDelect(obj){
  		let that = this;
  		that.$axios1('post',that.Global.PATH.deleteuser,{'list':obj},function(res){
	  		if(res.code==200){
	  			that.$message({
	        	type: 'success',
	        	message: '删除成功!'
	      	});
	  			that.getData(that.currentPage);
	  		};
	  	});
  	},
  	//切换用户类型
  	tabclick(){
  		this.getData(1);
  	},
  	//请求数据
  	getData(num){
  		let that = this,
  		obj = {
  			nickname:'',  
  			user_name:'',
  			startRecord:num,
  			pageSize:that.pageSize
  		};
  		if(that.userradio!=0){
  			obj.disable = that.userradio;
  		};
  		if(that.selectOption==1){
  			obj.nickname = that.userinput;
  		}else{
  			obj.user_name = that.userinput;
  		};
  		that.$axios('post',that.Global.PATH.queryuserlist,obj,function(res){
	  		if(res.code==200){
	  			that.tableData = res.data;
	  			that.totals = res.number;
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.el-select .el-input {
	    width: 110px !important;
	}
</style>