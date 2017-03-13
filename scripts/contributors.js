let dateDifference = require ('date-difference');

require('simple-git')()
      .log(function(err, log) {
         console.log(log);
         if(err){
            console.error(err);
         }
         else {
            let contribuidores = [];
            let indices = [];
            for (var i = 0; i < log.all.length; i++)
               if (!contribuidores.includes(log.all[i].author_name)) {
                  contribuidores.push(log.all[i].author_name);
                  indices.push(i);
               }
            console.log("Contribuidores del repositorio");

            console.log(contribuidores);
            console.log(indices);
            let date = new Date;
            for (var i = 0; i < indices.length; i++)  {
               console.log("#Last Update: " + date);
               console.log(log.all[indices[i]].author_name + " <" + log.all[indices[i]].author_email + "> (since " + log.all[indices[i]].date + ", " + dateDifference (new Date (log.all[indices[i]].date), date) + ")");
            }
            //console.log("Último commit realizado: " + log.all[0].author_name + " - " + log.all[0].date + " - " + log.all[0].message);
         }
        });
