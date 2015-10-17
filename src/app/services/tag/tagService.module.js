import angular from 'angular'
import tagService from './tagService'
import configModule from '../config/configurationProvider.module'

export default angular.module('tagServiceModule', [configModule.name])
	.factory('tagService', tagService);