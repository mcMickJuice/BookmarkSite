
'use strict';
	//TODO make provider

function ReviewService($http){

	var host = 'http://localhost:23346/api/Review/';

	function buildUrlEndpoint(action){
		var endpoint = action || '';
		return host + endpoint;
	}
	
	function createReview(review, bookmarkId){
		var url = buildUrlEndpoint();
		review.bookmarkId = bookmarkId; //bookmarkId == reviewId
		
		return $http.post(url,review)
		.then(function({data}){
			return data;
		});
	}
	
	function updateReview(review){
		var url = buildUrlEndpoint();
		
		return $http.put(url,review)
		.then(function({data}){
			return data;
		});
	}

	function getReviewForBookmark(bookmarkId) {
		var url = buildUrlEndpoint(bookmarkId);

		return $http.get(url)
			.then(function({data}) {
				return data;
			});
	}
	
	return {
		createReview,
		updateReview,
		getReviewForBookmark
	};
}

export default ReviewService