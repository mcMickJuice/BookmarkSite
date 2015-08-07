'use strict';

/**
 * @ngdoc function
 * @name bookmarkysiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookmarkysiteApp
 */
angular.module('bookmarkysiteApp')
  .controller('mainCtrl', function ($scope, bookmarkService) {

		    bookmarkService.getHomePageBookmarks()
		    .then(function(data){
				$scope.recentlyAddedBookmarks = data.recentBookmarks;
		    });

		    

  });
