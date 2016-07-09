(function(){
'use strict';

angular.module('storeApp')
.controller('storeController',function($scope, $http, productFactory,$mdSidenav, $mdToast, $mdDialog) {

	productFactory.getDetails().then(function(response){

	console.log(response);
	$scope.products = response.data;
	$scope.categories = getCategories($scope.products);	
	});
 

	var contact={
		"name":"bravo",
		"phone":"(555) 555-5555",
		"email":"bravo@gmail.com"
	}

	$scope.openSidebar = function(){
		$mdSidenav('left').open();
		console.log('sidenav opened');
	};
	$scope.closeSidebar = function(){
		$mdSidenav('left').close();
		console.log('sidenav closed');
		$scope.product = {};
	};	
	
	$scope.saveProduct = function(product){
		if(product){
		product.contact = contact;	
		$scope.products.push(product);
		console.log("saved");
		console.log(product);
		console.log($scope.product);
		$scope.product = {};
		console.log($scope.product);
		$scope.closeSidebar();
		$scope.notification('product added ');
	}
	};

		$scope.editProduct = function(product){
			$scope.editing = true;
			$scope.product = product;

			$scope.openSidebar();
		};

		$scope.saveEdit= function(product){
			$scope.editing = false;
			$scope.saveProduct(product);
			$scope.product = {};
			console.log($scope.product);
			$scope.closeSidebar();
			$scope.notification('product edited');
		};

		$scope.deleteProduct = function(product, event){

		var confirm = $mdDialog.confirm()
          .title('Would you like to delete ' + product.title +' ?')
          .targetEvent(event)
          .ok('yes')
          .cancel('no');
		    $mdDialog.show(confirm).then(function() {
		      var index = $scope.products.indexOf(product);
				$scope.products.splice(index,1);
				//console.log(product);
				console.log('deleted');
		    }, function() {
		      $scope.status = 'back to main screen';
		    });

		
		};

		$scope.productSearch = function(message){
			console.log('search now');
			$scope.filterSearch = true; 
		};

	$scope.notification = function(message){
		$mdToast.show(
      		$mdToast.simple()
        .textContent(message)
        .position('right')
        .hideDelay(3000)
    	);
	};

	function getCategories(products){
		var categories=[];

		 angular.forEach(products, function(item){
		 	angular.forEach(item.categories, function(category){
		 	categories.push(category);
		 });

		 });	

		 return _.uniq(categories);
	}

	

});


})();
