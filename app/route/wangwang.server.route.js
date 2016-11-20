var WangwangController = require("../controller/wangwang.server.controller");

module.exports = function (app){
	app.route("/wangwang")
		.get(WangwangController.list)
		.post(WangwangController.save);

	app.route("/wangwang/delete/:id")
		.post(WangwangController.delete);

	app.param("id",WangwangController.getById);
};