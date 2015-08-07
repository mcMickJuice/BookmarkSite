(function(){
	'use strict';

	function BookmarkCreate(){
		return {
			templateUrl: '/views/directives/bookmarkCreate.html',
			restrict: 'E'
		};
	}

	angular.module('bookmarkysiteApp')
		.directive('bmBookmarkCreate',BookmarkCreate);
}());