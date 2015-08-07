(function() {
	"use strict";
	// function ResourceTypeCtrl($scope, RESOURCE_DESCRIPTION) {
	// 	var vm = this;
	// 	debugger;
	// 	vm.resourceInfo = RESOURCE_DESCRIPTION[$scope.resourceId];
	// }

	function ResourceType(RESOURCE_DESCRIPTION) {
		var link = function(scope, element, attr) {
			attr.$observe('resourceId', function(value) {
				if (value) {
					scope.resourceInfo = RESOURCE_DESCRIPTION[value];
					scope.imageSrc = '/images/' + scope.resourceInfo.imageUrl;
				}
			});
			

			scope.$watch('resourceInfo');
		}

		return {
			restrict: 'E',
			templateUrl: 'views/directives/resourceType.html',
			scope: {
				resourceId: '@'
			},
			link: link
		}
	}

	angular.module('bookmarkysiteApp')
		.directive('bmResourceType', ['RESOURCE_DESCRIPTION', ResourceType])
		//.controller('resourceTypeCtrl', ['$scope', 'RESOURCE_DESCRIPTION', ResourceTypeCtrl])
}())