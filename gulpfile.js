var gulp        = require('gulp'),
 	gulp_uglify	= require('gulp-uglify'),
 	gulp_sass	= require('gulp-sass'),
	gulp_csso 	= require('gulp-csso'),
 	gulp_concat	= require('gulp-concat'),
	gulp_sourcemaps	= require('gulp-sourcemaps'),
	gulp_imagemin 	= require('gulp-imagemin'),
	make_dir 		= require('make-dir'),
	browserSync 	= require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
			// server all files in 'dist' directory
            baseDir: "./dist"
        }
    });
});

gulp.task('make-dir', function(){
	// create these directory in the 'dist' directory
	Promise.all([
	    make_dir('dist/css'),
	    make_dir('dist/js'),
		make_dir('dist/fonts'),
		make_dir('dist/images')])
	.then(paths => {
		// displays the created directory
	    console.log(paths);
	});
});

gulp.task('build-html', function() {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('build-js', function(){
	// copy custom, JQuery and UIKit js to 'dist/js/'
	// compress, source map will be generated
	gulp.src([
			'src/js/*.js',
			'node_modules/uikit/vendor/jquery.js',
			'node_modules/uikit/dist/js/uikit.js'])
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_uglify())
		.pipe(gulp_concat('script.js'))
		.pipe(gulp_sourcemaps.write())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('build-sass', function(){
	// copy scss to 'dist/css/'
	// compress, source map will be generated
	gulp.src('src/sass/style.scss')
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_csso())
		.pipe(gulp_concat('style.css'))
		.pipe(gulp_sass().on('error', gulp_sass.logError))
		.pipe(gulp_sourcemaps.write())
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('build-fonts', function(){
	// copy 'fonts' to 'build/fonts'
	gulp.src([
			'node_modules/uikit/dist/fonts/fontawesome-webfont.ttf',
			'node_modules/uikit/dist/fonts/fontawesome-webfont.woff',
			'node_modules/uikit/dist/fonts/fontawesome-webfont.woff2',
			'node_modules/uikit/dist/fonts/FontAwesome.otf'])
		.pipe(gulp.dest('dist/fonts/'));
});

gulp.task('build-images', function() {
	gulp.src('src/images/*')
		.pipe(gulp_imagemin())
		.pipe(gulp.dest('dist/images'));
});

gulp.task('build', [
	'make-dir',
	'build-html',
	'build-js',
	'build-sass',
	'build-fonts',
	'build-images']
);

gulp.task('watch', ['browser-sync'], function(){
	gulp.watch('src/sass/**/*.scss', 	['build-sass']).on('change', browserSync.reload);
	gulp.watch('src/js/*.js', 			['build-js']).on('change', browserSync.reload);
	gulp.watch('src/*.html', 			['build-html']).on('change', browserSync.reload);
});
