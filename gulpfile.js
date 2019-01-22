var gulp = require("gulp"),
	jade = require("gulp-jade"),
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
	src_jade = src + '/*.jade',
	src_sass = src + '/sass/**/*.scss',
	src_js = src + '/js/*.js',
	src_img = src + '/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',

	// destinations
	dist = './dist',
	dist_jade = dist,
	dist_sass = dist + '/css',
	dist_js = dist + '/js',
	dist_img = dist + '/images/';

gulp.task("build-jade", function(){
	return gulp.src(src_jade)
	.pipe(jade({
	   doctype: 'html',
	   pretty: 	true
	}))
	.on("error", function(e){
		console.log(e.toString());
		this.emit("end");
	})
	.pipe(gulp.dest(dist_jade));
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

	gulp.watch(src + '/**/*.jade', gulp.series("build-jade")).on('change', browsersync.reload);
	gulp.watch(src_sass, gulp.series("build-sass")).on('change', browsersync.reload);
	gulp.watch(src_js, gulp.series("build-js")).on('change', browsersync.reload);
});

gulp.task("build", gulp.series("build-jade","build-sass","build-js"));
