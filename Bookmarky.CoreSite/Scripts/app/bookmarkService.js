var app = angular.module("bookmarkyApp");

(function() {
   function BookmarkService($resource) {
       alert("hello");
   }

    app.factory("bookmarkService", ["$resource", BookmarkService]);
}());