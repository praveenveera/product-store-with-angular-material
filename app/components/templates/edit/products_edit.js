(function(){
	'use strict';

	angular
	.module('storeApp')
	.controller('editProductsCrtl',function($scope, $state, $mdSidenav,$mdDialog, $timeout, productFactory){
		var vm = this;
		vm.closeSidebar = closeSidebar;
		vm.products =  productFactory.ref;
		vm.saveEdit = saveEdit;
		vm.product = vm.products.$getRecord($state.params.id);


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

		function saveEdit(){
			vm.products.$save(vm.product).then(function () {
				$scope.$emit('editSaved','Edit Saved');
				vm.sidenavOpen = false; 

			})
			
		}
		
	});		
})();