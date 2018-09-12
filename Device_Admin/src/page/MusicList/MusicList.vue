<template>
  <div>
  	<el-row>
		  <el-col :span="12">
		  	<span class="h0Title textMain">音乐榜单</span>
			</el-col>
			<el-col :span="8">
		  	<el-input placeholder="请输入歌曲或歌手名称" clearable v-model="userinput" class="input-with-select">
			    	<el-select v-model="selectOption" slot="prepend" placeholder="请选择">
			      	<el-option label="用户电话" value="1"></el-option>
			      	<el-option label="用户昵称" value="2"></el-option>
				    </el-select>
				    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
				</el-input>
			</el-col>
		</el-row>
		<el-row style="margin-top: 30px;">
		  <el-col :span="6">
		  	<el-radio-group v-model="radio1">
		      <el-radio-button label="1">星歌排行榜</el-radio-button>
		      <el-radio-button label="2">点亮排行榜</el-radio-button>
		    </el-radio-group>
			</el-col>
			<el-col :span="6">
		  	<el-radio-group v-model="radio2">
		      <el-radio-button label="1">日榜</el-radio-button>
		      <el-radio-button label="2">周榜</el-radio-button>
		      <el-radio-button label="3">月榜</el-radio-button>
		    </el-radio-group>
			</el-col>
			<el-col :span="12">
				<el-date-picker
		      v-model="value2"
		      type="date"
		      placeholder="选择日期"
		    >
		    </el-date-picker>
		    <el-button>查询</el-button>
			</el-col>
		</el-row>
		<el-row style="margin-top: 30px;">
		  <el-col :span="22">
		  	<el-table
	      	:data="tableData"
	      	style="width: 100%">
	      	<el-table-column
	        	type="index"
	        	label="编号"
	        	width="50px">
	      	</el-table-column>
	      	<el-table-column
	        	prop="planetName"
	        	label="期数">
	      	</el-table-column>
	      	<el-table-column
	        	prop="weekLike"
	        	sortable
	        	label="更新时间">
	      	</el-table-column>
	      	<el-table-column
	        	prop="weekLike"
	        	sortable
	        	label="上榜音乐数量">
	      	</el-table-column>
	      	<el-table-column
	        	prop="weekLike"
	        	sortable
	        	label="歌曲总数">
	      	</el-table-column>
	      	<el-table-column
	        	prop="weekLike"
	        	sortable
	        	label="总播放次数"
	        	width="160px">
	      	</el-table-column>
	      	<el-table-column
	        	prop="weekLike"
	        	sortable
	        	label="总点亮人数"
	        	width="160px">
	      	</el-table-column>
	      	<el-table-column
	        	label="操作">
	         	<template slot-scope="scope">
		        	<el-button type="text" size="small">查看</el-button>
		        	<el-button type="text" size="small">删除</el-button>
		        	<el-button type="text" size="small">撤销</el-button>    	
		      	</template>	
	      	</el-table-column>
		   	</el-table>
			</el-col>
		</el-row>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      selectOption:'1',
      tableData:[],
      userinput:'',
      radio1:'1',
      value2:'',
      radio2:'1'
    }
  },
  created:function(){
  	
	},
	methods:{
		search(){
			
		},
		
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
