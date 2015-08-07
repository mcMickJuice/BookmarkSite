(function(){
	'use strict';

	function BookmarkView(){
		return {
			templateUrl: '/views/directives/bookmarkView.html',
			restrict: 'E'
		};
	}

	angular.module('bookmarkysiteApp')
		.directive('bmBookmarkView',BookmarkView);
}());