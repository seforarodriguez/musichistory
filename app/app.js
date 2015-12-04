var app = angular.module("SongsApp", ["ngRoute"]);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/songs/add', {
	        templateUrl: 'partials/AddMusic.html',
	        controller: 'SongsAddForm'
	    }).
	      when('/songs/list', {
        	templateUrl: 'partials/list.html',
        	controller: 'SongsCtrl'
      	}).
	      when('/songs/view', {
	      	templateUrl:'partials/view.html',
	      	controller:'SongsCtrl'
	      }).
	      otherwise('/songs/view')
	}]);



























