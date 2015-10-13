import {MainDirective as component} from './main.component'
import bookmarkServiceModule from 'app/services/bookmark/bookmarkService.module'
import angular from 'angular'

export default angular.module('main', [bookmarkServiceModule.name])
  .directive('bmMain',component)
