'use strict';

function TagService($http, configuration){
	var host = configuration.getDomain() + '/api/Tag/';

	function buildUrlEndpoint(action){
		var endpoint = action || '';
		return host + endpoint;
	}

	function getAllTags(){
		var url = buildUrlEndpoint();

		return $http.get(url)
		.then(function(response){
			return response.data;
		});
	}

	function createTag(tag){
		var url = buildUrlEndpoint();

		return $http.post(url,tag)
		.then(function(response){
			return response.data;
		});
	}

	return {
		getAllTags: getAllTags,
		createTag: createTag
	};
}

export default TagService;