angular.module("webapp").service("WangwangService",["$http","$q",WangwangService]);

function WangwangService($http,$q){
	function handleRequest(method, url, data){
		var defered = $q.defer();
		var config = {
			method : method,
			url : url
		}
		if(method === "GET"){
			config.params = data;
		} else if(method === "POST"){
			config.data = data;
		}
		$http(config).success(function(data){
			defered.resolve(data);
		}).error(function(err){
			defered.reject(err);
		});
		return defered.promise;
	}
	return {
		list : function(params){
			return handleRequest("GET","/wangwang",params);
		},
		save : function(data){
			return handleRequest("POST","/wangwang",data);
		},
		delete : function(id){
			return handleRequest("POST","/wangwang/delete/"+id);
		}
	}
}