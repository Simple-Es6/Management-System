import Vue from 'vue';
import Router from 'vue-router';
import router1 from './router1.js';
import router2 from './router2.js';
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
            	...router1,
                ...router2
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