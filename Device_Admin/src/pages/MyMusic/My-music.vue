<template>
  <div>
      <el-row>
          <el-col :span="8" :offset="16">
            <el-input size="mini" placeholder="输入歌曲名称或音乐人名称" v-model="selectInput"  class="input-with-select" @keyup.enter.native="search">
                <el-select  slot="prepend" placeholder="请选择" v-model="select">
                    <el-option label="专辑" value="1"></el-option>
                    <el-option label="单曲" value="2"></el-option>
                </el-select>
                <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
            <el-radio-group size="mini" v-model="radio3" @change="musiclist" v-show="showTab">
                <el-radio-button label="0">全部{{radio3==0?total:''}}</el-radio-button>
                <el-radio-button label="1">已发布{{radio3==1?total:''}}</el-radio-button>
                <el-radio-button label="2">未发布{{radio3==2?total:''}}</el-radio-button>
            </el-radio-group>
            <el-radio-group v-model="radio3" @change="musiclist" v-show="!showTab">
                <el-radio-button label="0">全部{{radio3==0?total1:''}}</el-radio-button>
                <el-radio-button label="1">已发布{{radio3==1?total1:''}}</el-radio-button>
                <el-radio-button label="2">未发布{{radio3==2?total1:''}}</el-radio-button>
            </el-radio-group>
        </el-col>

        <el-col :span="4" :offset="4">
            <el-radio-group v-model="showVisible" size="mini"  @change="elechange" style="margin:20px 0">
                <el-radio :label="1">专辑</el-radio>
                <el-radio :label="0">单曲</el-radio>
            </el-radio-group>
        </el-col>
    </el-row>
    <!-- 专辑表格 -->
   
    <el-table :data="tableData" stripe style="width: 100%" size="mini"  v-show="showVisible">
            <el-table-column prop="special_picture" label="" width="80">
                 <template slot-scope="scope">
                    <img  :src="scope.row.special_picture" alt="" style="width: 50px;height: 50px;border-radius:50%;">
                 </template>
            </el-table-column>
            <el-table-column prop="special_title" label="标题" width="180"></el-table-column>
            <el-table-column  label="类型" width="180">
            	<template slot-scope="scope">
            			<span>{{scope.row.type==1?'推荐专题':'普通专题'}}</span>
            	</template>	
            </el-table-column>
            <el-table-column prop="musiccount" label="歌曲数" width="120"></el-table-column>
            <el-table-column prop="create_times" label="发行日期"></el-table-column>
            <el-table-column prop="shenhe" label="状态" ></el-table-column>
            <el-table-column prop="operate" label="操作" width="260" >
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <!-- <el-button size="mini" @click="handleSubmit(scope.$index,scope.rpw)">提交审核</el-button> -->
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        
    </el-table>
    <!-- 单曲表格 -->
    <el-table :data="tableDataSingle" size="mini" stripe style="width: 100%" v-show="!showVisible">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="music_name" label="标题" ></el-table-column>
        <el-table-column prop="create_times" label="发布日期"></el-table-column>
        <el-table-column prop="singer_name" label="歌手"></el-table-column>
        <el-table-column prop="special_title" label="专辑" ></el-table-column>
        <!-- <el-table-column prop="album_type" label="专辑类型" ></el-table-column> -->
        <el-table-column prop="shenhe" label="状态" ></el-table-column>
        <el-table-column prop="operate" label="操作" >
            <template slot-scope="scope">
                <el-button size="mini" @click="goDetails(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-col :span="24" class="toolbar" style="margin-top:20px;" v-show="show">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-size="everyPageCount" :total="total" style="float:right;">
        </el-pagination>
    </el-col>
    <el-col :span="24" class="toolbar" style="margin-top:20px;" v-show="!show">
        <el-pagination layout="total, prev, pager, next, jumper" @size-change="handleSizeChange1" @current-change="handleCurrentChange1" :page-size="everyPageCount1" :total="total1" style="float:right;">
        </el-pagination>
    </el-col>
  </div>
</template>
<script>
import list from './My-music';
export default list;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-radio__inner{
    display:none;
}
.el-select{
    width:90px !important;
}
.el-radio-button:focus:not(.is-focus):not(:active){
    box-shadow: -1px 0 0 0 #fff!important;
    -webkit-box-shadow: -1px 0 0 0 #fff!important;
}
</style>
