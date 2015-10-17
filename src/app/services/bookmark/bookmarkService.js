'use strict';
/*@ngInject*/
	class BookmarkService {
		constructor($http, configuration) {
			this._$http = $http;
			this._configuration = configuration;
		}

		// var host = 'http://localhost:23346/api/Bookmark/';

		buildUrlEndpoint(action) {
			const host = this._configuration.getDomain() + '/api/Bookmark/'
			const endpoint = action || '';
			return host + endpoint;
		}

		getHomePageBookmarks() {
			const url = this.buildUrlEndpoint('GetHomePageDetails');
			return this._$http.get(url)
			.then(response => response.data);
		}

//currently gets all bookmarks
		getRecentBookmarks() {
			const url = this.buildUrlEndpoint();
			return this._$http.get(url)
			.then(response => response.data);
		}

		getSearchInitialization() {
			const url = this.buildUrlEndpoint('GetSearchInitialization');

			return this._$http.get(url)
			.then(response => response.data);
		}

		performSearch(searchCriteria) {
			const url = this.buildUrlEndpoint('GetBookmarkBySearch');

			return this._$http.post(url,searchCriteria)
			.then(response => response.data);

		}

		getBookmark(bookmarkId) {
			const url = this.buildUrlEndpoint(bookmarkId);

			return this._$http.get(url)
			.then(response => response.data);
		}

		updateBookmark(bookmark) {
			const url = this.buildUrlEndpoint();

			return this._$http.put(url,bookmark)
			.then(response => response.data);
		}

		createBookmark(bookmark) {
			const url = this.buildUrlEndpoint();

			return this._$http.post(url,bookmark)
			.then(response => response.data);

		}
}

export {BookmarkService}
