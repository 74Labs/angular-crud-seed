(function() {

	'use strict';

	angular.module('AppNameLowerCase.ResourceNameLowerCase.controllers', ['AppNameLowerCase.services', 'angular-growl', 'mgcrea.ngStrap'])

	.controller('AppNameCamelCaseResourceNameCamelCaseController', function(item, items, AppNameCamelCaseService, $state, $filter, growl) {
			
		var vm = this;
		
		vm.item = item;
		vm.items = items;
		
		vm.deleteItem = function(id) {
			AppNameCamelCaseService.deleteResourceNameCamelCase(id).then(function() {
				growl.info('ResourceName deleted');
				vm.items.splice(vm.items.indexOf($filter('filter')(vm.items, {id: id})),1);
			}, function() {
				growl.error('ResourceName delete error');
			});
		};
		
		vm.saveItem = function() {
			
			function success(response, message) {
				vm.item = response; 
				growl.success(message);
				$state.go('ResourceNameLowerCase.show', {id: vm.item.id});
			}
			
			function error(response, message) {
				growl.error(message); 
			}
			
			if(vm.item.id) {
				AppNameService.updateResourceNameCamelCase(vm.item).then(function(response) { success(response, 'ResourceName updated'); }, function(response) { error(response, 'ResourceName update error'); });
			} else {
				AppNameService.createResourceNameCamelCase(vm.item).then(function(response) { success(response, 'ResourceName created'); }, function(response) { error(response, 'ResourceName create error'); });
			}
			
		};		
			
	});
	
})();