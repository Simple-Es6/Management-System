import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//管理属性值
let state={
    is_show: true, //默认显示，点击的时候再隐藏
    text1:'测试111',
    login:0,
    user_name:'',
    pagetitle:[],
    loginState:0
},
//管理方法函数
mutations = {
    loginState(state,msg,user_name){
        state.login=msg;
        state.user_name=user_name;
    },
	changeUser(state, msg){
        state.phone = msg;
        if(msg){
        	let reg = /^(\d{3})\d{4}(\d{4})$/;
			state.phone = msg;
			state.login = msg.replace(reg,"$1****$2"); 
        }else{
        	state.login = 0;        	
        };
    },
    changePage(obj){
    	state.pagetitle = obj;
    },
    show_1(state) {
    	state.is_show =!state.is_show;
	},
  	show_2(state,id){
       console.log('测试maputations---'+id);
   	}
},
//这个相当于是 state的计算属性 的意思  跟computed差不多  获取状态值
getters = {
    loginupdata:state=>{
        return state.login;
    },
    pageupdate:state=>{
    	return state.pagetitle;
    }
},
// 异步的mutations ，Action 通过 store.dispatch 方法触发  store.dispatch('increment')
actions = {
	loginOut(state){
        this.state.login = 0;
        this.state.user_name='';
        sessionStorage.removeItem('mwladlogin');
        sessionStorage.removeItem('mwladname');
	},
	changePage(state,obj){
		console.log(obj);
    	this.state.pagetitle = obj;
    },
    loginState(state,msg){
    	alert('hhaha'+msg.phone);
        sessionStorage.setItem('mwladlogin',msg.type);
        sessionStorage.setItem('mwladname',msg.phone);
        this.state.login=msg.type;
        this.state.user_name=msg.phone;
    },
	logIn(state,num){
		this.state.login = num;
	}

};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});