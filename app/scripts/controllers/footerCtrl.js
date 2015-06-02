(function() {
	'use strict';

	function FooterCtrl($scope, $timeout, bookmarkService) {
		var interval = 15000;



		function getStickiedBookmarks() {
			bookmarkService.getHomePageBookmarks()
				.then(function(data) {
					$scope.stickiedBookmarks = data.stickiedBookmarks;
					$timeout(getStickiedBookmarks, interval);

				}, function(error) {
					console.error(error);
				});
		}

		(function() {
			getStickiedBookmarks();
		})();
	}

	angular.module('bookmarkysiteApp')
		.controller('footerCtrl', ['$scope', '$timeout', 'bookmarkService', FooterCtrl]);
}())