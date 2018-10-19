'use strict';

/*
gulp
- The streaming build system
- https://yarnpkg.com/en/package/gulp

gulp_uglify
- Minify JavaScript with UglifyJS3.
- https://www.npmjs.com/package/gulp-uglify

gulp-sass
- Sass plugin for Gulp.
- https://yarnpkg.com/en/package/gulp-sass

gulp-cssmin
- minify css using gulp.
- https://yarnpkg.com/en/package/gulp-rename

gulp-rename
- gulp-rename is a gulp plugin to rename files easily.
- https://www.npmjs.com/package/gulp-rename

gulp-concat
- Concatenates files
- https://yarnpkg.com/en/package/gulp-concat

gulp-htmlmin
- gulp plugin to minify HTML.
- https://yarnpkg.com/en/package/gulp-htmlmin

gulp-sourcemaps
- Inline source maps are embedded in the source file.
- All plugins between sourcemaps.init() and sourcemaps.write() need to have support for gulp-sourcemaps.
- To write external source map files, pass a path relative to the destination to sourcemaps.write().
- https://yarnpkg.com/en/package/gulp-sourcemaps

make-dir
- Make a directory and its parents if needed - Think mkdir -p
- https://yarnpkg.com/en/package/make-dir

compress-images
- Minify size your images. Image compression with extension: jpg/jpeg, svg, png, gif.
- https://yarnpkg.com/en/package/compress-images

		You can use different algorithms and methods for compress images with many options.

		For JPG: jpegtran, mozjpeg, webp, guetzli, jpegRecompress, jpegoptim, tinify, imagemagick;
		For PNG: pngquant, optipng, pngout, webp, pngcrush, tinify, imagemagick;
		For SVG: svgo, imagemagick;
		For GIF: gifsicle, giflossy, gif2webp, imagemagick;

browser-sync
- Live CSS Reload & Browser Syncing
- https://yarnpkg.com/en/package/browser-sync

autoprefixer
- Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
- https://yarnpkg.com/en/package/autoprefixer

gulp-postcss
- PostCSS gulp plugin
- https://yarnpkg.com/en/package/gulp-postcss
*/

let gulp        	= require('gulp')
 	,gulp_uglify	= require('gulp-uglify')
 	,gulp_sass		= require('gulp-sass')
	,gulp_cssmin 	= require('gulp-cssmin')
	,gulp_rename 	= require('gulp-rename')
 	,gulp_concat	= require('gulp-concat')
	,gulp_htmlmin 	= require('gulp-htmlmin')
	,gulp_sourcemaps	= require('gulp-sourcemaps')
	,make_dir 			= require('make-dir')
	,compress_images 	= require('compress-images')
	,browser_sync 		= require('browser-sync').create()
	,autoprefixer 		= require('autoprefixer')
	,gulp_postcss 		= require('gulp-postcss')
	;

let distributionPath 	= './dist'
	,sourcePath 		= './src'
	,htmlSource 		= sourcePath + '/*.html'
	,htmlDestination 	= distributionPath
	,cssSource 			= sourcePath + '/sass/*'
	,cssDestination 	= distributionPath + '/css'
	,jsSource 			= [sourcePath + '/js/*.js']
	,jsDestination 		= distributionPath + '/js'
	,fontSource 		= [sourcePath + '/fonts']
	,fontDestination	= distributionPath + '/fonts'
	,imageSource 		= sourcePath + '/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
	,imageDestination	= distributionPath + '/images/'
	;

gulp.task('browser-sync', function() {
    browser_sync.init({
        server: {
            baseDir: distributionPath
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
	gulp.src(htmlSource)
		.pipe(gulp_htmlmin({
			collapseWhitespace: true,
			removeComments: false
		}))
		.pipe(gulp.dest(distributionPath));
});

gulp.task('build-js', function(){
	// non-minified
	gulp.src(jsSource)
	   .pipe(gulp_sourcemaps.init())
	   .pipe(gulp_concat('script.js'))
	   .pipe(gulp_sourcemaps.write('./'))
	   .pipe(gulp.dest(jsDestination));

    // minified
	gulp.src(jsSource)
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_uglify())
		.pipe(gulp_concat('script.js'))
		.pipe(gulp_rename({suffix: '.min'}))
		.pipe(gulp_sourcemaps.write('./'))
		.pipe(gulp.dest(jsDestination));
});

gulp.task('build-sass', function(){
	var browser_support = [
        autoprefixer({
			browsers: ['last 8 version']
		})
    ];

	// non-minified
	gulp.src(cssSource)
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_sass().on('error', gulp_sass.logError))
		.pipe(gulp_postcss(browser_support))
		.pipe(gulp_concat('style.css'))
		.pipe(gulp_sourcemaps.write('./'))
		.pipe(gulp.dest(cssDestination));

	// minified
	gulp.src(cssSource)
		.pipe(gulp_sourcemaps.init())
		.pipe(gulp_sass().on('error', gulp_sass.logError))
		.pipe(gulp_postcss(browser_support))
		.pipe(gulp_concat('style.css'))
		.pipe(gulp_cssmin())
		.pipe(gulp_rename({suffix: '.min'}))
		.pipe(gulp_sourcemaps.write('./'))
		.pipe(gulp.dest(cssDestination));
});

gulp.task('build-fonts', function(){
	gulp.src(fontSource)
		.pipe(gulp.dest(fontDestination));
});

gulp.task('build-images', function() {
	/** - compress_force (type:boolean): Force compress images already compressed images true or false;
		- statistic (type:boolean): show image compression statistics true or false;
		- pathLog (type:string): Path to log file. Default is ./log/compress-images;
		- autoupdate (type:boolean): Auto-update module «compress_images» to the latest version true or false; */

	compress_images(imageSource, imageDestination,
		{compress_force: false, statistic: true, autoupdate: true}, false,
        {jpg: {engine: 'mozjpeg', command: ['-quality', '90']}},
        {png: {engine: 'pngquant', command: ['--quality=20-50']}},
        {svg: {engine: 'svgo', command: '--multipass'}},
        {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
    });
});

gulp.task('build', [
					'make-dir'
					,'build-html'
					,'build-js'
					,'build-sass'
					,'build-fonts'
					,'build-images'
				]
);

gulp.task('watch', ['browser-sync'], function(){
	gulp.watch(cssSource, 	['build-sass']).on('change', browser_sync.reload);
	gulp.watch(jsSource, 	['build-js']).on('change', browser_sync.reload);
	gulp.watch(htmlSource, 	['build-html']).on('change', browser_sync.reload);
});
