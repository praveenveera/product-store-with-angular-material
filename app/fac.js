(function(){
'use strict';

angular.module('storeApp')
.factory('productFactory', function($http, $firebaseArray){
	//function getDetails(){
		//return $http.get("/json/product.json");
		
		var ref = new Firebase('https://store-product.firebaseio.com');
	//}

	return{
		//getDetails : getDetails
		ref : $firebaseArray(ref)
	}

});

})();
