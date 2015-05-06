(function(){
	'use strict';

	function AvailableTagFilter(){
		return function(usedTags,allTags){

			if(!usedTags || !allTags){
				return [];
			}

			return allTags.filter(function(item){
				return usedTags.map(function(t){
					return t.id;
				})
				.indexOf(item.id) === -1;
			});
		};
	}

	angular.module('bookmarkysiteApp').filter('availableTags',AvailableTagFilter);
}());