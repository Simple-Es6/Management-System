let tou1 = 'http://47.105.38.148:8081/futuremelody-admin/',
	tou = 'http://47.105.38.148:8081/futuremelody-admin/',
	prefix1 = 'http://47.105.38.148:8081/futuremelody-admin/',
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
	querymusicuserbyid:tou1+'/starmastuser/querymusicuserbyid'//查询音乐人信息
	
};
export  default PATH1;