(function () {
	var app = angular.module('store', []);



	app.controller('StoreController', function () {
		this.product = gem;
		this.products = gems;
	});

	app.controller('PanelController', function () {
		this.tab = 1;

		this.setTab = function (tabNumber) {
			this.tab = tabNumber;
		};

		this.isSelected = function (tabNumber) {
			return this.tab === tabNumber;
		};
	});

	app.controller('ReviewController', function () {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});


	var gem = {
		name: "Dodecahedron",
		price: 2.95,
		description: ". . . ",
		canPurchase: false,
		soldOut: false,
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "somebody@gmail.com"
			},
			{
				stars: 4,
				body: "its good",
				author: "somebody+2@gmail.com"
			}
		]
	};

	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: ". . . ",
			canPurchase: true,
			soldOut: false
		},
		{
			name: "Dodecahedron",
			price: 2.95,
			description: ". . . ",
			canPurchase: false,
			soldOut: false
		}
	];
})();