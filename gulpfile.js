//server reload

//jspm bundle - create separate bundles


//run tests



var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var server = require('gulp-server-livereload');
var htmlReplace = require('gulp-html-replace');
var envConfig = require('./envConfig')

gulp.task('config-replace', function() {

})

gulp.task('clean-all', function() {
    var toDelete = ['dist']
    return del(toDelete);
})

gulp.task('watch', function() {
	gulp.src('src')
		.pipe(server({
			livereload: true,
			directoryListing:true,
			open: true
		}))
})

//prod build moving all to dist

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
    
})