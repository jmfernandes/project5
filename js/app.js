var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: '/project5/assets/templates/home.html',
			controller: 'PopulationController'
		})
		.when('/viewPopulations', {
			templateUrl: '/project5/assets/templates/viewPopulations.html',
			controller: 'PopulationController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
