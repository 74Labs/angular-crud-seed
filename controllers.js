(function() {

	'use strict';

	angular.module('AppNameLowerCase.ResourceNameLowerCase.controllers', [
		'AppNameLowerCase.ResourceNameLowerCase.services', 
		'angular-growl'
	])

	.controller('AppNameCamelCaseResourceNameCamelCaseController', function(item, items, AppNameCamelCaseResourceNameCamelCaseService, $state, $filter, growl) {
			
		var vm = this;
		
		vm.item = item;
		vm.items = items;
		
		vm.deleteItem = function(id) {
			AppNameCamelCaseResourceNameCamelCaseService.deleteResourceNameCamelCase(id).then(function() {
				growl.info('ResourceName deleted');
				vm.items.splice(vm.items.indexOf($filter('filter')(vm.items, {id: id})),1);
			}, function() {
				growl.error('ResourceName delete error');
			});
		};
			
		vm.saveItem = function(redirectState) {
			
			var nextState = redirectState ? redirectState : 'edit';
			
			function success(response, message) {
				vm.item = response; 
				growl.success(message);
				$state.go('ResourceAPIPath.' + nextState, {id: vm.item.id});
			}
			
			function error(response, message) {
				growl.error(message); 
			}
			
			if(vm.item.id) {
				AppNameCamelCaseResourceNameCamelCaseService.updateResourceNameCamelCase(vm.item).then(function(response) { success(response, 'ResourceName updated'); }, function(response) { error(response, 'ResourceName update error'); });
			} else {
				AppNameCamelCaseResourceNameCamelCaseService.createResourceNameCamelCase(vm.item).then(function(response) { success(response, 'ResourceName created'); }, function(response) { error(response, 'ResourceName create error'); });
			}
			
		};
			
	});
	
})();
