var sentences = 'I am having fun today.  I like having fun.  I like frogs.';

var words = sentences.split(' ');

var dict = {};

for (var i = 0; i < words.length; i++) {
  var word = words[i];
  if (dict[word] === undefined) {
    dict[word] = 1;
  }
  else {
    dict[word] += 1;
  }
};
console.log(dict);
