'use strict';

/**
 * @ngdoc overview
 * @name bookmarkysiteApp
 * @description
 * # bookmarkysiteApp
 *
 * Main module of the application.
 */
angular
  .module('bookmarkysiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toastrjs',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/bookmarks/create',{
        templateUrl: 'views/bookmarkDetail.html',
        controller: 'bookmarkCtrl'
      })
      .when('/bookmarks',{
        templateUrl: 'views/bookmarkSearch.html',
        controller: 'bookmarkSearchCtrl'
      })
      .when('/bookmarks/:id',{
        templateUrl: 'views/bookmarkDetail.html',
        controller: 'bookmarkCtrl'
      });
  });
