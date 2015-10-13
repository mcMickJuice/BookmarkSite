import footerComponent from './footer/footer'
import mainComponent from './main/main'
import bookmarkModule from './bookmark/bookmark.module'

import angular from 'angular'

const dependencies = [
  footerComponent.name,
  mainComponent.name,
  bookmarkModule.name
]

export default angular.module('bookmarky-components',dependencies)
