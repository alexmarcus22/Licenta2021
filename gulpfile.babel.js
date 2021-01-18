var { src, dest, parallel, watch } = require('gulp');
var sass = require("gulp-sass")
var uglify = require("gulp-uglify-es").default
var rename = require("gulp-rename")
var sourcemaps = require("gulp-sourcemaps")
var plumber = require("gulp-plumber")
var cssmin = require('gulp-clean-css');
var autoprefixer = require("gulp-autoprefixer")
const del = require('del');

const paths = {
	sass: {
		src: 'App/src/assets/sass/**/*.scss',
		dest: 'public/assets/css/',
	},
	js: {
		src: 'App/src/assets/js/**/*.js',
		dest: 'public/assets/js/',
	},
}

function SassMinify() {
	return src("App/src/assets/sass/global.scss", del(paths.sass.dest))
		.pipe(plumber())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(autoprefixer())
		.pipe(sass({
			outputStyle: "compressed"
		}).on("error", sass.logError))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(sourcemaps.write("maps"))
		.pipe(dest(paths.sass.dest))
}

function JsMinify() {
	return src(paths.js.src)
		.pipe(uglify())
		.pipe(rename('app.js'))
		.pipe(dest(paths.js.dest));
}

function watchFiles() {
	watch(
		paths.sass.src,
		{ ignoreInitial: false },
		SassMinify
	);
	watch(
		paths.js.src,
		{ ignoreInitial: false },
		JsMinify);
}

exports.watch = watchFiles;
exports.build = parallel(SassMinify, JsMinify);