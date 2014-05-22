function bodyControl ($scope){
	//console.log("bodycontrol");
	var scene = document.getElementById('body');
	var parallax = new Parallax(scene, {
		calibrateX: false,
		calibrateY: true,
		invertX: false,
		invertY: true,
		limitX: false,
		limitY: 10,
		scalarX: 2,
		scalarY: 8,
		frictionX: 0.2,
		frictionY: 0.8
	});

	$scope.currentPage = 'about';

	$scope.loadPage = function($page){
		switch($page){
			case about:
				loadPageAbout();
				break;

			case exp:
				loadPageExp();
				break;
			case social:
				loadPageSocial();
				break;
			default:
				loadPageAbout);
		}
	}

	loadPageAbout = function(){
		currentPage = "about";
	}

	hideAllPages = function(){

	}
}
