//let tou = 'http://47.105.38.148:8081/futuremelody-admin/',
let tou = '';
//const tou = 'http://47.105.38.148:8081/futuremelody-admin/';
switch (process.env.NODE_ENV){
	case 'production':
		tou = 'http://47.105.38.148:8081/futuremelody-admin/';
		break;
	case 'testing':
		tou = 'http://120.79.183.36:8081/futuremelody-admin/';
		break;
	default:
		tou = 'http://120.79.183.36:8081/futuremelody-admin/';
		break;
};
let PATH1 = {
    querysplelist: tou + 'querysplelist', //音乐管理（专题列表)
    querysingle: tou + 'querysingle', //音乐管理（单曲）
    querymusicpeople: tou + 'querymusicpeople', //音乐人首页
    querymusicexamine: tou + 'specials/querymusicexamine', //音乐审核
    updatemusicexamine: tou + 'specials/updatemusicexamine', //音乐审核提交
    queryspecialexamine: tou + 'specials/queryspecialexamine', //主题审核
    updatespecialexamine:tou + 'specials/updatespecialexamine', //主题审核提交
    loginuser:tou+'user/loginuser',//登录
	queryExamine:tou+'specials/queryExamine',//审核设置
	addExamine:tou+'specials/addExamine',//审核设置原因增加
	updateExamine:tou+'specials/updateExamine',//审核修改
	deleteExamine:tou+'specials/deleteExamine',//审核删除
	queryComment:tou+'specials/queryComment',//评论审核列表
	updateCommentexamine:tou+'specials/updateCommentexamine',//审核
	querystarmastuser:tou+'starmastuser/querystarmastuser',//星球主首页
	querystarmastuserbyid:tou+'starmastuser /querystarmastuserbyid',//查看用户资料
	updatemastuserbyid:tou+'starmastuser/updatemastuserbyid',//修改用户资料
	queryplantbyid:tou+'starmastuser/queryplantbyid',//星球详情
	updateplantbyid:tou+'starmastuser/updateplantbyid',//修改星球详情
	querymusicuserlist:tou+'starmastuser/querymusicuserlist',//艺人管理列表
	querymusicuserbyid:tou+'starmastuser/querymusicuserbyid',//查询音乐人信息
	queryuserzhanghulist:tou+'starmastuser/queryuserzhanghulist',//用户账号列表
	updateuserjuese:tou+'starmastuser/updateuserjuese',//设置用户角色
	queryjumin:tou+'starmastuser/queryjumin',//居民管理
	statistics:tou+'sitrack/statistics',// 签到统计
	siruleGet:tou+'sirule/get',//获取签到设置
	siruleSave:tou+'sirule/save',//保存签到设置
	siruleupdate:tou+'sirule/update',//更新签到规则
	sicrdelete:tou+'sicr/delete',//删除周期规则
	sicrsave:tou+'sicr/save',//添加周期规则
	sicrupdate:tou+'sicr/update',//添加周期规则
	querytuijianlist:tou+'/starmastuser/querytuijianlist',//音乐推荐
};
export  default PATH1;