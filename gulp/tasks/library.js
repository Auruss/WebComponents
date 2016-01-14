var concat = require('gulp-concat'),
    //debug = require('gulp-debug'),
    library = require('../../lib/library.json');

module.exports = function (gulp, environment, localConfig) {
    /**
     * Concats library in order as defined in library.json
     */
    gulp.task('buildLibrary', function () {
        return gulp.src(library.scripts)
            .pipe(concat('library.js'))
            .pipe(gulp.dest(localConfig.main.distPath));
    });
};