(function(angular){
	'use strict';

	function BookmarkCtrl($scope, $routeParams, $location, bookmarkService, tagService, reviewService, notification){ 
			var originalCopy;
			$scope.bookmark = {tags: []};
			$scope.viewState = '';

			function clone(obj){
				return JSON.parse(JSON.stringify(obj));
			}
			
			$scope.setState = function(state){
				console.log(state);
				$scope.viewState = state;
			};
			
			function onError(message){
				return function(error){
					console.log(error);
					notification.error(message);
				};
			}
			
			function init(){
				var id = $routeParams.id;
				var isNew = !id;
				//new Bookmark
				if(isNew){
					$scope.viewState = 'create';
					tagService.getAllTags()
					.then(function(tags){
						$scope.allTags = tags;
					    notification.info('Tags Loaded!');
					});
				}
				//update 
				else{
					$scope.viewState = 'read';
					tagService.getAllTags()
					.then(function(tags){
						$scope.allTags = tags;
						notification.info('Tags Loaded!');
						return bookmarkService.getBookmark(id);
					})
					.then(function(data){
						originalCopy = clone(data);
						$scope.bookmark = data;
						notification.info('Bookmark loaded!');
					},onError('Error fetching Bookmark'));
				}
			}

			$scope.updateBookmark = function(){
				bookmarkService.updateBookmark($scope.bookmark)
				.then(function(){
					notification.success('Bookmark Updated');
					originalCopy = clone($scope.bookmark);
				},onError('Error Updating Bookmark!'));
			};
			
			$scope.createBookmark = function(){
				bookmarkService.createBookmark($scope.bookmark)
				.then(function(newBookmark){
					notification.success('Bookmark Created');
					//grab bookmark Id, route to bookmark Detail
					var id = newBookmark.id;
					$location.path('bookmarks/' + id);
				},onError('Error Creating Bookmark'));
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
				}, onError('Error Creating Tag'));
			};
			
			$scope.updateReview = function(review){
				reviewService.updateReview(review)
				.then(function(review){
					console.log(review);
					$scope.bookmark.review = review;
					notification.success('Review Updated');
				},onError('Error Updating Review'));
			};
			
			$scope.createReview = function(review){
				reviewService.createReview(review)
				.then(function(review){
					console.log(review);
					$scope.bookmark.review = review;
					notification.success('Review Created');
				},onError('Error Creating Review'));
			};

			$scope.undoChanges = function(){
				$scope.bookmark = clone(originalCopy);
				$scope.viewState = 'read';
			};

			init();
	}

	angular
	.module('bookmarkysiteApp')
	.controller('bookmarkCtrl',['$scope','$routeParams', '$location','bookmarkService','tagService','reviewService','notification',BookmarkCtrl]);
}(window.angular));