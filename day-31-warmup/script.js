var inventory = {
  eggs: 247,
  stripsOfBacon: 200,
  cheeseUnits: 143
}


function fullfillOrder(orders) {
  // Implement this

  // example 1
  // inventory.eggs -= orders.omelets * 3;
  // inventory.stripsOfBacon -= orders.omelets * 2;
  // inventory.cheeseUnits -= orders.omelets  * 1;
  // inventory.eggs -= orders.eggPlates * 2;
  // inventory.stripsOfBacon -= orders.eggPlates * 3;

  for (var i = 0; i < orders.omelets; i++) {
    inventory.eggs -= 3;
    inventory.stripsOfBacon -= 2;
    inventory.cheeseUnits -= 1;
  }
  for (var i = 0; i < orders.eggPlates; i++) {
    inventory.eggs -= 2;
    inventory.stripsOfBacon -= 3;
  }
}


//every omelet uses 3 eggs, 2 strips of bacon, and 1 cheese unit
//every egg plate uses 2 eggs and 3 strips of bacon
fullfillOrder({
  omelets: 4,
  eggPlates: 12
});

$.ajax({

})



// How many eggs do you have left?
// How many strips of bacon do you have left?
// How many units of cheese do you have left?






var inventory = {
  eggs: 247,
  stripsOfBacon: 200,
  cheeseUnits: 143,


  fullfillOrder: function(orders) {
//   console.log(this);
  // Implement this
    inventory.eggs -= 3 * orders.omelets;
  //inventory.eggs -= orders.omelets * 3;
    this.stripsOfBacon -= 2 * orders.omelets;
  //inventory.stripsOfBacon -= orders.omelets * 2;
    this.cheeseUnits -= 1 * orders.omelets;
  //inventory.cheeseUnits -= orders.omelets  * 1;
  //inventory.eggs -= orders.eggPlates * 2;
    this.eggs -= orders.eggPlates * 2;
  //inventory.stripsOfBacon -= orders.eggPlates * 3;
    this.stripsOfBacon -= orders.eggPlates * 3;
    console.log('eggs', this.eggs);
    console.log('bacon', this.stripsOfBacon);
    console.log('cheese', this.cheeseUnits);

  }
}
  console.log(inventory.eggs);



//every omelet uses 3 eggs, 2 strips of bacon, and 1 cheese unit
//every egg plate uses 2 eggs and 3 strips of bacon
inventory.fullfillOrder({
  omelets: 4,
  eggPlates: 12
});



// How many eggs do you have left?
// How many strips of bacon do you have left?
// How many units of cheese do you have left?
