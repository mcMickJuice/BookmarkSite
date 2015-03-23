var app = angular.module('bookmarkyApp');

(function () {
    function HomeController($scope, bookmarkService) {
        $scope.title = "Hello Title";

        $scope.stickied = [{ "id": 1, "title": "Bookmark 1", "url": "www.buttlash.com", "resourceTypeId": 0, "gist": "The maiden voyage", "isRead": false, "sourceId": 1, "createdDate": null }, { "id": 2, "title": "Bookmark 2", "url": "www.youtube.com", "resourceTypeId": 0, "gist": "Something Else", "isRead": false, "sourceId": 1, "createdDate": null }, { "id": 3, "title": "MDN", "url": "https://developer.mozilla.org/en-US/", "resourceTypeId": 0, "gist": "Mozilla Reference of EVERYTHING", "isRead": false, "sourceId": 1, "createdDate": null }];

        $scope.recent = [{ "id": 1, "title": "Bookmark 1", "url": "www.buttlash.com", "resourceTypeId": 0, "gist": "The maiden voyage", "isRead": false, "sourceId": 1, "createdDate": null }, { "id": 2, "title": "Bookmark 2", "url": "www.youtube.com", "resourceTypeId": 0, "gist": "Something Else", "isRead": false, "sourceId": 1, "createdDate": null }, { "id": 3, "title": "MDN", "url": "https://developer.mozilla.org/en-US/", "resourceTypeId": 0, "gist": "Mozilla Reference of EVERYTHING", "isRead": false, "sourceId": 1, "createdDate": null }];
    }

    app.controller("HomeCtrl", ["$scope", "bookmarkService", HomeController]);
}());