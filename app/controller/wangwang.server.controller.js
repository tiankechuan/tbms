var mongoose = require("mongoose");
var Wangwang = mongoose.model("Wangwang");

module.exports = {

	list : function(req,res,next){
		var pageSize = parseInt(req.query.pageSize,10) || 10;
		var pageNumber = parseInt(req.query.pageNumber,10) || 1;
		Wangwang
		.find()
		.skip( (pageNumber-1) * pageSize)
		.limit(pageSize)
		.exec(function(err,docs){
			if(err) return next(err);
			res.json(docs);
		});
	},

	save : function(req,res,next){
		var wangwang = new Wangwang(req.body);
		wangwang.save(function(err){
			if(err) return next(err);
			return res.json(wangwang);
		});
	},

	//删除
	delete : function (req,res,next){
		Wangwang
		.remove(req.wangwang,function(err,docs){
			if(err) return next(err);
			return res.json(req.wangwang);
		});
	},

	getById : function(req,res,next,id){
		if(!id) return next(new Error("此淘宝号找不到!"));
		Wangwang
		.findOne({_id : id})
		.exec(function(err,doc){
			if(err) return next(err);
			if(!doc) return next(new Error("此淘宝号找不到!"));
			req.wangwang = doc;
			return next();
		})
	}
}