(function(){
	'use strict';

	function BookmarkCtrl($scope, $routeParams,bookmarkService, tagService, notification){ //$stateParams service if using ui-router
			var originalCopy;


			$scope.isEditMode = false;

			function clone(obj){
				return JSON.parse(JSON.stringify(obj));
			}

			function init(){
				var id = $routeParams.id;

				tagService.getAllTags()
				.then(function(data){
					$scope.allTags = data;
					notification.info('Tags Loaded!');
					return bookmarkService.getBookmark(id);
				})
				.then(function(data){
					originalCopy = clone(data);
					$scope.bookmark = data;
					notification.info('Bookmark Loaded!');
				},function(error){
					console.log(error);
					notification.error('Error fetching Bookmark');
				});
			}

			$scope.updateBookmark = function(){
				bookmarkService.updateBookmark($scope.bookmark)
				.then(function(){
					notification.success('Bookmark Updated');
				},function(error){
					console.log(error);
					notification.error('Error Updating Bookmark!');
				});

				originalCopy = clone($scope.bookmark);
			};

			$scope.addTag = function(tag){
				tag.status = 1;
				$scope.bookmark.tags.push(tag);
			};

			$scope.removeTag = function(tag){
				var idx = $scope.bookmark.tags.indexOf(tag);
				if(idx !== -1)
				{
					$scope.bookmark.tags.splice(idx,1);
				}
			};

			$scope.createTag = function(tagName){
				tagService.createTag({tagName: tagName})
				.then(function(tag){
					$scope.allTags.push(tag);
					console.log('New Tag', tag);
					notification.success('Tag Created!');
				}, function(error){
					console.log(error);
					notification.error('Error Creating Tag');
				});
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