(function(angular){
	'use strict';

	function TagService($http){
		var host = 'http://localhost:23346/api/Tag/';

		function buildUrlEndpoint(action){
			var endpoint = action || '';
			return host + endpoint;
		}

		function getAllTags(){
			var url = buildUrlEndpoint();

			return $http.get(url)
			.then(function(response){
				return response.data;
			});
		}

		function createTag(tag){
			var url = buildUrlEndpoint();

			return $http.post(url,tag)
			.then(function(response){
				return response.data;
			});
		}

		return {
			getAllTags: getAllTags,
			createTag: createTag
		};
	}

	angular.module('bookmarkysiteApp').factory('tagService',['$http',TagService]);
}(window.angular));