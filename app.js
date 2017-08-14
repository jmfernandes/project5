var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'StudentController'
      $location.search('key', null)
		})
		.when('/viewStudents', {
			templateUrl: 'viewStudents.html',
			controller: 'StudentController'
      $location.search('key', null)
		})
		.otherwise({
			redirectTo: '/home'
      $location.search('key', null)
		});
});

mainApp.controller('StudentController', function($scope) {
	$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];

	$scope.message = "Click on the hyper link to view the students list.";
});
