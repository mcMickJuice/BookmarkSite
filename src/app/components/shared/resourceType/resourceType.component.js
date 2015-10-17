import template from './resourceType.tmpl.html!text'

function ResourceTypeComponent() {
	return {
		restrict: 'E',
		template,
		scope: {
			resourceId: '@'
		},
		link: function(scope, element, attr) {
			attr.$observe('resourceId', function(value) {
				if (value) {
					scope.resourceInfo = RESOURCE_DESCRIPTION[value];
					scope.imageSrc = '/images/' + scope.resourceInfo.imageUrl;
				}
			});
			

			scope.$watch('resourceInfo');
		}
	}
}

export default ResourceTypeComponent