var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '../gh_pages'), function(err) {
   console.log("Gitbook desplegado");
   console.log(err);
 });
