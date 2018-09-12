<template>
  <div class="tcheck">
  	<el-row>
          <el-col :span="8">
            <el-radio-group v-model="radio1" @change="tabChange">
                <el-radio-button label="-1">全部{{radio1==-1?total:''}}</el-radio-button>
                <el-radio-button label="0">待处理{{radio1==0?total:''}}</el-radio-button>
                <el-radio-button label="1">已通过{{radio1==1?total:''}}</el-radio-button>
                <el-radio-button label="2">已拒绝{{radio1==2?total:''}}</el-radio-button>
            </el-radio-group>
            </el-col>
            <el-col :span="8" class="btn">
                <el-button label="1" @click="allCheck(1)">全部通过</el-button>
                <el-button  label="2" @click="allCheck(2)">全部拒绝</el-button>
            </el-col>
            <el-col :span="8">
                    主题名称
                    <el-input placeholder="单行输入"  class="input-with-select" style="width:200px;" v-model="selectInput" @keyup.enter.native="search">
                        <el-button slot="append" icon="el-icon-search"  @click="search"></el-button>
                    </el-input>
            </el-col>
      </el-row>
      <el-table :data="tableData" stripe style="width: 100%"  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="special_picture" label="封面" width="80">
                 <template slot-scope="scope">
                    <img   :src="scope.row.music_picture" alt="" style="width: 50px;height: 50px;">
                 </template>
            </el-table-column>
            <el-table-column prop="create_times" label="上传时间" width="180"></el-table-column>
            <el-table-column prop="special_title" label="主题名称" width="120"></el-table-column>
            <el-table-column prop="musiccount" label="音乐数量"></el-table-column>
            
            <!-- <el-table-column prop="singer_name" label="发布人" ></el-table-column> -->
            <el-table-column label="详情" >
               <template slot-scope="scope">
                  <el-button label="3" @click="dialogVisibles(scope.$index,scope.row)" >详情</el-button>
               </template>  
            </el-table-column>
            <el-table-column prop="shenhe" label="状态" ></el-table-column>
            <el-table-column prop="operate" label="操作" width="260">
                <template slot-scope="scope" v-if="scope.row.is_examine==0">
                    
                    <el-button size="mini"  @click="check(scope.row,scope.$index,1)">审核成功</el-button>
                    <el-button size="mini"  @click="check(scope.row,scope.$index,2)">审核失败</el-button>
                    
                    
                  
                </template>
            </el-table-column>
        
    </el-table>
    <!-- 分页 -->
    <el-col :span="24" class="toolbar">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;" :current-page.sync="currentPage">
        </el-pagination>
    </el-col>
    <!-- 详情页面 -->
    <el-dialog  title="详情" :visible.sync="dialogVisible"> 
      <el-form class="demo-form-inline" :model="form" >
        <el-form-item label="标题:" >{{form.special_title}}</el-form-item>
        <el-form-item label="图片:" class="pic">
            <img :src="form.special_picture" alt="" >
            </el-form-item>
        <el-form-item label="描述:" >{{form.special_describe}}</el-form-item>
        <el-form-item label="音乐列表:">
            <div v-for="item in form.listmusic">
                
                    <p>音乐名字:{{item.music_name}}</p>
                    <p>歌手名字:{{item.singer_name}}</p>
                    <p class="pic"><img :src="item.music_picture" alt=""></p>
                    <p><audio :src="item.music_path" controls="controls"  ref="audiodom"></audio></p>
            </div>
        </el-form-item>
        <el-form-item label="专题标题:">{{form.special_title}}</el-form-item>
        <el-form-item label="发布时间:">{{form.create_times}}</el-form-item>
        <el-form-item v-if="hide">
          <el-button  @click="detailCheck(form,1)">审核成功</el-button>
          <el-button  @click="detailCheck(form,2)">审核失败</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import list from './themeCheck.js';
export default list;
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tcheck .btn{
    line-height:40px;
}
.tcheck .pic{
    width:100px;
    height:100px;
}
.tcheck .pic img{
    width:100%;
    height:100%;
    object-fit:cover;
}
.tcheck li{
    list-style: none;
}
</style>
