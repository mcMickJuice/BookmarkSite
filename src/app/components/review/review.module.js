import angular from 'angular'
import reviewComponent from './review.component'
import reviewServiceModule from '../../services/review/reviewService.module'
import 'angular-bootstrap'

export default angular.module('bookmarkReviewModule', ['ui.bootstrap', reviewServiceModule.name])
	.directive('bmReview', reviewComponent)