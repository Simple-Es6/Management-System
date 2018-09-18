<template>
    <div class="peoplemanage">
        <el-row class="top">
            <el-col :span="8" class="left">
                <el-row>
                    <el-col :span="4" class="head">
                        <img  alt="" class="pic">
                    </el-col>
                    <el-col :span="16" class="describe">
                        <span>
                            粉丝指数
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
                        粉丝总数
                        <p>171人</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div style="display:flex; justify-content: space-between;">
            <span style="text-align:left;">星球居民变化趋势</span>
            <div style="width:30%;">
                <el-radio v-model="radio" label="1">近7天</el-radio>
                <el-radio v-model="radio" label="2">近30天</el-radio>
            </div>
        </div>
        <div class="dataEchars" ref="dataEchars1"></div>
    </div>
</template>
<script> 
    import list from './Fans.js';
    export default list;
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("./Fans.css");
</style>