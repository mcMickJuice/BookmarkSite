import template from './bookmarkShell.tmpl.html!text'

function BookmarkContainer() {
	return {
		template,
		restrict: 'E',
		scope: {}
	}
}

export default BookmarkContainer