var concat = require('gulp-concat'),
    //debug = require('gulp-debug'),
    template = require('../plugins/template'),
    library = require('../../lib/library.json');

module.exports = function (gulp, environment, localConfig) {
    var config = localConfig.main;

    gulp.task('buildComponents:twig', function () {
        return gulp.src(config.componentsPath + '*/templates/*.twig')
            .pipe(template())
            .pipe(gulp.dest(config.distPath + 'components/'));
    });

    gulp.task('buildComponents:scss', function (done) {
        done();
    });

    gulp.task('buildComponents:js', function (done) {
        done();
    });

    gulp.task('buildComponents', ['buildComponents:twig', 'buildComponents:scss', 'buildComponents:js'], function (done) {
        done();
    });
};
