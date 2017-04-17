var numbers = [3, 64, 90, 323, 9, 5, 12, 100, 43];

//old school looping
// function loopAndConsoleLog(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// };
// loopAndConsoleLog(numbers);

// forEach example
// numbers.forEach (function(num) {
//   console.log(num);
// });

// var output = numbers.filter(function(num) {
//   // return num > 50;
//   if (i % 2 === 0) {
//     return false;
//   }
//   else {
//     return true;
//   }
// });
// console.log(output);


var bigger = numbers.map(function(num) {
  return num + 100;
});
// console.log(bigger);

var lis = numbers.map(function(num) {
  return '<li>' + num + '</li>';
});
// console.log(lis);


var numbers = [3, 64, 90, 323, 9, 5, 12, 100, 43];
numbers.sort(function(a, b) {
  if (a < b) {
    return true;
  }
  else {
    return false;
  }
})
console.log(numbers);
