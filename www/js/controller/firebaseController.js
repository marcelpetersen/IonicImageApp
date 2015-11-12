imageApp.controller("FirebaseController", function($scope, $state, $firebaseAuth){
	var fbAuth = $firebaseAuth(fb);

	$scope.login= function(username, password) {
		fbAuth.$authWithPassword({
			email: username,
			password: password
		}).then(function(authData){
			$state.go("secure");
		}).catch(function(error){
			controle.error("Error: " + error);
		});
	}

	$scope.register = function(username, password) {
		fbAuth.$createUser({
			email: username,
			password: password
		}).then(function (userData){
			return fbAuth.$authWithPassword({
				email:username,
				password: password
			});
		}).then(function (userData){
			$state.go("secure");
		}).catch(function(e){
			controle.error("Error: "+ e);
		});
	}
});