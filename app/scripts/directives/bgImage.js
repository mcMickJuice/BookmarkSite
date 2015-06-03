(function() {

	function BgImage() {

		var link = function(scope, element, attr) {
			attr.$observe('url', function(value) {
				var url = 'url(' + value + ')';
				element.css('background-image', url);
			});
			console.log('scope in bgImage Directive', attr);
		}

		return {
			link: link,
			scope: false,
			restrict: 'A'
		}
	}

	angular.module('bookmarkysiteApp')
		.directive('bmBgImage', BgImage);
}())