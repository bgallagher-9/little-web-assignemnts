
var authors = [
  {
    name: 'Ishtiaq Ahmed',
    language: 'Urdu',
    birthYear: 1944,
    deathYear: 2015,
    publishedWords: 800
  },
  {
    name: 'Enid Blyton',
    language: 'English',
    birthYear: 1897,
    deathYear: 1968,
    publishedWords: 762
  },
  {
    name: 'Andrew Murray',
    language: 'English',
    birthYear: 1828,
    deathYear: 1917,
    publishedWords: 240
  },
  {
    name: 'Muhammad Muhiyyudin Ibn ul Arabi',
    language: 'Arabic',
    birthYear: 1165,
    deathYear: 1240,
    publishedWords: 240
  },
  {
    name: 'Jallaludin Suyuti',
    language: 'Arabic',
    birthYear: 1445,
    deathYear: 1505,
    publishedWords: 700
  },
  {
    name: 'Abu Hamid Al Ghazali',
    language: 'Arabic',
    birthYear: 1058,
    deathYear: 1111,
    publishedWords: 200
  },
  {
    name: 'Edwy S. Brooks',
    language: 'English',
    birthYear: 1889,
    deathYear: 1965,
    publishedWords: 800
  },
  {
    name: 'Isaac Asimov',
    language: 'English',
    birthYear: 1920,
    deathYear: 1992,
    publishedWords: 506
  }
]




function countOfAuthorsWhoLivedOver60Years(arr)
{
  var ageCount = 0;
  //calculate the count of authors who lived over 60 years
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name,(arr[i].deathYear - arr[i].birthYear) > 60) {
      ageCount += 1;
  }
}
return ageCount;
}

var result = countOfAuthorsWhoLivedOver60Years(authors);

console.log('Count of authors who lived over 60 years', result);
