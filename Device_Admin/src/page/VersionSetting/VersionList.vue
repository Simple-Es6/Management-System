<template>
  <div>
  	<div class="versionitem">
  		<div class="textMain h1Title">
  			版本列表
  		</div>
  	</div>
  	<div class="versionitem">
	  	<el-table
	      	:data="tableData"
	      	style="width: 100%">
	      	<el-table-column
	        	prop="date"
	        	label="发布时间"
	      	>
	      	</el-table-column>
	      	<el-table-column
	        	prop="version"
	        	label="版本"
			>
	      	</el-table-column>
	      	<el-table-column
	        	prop="versiontitle"
	        	label="版本标题"
			>
	      	</el-table-column>
	      	<el-table-column
	        	prop="versiontitle"
	        	label="版本内容"
			>
	      	</el-table-column>
	      	<el-table-column
	        	prop="versiontitle"
	        	label="安装包大小"
			>
	      	</el-table-column>
	      	<el-table-column
	        	prop="versiontitle"
	        	label="平台类型"
			>
	      	</el-table-column>
	      	<el-table-column
	        	prop="versiontitle"
	        	label="平台类型"
			>
	      	</el-table-column>
	      	<el-table-column
	        	prop="versiontitle"
	        	label="发布人"
			>
	      	</el-table-column>
	      	<el-table-column
	        	prop="versiontitle"
	        	label="更新方式"
			>
	      	</el-table-column>
	      	<el-table-column
	        	label="操作"
			>
				
	      	</el-table-column>
	   	</el-table>
   	</div>
  </div>
</template>
<script>
export default {
  	name: 'VersionList',
  	data () {
    	return {
      		tableData:[]
    	}
  	},
  	//组件生成时执行事件
  	created:function(){
  	
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		
	},
	//使用的组件
  	components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
