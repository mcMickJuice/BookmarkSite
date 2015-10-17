// I have no idea how this is being used....
//Currently used in resource type and bookmakr search
function PopoverAttribute() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            // element.popover({
            //     trigger: 'click',
            //     html: 'true'
            // });

            scope.$on('$destroy',
                function() {
                    element.remove();
                });
        }
    };
}

export default PopoverAttribute