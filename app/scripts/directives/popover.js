(function() {
	'use strict';

	function Popover() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.popover();

				scope.$on("$destroy",
					function() {
						element.remove();
					});
			}
		}
	}

	angular.module('bookmarkysiteApp')
		.directive('popover', Popover)
}())