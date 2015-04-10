(function() {

	'use strict';

	angular.module('AppNameLowerCase.ResourceNameLowerCase.routing', [
	  'ui.router', 
	  'AppNameLowerCase.ResourceNameLowerCase.controllers', 
	  'AppNameLowerCase.ResourceNameLowerCase.services'
	])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  	$stateProvider
  		
  		.state('ResourceAPIPath', {
  			url: '/ResourceAPIPath',
  			templateUrl: 'app/components/ResourceAPIPath/html/index.html',
  			abstract: true
  		})
  		
  		.state('ResourceAPIPath.list', {
  			url: '',
  			templateUrl: 'app/components/ResourceAPIPath/html/list.html',
  			resolve: {
  				item: function() { return null; },
  				items: function(AppNameCamelCaseResourceNameCamelCaseService) { return AppNameCamelCaseResourceNameCamelCaseService.readAllResourceNameCamelCase(); }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		})		
  		
  		.state('ResourceAPIPath.show', {
  			url: '/{id:[0-9]}',
  			templateUrl: 'app/components/ResourceAPIPath/html/show.html',
  			resolve: {
  				item: function($stateParams, AppNameCamelCaseResourceNameCamelCaseService) { return AppNameCamelCaseResourceNameCamelCaseService.readResourceNameCamelCase($stateParams.id); },
  				items: function() { return []; }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		})
  		
  		.state('ResourceAPIPath.new', {
  			url: '/new',
  			templateUrl: 'app/components/ResourceAPIPath/html/form.html',
  			resolve: {
  				item: function() { return {}; },
  				items: function() { return []; }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		})
	
  		.state('ResourceAPIPath.edit', {
  			url: '/{id:[0-9]}/edit',
  			templateUrl: 'app/components/ResourceAPIPath/html/form.html',
  			resolve: {
  				item: function($stateParams, AppNameCamelCaseResourceNameCamelCaseService) { return AppNameCamelCaseResourceNameCamelCaseService.readResourceNameCamelCase($stateParams.id); },
  				items: function() { return []; }
  			},
  			controller: 'AppNameCamelCaseResourceNameCamelCaseController',
  			controllerAs: 'ctrl'			
  		});

	});

})();
