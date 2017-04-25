var namesDiv = document.querySelector('#names');
var genderDiv = document.querySelector('#gender');
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
var select = document.querySelector('select')[0];
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

male.checked = localStorage.getItem('maleRadio');
female.checked = localStorage.getItem('femaleRadio');
bothgen.checked = localStorage.getItem('bothRadio');
dunnogen.checked = localStorage.getItem('dunnoRadio');
nagen.checked = localStorage.getItem('naRadio');

nextGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  // console.log(evt);
  genderDiv.style.display = 'none';
  selectDiv.style.display = 'block';
  if (male.checked === true) {
    // console.log('male', male.checked);
    localStorage.setItem('maleRadio', male.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (female.checked === true) {
    // console.log('female', female.checked);
    localStorage.setItem('femaleRadio', female.checked)
    localStorage.removeItem('maleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (bothgen.checked === true) {
    // console.log('both', bothgen.checked);
    localStorage.setItem('bothRadio', bothgen.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('maleRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (dunnogen.checked === true) {
    // console.log('dunno', dunnogen.checked);
    localStorage.setItem('dunnoRadio', dunnogen.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('maleRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (nagen.checked === true) {
    // console.log('NA', nagen.checked);
    localStorage.setItem('naRadio', nagen.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('maleRadio', male.checked)
  }
});

prevGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  namesDiv.style.display = 'block';
  genderDiv.style.display = 'none';
  if (male.checked === true) {
    // console.log('male', male.checked);
    localStorage.setItem('maleRadio', male.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (female.checked === true) {
    // console.log('female', female.checked);
    localStorage.setItem('femaleRadio', female.checked)
    localStorage.removeItem('maleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (bothgen.checked === true) {
    // console.log('both', bothgen.checked);
    localStorage.setItem('bothRadio', bothgen.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('maleRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (dunnogen.checked === true) {
    // console.log('dunno', dunnogen.checked);
    localStorage.setItem('dunnoRadio', dunnogen.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('maleRadio', male.checked)
    localStorage.removeItem('naRadio', male.checked)
  }
  else if (nagen.checked === true) {
    // console.log('NA', nagen.checked);
    localStorage.setItem('naRadio', nagen.checked)
    localStorage.removeItem('femaleRadio', male.checked)
    localStorage.removeItem('bothRadio', male.checked)
    localStorage.removeItem('dunnoRadio', male.checked)
    localStorage.removeItem('maleRadio', male.checked)
  }
});
// var value;
// value = localStorage.getItem('color');
if (red === value) {
  localStorage.getItem('color');
}
else if (black.value === value) {
  localStorage.getItem('color');
}
else if (yellow.value === value) {
  localStorage.getItem('color');
}
else if (green.value === value) {
  localStorage.getItem('color');
}
else if (no.value === value) {
  localStorage.getItem('color');
};

prevSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  genderDiv.style.display = 'block';
  selectDiv.style.display = 'none';
  var colors = document.getElementsByName('colors')[0]
  var value = colors.options[colors.selectedIndex].value;

  console.log(value);
  localStorage.setItem('color', value);
  // console.log(select.value)
});
nextSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  textDiv.style.display = 'block';
  selectDiv.style.display = 'none';
  var colors = document.getElementsByName('colors')[0]
  var value = colors.options[colors.selectedIndex].value;
  console.log(value);
  localStorage.setItem('color', value);
  // console.log(select)
});
prevText.addEventListener('click', function(evt) {
  evt.preventDefault();
  textDiv.style.display = 'none';
  selectDiv.style.display = 'block';
});
