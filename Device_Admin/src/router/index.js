import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
export default new Router({
    routes: [{
            path: '/Login',
            name: 'Login',
            meta: { keepAlive: false },
            component: resolve => require(['../pages/Login.vue'], resolve)
        },
        {
            path: '/home',
            name: 'Home',
            meta: { keepAlive: false },
            component: resolve => require(['../layout/Home.vue'], resolve),
            children: [{
                    path: '/home/Artist',
                    name: 'Artist',
                    component: resolve => require(['../pages/Artist/Artist.vue'], resolve)
                },
                {
                    path: '/home/uploadhome',
                    name: 'UpLoadHome',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/UpLoadHome/UpLoadHome.vue'], resolve)
                },
                {
                    path: '/home/uploadmusic',
                    name: 'UpLoadMusic',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/UpLoadMusic/UpLoadMusic.vue'], resolve)
                },
                {
                    path: '/home/MyMusic',
                    name: 'My-music',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/MyMusic/My-music.vue'], resolve)
                },
                {
                    path: '/home/income',
                    name: 'Income',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Income/Income.vue'], resolve)
                },
                {
                    path: '/home/fans',
                    name: 'Fans',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Fans/Fans.vue'], resolve)
                },
                {
                    path: '/home/artistCheck',
                    name: 'Check',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Check/artistCheck.vue'], resolve),
                },
                {
                    path: '/home/musicCheck',
                    name: 'Check',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Check/musicCheck.vue'], resolve),
                },
                {
                    path: '/home/setCheck',
                    name: 'Check',
                    meta: { keepAlive: false },
                    component: resolve => require(['../pages/Check/setCheck.vue'], resolve),
                },
                {
                    path: '/home/themeCheck',
                    name: 'eCheck',
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