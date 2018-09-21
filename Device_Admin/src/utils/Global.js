import axios from 'axios';
axios.defaults.withCredentials = true;

const tou1 = 'http://120.79.183.36:8081/futuremelody-admin/';
const tou = 'http://120.79.183.36:8081/futuremelody-admin/';
const prefix1 = 'http://172.16.66.38:8080/';
/*const tou1 = 'http://47.105.38.148:8081/futuremelody-admin/';
const tou = 'http://47.105.38.148:8081/futuremelody-admin/';
const prefix1 = 'http://47.105.38.148:8081/futuremelody-admin/';*/
const PATH = {
	getRule:tou1+'bpRule/getRule',//获取规则
	bpRule:tou1+'bpRule/update',//修改规则
	prlist: tou1+'pr/list',//获取小未听歌记录
	snlist: tou1+'xw/list',//sn管理列表
	xwlist: tou1+'xw/xwlist',//音箱列表
	updateUntied: tou1+'xw/updateUntied',//解绑音箱
	getBpDr: tou1+'bp/getBpDr',//获取黑珍珠分配明细
	getBpByUserName: tou1+'bp/getBpByUserName',//根据用户手机号获取黑珍珠分配记录明细
	getSameDayBpDr: tou1+'bp/getSameDayBpDr',//获取当天黑珍珠明细
	getXwLeaderboard:tou1+'bp/getXwLeaderboard',//获取音响排行榜
	getBpByMac:tou1+'bp/getBpByMac',//根据mac地址获取黑珍珠分配记录明细
	addfuspecial:tou+'specials/addfuspecial',//添加专题
	querystartMusiclist:tou+'querystartMusiclist',//获取星歌列表
	addStarMusic:tou1+'starMusic/addStarMusic',//添加星歌
	querystartMusicdetail:tou+'querystartMusicdetail',//星歌详情
	getSystemMusicPageInfo:tou1+'starMusic/getSystemMusicPageInfo',//添加星歌
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
    querymusicexamine: tou1 + '/specials/querymusicexamine', //音乐审核
    updatemusicexamine: tou1 + '/specials/updatemusicexamine', //音乐审核提交
    queryspecialexamine: tou1 + '/specials/queryspecialexamine', //主题审核
    updatespecialexamine:tou1 + '/specials/updatespecialexamine', //主题审核提交
    loginuser:tou1+'/user/loginuser',//登录
	queryExamine:tou1+'/specials/queryExamine',//审核设置
	addExamine:tou1+'/specials/addExamine',//审核设置原因增加
	updateExamine:tou1+'/specials/updateExamine',//审核修改
	deleteExamine:tou1+'/specials/deleteExamine',//审核删除
	queryComment:prefix1+'/specials/queryComment',//评论审核列表
	updateCommentexamine:tou1+'/specials/updateCommentexamine',//审核
	querystarmastuser:tou1+'/starmastuser/querystarmastuser',//星球主首页
	querystarmastuserbyid:tou1+'/starmastuser /querystarmastuserbyid',//查看用户资料
	updatemastuserbyid:tou1+'/starmastuser/updatemastuserbyid',//修改用户资料
	queryplantbyid:tou1+'/starmastuser/queryplantbyid',//星球详情
	updateplantbyid:prefix1+'/starmastuser/updateplantbyid',//修改星球详情
	querymusicuserlist:tou1+'/starmastuser/querymusicuserlist',//艺人管理列表
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