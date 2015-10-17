import controller from './bookmarkDetail.ctrl'
import template from './bookmarkDetail.tmpl.html!text'

function BookmarkDetailComponent() {
	return {
		scope: {
			bookmark: '='
		},
		restrict: 'E',
		replace: true,
		controller,
		controllerAs: 'vm',
		bindToController: true,
		template
	}
}

export default BookmarkDetailComponent