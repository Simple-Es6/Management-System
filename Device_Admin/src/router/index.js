import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            meta:{keepAlive:false},
            component: resolve => require(['../pages/Login.vue'], resolve)
        },
        {
            path: '/home',
            name: 'Home',
            meta:{keepAlive:false},
            component: resolve => require(['../layout/Home.vue'], resolve),
            children:[
            	{
                    path: '/home/Artist',
                    name: 'Artist',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/Artist/Artist.vue'], resolve)
                },
            	{
            		path: '/home/uploadhome',
                    name: 'UpLoadHome',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/UpLoadHome/UpLoadHome.vue'], resolve)
            	},
            	{
                    path: '/home/uploadmusic',
                    name: 'UpLoadMusic',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/UpLoadMusic/UpLoadMusic.vue'], resolve)
                },
                {
                    path: '/home/MyMusic',
                    name: 'My-music',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/MyMusic/My-music.vue'], resolve)
                },
                {
                    path: '/home/income',
                    name: 'Income',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/Income/Income.vue'], resolve)
                },
                {
                    path: '/home/fans',
                    name: 'Fans',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/Fans/Fans.vue'], resolve)
                },
                {
                    path: '/home/voicebox',
                    name: 'VoiceBox',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/VoiceBox/VoiceBox.vue'], resolve)
                },
                {
                    path: '/home/blackpearl',
                    name: 'BlackPearl',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/BlackPearl/BlackPearl.vue'], resolve)
                },
                {
                    path: '/home/boxsetting',
                    name: 'BoxSetting',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/BoxSetting/BoxSetting.vue'], resolve)
                },
                {
                    path: '/home/playrecord',
                    name: 'PlayRecord',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/PlayRecord/PlayRecord.vue'], resolve)
                },
                {
                    path: '/home/snadmin',
                    name: 'SnAdmin',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/SnAdmin/SnAdmin.vue'], resolve)
                },
                {
                    path: '/home/planetinformation',
                    name: 'PlanetInformation',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/PlanetInformation/PlanetInformation.vue'], resolve)
                },
            ]
        }
        /*{
	    path: '/login',
	    component: resolve => require(['../pages/Login.vue'], resolve)
		},*/
    ]
})