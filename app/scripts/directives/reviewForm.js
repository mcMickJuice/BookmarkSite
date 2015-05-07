(function(angular){
	'use strict';
	
	function ReviewForm(){
		return {
			templateUrl: 'views/review.html',
			scope: {
				bookmarkId: '=bookmarkId',
				review: '=review',
				updateReview: '&updateReview',
				createReview: '&createReview'
			},
			link: function(scope,element,attrs){
				var isNew = scope.review && scope.review.id ? false : true;

				scope.submitChanges = function(){
					if(isNew){//create Review
						scope.review.bookmarkId = scope.bookmarkId;
						scope.createReview({review: scope.review});
					}
					else{
						scope.updateReview({review: scope.review});
					}
				};
			}
		};
	}
	
	angular.module('bookmarkysiteApp')
		.directive('reviewForm',ReviewForm);
}(window.angular));