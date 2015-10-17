import controller from './review.ctrl'
import template from './review.tmpl.html!text'
// CSS?

function ReviewComponent() {
	return {
		restrict: 'E',
		replace: true,
		controller,
		controllerAs: 'vm',
		scope: {
			bookmarkId: "@",
			review: "="
		},
		template,
		bindToController: true
	}
}

export default ReviewComponent