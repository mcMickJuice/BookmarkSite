import angular from 'angular'
import tagService from './tagService'

export default angular.module('tagServiceModule', [])
	.factory('tagService', tagService);