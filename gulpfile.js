let gulp = require('gulp');
let exec = require('child_process').exec;

gulp.task('deploy', function (cb) {
  exec('node scripts/deploy-gitbook.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('build', function (cb) {
  exec('node scripts/generate-gitbook.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('serve', function (cb) {
  exec('gitbook serve', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('varias', ['build', 'deploy']);

gulp.task('actualiza', ['build'], function (cb) {
  exec('node scripts/deploy-gitbook.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('default', ['actualiza'], function() {
   console.log("Actualizando libro en gh-pages");
});
