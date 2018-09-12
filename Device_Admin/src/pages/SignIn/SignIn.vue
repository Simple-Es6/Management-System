<template>
    <div class="signIn">
        <p class="title">
            欢迎入驻未来声音宣发平台
        </p>
        <el-row :gutter="20">
            <el-col :span="20" :offset="2">
                <div class="content"></div>
            </el-col>
        </el-row>
        <div class="text">
            <el-checkbox v-model="checked">同意平台协议</el-checkbox>
            <el-button v-if="checked" @click="next">下一步</el-button>
        </div>
                
          
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                checked:false
            }
        },
        methods:{
            next(){
                this.$router.push({name:'signDetail'});
            }
        }
    }
</script>
<style>
.signIn .title{
    text-align:center;
    margin:30px auto;
    font-size:30px;
    font-weight:bold;
}
.signIn .content{
    background:red;
    height:300px;
}
.signIn .text{ 
    text-align:center;
    width:100%;
    margin-top:20px;
}
.signIn .el-checkbox__inner{
    border-radius:50%;
}
.signIn .el-button{
    margin-left:30px;
}
</style>

