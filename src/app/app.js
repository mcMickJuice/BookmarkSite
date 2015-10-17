'use strict';
import {
    AppDirective as appComponent
}
from './app.component'
import bookmarkyComponents from './components/component'
import notificationModule from './services/notification/notification.module'
import uiRouter from 'angular-ui-router'
import configModule from './services/config/configurationProvider.module'



var deps = [
        'ui.router',
        notificationModule.name,
        bookmarkyComponents.name,
        configModule.name
    ]

angular
    .module('bookmarkysiteApp', deps)
    .directive('bmApp', appComponent)
.config(function(configurationProvider) {
    configurationProvider.setConfiguration(bmGlobal.hostUrl);
})
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