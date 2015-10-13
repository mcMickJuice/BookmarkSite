import {BookmarkService as service} from './bookmarkService'
import angular from 'angular'

export default angular.module('bookmark-service', [])
  .service('bookmarkService', service)
