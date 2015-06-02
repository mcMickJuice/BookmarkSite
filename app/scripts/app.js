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
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toastrjs',
    'ui.bootstrap',
    'ui.router'
  ])
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'mainCtrl'
  //     })
  //     .when('/bookmarks/create',{
  //       templateUrl: 'views/bookmarkCreate.html',
  //       controller: 'bookmarkCtrl'
  //     })
  //     .when('/bookmarks',{
  //       templateUrl: 'views/bookmarkSearch.html',
  //       controller: 'bookmarkSearchCtrl'
  //     })
  //     .when('/bookmarks/:id',{
  //       templateUrl: 'views/bookmarkDetail.html',
  //       controller: 'bookmarkCtrl'
  //     });
  // });
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'mainCtrl',
        controllerAs: 'vm'
      })
      .state('bookmarks', {
        url: '/bookmarks',
        abstract: true,
        templateUrl: 'views/bookmarkShell.html',
      })
      .state('bookmarks.search',{
        url:'/search',
        templateUrl: ' views/bookmarkSearch.html',
        controller: 'bookmarkSearchCtrl',
        controllerAs: 'vm'
      })
      .state('bookmarks.create', {
        url: '/create',
        templateUrl: 'views/bookmarkCreate.html',
        controller: 'bookmarkCtrl',
       controllerAs: 'vm'
      })
      .state('bookmarks.detail', { //view Bookmark
        url: '/:bookmarkId',
        templateUrl: 'views/bookmarkDetail.html',
        controller: 'bookmarkCtrl',
       controllerAs: 'vm'
      });

    // .state('bookmark.edit', {
    //   url: '/:bookmarkId/edit',
    //   templateUrl: 'views/bookmarkDetail.html',
    //   controller: 'bookmarkCtrl',
    //   controllerAs: 'vm'
    // });
  });