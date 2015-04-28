'use strict';

var app = angular.module('bookmarkysiteApp');

(function(){
	function BookmarkSearchCtrl($scope, bookmarkService, notification){
		var initSearchObject;

		function clone(obj){
			return JSON.parse(JSON.stringify(obj));
		}

		function init(){
			bookmarkService.getRecentBookmarks()
				.then(function(data){
					$scope.bookmarks = data;
				});

			bookmarkService.getSearchInitialization()
				.then(function(data){
					initSearchObject =  clone(data.searchCriteria);
					$scope.searchCriteria = data.searchCriteria;
					$scope.availableTags = data.fieldInitialization.availableTags;
					$scope.resources = data.fieldInitialization.resources;

					notification.info('Form is loaded!');
				});
		}


		$scope.clearSearch = function(){
			$scope.searchCriteria = clone(initSearchObject);
		};

		$scope.search = function(){
			bookmarkService
			.performSearch($scope.searchCriteria)
			.then(function(data){
				$scope.bookmarks = null;
				if(data.length > 0){
					$scope.bookmarks = data;
					notification.success('Search Finished!');
				}
				else{
					notification.info('No bookmarks found');
				}
			},function(error,xhr,reason){
				console.log(error);
				console.log(xhr);
				console.log(reason);

				notification.error('There was an error when performing search');
			});
		};

		


		init();

}

app.controller('bookmarkSearchCtrl',['$scope','bookmarkService','notification',BookmarkSearchCtrl]);

}());