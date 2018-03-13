const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require('gulp-sass');


gulp.task("default", function () {
  return gulp.src("src/**.scss")
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({
      cascade: false,
      grid:true
    }))
    .pipe(gulp.dest("dist"));
});