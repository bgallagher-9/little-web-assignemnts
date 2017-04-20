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
