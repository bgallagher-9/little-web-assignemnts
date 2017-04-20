function View(selector) {
  this.el = document.querySelector(selector);
}

View.prototype.text = function(txt) {
  this.el.textContent = txt;
  // console.log('what is this?', this);
}

View.prototype.hide = function() {
  this.el.style.display = 'none'
};

View.prototype.click = function(func) {
  var self = this;
  this.el.addEventListener('click', function() {
    func.call(self)
  })
}

var aDiv = new View('#div');
aDiv.text('I have text.')
aDiv.hide();

var anotherDiv = new View('#anotherdiv');
anotherDiv.text('I have another text.')
//console.log(aDiv.el);

anotherDiv.click(function() {
  this.text('I clicked on it')
  // console.log('what is this?', this);
});
