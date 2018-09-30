const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('zibia_build', function() {
	return gulp
		.src([
			"scripts/global.js",
			"scripts/mechanics/*.js",
			"scripts/**/*.js"
		])
		.pipe(concat('game.js'))
		.pipe(gulp.dest("dist"));
});
