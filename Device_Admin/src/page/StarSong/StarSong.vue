<template>
	<div>
		<!--<v-pageTitle vtitle="星歌管理"></v-pageTitle>-->
		<el-row>
		  	<el-col :span="8">
                <el-date-picker
					size="small"
					clearable
					@change="timeStartEnd"
			      	v-model="timeStart"
			      	type="daterange"
			      	value-format="yyyy-MM-dd"
			      	range-separator="-"
			      	start-placeholder="开始日期"
			      	end-placeholder="结束日期">
			    </el-date-picker>
            </el-col>
            <el-col :span="4">
            	<el-button size="small">查询</el-button>
            </el-col>	
        	<el-col :span="2" :offset="10">
        		<el-button type="primary" @click = "func">添加星歌</el-button>
        	</el-col>
		</el-row>
		<el-row>
		  	<el-col :span="24">
		        <el-table
			      	:data="tableData"
			      	:default-sort = "{prop: 'time', order: 'descending'}"
			      	style="width: 100%">
			      	<el-table-column
			        	prop="xinxi"
			        	label="期数">
			      	</el-table-column>
			      	<el-table-column
			        	prop="show_times"
			        	sortable
			        	label="发布时间">
			        	<template slot-scope="scope">{{Global.oTime(scope.row.show_times)}}</template>
			      	</el-table-column>
			      	<el-table-column
			        	prop="musiccount"
			        	sortable
			        	label="歌曲数量">
			      	</el-table-column>
			      	<!--<el-table-column
			        	prop="pnum"
			        	sortable
			        	label="播放总人数">
			      	</el-table-column>
			      	<el-table-column
			        	prop="appnum"
			        	sortable
			        	label="APP完整播放人数"
			        	width="160px">
			      	</el-table-column>
			      	<el-table-column
			        	prop="fenb"
			        	sortable
			        	label="平均奖励分贝"
			        	width="160px">
			      	</el-table-column>
			      	<el-table-column
			        	prop="yxnum"
			        	sortable
			        	label="音箱完整播放人数"
			        	width="160px">
			      	</el-table-column>
			      	<el-table-column
			        	prop="hjz"
			        	sortable
			        	label="平均奖励黑珍珠"
			        	width="160px">
			      	</el-table-column>
			      	<el-table-column
			        	prop="staus"
			        	label="状态"
			        	width="100px">
			      	</el-table-column>-->
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
		<el-row>
		  	<el-col :span="24">
		  		<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage"
			      :page-sizes="[10,100, 200, 300, 400]"
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
    	name:'StarSong',
    	data(){
    		return{
    			timeStart:'',
    			totals:0,
    			pageSize:10,
    			currentPage:1,
    			tableData:[]
    		}
    	},
    	created:function(){
    		this.getData();
    	},
        methods:{
        	timeStartEnd(){
        		
        	},
        	getData(){
        		let that = this;
	    		that.$axios('post',that.Global.PATH.querystartMusiclist,{
	    			startRecord:that.currentPage,
	    			pageSize:that.pageSize
	    		},function(res){
			  		if(res.code==200){
			  			that.totals = res.data.count;
			  			that.tableData = res.data;
			  		};
		  		});
        	},
            func (){
                this.$router.push({name:'Addsheet'});
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
        }
    }
</script>

<style>
	.el-table .cell, .el-table th>div{
		padding: 0 !important;
		text-align: center !important;
	}
</style>