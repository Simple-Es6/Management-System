import axios from 'axios';
axios.defaults.withCredentials = true;
const tou = 'http://172.16.66.38:8081/';
const prefix1 = 'http://172.16.66.38:8081/';
const PATH = {
	addfuspecial:tou+'specials/addfuspecial',//添加专题
	upload:tou+'upload',//上传图片
	uploadmusic:tou+'uploadmusic',//上传音乐
	uploadlrc:tou+'uploadlrc',//上传歌词
	addSpecialmusic:tou+'specials/addSpecialmusic',//上传专题
	queryspleByid:tou+'queryspleByid',//专辑详情
	updatesple:tou+'updatesple',//修改专题
	queryfensilist:tou+'queryfensilist',//粉丝列表
	queryzichan:tou+'queryzichan'//收入列表
},
PATH1 = {
    querysplelist: tou + 'querysplelist', //音乐管理（专题列表)
    querysingle: tou + 'querysingle', //音乐管理（单曲）
    querymusicpeople: tou + 'querymusicpeople', //音乐人首页
    querymusicexamine: prefix1 + '/specials/querymusicexamine', //音乐审核
    updatemusicexamine: prefix1 + '/specials/updatemusicexamine', //音乐审核提交
    queryspecialexamine: prefix1 + '/specials/queryspecialexamine', //主题审核
    updatespecialexamine:prefix1 + '/specials/updatespecialexamine', //主题审核提交
    loginuser:prefix1+'/user/loginuser'//登录
},
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