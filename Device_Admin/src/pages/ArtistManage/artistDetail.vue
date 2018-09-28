<template>
  <div class="artistDetail">
    <el-button @click="back" class="btn">返回</el-button>
  	<el-row class="gather">
      <el-col :span="4">
        <div class="pic">
          <img :src="head_portrait" alt="">
        </div>
      </el-col>
      <el-col :span="4">昵称：{{nickname}}</el-col>
      <el-col :span="4">主题：{{specialcount}}</el-col>
      <el-col :span="4">音乐：{{musiccount}}</el-col>
      <el-col :span="4">粉丝：{{fensicount}}</el-col>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%" size="mini">
      <el-table-column  prop="create_times" label="上传时间" ></el-table-column>
      <el-table-column label="头像">
          <template slot-scope="scope">
              <img  :src="scope.row.special_picture" alt="" style="width: 50px;height: 50px;">
            </template>
      </el-table-column> 
      <el-table-column  prop="special_title" label="专题描述" ></el-table-column>
      <el-table-column label="操作" >
          <template slot-scope="scope" width="30">
              <el-button size="mini" @click="examine(scope.row.listmusic)">查看</el-button>
          </template>
      </el-table-column>
    </el-table>
  <!-- 分页 -->
  <el-col :span="24" class="toolbar">
      <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;" :current-page.sync="currentPage">
      </el-pagination>
  </el-col>
 <!-- 音乐list -->
  <el-dialog title="音乐列表" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
    <ul class="list">
      <li v-for="name in listmusic">{{name.music_name}}<span @click="goDetails(name)">查看</span></li>
    </ul>
  </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'artistDetail',
  data () {
    return {
      tableData:[],
      total: 0,
      page: 1,
      everyPageCount: 10,
      currentPage:1,
      dialogVisible:false,
      head_portrait:'',
      nickname:'',
      specialcount:'',
      musiccount:'',
      fensicount:'',
      listmusic:'',
      userid:''
    }
  },
  computed:{
    getParams(){
       return this.$route.params.userid;
    }
	},
  //组件生成时执行事件
  created:function(){
    this.userid = this.$route.params.userid;
    this.getData(1);
	},
	//页面渲染完成事件
	mounted(){
		
	},
	//方法
	methods:{
		getData(num){
      let _this=this;
      let param={
        userid:this.userid,
        startRecord:num,
        pageSize:this.everyPageCount,
      };
      
      _this.$axios('post', _this.Global.PATH1.querymusicuserbyid, param, res => {
          if (res.code == 200) {
            _this.head_portrait=res.head_portrait;
            _this.nickname=res.nickname;
            _this.specialcount=res.specialcount;
            _this.musiccount=res.musiccount;
            _this.fensicount=res.fensicount;
            _this.tableData = res.data;
          }
      });
    },
    handleSizeChange(val) {
        this.everyPageCount = val;
        
    },
    handleCurrentChange(val) {
        this.getData(val);
    },
    back(){
      this.$router.go(-1);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    examine(val){
      this.dialogVisible=true;
      this.listmusic=val; 
    },
    goDetails(val){
      console.log(val)
       this.$router.push({name:'PlayMusic',params:{
            music:val.music_path,
            lrc:val.lyrics,
            type:1,
            musicname:val.music_name,
            singername:val.singer_name,
            music_picture:val.music_picture,
            music_id:val.musicid
          }
        });
    },
  },
  watch:{
    getParams:function(userid){
      if(userid){
        this.userid=userid;
        this.getData(1);
      };
      
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.artistDetail .gather{
    border:1px solid #999;
    border-radius: 7px;
    text-align: center;
    height:100px;
    line-height:100px;
    margin-bottom:30px;
}
.artistDetail .btn{
  margin-bottom:10px;
}
.artistDetail .pic{
  width:80px;
  height:80px;
  margin:10px;
}
.artistDetail .pic img{
  width:100%;
  height:100%;
  object-fit: cover;
}

.artistDetail .list li{
  list-style: none;
  display:flex;
  justify-content: space-between;
}
</style>
