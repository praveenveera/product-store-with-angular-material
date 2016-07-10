(function(){
	'use strict';

	angular
	.module('storeApp')
	.controller('newProductsCrtl',function($mdSidenav,$mdDialog, $timeout, productFactory){
		var vm = this;

		$timeout(function() {
			$mdSidenav('left').open();
		});
		
	})		
})();