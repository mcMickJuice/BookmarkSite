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
