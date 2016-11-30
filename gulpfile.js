var gulp         = require('gulp'),
    connect      = require('gulp-connect'),
    plumber      = require('gulp-plumber'),
    htmllint     = require('gulp-htmllint'),
    csslint      = require('gulp-csslint'),
    jshint       = require('gulp-jshint'),
    watchify     = require('watchify'),
    browserify   = require('browserify'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    assign       = require('lodash.assign'),
    gutil        = require('gulp-util');

gulp.task('watch', function() {
    gulp.watch('./src/html/**/*.html', ['html']);
    gulp.watch('./src/css/**/*.css', ['css']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('server', function() {
    return connect.server({
        root: 'build',
        livereload: true,
        port: 8000
    });
});

gulp.task('html', function() {
    return gulp.src('./src/html/**/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('./build'));
});

gulp.task('css', function() {
    return gulp.src('./src/css/**/*.css')
        .pipe(plumber())
        .pipe(gulp.dest('./build/css'));
});


var watchifyCustomOpts = {
        entries: ['./src/js/index.js'],
        debug: true
    }, 
    watchifyOpts = assign({}, watchify.args, watchifyCustomOpts),
    jsWatchify = watchify(browserify(watchifyOpts));

gulp.task('js', function() {
    return jsWatchify.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(plumber())
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/js'));
});


gulp.task('htmllint', function() {
    return gulp.src('./src/html/**/*.html')
        .pipe(plumber())
        .pipe(htmllint({}));
});

gulp.task('csslint', function() {
    return gulp.src('./src/css/**/*.css')
        .pipe(plumber())
        .pipe(csslint())
        .pipe(csslint.formatter());
});

gulp.task('jshint', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

gulp.task('jquery', function() {
    return gulp.src('./bower_components/jquery/dist/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('./build/vendor/jquery'));
});

gulp.task('bootstrap', function() {
    return gulp.src('./bower_components/bootstrap/dist/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('./build/vendor/bootstrap'));
});

gulp.task('lint', ['htmllint', 'csslint', 'jshint']);
gulp.task('build', ['jquery', 'bootstrap', 'html', 'css', 'js']);
gulp.task('default', ['build', 'server', 'watch']);