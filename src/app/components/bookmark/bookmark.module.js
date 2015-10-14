import angular from 'angular'
import bookmarkContainer from './bookmarkContainer.component'
import tagServiceModule from '../../services/tag/tagService.module'
import bookmarkServiceModule from '../../services/bookmark/bookmarkService.module'
import reviewServiceModule from '../../services/review/reviewService.module'
import 'angular-ui-router'
// import bookmarkListing from './bookmarkList.component'
import bookmarkSearchComponent from './search/bookmarkSearch.component'
import bookmarkCreateComponent from './create/bookmarkCreate.component'
import bookmarkDetailComponent from './detail/bookmarkDetail.component'
import popoverAttribute from '../shared/popover/popover.module'

const deps = [
'ui.router', 
bookmarkServiceModule.name,
tagServiceModule.name, 
reviewServiceModule.name,
popoverAttribute.name
];


export
default angular.module('bookmarkModule', deps)
    .config(function($stateProvider, $urlRouterProvider) {

    	$stateProvider.state('bookmarks.search', {
    		url: '/search',
    		template: '<bm-search-bookmark></bm-search-bookmark>'
    	})
    	.state('bookmarks.create', {
    		url: '/create',
    		template: '<bm-create-bookmark></bm-create-bookmark>'
    	})
        .state('bookmarks.edit', {
            url: '/edit/:bookmarkId',
            template: '<p>heres the edit page!</p>',
            controller: function($stateParams) {
                console.log($stateParams.bookmarkId);
            }
        })
        .state('bookmarks.detail', {
            url: '/detail/:bookmarkId',
            controller: function(bookmark) {
                const vm = this;
                vm.bookmark = bookmark;
            },
            controllerAs: 'vm',
            template: '<bm-detail-bookmark bookmark="vm.bookmark"></bm-detail-bookmark>',
            resolve: {
                bookmark: function($stateParams, bookmarkService) {
                    var bmId = $stateParams.bookmarkId;
                    return bookmarkService.getBookmark(bmId);                
                }
            }
        })
    })
    .directive('bmBookmarkContainer', bookmarkContainer)
    .directive('bmCreateBookmark', bookmarkCreateComponent)
    .directive('bmSearchBookmark', bookmarkSearchComponent)
    .directive('bmDetailBookmark', bookmarkDetailComponent)
// .directive('bmListing', bookmarkListing);