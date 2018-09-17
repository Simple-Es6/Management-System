import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/',
            name: 'Login',
            meta:{keepAlive:false,power:99},
            component: resolve => require(['../pages/Login.vue'], resolve)
        },
        {
            path: '/home',
            name: 'Home',
            meta:{keepAlive:false,power:99},
            component: resolve => require(['../layout/Home.vue'], resolve),
            children:[
            	{
            		path: '/home/uploadhome',
                    name: 'UpLoadHome',
                    meta:{keepAlive:false,power:99},
                    component: resolve => require(['../page/UpLoadHome/UpLoadHome.vue'], resolve)
            	},
            	{
                    path: '/home/uploadmusic',
                    name: 'UpLoadMusic',
                    meta:{keepAlive:false,power:99},
                    component: resolve => require(['../page/UpLoadMusic/UpLoadMusic.vue'], resolve)
               	},
                {
                    path: '/home/income',
                    name: 'Income',
                    meta:{keepAlive:false,power:99},
                    component: resolve => require(['../page/Income/Income.vue'], resolve)
                },
                {
                    path: '/home/voicebox',
                    name: 'VoiceBox',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/VoiceBox/VoiceBox.vue'], resolve)
                },
                {
                    path: '/home/blackpearl',
                    name: 'BlackPearl',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/BlackPearl/BlackPearl.vue'], resolve)
                },
                {
                    path: '/home/boxsetting',
                    name: 'BoxSetting',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/BoxSetting/BoxSetting.vue'], resolve)
                },
                {
                    path: '/home/playrecord',
                    name: 'PlayRecord',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/PlayRecord/PlayRecord.vue'], resolve)
                },
                {
                    path: '/home/PlayMusic',
                    name: 'PlayMusic',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../components/PlayMusic.vue'], resolve)
                },
                {
                    path: '/home/snadmin',
                    name: 'SnAdmin',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/SnAdmin/SnAdmin.vue'], resolve)
                },
                {
                    path: '/home/planetinformation',
                    name: 'PlanetInformation',
                    meta:{keepAlive:false,power:4},
                    component: resolve => require(['../page/PlanetInformation/PlanetInformation.vue'], resolve)
                },
                {
                    path: '/home/LabelManagement',
                    name: 'LabelManagement',
                    meta:{keepAlive:false,power:4},
                    component: resolve => require(['../page/LabelManagement/LabelManagement.vue'], resolve)
                },
                {
                    path: '/home/Addsheet',
                    name: 'Addsheet',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/Addsheet/Addsheet.vue'], resolve)
                },
                {
                    path: '/home/StarSong',
                    name: 'StarSong',
                    meta:{keepAlive:true,power:5},
                    component: resolve => require(['../page/StarSong/StarSong.vue'], resolve)
                },
                {
                    path: '/home/MusicList',
                    name: 'MusicList',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/MusicList/MusicList.vue'], resolve)
                },
                {
                    path: '/home/UserAdmin',
                    name: 'UserAdmin',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/UserAdmin/UserAdmin.vue'], resolve)
                },
                {
                    path: '/home/AdminPage',
                    name: 'AdminPage',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/AdminPage/AdminPage.vue'], resolve)
                },
                {
                    path: '/home/RecordData',
                    name: 'RecordData',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/RecordData/RecordData.vue'], resolve)
                },
                {
                    path: '/home/PlayData',
                    name: 'PlayData',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/PlayData/PlayData.vue'], resolve)
                },
                {
                    path: '/home/AccessData',
                    name: 'AccessData',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/AccessData/AccessData.vue'], resolve)
                },
                {
                    path: '/home/BroadcastData',
                    name: 'BroadcastData',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/BroadcastData/BroadcastData.vue'], resolve)
                },
                {
                    path: '/home/UserData',
                    name: 'UserData',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/UserData/UserData.vue'], resolve)
                },
                {
                    path: '/home/fans',
                    name: 'Fans',
                    meta: {keepAlive: false,power:5},
                    component: resolve => require(['../page/Fans/Fans.vue'], resolve)
                },
                {
                    path: '/home/DetailsDay',
                    name: 'DetailsDay',
                    meta:{keepAlive:false,power:5},
                    component: resolve => require(['../page/DetailsDay/DetailsDay.vue'], resolve)
                },
                {
                    path: '/home/AdminSetting',
                    name: 'AdminSetting',
                    meta: {keepAlive: false,power:5},
                    component: resolve => require(['../page/AdminSetting/AdminSetting.vue'], resolve),
                },
                //Sun
                {
                    path: '/home/MyMusic',
                    name: 'My-music',
                    meta:{keepAlive:false,power:2},
                    component: resolve => require(['../pages/MyMusic/My-music.vue'], resolve)
                },
                {
                    path: '/home/Artist',
                    name: 'Artist',
                    meta:{keepAlive:false,power:2},
                    component: resolve => require(['../pages/Artist/Artist.vue'], resolve)
                },
                
                {
                    path: '/home/artistCheck',
                    name: 'ArtistCheck',
                    meta: { keepAlive: false,power:3 },
                    component: resolve => require(['../pages/Check/artistCheck.vue'], resolve),
                },
                {
                    path: '/home/musicCheck',
                    name: 'MusicCheck',
                    meta: { keepAlive: true ,power:3},
                    component: resolve => require(['../pages/Check/musicCheck.vue'], resolve),
                },
                {
                    path: '/home/themeCheck',
                    name: 'ThemeCheck',
                    meta: { keepAlive: false ,power:3},
                    component: resolve => require(['../pages/Check/themeCheck.vue'], resolve),
                },
                {
                    path: '/home/setCheck',
                    name: 'SetCheck',
                    meta: { keepAlive: false ,power:3},
                    component: resolve => require(['../pages/Check/setCheck.vue'], resolve),
                },
                {
                    path: '/home/commentCheck',
                    name: 'commentCheck',
                    meta: { keepAlive: false ,power:3},
                    component: resolve => require(['../pages/Check/commentCheck.vue'], resolve),
                },
                {
                    path: '/home/OrganizationManage',
                    name: 'CheckOrganizationManage',
                    meta: { keepAlive: false ,power:3},
                    component: resolve => require(['../pages/OrganizationManage/OrganizationManage.vue'], resolve),
                },
                {
                    path: '/home/ArtistManage',
                    name: 'ArtistManage',
                    meta: { keepAlive: false ,power:5},
                    component: resolve => require(['../pages/ArtistManage/ArtistManage.vue'], resolve),
                },
                {
                    path: '/home/PeopleManage',
                    name: 'PeopleManage',
                    meta: { keepAlive: false ,power:5},
                    component: resolve => require(['../pages/PeopleManage/PeopleManage.vue'], resolve),
                },
                {
                    path: '/home/AccountManage',
                    name: 'AccountManage',
                    meta: { keepAlive: false ,power:5},
                    component: resolve => require(['../pages/AccountManage/accountManage.vue'], resolve),
                },
                {
                    path: '/home/ActivitiesSet',
                    name: 'ActivitiesSet',
                    meta: { keepAlive: false ,power:5},
                    component: resolve => require(['../pages/ActivitiesSet/ActivitiesSet.vue'], resolve),
                },
            ]
        },
        {
            path: '/HomePage',
            name: 'HomePage',
            meta: {keepAlive:false,power:99},
            component: resolve => require(['../pages/HomePage/HomePage.vue'], resolve),
        },
        {
            path: '/SignIn',
            name: 'SignIn',
            meta: {keepAlive: false,power:99},
            component: resolve => require(['../pages/SignIn/SignIn.vue'], resolve),
        },
        {
            path: '/signDetail',
            name: 'signDetail',
            meta: {keepAlive: false,power:99},
            component: resolve => require(['../pages/SignIn/signDetail.vue'], resolve),
        }
        /*{
	    path: '/login',
	    component: resolve => require(['../pages/Login.vue'], resolve)
		},*/
    ]
})