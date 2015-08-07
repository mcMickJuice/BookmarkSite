(function(angular){
	'use strict';

	function TagSearch(){
			return {
			templateUrl: 'views/tagSearch.html',
			scope: {
				allTags: '=allTags',
				selectedTags: '=selectedTags',
				createTag: '&createTag',
				canAdd: '=canAdd'
			},
			link: function(scope){
				scope.addTag = function(tag){
					scope.selectedTags.push(tag);
				};
			}
		};
	}

	angular.module('bookmarkysiteApp')
		.directive('tagSearch',TagSearch);
}(window.angular));