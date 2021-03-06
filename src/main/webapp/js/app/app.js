;(function() {
    'use strict';
	angular.module('app', [ 'ui.router',
	                        'pascalprecht.translate',
	                        'ngSanitize',
	                        'ui.bootstrap',
	                        'app.series',
	                        'app.configs',
	                        'app.characters',
	                        'app.translate',
	                        'app.home',
	                        'last-series',
	                        'files']);

	// Configura as rotas.
	angular.module('app').run(run).config(config);

	run.$inject = ['UrlService'];

	function run (UrlService){		
		UrlService.configSiteUrl();
	}

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

	function config($stateProvider, $urlRouterProvider, $translateProvider) {

	        $translateProvider.preferredLanguage('en');
            $translateProvider.useLoader('CustomLoader');
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.determinePreferredLanguage();

            $urlRouterProvider.otherwise("/home");
            $stateProvider.state('series', {
                url : "/series/add",
                templateUrl : "views/series/series-add.html",
                controller : 'SeriesController',
                controllerAs : 'vm'
            }).state('characters', {
                url : '/characters/add',
                templateUrl : 'views/characters/characters-add.html',
                controller : 'CharactersController',
                controllerAs : 'vm'
            }).state('home', {
                url : "/home",
                templateUrl : "views/pages/home.html",
                controller : 'HomeController',
                controllerAs : "vm"
            });
	}
})();