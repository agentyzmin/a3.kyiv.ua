// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var reload      = browserSync.reload;

// // Save a reference to the `reload` method

// // Watch scss AND html files, doing different things with each.
// gulp.task('serve', function () {

//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });

//     gulp.watch("*.html").on("change", reload);
// });




var gulp = require('gulp'),
    browserSync = require('browser-sync');
  
gulp.task('browser-sync', function () {
  var files = [
    // '**/*',
    'projects/**',
    'css/**/*.css',
    'i**/*.png',
    'js/**',
    '*.html',
    '!node_modules/**'
  ];
  
  browserSync.init(files, {
    server: {
      baseDir: './'
    }
  });
});



