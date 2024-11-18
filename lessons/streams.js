const fs = require("fs");

//READ STREAM
/*
const readStream = fs.createReadStream("./veryLargeFile.txt", { encoding: "utf8",});

readStream.on("data", (chunk) => {
  console.log("---New chunk of data---");
  //console.log(chunk.toString());
  //or using the ut8 encoding
  console.log(chunk);
});
*/

//WRITE STREAM
/*
const readStream = fs.createReadStream("./veryLargeFile.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./blog.txt");

readStream.on("data", (chunk) => {
  console.log("---New chunk of data---");
  console.log(chunk);
  writeStream.write("\n --New chunk--\n");
  writeStream.write(chunk);
});
*/

//PIPES : directly write to writable stream from readable stream
const readStream = fs.createReadStream("./veryLargeFile.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./blog.txt");
readStream.pipe(writeStream);
