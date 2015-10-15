import modalTemplate from './reviewModal.tmpl.html!text'
import modalCtrl from './reviewModal.ctrl'

function ReviewController($modal, reviewService) {
    const vm = this;

    vm.openModal = function() {
        const bookmarkId = vm.bookmarkId,
            isNew = !!bookmarkId

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
            controllerAs: true
        });

        //check to see if this is cancelled
        instance.result.then(function(review) {
            if (isNew) {
                //create new Review
            } else {
                //update existing Review
            }
        })
    }
}

export
default ReviewController