import {BookmarkSearchCtrl as controller} from './bookmark-search.ctrl'
import template from './bookmark-search.tmpl.html!text'

/*ngInject*/
function BookmarkSearchDirective() {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {}
  }
}

export {BookmarkSearchDirective}
