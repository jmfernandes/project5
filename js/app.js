var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: '/assets/templates/home.html',
			controller: 'PopulationController'
		})
		.when('/viewPopulations', {
			templateUrl: '/assets/templates/viewPopulations.html',
			controller: 'PopulationController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});


mainApp.controller('PopulationController', ['$scope','$http', function($scope, $http) {
    $scope.method = 'GET';
    $scope.url = "https://s3-us-west-2.amazonaws.com/joshuamfernandes/multiple.json";
    $http({method:$scope.method, url:$scope.url})
      .then(function(response) {
        $scope.data = response.data;
      }, function(response){
        $scope.data = response.data || 'Request failed';
      });


	$scope.message = "Click on the hyper link to view the population list.";
}]);
