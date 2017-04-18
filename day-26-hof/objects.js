var peeps = [
  { firstName: 'Jane', lastName: 'Jones', age: 12 },
  { firstName: 'John', lastName: 'Smith', age: 18 },
  { firstName: 'Fred', lastName: 'Johnson', age: 11 },
  { firstName: 'Jaime', lastName: 'Oliver', age: 9 },
  { firstName: 'Ragan', lastName: 'Perkinson', age: 1 },
  { firstName: 'Chris', lastName: 'Smith', age: 5 },
  { firstName: 'George', lastName: 'Jungle', age: 17 },
  { firstName: 'Mike', lastName: 'Tyson', age: 16 },
  { firstName: 'Jimmy', lastName: 'Smith', age: 21 },
  { firstName: 'Chris', lastName: 'Thompson', age: 17 }
];


// Full Object
// peeps.forEach(function(obj) {
//   console.log(obj)
// })

// Firstname only
// peeps.forEach(function(obj) {
//   console.log(obj.firstName)
// })

// Filter peeps with i in the name
// var output = [];
// peeps.filter(function(obj) {
//   if (obj.firstName.indexOf('i') !==  -1) {
//     output.push(obj);
//   }
//   return output;
// });
// console.log(output);
//})


// var fn = peeps.map(function(obj) {
//   return obj.firstName;
// });
// console.log(fn);

// The purpose of Map is to transform the array.
// var fnln = peeps.map(function(obj) {
//   return obj.firstName + ' ' + obj.lastName;
// });
// console.log(fnln);



var full = peeps.map(function(obj) {

  //YES!!!
  return {
    firstName: obj.firstName,
    lastName: obj.lastName,
    fullName: obj.firstName + ' ' + obj.lastName,
    age: obj.age
  }

  //NO!!! causes side effects, changes the original object
  //obj.fullname = obj.firstName + ' ' + obj.lastName



  // return  'Firstname: ' + obj.firstName + ' Lastname: ' + obj.lastName + ' Age: ' + obj.age + ' Fullname: ' + obj.firstName + ' ' + obj.lastName;
})
console.log(full);

//immutable.js
