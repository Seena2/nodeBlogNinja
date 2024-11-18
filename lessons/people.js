const people = ["John", "Caltu", "Beeka", "Mohammed"];
const ages = [20, 20, 23, 32];
console.log(people);

//exporting one item
//module.exports = people;

//exporting multiple item
/*
module.exports = {
  people: people, //the key name can be anything,
  ages: ages,
};
*/
//equivalent to above: shortcut
module.exports = { people, ages };
