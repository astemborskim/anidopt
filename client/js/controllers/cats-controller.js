app.controller('catsController', ['$scope', function ($scope) {

		// $scope.catInfo = [
		// 	{ name : "Cat Name", image : "" },
		// 	{ name : "Cat Name", image : "" },
		// 	{ name : "Cat Name", image : "" },
		// 	{ name : "Cat Name", image : "" },
		// 	{ name : "Cat Name", image : "" },
		// 	{ name : "Cat Name", image : "" }
		// ]

		$scope.catInfo = [
			{ name : "Haley", image : "/img/haley2.jpg" },
			{ name : "Rupert", image : "/img/rupert.jpg" },
			{ name : "Cuddles", image : "/img/cuddles.jpg" },
			{ name : "Snowball", image : "/img/snowball.jpg" },
			{ name : "Snowball II", image : "/img/snowball2.jpg" },
			{ name : "Rocko", image : "/img/rocko.jpg" }
		]

}]);