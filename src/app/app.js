'use strict';
import {
    AppDirective as appComponent
}
from './app.component'
import bookmarkyComponents from './components/component'
import notificationModule from './services/notification/notification.module'
import uiRouter from 'angular-ui-router'

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
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        views: {
            "": {
                template: '<bm-main></bm-main>'
            }
        }
    })
    //make child
    .state('bookmarks', {
      url: '/bookmarks',
      template: '<bm-bookmark-container></bm-bookmark-container>'
    })
});