/// <reference path="C:\Users\Mike\Documents\Development\Bookmarky-Site\Bookmarky.CoreSite\ThirdParty/bower_components/angular/angular.js" />

var app = angular.module("bookmarkyApp", ["ngRoute","ngResource"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/Bookmark/:bookmarkId", {
            templateUrl: "Scripts/app/view/Bookmark.html",
            controller: "BookmarkCtrl"
        })
        .when("/", {
            templateUrl: "Scripts/app/view/Home.html",
            controller: "HomeCtrl"
        })
        .otherwise({
            templateUrl: "Scripts/app/view/NotFound.html"
        });
});