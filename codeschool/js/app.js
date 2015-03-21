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


	var gem = {
		name: "Dodecahedron",
		price: 2.95,
		description: ". . . ",
		canPurchase: false,
		soldOut: false
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