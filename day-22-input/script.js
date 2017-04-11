var foods = [
  'steak',
  'nachos',
  'pizza',
  'hot wings',
  'burritos'
];

var foodListOL = document.querySelector('#food-list');
var input = document.querySelector('#query');

createLi(foods);
// for (var i = 0; i < foods.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = foods[i];
//   foodListOL.appendChild(li);
//}


input.addEventListener('keyup', function(evt) {
  if (evt.keyCode !== 13) {
    return;
  }
  var filteredList = [];
  for (var i = 0; i < foods.length; i++) {
    if (foods[i].indexOf(input.value) > -1) {
      filteredList.push(foods[i])
    }
  }
  foodListOL.innerHTML = '';
  createLi(filteredList);
  console.log('key up', input.value);
});

function createLi(arr) {
  for (var i = 0; i < arr.length; i++) {
    var li = document.createElement('li');
    li.textContent = arr[i];
    foodListOL.appendChild(li);
  }
};
