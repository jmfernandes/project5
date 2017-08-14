var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'StudentController'
		})
		.when('/viewStudents', {
			templateUrl: 'viewStudents.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});


mainApp.controller('StudentController', ['$scope','$http', function($scope, $http) {
    $scope.method = 'GET';
    $scope.url = "https://s3-us-west-2.amazonaws.com/joshuamfernandes/california.json";
    $http({method:$scope.method, url:$scope.url})
      .then(function(response) {
        $scope.data = response.data;
      }, function(response){
        $scope.data = response.data || 'Request failed';
      });


	$scope.message = "Click on the hyper link to view the students list.";
}]);
