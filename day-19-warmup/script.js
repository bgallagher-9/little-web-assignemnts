var nums = [56, 90, 2, 3, 88, 19];
var randomarray = [];
var totalCount = nums.length;
for (var i = 0; i < totalCount; i++) {
  var index = Math.floor(Math.random() * nums.length);
  var num = nums[index];
  nums.splice(index, 1);
  randomarray.push(num);
}
console.log(randomarray);
