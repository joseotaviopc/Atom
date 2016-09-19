var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	console.log('Rodando o Gulp');
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('css/**/*.css');
	//gulp.watch('js/**/*.js', ['lint']);

	browserSync.init({
		server: "./"
	});
	browserSync.stream();
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
//		.pipe(autoprefixer({
//			browsers: ['last 2 versions']
//		}))
		.pipe(gulp.dest('./css'));
});

