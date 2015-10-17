'use strict';
/*@ngInject*/
function MainCtrl(bookmarkService) {
  const self = this;
  bookmarkService.getHomePageBookmarks()
    .then(function(data) {
      self.recentlyAddedBookmarks = data.recentBookmarks;
    });
}

export {
  MainCtrl
}
