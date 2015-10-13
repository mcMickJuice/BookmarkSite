import {BookmarkSearchDirective as component} from './bookmark-search.component'
import bookmarkService from 'app/services/bookmark/bookmark-service.module'
import notificationService from 'app/services/notification/notification.module'
import angular from 'angular'

export default angular.module('bookmark-search',[bookmarkService.name, notificationService.name])
  .directive('bmBookmarkSearch', component);
