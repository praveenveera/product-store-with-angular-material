(function(){
	'use strict';

	angular
	.module('storeApp')
	.controller('newProductsCrtl',function($scope, $state, $mdSidenav,$mdDialog, $timeout, productFactory){
		var vm = this;
		vm.closeSidebar = closeSidebar;
		vm.saveProduct = saveProduct;
		$timeout(function() {
			$mdSidenav('left').open();
		});

		$scope.$watch('vm.sidenavOpen',function(sidenav){
			if(sidenav === false){
				$mdSidenav('left').close()
				.then(function(){
					$state.go('products');	
				});
			}
		});

		function closeSidebar(){
			vm.sidenavOpen = false; 
		}

		function saveProduct(product){
			if (product){

				product.contact = {
					"name":"bravo",
					"phone":"(555) 555-5555",
					"email":"bravo@gmail.com"
				}
				$scope.$emit('newProduct', product);
				vm.closeSidebar;
			}
		}
		
	});		
})();