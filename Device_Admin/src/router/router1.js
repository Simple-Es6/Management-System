let arr1 = [
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
        path: '/home/incomelist',
        name: 'IncomeList',
        meta:{keepAlive:true,power:99},
        component: resolve => require(['../page/Income/IncomeList.vue'], resolve)
    },
    {
        path: '/home/IncomeDetails',
        name: 'IncomeDetails',
        meta:{keepAlive:false,power:99},
        component: resolve => require(['../page/Income/IncomeDetails.vue'], resolve)
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
        meta:{keepAlive:true,power:5},
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
        component: resolve => require(['../pages/PlanetInformation/PlanetInformation.vue'], resolve)
    },
    {
        path: '/home/LabelManagement',
        name: 'LabelManagement',
        meta:{keepAlive:false,power:5},
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
        meta:{keepAlive:false,power:5},
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
        meta: {keepAlive: false,power:99},
        component: resolve => require(['../page/Fans/Fans.vue'], resolve)
    },
    {
        path: '/home/fanslist',
        name: 'FansList',
        meta: {keepAlive: false,power:5},
        component: resolve => require(['../page/Fans/FansList.vue'], resolve)
    },
    {
        path: '/home/FansReward',
        name: 'FansReward',
        meta: {keepAlive: false,power:5},
        component: resolve => require(['../page/Fans/FansReward.vue'], resolve)
    },
    {
        path: '/home/FansInteract',
        name: 'FansInteract',
        meta: {keepAlive: false,power:5},
        component: resolve => require(['../page/Fans/FansInteract.vue'], resolve)
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
    {
        path: '/home/VersionList',
        name: 'VersionList',
        meta: {keepAlive: false,power:5},
        component: resolve => require(['../page/VersionSetting/VersionList.vue'], resolve),
    }		
];
export  default arr1;
