var mongoose = require("mongoose");

var WangwangSchema = new mongoose.Schema({
	wangwang : String,//淘宝号
	last_evaluate_date : Date, //最后评价日期
	last_task_date : Date, //最后任务日期
	register_date : Date, //注册日期
	remark : String, //备注
	un_bind_alipay : Boolean, //是否可解绑
	alipay_acount : String,  //支付宝账号
	alipay_name : String, //支付宝名称
	has_alipay : Boolean, //是否有支付宝
	status : Number //淘宝号状态
});

mongoose.model("Wangwang",WangwangSchema);