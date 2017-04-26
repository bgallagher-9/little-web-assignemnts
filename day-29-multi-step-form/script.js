var namesDiv = document.querySelector('#names');
var genderDiv = document.querySelector('.gender');
var selectDiv = document.querySelector('#select-menu');
var textDiv = document.querySelector('#textarea');
var nextName = document.querySelector('#next-button');
var nextGender = document.querySelector('#next-gender-button');
var nextSelect = document.querySelector('#select-menu-button');
var nextText = document.querySelector('#submit-button');
var prevGender = document.querySelector('#previous-gender-button');
var prevSelect = document.querySelector('#previous-select-button');
var prevText = document.querySelector('#previous-text-button');
var firstName = document.querySelector('#first-name');
var lastName = document.querySelector('#last-name');
var missingName = document.querySelector('#missing-name');
var genderChoice = document.querySelector('.choice-of-gender');
var select = document.querySelector('select');
var option = document.querySelector('option');



firstName.value = localStorage.getItem('nameFirst');
lastName.value = localStorage.getItem('nameLast');
nextName.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (firstName.value === '' || lastName.value === '') {
    missingName.textContent = "Please fill out the name fields."
  }
  else {
    namesDiv.style.display = 'none';
    genderDiv.style.display = 'block';
  }
  localStorage.setItem('nameFirst', firstName.value);
  localStorage.setItem('nameLast', lastName.value)
});


var male = document.querySelector('#male');
var female = document.querySelector('#female');
var bothgen = document.querySelector('#bothgen');
var dunnogen = document.querySelector('#dunnogen');
var nagen = document.querySelector('#nagen');
var gender = document.querySelector('#gender').getElementsByTagName('INPUT');



 console.log(gender[3].id);


// male.checked = localStorage.getItem('maleRadio');
// female.checked = localStorage.getItem('femaleRadio');
// bothgen.checked = localStorage.getItem('bothRadio');
// dunnogen.checked = localStorage.getItem('dunnoRadio');
// nagen.checked = localStorage.getItem('naRadio');
// console.log(gender);
nextGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].id === gender.checked) {
      localStorage.setItem('gender', gender.id.checked)
    }
    // console.log(gender[i].id, gender[i].checked);
    console.log(gender[i].id.checked);
  }
  // for (var i = 0; i < genderDiv.length; i++) {
  //   if (genderDiv[i].input === genderDiv.input.checked) {
  //   localStorage.setItem('gender', genderDiv.id.checked)
  //   }
  //   console.log(genderDiv.input[i].checked);
  // }
  // console.log(genderDiv.input.checked);
  //queryselectorall to loop thru and find the one that is checked instead of the if/else if...
  // console.log(evt);
  genderDiv.style.display = 'none';
  selectDiv.style.display = 'block';
  // if (male.checked === true) {
  //   // console.log('male', male.checked);
  //   localStorage.setItem('gender', male.checked)
  // }
  // else if (female.checked === true) {
  //   // console.log('female', female.checked);
  //   localStorage.setItem('gender', female.checked)
  // }
  // else if (bothgen.checked === true) {
  //   // console.log('both', bothgen.checked);
  //   localStorage.setItem('gender', bothgen.checked)
  // }
  // else if (dunnogen.checked === true) {
  //   // console.log('dunno', dunnogen.checked);
  //   localStorage.setItem('gender', dunnogen.checked)
  // }
  // else if (nagen.checked === true) {
  //   // console.log('NA', nagen.checked);
  //   localStorage.setItem('gender', nagen.checked)
  // }
});

prevGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  namesDiv.style.display = 'block';
  genderDiv.style.display = 'none';
  if (male.checked === true) {
    // console.log('male', male.checked);
    localStorage.setItem('gender', male.checked)
  }
  else if (female.checked === true) {
    // console.log('female', female.checked);
    localStorage.setItem('gender', female.checked)
  }
  else if (bothgen.checked === true) {
    // console.log('both', bothgen.checked);
    localStorage.setItem('gender', bothgen.checked)
  }
  else if (dunnogen.checked === true) {
    // console.log('dunno', dunnogen.checked);
    localStorage.setItem('gender', dunnogen.checked)
  }
  else if (nagen.checked === true) {
    // console.log('NA', nagen.checked);
    localStorage.setItem('gender', nagen.checked)
  }
});
// var value;
// value = localStorage.getItem('color');


select.value = localStorage.getItem('color');

if (localStorage.getItem('color') === 'red') {
  red.selected;
  // console.log('red', red.selected);
}
else if (localStorage.getItem('color') === 'black') {
  black.selected;
  // console.log('black', black.selected);
}
else if (localStorage.getItem('color') === 'yellow') {
  yellow.selected;
  // console.log('yellow', yellow.selected);
}
else if (localStorage.getItem('color') === 'green') {
  // select.value === 'green';
  console.log('green', green.selected);
  // console.log(select.value);
}
else if (localStorage.getItem('color') === 'no') {
  no.selected;
  console.log('no', no.selected);
};

// console.log(localStorage.getItem('color'));
prevSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  genderDiv.style.display = 'block';
  selectDiv.style.display = 'none';
  var colors = document.getElementsByName('colors')[0]
  var value = colors.options[colors.selectedIndex].value;

  // console.log(value);
  localStorage.setItem('color', value);
  // console.log(select.value)
});
nextSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  textDiv.style.display = 'block';
  selectDiv.style.display = 'none';
  var colors = document.getElementsByName('colors')[0]
  var value = colors.options[colors.selectedIndex].value;
  // console.log(value);
  localStorage.setItem('color', value);
  // console.log(select)
});
prevText.addEventListener('click', function(evt) {
  evt.preventDefault();
  textDiv.style.display = 'none';
  selectDiv.style.display = 'block';
});
