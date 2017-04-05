var letters = 'alsjfaoweriuqwerpoivnnvlnlkjfnaksjhfdiqwofibnqcihbehbqhbewf';
var dict = {};

for (var i = 0; i < letters.length; i++) {
  if (dict[letters[i]] === undefined) {
    dict[letters[i]] = 1;
  }
  else {
    dict[letters[i]] += 1;
  }
}
console.log(dict);
