var jqprom = $.ajax({
  url: '/api/favoritefoods'
});

var favFoods = document.querySelector('#foodsFood');
var favSodas = document.querySelector('#foodsSoda');

jqprom.done(function(data) {
  for (var i = 0; i < data.foods.length; i++) {
    var foodli = document.createElement('li');
    foodli.textContent = data.foods[i];
    favFoods.appendChild(foodli);
  }

  for (var i = 0; i < data.sodas.length; i++) {
    var sodali = document.createElement('li');
    sodali.textContent = data.sodas[i];
    favSodas.appendChild(sodali);
  }

  // console.log(favFoods);
});
