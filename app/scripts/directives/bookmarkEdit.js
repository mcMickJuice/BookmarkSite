(function(){
	'use strict';
	function BookmarkEdit(){
		return {
			templateUrl: '/views/directives/bookmarkEdit.html',
			restrict: 'E'
		};
	}

	angular.module('bookmarkysiteApp')
		.directive('bmBookmarkEdit',BookmarkEdit);
}());