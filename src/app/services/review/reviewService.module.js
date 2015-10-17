import angular from 'angular'
import tagService from './reviewService'
import configModule from '../config/configurationProvider.module'

export default angular.module('reviewServiceModule', [configModule.name])
	.factory('reviewService', tagService);