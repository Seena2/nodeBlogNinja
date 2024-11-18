//Installing and using third party pacakges
//npm install lodash
const _ = require("lodash");

//using lodash to generate random number between 0 and 100
const num = _.random(0, 100);
console.log(num);

//using lodash to make function to run only once
const greeting = _.once(() => {
  console.log("Hello");
});
greeting();
greeting();
