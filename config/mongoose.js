var mongoose = require("mongoose");
var config = require("./config");
module.exports = function (){
	//连接mongodb数据库
	var db = mongoose.connect(config.mongodb);

	//导入Model
	require("../app/model/wangwang.server.model");
	
	return db;
}