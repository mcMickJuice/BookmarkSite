//wrapping third party as a module and service. This shuld now be dep of angular app and service
//will be available to application
'use strict';
angular.module('toastrjs',[])
	.factory('toastr',function($window){
		if($window.toastr){
			//delete toastr from $window object so it's not available globally. We still have 
			//reference to it from $window._thirdParty.  This is approach was lifted from this link 
			//http://oblongmana.com/articles/angular-third-party-injection-pattern/

			$window._thirdParty = $window._thirdParty || {};
			$window._thirdParty.toastr = $window.toastr;

			//remove toastr from window object, try catch is to account for ie8 not allowed deleting 
			//props off window, instead set to undefined
			try{
				delete $window.toastr;
			}
			catch(e){
				$window.toastr = undefined;
			}
		}

		//grab instance of toastr, and return;
		var toastr = $window._thirdParty.toastr;

		return toastr;
	});