var someStrings = ['blob', 'crunch', 'street', 'rain', 'nose', 'shoes', 'chili'];

someStrings.forEach(function(str) {
  // console.log(str);
});


// someStrings.filter(function(str) {
//   var output = [];
//   if (str.length > 5) {
//     output.push(str);
//   }
//   return output;
// })
// return output;

//filter example
// var longerThan5 = someStrings.filter(function(str) {
//   if (str.length > 5){
//     return true;
//   }
// });
// console.log('longerThan5', longerThan5);

//shorter filter example
var longerThan5a2 = someStrings.filter(function(str) {
  return str.length > 5;
});

// console.log('longerThan5a2', longerThan5a2);

var letterEWords = someStrings.filter(function(str) {
  return str.indexOf('e') !== -1;
  });
  // console.log(letterEWords);

  var someStrings = ['blob', 'crunch', 'street', 'bled', 'nose', 'shoes', 'lamp'];

  var iLuv = someStrings.map(function(str) {
    return 'I love ' + str + '.';
  });
  // console.log(iLuv);

  someStrings.sort(function(a, b) {
    if (a < b) {
      return false;
    }
    else {
      return true;
    }
  })
  console.log(someStrings);
