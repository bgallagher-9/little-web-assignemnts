var classmates = ['Stevie', 'Ali', 'Haley', 'Nikki', 'Monica', 'Sam', 'David', 'Brian'];

// var randomNumber = Math.random();
// randomNumber = randomNumber * classmates.length;
// randomNumber = Math.floor(randomNumber);

// var randomNumber = Math.floor(Math.random() * classmates.length);
//
// console.log(randomNumber);


// For loop example
// var randomClassmates = [];
// var totalCount = classmates.length;
// for (var i = 0; i <totalCount; i ++) {
//   var randomNumber = Math.random();
//   randomNumber = randomNumber * classmates.length;
//   randomNumber = Math.floor(randomNumber);
//
//   randomClassmates.push(classmates[randomNumber]);
//   classmates.splice(randomNumber, 1);
// }

console.log(randomClassmates);



// While loop example
while (classmates.length > 0) {
  var randomNumber = Math.random();
  randomNumber = randomNumber * classmates.length;
  randomNumber = Math.floor(randomNumber);

  randomClassmates.push(classmates[randomNumber]);
  classmates.splice(randomNumber, 1);
}
console.log(randomClassmates);
