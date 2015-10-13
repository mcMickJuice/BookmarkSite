// (function(){
// 	'use strict';

// 	function BookmarkCreate(){
// 		return {
// 			templateUrl: '/views/directives/bookmarkCreate.html',
// 			restrict: 'E'
// 		};
// 	}

// 	angular.module('bookmarkysiteApp')
// 		.directive('bmBookmarkCreate',BookmarkCreate);
// }());
import template from './bookmarkCreate.form.tmpl.html!text'
import controller from './bookmarkCreate.ctrl'

function BookmarkCreate() {
	return {
		template,
		restrict: 'E',
		scope: {},
		controller
		//controllerAs: 'vm'
	}
}

export default BookmarkCreate