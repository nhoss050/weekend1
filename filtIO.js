var fs = require("fs");

var filePath = "test/test_sync.txt";
var fileData = "Testing synchronous file write.\n";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
console.log("successfully wrote to", filePath);
});