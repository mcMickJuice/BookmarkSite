(function(){
'use strict';

	function ReviewCtrl($modalInstance, data){
		var vm = this;

		(function(data){
			console.log('in review Ctrl init',data);
			vm.review = data;
		})(data);

		vm.submitChanges = function(){
			$modalInstance.close(vm.review);
		}

		vm.cancel = function(){
			$modalInstance.dismiss();
		}
	}

	angular.module('bookmarkysiteApp')
		.controller('reviewCtrl',['$modalInstance','data',ReviewCtrl])
}())