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
            console.log("Contribuidores del repositorio");
            for (var i = 0; i < contribuidores.length; i++)
               console.log(contribuidores[i]);
            console.log("Último commit realizado: " + log.all[0].author_name + " - " + log.all[0].date + " - " + log.all[0].message);
          }
        });
