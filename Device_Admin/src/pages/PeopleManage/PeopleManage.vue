<template>
    <div class="peoplemanage">
        <el-row class="top">
            <el-col :span="8" class="left">
                <el-row>
                    <el-col :span="4" class="head">
                        <img src="https://img01.sogoucdn.com/net/a/04/link?appid=100520145&url=http%3A%2F%2Fimg04.sogoucdn.com%2Fapp%2Fa%2F100520021%2F64c93f47e43483e906f999255808eca0" alt="" class="pic">
                    </el-col>
                    <el-col :span="16" class="describe">
                        <span>
                            星球居民
                        </span>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8" :offset="8" class="right">
                <el-row>
                    <el-col :span="12">
                        昨日新增
                        <p>0人</p>
                    </el-col>
                    <el-col :span="12">
                        居民总数
                        <p>171人</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div>
            <span style="text-align:left;">星球居民变化趋势</span>
            <!-- <template>
                <el-radio v-model="radio" label="1">近7天</el-radio>
                <el-radio v-model="radio" label="2">近30天</el-radio>
            </template> -->
        </div>
        <!-- <el-row>
            <el-col :span="1">星球居民变化趋势</el-col>
            <el-col :span="8">
                <el-radio v-model="radio" label="1">近7天</el-radio>
                <el-radio v-model="radio" label="2">近30天</el-radio>
            </el-col>
        </el-row> -->
        <div class="dataEchars" ref="dataEchars"></div>
        
        <el-table :data="tableData" stripe style="width: 100%" >
            <el-table-column  prop=" " label="头像" ></el-table-column>
            <el-table-column  prop=" " label="昵称" ></el-table-column>
            <el-table-column  prop=" " label="加入" ></el-table-column>
            <el-table-column  prop=" " label="打赏" >
                <template slot-scope="scope" width="30">
                    <el-button size="mini">打赏分贝</el-button>
                    <el-button size="mini">打赏黑珍珠</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script> 
    import list from './PeopleManage.js';
    export default list;
</script>
<style scoped>
.peoplemanage .top{
    width:100%;
    height:100px;
    border:1px solid #000;
    border-radius:8px;
}

.peoplemanage .left .head{
    width:80px;
    height:80px;
    margin:10px;
}
.peoplemanage .left .pic{
    width:100%;
    height:100%;
    object-fit: cover;
}
.peoplemanage .left .describe{
    line-height: 100px;
}
.peoplemanage .right{
    margin-top:20px;
    text-align: center;
}
.peoplemanage .right .el-col:nth-child(1){
    border-right:1px solid #000;
}
.peoplemanage .dataEchars{
    height:300px;
    width:100%;
}
</style>
 
