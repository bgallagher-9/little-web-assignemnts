var ajaxdata;
var bigImageItems = document.querySelector('#big-image-items').innerHTML;
var thumbnails = document.querySelector('#thumbnails');
var bigImage = document.querySelector('#big-image');
var thumbnailItems = document.querySelector('#thumbnail-items').innerHTML;
var selectImage = document.querySelector('#select-image');
var tNRow = document.querySelector('.tnrow');
var tNImages = document.querySelector('.tnimages');

$.ajax({
  url: '/api/pics'
})
.done(function(data) {
  ajaxData = data;
  // console.log(data);
  var html = '';
  for (var i = 0; i < data.pictures.length; i++) {
    html += Mustache.render(thumbnailItems, {
      index: i,
      thumbnail: data.pictures[i].thumbnail,
      // fullsize: data.pictures[i].fullsize,
      // description: data.pictures[i].description
    });
  };
  thumbnails.innerHTML = html;
  // console.log(thumbnails);
});
thumbnails.addEventListener('click', function(evtname) {
  selectImage.style.display = 'none';
  var index = evtname.target.getAttribute('data-index');
  console.log(index);
  var picThing = ajaxData.pictures[index];
  console.log(picThing);
  var html = Mustache.render(bigImageItems, picThing);
  // console.log(html);
  bigImage.innerHTML = html;
});
