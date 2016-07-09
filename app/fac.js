(function(){
'use strict';

angular.module('storeApp')
.factory('productFactory', function($http){
	function getDetails(){
		return $http.get("/json/product.json");
	}

	return{
		getDetails : getDetails
	}

})

})();
