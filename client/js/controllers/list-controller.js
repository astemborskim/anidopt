app.controller('listController', ['$scope', '$resource',
	function ($scope, $resource){

	$scope.prof={};
	$scope.prof.check=false;
	//$scope.prof.newName = {};

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
		listing.desc = $scope.prof.petDesc;
		listing.image_path = null; //placeholder for profile image path
		//console.log(JSON.stringify(listing));
			if(listing.name != null && listing.desc != null){
				listing.$save(function (results){
					$scope.listings.push(results);
					$scope.prof.petName=null;
					$scope.prof.petDesc=null;
					$scope.prof.post_id = results._id;
					console.log('Inside postListing: ' + $scope.prof.post_id);
					//toggle ng-show/ng-hide forms
					$scope.prof.check=true;
				});
			}//end if
			else{console.log('NULL VALUE');}
	}

	$scope.updateListing = function (object, idx){
		//console.log('Update: ' + JSON.stringify(object) + " @ " + idx);
		var listing = new Listing();
		listing.name = $scope.prof.newName[idx];
		if(listing.name != null){
		listing.$update({id : object._id}, listing.name);
			$scope.listings[idx].name=listing.name;
			$scope.prof.newName=null;
		};
	}

	$scope.removeListing = function (object, idx){
		var listing = new Listing();
			//console.log('list-Cntr: ' + object._id + "\n object.index: " + idx);
			//console.log('Listing: ' + JSON.stringify(listing));
		listing.$remove({id : object._id});
			$scope.listings.splice(idx, 1);
	}

		$scope.getId = function (){
			//console.log("Inside getId: " + $scope.prof.post_id);
			//pass id to socketio function in list.jade view
			emitId($scope.prof.post_id);
	}



}]);
