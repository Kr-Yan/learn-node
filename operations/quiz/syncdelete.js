const fs = require("fs");

fs.readFile("./operations/data.txt", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
    // Move the file deletion inside the callback, after successfully reading the file
    fs.unlink("./operations/data.txt", (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("File successfully deleted");
      }
    });
  }
});
