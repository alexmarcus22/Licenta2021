var { src, dest, parallel, watch } = require('gulp');
var sass = require("gulp-sass")
var babel = require('gulp-babel');
var uglify = require("gulp-uglify-es").default
var rename = require("gulp-rename")
var sourcemaps = require("gulp-sourcemaps")
var autoprefixer = require("gulp-autoprefixer")
var del = require('del');
var browserify = require("gulp-browserify")
var webpack = require("gulp-webpack")

var paths = {
	sass: {
		src: 'App/src/assets/sass/**/*.scss',
		dest: 'public/assets/css/',
	},
	js: {
		src: 'App/src/assets/js/bundle.js',
		dest: 'public/assets/js/',
	},
}

function SassMinify() {
	return src("App/src/assets/sass/global.scss", del(paths.sass.dest))
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
	return src(paths.js.src, del(paths.js.dest))
		.pipe(babel({ presets: ["@babel/preset-env"] }))
		.pipe(webpack())
		.pipe(rename('main.min.js'))
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write("./maps"))
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
		JsMinify)
}

exports.watch = watchFiles;
exports.build = parallel(SassMinify, JsMinify);