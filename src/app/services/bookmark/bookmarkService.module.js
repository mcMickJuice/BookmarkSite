import {BookmarkService as service} from './bookmarkService'
import angular from 'angular'
import configModule from '../config/configurationProvider.module'

export default angular.module('bookmark-service', [configModule.name])
  .service('bookmarkService', service)
