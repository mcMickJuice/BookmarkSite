import angular from 'angular'
import bookmarkCreateComponent from './bookmarkCreate.component'
import bookmarkServiceModule from '../../services/bookmark/bookmarkService.module'
import tagServiceModule from '../../services/tag/tagService.module'
import reviewServiceModule from '../../services/review/reviewService.module'

var deps = [
	bookmarkServiceModule.name,
	tagServiceModule.name,
	reviewServiceModule.name
]


export default angular.module('bookmarkCreateComponent', deps)
	.directive('bmCreateBookmark', bookmarkCreateComponent)