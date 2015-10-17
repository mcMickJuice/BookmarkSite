import template from './tagSearch.tmpl.html!text'

function TagSearch() {
	return {
		template,
		scope: {
			allTags: '=allTags',
			selectedTags: '=selectedTags',
			createTag: '&createTag',
			canAdd: '=canAdd'
		},
		link: function(scope){
			scope.addTag = function(tag){
				scope.selectedTags.push(tag);
			};
		}
	}
}

export default TagSearch