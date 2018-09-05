import axios from 'axios';
const tou = 'http://47.105.38.148:8081/futuremelody-admin/';
const PATH = {
  	addStarMusic:tou+'starMusic/addStarMusic',
  	getSystemMusicPageInfo:tou+'starMusic/getSystemMusicPageInfo',
  	getPlanetList:tou+'special/getPlanetList',
  	getSpecialPageInfo:tou+'special/getSpecialPageInfo',
  	updateTop:tou+'special/updateTop',
  	updateRecommend:tou+'special/updateRecommend'
},
ajaxs = function(type,urls,dataObj,callback){
	let params = new URLSearchParams();
	console.log(dataObj)
	for (let key in dataObj) {
		if(dataObj[key].constructor == Array){
			console.log(123);
			params.append(key,JSON.stringify(dataObj[key]));
		}else{
			params.append(key,dataObj[key]);
		};
	};
	//console.log(params);
	axios({
		method:type,
	  	url:urls,
	  	data:params
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
  	PATH,
  	ajaxs,
  	oTime
}