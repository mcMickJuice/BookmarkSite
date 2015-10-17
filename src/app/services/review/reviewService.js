
'use strict';
	//TODO make provider

function ReviewService($http){

	var host = 'http://localhost:23346/api/Review/',
		_currentReview;

	function getCurrentReview() {
		return _currentReview;
	}
	
	function buildUrlEndpoint(action){
		var endpoint = action || '';
		return host + endpoint;
	}
	
	function createReview(review, bookmarkId){
		var url = buildUrlEndpoint();
		review.bookmarkId = bookmarkId; //bookmarkId == reviewId
		
		return $http.post(url,review)
		.then(function(response){
			return _currentReview = response.data;
		});
	}
	
	function updateReview(review){
		var url = buildUrlEndpoint();
		
		return $http.put(url,review)
		.then(function(response){
			return _currentReview = response.data;
		});
	}

	function getReviewForBookmark(bookmarkId) {
		var url = buildUrlEndpoint(bookmarkId);

		return $http.get(url)
			.then(function(response) {
				return _currentReview = response.data;
			});
	}
	
	return {
		createReview,
		updateReview,
		getReviewForBookmark,
		getCurrentReview
	};
}

export default ReviewService