'use strict';

var app = angular.module('bookmarkysiteApp');

(function(){
	function StickiedReferenceCtrl($scope, $window,bookmarkService){
		
		bookmarkService.getHomePageBookmarks()
		.then(function(data){
			$scope.references = data.stickiedBookmarks;
		});

		$scope.openUrl = function(url){
			$window.open(url);
		};
	}


app.controller('stickiedReferenceCtrl',['$scope','$window','bookmarkService',StickiedReferenceCtrl]);
}());