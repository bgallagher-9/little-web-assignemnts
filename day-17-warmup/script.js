
var groceries = [
  { name: 'Dr Pepper', cost: 0.99 },
  { name: 'ribeye', cost: 12.78 },
  { name: 'gum', cost: 1.12 },
  { name: 'flowers', cost: 7.99 },
  { name: 'pork chops', cost: 8.50 },
  { name: 'eggs', cost: 3.40 },
  { name: 'milk', cost: 5.20 },
  { name: 'lip balm', cost: 0.99 },
  { name: 'tissues', cost: 1.30 },
  { name: 'toothbrush', cost: 3.00 },
  { name: 'Claritin', cost: 12.36 },
  { name: 'Tic-Tacs', cost: 1.85 }
];


//Make this function calculate and return the average cost.

function averageCost(items) {
  var costTotal = [];
  for (var i = 0; i < items.length; i++) {
    costTotal += items.cost;
    console.log(items.cost);
  }

}

var space = averageCost(groceries);
// console.log('average', average);


//Make this function return the most expensive item.
// var mostExpensiveItem = [0];
function mostExpensive(items) {
  var mostExpensiveItem = items[0];
  for (var i = 1; i < items.length; i++) {
    if (items[i].cost > mostExpensiveItem.cost) {
      mostExpensiveItem = items[i];
    }
  }
  return mostExpensiveItem;
}
var mostExpensiveItem = mostExpensive(groceries);
console.log('most expensive', mostExpensiveItem);

var mostExp = document.querySelector('#expensiveItem');
mostExp.textContent = mostExpensiveItem.name;
// console.log(groceries.name);

//Make this function return the least expensive item.
// var leastExpensiveItem = [0];
function leastExpensive(items) {
  var leastExpensiveItem = items[0];
  for (var i = 0; i < items.length; i++) {
    if (items[i].cost < leastExpensiveItem.cost) {
      leastExpensiveItem = items[i];
    }
  }
  return leastExpensiveItem;
}
var leastExpensiveItem = leastExpensive(groceries);
console.log('least expensive', leastExpensiveItem);

var leastExp = document.querySelector('#expensiveItemLeast');
leastExp.textContent = leastExpensiveItem.name;
