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
                {
                    path: '/home/LabelManagement',
                    name: 'LabelManagement',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/LabelManagement/LabelManagement.vue'], resolve)
                },
                {
                    path: '/home/Addsheet',
                    name: 'Addsheet',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/Addsheet/Addsheet.vue'], resolve)
                },
                {
                    path: '/home/StarSong',
                    name: 'StarSong',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/StarSong/StarSong.vue'], resolve)
                },
                {
                    path: '/home/MusicList',
                    name: 'MusicList',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/MusicList/MusicList.vue'], resolve)
                },
                {
                    path: '/home/UserAdmin',
                    name: 'UserAdmin',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/UserAdmin/UserAdmin.vue'], resolve)
                },
                {
                    path: '/home/AdminPage',
                    name: 'AdminPage',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/AdminPage/AdminPage.vue'], resolve)
                },
                {
                    path: '/home/RecordData',
                    name: 'RecordData',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/RecordData/RecordData.vue'], resolve)
                },
                {
                    path: '/home/UserData',
                    name: 'UserData',
                    meta:{keepAlive:false},
                    component: resolve => require(['../pages/UserData/UserData.vue'], resolve)
                },
                //Sun
                {
                    path: '/home/fans',
                    name: 'Fans',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Fans/Fans.vue'], resolve)
                },
                {
                    path: '/home/artistCheck',
                    name: 'ArtistCheck',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Check/artistCheck.vue'], resolve),
                },
                {
                    path: '/home/musicCheck',
                    name: 'MusicCheck',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Check/musicCheck.vue'], resolve),
                },
                {
                    path: '/home/setCheck',
                    name: 'SetCheck',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Check/setCheck.vue'], resolve),
                },
                {
                    path: '/home/themeCheck',
                    name: 'ThemeCheck',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Check/themeCheck.vue'], resolve),
                }
            ]
        },
        {
            path: '/HomePage',
            name: 'HomePage',
            meta: { keepAlive: false },
            component: resolve => require(['../pages/HomePage/HomePage.vue'], resolve),
        },
        {
            path: '/SignIn',
            name: 'SignIn',
            meta: { keepAlive: false },
            component: resolve => require(['../pages/SignIn/SignIn.vue'], resolve),
        },
        {
            path: '/signDetail',
            name: 'signDetail',
            meta: { keepAlive: false },
            component: resolve => require(['../pages/SignIn/signDetail.vue'], resolve),
        }
        /*{
	    path: '/login',
	    component: resolve => require(['../pages/Login.vue'], resolve)
		},*/
    ]
})