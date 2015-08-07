import bookmarkSearchComponent from './bookmark-search/bookmark-search'
import footerComponent from './footer/footer'
import mainComponent from './main/main'

import angular from 'angular'

const dependencies = [
  bookmarkSearchComponent.name,
  footerComponent.name,
  mainComponent.name
]

export default angular.module('bookmarky-components',dependencies)
