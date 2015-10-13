import angular from 'angular'
import tagService from './reviewService'

export default angular.module('reviewServiceModule', [])
	.factory('reviewService', tagService);