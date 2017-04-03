var theList = document.querySelector('#the-list');

var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

//Add code here!
for (var i = 0; i < groceryList.length; i++) {
  var glli = document.createElement('li');
  glli.textContent = groceryList[i];
  theList.appendChild(glli);
}
