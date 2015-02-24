app.controller('listController', ['$scope', '$resource',
	function ($scope, $resource){

	$scope.prof={};
	//Rest API Route on server
	var Listing = $resource('/api/listing/:id', {}, { update : {method : 'PUT'}});

	Listing.query(function (results){
		$scope.listings=results;
		//console.log('Query:\n' + JSON.stringify(results));
	})

	$scope.postListing = function(){
		var listing = new Listing();
		//console.log('listing:' + JSON.stringify(listing));
		listing.name = $scope.prof.petName;
			if(listing.name != null){
				listing.$save(function (results){
					$scope.listings.push(results);
					$scope.prof.petName=null;
					//console.log('Results:\n' + JSON.stringify(results));
				});
			}//end if
			else{console.log('NULL VALUE');}
	}

	$scope.updateListing = function (object, idx){
		//console.log('Update: ' + JSON.stringify(object) + " @ " + idx);
		var listing = new Listing();
		listing.name = $scope.prof.newName;
		listing.$update({id : object._id}, listing.name);
			//$scope.listings.push(listing.name, idx);
			$scope.prof.newName=null;
	}

	$scope.removeListing = function (object, idx){
			var listing = new Listing();
			//console.log('list-Cntr: ' + object._id + "\n object.index: " + idx);
			//console.log('Listing: ' + JSON.stringify(listing));
			listing.$remove({id : object._id});
			$scope.listings.splice(idx, 1);
	}
}]);