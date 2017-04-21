(function(){

  //functions are objects
  function Counter(selector, count) {
    this.el = document.querySelector(selector);
    this.count = count;

    var self = this;
    this.el.addEventListener('click', function() {
      // console.log('click', this, self);
      self.count += 1;
      self.render();
    })
  }

  Counter.prototype.render = function() {
    this.el.textContent = 'Current Count:' + this.count;
  }

  var counter1 = new Counter('#counter', 0);
  counter1.render();
  var counter2 = new Counter('#counter2', 3);
  counter2.render();

})();
