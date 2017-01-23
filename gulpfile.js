var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function(){
  console.log("Compiling sir");
  return gulp.src('public/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('public/css/'))
});

gulp.task('pug', function(){
	gulp.src('./public/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./public'))
});

gulp.task('views', function(){
	gulp.src('./public/views/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./public/views'))
});


gulp.task('watch', function(){
	gulp.watch('public/scss/*.scss', ['sass']);
	gulp.watch('public/*.pug', ['pug']);
	gulp.watch('public/views/*.pug', ['views'])
});
