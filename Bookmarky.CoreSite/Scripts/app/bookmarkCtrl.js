var app = angular.module("bookmarkyApp");

(function() {
   function BookmarkCtrl($scope,$location, bookmarkService) {
       var bookId = $location.search().bookId;
       
       $scope.bookId = bookId;
       //get json by bookId using service

       $scope.bookmark = {"id":2,"title":"Bookmark 2","url":"www.youtube.com","resourceTypeId":0,"gist":"Something Else","isRead":false,"sourceId":1,"createdDate":"2015-03-22T20:17:20.27"};
   }

   app.controller("BookmarkCtrl", ["$scope", "$location", "bookmarkService", BookmarkCtrl]);

}());