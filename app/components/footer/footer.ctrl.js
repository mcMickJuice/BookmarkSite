'use strict';

/*ngInject*/
function FooterCtrl(bookmarkService) {
  const self = this;

  function getStickiedBookmarks() {
    bookmarkService.getHomePageBookmarks()
      .then(function(data) {
        self.stickiedBookmarks = data.stickiedBookmarks;
      }, function(error) {
        console.error(error);
      });
  }

  getStickiedBookmarks();
}

export {FooterCtrl}


// (function() {
// 	'use strict';
//
// 	function FooterCtrl($scope, $timeout, bookmarkService) {
// 		var interval = 15000;
//
//
//
// 		function getStickiedBookmarks() {
// 			bookmarkService.getHomePageBookmarks()
// 				.then(function(data) {
// 					$scope.stickiedBookmarks = data.stickiedBookmarks;
// 					//$timeout(getStickiedBookmarks, interval);
//
// 				}, function(error) {
// 					console.error(error);
// 				});
// 		}
//
// 		(function() {
// 			getStickiedBookmarks();
// 		})();
// 	}
//
// 	angular.module('bookmarkysiteApp')
// 		.controller('footerCtrl', ['$scope', '$timeout', 'bookmarkService', FooterCtrl]);
// }())
