(function () {

	var app = angular.module('store-products', []);

	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productDescription', function() {
		return {
			restrict: 'A', 
			templateUrl: 'product-description.html'
		};
	});

	app.directive('productPanels', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function () {
				this.tab = 1;

				this.setTab = function (tabNumber) {
					this.tab = tabNumber;
				};

				this.isSelected = function (tabNumber) {
					return this.tab === tabNumber;
				};
			},
			controllerAs: 'panel'
		}
	});


})();