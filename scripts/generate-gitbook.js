console.log("Gitbook generando");
let exec = require('child_process').exec;
function puts (error, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   console.log(error);
 }
exec ("gitbook build ./txt ./gh-pages", puts);
