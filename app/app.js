angular.module('storeApp', ['ngMaterial', 'ngMdIcons', 'ui.router'])

.config(['$mdThemingProvider', '$stateProvider' , function($mdThemingProvider, $stateProvider) {
 
  $mdThemingProvider.theme('default')
  .primaryPalette('deep-purple')
  .accentPalette('red');

  $stateProvider
  	.state('products',{
  		url:'/products',
  		templateUrl: 'components/templates/trail.html',
  		controller: 'storeController as vm'
  	})
      .state('products.new',{
      url:'/new',
      templateUrl: 'components/templates/new/products_new.html',
      controller: 'newProductsCrtl as vm'
    });
  	}])
