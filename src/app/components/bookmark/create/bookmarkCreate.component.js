import template from './bookmarkCreate.form.tmpl.html!text'
import controller from './bookmarkCreate.ctrl'

function BookmarkCreate() {
	return {
		template,
		restrict: 'E',
		scope: {},
		controller,
		replace: true
		//controllerAs: 'vm'
	}
}

export default BookmarkCreate