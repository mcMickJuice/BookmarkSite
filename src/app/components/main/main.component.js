import template from './main.tmpl.html!text'
import {MainCtrl as controller} from './main.ctrl'
import css from './main.css!css'

function MainDirective() {
  return {
    template,
    controller,
    controllerAs: 'vm',
    replace: true,
    scope: {

    }
  }
}

export {MainDirective}
