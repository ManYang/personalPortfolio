var znbdsite = angular.module('znbdsite', ['ngAnimate']);

function bodyControl ($scope, $location) {
	
	$scope.location = $location;
	$scope.$watch('location.search()', function() {
		$scope.target = ($location.search()).target;
	}, true);

	$scope.changeTarget = function(name){
		$location.search('target', name);
	};

	$scope.currentPage = 'home';

	$scope.loadPage = function($page){
		switch($page){

			case 'about':
				loadPageAbout();
				break;
			case 'exp':
				loadPageExp();
				break;
			case 'social':
				loadPageSocial();
				break;

			default:
				loadPageAbout();
		}
		$("body").animate({scrollTop: top}, "slow");
	};


	loadPageAbout = function(){
		$scope.currentPage = "about";
		$scope.changeTarget("about");
	};
	loadPageExp = function(){
		$scope.currentPage = "exp";
		$scope.changeTarget("exp");
	};
	loadPageSocial = function(){
		$scope.currentPage = "social";
		$scope.changeTarget("social");
	};


	hideAllPages = function(){

	};

	$scope.urlSplit = $scope.location.$$url.split("=");
	$scope.loadPage($scope.urlSplit[1]);
}