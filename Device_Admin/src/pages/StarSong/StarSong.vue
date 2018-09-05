<template>
	<div>
		<!--<v-pageTitle vtitle="星歌管理"></v-pageTitle>-->
		<el-row>
		  	<el-col :span="12">
                <el-col :span="12">
                <el-date-picker
				    v-model="datavalue"
				    type="datetime"
				    placeholder="选择日期时间"
				    default-time="12:00:00">
				</el-date-picker>
                </el-col>
                <el-button>查询</el-button>
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
			        	prop="sort"
			        	label="排序"
			        	width="50px">
			      	</el-table-column>
			      	<el-table-column
			        	prop="sheet"
			        	label="期数">
			      	</el-table-column>
			      	<el-table-column
			        	prop="time"
			        	sortable
			        	label="发布时间">
			      	</el-table-column>
			      	<el-table-column
			        	prop="num"
			        	sortable
			        	label="歌曲数量">
			      	</el-table-column>
			      	<el-table-column
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
//  import vPageTitle from '../common/pageTitle.vue';
//  import TodoList from '../todoList/TodoList.vue';
    export default {
    	data(){
    		return{
    			datavalue:'',
    			tableData:[
    				{
    					sort:"1",
    					sheet:"星歌推荐榜第一期",
    					time:"2018-08-16 00:00",
    					num:"12",
    					pnum:"1200",
    					appnum:"3000",
    					fenb:"18899",
    					yxnum:"2233",
    					hjz:"3232",
    					staus:"等待发布"
    				},
    				{
    					sort:"1",
    					sheet:"星歌推荐榜第一期",
    					time:"2018-08-16 00:00",
    					num:"12",
    					pnum:"1200",
    					appnum:"3000",
    					fenb:"18899",
    					yxnum:"2233",
    					hjz:"3232",
    					staus:"等待发布"
    				},
    				{
    					sort:"1",
    					sheet:"星歌推荐榜第一期",
    					time:"2018-08-16 00:00",
    					num:"12",
    					pnum:"1200",
    					appnum:"3000",
    					fenb:"18899",
    					yxnum:"2233",
    					hjz:"3232",
    					staus:"等待发布"
    				},
    				{
    					sort:"1",
    					sheet:"星歌推荐榜第一期",
    					time:"2018-08-16 00:00",
    					num:"12",
    					pnum:"1200",
    					appnum:"3000",
    					fenb:"18899",
    					yxnum:"2233",
    					hjz:"3232",
    					staus:"等待发布"
    				}
    				
    			]
    		}
    	},
        components:{
//          vPageTitle
        },
        methods:{
            func (){
                this.$router.push({name:'Addsheet'});
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