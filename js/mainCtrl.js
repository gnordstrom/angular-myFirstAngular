angular.module('friendsList').controller('mainCtrl', function($scope) {
	$scope.friends = ['Adam', 'Bob', 'Carl', 'Dave'];

	$scope.addFriend = function(name) {
		$scope.friends.push(name);
	}
});
