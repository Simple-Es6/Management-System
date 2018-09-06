<template>
    <div class="home_page">
        <el-container>
            <el-header>
                <el-row :gutter="40">
                    <el-col :span="4">
                        <div class="head">
                            <img src="" alt="">
                        </div>
                      
                    </el-col>
                    <el-col :span="16">
                        <ul class="left">
                            <li :label="3" @click="skip('home/Artist')">首页</li>
                            <li :label="6">个人中心</li>
                            <li :label="9">常见问题</li>
                        </ul>
                    </el-col>
                    <el-col :span="4">
                        <ul>
                            <li :label="3" @click="skip('SignIn')">注册</li>
                            <li :label="6" @click="skip('Login')">登录</li>
                            
                        </ul>
                    </el-col>
                </el-row>   
            </el-header>
            <el-main>
                <p class="btn">
                    现在加入
                </p>
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        skip(a){
            this.$router.push(a);
        }
    }
}
</script>
<style>

.home_page li{
    list-style: none;
    float:left;
    color:#fff;
    margin:0 10px;
    cursor: pointer;
}
.home_page ul{
    overflow: hidden;
}
.home_page .left li{
    margin:0 20px;
}
.home_page .el-header{
    background:#003;
    line-height:80px;
    height:80px!important;
}

.home_page .head{
    width:60px;
    height:60px;
    border-radius:50%;
    background:#fff;
    margin:10px auto;
}
.home_page .el-main{
    width:100%;
    min-height:545px;
    background:url(../../../static/image/bg.jpg) no-repeat;
}
.home_page .btn{
    width:200px;
    height:60px;
    border:2px solid red;
    line-height:60px;
    text-align: center;
    cursor: pointer;
    font-size:24px;
    margin:300px auto;
}
</style>

