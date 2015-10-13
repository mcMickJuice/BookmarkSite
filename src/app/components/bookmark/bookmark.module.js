import angular from 'angular'
import bookmarkContainer from './bookmarkContainer.component'
import tagServiceModule from '../../services/tag/tagService.module'
import reviewServiceModule from '../../services/review/reviewService.module'
import 'angular-ui-router'
// import bookmarkListing from './bookmarkList.component'
import bookmarkSearchComponent from './search/bookmarkSearch.component'
import bookmarkCreateComponent from './create/bookmarkCreate.component'

export
default angular.module('bookmarkModule', ['ui.router', tagServiceModule.name, reviewServiceModule.name])
    .config(function($stateProvider, $urlRouterProvider) {

    	$stateProvider.state('bookmarks.search', {
    		url: '/search',
    		template: '<bm-search-bookmark></bm-search-bookmark>'
    	})
    	.state('bookmarks.create', {
    		url: '/create',
    		template: '<bm-create-bookmark></bm-create-bookmark>'
    	})
    })
    .directive('bmBookmarkContainer', bookmarkContainer)
    .directive('bmCreateBookmark', bookmarkCreateComponent)
    .directive('bmSearchBookmark', bookmarkSearchComponent)
// .directive('bmListing', bookmarkListing);