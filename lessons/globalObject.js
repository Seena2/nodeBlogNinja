//Global object
//console.log(global);

/*
global.setTimeout(() => {
  console.log("In 5 seconds");
}, 5000);
*/

//you dont have to use the global keyword to use this global methods
//runs only once at the set time
setTimeout(() => {
  console.log("In 5 seconds");
  //stops the next setinterval function from running forever
  clearInterval(intrv);
}, 5000);

//this method runs every 3 seconds:
const intrv = setInterval(() => {
  console.log("Hello");
}, 3000);

//current directory: absolute path of the current folder
//D:\Repo\NODE\node_ninja
console.log(__dirname);

//current file: absolute path with file added on it
//D:\Repo\NODE\node_ninja\globalObject.js
console.log(__filename);
