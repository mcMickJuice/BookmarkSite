import controller from './bookmarkSearch.ctrl'
import template from './bookmarkSearch.tmpl.html!text'

/*ngInject*/
function BookmarkSearchDirective() {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {}
  }
}

export default BookmarkSearchDirective
