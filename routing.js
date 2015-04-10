(function() {

	'use strict';

	angular.module('AppNameLowerCase.ResourceNameLowerCase.routing', [
	  'ui.router', 
	  'AppNameLowerCase.ResourceNameLowerCase.controllers', 
	  'AppNameLowerCase.ResourceNameLowerCase.services'
	])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  	$stateProvider
  		
  		.state('ResourceNameLowerCase', {
  			url: '/ResourceNameLowerCase',
  			templateUrl: 'app/modules/ResourceNameLowerCase/html/index.html',
  			abstract: true
  		})
  		
  		.state('ResourceNameLowerCase.list', {
  			url: '',
  			templateUrl: 'app/modules/ResourceNameLowerCase/html/list.html',
  			resolve: {
  				item: function() { return null; },
  				items: function(AppNameCamelCaseResourceNameCamelCaseService) { return AppNameCamelCaseResourceNameCamelCaseService.readAllResourceNameCamelCase(); }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		})		
  		
  		.state('ResourceNameLowerCase.show', {
  			url: '/{id:[0-9]}',
  			templateUrl: 'app/modules/ResourceNameLowerCase/html/show.html',
  			resolve: {
  				item: function($stateParams, AppNameCamelCaseResourceNameCamelCaseService) { return AppNameCamelCaseResourceNameCamelCaseService.readResourceNameCamelCase($stateParams.id); },
  				items: function() { return []; }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		})
  		
  		.state('ResourceNameLowerCase.new', {
  			url: '/new',
  			templateUrl: 'app/modules/ResourceNameLowerCase/html/form.html',
  			resolve: {
  				item: function() { return {}; },
  				items: function() { return []; }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		})
	
  		.state('ResourceNameLowerCase.edit', {
  			url: '/{id:[0-9]}/edit',
  			templateUrl: 'app/modules/ResourceNameLowerCase/html/form.html',
  			resolve: {
  				item: function($stateParams, AppNameCamelCaseResourceNameCamelCaseService) { return AppNameCamelCaseResourceNameCamelCaseService.readResourceNameCamelCase($stateParams.id); },
  				items: function() { return []; }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		});

	});

})();
