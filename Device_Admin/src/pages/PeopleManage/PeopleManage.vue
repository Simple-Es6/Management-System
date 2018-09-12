<template>
    <div class="peoplemanage">
        <div class="top">
            <el-row>
                <el-col :span="8" class="left">
                    <span>
                        <img src="https://img01.sogoucdn.com/net/a/04/link?appid=100520145&url=http%3A%2F%2Fimg04.sogoucdn.com%2Fapp%2Fa%2F100520021%2F64c93f47e43483e906f999255808eca0" alt="" class="pic">
                    </span>
                    <span>星球居民</span>
                </el-col>
            </el-row>
        </div>
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
    export default {
        name:'PeopleManage',
        data(){
            return {
                tableData:[],
                total: 0,
                everyPageCount: 10,
                currentPage:1,
                page: 1,
            }
        }
    }
</script>
<style scoped>
.peoplemanage .top{
    width:100%;
    height:100px;
    border:1px solid #000;
    border-radius:8px;
}
.peoplemanage .left span{
    display:inline-block;
}
.peoplemanage .left span:nth-child(1){
    width:80px;
    height:80px;
    margin:10px;
}
.peoplemanage .left span:nth-child(1) .pic{
    width:100%;
    height:100%;
    object-fit: cover;
}
.peoplemanage .left span:nth-child(2){
    vertical-align: center;
}
</style>
 
