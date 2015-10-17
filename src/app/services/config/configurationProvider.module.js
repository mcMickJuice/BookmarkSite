import angular from 'angular'
import configProvider from './configurationProvider'

export default angular.module('configModule', [])
	.provider('configuration', configProvider)