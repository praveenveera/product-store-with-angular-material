(function(){
	'use strict';

	angular
	.module('storeApp')
	.controller('editProductsCrtl',function($scope, $state, $mdSidenav,$mdDialog, $timeout, productFactory){
		var vm = this;
		vm.closeSidebar = closeSidebar;
		
		vm.saveEdit = saveEdit;
		vm.product = $state.params.product; 

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
			$scope.$emit('editSaved','Edit Saved');
			vm.sidenavOpen = false; 

		}
		
	});		
})();