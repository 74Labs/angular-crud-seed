(function() {

	'use strict';

	angular.module('AppNameLowerCase.ResourceNameLowerCase.services', [])
	
	.factory('AppNameCamelCaseResourceNameCamelCaseService', function(AppNameCamelCaseRestangularProvider) {
		return {									
			createResourceNameCamelCase: function(item) { return AppNameCamelCaseRestangularProvider.all('ResourceAPIPath').post(item); },
			readResourceNameCamelCase: function(id) { return AppNameCamelCaseRestangularProvider.one('ResourceAPIPath', id).get(); },
			updateResourceNameCamelCase: function(item) { return AppNameCamelCaseRestangularProvider.one('ResourceAPIPath', item.id).patch(item); },
			deleteResourceNameCamelCase: function(id) { return AppNameCamelCaseRestangularProvider.one('ResourceAPIPath', id).remove(); },
			readAllResourceNameCamelCase: function() { return AppNameCamelCaseRestangularProvider.all('ResourceAPIPath').getList(); }
		};
	});

})();
