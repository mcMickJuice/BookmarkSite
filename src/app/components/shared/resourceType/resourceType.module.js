import angular from 'angular'
import resourceTypeComponent from './resourceType.component'

export default angular.module('resourceTypeComponent', [])
	.directive('bmResourceType', resourceTypeComponent)
	.constant('RESOURCE_DESCRIPTION', { 
	    1: {
	        name: 'Article',
	        imageUrl: 'article.png',
	        description: 'Bookmark is an article or blogpost'
	    },
	    2: {
	        name: 'Tutorial',
	        imageUrl: 'tutorial.png',
	        description: 'Bookmark is a post about how to do a specific thing'
	    },
	    3: {
	        name: 'Video',
	        imageUrl: 'video.png',
	        description: 'Bookmark is a video or slideshow'
	    },
	    4: {
	        name: 'Reference',
	        imageUrl: 'reference.jpg',
	        description: 'Bookmark is a site that\'s used as a reference (e.g. MDN)'
	    },
	})