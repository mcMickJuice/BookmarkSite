(function(){
	'use strict';

	function BookmarkCtrl($scope, $routeParams,bookmarkService, tagService, notification){ //$stateParams service if using ui-router
			var originalCopy,
				allTags = [];


			$scope.isEditMode = false;

			function clone(obj){
				return JSON.parse(JSON.stringify(obj));
			}

			function init(){
				var id = $routeParams.id;

				tagService.getAllTags()
				.then(function(data){
					allTags = data;
					notification.info('Tags Loaded!');
					return bookmarkService.getBookmark(id);
				})
				//bookmarkService.getBookmark(id)
				.then(function(data){
					originalCopy = clone(data);
					$scope.bookmark = data;
					notification.info('Bookmark Loaded!');
				},function(error){
					console.log(error);
					notification.error('Error fetching Bookmark');
				});
			}

			$scope.$watch(
				function(scope){
					return scope.bookmark.tags;
				},
				function(newValue, oldValue){
					$scope.availableTags = allTags.filter(function(item){
					var usedIds = newValue.map(function(b){
						return b.id;
					});

					return usedIds.indexOf(item.id) === -1;
				});
			})

			$scope.availableTags = allTags.filter(function(item){
				var usedIds = $scope.bookmark.tags.map(function(b){
					return b.id;
				});

				return usedIds.indexOf(item.id) === -1;
			});

			$scope.updateBookmark = function(){
				bookmarkService.updateBookmark($scope.bookmark);

				originalCopy = clone($scope.bookmark);
			};

			$scope.undoChanges = function(){
				$scope.bookmark = clone(originalCopy);
			};

			init();
	}

	angular
	.module('bookmarkysiteApp')
	.controller('bookmarkCtrl',['$scope','$routeParams','bookmarkService','tagService','notification',BookmarkCtrl]);
}());