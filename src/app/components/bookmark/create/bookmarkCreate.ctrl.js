// function BookmarkCtrl($scope, $modal, $stateParams, $location, bookmarkService, tagService, reviewService, notification) {
function BookmarkCtrl($scope, $stateParams, $location, bookmarkService, tagService, reviewService) {
    var vm = this;

    var originalCopy;
    $scope.bookmark = {
        tags: []
    };
    $scope.isEditMode = false;

    $scope.edit = function() {
        $scope.isEditMode = true;
    };

    function clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    function onError(message) {
        return function(error) {
            console.log(error);
        };
    }

    function init() {
        var id = $stateParams.bookmarkId;
        var isNew = !id;
        //new Bookmark
        if (isNew) {
            bookmarkService.getSearchInitialization()
                .then(function(data) {
                    $scope.allTags = data.fieldInitialization.availableTags;
                    $scope.resources = data.fieldInitialization.resources;
                });
        }
        //update 
        else {
            bookmarkService.getSearchInitialization()
                .then(function(data) {
                    $scope.allTags = data.fieldInitialization.availableTags;
                    $scope.resources = data.fieldInitialization.resources;

                    return bookmarkService.getBookmark(id);
                })
                .then(function(data) {
                    originalCopy = clone(data);
                    $scope.bookmark = data;
                    // notification.info('Bookmark loaded!');
                }, onError('Error fetching Bookmark'));
        }
    }

    $scope.updateBookmark = function() {
        bookmarkService.updateBookmark($scope.bookmark)
            .then(function() {
                // notification.success('Bookmark Updated');
                originalCopy = clone($scope.bookmark);
                $scope.isEditMode = false;
            }, onError('Error Updating Bookmark!'));
    };

    $scope.createBookmark = function() {
        bookmarkService.createBookmark($scope.bookmark)
            .then(function(newBookmark) {
                // notification.success('Bookmark Created');
                //grab bookmark Id, route to bookmark Detail
                var id = newBookmark.id;
                $location.path('bookmarks/' + id);
            }, onError('Error Creating Bookmark'));
    };


    //should live in directive
    //bound to collection that's given to directive
    $scope.addTag = function(tag) {
        tag.status = 1;
        $scope.bookmark.tags.push(tag);
    };

    $scope.removeTag = function(tag) {
        var idx = $scope.bookmark.tags.indexOf(tag);
        if (idx !== -1) {
            $scope.bookmark.tags.splice(idx, 1);
        }
    };

    $scope.createTag = function(tagName) {
        tagService.createTag({
            tagName: tagName
        })
            .then(function(tag) {
                $scope.allTags.push(tag);
                console.log('New Tag', tag);
                // notification.success('Tag Created!');
            }, onError('Error Creating Tag'));
    };

    //end region


    //directive?
    $scope.updateReview = function(review) {
        reviewService.updateReview(review)
            .then(function(review) {
                console.log(review);
                $scope.bookmark.review = review;
                // notification.success('Review Updated');
            }, onError('Error Updating Review'));
    };

    // $scope.createReview = function(review) {
    // 	reviewService.createReview(review)
    // 		.then(function(review) {
    // 			console.log(review);
    // 			$scope.bookmark.review = review;
    // 			notification.success('Review Created');
    // 		}, onError('Error Creating Review'));
    // };
    //review directive?

    // $scope.createReview = function(id) {
    //     var modalInstance = $modal.open({
    //         templateUrl: '/views/review.html',
    //         controller: 'reviewCtrl',
    //         controllerAs: 'vm',
    //         resolve: {
    //             data: function() {
    //                 return {
    //                     bookmarkId: id
    //                 };
    //             }
    //         }
    //     });

    //     modalInstance.result.then(function(result) {
    //         console.log('review object', result);

    //         reviewService.createReview(result)
    //             .then(function(review) {
    //                 console.log('created review', review);
    //                 $scope.bookmark.review = review;
    //                 notification.success('review saved!');
    //             }, onError('Error Creating Review'));
    //     });
    // };


    $scope.undoChanges = function() {
        $scope.bookmark = clone(originalCopy);
        $scope.isEditMode = false;
    };

    init();
}

export default BookmarkCtrl