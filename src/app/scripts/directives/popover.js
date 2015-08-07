(function() {
	'use strict';

	function Popover() {
		return {
			restrict: 'A',
			//templateUrl: '/views/directives/popover.html',
			link: function(scope, element) {
				element.popover({
					trigger:'click',
					html: 'true'
				});

				scope.$on('$destroy',
					function() {
						element.remove();
					});
			}
		};
	}

	angular.module('bookmarkysiteApp')
		.directive('popover', Popover);
}());