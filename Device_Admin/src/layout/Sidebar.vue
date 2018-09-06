<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes"   class="el-menu-vertical-demo"  unique-opened 
       		background-color="#545c64"
		    text-color="#fff"
		    active-text-color="#ffd04b"
       	>
            <template v-for="item in items">
            	<template v-if="item.showType==showType||item.showType==99" >
	                <template v-if="item.isSon" >
	                    <el-submenu :index="item.index">
	                        <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
	                        <el-menu-item v-for="(subItem,i) in item.list"  :key="i" :index="subItem.index" @click="handleOpen(item,subItem)">{{subItem.name}}
	                        </el-menu-item>
	                    </el-submenu>
	                </template>
	                <template v-else>
	                    <el-menu-item :index="item.index" @click="handleOpen1(item)">
	                        <i :class="item.icon"></i>{{item.name}}
	                    </el-menu-item>
	                </template>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            	showType:1,
                items: [
                	{
                    	'name':'管理员首页',
                    	'path':'AdminPage',
                    	'icon':'',
                    	'showType':1,
                    	'index':'/home/AdminPage',
                    	'isSon':false
                    },
                    {
                    	'name':'艺人首页',
                    	'path':'Artist',
                    	'icon':'',
                    	'showType':2,
                    	'index':'Artist',
                    	'isSon':false
                    },
                    {
                    	'name':'设备',
                    	'path':'MyMusic',
                    	'isSon':true,
                    	'showType':1,
                    	'index':'/home/voicebox',
                    	'icon':'',
                    	'list':[
                    		{
                    			'name':'小未音箱',
                    			'path':'VoiceBox',
                    			'index':'/home/voicebox',
                    			'isSon':false
                            },
                            {
                    			'name':'黑珍珠',
                    			'path':'BlackPearl',
                    			'index':'/home/blackpearl',
                    			'isSon':false
                    		},
                    		{
                    			'name':'播放记录',
                    			'path':'PlayRecord',
                    			'index':'/home/playrecord',
                    			'isSon':false
                            },
                            {
                    			'name':'音箱设置',
                    			'path':'BoxSetting',
                    			'index':'/home/boxsetting',
                    			'isSon':false
                            },
                            {
                    			'name':'SN管理',
                    			'path':'SnAdmin',
                    			'index':'/home/snadmin',
                    			'isSon':false
                            }
                    	]
                    },
                    {
                    	'name':'音乐管理',
                    	'path':'MyMusic',
                    	'isSon':true,
                    	'showType':99,
                    	'index':'/home/MyMusic',
                    	'icon':'',
                    	'list':[
                    		{
                    			'name':'上传音乐',
                    			'path':'UpLoadHome',
                    			'index':'/home/uploadhome',
                    			'isSon':false
                            },
                            {
                    			'name':'我的音乐',
                    			'path':'MyMusic',
                    			'index':'/home/MyMusic',
                    			'isSon':false
                    		}
                    		/*{
                    			'name':'星球管理',
                    			'path':'StarAdmin',
                    			'isSon':true,
                    			'index':'star',
                    			'list':[
                    				{
                    					'name':'添加星歌',
                    					'path':'AddStar',
                    				}
                    			]
                    		}*/
                    	]
                    },
                    {
                    	'name':'收入管理',
                    	'path':'MyMusic',
                    	'icon':'',
                    	'showType':99,
                    	'index':'/home/income',
                    	'isSon':false
                    },
                    {
                    	'name':'粉丝管理',
                    	'path':'MyMusic',
                    	'icon':'',
                    	'showType':99,
                    	'index':'/home/fans',
                    	'isSon':false
                    },
                    {
                    	'name':'审核',
                    	'path':'Check',
                    	'icon':'',
                    	'showType':1,
                    	'index':'/home/Check',
						'isSon':true,
						'list':[
							{
								'name':'艺人审核',
								'path':'/home/artistCheck',
								'icon':'',
								'index':'/home/artistCheck',
								'isSon':false
							},
							{
								'name':'音乐审核',
								'path':'/home/musicCheck',
								'icon':'',
								'index':'/home/musicCheck',
								'isSon':false
							},
							{
								'name':'主题审核',
								'path':'/home/themeCheck',
								'icon':'',
								'index':'/home/themeCheck',
								'isSon':false
							},
							{
								'name':'审核设置',
								'path':'/home/setCheck',
								'icon':'',
								'index':'/home/setCheck',
								'isSon':false
							}
						]
                    },
                    {
                    	'name':'星球信息',
                    	'path':'PlanetInformation',
                    	'icon':'',
                    	'showType':1,
                    	'index':'/home/planetinformation',
                    	'isSon':false
                    },
                    {
                    	'name':'标签管理',
                    	'path':'LabelManagement',
                    	'icon':'',
                    	'showType':1,
                    	'index':'/home/LabelManagement',
                    	'isSon':false
                    },
                    {
                    	'name':'星歌管理',
                    	'path':'StarSong',
                    	'icon':'',
                    	'showType':1,
                    	'index':'/home/StarSong',
                    	'isSon':false
                    },
                    {
                    	'name':'音乐榜单',
                    	'path':'MusicList',
                    	'icon':'',
                    	'showType':1,
                    	'index':'/home/MusicList',
                    	'isSon':false
                    },
                    {
                    	'name':'用户管理',
                    	'path':'UserAdmin',
                    	'icon':'',
                    	'showType':1,
                    	'index':'/home/UserAdmin',
                    	'isSon':false
                    }
                    
                ]
            }
        },
        created:function(){
  			this.showType = 1; 
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
		    			'path':val.index
		    		},
		    		{
		    			'name':value.name,
		    			'path':value.index
		    		}
		    	];
		    	this.$store.dispatch('changePage',arr);
		    	this.$router.replace({path:value.index});
		    },
		    handleOpen1(val) {
		    	let arr = [
		    		{
		    			'name':val.name,
		    			'path':val.index
		    		}
		    	];
		    	this.$store.dispatch('changePage',arr);
		    	this.$router.replace({path:val.index});
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
    }
    .sidebar > ul {
        height:100%;
    }
</style>
