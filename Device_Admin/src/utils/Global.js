import axios from 'axios';
import PATH from './PATH.js';
import PATH1 from './PATH1.js';
axios.defaults.withCredentials = true;
const tou = 'http://47.105.38.148:8081/futuremelody-admin/',
ajaxs = function(type,urls,dataObj,callback){
	let params = new URLSearchParams();
	for (let key in dataObj) {
		if(dataObj[key].constructor == Array){
			params.append(key,JSON.stringify(dataObj[key]));
		}else{
			params.append(key,dataObj[key]);
		};
	};
	axios({
		method:type,
	  	url:urls,
	  	data:params
	}).then(function(res) {
	    callback(res.data);
	});
},
//上传文件
ajaxs2 = function(type,urls,dataObj,callback){
   	let param = new FormData(); // 创建form对象
   	param.append('mufile',dataObj.mufile, dataObj.mufile.name);
	axios({
		method:type,
	  	url:urls,
	  	data:param,
	  	headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	}).then(function(res) {
	    callback(res.data);
	});
},
ajaxs1 = function(type,urls,dataObj,callback){
	axios({
		method:type,
	  	url:urls,
	  	data:dataObj
	}).then(function(res) {
	    callback(res.data);
	});
},
oTime = function(timestamp) {
    let date = new Date(timestamp),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-',
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
    D = (date.getDate()<10?'0'+date.getDate():date.getDate())+'  ',
    h = (date.getHours()<10?'0'+date.getHours():date.getHours())+':',
    m = (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())+ ':',
    s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
    return Y+M+D+h+m+s;
};
export default{
	tou,
  	PATH,
  	PATH1,
  	ajaxs,
  	ajaxs1,
  	ajaxs2,
  	oTime
}