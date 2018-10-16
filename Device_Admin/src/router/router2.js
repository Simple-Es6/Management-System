let arr = [
    {
        path: '/home/CommentList',
        name: 'CommentList',
        meta: {keepAlive: false,power:5},
        component: resolve => require(['../pages/CommentSetting/CommentList.vue'], resolve),
    },
    {
        path: '/home/ThemeList',
        name: 'ThemeList',
        meta: {keepAlive: false,power:5},
        component: resolve => require(['../pages/ThemeSetting/ThemeList.vue'], resolve),
    },
    {
        path: '/home/UserList',
        name: 'UserList',
        meta: {keepAlive: false,power:5},
        component: resolve => require(['../pages/UserSetting/UserList.vue'], resolve),
    },
    {
        path: '/home/MyMusic',
        name: 'My-music',
        meta:{keepAlive:false,power:99},
        component: resolve => require(['../pages/MyMusic/My-music.vue'], resolve)
    },
    {
		path: '/home/UpLoadTheme',
        name: 'UpLoadTheme',
        meta:{keepAlive:false,power:99},
        component: resolve => require(['../page/UpLoadTheme/UpLoadTheme.vue'], resolve)
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
        meta: { keepAlive: false ,power:4},
        component: resolve => require(['../pages/OrganizationManage/OrganizationManage.vue'], resolve),
    },
    {
        path: '/home/ArtistManage',
        name: 'ArtistManage',
        meta: { keepAlive: false ,power:4},
        component: resolve => require(['../pages/ArtistManage/ArtistManage.vue'], resolve),
    },
    {
        path: '/home/artistDetail',
        name: 'artistDetail',
        meta: { keepAlive: false ,power:4},
        component: resolve => require(['../pages/ArtistManage/artistDetail.vue'], resolve),
    },
    {
        path: '/home/PeopleManage',
        name: 'PeopleManage',
        meta: { keepAlive: false ,power:4},
        component: resolve => require(['../pages/PeopleManage/PeopleManage.vue'], resolve),
    },
    {
        path: '/home/AccountManage',
        name: 'AccountManage',
        meta: { keepAlive: false ,power:99},
        component: resolve => require(['../pages/AccountManage/accountManage.vue'], resolve),
    },
    {
        path: '/home/ActivitiesSet',
        name: 'ActivitiesSet',
        meta: { keepAlive: false ,power:5},
        component: resolve => require(['../pages/ActivitiesSet/ActivitiesSet.vue'], resolve),
    },
    {
		path: '/home/attend',
		name: 'detail',
		meta: { keepAlive: false ,power:5},
		component: resolve => require(['../pages/ActivitiesSet/attend.vue'], resolve),
	}
];
export  default arr;
