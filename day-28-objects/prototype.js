var arr = [1, 18, 9, 14, 5];
var strs = ['hello', 'crazy', 'peas', 'terminal']

// var shuffled = [];
// var length = arr.length;
//
// while (arr.length > 0) {
//   var randomIndex = Math.floor(Math.random() * arr.length);
//   shuffled.push(arr[randomIndex]);
//   arr.splice(randomIndex, 1);
// }
//console.log(shuffled)
//
// Array.prototype.shuffle = function() {
//   // console.log('what about here', this);
//   var copy = this.slice(0);
//   var shuffled = [];
//   while (copy.length > 0) {
//     var randomIndex = Math.floor(Math.random() * copy.length);
//     shuffled.push(copy[randomIndex]);
//     copy.splice(randomIndex, 1);
//   }
//   return shuffled;
// };
// // Array.protoytpe.shuffle = function() {
// //   console.log('You called shuffle', this);
// // }
// var shuffled = arr.shuffle();
// console.log(shuffled);

function Animal(name) {
  this.name = name;
}

Animal.prototype.makeNoise = function() {
  console.log(this.name + ' goes "blahblahblah".');
}

Animal.prototype.breath = function() {
  console.log(this.name + ' is breathing!')
};

function Dog(name) {
  this.name = name;

Cat.prototype = new Animal();

Cat.prototype.makeNoise = function() {
  console.log(this.name + ' goes meow.')
};


var fido = new Animal('Fido');
fido.makeNoise();
fido.breath();
  //console.log(fido.makeNoise);

  // This code uses a function called head and a function called tail.
  // Unfortunately, those functions aren't built-in to arrays in JS :(
  // Fortunately, you can add them to the prototype! Do it!
var nums = [1, 52, 16, 9, 100, 4];

var head = nums.head();
console.log(head); //This should be 1

var tail = nums.tail();
console.log(tail); //This should be [52, 16, 9, 100, 4]

function Coin(side) {
  this.side = side;
}
//Coin
Array.prototype.head = function() {
  return nums[0];
  console.log(nums[0]);
};
//Coin
Array.prototype.tails = function() {
  return nums.slice([1], [5])
  console.log(nums.slice([1], [5]));
};
var head = new Coin('head');
var tail = new Coin('tail');
