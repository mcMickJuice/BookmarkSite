import angular from 'angular'
import tagSearchComponent from './tagSearch.component'
import availableTagFilter from './availableTag.filter'

export default angular.module('tagSearchComponent', [])
	.directive('bmTagSearch', tagSearchComponent)
	.filter('availableTags', availableTagFilter)