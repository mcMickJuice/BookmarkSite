(function(angular){
	'use strict';
	function ReviewService($http){
		
		var host = 'http://localhost:23346/api/Review/';
		
		function buildUrlEndpoint(action){
			var endpoint = action || '';
			return host + endpoint;
		}
		
		function createReview(review){
			var url = buildUrlEndpoint();
			
			return $http.post(url,review)
			.then(function(response){
				return response.data;
			});
		}
		
		function updateReview(review){
			var url = buildUrlEndpoint();
			
			return $http.put(url,review)
			.then(function(response){
				return response.data;
			});
		}
		
		return {
			createReview: createReview,
			updateReview: updateReview
		};
	}
	
	angular.module('bookmarkysiteApp')
	.factory('reviewService',['$http',ReviewService]);
}(window.angular));