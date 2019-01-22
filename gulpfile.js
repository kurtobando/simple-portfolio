var gulp = require("gulp"),
	pug = require("gulp-pug"),
	sass = require("gulp-sass"),
	postcss = require("gulp-postcss"),
	imports = require("postcss-import"),
	pxtorem = require("postcss-pxtorem"),
	clean = require("postcss-clean"),
	autoprefixer = require("autoprefixer"),
	uglify = require("gulp-uglify"),
	tinypng = require("gulp-tinypng-compress"),
	browsersync = require("browser-sync").create(),

	// sources
	src	= './src',
	src_pug = src + '/*.pug',
	src_sass = src + '/sass/**/*.scss',
	src_js = src + '/js/*.js',
	src_img = src + '/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',

	// destinations
	dist = './dist',
	dist_pug = dist,
	dist_sass = dist + '/css',
	dist_js = dist + '/js',
	dist_img = dist + '/images/';

gulp.task("build-pug", function(){
	return gulp.src(src_pug)
	.pipe(pug({
	   doctype: 'html',
	   pretty: 	true
	}))
	.on("error", function(e){
		console.log(e.toString());
		this.emit("end");
	})
	.pipe(gulp.dest(dist_pug));
});

gulp.task("build-sass", function(){
	return gulp.src(src_sass)
	.pipe(sass())
	.pipe(postcss([imports, autoprefixer, pxtorem, clean]))
	.on("error", function(e){
		console.log(e.toString());
		this.emit("end");
	})
	.pipe(gulp.dest(dist_sass));
});

gulp.task("build-js", function(){
	return gulp.src(src_js)
	.pipe(uglify())
	.on("error", function(e){
		console.log(e.toString());
		this.emit("end");
	})
	.pipe(gulp.dest(dist_js));
});

gulp.task('build-images', function () {
    return gulp.src(src_img)
	.pipe(tinypng({
		key: 'h5oQBfn1G8TiGDcPRP4iLE0YSyCvTZDu',
		log: true
	}))
	.pipe(gulp.dest(dist_img));
});

gulp.task("watch", function(){
	browsersync.init({
		server: {
			baseDir: dist
		}
	});

	gulp.watch(src + '/**/*.pug', gulp.series("build-pug")).on('change', browsersync.reload);
	gulp.watch(src_sass, gulp.series("build-sass")).on('change', browsersync.reload);
	gulp.watch(src_js, gulp.series("build-js")).on('change', browsersync.reload);
});

gulp.task("build", gulp.series("build-pug","build-sass","build-js"));
