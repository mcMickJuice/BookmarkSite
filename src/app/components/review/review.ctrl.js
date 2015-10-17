import modalTemplate from './reviewModal.tmpl.html!text'
import modalCtrl from './reviewModal.ctrl'

function ReviewController($modal, reviewService) {
    const vm = this;

    vm.openModal = function() {
        const bookmarkId = vm.bookmarkId;

        const instance = $modal.open({
            resolve: {
                review: function(reviewService) {
                    if (bookmarkId) {
                        return reviewService.getReviewForBookmark(bookmarkId);
                    } else {
                        return {};
                    }
                }
            },
            template: modalTemplate,
            controller: modalCtrl,
            controllerAs: 'vm'
        });

        //check to see if this is cancelled
        instance.result.then(function(review) {
            let isNew = !review.id;
            if (isNew) {
                reviewService.createReview(review, bookmarkId)
                    .then(_setViewModelReview);
            } else {
                reviewService.updateReview(review).then(_setViewModelReview);
            }
        })
    }

    function _setViewModelReview(review) {
        vm.currentReview = review;
    }

    vm.hasReview = function() {
        return !!vm.currentReview;
    }

    _setViewModelReview(reviewService.getCurrentReview());
}

export
default ReviewController