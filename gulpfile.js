/* eslint-env node */

import gulp from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

const cssConfig = [
	{
		src: 'assets/css',
		dist: 'public/css',
	},
];

function cssClean( done ) {
	const tasks = cssConfig.map( ( config ) => {
		return () => del( config.dist + '/**' );
	} );

	return gulp.series( ...tasks, ( seriesDone ) => {
		seriesDone();
		done();
	} )();
}

gulp.task( 'css-clean', gulp.series( cssClean ) );

function cssBuildSass( done ) {
	// @TODO: Delete all dist before this.

	const tasks = cssConfig.map( ( config ) => {
		return () =>
			gulp
				.src( config.src + '/index.scss' )
                .pipe(sourcemaps.init())
				.pipe( postcss() ) // Uses the config from postcss.config.js.
				.pipe( rename( { extname: '.css' } ) )
                .pipe(concat('styles.css'))
                .pipe(sourcemaps.write())
				.pipe( gulp.dest( config.dist ) );
	} );

	return gulp.series( ...tasks, ( seriesDone ) => {
		seriesDone();
		done();
	} )();
}

gulp.task( 'css-build-sass', gulp.series( cssBuildSass ) );

gulp.task( 'css-build', gulp.series( cssClean, cssBuildSass ) );

function cssWatch( done ) {
	const tasks = cssConfig.map( ( config ) => {
		return () =>
			gulp.watch(
				config.src + '/**/*.scss',
				gulp.parallel( 'css-build' )
			);
	} );

	return gulp.series( ...tasks, ( seriesDone ) => {
		seriesDone();
		done();
	} )();
}

gulp.task( 'css-watch', gulp.series( cssWatch ) );

gulp.task( 'build', gulp.series( cssClean, cssBuildSass ) );
gulp.task( 'watch', gulp.series( cssWatch ) );
