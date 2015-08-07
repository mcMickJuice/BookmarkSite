import {BookmarkService as service} from './bookmark-service'
import angular from 'angular'

export default angular.module('bookmark-service', [])
  .service('bookmarkService', service)
