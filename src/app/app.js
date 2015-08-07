'use strict';

/**
 * @ngdoc overview
 * @name bookmarkysiteApp
 * @description
 * # bookmarkysiteApp
 *
 * Main module of the application.
 */

import {AppDirective as appComponent} from './app.component'
import bookmarkyComponents from './components/component'
// import {FooterDirective as footer} from '../components/footer/footer'
// import {BookmarkSearchDirective as bookmarkSearch} from '../components/bookmark-search/bookmark-search'
import notificationModule from './services/notification/notification.module'
import uiRouter from 'angular-ui-router'
console.log(uiRouter);

angular
  .module('bookmarkysiteApp', [
    'ui.router',
    notificationModule.name,
    bookmarkyComponents.name
  ])
  .directive('bmApp', appComponent)
  // .constant('RESOURCE_DESCRIPTION',{ //maybe should be a json file
  //   1:{
  //     name: 'Article',
  //     imageUrl: 'article.png',
  //     description: 'Bookmark is an article or blogpost'
  //   },
  //   2:{
  //     name: 'Tutorial',
  //     imageUrl: 'tutorial.png',
  //     description: 'Bookmark is a post about how to do a specific thing'
  //   },
  //   3:{
  //     name: 'Video',
  //     imageUrl: 'video.png',
  //     description: 'Bookmark is a video or slideshow'
  //   },
  //   4:{
  //     name: 'Reference',
  //     imageUrl: 'reference.jpg',
  //     description: 'Bookmark is a site that\'s used as a reference (e.g. MDN)'
  //   },
  // })
  // .config(function($stateProvider, $urlRouterProvider) {
  //   $urlRouterProvider.otherwise('/');
  //
  //   $stateProvider.state('home', {
  //       url: '/',
  //       templateUrl: 'views/main.html',
  //       controller: 'mainCtrl',
  //       controllerAs: 'vm'
  //     })
  //     .state('bookmarks', {
  //       url: '/bookmarks',
  //       abstract: true,
  //       templateUrl: 'views/bookmarkShell.html',
  //     })
  //     .state('bookmarks.search',{
  //       url:'/search',
  //       templateUrl: ' views/bookmarkSearch.html',
  //       controller: 'bookmarkSearchCtrl',
  //       controllerAs: 'vm'
  //     })
  //     .state('bookmarks.create', {
  //       url: '/create',
  //       templateUrl: 'views/bookmarkCreate.html',
  //       controller: 'bookmarkCtrl',
  //      controllerAs: 'vm'
  //     })
  //     .state('bookmarks.detail', { //view Bookmark
  //       url: '/:bookmarkId',
  //       templateUrl: 'views/bookmarkDetail.html',
  //       controller: 'bookmarkCtrl',
  //      controllerAs: 'vm'
  //     });
  // });
