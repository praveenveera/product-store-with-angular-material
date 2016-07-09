angular.module('storeApp', ['ngMaterial', 'ngMdIcons', 'ui.router'])

.config(['$mdThemingProvider', '$stateProvider' , function($mdThemingProvider, $stateProvider) {
 
  $mdThemingProvider.theme('default')
  .primaryPalette('deep-purple')
  .accentPalette('red');

  $stateProvider
  	.state('products',{
  		url:'/products',
  		templateUrl: 'components/products/trail.html',
  		controller: 'storeController as vm'
  	})
  	}])
