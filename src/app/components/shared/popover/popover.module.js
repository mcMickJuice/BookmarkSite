import angular from 'angular'
import popoverAttribute from './popover.component'

export default angular.module('popoverAttribute', []) //might have dependency on ui bootstrap
	.directive('bmPopover', popoverAttribute)