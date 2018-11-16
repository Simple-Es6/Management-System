<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes"  class="el-menu-vertical-demo"  unique-opened 
       		background-color="#545c64"
		    text-color="#fff"
		    active-text-color="#ffd04b"
       	>
            <template v-for="item in items">
            	<template v-if="item.showType==showType||item.showType==99&&showType!=3" >
	                <template v-if="item.isSon" >
	                    <el-submenu :index="item.path">
	                        <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
	                        <el-menu-item v-for="(subItem,i) in item.list"  :key="i" :index="subItem.path" @click="handleOpen(item,subItem)">{{subItem.name}}
	                        </el-menu-item>
	                    </el-submenu>
	                </template>
	                <template v-else>
	                    <el-menu-item :index="item.path" @click="handleOpen1(item)">
	                        <i :class="item.icon"></i>{{item.name}}
	                    </el-menu-item>
	                </template>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
	import sidebar1 from './sidebar1.js';
	import sidebar2 from './sidebar2.js';
    export default {
        data() {
            return {
            	showType:1,
                items: [
                	...sidebar1,
                	...sidebar2  
                ]
            }
        },
        created:function(){
  			this.showType = this.$store.state.login||sessionStorage.getItem('mwladlogin'); 
  			//this.showType = 5; 
		},
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        methods: {
		    handleOpen(val,value) {
		    	let arr = [
		    		{
		    			'name':val.name,
		    			'path':val.path
		    		},
		    		{
		    			'name':value.name,
		    			'path':value.path
		    		}
		    	];
		    	this.$store.dispatch('changePage',arr);
		    	this.$router.replace({path:value.path});
		    },
		    handleOpen1(val) {
		    	let arr = [
		    		{
		    			'name':val.name,
		    			'path':val.path
		    		}
		    	];
		    	this.$store.dispatch('changePage',arr);
		    	this.$router.replace({path:val.path});
		    }
    	}
    }
</script>

<style scoped>
	.el-menu{
		border-right: 0;
	}
	.el-menu-vertical-demo{
		background-color:#545c64;
		text-color:#fff;
		active-text-color:#ffd04b;
	}
    .sidebar{
        display: block;
        position:fixed;
        left: 0;
        top: 50px;
        bottom:0;
        z-index: 998;
        width: 200px;
        background: #2E363F;
		overflow: auto;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
