'use strict';
(function(angular){
	function BookmarkService($http){
		var host = 'http://localhost:23346/api/Bookmark/';

		function buildUrlEndpoint(action){
			var endpoint = action || '';
			return host + endpoint;
		}

		function getHomePageBookmarks()
		{
			var url = buildUrlEndpoint('GetHomePageDetails');
			return $http.get(url)
			.then(function(response)
			{
				return response.data;
			});
		}

		function getRecentBookmarks() //currently gets all bookmarks
		{
			var url = buildUrlEndpoint('Get');
			return $http.get(url)
			.then(function(response){
				return response.data;
			});
		}

		function getSearchInitialization(){
			var url = buildUrlEndpoint('GetSearchInitialization');

			return $http.get(url)
			.then(function(response){
				return response.data;
			});
		}

		function performSearch(searchCriteria){
			var url = buildUrlEndpoint('GetBookmarkBySearch');

			return $http.post(url,searchCriteria)
			.then(function(response){
				return response.data;
			});
		}

		function getBookmark(bookmarkId){
			var url = buildUrlEndpoint('?id=' + bookmarkId);

			return $http.get(url)
			.then(function(response){
				return response.data;
			});
		}

		function updateBookmark(bookmark){
			var url = buildUrlEndpoint('');

			return $http.put(url,bookmark)
			.then(function(response){
				return response.data;
			});
		}
		
		function createBookmark(bookmark){
			var url = buildUrlEndpoint('Post');
			
			return $http.post(url,bookmark)
			.then(function(response){
				return response.data;
			});
		}


		return {
			getHomePageBookmarks: getHomePageBookmarks,
			getSearchInitialization: getSearchInitialization,
			performSearch: performSearch,
			getBookmark: getBookmark,
			getRecentBookmarks: getRecentBookmarks,
			updateBookmark: updateBookmark,
			createBookmark: createBookmark
			};
}


angular.module('bookmarkysiteApp').factory('bookmarkService',['$http',BookmarkService]);

}(window.angular));