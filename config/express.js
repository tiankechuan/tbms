var express = require("express");
var bodyParser = require("body-parser");

module.exports = function (){
	var app = express();

	//引用中间件
	app.use(bodyParser.json());
	app.use(express.static("./public"));

	require("../app/route/wangwang.server.route")(app);

	//统一处理404
	app.use(function(req,res,next){
		res.status(404);
		try{
			return res.json("Not Found !");
		} catch (e){
			console.log("404 重复请求 !");
		}
	});

	//统一处理500
	app.use(function(err,res,rep,next){
		if(!err) res.status(500);
		try{
			res.json(err.message | "server error !");
		} catch (e){
			console.log("500 重复请求 !");
		}
	});

	return app;
};
