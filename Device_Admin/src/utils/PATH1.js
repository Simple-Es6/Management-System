//let prefix1 = 'http://47.105.38.148:8081/futuremelody-admin/',
let	prefix1 = 'http://120.79.183.36:8081/futuremelody-admin/',
	local='http://172.16.66.52:8080/',
	PATH1 = {
    querysplelist: prefix1 + 'querysplelist', //音乐管理（专题列表)
    querysingle: prefix1 + 'querysingle', //音乐管理（单曲）
    querymusicpeople: prefix1 + 'querymusicpeople', //音乐人首页
    querymusicexamine: prefix1 + '/specials/querymusicexamine', //音乐审核
    updatemusicexamine: prefix1 + '/specials/updatemusicexamine', //音乐审核提交
    queryspecialexamine: prefix1 + '/specials/queryspecialexamine', //主题审核
    updatespecialexamine:prefix1 + '/specials/updatespecialexamine', //主题审核提交
    loginuser:prefix1+'/user/loginuser',//登录
	queryExamine:prefix1+'/specials/queryExamine',//审核设置
	addExamine:prefix1+'/specials/addExamine',//审核设置原因增加
	updateExamine:prefix1+'/specials/updateExamine',//审核修改
	deleteExamine:prefix1+'/specials/deleteExamine',//审核删除
	queryComment:prefix1+'/specials/queryComment',//评论审核列表
	updateCommentexamine:prefix1+'/specials/updateCommentexamine',//审核
	querystarmastuser:prefix1+'/starmastuser/querystarmastuser',//星球主首页
	querystarmastuserbyid:prefix1+'/starmastuser /querystarmastuserbyid',//查看用户资料
	updatemastuserbyid:prefix1+'/starmastuser/updatemastuserbyid',//修改用户资料
	queryplantbyid:prefix1+'/starmastuser/queryplantbyid',//星球详情
	updateplantbyid:prefix1+'/starmastuser/updateplantbyid',//修改星球详情
	querymusicuserlist:prefix1+'/starmastuser/querymusicuserlist',//艺人管理列表
	querymusicuserbyid:prefix1+'/starmastuser/querymusicuserbyid',//查询音乐人信息
	queryuserzhanghulist:prefix1+'/starmastuser/queryuserzhanghulist',//用户账号列表
	updateuserjuese:prefix1+'/starmastuser/updateuserjuese',//设置用户角色
	queryjumin:prefix1+'/starmastuser/queryjumin',//居民管理
	statistics:prefix1+'/sitrack/statistics',// 签到统计
	siruleGet:prefix1+'/sirule/get',//获取签到设置
	update:prefix1+'/sirule/update',//更新签到规则
	querytuijianlist:prefix1+'/starmastuser/querytuijianlist',//音乐推荐
};
export  default PATH1;