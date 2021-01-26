const { src, dest, parallel, watch, series } = require('gulp');
const sass = require("gulp-sass")
const babel = require('gulp-babel')
const uglify = require("gulp-uglify-es").default
const rename = require("gulp-rename")
const sourcemaps = require("gulp-sourcemaps")
const autoprefixer = require("gulp-autoprefixer")
const del = require('del');
const webpack = require("gulp-webpack")
const browsersync = require('browser-sync');
const concat = require("gulp-concat");

const paths = {
	public: './Public',
	sass: {
		src: 'App/src/assets/sass/**/*.*',
		dest: 'Public/assets/css',
	},
	js: {
		src: 'App/src/assets/js/**/*.*',
		dest: 'Public/assets/js',
	},
	handlebars: {
		src: 'App/views/**/*.hbs'
	}
}

function browserSync() {
	browsersync({
		port: 3001
	});
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
	return src(paths.js.src, del(paths.js.dest + "/**"))
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write("./maps"))
		.pipe(dest(paths.js.dest))
}

function delPublicAssets() {
	return del(paths.public);
}

function copyJs() {
	return src("App/src/assets/js/components/**/*.*", del(paths.js.dest + "/components/**"))
		.pipe(babel())
		.pipe(dest(paths.js.dest + "/components/"));
}

function browserReload() {
	return browsersync.reload();
}

function watchFiles() {
	watch("App/src/assets/sass/**/*.*", SassMinify).on('change', browserReload);
	watch("App/src/assets/js/**/*.*", series(JsMinify, copyJs)).on('change', browserReload)
	watch("App/router/**/*.*").on('change', browserReload)
	watch(paths.handlebars.src).on('change', browserReload)
}

const watching = parallel(watchFiles, browserSync);
exports.SassMinify = SassMinify
exports.JsMinify = JsMinify
exports.default = series(delPublicAssets, SassMinify, JsMinify, copyJs, watching)
exports.build = series(delPublicAssets, SassMinify, JsMinify, copyJs, watching)