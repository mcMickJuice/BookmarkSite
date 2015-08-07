'use strict';

var app = angular.module('bookmarkysiteApp');

(function(){
	function Notification(toastr){
		var defaultOptions = {
			closeButton: true,
			newestOnTop: true,
			positionClass: 'toast-top-right',
			showDuration: 300,
			hideDuration: 700
		};

		toastr.options = defaultOptions;

		function error(message){
			toastr.error(message);
		}

		function success(message){
			toastr.success(message);
		}

		function info(message){
			toastr.info(message);
		}

		return {
			error: error,
			success: success,
			info: info
		};

	}

	app.factory('notification',['toastr',Notification]);
}());