/**
 * Created by Ola on 2016-09-17.
 */

var gulp = require( "gulp" );
var jshint = require( "gulp-jshint" );

gulp.task( "default", function () {

    return gulp.src( "./app/scripts/**/*.js" )
        .pipe( jshint() )
        .pipe( jshint.reporter( "default" ) );

    console.log( "Hello gulp" );
} );