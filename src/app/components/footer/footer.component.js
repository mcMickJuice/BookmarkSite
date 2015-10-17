'use strict';

import {FooterCtrl as controller} from './footer.ctrl'
import template from './footer.tmpl.html!text'

function FooterDirective() {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {

    }
  }
}

export {FooterDirective}
