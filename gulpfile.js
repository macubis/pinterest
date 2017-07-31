var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

//Aqui va todo lo de Javascript//
gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.min.js', 'assets/js/*.js'])
		.pipe(concat('script.js'))
		.pipe(gulp.dest('dist/js/'));
});

//aqui va todo de los estilos y css//
gulp.task('style', function(){
	gulp.src(['assets/sass/main.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('webserver', function(){
	gulp.src('../proyecto-final/')
		.pipe(webserver({
			fallback: 'index.html',
			livereload: true,
			directoryListing: false,
			open: true,
		}));
});
gulp.task('default', ['script', 'style', 'webserver']);