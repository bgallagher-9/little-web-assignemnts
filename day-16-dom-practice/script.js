var click = document.querySelector('#click-me');
var x = 0;
var disp = document.querySelector('#count-display');
click.addEventListener('click', function() {
  x++;
  console.log(x);
  disp.textContent = 'Number of Clicks ' + x;
});


var addListButton = document.querySelector('#add-to-list');
var oList = document.querySelector('#liststuff');
addListButton.addEventListener('click', function () {
  // var currentHTML =  oList.innerHTML;
  // currentHTML += '<li>stuff</li>';
  // oList.innerHTML = currentHTML;

  var newItem = document.createElement('li');
  newItem.textContent = 'crap';
  newItem.classList.add('turkey');
  oList.appendChild(newItem);
});




var favFoods = document.querySelector('#favorite-foods');
var foods = ['peanuts', 'almonds', 'cashews', 'pecans', 'walnut'];
for (var i = 0; i < foods.length; i++) {
  var li = document.createElement('li');
  li.textContent = foods[i];
  favFoods.appendChild(li);
};

// var name = 'Brian';
// var age = 99;
//
// var name1 = 'June';
// var age2 = 1;
//
// var brian = {
//   name: 'Brian',
//   age: 99
// };
// var june = {
//   name: 'June',
//   age: 1
// };
// var megan = {
//   name: 'Megan',
//   age: 50
// }

// var people = [
//   {
//     name: 'Brian',
//     age: 99
//   },
//   {
//     name: 'June',
//     age: 1
//   },
//   {
//     name: 'June',
//     age: 1
//   }
// ];
//
// for (var i = 0; i < people.length; i++) {
//   var person = people[i];
//   console.log(person.name);
// };



var books = [
  {
    name: "Intelligent Person's Guide to Mud",
    author: "Frank Lyn",
    pageCount: 60
  },
  {
    name: 'Tao of Steak',
    author: 'Eric Sowell',
    pageCount: 135
  },
  {
    name: 'Books are Great',
    author: 'Guy Pants',
    pageCount: 190
  },
  {
    name: 'How to be a Sucker',
    author: 'Frank Lyn',
    pageCount: 83
  }
];

var booklist = document.querySelector('#bookthings');
var totalPages = 0;
for (var i = 0; i < books.length; i++) {
  var anli = document.createElement('li');
  anli.textContent = books[i].name + ' - ' + books[i].author + ' - ' + books[i].pageCount + ' pages';
  booklist.appendChild(anli);
  totalPages += books[i].pageCount;
}

var pgavg = document.querySelector('#pageavg');
pgavg.textContent = totalPages/books.length;
