<template>
  <div>
  	 <el-table :data="tableData" stripe style="width: 100%" size="mini" >
            <el-table-column prop="nickname" label="用户昵称" width="120"></el-table-column>
            <el-table-column prop="create_times" label="上传时间"></el-table-column>
            <el-table-column prop="show_time" label="展示时间" ></el-table-column>
            <el-table-column prop="operate" label="操作" width="260" >
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar" style="margin-top:20px;">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;">
        </el-pagination>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'MusicRecommend',
  data () {
    return {
        tableData:[],
        total: 0,
        page: 1,
        everyPageCount: 10,
    }
  },
  //组件生成时执行事件
  created:function(){
  	this.getData(1);
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
				handleEdit(row){
					this.$router.push({name:'UpLoadTheme',params:{
							specialid:row.specialid
						}
					});
				},
        getData(num){
            let _this=this;
            let params={
                startRecord: num,
                pageSize: _this.everyPageCount,
            };
            _this.$axios('post', _this.Global.PATH1.querytuijianlist, params, res => {
                if (res.code == 200) {
                    _this.tableData=res.data;
                    _this.total=res.count;
                }
            });
        },
        handleSizeChange(val) {
            this.everyPageCount = val;
        },
        handleCurrentChange(val) {
            this.getData(val);
        },
        
		
	},
	//使用的组件
  components:{
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
