var assert = require('assert');

var Calculator = {
  add: function(x) {
    if (x === '') {
      return x;
    } else if (x !== '' && x.indexOf('//') === 0) {
      var arr = x.split(/[\s;]+/);
      var shift = arr.shift('//') ///[\s,]+/
      var sum = 0;
      arr.forEach(function(z) {
        sum += Number(z);
      });
    } else if (x !== '') {
      var arr = x.split(/[\s,]+/);
      var sum = 0;
      console.log(arr);
      arr.forEach(function(z) {
        sum += Number(z);
      });
    }
    return sum;
  }
}
// }
describe('String Calculator', function() {
  it('it should return 0 when the value is blank string', function() {
    var result = Calculator.add('');
    assert.equal(0, result);
  });

  it('it should return sum of both numbers', function() {
    var result = Calculator.add('1,2');
    assert.equal(3, result);
  });

  it('it should return sum of both numbers', function() {
    var result = Calculator.add('5,7');
    assert.equal(12, result);
  });

  it('it should return 50 when the values of "10, 3, 15, 2, 7, 9, 4"', function() {
    var result = Calculator.add('10, 3, 15, 2, 7, 9, 4');
    assert.equal(50, result);
  });

  it('it should return 19 when the values of "5\n9,4,1"', function() {
    var result = Calculator.add('5\n9, 4, 1');
    assert.equal(19, result);
  });

  it('it should return 3 when the values of “//;\n1;2”', function() {
    var result = Calculator.add('//;\n1;2');
    assert.equal(3, result);
  });

});

// var units = x.split(',');
//
// var sum = 0;
// units.forEach(function(z) {
//   sum += Number(z);
// })






//describe('#indexOf()', function() {
// it('should return -1 when the value is not present', function() {
//   assert.equal(-1, [1,2,3].indexOf(4));
// });
//
// it('should return the index when the value is present', function() {
//   assert.equal(0, [1, 2, 3].indexOf(1));
