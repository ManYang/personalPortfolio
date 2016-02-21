	var site = angular.module('site', ['ngRoute','ngAnimate']);

	site.config(function($routeProvider){
		$routeProvider.when('/',
		{
			templateUrl:'../partials/about.html',
			controller:'bodyControl'
		})
		.when('exp',
		{
			templateUrl:'../partials/exp.html',
			controller:'bodyControl'
		})
		.when('social',
		{
			templateUrl:'../partials/social.html',
			controller:'bodyControl'
		});
	})
	.controller('bodyControl', function($scope, $location){
		$scope.location = $location;

		// $scope.$watch('location.search()', function() {
		// 	$scope.target = ($location.search()).target;
		// }, true);

		// $scope.changeTarget = function(name){
		// 	$location.search('target', name);
		// };

		$scope.currentPage = 'about';

		$scope.loadPage = function($page){
			if($page){
				$scope.currentPage =$page;
				//$scope.changeTarget($page);				
			}

			$("body").animate({scrollTop: top}, "slow");
		};

		//$scope.urlSplit = $scope.location.$$url.split("=");
		//$scope.loadPage($scope.urlSplit[1]);
	});