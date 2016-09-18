/**
 * Created by Ola on 2016-09-17.
 */

var gulp = require( "gulp" );
var jshint = require( "gulp-jshint" );
var karma = require('karma').Server;

gulp.task( "default", function () {

    return gulp.src( "./app/scripts/**/*.js" )
        .pipe( jshint() )
        .pipe( jshint.reporter( "default" ) );
} );


gulp.task('test', function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

