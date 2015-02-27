app.controller('catsController', ['$scope', function ($scope) {

		$scope.catInfo = [
			{ name : "Haley", desc : "Feline Extraordinare!", image : "/img/haley2.jpg" },
			{ name : "Rupert", desc : "Kitty Cat with some Attitude.", image : "/img/rupert.jpg" },
			{ name : "Cuddles", desc : "Love to cuddle! Warm Kitty soft kitty...",  image : "/img/cuddles.jpg" },
			{ name : "Snowball", desc : "Difficult to find in the winter months!",  image : "/img/snowball.jpg" },
			{ name : "Snowball II", desc : "Son of Snowball, kitty cat conqueror!",  image : "/img/snowball2.jpg" },
			{ name : "Rocko", desc : "Rock out with Rocko!",  image : "/img/rocko.jpg" }
		]

}]);