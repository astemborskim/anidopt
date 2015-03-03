app.controller('testController', ['$scope', '$resource', 
	function ($scope, $resource){

		var Profile = $resource('/api/listing/:id', {})

		var id = '54f541f8bd6e44d01feef7fe';

		Profile.get({ _id : id }, function (results){
			$scope.profile = results;
			console.log(JSON.stringify(profile));
		})
}]);
