// requirements
var gulp = require('gulp'),
    _ = require('lodash');

// load environment configuration (TODO: load production on production server)
var environment = require('./gulp/environments/development.json');

// load configuration modules
var configModules = require('require-dir')('./gulp/config/');
var localConfig = {};

_.forEach(configModules, function (module, name) {
    localConfig[name] = module(environment);
});

// load task modules
var taskModules = require('require-dir')('./gulp/tasks/');
_.forEach(taskModules, function (module, name) {
    module(gulp, environment, localConfig);
});

// set tasks
gulp.task('dev', ['buildLibrary', 'buildComponents'/*, 'buildDemo'*/]);
gulp.task('test', ['buildLibrary', 'buildComponents', 'executeTests']);

