

function Dude(name) {
  this.name = name;
}

Dude.prototype.sayMyName = function() {
  var self = this;
  setTimeout(function() {
    console.log('My name is', self.name);
  }, 0);
}

Dude.prototype.sayMyName2 = function() {
  let callback = function() {
    console.log('my name is', this.name);
  }
  setTimeout(callback.bind(this), 0);
};

let theDude = new Dude('Stevie');
theDude.sayMyName();
theDude.sayMyName2();

let otherDude = {
  name: 'Heisenberg'
};

Dude.prototype.sayMyName.call(otherDude);
