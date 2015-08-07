import {FooterDirective as component} from './footer.component'
import bookmarkServiceModule from 'app/services/bookmark/bookmark-service.module'
import angular from 'angular'

export default angular.module('footer',[bookmarkServiceModule.name])
  .directive('bmFooter', component)
