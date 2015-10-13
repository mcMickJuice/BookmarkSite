function BackgroundImageAttribute() {
    const link = function(scope, element, attr) {
        attr.$observe('url', function(value) {
            var url = 'url(' + value + ')';
            element.css('background-image', url);
        });
    }

    return {
        link: link,
        restrict: 'A'
    }
}

export default BackgroundImageAttribute