(function(){
'use strict';

angular.module('storeApp')
.controller('storeController',function($http, productFactory,$mdSidenav, $mdToast, $mdDialog) {


	var self = this;


	self.openSidebar = openSidebar;
	self.closeSidebar = closeSidebar;
	self.saveProduct = saveProduct;
	self.editProduct = editProduct;
	self.saveEdit = saveEdit;
	self.deleteProduct = deleteProduct;
	self.productSearch = productSearch;
	self.notification = notification;

	self.products;
	self.product;
	self.categories;
	self.editing;
	
	self.filterSearch;



	productFactory.getDetails().then(function(response){

	console.log(response);
	self.products = response.data;
	self.categories = getCategories(self.products);	
	});
 

	var contact={
		"name":"bravo",
		"phone":"(555) 555-5555",
		"email":"bravo@gmail.com"
	}

	function openSidebar() {
		$mdSidenav('left').open();
		console.log('sidenav opened');
	};
	function closeSidebar(){
		$mdSidenav('left').close();
		console.log('sidenav closed');
	};	
	
	function saveProduct(product){
		if(product){
		product.contact = contact;	
		self.products.push(product);
		console.log("saved");
		console.log(self.product);
		self.product = {};
		console.log(self.product);
		closeSidebar();
		self.notification('product added ');
	}
	};

		function editProduct(product){
			self.editing = true;
			self.product = product;
			openSidebar();

		};

		 function saveEdit(product){
			self.editing = false;
			self.saveProduct(product);
			self.product = {};
			console.log(self.product);
			closeSidebar();
			self.notification('product edited');
		};

		function deleteProduct(product, event){

		var confirm = $mdDialog.confirm()
          .title('Would you like to delete ' + product.title +' ?')
          .targetEvent(event)
          .ok('yes')
          .cancel('no');
		    $mdDialog.show(confirm).then(function() {
		      var index = self.products.indexOf(product);
				self.products.splice(index,1);
				//console.log(product);
				console.log('deleted');
		    }, function() {
		      self.status = 'back to main screen';
		    });

		
		};

		function productSearch(message){
			console.log('search now');
			self.filterSearch = true; 
		};

	function notification(message){
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
