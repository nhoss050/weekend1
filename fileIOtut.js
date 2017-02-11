var fs = require("fs");

// Asynchronous - Opening File
//console.log("Going to open file!");
var dataPath = process.argv.slice(2)
// dataPath = ("\""+ dataPath+"\"");
 dataPath = (""+dataPath);

console.log(dataPath);

fs.readFile(dataPath, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
   //return data.toString();
});


