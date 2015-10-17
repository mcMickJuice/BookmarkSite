function ReviewCtrl($modalInstance, review) {
    var vm = this;

    vm.review = review;

    vm.submitChanges = function() {
        $modalInstance.close(vm.review);
    };

    vm.cancel = function() {
        $modalInstance.dismiss();
    };
}

export default ReviewCtrl