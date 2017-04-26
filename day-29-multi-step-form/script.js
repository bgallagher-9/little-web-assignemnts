var namesDiv = document.querySelector('#names');
var genderDiv = document.querySelector('.gender');
var selectDiv = document.querySelector('#select-menu');
var textDiv = document.querySelector('.textclassarea');
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
var select = document.querySelector('select');
// var option = document.querySelector('option');
var gender = document.querySelector('#gender').getElementsByTagName('INPUT');
var genderChecked = localStorage.getItem('gender');
var textFill = document.querySelector('#textidarea').getElementsByTagName('TEXTAREA');



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

for (var i = 0; i < gender.length; i++) {
  if (gender[i].id === genderChecked) {
    gender[i].checked = true;
    break;
  }
}
nextGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  genderDiv.style.display = 'none';
  selectDiv.style.display = 'block';
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      localStorage.setItem('gender', gender[i].id)
      break;
    }
  //queryselectorall to loop thru and find the one that is checked instead of the if/else if...
  };
});
prevGender.addEventListener('click', function(evt) {
  evt.preventDefault();
  namesDiv.style.display = 'block';
  genderDiv.style.display = 'none';
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      localStorage.setItem('gender', gender[i].id)
      break;
    }
  }
});

select.value = localStorage.getItem('color');

if (localStorage.getItem('color') === 'red') {
  red.selected;
}
else if (localStorage.getItem('color') === 'black') {
  black.selected;
}
else if (localStorage.getItem('color') === 'yellow') {
  yellow.selected;
}
else if (localStorage.getItem('color') === 'green') {
  select.value === 'green';
}
else if (localStorage.getItem('color') === 'no') {
  no.selected;
};

prevSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  genderDiv.style.display = 'block';
  selectDiv.style.display = 'none';
  var colors = document.getElementsByName('colors')[0]
  var value = colors.options[colors.selectedIndex].value;
  localStorage.setItem('color', value);
});
nextSelect.addEventListener('click', function(evt) {
  evt.preventDefault();
  textDiv.style.display = 'block';
  selectDiv.style.display = 'none';
  var colors = document.getElementsByName('colors')[0]
  var value = colors.options[colors.selectedIndex].value;
  localStorage.setItem('color', value);
});


//needs more work*********

// var textArea = document.querySelector('textarea');
console.log(textFill);
textFill = localStorage.getItem('text');
textDiv.addEventListener('keyup', function(evt) {
  // localStorage.setItem('text', textFill.textContent);
  console.log(textDiv.textarea.value);
});
prevText.addEventListener('click', function(evt) {
  evt.preventDefault();
  textDiv.style.display = 'none';
  selectDiv.style.display = 'block';
});
