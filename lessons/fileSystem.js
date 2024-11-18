const fs = require("fs");
//Reading file
/*
fs.readFile("./file1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
*/

//Writing file
/*
fs.writeFile(
  "./file12.txt",
  " Creates and adds the content since the file doesnt exist!",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File is written...");
    }
  }
);
*/

//Directories
//check first if the folder already exists with existSync() method
//is synchronious method,i.e it block other code until it completes the task of verifying
/*
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created..");
    }
  });
} else {
  //remove the directory
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Folder deleted");
    }
  });
}
*/
//Deleting files
if (fs.existsSync("./deleteme.txt")) {
  fs.unlink("./deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted...");
    }
  });
}
