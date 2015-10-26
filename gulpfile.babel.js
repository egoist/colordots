import gulp from 'gulp'
import jade from 'gulp-jade'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import serve from 'gulp-serve'
import reload from 'gulp-livereload'

gulp.task('serve', serve({
  port: 3000,
  root: '.'
}))

gulp.task('babel', () => {
  gulp.src('./src/colordots.js')
    .pipe(babel({stage: 0}))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'))
    .pipe(reload())
})

gulp.task('jade', () => {
  gulp.src('./src/index.jade')
    .pipe(jade({
      locals: {
        time: Date.now()
      }
    }))
    .pipe(gulp.dest('./'))
    .pipe(reload())
})

gulp.task('watch', () => {
  reload.listen()
  gulp.watch('./src/colordots.js', ['babel'])
  gulp.watch('./src/index.jade', ['jade'])
})

gulp.task('build', ['babel', 'jade'])

gulp.task('default', ['build', 'watch', 'serve'])
