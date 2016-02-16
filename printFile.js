var fs = require('fs');
function printFile(fileName) {
    setTimeout(function(){
        fs.exists(fileName, function(exist) {
                  console.log(exist?'':'not exists');
                    return;
                  });
        fs.readFile(fileName, {encoding:'utf8'}, function(err, contents){
           console.log(contents); 
        });
    },5000);
}

module.exports.printFile = printFile;