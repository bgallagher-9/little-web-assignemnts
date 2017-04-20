
function myLog() {
  var arr = Array.prototype.splice.call(arguments);
  console.log(arr.sort());
  // console.log(typeof Array.prototype);

};


myLog('hello', 'Monica');
