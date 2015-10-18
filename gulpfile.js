//json server

//server reload

//jspm bundle - create separate bundles

//write webapi endpoint in index.html

//run tests

//prod build moving all to dist

var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var htmlReplace = require('gulp-html-replace');
var envConfig = require('./envConfig')

gulp.task('config-replace', function() {

})

gulp.task('clean-all', function() {
    var toDelete = ['dist']
    return del(toDelete);
})

gulp.task('build-prod', ['clean-all'], function() {
	var templateString = '<script>' +
			'var bookmarkyConfig = bookmarkyConfig || {};bookmarkyConfig.webApiUrl = "%s"' +
			'</script>'

	var replaceConfig = {
		'envConfig': {
			src: envConfig.production.webApiUrl,
			tpl: templateString
		}
	};

	return gulp.src('./src/index.html')
		.pipe(htmlReplace(replaceConfig))
		.pipe(gulp.dest('dist/'))
})

gulp.task('default', function() {
    console.log('this is the default task')
    console.log(envConfig);
})