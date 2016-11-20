angular.module("webapp").controller("WangwangController",["$scope","WangwangService",WangwangController]);

function WangwangController($scope,WangwangService){
	$scope.list=[];
	$scope.wangwang = {};
	//列表
	$scope.listWangwangs = function(){
		WangwangService.list().then(function(data){
			$scope.list = data;	
		},function(err){

		});
	};

	//删除
	$scope.delete = function(id){
		WangwangService.delete(id).then(function(data){
			$scope.listWangwangs();
		})
	};

	//弹出新建视图
	$scope.edit = function(id){
		$("#wangwang-edit").modal("show");
	}

	//保存
	$scope.save = function(){
		console.log($scope.wangwang);
		WangwangService.save($scope.wangwang).then(function(data){
			$("#wangwang-edit").modal("hide");
			$scope.listWangwangs();
		},function(err){
			alert(err);
		})
	}

	$scope.listWangwangs();
}