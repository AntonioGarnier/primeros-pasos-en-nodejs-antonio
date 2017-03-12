require('simple-git')()
      .log(function(err, log) {
         if(err){
            console.error(err);
         }
         else {
            let contribuidores = [];
            for (var i = 0; i < log.all.length; i++)
               if (!contribuidores.includes(log.all[i].author_name))
                  contribuidores.push(log.all[i].author_name);
            for (var i = 0; i < contribuidores.length; i++)
               console.log(contribuidores[i] + "\n");
            console.log("Último commit realizado: " + log.latest.author_name + " - " + log.latest.date + " - " + log.latest.message);
          }
        });
