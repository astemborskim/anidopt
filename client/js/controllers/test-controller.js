app.controller('testController', ['$scope', '$resource', 
	function ($scope, $resource){

		var pid = '54f67f773b53e3681ff6df6b';
		$scope.prof= {};

		var Profile = $resource('/api/listing/:id', {}, { get : {method : 'GET', isArray: true}});
		


		Profile.get({ id : pid }, function (results){
			$scope.prof = results[0];
			console.log($scope.prof);
			//$scope.prof = results[0];

		})
}]);
